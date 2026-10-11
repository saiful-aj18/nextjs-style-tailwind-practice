'use client'

import { useRouter } from "next/navigation.js"
import { useState } from "react"

const SignupPage = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleSubmit = async e => {
    e.preventDefault();

    // Send Signup request
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(form)
    })

    const data = await response.json();

    alert(data.message);

    if(response.ok) {
      router.push('/login')
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        onChange={e => setForm(
          { ...form, name: e.target.value }
        )}
      />

      <input
        type="email"
        placeholder="Email"
        onChange={e => setForm(
          { ...form, email: e.target.value }
        )}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={e => setForm(
          { ...form, password: e.target.value }
        )}
      />

      <button type="submit">
        Signup
      </button>
    </form>
  )
}

export default SignupPage;