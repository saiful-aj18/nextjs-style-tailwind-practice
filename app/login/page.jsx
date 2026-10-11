'use client'

import { useRouter } from "next/navigation.js"
import { useState } from "react"

const LoginPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    // Send Login request
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })

    const data = await response.json();

    alert(data.message);

    if(response.ok) {
      router.push('/dashboard')
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />

      <button type="submit">
        Login
      </button>
    </form>
  )
}

export default LoginPage;