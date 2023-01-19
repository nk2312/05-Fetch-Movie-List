import Card from "../UI/Card";
import useHttp from "../hooks/useHttp";
import TaskForm from "./TaskForm";
import '../../index.css';

const AddItem = (props) => {
  const { isloading, error, sendRequest: sendTaskRequest } = useHttp();
  console.log(useHttp);

  const createTask = (taskData,data) => {
    const generatedId = data.name;
    const task = { id: generatedId, text: taskData };
    props.onAddTask(task);
  };

  async function sendData(taskdata) {
    sendTaskRequest(
      {
        url: "https://custom-http-app-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        body: { text: taskdata },
        headers: { "Context-Type": "application/json" },
      },
      createTask.bind(null,taskdata)
      //using bind function make sure that whenever
      //we call createTask function from any where
      //the parameter at that time will be appended at the end
    );
  }

  return (
    <Card customCardClass="add-item">
      {isloading && <p>Loading.....</p>}
      <TaskForm onEnterTask={sendData} />
      {error && <p>{error}</p>}
    </Card>
  );
};
export default AddItem;
