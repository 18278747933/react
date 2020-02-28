import React from 'react';
import ReactDOM from 'react-dom';

//條件渲染
function UserGreet(props){//函數市組件
    return(
        <h1>歡迎登錄</h1>
    )

}

function UserLogin(props){//函數市組件
    return(
        <h1>請先登錄</h1>
    )

}


class ParentCom extends React.Component{
    constructor(props){
        super(props)
        this.state={//狀態
            isLogin:true
        }
    }

    render(){
        if(this.state.isLogin){
            return (<UserGreet />)
        }else{
            return(<UserLogin/>)
        }

        // let element = null
        // if(this.state.isLogin){
        //     element= <UserGreet />
        // }else{
        //     element= <UserLogin/>
        // }

        // return(
        //     <div>
        //         <h1>這是頭部</h1>
        //         {element}
        //         <h1>這是尾部</h1>
        //     </div>
        // )
    }
}

ReactDOM.render(<ParentCom/>,document.getElementById("root"))