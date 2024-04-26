import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Styles/AddTask.css";
import Navbar from "./Navbar";

function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [editableId, setEditableId] = useState(null);
  const [editedTask, setEditedTask] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedStatus, setEditedStatus] = useState("");
  const [editedDeadline, setEditedDeadline] = useState("");
  const [newTask, setNewTask] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newStatus, setNewStatus] = useState("incomplete"); // Default status
  const [newDeadline, setNewDeadline] = useState("");

  // Fetch tasks from database
  useEffect(() => {
    axios
      .get("https://backend-todoist.onrender.com/getTodoList")
      .then((result) => {
        setTodoList(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Function to toggle the editable state for a specific row
  const toggleEditable = (id) => {
    const rowData = todoList.find((data) => data._id === id);
    if (rowData) {
      setEditableId(id);
      setEditedTask(rowData.task);
      setEditedDescription(rowData.Description);
      setEditedStatus(rowData.status);
      setEditedDeadline(rowData.deadline || "");
    } else {
      setEditableId(null);
      setEditedTask("");
      setEditedDescription("");
      setEditedStatus("");
      setEditedDeadline("");
    }
  };

  // Function to toggle task completion status
  const toggleTaskCompletion = (id, completedStatus) => {
    axios
      .post(`https://backend-todoist.onrender.com/updateTodoList/${id}`, {
        completed: completedStatus,
      })
      .then((result) => {
        console.log(result);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  // Function to add task to the database
  const addTask = (e) => {
    e.preventDefault();
    if (!newTask || !newDescription || !newDeadline || !newStatus) {
      alert("All fields must be filled out.");
      return;
    }

    axios
      .post("https://backend-todoist.onrender.com/addTodoList", {
        task: newTask,
        Description: newDescription,
        deadline: newDeadline,
        status: newStatus,
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  // Function to save edited data to the database
  const saveEditedTask = (id) => {
    const editedData = {
      task: editedTask,
      Description: editedDescription,
      deadline: editedDeadline,
      status: editedStatus,
    };

    // If the fields are empty
    if (!editedTask || !editedDescription || !editedDeadline || !editedStatus) {
      alert("All fields must be filled out.");
      return;
    }

    // Updating edited data to the database through updateById API
    axios
      .post("https://backend-todoist.onrender.com/updateTodoList/" + id, editedData)
      .then((result) => {
        console.log(result);
        setEditableId(null);
        setEditedTask("");
        setEditedDescription("");
        setEditedStatus("");
        setEditedDeadline(""); // Clear the edited deadline
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  const [username, setUsername] = useState(""); // State for storing username

  useEffect(() => {
    const storedName = localStorage.getItem("username");
    if (storedName) {
      setUsername(storedName);
    }

    axios
      .get("https://backend-todoist.onrender.com/getTodoList")
      .then((result) => {
        setTodoList(result.data);
      })
      .catch((err) => console.log(err));
  }, []);


  // Function to delete task from the database
  const deleteTask = (id) => {
    axios
      .delete("https://backend-todoist.onrender.com/deleteTodoList/" + id)
      .then((result) => {
        console.log(result);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
	
    <div className="container-fluid">
		<Navbar />
		 {username && <h3 id="username">Welcome, {username}!</h3>}
      <div className="row justify-content-center">
       
        <div className="col-md-5 mt-4">
          <h2 className="text-center">Add Task</h2>
          <form className="bg-light p-4">
            <div className="mb-3">
              <label>Task</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter Task"
                onChange={(e) => setNewTask(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Description</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter Description"
                onChange={(e) => setNewDescription(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Deadline</label>
              <input
                className="form-control"
                type="datetime-local"
                onChange={(e) => setNewDeadline(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Status</label>
              <select
                className="form-control"
                onChange={(e) => setNewStatus(e.target.value)}
              >
                <option value="incomplete">Incomplete</option>
                <option value="complete">Complete</option>
              </select>
            </div>
            <button onClick={addTask} className="btn btn-success btn-sm">
              Add Task
            </button>
          </form>
        </div>
		
      </div>
	 <div className="row justify-content-center mt-5">
	 <div className="col-md-7 mt-5">
          <h2 className="text-center mt-3">Todo List</h2>
          <div className="table-responsive" id="todotable">
            <table className="table table-bordered">
              <thead className="table-primary">
                <tr>
                  <th id="taskcol">Task</th>
                  <th>Description</th>
                  <th>Deadline</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {todoList.map((data) => (
                  <tr key={data._id}>
                    <td>
                      {editableId === data._id ? (
                        <input
                          type="text"
                          className="form-control"
                          value={editedTask}
                          onChange={(e) => setEditedTask(e.target.value)}
                        />
                      ) : (
                        data.task
                      )}
                    </td>
                    <td>
                      {editableId === data._id ? (
                        <input
                          type="text"
                          className="form-control"
                          value={editedDescription}
                          onChange={(e) =>
                            setEditedDescription(e.target.value)
                          }
                        />
                      ) : (
                        data.Description
                      )}
                    </td>
                    <td>
                      {editableId === data._id ? (
                        <input
                          type="datetime-local"
                          className="form-control"
                          value={editedDeadline}
                          onChange={(e) =>
                            setEditedDeadline(e.target.value)
                          }
                        />
                      ) : (
                        data.deadline
                          ? new Date(data.deadline).toLocaleString()
                          : ""
                      )}
                    </td>
                    <td>
                      {editableId === data._id ? (
                        <select
                          className="form-control"
                          value={editedStatus}
                          onChange={(e) => setEditedStatus(e.target.value)}
                        >
                          <option value="incomplete">Incomplete</option>
                          <option value="complete">Complete</option>
                        </select>
                      ) : (
                        data.status
                      )}
                    </td>
                    <td>
                      {editableId === data._id ? (
                        <button
                          id="savebtn"
                          onClick={() => saveEditedTask(data._id)}
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          id="editbtn"
                          onClick={() => toggleEditable(data._id)}
                        >
                          Edit
                        </button>
                      )}
                      <button
                        id="deletebtn"
                        onClick={() => deleteTask(data._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
	 </div>
    </div>
  );
}

export default Todo;
