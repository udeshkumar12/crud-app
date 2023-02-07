import React from 'react'

const Home = () => {
  return (
    <div className='mt-5'>
        <div className='container'>
            <div className='add_btn mt-2 mb-2'>
                <button className='btn btn-primary'>Add data</button>
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
          
            <tr>
                <th scope="row">1</th>
                <td>udesh kumar</td>
                <td>udesh@email.com</td>
                <td>web developer</td>
                <td>1234567890</td>
                <td className='d-flex justify-content-between'>
                    <button className='btn btn-success'><i class="fa-solid fa-eye"></i></button>
                    <button className='btn btn-primary'><i class="fa-sharp fa-solid fa-pen"></i></button>
                    <button className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr> 
            <tr>
                <th scope="row">2</th>
                <td>udesh kumar</td>
                <td>udesh@email.com</td>
                <td>web developer</td>
                <td>1234567890</td>
                <td className='d-flex justify-content-between'>
                    <button className='btn btn-success'><i class="fa-solid fa-eye"></i></button>
                    <button className='btn btn-primary'><i class="fa-sharp fa-solid fa-pen"></i></button>
                    <button className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr> 
            </tbody>
            </table>

        </div>
    </div>
  )
}

export default Home
