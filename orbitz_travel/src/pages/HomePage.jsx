import React from 'react'
import HomepageBody from '../Components/downtosearchbar/HomePageBody'
import Footer from '../Components/Footer/Footer'


import Navbar from '../Components/Navbar/Navbar'
import SearchPart from '../Components/searchpart/SearchPart'


const HomePage = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column",overflowX:"hidden" }}>
            <Navbar />
            <SearchPart />
            <HomepageBody />
            <Footer />
            {/* <HelpBox /> */}
        </div>
    )
}

export default HomePage