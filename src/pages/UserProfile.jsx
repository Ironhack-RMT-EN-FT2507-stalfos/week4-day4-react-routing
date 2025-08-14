import { useParams } from "react-router-dom"

import usersJSON from "../data/all-users.json"

function UserProfile() {
  
  const params = useParams()
  console.log(params)

  const userInfo = usersJSON.find((eachUser) => {
    return eachUser.id === params.userId
  })
  console.log(userInfo)

  // guard clause
  if (!userInfo) {
    return (
      <div>
        <h3>There is no user with that name</h3>
      </div>
    )
  }

  return (
    <div>
      
      <h1>User Details</h1>

      <h3>Name: {userInfo.username} </h3>
      <h4>Location: {userInfo.city}</h4>
      <p>Course: {userInfo.course} </p>
      <p>id: {userInfo.id}</p>

    </div>
  )
}
export default UserProfile