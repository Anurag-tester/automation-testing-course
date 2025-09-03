export async function submitToIndexNow(urls: string[]) {
  if (process.env.NODE_ENV !== 'production') return

  try {
    await fetch('/api/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ urls })
    })
  } catch (error) {
    console.error('IndexNow submission failed:', error)
  }
}