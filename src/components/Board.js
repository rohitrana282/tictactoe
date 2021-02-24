import React from 'react'
import Square from './square'

const Board = () => {
  return (
    <div>
      <div>
        <Square value={1} />
        <Square value={2} />
        <Square value={3} />
      </div>
      
      <div>
        <Square/>
        <Square/>
        <Square/>
      </div>

      <div>
        <Square/>
        <Square/>
        <Square/>
      </div>
    </div>
  )
}

export default Board
