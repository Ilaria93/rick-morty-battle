import styles from './styles.module.css';

export const SelectCharacter = ({ onStartClick, characters }) => {
  console.log(characters);
  return (
    <div className={styles.main}>
      <div className={styles.characterContainer}>
        {characters.map((character, index) => {
          return (
            <div key={index} className={styles.characterBox}>
              <img src={character.img}></img>
              <p>{character.name}</p>
            </div>
          );
        })}
      </div>

      <button className={styles.startButton} onClick={onStartClick}>
        Start Game!
      </button>
    </div>
  );
};
