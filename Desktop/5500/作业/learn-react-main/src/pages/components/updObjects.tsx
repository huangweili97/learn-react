import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    name: 'Ranjani Shettar',
    artwork: {
      title: 'Aureole',
      city: 'Bangalore',
      image: 'https://i.imgur.com/okTpbHhm.jpg',
    }
  });

  function handleCityChange(e: { target: { value: string; }; }) {
    const nextArtwork = { ...person.artwork, city: e.target.value };
    const nextPerson = { ...person, artwork: nextArtwork };
    setPerson(nextPerson);
  }


  return (
    <>
      <img src={person.artwork.image}/>
      <label>
        City:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <p>
        {person.name}{' '}
        {person.artwork.title}{' '}
        ({person.artwork.city})
      </p>
    </>
  );
}
