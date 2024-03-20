import ParentComponent from "./ParentComponent";
import Header from "./Component/Header";
import { TopNav } from "./layouts/dashboard/top-nav";
import RouterDonki from "./Router/Router";
import { DataProvider } from "./context/main-context";

function App() {
  return (
    <div className="App">
      <DataProvider>
     <RouterDonki/>
      </DataProvider>
    </div>
  );
}

export default App;
