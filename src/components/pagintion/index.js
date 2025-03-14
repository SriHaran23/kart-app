import React from 'react';

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
    const getPageNumbers = () => {
        if (nPages <= 7) return Array.from({ length: nPages }, (_, i) => i + 1);

        const pages = [1, 2];
        if (currentPage > 4) pages.push('...');
        const range = Array.from({ length: 3 }, (_, i) => currentPage - 1 + i)
            .filter((p) => p > 2 && p < nPages - 1);
        pages.push(...range);
        if (currentPage < nPages - 3) pages.push('...');
        pages.push(nPages - 1, nPages);
        return pages;
    };

    const handlePageChange = (page) => {
        if (page !== '...' && page !== currentPage) setCurrentPage(page);
    };

    return (
        <nav>
            <ul className="pagination justify-content-center mb-0">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
                </li>
                {getPageNumbers().map((page, i) => (
                    <li key={i} className={`page-item ${page === currentPage ? 'active' : ''} ${page === '...' ? 'disabled' : ''}`}>
                        {page === '...' ? (
                            <span className="page-link">...</span>
                        ) : (
                            <button className="page-link" onClick={() => handlePageChange(page)}>{page}</button>
                        )}
                    </li>
                ))}
                <li className={`page-item ${currentPage === nPages ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;