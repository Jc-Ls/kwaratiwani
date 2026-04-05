import { db } from '@/db';
import { volunteers } from '@/db/schema';
import { NextRequest, NextResponse } from 'next/server';

// GET: Export volunteers as CSV
export async function GET(request: NextRequest) {
  try {
    // TODO: Add authentication check

    const data = await db.select().from(volunteers);

    // Convert to CSV format
    const headers = ['ID', 'Full Name', 'Phone', 'Email', 'LGA', 'Support Type', 'Created At'];
    const rows = data.map(v => [
      v.id,
      `"${v.fullName}"`, // Quote strings to handle commas
      v.phone,
      v.email,
      v.lga,
      v.supportType,
      v.createdAt?.toISOString() || ''
    ]);

    const csv = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');

    return new NextResponse(csv, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="volunteers-${new Date().toISOString().split('T')[0]}.csv"`,
      },
    });
  } catch (error) {
    console.error('Error exporting volunteers:', error);
    return NextResponse.json(
      { error: 'Failed to export volunteers' },
      { status: 500 }
    );
  }
}
