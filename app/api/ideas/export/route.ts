import { db } from '@/db';
import { ideas } from '@/db/schema';
import { NextRequest, NextResponse } from 'next/server';

// GET: Export ideas as CSV
export async function GET(request: NextRequest) {
  try {
    // TODO: Add authentication check

    const data = await db.select().from(ideas);

    // Convert to CSV format
    const headers = ['ID', 'Name', 'LGA', 'Suggestion', 'Created At'];
    const rows = data.map(i => [
      i.id,
      i.name ? `"${i.name}"` : 'Anonymous', // Quote strings to handle commas
      i.lga,
      `"${i.suggestion.replace(/"/g, '""')}"`, // Escape quotes inside the suggestion
      i.createdAt?.toISOString() || ''
    ]);

    const csv = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');

    return new NextResponse(csv, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="ideas-${new Date().toISOString().split('T')[0]}.csv"`,
      },
    });
  } catch (error) {
    console.error('Error exporting ideas:', error);
    return NextResponse.json(
      { error: 'Failed to export ideas' },
      { status: 500 }
    );
  }
}
