import FilterName from './FilterName';
import FilterSpecies from './FilterSpecies';

const Filters = (props) => {
  return (
    <section>
      <FilterName
        handleFilter={props.handleFilter}
        filterbyName={props.filterbyName}
      />

      <FilterSpecies
        handleFilter={props.handleFilter}
        filterbySpecies={props.filterbySpecies}
      />
    </section>
  );
};

export default Filters;
