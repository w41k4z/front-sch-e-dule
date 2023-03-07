import Header from './Header';
import Content from './Content';
import { useEffect } from 'react';

import '../../assets/bootstrap/css/bootstrap.min.css';
import '../../assets/css/App.css';

function App() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "../../assets/bootstrap/js/bootstrap.bundle.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );

}

export default App;
