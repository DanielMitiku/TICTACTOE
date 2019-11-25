const playerFactory = (name, mark) => {
  playTurn = (board, cell) => {
    const idx = board.cells.findIndex((position) => position === cell);

    if (board.boardArray[idx] === '') {
      board.boardArray[idx] = `${mark}`;
    } else {
      return null;
    }
    board.render();
  };

  return { name, mark, playTurn };
};