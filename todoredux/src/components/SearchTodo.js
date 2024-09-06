const SearchTodo = ({ setSearchTodo }) => {
  return (
    <input
      type="text"
      className="todo-input"
      placeholder="Find the task?"
      onChange={(e) => setSearchTodo(e.target.value)}
    />
  );
};

export default SearchTodo;
