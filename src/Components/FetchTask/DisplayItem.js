
import Card from "../UI/Card"
import Item from "./Item"

const DisplayItem=(props)=>{

   let taskList=<h2>No task found..start adding something!</h2>

   if(props.items.length>0){
      taskList=(<ul>
         {props.items.map(task=><Item key={task.id}>{task.text}</Item>)}
      </ul>)
   }

   return <Card customCardClass="display-item">{taskList}</Card>

}

export default DisplayItem;

