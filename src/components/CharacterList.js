import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  let render;

  const userElements = props.characters.map((character) => {
    return (
      <li key={character.id}>
        <CharacterCard character={character} />
      </li>
    );
  });

  if (props.characters.length > 0) {
    render = <ul className="maincontainer_list">{userElements}</ul>;
  } else {
    render = <p className="paragrpahnotfound">0 characters found</p>;
  }

  return render;
};

export default CharacterList;
