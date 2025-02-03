
const Pagination = ({ currentPage, onPageChange, totalBlogs, pageSize }) => {
    // Calculate total pages based on the total number of blogs
    const totalPages = Math.ceil(totalBlogs / pageSize);
  
    // Create an array of page numbers [1, 2, 3, ..., totalPages]
    const renderPaginationLinks = () => {
      return Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
        <li
          key={pageNumber}
          className={pageNumber === currentPage ? "activePagination" : ""}
        >
          <button onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </button>
        </li>
      ));
    };
  
    // If there are no blogs or only 1 page, you might choose not to render pagination
    if (totalPages < 2) {
      return null;
    }
  
    return (
      <ul className="pagination my-8 flex-wrap gap-4">
        {/* Previous Button */}
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
  
        {/* Page Number Links */}
        <div className="flex gap-1">{renderPaginationLinks()}</div>
  
        {/* Next Button */}
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    );
  };
  
  export default Pagination;
  