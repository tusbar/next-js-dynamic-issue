import React from 'react'
import Link from 'next/link'

import Message from '../components/dynamic-message'

export default class extends React.Component {
  render() {
    return (
      <div>
        <Message>
          About page
        </Message>

        <Link href='/'>
          <a>home</a>
        </Link>
      </div>
    )
  }
}
