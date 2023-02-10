import React, { useEffect, useState } from 'react'
import { NavLink, useParams,useHistory} from 'react-router-dom';

const Details = () => {

  const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    const { id } = useParams("");
    console.log(id);

    const history = useHistory();


    const getdata = async () => {

        const res = await fetch(`https://crudappreactjs.herokuapp.com/getuser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setUserdata(data)
            console.log("get data");
        }
    }

    useEffect(() => {
        getdata();
    }, [])

    const deleteuser = async (id) => {

        const res2 = await fetch(`https://crudappreactjs.herokuapp.com/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            console.log("user deleted");
            history.push("/");
        }

    }

  return (
    <div className='container mt-3'>
    <div className='row'>
      <h1 style={{fontWeight:400}}>welcome udesh kumar</h1>
      <div className='left_view col-lg-6 col-md-6 col-12'>
      <h1 ><i class="fa-solid fa-person"></i></h1>
      <h3>name: <span>{getuserdata.name}</span></h3>
      <h3>age: <span>{getuserdata.age}</span></h3>
      <p> <i class="fa-regular fa-envelope"></i> Email: <span>{getuserdata.email}</span></p>
      <p> <i class="fa-solid fa-briefcase"></i> occuption: <span>{getuserdata.work}</span></p>
      </div>
      
    <div className='right_view col-lg-6 col-md-6 col-12'>
        <NavLink to={`/edit/${getuserdata._id}`}><button className='btn btn-primary mx-2'><i class="fa-solid fa-pen"></i></button> </NavLink>
        <button className='btn btn-danger' onClick={()=>deleteuser(getuserdata._id)}><i class="fa-solid fa-box-archive"></i></button>
        <p className='mt-5'> <i class="fa-solid fa-mobile-screen"></i> {getuserdata.mobile}</p>
        <p className='mt-4'>{getuserdata.address} </p>
        <p>{getuserdata.desc} </p>
    </div>
    </div>

    </div>
  )
  }
export default Details
