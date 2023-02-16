import React from 'react'
import MainContainerNav from './MainContainerNav'
import { Routes, Route} from "react-router-dom"
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
