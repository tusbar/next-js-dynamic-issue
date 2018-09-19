import React from 'react'
import dynamic from 'next/dynamic'

export default dynamic(import('../components/message'), {
  loading: () => (
    <div>
      Loading…
    </div>
  ),
  ssr: false
})
