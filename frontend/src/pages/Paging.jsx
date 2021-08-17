import React from "react";
import Pagination from "react-js-pagination";

// 아직 업뎃 안 함
// 참고 -> https://cotak.tistory.com/112

const Paging = ({ page, count, setPage }) => {
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={5}
      totalItemsCount={count}
      pageRangeDisplayed={5}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={setPage}
    />
  );
};
export default Paging;
