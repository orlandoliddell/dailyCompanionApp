import React from "react"
import { Link } from "react-router-dom"
import { motion as m} from 'framer-motion'; 

const Signin = () => {
	return (
		<m.div  initial={{ opacity:0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75,ease: "easeOut"}}
            className="max-w-[700px] mx-auto my-16 p-4">
			<h1 className="text-2xl font-bold py-2">Sign into your account</h1>
			<p className="py-2">
				Don't have an account yet?{" "}
				<Link to="/signup" className="underline">
					Sign up
				</Link>
			</p>

			<form>
				<div className="flex flex-col py-2">
					<label className="py-2 font-medium">Email Address</label>
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
					Login
				</button>
			</form>
		</m.div>
	)
}

export default Signin
