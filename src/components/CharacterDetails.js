import { Link } from 'react-router-dom';

const CharacterDetails = (props) => {
  return (
    <div key={props.info.id}>
      <Link className="characterdetaillink" to="/">
        {`< `}Go back
      </Link>
      <header>
        <h2 className="characterdetail_title">{props.info.name}</h2>
      </header>
      <section className="characterdetail_section">
        <img
          src={props.info.photo}
          alt={props.info.name}
          title={props.info.name}
          className="characterdetail_section-img"
        />
        <ul className="characterdetail_section-list">
          <li>
            <span className="characterdetail_section-listele">Status</span>
            {props.info.status}
          </li>
          <li>
            <span className="characterdetail_section-listele">Species</span>
            {props.info.class}
          </li>
          <li>
            <span className="characterdetail_section-listele">Origin</span>
            {props.info.origin}
          </li>
          <li>
            <span className="characterdetail_section-listele">Episodes</span>
            {props.info.episodes}
          </li>
        </ul>
      </section>
    </div>
  );
};

export default CharacterDetails;
