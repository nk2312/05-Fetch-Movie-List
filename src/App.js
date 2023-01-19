import React from "react";
import AddItem from "./Components/SendTask/AddItem";
import DisplayItem from "./Components/FetchTask/DisplayItem";
import { useEffect, useState } from "react";
import useHttp from "./Components/hooks/useHttp";

function App() {
  const [list, setList] = useState([]);

  const { isloading, error, sendRequest: fetchData } = useHttp();

  useEffect(() => {
    const applyData = (data) => {
      const loadedArray = [];
      for (const key in data) {
        loadedArray.push({ id: key, text: data[key].text });
      }
      setList(loadedArray);
    };
    fetchData(
      { url: "https://custom-http-app-default-rtdb.firebaseio.com/tasks.json" },
      applyData
    );
  }, [fetchData]);

  const taskAddHandler = (task) => {
    setList((prevState) => {
      return prevState.concat(task);
    });
  };

  return (
    <React.Fragment>
      {error && <h1 className="error">{error}</h1>}
      <AddItem onAddTask={taskAddHandler} />
      <DisplayItem items={list} onFetch={fetchData} />
    </React.Fragment>
  );
}

export default App;
