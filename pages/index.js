import React from 'react'
import Link from 'next/link'

import Message from '../components/dynamic-message'

export default class extends React.Component {
  render() {
    return (
      <div>
        <Message>
          Hello world!
        </Message>

        <Link href='/about'>
          <a>about</a>
        </Link>
      </div>
    )
  }
}
