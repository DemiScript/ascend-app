const TodoList = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
      {/* head */}
      <thead>
        <tr className="bg-base-200">
          <th></th>
          <th>Task Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        <tr>
          <th>1</th>
          <td>Cy Ganderton</td>
          <td>Quality Control Specialist</td>
          <td>Blue</td>
        </tr>
        
      </tbody>
    </table>
  </div>
  );
};

export default TodoList;