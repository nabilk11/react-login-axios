
import { useContext } from 'react';
import './App.css';
import { ThemeContext } from './components/contexts/theme';
import { Registration } from './components/Registration/Registration';

function App() {
  // setting up theme
  const [{ theme, isDark}, toggleTheme] = useContext(ThemeContext)
  console.log("theme", theme)

  return (
    <main className="App" style={{backgroundColor: theme.backgroundColor, color: theme.color}}>
      <div className="text">It's a {isDark ? 'Dark' : 'Light'} theme</div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Registration />
    </main>
  );
}

export default App;
