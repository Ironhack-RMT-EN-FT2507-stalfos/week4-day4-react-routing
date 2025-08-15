import { Link } from "react-router-dom"
import usersJSON from "../data/all-users.json" 
import { useSearchParams } from "react-router-dom"

function AllUsersPage() {

  const [ searchParams, setSearchParams ] = useSearchParams() // this is how we set to grab queries from theURL

  const selectedCourse = searchParams.get("selectedCourse") // here we grab the value of one specific query
  console.log(selectedCourse)

  // const selectedYear = searchParams.get("year") // example of another query

  const handleSelectCourse = (event) => {
    // console.log("user is filtering by selecting a new course", event.target.value)
    if (event.target.value === "") {
      setSearchParams() // remove all the search queries from the URL if the user selects "All Courses"
    } else {
      setSearchParams( { "selectedCourse": event.target.value } ) // or add the query value depending on the other selected course
    }
  }

  return (
    <div>
      
      <h1>All users</h1>

      <select onChange={handleSelectCourse} name="course" id="course">
        <option value="">All Courses</option>
        <option value="web">Web Dev</option>
        <option value="data">Data Analytics</option>
        <option value="ux">UX/UI</option>
      </select>

      {usersJSON
      .filter((eachUser) => {
        if (selectedCourse === null) {
          return true // add all elements
        } else {
          return eachUser.course === selectedCourse
        }
      })
      .map((eachUser) => {
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