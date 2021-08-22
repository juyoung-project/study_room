import { useState } from "react";
import "../assets/css/SigninupForm.scss";
import sendPost from "../commonAxios";
import dataDict from "./data";

const SignupForm = () => {
  const [signUpInputs, setInputs] = useState({
    nick_name: "",
    email: "",
    password: "",
  });

  const { nick_name, email, password } = signUpInputs;

  const onChange = (e) => {
    const { value, name } = e.target;

    setInputs({
      ...signUpInputs,
      [name]: value,
    });
  };

  function createUser() {
    let params = signUpInputs;
    sendPost(
      "/api/sign/up",
      params,
      function (rtn) {
        console.log(rtn);
        // 석세스
        // 라우터고로 로그인 페이지로 보내버리기
      },
      function () {
        // fail
      }
    );
  }

  const domain = dataDict.domain;
  const domainList = domain.map((domain) => (
    <option value={domain}>{domain}</option>
  ));

  return (
    <main id="main" className="signup-form">
      <div>
        <h2>회원가입</h2>
        <form action="#" method="post">
          <ul>
            <li className="input-group email-input">
              <label htmlFor="email-input-local">이메일</label>
              <div>
                <input
                  type="text"
                  id="email-input-local"
                  placeholder="이메일"
                  name="email"
                  value={email}
                  onChange={onChange}
                />
                <span className="email-input-separator">@</span>
                <select className="form-control">
                  <option>선택해주세요</option>
                  {domainList}
                  <option value="client-input">직접입력</option>
                </select>
                <input
                  type="text"
                  placeholder="입력해주세요"
                  className="client-input"
                />
              </div>
            </li>
            <li className="input-group password-input">
              <label htmlFor="password-input">비밀번호</label>
              <em>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</em>
              <input
                type="password"
                id="password-input"
                placeholder="비밀번호"
                name="password"
                value={password}
                onChange={onChange}
              />
            </li>
            <li className="input-group password-input-check">
              <label htmlFor="password-input-check">비밀번호 확인</label>
              <input
                type="password"
                id="password-input-check"
                placeholder="비밀번호"
              />
            </li>
            <li className="input-group nickname-input">
              <label htmlFor="nickname-input">닉네임</label>
              <em>스터디룸에서 사용 할 별명을 입력해주세요. (2~15자)</em>
              <input
                type="text"
                id="nickname-input"
                placeholder="별명 (2~15자)"
                name="nick_name"
                value={nick_name}
                onChange={onChange}
              />
            </li>
          </ul>
          <a className="btn brand-color regular-h" onClick={createUser}>
            회원가입하기
          </a>
        </form>
      </div>
    </main>
  );
};

export default SignupForm;
