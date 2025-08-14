import { Link } from "react-router-dom"
import usersJSON from "../data/all-users.json" 

function AllUsersPage() {



  return (
    <div>
      
      <h1>All users</h1>

      {usersJSON.map((eachUser) => {
        return (
          <p key={eachUser.id}>
            <Link to={`/user-details/${eachUser.id}/${eachUser.username}`}>{eachUser.username}</Link>
          </p>
        )
      })}

    </div>
  )
}
export default AllUsersPage