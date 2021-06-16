import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
  return (
    <Link to={`/character/${props.character.id}`}>
      <article className="charactercard">
        <img
          src={props.character.photo}
          alt={props.character.name}
          title={props.character.name}
          className="charactercard_img"
        />
        <h4 className="charactercard_name">{props.character.name}</h4>
        <p className="charactercard_class">{props.character.class}</p>
      </article>
    </Link>
  );
};

export default CharacterCard;
