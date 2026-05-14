import Header from "./components/Header"
import Form from "./components/Form"
import Footer from "./components/Footer"

function App() {
  

  return (
    <div className="container">
      <div className="form-window">
        <Header />
        <main>
          <Form />
        </main>
      </div>
      <Footer />
    </div>

  )
}

export default App
