const FilterName = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: 'name',
    });
  };

  return (
    <form className="maincontainer_form" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        placeholder="search for a character"
        value={props.filterbyName}
        className="maincontainer_form-input"></input>
    </form>
  );
};

export default FilterName;
