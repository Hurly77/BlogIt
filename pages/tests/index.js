import Link from 'next/link'
import { useState, useRef } from 'react'

const Test = () => {
  const [text, setText] = useState('')
  const textRef = useRef(null)

  const handleChange = () => {
    setText(textRef.current.value)
    console.log(textRef.current.value)
  }

  return (
    <div>
      <input type="text" ref={textRef} onChange={handleChange} />
      <Link href={`https://${text}.domain.com`}>profile</Link>
    </div>
  )
}

export default Test
