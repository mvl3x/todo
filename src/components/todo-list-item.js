const TodoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? "tomato" : "black",
  };

  return (
    <div>
      <span style={style}>{label}</span>

      <button type="button">delete</button>
      <button type="button">important</button>
    </div>
  );
};

export default TodoListItem;
