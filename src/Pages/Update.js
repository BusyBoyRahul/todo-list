import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Update() {

    const [id, setId] = useState("");
    const [username, setUsername] = useState("");

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setUsername(localStorage.getItem("username"));
      }, []);


 let navigate = useNavigate();
      const update = (e) => {
        e.preventDefault();
        axios
          .put(`https://64620fde185dd9877e4a080a.mockapi.io/api/v1/todo/${id}`, {
            id: id,
            username: username,
          })
          .then((res) => {
            alert("updated successfully");
            navigate("/read");
          })
          .catch((err) => console.log(err.message));
      };


  return (
    <div>
        <div className="container flex">
        <form className="w-50 mx-auto"
          onSubmit={update}
         >
          <label>ID</label>
          <input type="text" className="form-control" value={id} disabled />
          <label htmlFor="">Username</label>
          <input
            type="text"
            className="form-control my-lg-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit" className="btn btn-warning">
            Register
          </button>
        </form>
      </div> 
    </div>
  )
}
