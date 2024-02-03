import React from "react";
import { PaginationItems, PaginationSection, active, disable } from "./styles";
const Pagination = ({
  postsPerPage,
  totalPosts,
  currentPageNumber,
  paginate,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const initial = Math.floor(currentPageNumber / 10);
  const indexOfLastPost = initial + postsPerPage - initial;
  const indexOfFirstPost =
    initial * postsPerPage > 1
      ? initial * postsPerPage - 1
      : initial * postsPerPage;

  return (
    <PaginationSection>
      <span
        onClick={() => paginate(currentPageNumber - 1)}
        className={currentPageNumber > 1 ? "" : disable}
      >
        ◀
      </span>

      {pageNumbers?.splice(indexOfFirstPost, indexOfLastPost)?.map((ele) => {
        return (
          <PaginationItems
            key={ele}
            className={currentPageNumber === ele ? active : ""}
            onClick={() => paginate(ele)}
          >
            {ele}
          </PaginationItems>
        );
      })}

      <span
        onClick={() => paginate(currentPageNumber + 1)}
        className={currentPageNumber < totalPosts / 10 ? "" : disable}
      >
        ▶
      </span>
    </PaginationSection>
  );
};

export default Pagination;
