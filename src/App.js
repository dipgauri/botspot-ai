import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Banner from "./components/Banner";
import WhyUs from "./components/WhyUs";
import Serve from "./components/Serve";
import Service from "./components/Service";

function App() {
  return (
    <>
      {/* Navbar */}
      <NavigationBar />

      {/* banner */}
      <Banner />

      {/* why us */}
      <WhyUs />

      {/* who we serve */}
      <Serve />

      {/* services section */}
      <Service />
    </>
  );
}

export default App;
