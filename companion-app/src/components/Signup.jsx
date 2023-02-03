import React from "react"
import { Link } from "react-router-dom"
import { motion as m } from "framer-motion"

const Signup = () => {
	return (
		<m.div
			initial={{ width: 0 }}
			animate={{ width: "100%" }}
			exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
			className="bg-red-100 top-0 left-0 w-full h-full absolute"
		>
			<div className="max-w-[700px] mx-auto my-16 p-4">
				<h1 className="text-2xl font-bold py-2">Signup for free</h1>
				<p className="py-2">
					Already have an account?{" "}
					<Link to="/" className="underline">
						Sign in
					</Link>
				</p>

				<form>
					<div className="flex flex-col py-2">
						<label className="py-2 font-medium">
							Email Address
						</label>
						<input className="border p-3" type="email" />
					</div>
					<div className="flex flex-col py-2">
						<label className="py-2 font-medium">Password</label>
						<input className="border p-3" type="password" />
					</div>
					<button
						className=" border border-blue-500 w-full p-4 my-2 rounded-lg text-white cursor-pointer bg-gradient-to-r from-green-400 to-blue-500
                    hover:from-pink-500 hover:to-yellow-500 hover:scale-105 duration-300"
					>
						Sign Up
					</button>
				</form>
			</div>
		</m.div>
	)
}

export default Signup
