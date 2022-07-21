import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { Battle } from 'components/Battle/Battle';
import { EndMenu } from 'components/EndMenu/EndMenu';
import { StartMenu } from 'components/StartMenu';
import { SelectCharacter } from 'components/Characters/SelectCharacter';
import { characters } from 'components/Characters/Figure';

export const App = () => {
  const [winner, setWinner] = useState();
  const [mode, setMode] = useState('start');

  useEffect(() => {
    if (mode === 'battle') {
      setWinner(undefined);
    }
  }, [mode]);

  return (
    <div className={styles.main}>
      {mode === 'start' && (
        <StartMenu onStartClick={() => setMode('battle')} />
      )}

      {mode === 'battle' && (
        <Battle
          onGameEnd={winner => {
            setWinner(winner);
            setMode('gameOver');
          }}
        />
      )}
      {mode === 'gameOver' && !!winner && (
        <EndMenu winner={winner} onStartClick={() => setMode('battle')} />
      )}
    </div>
  );
};
