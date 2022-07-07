import logo from './logos/logo.png';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <>
    <img src = {logo} class = 'center'></img>
    <div className="container" style = {{backgroundColor: '#898AA6', maxWidth: '1000px', padding: '20px auto', margin: 'auto', marginTop: '30px'}}>
      <h1 style = {{color: 'azure', display: 'flex', justifyContent: 'center', fontSize: '80px'}}>Career Opportunities</h1>
    </div>
    
    <div className = 'container' style = {{backgroundColor: '#D6EFED',width: '690px', float: 'left', marginLeft: '50px'}}>
      <h1 style = {{color: '#51557E', fontSize: '60px', display: 'flex', justifyContent: 'center'}}>Teacher</h1>
      <h1 style = {{color: '#748DA6', fontSize: '25px', display: 'flex', justifyContent: 'center'}}>
        {'Part-time opportunity\u00A0'}
        <i class="bi bi-clock-history"></i>      
        <h1 style = {{color: '#748DA6', fontSize: '25px', display: 'flex', justifyContent: 'center', display: 'inline'}}>
          {'\u00A0Starts at $50/hour\u00A0'}
        </h1>
      </h1>
      <h1 style = {{color: '', fontSize: '20px', display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
        {'To deliver classes. Training will be provided.\u00A0'}
      </h1>
    </div>
    <div className = 'container' style = {{backgroundColor: '#D6EFED', width: '690px', float: 'right', marginRight: '50px', marginLeft: '0px'}}>
      <h1 style = {{color: '#51557E', fontSize: '60px', display: 'flex', justifyContent: 'center'}}>Software Enginner</h1>
      <h1 style = {{color: '#748DA6', fontSize: '25px', display: 'flex', justifyContent: 'center'}}>
        {'Part-time opportunity\u00A0'}
        <i class="bi bi-clock-history"></i>      
        <h1 style = {{color: '#748DA6', fontSize: '25px', display: 'flex', justifyContent: 'center', display: 'inline'}}>
          {'\u00A01 opening\u00A0'}
        </h1>
      </h1>
      <h1 style = {{color: '', fontSize: '20px', display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
        {'Website development. Training will be provided. \u00A0'}
      </h1>
    </div>
    <div className = 'container' style = {{backgroundColor: '#D6EFED', width: '690px', float: 'left', marginLeft: '50px'}}>
      <h1 style = {{color: '#51557E', fontSize: '60px', display: 'flex', justifyContent: 'center'}}>Secretary</h1>
      <h1 style = {{color: '#748DA6', fontSize: '25px', display: 'flex', justifyContent: 'center'}}>
        {'Full-time opportunity\u00A0'}
        <i class="bi bi-clock-fill"></i>      
        <h1 style = {{color: '#748DA6', fontSize: '25px', display: 'flex', justifyContent: 'center', display: 'inline'}}>
          {'\u00A01 opening\u00A0'}
        </h1>
      </h1>
      <h1 style = {{color: '', fontSize: '20px', display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
        {"To work closely with the director. Tasks include marketing, coordinating, documenting, answering parents' questions, sending notifications, maintaining social media pages and book stores, write various documents, helping run events, organizing math contests, etc. Training will be provided.  \u00A0"}
      </h1>
    </div>
    <div className = 'container' style = {{backgroundColor: '#D6EFED', width: '690px', float: 'right', marginRight: '50px', height: '350px'}}>
      <h1 style = {{color: '#51557E', fontSize: '60px', display: 'flex', justifyContent: 'center'}}>Teaching Assistance</h1>
      <h1 style = {{color: '#748DA6', fontSize: '25px', display: 'flex', justifyContent: 'center'}}>
        {'Temporary co-op opportunity\u00A0'}
        <i class="bi bi-clock-history"></i>      
        <h1 style = {{color: '#748DA6', fontSize: '25px', display: 'flex', justifyContent: 'center',}}>
          {'\u00A01 opening\u00A0'}
        </h1>
      </h1>
      <h1 style = {{color: '', fontSize: '20px', display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
        {"To prepare and to mark homework, quizzes, and mock contests. Need to know how to use Latex. Training will be provided.   \u00A0"}
      </h1>
    </div>    

    <div className = 'container' style = {{backgroundColor: '#898AA6', width: '1200px', display: 'flex', height: 'auto', justifyContent: 'center'}}>
      <h1 style = {{color: 'azure', fontSize: '80px', display: 'flex', justifyContent: 'center'}}>Volunteering Opportunities</h1>
    </div>  
    <div className = 'container' style = {{backgroundColor: '#D6EFED', width: '800px'}}>
    <h1 style = {{color: '#51557E', fontSize: '60px', display: 'flex', justifyContent: 'center'}}>Problem Designer</h1>
      <h1 style = {{color: '#748DA6', fontSize: '25px', display: 'flex', justifyContent: 'center'}}>
        {'Part-time opportunity\u00A0'}
        <i class="bi bi-clock-history"></i>      
        <h1 style = {{color: '#748DA6', fontSize: '25px', display: 'flex', justifyContent: 'center',}}>
          {'\u00A01 opening\u00A0'}
        </h1>
      </h1>
      <h1 style = {{color: '', fontSize: '20px', display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
        {'To prepare "The ultimate practice" sets of problems. Need to know how to use Latex. Training will be provided.\u00A0'}
      </h1>
    </div>  

    <div className = 'container' style = {{backgroundColor :'#898AA6', width: '100%', borderRadius: '0px', marginBottom: '0px'}}>
      <h1 style = {{color: 'azure', display: 'flex', justifyContent: 'center', fontSize: '25px'}}>If you are interested in one or more of the positions above, please send your resume to xudiwaterloo@gmail.com.
</h1>
    </div>

    </>
  );
}

export default App;
