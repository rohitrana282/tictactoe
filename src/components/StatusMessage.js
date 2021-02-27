import React from 'react'

const StatusMessage = ({winner,current}) => {
  //const message = winner ? `Winner is ${winner}` : `Next Player is ${current.isXNext ?'X' : '0'}`;
  
  const noMovesLeft = current.board.every(el => el !==null);

  return (
    <div>
      <h2>{ winner && `Winner is ${winner}`}
          {!winner && !noMovesLeft && `Next Player is ${current.isXNext ?'X' : '0'}`}
          {!winner && noMovesLeft && 'X and 0 tied'}
      </h2>
    </div>
  )
}

export default StatusMessage
