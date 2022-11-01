import Header from "./components/Header/";
import Main from "./components/Main/Main";
import Charts from "./components/charts/Charts";
import BarChart from "./components/Bar/index";

function App() {
  return (
    <div className="container">
      <Header />
      <Charts />
      <Main />
      <BarChart />
    </div>
  );
}

export default App;
