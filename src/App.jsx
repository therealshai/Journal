import JournalHeader from "./components/JournalHeader"
import Card from "./components/card"
import img1 from "./assets/img1.jpg"
import img2 from "./assets/img2.jpg"

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      
      <JournalHeader />
      <div className=" m-16"> 
      <Card img={img1} content= "This is my content" />
      <Card img={img2} content= "This is my content2" />

      </div>
          </div>
  )
}

export default App
