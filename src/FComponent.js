import {useState} from "react";

export default function FComponent(props) {
    let [list, setList] = useState([
        {
        name: "trang",
        age: 20
        },
        {
        name: "abc",
        age: 30
        }
    ])
    let [name, setName] = useState('')
    let [age, setAge] = useState('')
    let [isShow, setIsShow] = useState(true)
    function showValueEdit(e){
        let a = e.target.value
        list.map((item, ind) => {
            if (ind === +a) {
                setName(item.name)
                setAge(item.age)
            }
        })
        // this.setState(state => {
        //     return {
        //         isShow: !state.isShow
        //     }
        // })
    }
    return(
        <>
            {list.map((item, ind) =>(
                <div key={ind}>
                    <h2>{item.name}, {item.age}</h2>
                    <button onClick={() => {showValueEdit()}}>Edit</button>
                    <button onClick={() => {
                        let oldList = [...list];
                        oldList.splice(ind, 1);
                          setList(oldList)
                    }}>Delete</button>
                </div>
            ))}
            <input type="text" name={name} value={name} onChange={(e) => {
                setName(e.target.value)
            }}/>
            <input type="text" name={age} value={age} onChange={(e) => {
                setAge(e.target.value)
            }}/>
            <button onClick={() => {
                setList([...list, {
                    name: name,
                    age: age
                }])
                setName('')
                setAge('')
            }}>Add</button>
        </>
    )
}