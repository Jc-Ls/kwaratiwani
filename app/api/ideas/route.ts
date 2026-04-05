import { db } from '@/db';
import { ideas } from '@/db/schema';
import { NextRequest, NextResponse } from 'next/server';

// POST: Submit ideas/suggestions form
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.lga || !data.suggestion) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Insert into database
    const result = await db
      .insert(ideas)
      .values({
        name: data.name || null,
        lga: data.lga,
        suggestion: data.suggestion,
      })
      .returning();

    // TODO: Send email notification to admin

    return NextResponse.json(
      {
        success: true,
        message: 'Idea submitted successfully',
        data: result[0]
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting idea form:', error);
    return NextResponse.json(
      { error: 'Failed to submit idea' },
      { status: 500 }
    );
  }
}

// GET: Fetch all ideas (for admin panel)
export async function GET(request: NextRequest) {
  try {
    // TODO: Add authentication check
    const data = await db.select().from(ideas);
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error('Error fetching ideas:', error);
    return NextResponse.json(
      { error: 'Failed to fetch ideas' },
      { status: 500 }
    );
  }
}
