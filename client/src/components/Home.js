import React, { useState,useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { adddata } from './context/contextProvider';
import { updatedata } from './context/contextProvider';


const Home = () => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       


  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const { udata, setUdata } = useContext(adddata);

  const {updata, setUPdata} = useContext(updatedata);

  const {dltdata, setDLTdata} = useContext(deldata);

  const getdata = async () => {

      const res = await fetch("/getdata", {
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

      const res2 = await fetch(`/deleteuser/${id}`, {
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
          setDLTdata(deletedata)
          getdata();
      }

  }

  return (

      <>
          {
              udata ?
                  <>
                      <div class="alert alert-success alert-dismissible fade show" role="alert">
                          <strong>{udata.name}</strong>  added succesfully!
                          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>
                  </> : ""
          }
          {
              updata ?
                  <>
                      <div class="alert alert-success alert-dismissible fade show" role="alert">
                          <strong>{updata.name}</strong>  updated succesfully!
                          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>
                  </> : ""
          }

          {
              dltdata ?
                  <>
                      <div class="alert alert-danger alert-dismissible fade show" role="alert">
                          <strong>{dltdata.name}</strong>  deleted succesfully!
                          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>
                  </> : ""
          }

    <div className='mt-5'>
        <div className='container'>
            <div className='add_btn mt-2 mb-2'>
                <NavLink to="/register " className='btn btn-primary'>Add data</NavLink>
            </div>

            <table class="table">
            <thead>
            <tr className='table-dark'>
               <th scope="col">id</th>
               <th scope="col">username</th>
               <th scope="col">email</th>
               <th scope="col">job</th>
               <th scope="col">number</th>
               <th scope="col">function</th>
            </tr>
            </thead>
            <tbody> 
            {
             getuserdata.map((element,id)=>{
                return(
                    <>
                               <tr>
                <th scope="row">{id + 1}</th>
                <td>{element.name}</td>
                <td>{element.email}</td>
                <td>{element.work}</td>
                <td>{element.mobile}</td>
                <td className='d-flex justify-content-between'>
                    <button className='btn btn-success'><i class="fa-solid fa-eye"></i></button>
                    <button className='btn btn-primary'><i class="fa-sharp fa-solid fa-pen"></i></button>
                    <button className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr> 
        
                    </>
                )
             })
            }

            <tr>
                <th scope="row">1</th>
                <td>{getuserdata[0].name}</td>
                <td>{getuserdata[1].email}</td>
                <td>{getuserdata[2].work}</td>
                <td>{getuserdata[3].mobile}</td>
                <td className='d-flex justify-content-between'>
                   <NavLink to={`view/${element._id}`}> <button className='btn btn-success'><i class="fa-solid fa-eye"></i></button> </NavLink>
                   <NavLink to={`edit/${element._id}`}><button className='btn btn-primary'><i class="fa-sharp fa-solid fa-pen"></i></button></NavLink>
                    <button className='btn btn-danger' onClick={()=>deleteuser(element._id)}><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr> 
        
            </tbody>
            </table>

        </div>
    </div>
    </>
  )

}
export default Home
