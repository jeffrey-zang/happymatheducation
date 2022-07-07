import logo from './logos/logo.png';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <>
    <img src = {logo} class = 'center'></img>
    <div className="container" style = {{backgroundColor: '#898AA6', maxWidth: '350px', padding: '20px', margin: 'auto', marginTop: '30px'}}>
      <h1 style = {{color: 'azure', display: 'flex', justifyContent: 'center', fontSize: '60px'}}>Career</h1>
    </div>
    
    <div className = 'container' style = {{backgroundColor: '#D6EFED', width: '800px', float: 'left', marginLeft: '80px'}}>
      <h1 style = {{color: '', fontSize: '50px', display: 'flex', justifyContent: 'center'}}>Teacher</h1>
      <h1 style = {{color: '#748DA6', fontSize: '25px'}}>Part-time opportunity</h1>
      <i class="bi bi-app"></i>
    </div>
    <div className = 'container' style = {{backgroundColor: '#D6EFED', width: '800px', position: 'fixed', left: '50%', marginLeft: '-200px'}}></div>
    <div className = 'container' style = {{backgroundColor: '#D6EFED', width: '800px', float: 'right', marginRight: '80px'}}></div>
    </>
  );
}

export default App;
