import { supabaseServerClient } from '@/lib'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    await supabaseServerClient.auth.exchangeCodeForSession(code)
  }

  return NextResponse.redirect(new URL('/', request.url))
} 