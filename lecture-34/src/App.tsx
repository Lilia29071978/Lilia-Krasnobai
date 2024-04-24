import './App.css'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import Profile from './components/Profile.tsx'
import Gallery from './components/Gallery.tsx'

function App() {

  return (
    <>

      <Navbar />
      <Profile />
        <Gallery />
        <Footer />

    </>
  )
}

export default App
