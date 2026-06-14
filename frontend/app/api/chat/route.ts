import { NextRequest, NextResponse } from 'next/server';

import { API_URL } from '@/lib/config';
const BACKEND_URL = API_URL;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await fetch(`${BACKEND_URL}/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Chat proxy error:', error);
    return NextResponse.json(
      { reply: "Sorry, I'm currently unavailable. Please call Noble Classes at 9820023732." },
      { status: 500 }
    );
  }
}
