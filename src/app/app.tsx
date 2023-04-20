import { ActionProvider } from "./context";
import Router from "./utils/router";

export function App() {
  return (
    <ActionProvider>
      <Router/>
    </ActionProvider>
  );
}

export default App;
