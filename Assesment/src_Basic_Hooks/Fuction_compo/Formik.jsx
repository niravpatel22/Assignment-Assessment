import React from 'react'
import { Formik, Form, Field } from 'formik'

const MyFormik = () => {
    return (
        <>
            <Formik
                initialValues={{ name: '', email: '' }}
                onSubmit={
                    async (values) => {
                        await new Promise((resolve) => setTimeout(resolve, 500));
                        alert(JSON.stringify(values));
                    }
                }

            // onSubmit = {() => {
            //     alert("You have Submitted The Form")
            // }}

            >

                <div className="container">
                    <div className="row">
                        <div className="col-8 mt-5">
                            <Form>
                                <label htmlFor="name">Name:</label>
                                <Field name="name" type="text" className="form-control mb-3"></Field>
                                <label htmlFor="email">Email:</label>
                                <Field name="email" type="email" className="form-control "></Field>
                                <button type='submit' className='btn btn-danger mt-3'>Submit</button>

                            </Form>
                        </div>
                    </div>
                </div>

            </Formik>
        </>)
}


export default MyFormik