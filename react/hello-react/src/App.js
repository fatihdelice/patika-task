import './App.css';
import { useState } from "react";

import Header from './components/Header';
import User from './components/User';

// const name = "Fatih";
// const surname = "Delice";
// const isLoggedIn = true;
const friends = [
  {
    id: 1,
    name: "Ahmet",
  },
  {
    id: 2,
    name: "Mehmet",
  },
  {
    id: 3,
    name: "Ali",
  },
  {
    id: 4,
    name: "Veli",
  },
  {
    id: 5,
    name: "Ayşe",
  },
  {
    id: 6,
    name: "Fatma",
  },
];

function App() {
  const [userName, setUserName] = useState("Fatih");
  const [userAge, setUserAge] = useState(23);
  const [userFriends, setUserFriends] = useState(['Ahmet', 'Mehmet', 'Ali', 'Veli', 'Ayşe', 'Fatma']);
  const [userAddress, setUserAddress] = useState({ title: "Sivas", zip: 58000 });

  return (
    <>
      <Header />
      <User
        name={"Fatih"}
        surname="Delice"
        isLoggedIn={true}
        age={23}
        friends={friends}
        address={{
          title: "Sivas",
          zip: 58000,
        }}
      />


      {/* <h1>{isLoggedIn ? `Welcome, ${name} ${surname}` :  'Giriş Yapılmadı'}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo deserunt ipsa dolores provident nam inventore, ea modi animi aspernatur voluptas eaque et sed amet praesentium quas id? Voluptas, aliquid perspiciatis?
      </p>

      <label htmlFor="myInput">
        Name
        <input type="text" id='myInput' />
      </label> */}

      <h1>{userName}</h1>
      <h2>{userAge}</h2>
      <button onClick={() => setUserName("John")}>Click to change name</button>
      <button onClick={() => setUserAge(58)}>Click to change age</button>

      <hr />
      <br></br>

      <h2>Friends</h2>
      {
        userFriends.map((friend, index) => {
          return <div key={index}>{friend}</div>
        })
      }


      <button onClick={() => setUserFriends([...userFriends, "Veysel"])}>Add new friend</button>

      
      <hr />
      <br></br>

      <h2>Address</h2>
      <div>{userAddress.title} {userAddress.zip}</div>

      <button onClick={() => setUserAddress({ ...userAddress, title: "Ankara", zip: 6666})}>Click to change address</button>
    </>
  );
}

export default App;
