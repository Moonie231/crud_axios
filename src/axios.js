import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

export default function Axios() {
    const navigate = useNavigate()

    let [list, setList] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/students').then(res => {
            console.log(res.data)
            setList(res.data)
        })
    }, [])

    return(
        <>
            <h1>List Student</h1>
            {list.map((item, key) => (
                <div key={key}>
                    <h3>{item.name}: {item.description}</h3>
                    <button onClick={() => {
                        axios.delete(`http://localhost:3001/students/${item.id}`).then(res => {
                            axios.get('http://localhost:3001/students').then(res => {
                                console.log(res.data)
                                setList(res.data)
                            })
                        })
                    }}>Delete</button>
                    <Link to={'/edit-student/' + item.id}><button>Edit</button></Link>
                </div>
            ))}
        </>

    )
}