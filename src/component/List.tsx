import React from "react";

interface IProps {
    pokemon: {
        name: string, url: string, age: number, note?: string
    }[]
}

//가져왔는데 뭔지 모르면 안되지.
//app.tsx에서 IState를 카피해서 IProps로 제목을 바꾼 후 interface를 작성한다.

function List(props: IProps) {
    //props타입 적어주고.
    //IProps에 pokemon말고도 이것저것 들어갈 수 있으므로 IProps만 적으면 된다.
    //const List: React.FC<IProps> = () => 이렇게적을  수 도 있다. 이 편이 직관적이라고 한다.
    return (<div>{props.pokemon.map((pokemon) => { //파라미터도 알기쉽게 적는게 좋다. 알파벳 하나는 안돼요...
            return (<div style={{width: 400, height: 150, backgroundColor: "wheat", marginBottom: 20}}>
                    <div key={pokemon.name}>
                        <div>{pokemon.name}</div>
                        <img src={pokemon.url} style={{height: 50, width: 50}}/>
                        <div>{pokemon.age}</div>
                        <div>{pokemon.note}</div>
                    </div>
                </div>


            )
        })}
        </div>

    )
}

export default List