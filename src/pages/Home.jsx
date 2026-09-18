import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <h1>Movie Explorer</h1>
        <p>Discover your favorite movies and shows.</p>
      </main>

      <Footer />
    </>
  );
}

export default Home;