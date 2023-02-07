import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';


const Edit = () => {

    const [inpval,setINP] = useState({
        name:"",
        email:"",
        age:"",
        mobile:"",
        work:"",
        address:"",
        desc:""
    
      })
    
      const setdata = (e)=>{
        console.log(e.target.value);
        const {name,value} =e.target;
        setINP((preval) => {
          return{
            ...preval,
            [name]:value
    
          }
        })
      } 
    
  return (
    <div>
        <div className='container'>
      <NavLink to="/">home2</NavLink>
      <form className='mt-4'>
        <div className='row'>
        <div class="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleInputEmail1" class="form-label">Name</label>
          <input type="text" value={inpval.name}  onChange={setdata} name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
       <div class="mb-3 col-lg-6 col-md-6 col-12">
         <label for="exampleInputPassword1" class="form-label">email</label>
         <input type="email" value={inpval.email} onChange={setdata} name="email" class="form-control" id="exampleInputPassword1"/>
       </div>
       <div class="mb-3 col-lg-6 col-md-6 col-12">
         <label for="exampleInputPassword1" class="form-label">age</label>
         <input type="text" value={inpval.age} onChange={setdata} name="age" class="form-control" id="exampleInputPassword1"/>
       </div>
       <div class="mb-3 col-lg-6 col-md-6 col-12">
         <label for="exampleInputPassword1" class="form-label">mobile</label>
         <input type="number" value={inpval.mobile} onChange={setdata} name="mobile" class="form-control" id="exampleInputPassword1"/>
       </div>
       <div class="mb-3 col-lg-6 col-md-6 col-12">
         <label for="exampleInputPassword1" class="form-label">work</label>
         <input type="text" value={inpval.work} onChange={setdata} name="work" class="form-control" id="exampleInputPassword1"/>
       </div>
       <div class="mb-3 col-lg-6 col-md-6 col-12">
         <label for="exampleInputPassword1" class="form-label">address</label>
         <input type="text" value={inpval.address} onChange={setdata} name="address" class="form-control" id="exampleInputPassword1"/>
       </div>
       <div class="mb-3">
         <label for="exampleInputPassword1" class="form-label">Description</label>
         <textarea name="desc" value={inpval.desc} onChange={setdata} className='form-control' cols="30" rows="5"></textarea>
       </div>
       <button type="submit" class="btn btn-primary">Submit</button>
       </div>
      </form>
    </div>
    </div>
  )
}

export default Edit
