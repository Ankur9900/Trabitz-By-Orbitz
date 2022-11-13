
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Hotel from '../pages/Hotels'

// import PaymentPage from '../pages/PaymentPage'
// import SignIn from '../pages/SignIn'
// import SignUp from '../pages/SignUp'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            {/* <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} /> */}
             <Route path='/hotels/:id' element={
               

                    <Hotel />
                
            } />
            {/* <Route path='/payment' element={<Payment />} /> */}
            {/* <Route path='/otp' element={<Otp />} /> */}
            {/* <Route path='/thanks' element={<Thanks />} />  */}

        </Routes>
    )
}

export default AllRoutes