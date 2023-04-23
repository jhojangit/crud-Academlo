
const UserCard = ({ user, deleteUserById, setUpdateInfo }) => {

  const handleDelete = () => {
    deleteUserById(user.id)
  }

  const handleUpdate = () => {
    setUpdateInfo(user)
  }

  return (
    <article className="user">
      <h2 className="user__name">{user.first_name} {user.last}</h2>
      <ul className="user__list">
        <li className="user__item"><span className="user__label">Email</span>{user.email}<span className="user__value"></span></li>
        <li className="user__item"><span className="user__label">Birthday</span>{user.birthday}<span className="user__value"></span></li>
      </ul>
      <footer className="user__footer">
        <button className="user__btn user__delete" onClick={handleDelete}><i className='bx bx-trash'></i></button>
        <button className="user__btn user__update" onClick={handleUpdate}><i className='bx bx-edit-alt'></i></button>
      </footer>
    </article>
  )
}

export default UserCard