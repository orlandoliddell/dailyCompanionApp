import React from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Signin from "./Signin"
import Signup from "./Signup"
import Account from "./Account"

function AnimatedRoutes() {
	const location = useLocation()

	return (
		<AnimatePresence initial={false}>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Signin />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/account" element={<Account />} />
			</Routes>
		</AnimatePresence>
	)
}

export default AnimatedRoutes
