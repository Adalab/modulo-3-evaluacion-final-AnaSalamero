import { Link } from 'react-router-dom';

const CharacterDetails = (props) => {
  return (
    <div key={props.info.id}>
      <Link to="/">{`< `}Go back</Link>
      <header>
        <h2>{props.info.name}</h2>
      </header>
      <section>
        <img
          src={props.info.photo}
          alt={props.info.name}
          title={props.info.name}
        />
        <ul>
          <li>Status: {props.info.status}</li>
          <li>Species: {props.info.class}</li>
          <li>Origin: {props.info.origin}</li>
          <li>Episodes: {props.info.episodes}</li>
        </ul>
      </section>
    </div>
  );
};

export default CharacterDetails;
