import { NextRequest, NextResponse } from 'next/server'

const INDEXNOW_API_KEY = '58042350c912444da66a78a2d16b4c62'
const SITE_URL = 'https://testmaster-iota.vercel.app'

export async function POST(request: NextRequest) {
  try {
    const { urls } = await request.json()
    
    if (!urls || !Array.isArray(urls)) {
      return NextResponse.json({ error: 'URLs array required' }, { status: 400 })
    }

    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        host: 'testmaster-iota.vercel.app',
        key: INDEXNOW_API_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_API_KEY}.txt`,
        urlList: urls
      })
    })

    if (response.ok) {
      return NextResponse.json({ success: true, message: 'URLs submitted to IndexNow' })
    } else {
      return NextResponse.json({ error: 'IndexNow submission failed' }, { status: 500 })
    }
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}