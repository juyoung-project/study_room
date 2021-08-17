import React, { useState } from "react";
import Pagination from "react-js-pagination";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as FaStarRegular } from "@fortawesome/free-regular-svg-icons";
import "../assets/css/mystudyrom-list.scss";
import { NavLink } from "react-router-dom";

export default function MyStudyRoomList() {
  const [page, setPage] = useState(1);
  const handlePageChange = (page) => {
    console.log(page);
    setPage(page);
  };

  return (
    <main className="my-studyroom-list">
      <section className="user-info">
        <div>
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
      </section>
      <section className="user-studyroom-list">
        <h2>
          나의 스터디룸은 총 <em>4</em>개 입니다.
        </h2>
        <div className="user-input">
          <form action="#">
            <input type="text" placeholder="스터디룸 찾기" />
          </form>
          <button
            id="create-studyroom"
            className="btn brand-color regular"
            type="button"
          >
            새 스터디룸 만들기
          </button>
        </div>
        <ul className="list">
          <li>
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
                <li>채팅</li>
              </ol>
            </NavLink>
          </li>
        </ul>
        <Pagination
          activePage={page}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={handlePageChange}
        />
      </section>
    </main>
  );
}
