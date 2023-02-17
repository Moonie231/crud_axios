import {ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";
import Axios from "./axios.js";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";
const ValidateSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Too short")
        .max(50, "Too long")
        .required ('Required'),
    description: Yup.string()
        .min(2, "Too short")
        .max(50, "Too long")
        .required("Required"),
    action: Yup.string()
        .min(2, "Too short")
        .max(3, "Too long")
        .required("Required"),
})
export default function Create() {
    const navigate = useNavigate()
    return(
        <>
            <h1>Create</h1>
            <Formik
                initialValues={{
                    name: "",
                    description: "",
                    action: ""
                }}
                validationSchema={ValidateSchema}
                onSubmit={(values) => {
                    axios.post('http://localhost:3001/students', values).then(() =>{
                        navigate('/')
                    })
                }}
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