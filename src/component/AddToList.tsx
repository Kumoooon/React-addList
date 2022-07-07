import {useState} from "react";

function AddToList() {
    const [pokemonData , setPokemonData] = useState({
        name:"",
        age:"",
        note:"",
        img:""
    })
    //stat를 하나 만들고, App.tsx에서 set배열 함수를 가져온 후, 만든 배열을 붙여넣는다.
const handlechange = (e) =>{
setPokemonData({
    ...pokemonData,
    [e.target.name]   : e.target.value//name="" 을 적은 이유.
})
}
    return (
        <div>
            <div><input type="text" placeholder="name" value={pokemonData.name} onChange={handlechange} name="name" /></div>
            <div><input type="number" placeholder="age" value={pokemonData.age} onChange={handlechange} name="age"/></div>
            <div><input type="text" placeholder="imageUrl" value={pokemonData.img} onChange={handlechange} name="img"/></div>
            <div><textarea  placeholder="Notes" value={pokemonData.note} onChange={handlechange} name="note"/></div>
            <button>save</button>
        </div>
    )
}

export default AddToList