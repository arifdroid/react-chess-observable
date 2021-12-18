import logo from './logo.svg';
import './App.css';
import { gameSubject$ } from './Game';
import { useEffect, useState } from 'react';
import Board from './Board';

function App() {

  //state
  const [board, setBoard] = useState([]);

  useEffect(() => {

    const subscribe = gameSubject$.subscribe((game) => setBoard(game.board))

    return () => subscribe.unsubscribe();

  }, [])


  return (
    <div>
      <Board board={board}></Board>
    </div>
  )
}

export default App;
