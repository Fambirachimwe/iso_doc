import React from 'react'
import MainContainer from './MainContainer'
import SideNav from './SideNav'
import './MainWrapper.css';

const MainWrapper = () => {
    return (
        <div className="mainWrapper">
            <div className="min-height-300 bg-primary position-absolute w-100"></div>
            {/* side nave here */}

            <SideNav />

            <MainContainer />
        </div>
    )
}

export default MainWrapper
