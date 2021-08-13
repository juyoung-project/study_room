import "../assets/css/signinup-form.scss";
import KakaoSignUp from "../components/KakaoSignUp";

export default function SigninForm() {
  return (
    <main className="signin-form">
      <div>
        <h2>로그인</h2>
        <form action="#" method="post" className="">
          <input className="login-input" type="text" placeholder="이메일" />
          <input
            className="login-input"
            type="password"
            placeholder="비밀번호"
          />
          <button className="btn brand-color" type="submit">
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
}
