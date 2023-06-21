import React, { useState, useEffect } from 'react'

export default function StateAsyncEmail() {
  // useState(initValue) -> [getter, setter]
  const [email, setEmail] = useState('')

  // 送到伺服器檢查
  const checkEmailFromServer = (email) => {
    console.log(email)
    // send to email
  }

  useEffect(() => {
    checkEmailFromServer(email) // 這裡⽤可以得到email變動後的值
  }, [email])

  return (
    <>
      <h1>State異步範例</h1>
      <hr />
      Email:
      <input
        type="text"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value)
        }}
      />
    </>
  )
}
