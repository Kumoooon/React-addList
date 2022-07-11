import React, {useState} from "react";

import {IState as Props} from "../App";

interface IProps {
    pokemon: Props["pokemon"]
    setPokemon: React.Dispatch<React.SetStateAction<Props["pokemon"]>>

}

function AddToList (props :IProps) { //input 내용들을 배열 속 객체에 넣어서 state로 만드는 함수.
    //const AddToList :React.FC<IProps> = ({setPokemon,pokemon}) =>  : 이렇게도 쓸 수 있다... 같은 뜻
    const [pokemonData, setPokemonData] = useState({
        name: "",
        url: "",
        age: 0,
        note: "",

    })
    //state를 하나 만들고, App.tsx에서 set배열 함수를 가져온 후, 만든 배열을 붙여넣는다.
    const handlechange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setPokemonData({
            ...pokemonData,
            [e.target.name]: e.target.value//name="" 을 적은 이유.

        })
        console.log(pokemonData)
    }

    function handleClick() {
    if(!pokemonData.name || !pokemonData.age ){
        return
    }
     props.setPokemon([...pokemonData,{name: pokemonData.name,age :Number(pokemonData.age), url :pokemonData.url, note :pokemonData.note}])
    }

    return (
        <div>
            <div><input type="text" placeholder="name" value={pokemonData.name} onChange={handlechange} name="name"/>
            </div>
            <div><input type="number" placeholder="age" value={pokemonData.age} onChange={handlechange} name="age"/>
            </div>
            <div><input type="text" placeholder="imageUrl" value={pokemonData.url} onChange={handlechange} name="url"/>
            </div>
            <div><textarea placeholder="Notes" value={pokemonData.note} onChange={handlechange} name="note"/></div>
            <button onClick={handleClick  }>Add</button>
        </div>
    )
}

export default AddToList