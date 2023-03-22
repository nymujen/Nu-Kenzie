import './ButtonStyle.css'

export function Button({ typeFilter, values, setFilterList, setIsFilter }) {
  function filter() {
    if (typeFilter !== "todos") {
      const filteredValues = values.filter(
        (value) => value.type === typeFilter
      );
      setFilterList(filteredValues);
      setIsFilter(true)
    } else {
      setIsFilter(false)
    }
  }

  return <button onClick={filter}>{typeFilter}</button>;
}
