import React from "react";

interface IProps {
    people: {
        name: string
        age: number
        url: string
        note?: string
    }[]

}

const List: React.FC<IProps> = ({people}) => {
    const renderList = () => {
        return (
            people.map((a,index) => {
                return (<div key={index} style={{border:"solid", borderColor:"gray", marginBottom:10,borderRadius:10,width:500,height:150,position:"relative"}}>
                    <div ><h2>{a.name}</h2><img style={{height:50,position:"absolute",left:170,bottom : 90}} src={a.url}/></div>
                    <p>{"age : "}{a.age}</p>
                    <p>{"About inviter : "}{a.note}</p>
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