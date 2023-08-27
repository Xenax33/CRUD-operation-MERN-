import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";

function Table() {
  const [DataList, setDataList] = useState([]);
  const [SelectedUser, setSelectedUser] = useState({
    _id: "",
    username: "",
    email: "",
    password: "",
  });
  

  const getData = async () => {
    const response = await axios.get("/");
    if (response.data.success) {
      setDataList(response.data.data);
    }
  };

  const onSave = async(e) =>
  {
    e.preventDefault();
    const data = await axios.put("/Update", SelectedUser);
    alert("User Updated")
    getData();
  }

  const onchange = (e) => {
    setSelectedUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  

  const handleDelete = async (_id) => {
    const data = await axios.delete("/delete/" + _id);
    if (data.data.deletedCount > 0) {
      alert("Deleted Successfully");
      getData();
    }
  };

  const handleEdit = async (userId) => {
    console.log(userId);
    const data = await axios.get("/users/" + userId);
    console.log(data.data);
    setSelectedUser({
      _id : data.data._id,
      username: data.data.username,
      email: data.data.email,
      password: data.data.password
    })
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {DataList[0] ? (
              DataList?.map((element, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{element.username}</td>
                  <td>{element.email}</td>
                  <td>{element.password}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary Buttonn"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => handleEdit(element._id)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => handleDelete(element._id)}
                      className="btn btn-primary Buttonn "
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <td>No Data</td>
            )}
          </tbody>
        </table>
      </div>

      <div className="text-center">
        <Link to="/" className="link-danger">
          <button
            type="button"
            className="btn btn-primary Buttonn my-3"
            style={{
              paddingLeft: "2.5rem",
              paddingRight: "2.5rem",
            }}
          >
            Log In
          </button>
        </Link>
      </div>

      <div className="text-center">
        <div
          className="modal fade text-center"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-center" id="exampleModalLabel">
                  Modal title
                </h5>
              </div>

              <div className="modal-body">
                <div className="row">
                  <TextField
                    name="username"
                    value={SelectedUser.username}
                    label="Username"
                    id="Username"
                    sx={{ borderRadius: "20px" }}
                    onChange={onchange}
                  />
                </div>
                <div className="row my-3">
                  <TextField
                    name="email"
                    value={SelectedUser.email}
                    label="Email"
                    id="Email"
                    sx={{ borderRadius: "20px" }}
                    onChange={onchange}
                  />
                </div>

                <div className="row">
                  <TextField
                    name="password"
                    value={SelectedUser.password}
                    label="Password"
                    id="Password"
                    type="password"
                    sx={{ borderRadius: "20px" }}
                    onChange={onchange}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary Buttonn"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary Buttonn" data-bs-dismiss="modal" onClick={onSave}>
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
