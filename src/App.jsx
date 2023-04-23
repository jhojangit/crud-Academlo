
import { useEffect, useState } from 'react'
import './App.css'
import useUserCrud from './hooks/useUserCrud'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'


function App() {

  const [updateInfo, setUpdateInfo] = useState()
  const [formClose, setFormClose] = useState(true);

  const {
    users,
    getAllUsers,
    createNewUser,
    deleteUserById,
    updateUserById
  } = useUserCrud()


  useEffect(() => {
    getAllUsers()
  }, [])

  const handleOpenForm = () =>{
    setFormClose(false)
  }


  return (
    <div className="App">

      <header>
        <h1>Users</h1>
        <button onClick={handleOpenForm}>Create user</button>
      </header>

        <FormUser
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}
        setFormClose={setFormClose}
        formClose={formClose}
      />
      
      <div className='user__container'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
              setFormClose={setFormClose}
            />

          ))
        }

      </div>

    </div>
  )
}

export default App
