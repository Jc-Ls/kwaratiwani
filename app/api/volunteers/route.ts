import { db } from '@/db';
import { volunteers } from '@/db/schema';
import { NextRequest, NextResponse } from 'next/server';

// POST: Submit volunteer form
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.fullName || !data.phone || !data.email || !data.lga || !data.supportType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Insert into database
        const result = await db
      .insert(volunteers)
      .values({
        fullName: data.fullName,
        phoneNumber: data.phone,   // <-- FIXED: Changed 'phone' to 'phoneNumber'
        emailAddress: data.email,  // <-- FIXED: Changed 'email' to 'emailAddress'
        lga: data.lga,
        supportType: data.supportType,
      })

      .returning();

    // TODO: Send email notification to admin
    // TODO: Send confirmation email to user

    return NextResponse.json(
      {
        success: true,
        message: 'Application submitted successfully',
        data: result[0]
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting volunteer form:', error);
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    );
  }
}

// GET: Fetch all volunteers (for admin panel)
export async function GET(request: NextRequest) {
  try {
    // TODO: Add authentication check
    const data = await db.select().from(volunteers);
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error('Error fetching volunteers:', error);
    return NextResponse.json(
      { error: 'Failed to fetch volunteers' },
      { status: 500 }
    );
  }
}
