// import logo from './logo.svg';

import './App.css';
// import Msg from './components/Msg';
import Person from './components/Person';
import data from './data';


function App() {
  return (
    <div>
      {data.map((person) => (
        <Person
          key={person.name}
          name={person.name}
          img={person.img}
          tel={person.tel}
        />
      ))}
      {/* text */}
    </div>
  );
}
export default App;

