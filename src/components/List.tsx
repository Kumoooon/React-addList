import React from "react";
import {Ipeople as IProps} from "../App";


const List: React.FC<IProps> = ({people}) => {
    const renderList = () => {
        return (
            people.map((a,index) => {
                return (<div key={index} style={{border:"solid", borderColor:"gray", marginBottom:10,borderRadius:10,width:500,height:90,position:"relative"}}>
                    <div ><h2 style={{position:"absolute",left:100,top:10}}>{a.name}</h2><img style={{height:50,position:"absolute",left:30,bottom:20}} src={a.url}/></div>
                    <p>{"age : "}{a.age}</p>
                    <p>{"Note : "}{a.note}</p>
                </div>)
            })
        )
    }
    return (
        <div>
            <ul>{renderList()}</ul>

        </div>)
}

export default List