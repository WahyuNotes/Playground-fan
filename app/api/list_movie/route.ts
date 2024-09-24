import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const category = searchParams.get('category') ?? 'now_playing'
  const page = searchParams.get('page') ?? '1'

  const apiUrl = `${process.env.REACT_APP_MOVIEURL}/${category}?language=en-US&page=${page}`

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        accept: 'application/json',
      },
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json(
        { message: data.status_message },
        { status: response.status },
      )
    }

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { message: 'Something went wrong', error },
      { status: 500 },
    )
  }
}
