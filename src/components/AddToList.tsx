import React, {useState} from "react";
import {Input, Button} from '@mantine/core';
import {Textarea} from "@mantine/core";
import {Ipeople as IProps} from "../App";

interface IPorps {
    people: IProps["people"]
    setPeople: React.Dispatch<React.SetStateAction<IProps["people"]>>
}

const AddToList: React.FC<IPorps> = ({people, setPeople}) => {
    const [input, setInput] = useState({
        name: "",
        age: "",
        note: "",
        img: ""
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,

            [e.target.name]: e.target.value
        })
        console.log(input)
    }
    //기존의 input을 가져오되, 변화가 있는 요소는 바뀐다...
    const handleClick = (): void => {
    if(!input.name || !input.age || !input.img){
        return
    }
    setPeople([
        ...people,{
        name : input.name,
            age : Number(input.age),
            url : input.img,
            note : input.note,
        }
    ])

    }
    return (<div>
        <Input type="text" placeholder="Name" style={{marginBottom: 10, width: 500, left: 40}} value={input.name}
               name="name" onChange={handleChange}/>
        <Input type="number" placeholder="Age" style={{marginBottom: 10, width: 500, left: 40}} value={input.age}
               name="age" onChange={handleChange}/>
        <Input type="text" placeholder="Image url" style={{marginBottom: 10, width: 500, left: 40}} value={input.img}
               name="img" onChange={handleChange}/>
        <Textarea
            placeholder="Note"
            radius="xs"
            style={{width: 500, left: 40, position: "relative", marginBottom: 20}}
            value={input.note}
            name="note"
            onChange={handleChange}
        />
        <Button variant="outline" color="green" style={{position: "absolute", width: 500, left: 40}} sx={(theme) => ({
            backgroundColor: theme.colors.none,
            '&:hover': {
                backgroundColor: theme.colors.green[5],
                color: "white"
            },

        })} onClick={handleClick}>
            Submit
        </Button>
    </div>)
}
export default AddToList