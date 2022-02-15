import './App.css';
import Formulario from './component/Form/Formulario';


function App() {
  return (
    <div className="App">
      <h1>Simulador de investimentos</h1>
      
      <section className='blockOne_Content'>
              <h2>Simulador</h2>
              <p>Rendimento</p>

              <Formulario />
            
        </section>
    </div>
  );
}

export default App;
