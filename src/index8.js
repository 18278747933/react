import React from 'react';
import ReactDOM from 'react-dom';

//react 事件對象
class ParentCom extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            

        <div>
            <form action="http://www.baidu.com">
                <div >
                    <div className="child" >
                        <h1>helloworld</h1>
                        <button onClick={this.parentEvent}>提交1</button>
                    </div>
                </div>
            </form>
            {/**不使用es6 */}
            <button onClick={(e)=>{this.parentEvent("msg:123",e)}}>提交2</button>
            {/**使用es6 */}
            <button onClick={function(e){this.parentEvent("不適用,msg:123",e)}.bind(this)}>提交3</button>
        </div>
        )
    }

    parentEvent=(e)=>{
        console.log(e)
        // e.preventDefault()//阻止默認
    }

    parentEvent=(msg,e)=>{
        console.log(e)
        console.log(msg)
    }
}

ReactDOM.render(<ParentCom />,document.getElementById("root"))


