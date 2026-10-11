import { NextResponse } from 'next/server'
import { createToken } from '@/lib/auth'

// Demo User
const users = [
  {
    id: 1,
    name: 'John',
    email: 'johnwick@gmail.com',
    password: '123456',
    role: 'admin'
  },
  {
    id: 2,
    name: 'Jane',
    email: 'jane@gmail.com',
    password: '123456',
    role: 'user'
  },
]

export async function POST(request) {
  const { email, password } = await request.json();

  // Find User
  const user = users.find(
    user =>
      user.email === email
      &&
      user.password === password
  )

  if(!user) {
    return NextResponse.json(
      { message: 'Invalid Email or Password' },
      { status: 401 }
    )
  }

  // Create JWT
  const token = createToken(user)

  // Create Response
  const response = NextResponse.json({
    message: 'Login successful'
  })

  // Store JWT in HttpOnly Cookie
  response.cookies.set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 1000 * 60 * 7,
    path: '/'
  })

  return response;
}