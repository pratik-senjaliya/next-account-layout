import { NextResponse } from 'next/server';
import { client } from '@/lib/sanity/client';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        // Validate email
        if (!email || typeof email !== 'string') {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            );
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        // Check if email already exists
        const existingSubscription = await client.fetch(
            `*[_type == "newsletterSubscription" && email == $email][0]`,
            { email }
        );

        if (existingSubscription) {
            // If exists and active, return message
            if (existingSubscription.status === 'active') {
                return NextResponse.json(
                    { message: 'You are already subscribed to our newsletter' },
                    { status: 200 }
                );
            }
            // If unsubscribed, reactivate
            await client
                .patch(existingSubscription._id)
                .set({ status: 'active', subscribedAt: new Date().toISOString() })
                .commit();

            return NextResponse.json(
                { message: 'Successfully resubscribed to newsletter!' },
                { status: 200 }
            );
        }

        // Create new subscription
        const result = await client.create({
            _type: 'newsletterSubscription',
            email,
            subscribedAt: new Date().toISOString(),
            status: 'active',
        });

        return NextResponse.json(
            { message: 'Successfully subscribed to newsletter!', data: result },
            { status: 201 }
        );
    } catch (error) {
        console.error('Newsletter subscription error:', error);
        return NextResponse.json(
            { error: 'Failed to process subscription' },
            { status: 500 }
        );
    }
}
