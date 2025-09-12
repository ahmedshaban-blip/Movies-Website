// put this inside MoviesHome.jsx (above the return) or in a separate file
export const Pagination = ({ page, totalPages, onChange }) => {
  const clamp = (p) => Math.max(1, Math.min(totalPages, p));
  const go = (p) => onChange(clamp(p));

  const pageRange = () => {
    // 1 … (page-1) page (page+1) … total
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const left = Math.max(2, page - 1);
    const right = Math.min(totalPages - 1, page + 1);
    const range = [1];
    if (left > 2) range.push('…');
    for (let i = left; i <= right; i++) range.push(i);
    if (right < totalPages - 1) range.push('…');
    range.push(totalPages);
    return range;
  };

  return (
    <nav className="pagination-controls" aria-label="Movies pagination">
      <button className="btn btn-nav" onClick={() => go(1)} disabled={page === 1} title="First page">
        « First
      </button>
      <button className="btn btn-nav" onClick={() => go(page - 1)} disabled={page === 1} title="Previous page">
        ‹ Prev
      </button>

      <ul className="pager" role="list">
        {pageRange().map((p, idx) =>
          p === '…' ? (
            <li key={`e-${idx}`} className="ellipsis" aria-hidden="true">…</li>
          ) : (
            <li key={p}>
              <button
                className={`btn btn-page ${p === page ? 'active' : ''}`}
                aria-current={p === page ? 'page' : undefined}
                onClick={() => go(p)}
              >
                {p}
              </button>
            </li>
          )
        )}
      </ul>

      <button className="btn btn-nav" onClick={() => go(page + 1)} disabled={page === totalPages} title="Next page">
        Next ›
      </button>
      <button className="btn btn-nav" onClick={() => go(totalPages)} disabled={page === totalPages} title="Last page">
        Last »
      </button>

      <div className="jump">
        <input
          type="number"
          min="1"
          max={totalPages}
          placeholder="Go to…"
          onKeyDown={(e) => { if (e.key === 'Enter') go(Number(e.currentTarget.value)); }}
        />
        <button
          className="btn btn-go"
          onClick={(e) => {
            const input = e.currentTarget.previousElementSibling;
            const val = Number(input.value);
            if (!Number.isNaN(val)) go(val);
          }}
        >
          Go
        </button>
      </div>
    </nav>
  );
};
