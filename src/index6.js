import React from 'react';
import ReactDOM from 'react-dom';
import './05style.css'

//在父元素中使用state去控制子元素props從而達到父傳子
class ParentCom extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            isActive:true
        }
        this.changeShow=this.changeShow.bind(this);
    }

    render(){
        return (
            <div>
                <button onClick={this.changeShow}>按鈕1</button>
                <Childcom isActive={this.state.isActive} />
            </div>
        )
    }

    changeShow(){
        this.setState({
            isActive:!this.state.isActive
        })
    }
}



class Childcom extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let element =null;
        if(this.props.isActive){
            element ="active"
        }else{
            element=""
        }

      //  element= this.props.isActive?"active":""

        return(
            <div className={"content"+element}>
                <h1>我是子元素</h1>
            </div>
        )
    }
}


ReactDOM.render(<ParentCom />,document.getElementById('root'))

 


