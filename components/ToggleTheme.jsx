'use client'

import { useState } from "react"

const ToggleTheme = ({ children }) => {
  const [dark, setDark] = useState(false)

  const darkStyle = 'bg-white text-black'
  const lightStyle = 'bg-black text-white'

  return (
    <button
      onClick={() => setDark(!dark)}
      className={dark ? darkStyle : lightStyle}
    >
      { children }
    </button>
  )
}

export default ToggleTheme;