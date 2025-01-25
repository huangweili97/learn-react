import { useState } from 'react';

export default function PersonData() {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [age, setAge] = useState(0);
    const [person, setPerson] = useState({fullName: '', age: 0})

    function handleClick() {
        let name = fName + ' ' + lName;
        setPerson({fullName: name, age: age});
    }

    return(
       <>
            <textarea value={fName} onChange={e => setFName(e.target.value)} />
            <textarea value={lName} onChange={e => setLName(e.target.value)} />
            <textarea value={age} onChange={e => setAge(Number(e.target.value))} />
            <button onClick={handleClick}> Save </button>
            {person.fullName && <p> Person: {person.fullName} is {person.age} years old </p>}
       </>
    )
}