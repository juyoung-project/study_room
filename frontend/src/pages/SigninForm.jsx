import "../assets/css/SigninupForm.scss";
import CustomAxios from "../axiosPlugin";
import KakaoSignUp from "../components/KakaoSignUp";
import sendPost from "../commonAxios";

const SigninForm = () => {
  function sendLogin() {
    let param = {
      email: "wndud8830@naver.com",
      password: "asd1234!",
    };
    sendPost(
      "/api/login",
      param,
      function (rtn) {
        alert(rtn.data.access_token)
        sessionStorage.setItem("access_token", rtn.data.access_token)
        if (rtn.data.isLogin){
          alert("성공")
        }
      },
      function () {}
    );
  }
  function sendEamil() {
    let param = {
      to: "wndud8830@naver.com",
    };
    sendPost(
      "/api/send/email",
      param,
      function (rtn) {
        alert("이메일 발송");
      },
      function () {
        alert("통신 실패");
      }
    );
  }
  return (
    <main id="main" className="signin-form">
      <div>
        <h2>로그인</h2>
        <form method="post" className="">
          <input className="login-input" type="text" placeholder="이메일" />
          <input
            className="login-input"
            type="password"
            placeholder="비밀번호"
          />
          <a className="btn brand-color regular-h" onClick={sendLogin}>
            로그인
          </a>
        </form>
        <div className="login-submenu">
          <a href="#" className="text-effect basic" onClick={sendEamil}>
            비밀번호 재설정
          </a>
          <a href="/signup" className="text-effect basic">
            회원가입
          </a>
        </div>
        <section className="login sns">
          <KakaoSignUp className="login-kakao" />
        </section>
      </div>
    </main>
  );
};

export default SigninForm;
