import React from 'react';
import ReactDOM from 'react-dom';



class Clock extends React.Component{
    constructor(props){
        super(props)
        //狀態（數據）view
        this.state={
            time:new Date().toLocaleTimeString()
        }
    }

    render(){
        //this.state.time=new Date().toLocaleTimeString();
        return (
            <div>
                <h1>當前時間：{this.state.time}</h1>
            </div>
        )
    }
    //生命周期函數，組件渲染完成時的函數
    componentDidMount(){
        setInterval(()=>{
           this.setState({
               time:new Date().toLocaleTimeString()
           })
        },1000)
    }
}

ReactDOM.render(<Clock />,document.getElementById('root'))

setInterval(() => {
    ReactDOM.render(<Clock />,document.getElementById('root'))
}, 1000);
 


