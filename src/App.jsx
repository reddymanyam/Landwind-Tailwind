import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import CmpLogos from './components/CmpLogos/CmpLogos'
import Analysis1 from './components/Analysis1/Analysis1'
import Analysis2 from './components/Analysis2/Analysis2'
import Analysis3 from './components/Analysis3/Analysis3'
import Quoate from './components/Quoate/Quoate'

const App = () => {
  return (
   <>
     <Navbar />
     <Home />
     <CmpLogos />
     <Analysis1 />
     <Analysis2 />
     <Analysis3 />
     <Quoate />
   </>
  )
}

export default App
