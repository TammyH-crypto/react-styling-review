import "./App.scss";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Cards />
      </main>
      <Footer />
    </>
  );
}

export default App;
