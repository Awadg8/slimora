import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Add your validation logic here
    // Example: validate BMI calculation data
    
    // Process the data
    // Example: calculate BMI, check eligibility criteria, etc.
    
    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Eligibility check completed',
        data: body 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to process eligibility check',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
