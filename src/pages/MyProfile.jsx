// example of nested destructuring
// function MyProfile({userProfile: {name, location}}) {

function MyProfile(props) {
  
  console.log(props)
  return (
    <div>
      
        <h1>This is your profile</h1>

        <h3>Name: {props.userProfile.name} </h3>
        <p>Location: {props.userProfile.location}</p>

    </div>
  )
}
export default MyProfile