import React from 'react';
import { useFormik } from 'formik';

function Reply() {
    const formik = useFormik({
        initialValues: {
            rply: '',
        },
        onSubmit: async (values) => {
            try {
               
            }
            
             catch (error) {
                console.log(error)
            }
        }
      })
  return (
      <div>
    <form onSubmit={formik.handleSubmit}>
               
    <div className='row mt-5'>
        {/* <div className='col-lg-4 text-right'><label><b>Enter The Number:</b></label></div> */}
        <div className='col-lg-4'><input type="text" className='form-control'  placeholder='type something...'
            onChange={formik.handleChange} value={formik.values.rply} name='rply'></input></div>
    
    
    <div className='col-lg-4  '><input type="submit" className='btn btn-danger'
     id="paybtn" value="Reply"></input></div>
     </div>
</form>
</div>
  )
  }

export default Reply