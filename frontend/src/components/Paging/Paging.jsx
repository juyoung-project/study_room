import React from "react";
import Pagination from "react-js-pagination";

// 아직 업뎃 안 함
// 참고 -> https://cotak.tistory.com/112

const Paging = ({ page, count, setPage }) => {
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={10}
      totalItemsCount={450}
      pageRangeDisplayed={5}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={handlePageChange}
    />
  );
};
export default Paging;
