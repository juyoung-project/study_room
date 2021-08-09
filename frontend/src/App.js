import "./App.css";
import CustomAxios from "./axiosPlugin";

function App() {
  // const onClick = () => {
  //   axios_plugin.sendAxios("http://localhost:80/test",{},function (rtn){
  //     alert(111111111)
  //   })
  // }
  return (
    <div className="App">
      <header className="App-header">
        <CustomAxios />
        Learn Reactaaaaaaaaaaaaaaaaaaaaaaaa
      </header>
    </div>
  );
}

export default App;
