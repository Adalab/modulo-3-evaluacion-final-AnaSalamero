const FilterSpecies = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: 'class',
    });
    console.log(ev.target.value);
  };

  return (
    <form className="maincontainer_form" onSubmit={handleSubmit}>
      <label className="maincontainer_label" htmlFor="class">
        Species:
      </label>
      <select
        name="class"
        id="class"
        onChange={handleChange}
        value={props.filterbySpecies}
        className="maincontainer_form-input">
        <option value="">All</option>
        <option value="Alien">Alien</option>
        <option value="Human">Human</option>
      </select>
    </form>
  );
};

export default FilterSpecies;
