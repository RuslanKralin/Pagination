import React from 'react'

function ButtonGroup({
  pageButtons,
  setCurrentPage
}: {
  pageButtons: number
  setCurrentPage: (i: number) => void
}) {
  let arrBtn: number[] = []

  {
    for (let i = 1; i <= pageButtons; i++) {
      arrBtn.push(i)
    }
  }
  return (
    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
      {arrBtn &&
        arrBtn.map((i) => (
          <button
            style={{ border: '1px solid blue', padding: '0.5rem', borderRadius: '5px' }}
            onClick={() => setCurrentPage(i)}
          >
            {i}
          </button>
        ))}
    </div>
  )
}

export default ButtonGroup
