import { NextResponse } from 'next/server';
import { getInstagramImages } from '@/lib/images';

export async function GET() {
  const images = getInstagramImages();
  return NextResponse.json(images);
}
