import "./UserInformation.scss";

const UserInformation = () => {
  return (
    <div className="user-information">
      <em className="profile">
        웅이
        <span className="user-status"></span>
      </em>
      <dl className="info">
        <dt>활동상태</dt>
        <dd>
          <a href="#">대화 가능</a>
        </dd>
        <dt>스터디룸</dt>
        <dd>4개</dd>
      </dl>
    </div>
  );
};

export default UserInformation;
