import { NextResponse } from 'next/server';

import { getPostsData } from '@/lib/utils/server-utils';

export function GET(req: any, res: any) {
  const posts = getPostsData();
  return NextResponse.json({
    code: 200,
    message: 'ok',
    data: posts,
  });
}
