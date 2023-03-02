import './App.css';

function App() {
  return (
    <div className="App">

      <div className='App-header'>
        <h1>Technical Lead</h1>
        <p>Un technical leader es un desarrollador de software que tiene a su mando un equipo completo de desarrollo. Cuenta con la responsabilidad de que los productos que se lleven a cabo cuenten con la calidad técnica correspondiente.</p>
        <p>El Tech Lead debe crear una visión técnica con el equipo de desarrollo y trabajar con todo el grupo para llegar al objetivo. En toda la fase de creación, el technical leader suma las habilidades de otros roles diferentes, eso sí, siempre ligado al código y programando.</p>
        <p>La formación de un tech leader es la de un Full stack developer con conocimientos <span>Front End y Back End</span>.</p>
      </div>

      <div className='App-header white'>
        <h3>Conocimientos técnicos necesarios</h3>
        <div className='column'>
          <div className='column-a'>
            <h4>Front-End</h4>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Figma</li>
            </ul>
          </div>
          <div className='column-b'>
            <h4>Back-End</h4>
            <ul>
              <li>Node.js</li>
              <li>PHP</li>
              <li>MongoDB</li>
              <li>SQL</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='App-header'>
        <h2>Habilidades</h2>
        <p>Entre las habilidades de un Teach Leader destacan las siguientes:</p>
          <ul>
            <li>Empatía</li>
            <li>Motivación</li>
            <li>Comunicación</li>
            <li>Visión en conjunto</li>
            <li>Gestión de equipo</li>
            <li>Delegación de tareas</li>
          </ul>
      </div>

      <div className='App-header white'>
        <h2>Funciones principales</h2>
        <ul>
          <li>Definición de la arquitectura</li>
          <li>Coordinación y validación de los desarrollos</li>
          <li>Estandarización de implementación de metodologías</li>
          <li>Implementación de mejoras</li>
          <li>Motivación del equipo</li>
          <li>Mantenimiento del flujo de información</li>
          <li>Control de procesos</li>
        </ul>
      </div>

    </div>
  );
}

export default App;
