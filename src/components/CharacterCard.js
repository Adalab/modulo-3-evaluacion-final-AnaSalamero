import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
  return (
    <Link to={`/character/${props.character.id}`}>
      <article>
        <img
          src={props.character.photo}
          alt={props.character.name}
          title={props.character.name}
        />
        <h4>{props.character.name}</h4>
        <p>{props.character.class}</p>
      </article>
    </Link>
  );
};

export default CharacterCard;
