
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Read() {
    
    let navigate = useNavigate();
    const [username, setUsername] = useState([]);
 axios.get("https://64620fde185dd9877e4a080a.mockapi.io/api/v1/todo")
 .then((response) => {
    console.log(response.data);
    setUsername(response.data);

  })
  .catch((err) => console.log(err.message));

  const deleterecord = (del) => {
     if (window.confirm("r u sure u want to delete the record")) {
      axios
        .delete(`https://64620fde185dd9877e4a080a.mockapi.io/api/v1/todo/${del}`)
        .then((res) => {
          
          alert("deleted successfully");
        //   window.location.reload();
          navigate("/read");
        })
        .catch((err) => console.log(err.message));
     }
  };

  const editRecord = (id, username) => {
    localStorage.setItem("id", id);
    localStorage.setItem("username", username);
  };


  return (
    <div>
      <div className="container">
      <table className="table table-bordered bg-warning">
        <tr>
          <th>ID</th>
          <th>USERNAME</th>
          
          <th>Operations</th>
        </tr>
        {username.map((item) => {
          return (
            <>
              <tr>
                <td>{item.id}</td>
                <td>{item.username}</td>
                
                <td>
                  <Link to="/update">
                    <button
                      className="btn bg-primary"
                    onClick={() =>
                         editRecord(item.id, item.username)
                      }
                    >
                      Edit
                    </button>
                  </Link> 
                  <button
                    className="btn bg-danger"
                    onClick={() => deleterecord(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </>
          );
        })}
      </table>
    </div>
    </div>
  )
}
