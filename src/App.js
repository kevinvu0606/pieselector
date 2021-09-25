import { GlobalProvider } from './context/GlobalState'
import { Stores } from './components/Store'

function App() {
  return (
    <GlobalProvider >
      <Stores />
    </GlobalProvider>
  );
}

export default App;
