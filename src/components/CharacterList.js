import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  let render;

  const userElements = props.characters.map((character) => {
    return <CharacterCard key={character.id} character={character} />;
  });

  if (props.characters.length > 0) {
    render = userElements;
  } else {
    render = <p>0 characters found</p>;
  }

  return <section>{render}</section>;
};

export default CharacterList;
