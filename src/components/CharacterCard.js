import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

CharacterCard.propTypes = {
  character: PropTypes.exact({
    name: PropTypes.string.isRequired,
    class: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    episodes: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }),
};

export default CharacterCard;
