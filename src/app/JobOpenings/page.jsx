import React from 'react'
import HeaderBanner from '../components/ApplyNow/HeaadeBanner'
import JobGrid from '../components/ApplyNow/JobGrid'
import JobCard from '../components/ApplyNow/JobCard'
import Sidebar from '../components/ApplyNow/SideBar'

function page() {
  return (
    <div>
  <HeaderBanner />
  <JobGrid />
  <JobCard />
  <Sidebar />

    </div>
  )
}

export default page;

