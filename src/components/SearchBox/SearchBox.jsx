const SearchBox = ({ onChange }) => {
  const handleChange = event => {
    onChange(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search by name..."
      onChange={handleChange}
    />
  );
};

export default SearchBox;