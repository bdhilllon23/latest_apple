import Footer from './Footer.jsx'
import Main from './Main.jsx'
import Nav from './Nav.jsx'

export default function AppleLoginRoot() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fbfbfd] ">
      <Nav logoTo="/icloud" />
      <Main />
      <Footer />
    </div>
  )
}
