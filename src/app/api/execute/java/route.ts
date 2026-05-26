import { NextRequest, NextResponse } from 'next/server';
import { executeJava } from '@/lib/javaExecutorBridge';

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();
    const result = await executeJava(payload);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { stdout: '', stderr: error instanceof Error ? error.message : 'Executor unavailable', exitCode: 1, durationMs: 0, status: 'runtime_error' },
      { status: 400 },
    );
  }
}
