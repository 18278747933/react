import React from 'react';
import ReactDOM from 'react-dom';

//子傳父
//  class ParentCom extends React.Component{
//      constructor(props){
//          super(props)
//          this.state={
//             childrenData:null
//          }
//      }

//      render(){
//          return(
//              <div>
//                  <h1>子元素傳遞給父元素：{this.state.childrenData}</h1>
//                  <ChildCom setChiledDate={this.setChiledDate}/>
//              </div>
//          )
//      }

//      setChiledDate=(data)=>{//定義函數修改數據
//         this.setState({
//             childrenData:data
//         })

//      }
//  }

//  class ChildCom extends React.Component{
//      constructor(props){
//          super(props)
//          this.state={
//              msg:"hello world"
//          }
//      }

//      render(){
//          return(
//             <div>
//                 <button onClick={this.secndData}>傳遞hello world</button>

//                 <button onClick={()=>{this.props.setChiledDate("直接跳到")}}>傳遞helloworld</button>
//             </div>
//          )
//      }

//      secndData=()=>{//箭頭函數 綁定當前地址
       
//         this.props.setChiledDate(this.state.msg)

//      }
//  }


class ParentCom extends React.Component{
    constructor(props){
        super(props)
        this.state={
            childrenData:null
        }
    }

    render(){
        return(
            <div>
                <h1>獲取數據：{this.state.childrenData}</h1>
                <ChildCom setChildData={this.setChildData}/>
            </div>
        )
    }

    setChildData=(data)=>{
        this.setState({
            childrenData:data
        })
    }
   
}

class ChildCom extends React.Component{
   constructor(props){
        super(props)
        this.state={
            msg:"hello world"
        }
   }

   render(){
       return(
           <div>
               <button onClick={()=>{this.props.setChildData(this.state.msg)}}>點擊獲取</button>
           </div>
       )
   }
}
 ReactDOM.render(<ParentCom />,document.getElementById('root'))




