import { FaPlus } from "react-icons/fa6";

const AddTask = () => {
    return (
      <div>
        <button className="btn btn-primary w-full">Add New Task
        <FaPlus size={18}/></button>
      </div>
    );
};

export default AddTask;