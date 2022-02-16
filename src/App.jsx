
import { useContext } from 'react';
import './App.css';
import { ThemeContext } from './components/contexts/theme';
import { Registration } from './components/Registration/Registration';

function App() {
  // setting up theme
  const theme = useContext(ThemeContext)
  console.log("theme", theme)
  return (
    <main className="App">
      <Registration />
    </main>
  );
}

export default App;
