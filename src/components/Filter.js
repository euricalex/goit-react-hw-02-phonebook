import { FilterInput } from "./Formstyle/Formstyle";

const Filter = ({ filterValue, onFilterChange }) => {
    return (
      <FilterInput
        type="text"
        placeholder="Search by name"
        value={filterValue}
        onChange={onFilterChange}
      />
    );
  };
  
  export default Filter;
  