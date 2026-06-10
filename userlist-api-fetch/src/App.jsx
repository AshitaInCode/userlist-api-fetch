import { useEffect, useState } from 'react'
import "./App.css"

function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUser();
    console.log("Fetching users...");
  }, []);


  async function getUser(){
      const response= await fetch("https://jsonplaceholder.typicode.com/users");
      const data=await response.json();
      setUsers(data);
      setLoading(false);
      
  }
  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div >
        <h1>User List</h1>
        {
          users.map((user) => (
            <div key={user.id} className='users'>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </div>
          ))
        }
      </div>

    )

  }
}

export default App
