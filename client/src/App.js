import logo from './logo.svg';
import './App.css';

// import Menu from './test';


function Menu() {
  return (
      <div className = 'menu-wrapper'>
          <a>
              this is a test 'a'
          </a>
      </div>


  );
}

function HoleNumber() {
  return(
    <div className = 'hole-number-wrapper'>
    {/* FIXME add dynamic hole number/yardage/par */
    /*edit layout to make it lay 100% width, ~100px height */}
    <h1>Hole Number 1</h1>
    <h1>350 Yards</h1>
    <h1>Par 4</h1>
  </div>
  );
}


function testOnPress() {
  <h1>This is a test</h1>
}


// FIXME add functionality on press, make player handler, 
// each player is an instance of the player handler
function ScoreBox() {
  return (
    <div className='player-wrapper'>
      <a>player 1</a>
      <input/>
      <Button
        onPress={testOnPress}
        title="test"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
/>
      
{/* 
      <a>player 2</a>
      <input/>

      <a>player 3</a>
      <input/>

      <a>player 4</a>
      <input/> */}

    </div>


  );
}









function App() {
  return (
    <div className="score-page-wrapper">
      <Menu/>
      <HoleNumber/>
      <ScoreBox/>




    </div>
  );
}

export default App;


// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
// <Test/>
// <Test/>
// </header>