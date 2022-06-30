import React, {useEffect, useState} from 'react';
import './App.css';

interface Ipeople {
    people: {
        name: string
        age: number
        url: string
        note?: string
    }[]

}
function App() {
    const [people, setPeople] = useState<Ipeople["people"]>()



    return (
        <div className="App">

        </div>
    );
}

export default App;
