import './App.css'
import Router from './router/Router'
import ScrollToTop from './router/ScrollTopTop';
import { fontDir } from './utils/helpFunctions';

function App() {
  const { currentFont, dir } = fontDir();
  return (
    <div className={`${currentFont} relative`} dir={dir}>
      <ScrollToTop>
        <Router />
      </ScrollToTop>

    </div>
  )
}

export default App
