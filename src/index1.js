import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
import './App.css';
 

// let app = <App />//元素
// let root = document.getElementById('root');
// let h1 =<h1>hello world</h1>

// ReactDOM.render(h1, root);

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

//實現頁面的時間顯示
// function clock(){
//     let time =new Date().toDateString();
//     let element =(
//         <div>
//             <h1>current times{time}</h1>
//             <h2>this seconde title</h2>
//         </div>
//     )
//     let root = document.querySelector('#root');//找到根節點=document.getElementById('root');
//     //渲染
//     ReactDOM.render(element,root);
// }

// clock()

// setInterval(clock,1000)
//函數式組件
// function Clock(props){
//     return(
//         <div>
//             <h1>current times{props.date.toLocaleTimeString()}</h1>
//             <h2>this seconde title</h2>
//         </div>
//     )
// }

// function run(){
//     ReactDOM.render(
//         <Clock date={new Date()}/>//對象
//         ,document.getElementById('root')

//     )
// }

// setInterval(run, 1000);
let times = new Date().toLocaleTimeString();
let str ='current time'

let element = (
    <div>
        <h1>hello world</h1>
        <h2>{times+str}</h2>
    </div>
)
console.log(element);
// let man ="1"
let element3=(
    <div>
        <span>123</span>
        <span>456</span>
    </div>
)
let man="2";
let element2 =(
    <div>
        <h1>hhhhhhhhhhhhhhhhhhhhhhh</h1>
        <h2>{man=="1"?<button>222</button>:element3}</h2>
    </div>
)

let logo ='https://img-blog.csdnimg.cn/20190927151053287.png';
let element4 =(
    <div className="regRed">
        <img src={logo}/>
        背景色
    </div>
)

ReactDOM.render(
    element4,
    document.getElementById('root')
)