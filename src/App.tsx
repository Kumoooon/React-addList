import React, {useEffect, useState} from 'react';
import './App.css';
import List from "./components/List";
import AddToList from "./components/AddToList";
import Test from "./test";
export interface Ipeople {
    people: {
        name: string
        age: number
        url: string
        note?: string
    }[],
}

function App() {
    const [people, setPeople] = useState<Ipeople["people"]>([])
    return (
        <div className="App">
            <List people={people}/>
            <AddToList people = {people} setPeople={setPeople}/>
<Test />
        </div>
    );
}

export default App;
