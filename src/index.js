import React from 'react';
import ReactDOM from 'react-dom';

//列表渲染
//靜態用組件
function ListItem(props){
    
    return (
        <li >
            <h3>{props.index+1}:{props.data.title}</h3>
            <p>{props.data.content}</p>
        </li>
    )
}
//動態用類
class ListItem1 extends React.Component{
    constructor(props){
        super(props)
        
    }

    render(){
        
        return(
                <li onClick={(event)=>{this.clickEvent(this.props.index,this.props.data.title,event)}}>
                    <h3>{this.props.index+1}:{this.props.data.title}</h3>
                    <p>{this.props.data.content}</p>
                </li>
            )
        
        
    }

    clickEvent=(index,title,event)=>{
        alert(index+1+"/"+title)
    }
}

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
        let listArr=this.state.list.map((item,index)=>{
            return(
                // <ListItem key={index} data={item} index={index}/>
                <ListItem1 key={index} data={item} index={index}/>
                // <li key={index}>
                //     <h3>{index}:{item.title}</h3>
                //     <p>{item.content}</p>
                // </li>
            )
        })
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

                <h1>复杂沒有組件完成列表</h1>
                <ul>
                    {
                        this.state.list.map((item1,index)=>{
                            return(
                                
                                    <li key={index} onClick={(event)=>{this.clickFn(index,item1.title,event)}}>
                                        <h3>{index+1}:{item1.title}</h3>
                                        <p>{item1.content}</p>
                                    </li>
                                
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

    clickFn=(index,title,event)=>{
        alert(index+1+"/"+title)
    }
}

ReactDOM.render(<Welcome />,document.getElementById("root"))
