import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid with your API key
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    if (!process.env.SENDGRID_API_KEY) {
      return NextResponse.json(
        { error: 'SendGrid API key is not configured' },
        { status: 500 }
      );
    }

    // Add subscriber to your mailing list
    // This example uses SendGrid's API to send a confirmation email
    await sgMail.send({
      to: email,
      from: process.env.SENDGRID_FROM_EMAIL || 'noreply@almoraorganic.com',
      subject: 'Welcome to Almora Organic Newsletter',
      text: 'Thank you for subscribing to our newsletter!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #92400E;">Welcome to Almora Organic!</h2>
          <p>Thank you for subscribing to our newsletter. You'll receive updates about:</p>
          <ul>
            <li>Seasonal product launches</li>
            <li>Cultural events and festivals</li>
            <li>Farmer stories from the Himalayas</li>
            <li>Exclusive offers and discounts</li>
          </ul>
          <p>Stay connected with the goodness of the Himalayas!</p>
          <p style="color: #666;">The Almora Organic Team</p>
        </div>
      `
    });

    // Store subscriber in your database (implement this based on your database choice)
    // await db.subscribers.create({ email });

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    );
  }
} 