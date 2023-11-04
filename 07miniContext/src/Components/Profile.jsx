import { useContext } from 'react'
import UserContext from '../Context/UserContext'


function Profile() {
    const {user} = useContext(UserContext)
    if (!user) return <h2>Please login</h2>
     return <h3>Welcome {user.userName}</h3>
}

export default Profile