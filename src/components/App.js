import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router';

//components
import CharacterList from './CharacterList';
import CharacterDetails from './CharacterDetails';
import FilterName from './FilterName';
import logo from '../images/logo.png';

//services
import getApiData from '../services/api';
import ls from '../services/local-storage';

//styles
import '../stylesheets/index.scss';

function App() {
  const [characters, setCharacters] = useState(ls.get('characters', []));
  const [filterbyName, setFilterbyName] = useState(ls.get('filterbyName', ''));

  //effects
  useEffect(() => {
    if (characters.length === 0) {
      getApiData().then((charactersData) => {
        const sortedCharactersData = [...charactersData].sort((a, b) =>
          a.name > b.name ? 1 : a.name < b.name ? -1 : 0
        );
        setCharacters(sortedCharactersData);
      });
    }
  }, [characters.length]);

  useEffect(() => {
    ls.set('characters', characters);
  }, [characters]);

  useEffect(() => {
    ls.set('filterbyName', filterbyName);
  }, [filterbyName]);

  // event handlers
  const handleFilter = (data) => {
    if (data.key === 'name') {
      setFilterbyName(data.value);
    }
  };

  //render
  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterbyName.toLowerCase());
  });

  const renderCharacterDetail = (props) => {
    const characterId = parseInt(props.match.params.characterId);
    const foundCharacter = characters.find((character) => {
      return character.id === characterId;
    });

    if (
      foundCharacter !== undefined &&
      `${characterId}` === props.match.params.characterId
    ) {
      return <CharacterDetails info={foundCharacter} />;
    } else {
      return <p>Character not found</p>;
    }
  };

  return (
    <>
      <section className="maincontainer_section1">
        <h1 className="maincontainer_section1-title">Rick and Morty</h1>
        <img
          src={logo}
          alt="logo"
          title="Rick and Morty Character Searcher"
          className="maincontainer_section1-logo"
        />
      </section>
      <Switch>
        <Route exact path="/">
          <FilterName handleFilter={handleFilter} filterbyName={filterbyName} />
          <CharacterList characters={filteredCharacters} />
        </Route>
        <Route path="/character/:characterId" render={renderCharacterDetail} />
      </Switch>
    </>
  );
}

export default App;
