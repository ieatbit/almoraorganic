import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Temporary storage for emails (replace with database later)
let subscribers: string[] = [];

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Store email in temporary array (replace with database later)
    subscribers.push(email);
    console.log('New subscriber:', email);

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