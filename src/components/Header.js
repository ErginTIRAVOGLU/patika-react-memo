import React from 'react'

function Header({number,data,increment}) {
    console.log("Header component rerendered");
  return (
    <>
    <div>Header</div>
    <h3>{number}</h3>
    <br />
    <br />
    <button onClick={increment}>Click</button>

    <code>{JSON.stringify(data)}</code>
    </>
  )
}

export default React.memo(Header)