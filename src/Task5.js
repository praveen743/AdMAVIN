import React from 'react';
import { useState } from 'react';
import { useFormik } from 'formik';
import './App.css';

function Task5() {

const[num,setnum]=useState();
const[sqarr,setsqarr]=useState([]);
var sa=[];

    var colorarr=["#ffffff","#ffe6e6","#ffcccc","#ffb3b3","#ff9999","#ff8080","#ff6666","#ff4d4d",
"#ff3333","#ff1a1a","#ff0000","#e60000","#cc0000","#b30000","#990000","#800000","#660000","#4d0000",
"#330000","#1a0000","#000000"]

const formik = useFormik({
  initialValues: {
      number: '',
  },
  onSubmit: async (values) => {
      try {
        setnum(values.number)
        for(var i=1;i<=values.number;i++){
          sa.push(i)
      }
      setsqarr(sa)
        console.log(sqarr)
      } catch (error) {
          console.log(error)
      }
  }
})


  return (
     <>
         <div className='container'>
        <form onSubmit={formik.handleSubmit}>
               
                    <div className='row mt-5'>
                        <div className='col-lg-4 text-right'><label><b>Enter The Number:</b></label></div>
                        <div className='col-lg-4'><input type="number" className='form-control' min={1} 
                        max={20}
                            onChange={formik.handleChange} value={formik.values.number} name='number'></input></div>
                    
                    
                    <div className='col-lg-4  '><input type="submit" className='btn btn-danger'
                     id="paybtn" value="Enter"></input></div>
                     </div>
            </form>
            </div>

            <div className='container1'> 
                  {
                    sqarr.map((obj,index)=>{
                    return <div key={index} id="sqr" style={{backgroundColor:colorarr[obj]}}></div>
                    })
                  }
            </div>
     </>
  )
}

export default Task5