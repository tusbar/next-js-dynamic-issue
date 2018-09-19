import React from 'react'

export default ({children}) => (
  <div>
    {children}

    <style jsx>{`
      div {
        border: 1px solid red;
        margin-bottom: 10px;
        padding: 5px;
      }
    `}</style>
  </div>
)
