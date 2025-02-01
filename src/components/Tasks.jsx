function Tasks(props) {
  console.log(props);
  return (
    <ul className="">
      {props.tasks.map((task) => (
        <li key={task.id} className="">
          {task.title}
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
