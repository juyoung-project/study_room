import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as FaStarRegular } from "@fortawesome/free-regular-svg-icons";
import "./StudyRoomItem.scss";

const StudyRoomItem = () => {
  return (
    <li className="item">
      <NavLink to="/studyRoomDemo">
        <div className="studyroom-info">
          <h3>
            React 공부방
            <a className="is-favorite">
              <FontAwesomeIcon icon={faStar} className="true" />
              <FontAwesomeIcon icon={FaStarRegular} className="false" />
            </a>
          </h3>
          <span className="num-member">
            총 <em>5</em>명
          </span>
          <dl className="date-latest-updated">
            <dt>마지막 수정일</dt>
            <dd>2021.08.12</dd>
          </dl>
        </div>
        <ol className="section-latest-updated">
          <li className="new">메모장</li>
          <li className="new">채팅</li>
        </ol>
      </NavLink>
    </li>
  );
};

export default StudyRoomItem;
