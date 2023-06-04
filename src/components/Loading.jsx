/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'

function Delayed({ children, wait = 500 }) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const timeout = window.setTimeout(() => setReady(true), wait)

    return () => window.clearTimeout(timeout)
  }, [wait, children])

  return ready === true ? children : null
}

export default function Loading() {
  return (
    <Delayed>
      <div className="loading center" />
    </Delayed>
  )
}
