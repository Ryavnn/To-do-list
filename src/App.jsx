import './App.css'
import Todos from './Pages/Todos';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';

function App() {

  return (
    <div>
        <Router>
          <Routes>
            <Route path='/' element={<Todos />} />
          </Routes>
        </Router>

    </div>
  );
}

export default App;
