
interface IBascket {
  plus : (a:number, b:number) => number,
    minus : (a:number, b:number) =>number
}
function Test () {
let obj :IBascket = {
    plus(a,b){
return a+b
    },
    minus(a,b){
return a-b
    }
}
    return (
        <div></div>
    )
}

export default Test