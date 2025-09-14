import Header from './components/Header'
import Todo from './components/Todo'
import './App.css'
 
function App() { 
  return (
    <div className='App'>
      <Header />
      <Todo />

      {/* Footer Credit */}
      <footer className="footer">
        <p>
          Code with love by{" "}
          <a 
            href="https://github.com/nwaligrant"
            target="_blank" 
            rel="noopener noreferrer"
            className="footerLink"  
          >
            Nwali Grant <span className='heart'>❤️</span> 
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
