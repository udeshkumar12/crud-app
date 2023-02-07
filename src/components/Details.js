import React from 'react'

function Details() {
  return (
    <div className='container mt-3'>
    <div className='row'>
      <h1 style={{fontWeight:400}}>welcome udesh kumar</h1>
      <div className='left_view col-lg-6 col-md-6 col-12'>
      <h1 ><i class="fa-solid fa-person"></i></h1>
      <h3>name: <span>udesh kumar</span></h3>
      <h3>age: <span>19</span></h3>
      <p> <i class="fa-regular fa-envelope"></i> Email: <span>udesh@email.com</span></p>
      <p> <i class="fa-solid fa-briefcase"></i> occuption: <span>MEARN stack Developer</span></p>
      </div>
      
    <div className='right_view col-lg-6 col-md-6 col-12'>
        <button className='btn btn-primary mx-2'><i class="fa-solid fa-pen"></i></button>
        <button className='btn btn-danger'><i class="fa-solid fa-box-archive"></i></button>
        <p className='mt-5'> <i class="fa-solid fa-mobile-screen"></i>  mobile:1234567890</p>
        <p className='mt-4'>  location:ABC</p>
        <p>Description: </p>
    </div>
    </div>

    </div>
  )
}

export default Details
