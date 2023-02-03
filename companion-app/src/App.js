import React from "react"
import Signin from "./components/Signin"
import Signup from "./components/Signup"
import Account from "./components/Account"
import { Route, Routes } from "react-router-dom"
function App() {
	return (
			<div className="App">
				<Routes >
					<Route path="/" element={<Signin />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/account" element={<Account />} />
				</Routes>
			</div>
	)
}

export default App
