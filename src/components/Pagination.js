import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { getMoviePage } from "../redux/action/MovieAction";
import { useDispatch, useSelector } from "react-redux";

const PaginationList = () => {
  const [movieCount, setMovieCount] = useState(0);

  const dispatch = useDispatch();
  const pages_Num = useSelector((state) => state.pageCount);
  useEffect(() => {
    setMovieCount(pages_Num);
    // eslint-disable-next-line
  }, []);

  const handlePageClick = (page) => {
    dispatch(getMoviePage(page.selected + 1));
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      pageCount={movieCount}
      previousLabel="< previous"
      containerClassName={"pagination justify-content-center p-3"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};

export default PaginationList;
