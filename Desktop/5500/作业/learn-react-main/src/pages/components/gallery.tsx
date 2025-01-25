import Profile from './profile'


export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        image="https://i.imgur.com/szV5sdGs.jpg"
        profession="physicist and chemist"
        awards="4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
        discovery="polonium (element)"
      />
      <Profile
        name="Katsuko Saruhashi"
        image="https://i.imgur.com/YfeOqp2s.jpg"
        profession="geochemist"
        awards="2 (Miyake Prize for geochemistry, Tanaka Prize)"
        discovery="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}

