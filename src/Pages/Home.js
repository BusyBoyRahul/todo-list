import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { HiDocumentAdd } from 'react-icons/hi';
import { RiFileEditFill } from 'react-icons/ri';
import { AiFillDelete } from 'react-icons/ai';



function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  let navigate = useNavigate();




  const handleSubmit = (e) => {
    if (title == "" || description == "") {
      alert("enter text");
    } else {
      e.preventDefault();
      axios
        .post("https://64620fde185dd9877e4a080a.mockapi.io/api/v1/todo", {
          title: title,
          description: description,
        })
        .then((response) => {
          document.getElementById("title").value = "";
          document.getElementById("description").value = "";
          setTitle("");
          setDescription("");

          // alert("Registered Successfully");
          navigate("/");
        })
        .catch((err) => console.log(err.message));
      console.log(title);
    };
  }


  const [dataz, setDataz] = useState([]);
  axios.get("https://64620fde185dd9877e4a080a.mockapi.io/api/v1/todo")
    .then((response) => {
      console.log(response.data);
      setDataz(response.data);

    })
    .catch((err) => console.log(err.message));


  const deleterecord = (del) => {
    if (window.confirm("DO YOU REALLY WANT TO DELETE THIS CODE.")) {
      axios
        .delete(`https://64620fde185dd9877e4a080a.mockapi.io/api/v1/todo/${del}`)
        .then((res) => {
          //   window.location.reload();
          navigate("/");
        })
        .catch((err) => console.log(err.message));
    }
  };

  const [Edit, setEdit] = useState("");
  const [Edit2, setEdit2] = useState("");
  const [id, setId] = useState("");

  const editrecord = (id, title, description) => {

    axios.put(`https://64620fde185dd9877e4a080a.mockapi.io/api/v1/todo/${id}`, {
      id: id,
      title: title,
      description: description,
    }).then((res) => {

      navigate("/");
    })
      .catch((err) => console.log(err.message));

  }



  return (
    <>
      <div className="container text-center">
        <h1 className="text-center mt-4">To-Do-List</h1>
        <form className="m-lg-5 mx-auto justify-content-center" onSubmit={handleSubmit}>


          <input
            id="title"
            type="text"
            className="form-control my-lg-2 m-2 newtxt"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />


          <input
            id="description"
            type="text"
            className="form-control my-lg-2 m-2 newtxt"
            style={{ height: "60px", }}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />

          <button type="submit" className="btn btn-info fs-5 text-light">
            Add <HiDocumentAdd />
          </button>
        </form>



        <div className="containerms-lg-5 me-lg-5 mt-4">
          {dataz.map((item) => {
            return (

              <div className="container-fluid d-lg-flex m-lg-4 mt-3 justify-space-around border shadow rounded" >
                <div className="text-start w-75">
                  <h2>{item.title}</h2>
                  <p className="text-wrap newtxt" style={{ width: "100%" }}>{item.description}</p>
                </div>
                <div className=" ms-lg-auto">
                  <button onClick={() => { setEdit(item.title); setEdit2(item.description); setId(item.id) }} className="btn btn-info text-end text-light fs-4 m-3" data-bs-toggle="modal" data-bs-target="#exampleModal"><RiFileEditFill /></button>
                  <button onClick={() => deleterecord(item.id)} className="btn btn-info text-end text-light fs-4 m-3"><AiFillDelete /></button>
                </div>

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <input
                          value={Edit}
                          type="text"
                          className="form-control my-lg-2 m-2 newtxt"
                          placeholder="Title"
                          onChange={(e) => setEdit(e.target.value)}
                        />
                        <input
                          value={Edit2}
                          type="text"
                          className="form-control my-lg-2 m-2 newtxt"
                          placeholder="Title"
                          onChange={(e) => setEdit2(e.target.value)}
                        />
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={() => editrecord(id, Edit, Edit2)} >Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>


            );
          })}

        </div>






      </div>
    </>
  );
}

export default Home;