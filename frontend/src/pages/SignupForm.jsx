import "../assets/css/signinup-form.scss";

export default function SignupForm() {
  const domain = [
    "naver.com",
    "hanmail.net",
    "daum.net",
    "gmail.com",
    "nate.com",
    "hotmail.com",
    "outlook.com",
    "icloud.com",
  ];
  const domainList = domain.map((domain) => (
    <option value={domain}>{domain}</option>
  ));

  return (
    <main className="signup-form">
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
              />
            </li>
          </ul>
          <button type="submit" className="btn brand-color">
            회원가입하기
          </button>
        </form>
      </div>
    </main>
  );
}
