import "../assets/css/SigninupForm.scss";
import CustomAxios from "../axiosPlugin";
import KakaoSignUp from "../components/KakaoSignUp";
import sendPost from "../commonAxios";

const SigninForm = () => {
  function sendLogin() {
    sendPost("/api/login", {}, function (rtn) {});
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
          {/*<CustomAxios/>*/}
          <button className="btn brand-color" onClick={sendLogin}>
            로그인
          </button>
        </form>
        <div className="login-submenu">
          <a href="#" className="text-effect basic">
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
