import React from 'react';
import ReactDOM from 'react-dom';

//列表渲染

class Welcome extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[
                {
                    title:"第一節",
                    content:"内容"
                },
                {
                    title:"第er節",
                    content:"123"
                },
                {
                    title:"第san節",
                    content:"23244容"
                }
            ]
        }
    }

    render(){
        let listArr=[];
        for(let i=0;i<this.state.list.length;i++){
            let item =(
                <li>
                    <h3>{this.state.list[i].title}</h3>
                    <p>{this.state.list[i].content}</p>
                </li>
            )
            listArr.push(item)
        }
        return(
            <div>
                <h1>
                    今天課程内容
                </h1>
                <ul>
                    {listArr}
                    {/* <li>
                        <h3>標題</h3>
                        <p>内容</p>
                    </li> */}
                </ul>
            </div>
        )
    }
}

ReactDOM.render(<Welcome />,document.getElementById("root"))
