import {useTheme} from './ThemeContext';
import './App.css';
import DOMExplanation from './DOMExplanation';
import DOMAnimation from './DOMAnimation';
import logo from './logo.svg';
import ThemeSwitcher from './ThemeSwitcher';
import BurgerMenu from './BurgerMenu';

function App() {
    const { theme } = useTheme();

  return (
    <div className="App">
      <div className={
        `${theme === 'light'
          ? 'bg-white'
          : theme === 'dark'
          ? 'bg-gray-900'
          : 'bg-sky-950'
        } relative`}>
      <ThemeSwitcher />
      <BurgerMenu />
      <header className='flex flex-col justify-center items-center mb-10'>
        <img src={logo} className='w-1/2' alt="logo" />
        <h1 className='text-5xl text-theme'>React en 5 min</h1>
      </header>
      <div id="dom">
        <DOMExplanation />
        <DOMAnimation />
      </div>
      <footer>
        <section className='text-sm font-semibold italic'>
          <p>écrit par CECILLON Enzo</p>
          <p> en collaboration avec LEDRU Romane, BOUDRAA Abdelhakim </p>
        </section>
      </footer>
      </div>
    </div>
  );
}

export default App;

