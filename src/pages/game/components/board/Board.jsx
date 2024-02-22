import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { QuestionSvg } from 'src/assets/icons';
import { Sprites } from 'src/components';
import { useAudio } from 'src/hooks';
import classNames from 'classnames';
import './board.scss';

function Board() {
  const sfx = useAudio();
  const dispatch = useDispatch();
  const { score, cells, openCells, successCells } = useSelector((state) => state.board);
  const { bestScore } = useSelector((state) => state.progress);
  const { current } = useSelector((state) => state.levels);

  useEffect(() => {
    dispatch.board.reset(current);
  }, [current]);

  useEffect(() => {
    checkGameOver();
  }, [successCells.size]);

  function cellStateClasses(cell, i) {
    return successCells.has(cell)
      ? 'board-cell flip success'
      : openCells.includes(i)
      ? 'board-cell flip'
      : 'board-cell';
  }

  function checkGameOver() {
    if (successCells.size === 0) return;
    if (successCells.size === cells.length / 2) {
      sfx.win.play();
      dispatch.modals.open('gameover');
      dispatch.progress.updateBestScore(Math.max(score, bestScore));
    } else {
      sfx.success.play();
    }
  }

  function isCanOpenCell(id, i) {
    // Prevent opening more than 2 cells
    if (openCells[1] >= 0) return false;
    // Prevent repeated clicks on already open or successful cells
    if (i === openCells[0] || i === openCells[1] || successCells.has(id)) return false;
    return true;
  }

  function openCell(id, i) {
    if (!isCanOpenCell(id, i)) return;
    sfx.whoosh.play();
    dispatch.board.open({ i, id });
    if (openCells[1] >= 0) {
      setTimeout(dispatch.board.hide, 1000);
    }
  }

  return (
    <main>
      <div className={classNames('board', `size-${current}`)}>
        {cells.map((cell, i) => (
          <div
            key={i}
            data-id={cell}
            className={cellStateClasses(cell, i)}
            onClick={() => openCell(cell, i)}
          >
            <p className="hidden-svg">{cell}</p>
            <QuestionSvg className="question-svg" />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Board;
