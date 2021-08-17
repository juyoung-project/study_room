import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import SigninForm from "./pages/SigninForm";
import SignupForm from "./pages/SignupForm";
import MyStudyRoomList from "./pages/MyStudyRoomList";
import StudyRoomDemo from "./pages/StudyRoomDemo";
import "./assets/css/reset.css";
import "./assets/css/components.scss";
import "./assets/css/common.scss";
import sendPost from "./commonAxios";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/studyRoomDemo" component={StudyRoomDemo} />
        <Route path="/myStudyRoomList" component={MyStudyRoomList} />
        <Route path="/signup" component={SignupForm} />
        <Route path="/signin" component={SigninForm} />
        <Route path="/" exact component={Main} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
