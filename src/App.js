import "./App.css";
import AppRoutes from "./appRoutes";
import Column from "./components/Column/Column";

const App = () => {
  return (
    <Column width="100vw" height="100vh" className="App">
      <AppRoutes />
    </Column>
  );
}

export default App;
