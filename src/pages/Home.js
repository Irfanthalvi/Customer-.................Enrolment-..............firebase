import React from 'react'
import { useState, useEffect } from 'react'
import fireDb from "../Firebase"
import { Link,useNavigate } from 'react-router-dom'
import "./Home.css"
import { toast } from 'react-toastify'



const Home = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    fireDb.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({})
      }
    });

    return () => {
      setData({});
    };
  }, []);

const handleEdit=()=>{
  navigate("/update")
}

  const onDelete = (id) => {
    if (window.confirm("Are You Sure That You Wanted To Delete That Contact ?")
    )
      fireDb.child(`contacts/${id}`).remove((err) => {
        if (err) {
          console.error("Error deleting contact:", err);
          toast.error("An error occurred while deleting the contact");
        } else {
          toast.success("Contact deleted successfully");
        }
      });
  }
  return (
    <div style={{ marginTop: "10px" }}>
      <table className='styled-table'>
      
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Email</th>
            <th style={{ textAlign: "center" }}>Contact</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((id, index) => {
            return (
              <tr key={id}>
                <th scope='row'>{index + 1}</th>
                <td>{data[id].name}</td>
                <td>{data[id].email}</td>
                <td>{data[id].contact}</td>
                <td>
                  <div>
                    <Link to={`/update/${id}`}>
                      <button className='btn btn-edit'onClick={handleEdit}>Edit</button>
                    </Link>
                    <button className='btn btn-delete' onClick={() => onDelete(id)}>Delete</button>
                    <Link to={`/view/${id}`}>
                      <button className='btn btn-view'>View</button>
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

    </div>
  )
}

export default Home



