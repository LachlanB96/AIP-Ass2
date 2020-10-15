
import React from 'react';


var obj = [{ name: "one", age: 5, "desc": "Yes" },
    { name: "two", age: 50, "desc": "Yefjggjs" },
    { name: "three", age: 500, "desc": "Yejghjs" }];

var list = ["Item", "Me", "Yes"];

const Input = (props) => {
    return (
        <div className="form-group">
            <label htmlFor={props.name} className="form-label">{props.title}</label>
            <input
                className="form-input"
                id={props.name}
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.handleChange}
                placeholder={props.placeholder}
            />
            <ul>
                {obj.map((entry, i) => {
                    return (
                        <li>{i}. {entry.name} (_ID: {entry.age})</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Input;