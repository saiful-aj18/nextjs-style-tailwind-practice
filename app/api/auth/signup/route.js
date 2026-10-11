import { NextResponse } from 'next/server'

// Demo Users
let users = [];

export async function POST(request) {
  const { name, email, password } = await request.json();

  // Check Required Fields
  if(!name || !email || !password) {
    return NextResponse.json(
      { message: 'All fields are required' },
      { status: 400 }
    )
  }

  // Check Existing User
  const existingUser = users.find(user => user.email === email)

  if(existingUser) {
    return NextResponse.json(
      { message: 'User already exists' },
      { status: 400 }
    )
  }

  // else
  const user = {
    // id: crypto.randomUUID()
    id: users.length + 1,
    name,
    email,
    password,
    role: 'user'
  }

  users.push(user);

  return NextResponse.json({
    message: 'Signup Successful'
  })
}