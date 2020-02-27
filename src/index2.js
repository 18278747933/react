import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './02style.css';

let elementStyle={
    background: "brown",
    boderBottom:"1px solid red"
}

let element=(
    <div>
        <h1 style={elementStyle}>helloworld</h1>
    </div>
)

let classStr = "redbg"
let element1=(
    <div>
        <h1 className={classStr}>helloworld</h1>
    </div>
)


let classStr2 = ["abc","redbg2"].join(" ")
let element3=(
    <div>
        {/** 寫注釋的方式  */}
        <h1 className={classStr2}>helloworld</h1>
    </div>
)

ReactDOM.render(element3,document.getElementById('root'));

