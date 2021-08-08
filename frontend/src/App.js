import './App.css';
import axios_plugin from "./axios_plugin";

function App() {
  const onClick = () => {
    axios_plugin.sendAxios("http://localhost:80/test",{},function (rtn){
      alert(111111111)
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={onClick} >
          aaa
        </button>
          Learn Reactaaaaaaaaaaaaaaaaaaaaaaaa
      </header>
    </div>
  );
}

export default App;
