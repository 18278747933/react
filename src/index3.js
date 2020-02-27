import React from 'react';
import ReactDOM from 'react-dom';



//函數市組件
function Childcom(props){
    console.log(props)
    let title = <h2>我是副標題</h2>
    let weather =props.weather
    let isGo = weather =="下雨"?"不出門":"出門"
    return(
        <div>
            <h1>函數市組件helloworld</h1>
            {title}
            <span>
                是否出門？{isGo}
            </span>
        </div>
    )
}
// ReactDOM.render(
//     <Childcom weather="下雨"/>,
//     document.getElementById('root')
//     )
//類組件定義
class HelloWorld extends React.Component{
    
    render(){//渲染視圖
        console.log(this.props)
        return(
            <div>
            <h1>類組件定義</h1>
            <h1>{this.props.name}</h1>
            <Childcom />
        </div>
        )
    }
}

ReactDOM.render(<HelloWorld name="老城"/>,document.getElementById('root'))


