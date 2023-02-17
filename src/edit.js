import {ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";
import Axios from "./axios.js";
import * as Yup from "yup";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
// const ValidateSchema = Yup.object().shape({
//     name: Yup.string()
//         .min(2, "Too short")
//         .max(50, "Too long")
//         .required ('Required'),
//     description: Yup.string()
//         .min(2, "Too short")
//         .max(50, "Too long")
//         .required("Required"),
//     action: Yup.string()
//         .required("Required"),
// })
export default function Edit() {
    const [listEdit, setListEdit] = useState([{
        name: '',
        description: '',
        action: ''
    }])
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:3001/students/${id}`).then(res => {

            setListEdit(res.data)
        })
    }, [])
    return(
        <>
            <h1>Edit</h1>
            <Formik
                initialValues={{
                    name: listEdit.name,
                    description: listEdit.description,
                    action: listEdit.action
                }}
                // validationSchema={ValidateSchema}
                onSubmit={(values) => {
                    axios.put(`http://localhost:3001/students/${id}`, values).then(() =>{
                        navigate('/')
                    })
                }}

                enableReinitialize={true}
            >
                <Form>
                    <Field name = {'name'}></Field>
                    <ErrorMessage name={'name'}></ErrorMessage>
                    <Field name = {'description'}></Field>
                    <ErrorMessage name={'description'}></ErrorMessage>
                    <Field name = {'action'}></Field>
                    <ErrorMessage name={'action'}></ErrorMessage>
                    <button>Save</button>
                </Form>
            </Formik>
        </>
    )
}