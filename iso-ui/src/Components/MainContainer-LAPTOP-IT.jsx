import React from 'react'
import MainContainerNav from './MainContainerNav'
import { Routes, Route, Navigate } from "react-router-dom"
import Levels from './Levels'
// import FinalForms from "./FinalFroms";
// import Frames from './Frames';
// import IsoDocuments from './IsoDocuments';
// import IsoRequirements from './IsoRequirements';
// // import LevelDetailpage from './LevelDetailPage

// import L1 from './level-1';
// import L2 from './level-2';
// import L3 from './level-3';
// import L4 from './level-4';


import OpsLevels from './OpsLevels';
import FinanceAdminLevels from './FinanceAdminLevels';
import QALevels from './QALevels';
import ManagementLevels from './ManagementLevels';
import QALevelDetailPage from './QALevelDetailPage';
import FinanceLevelDetailPage from './FinanceLevelDetailPage';
import OpsLevelDetailPage from './OpsLevelDetailPage';
import ManagementLevelDetailPage from './ManagementLevelDetailPage'

// OpsLevels
const MainContainer = () => {
    return (
        <div className="mainContainer">
            <main className="main-content position-relative border-radius-lg ">
                {/* <!-- Navbar --> */}

                <MainContainerNav />

                {/* <!-- End Navbar --> */}
                <div className="container-fluid py-4">

                    <Routes>
                        {/* <Route exact path="/levels/" element={<Levels />} /> */}

                        {/* <Route exact path="/levels/1/" element={<L1 />} /> */}
                        {/* <Route exact path="/levels/2/" element={<L2 />} /> */}
                        {/* <Route exact path="/levels/3/" element={<L3 />} /> */}
                        {/* <Route exact path="/levels/4/" element={<L4 />} />  */}



                        {/* levels detail page 




                        {/* <Route path="/finalForms/" element={<FinalForms />} />
                        <Route path="/frames/" element={<Frames />} />
                        <Route path="/isoDocuments/" element={<IsoDocuments />} />
                        <Route path="/isoRequirements/" element={<IsoRequirements />} /> */}

                        {/* <Navigate replace to="/levels" /> */}

                        {/* <Route path="/" element={<Navigate to='/' replace />} /> */}


                        {/* <Route exact path="/levels/:levelId/" element={<LevelDetailpage />} /> */}





                        {/* This is the New navigation */}




                        <Route exact path="/ops/" element={<OpsLevels />} />
                        <Route exact path="/ops/:level" element={<OpsLevelDetailPage />} />


                        <Route exact path="/finance-admin/" element={<FinanceAdminLevels />} />
                        <Route exact path="/finance-admin/:level" element={<FinanceLevelDetailPage />} />


                        <Route exact path="/qa/" element={<QALevels />} />
                        <Route exact path="/qa/:level" element={<QALevelDetailPage />} />



                        {/* ManagementLevels */}
                        <Route exact path="/management/" element={<ManagementLevels />} />
                        <Route exact path="/management/:level" element={<ManagementLevelDetailPage />} />

                        {/* <Route path="/" element={<Navigate to='/ops' replace />} /> */}

                    </Routes>







                </div>
            </main>

        </div>
    )
}

export default MainContainer
