import React from 'react';
import Signin from "./components/Signin"
import Signup from "./components/Signup"
import Account from "./components/Account"
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className=''>
			<h1 className="text-3xl font-bold underline text-center">
				Hello world!
			</h1>
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/account' element={<Account />} />
      </Routes>
		</div>
	)
}

export default App
