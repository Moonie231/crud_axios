import {Component} from "react";

export class Demo extends Component {
    constructor() {
        super();
        this.state = {
            list: [
                {
                    name: "trang",
                    age: 20
                },
                {
                    name: "ads",
                    age:23
                }
            ],
            inName: '',
            inAge: '',
            ind: ''
        }
    }
    change = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    add = () => {
        this.setState((state) =>{
            return {
                list: [...state.list, {name: state.inName, age: state.inAge}],
                inName: '',
                inAge: ''
            }
        })
    }
    showValueEdit = (e) => {
        let a = e.target.value
        this.state.list.map((item, ind) => {
            if (ind === +a) {
                this.setState({inName: item.name})
                this.setState({inAge: item.age})
                this.setState({ind: a})
            }
        })
        this.setState(state => {
            return {
                isShow: !state.isShow
            }
        })
    }
    edit = () => {
        this.setState((state) => {
            state.list.map((item, ind) => {
                if (ind === +state.ind) {
                    item.name = state.inName
                    item.age = state.inAge
                }
            })
            return {
                state,
                inName: '',
                inAge: '',
                isShow: !state.isShow
            }
        })
    }

    render() {
        return (
            <>
                {this.state.list.map((item, ind) =>(
                    <div key={ind}>
                    <h2>{item.name}, {item.age}</h2>
                    <button value={ind} key={ind} onClick={(e) => {this.showValueEdit(e)}}>Edit</button>
                    <button onClick={() => {
                        this.setState(state =>{
                            let oldList = [...state.list];
                            oldList.splice(ind, 1);
                            return {
                                list: oldList,
                            }
                        })
                    }}>Delete</button>
                    </div>
                ))}
                <input type="text" name={"inName"} value={this.state.inName} onChange={this.change}/>
                <input type="text" name={"inAge"} value={this.state.inAge} onChange={this.change}/>
                <button onClick={this.edit}>Edit</button>
                <button onClick={this.add}>Add</button>
            </>
        )
    }
}