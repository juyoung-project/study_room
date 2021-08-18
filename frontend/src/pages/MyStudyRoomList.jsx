import React, { useState } from "react";
import Modal from "../components/Modal";
import Pagination from "react-js-pagination";
import StudyRoomList from "../components/StudyRoomList";
import "../assets/css/MystudyromList.scss";

const MyStudyRoomList = () => {
  // 모달 이벤트
  const [isOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  // 스터디룸 최대 정원 설정 => MAX_MEMBER 만 바꾸기
  const maxMember = () => {
    const MAX_MEMBER = 10;
    let numArray = [];
    let i = 0;
    for (; i < MAX_MEMBER; i++) {
      numArray.push(<option value={i + 1}>{i + 1}</option>);
    }
    return numArray;
  };

  // 패이지네이션
  const [page, setPage] = useState(1);
  const handlePageChange = (page) => {
    console.log(page);
    setPage(page);
  };

  return (
    <main id="main" id="main" className="my-studyroom-list">
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
          <form action="#" className="search-studyroom">
            <input type="text" placeholder="스터디룸 찾기" />
          </form>
          <button
            id="create-studyroom"
            className="btn brand-color regular-h create-studyroom"
            type="button"
            onClick={openModal}
          >
            새 스터디룸 만들기
          </button>
          <Modal
            isOpen={isOpen}
            close={closeModal}
            title="새 스터디룸 만들기"
            button="만들기"
            isbuttonlong={false}
          >
            <em>스터디룸 이름</em>
            <p>멤버들과 이용할 스터디룸의 새로운 이름을 입력해주세요</p>
            <input type="text" placeholder="스터디룸 이름" className="w100" />
            <em>최대 정원 설정</em>
            <p>이 스터디룸은 최대 몇명이 이용 할 수 있나요?</p>
            <div className="select-box">
              <select>
                <option>선택해주세요</option>
                {maxMember()}
              </select>
              명
            </div>
          </Modal>
        </div>
        <StudyRoomList />
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
};

export default MyStudyRoomList;
