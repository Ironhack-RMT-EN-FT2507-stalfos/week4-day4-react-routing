import AboutPage from "./pages/AboutPage"
import LocationPage from "./pages/LocationPage"
import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"
import MyProfile from "./pages/MyProfile"

import { Routes, Route, Link } from "react-router-dom"
import { useState } from "react"
import AllUsersPage from "./pages/AllUsersPage"
import UserProfile from "./pages/UserProfile"

function App() {

  const [ userProfile, setUserProfile ] = useState( {
    name: "bob",
    location: "barcelona",
    course: "web",
    id: "1234"
  } )

  // we could grab the URL from the window
  console.log(window.location)

  return (
    <>
      
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About Page</Link>
        <br />
        <Link to="/location/spain">Our Location</Link>
        <br />
        <Link to="/my-profile">Go to your Profile</Link>
        <br />
        <Link to="/all-users">See all the users</Link>
      </nav>

      <Routes>
        {/* this is where out URLS will be managed. When the user goes to a specific URL, which component will be rendered */}

        <Route path={"/"} element={ <HomePage /> } />
        <Route path={"/about"} element={ <AboutPage /> } />
        <Route path={"/location/spain"} element={ <LocationPage /> } />
        <Route path={"/my-profile"} element={ <MyProfile userProfile={userProfile}/> } />
        <Route path={"/all-users"} element={ <AllUsersPage /> } />
        <Route path={"/user-details/:userId/:username"} element={ <UserProfile /> } />

        {/* error handler */}
        <Route path={"*"} element={ <NotFoundPage /> }/>

      </Routes>


      
      
      


    </>
  )
}

export default App
