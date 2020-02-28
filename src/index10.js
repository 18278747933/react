import React from 'react';
import ReactDOM from 'react-dom';

//列表渲染
let arr=["1","2","3","4","5"]

let arrHtml =[<li>1</li>,<li>1</li>,<li>1</li>,<li>1</li>,<li>1</li>]

class Welcome extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <ul>
                    {arrHtml}
                </ul>
            </div>
        )
    }
}

ReactDOM.render(<Welcome />,document.getElementById("root"))
