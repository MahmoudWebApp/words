import './App.css'
import Router from './router/Router'
import { fontDir } from './utils/helpFunctions';

function App() {
  const { currentFont, dir } = fontDir();
  return (
    <div className={`${currentFont} relative`} dir={dir}>
      <Router />
    </div>
  )
}

export default App
