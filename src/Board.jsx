import React from 'react'

export default function Board({ board }) {
    return (
        <div className='board'>
            {board.map((piece, item) => {
                return <div key={item}>
                    <p>{JSON.stringify(piece)}</p>

                </div>
            })}
        </div>
    )
}
