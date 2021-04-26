import "./App.css";
import Header from "./Header";
import Jobs from "./Jobs";
import Footer from "./Footer";

function App() {
  return (
    <div className="main">
      <Header title="The Job Board"></Header>
      <Jobs></Jobs>
      <Footer></Footer>
    </div>
  );
}

export default App;
