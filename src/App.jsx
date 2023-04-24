
import { useEffect, useState } from 'react'
import './App.css'
import './components/delete.css'
import './components/updateMessage.css'
import useUserCrud from './hooks/useUserCrud'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'
import DeleteMessage from './components/DeleteMessage'
import UpdateMessage from './components/UpdateMessage'


function App() {

  const [updateInfo, setUpdateInfo] = useState()
  const [formClose, setFormClose] = useState(true);
  const [deleteMessage, setDeleteMessage] = useState(true);
  const [updateMessage, setUpdateMessage] = useState(true);

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


      {<DeleteMessage deleteMessage={deleteMessage} />}
      {<UpdateMessage updateMessage={updateMessage} />}

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
        setUpdateMessage={setUpdateMessage}
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
              setDeleteMessage={setDeleteMessage}
            />

          ))
        }

      </div>

    </div>
  )
}

export default App
