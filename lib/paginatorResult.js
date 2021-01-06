const paginatorResult = (paginator, type) => {
    const totalPages = paginator.last_page;
    console.log('type is', typeof totalPages);
    const currentPage = paginator.current_page;
    console.log('type is', typeof currentPage);
    const perPage = paginator.per_page;
    const { total } = paginator;
    const startAt = (currentPage - 1) * perPage + 1;
    const end = currentPage * perPage;
    const endAt = total < end ? total : end;
    const result = {
      [type]: paginator.data,
      pagination: {
        totalCount: total,
        nextPage: currentPage >= totalPages ? null : currentPage + 1,
        prevPage: currentPage === 1 ? null : currentPage - 1,
        isFirstPage: currentPage === 1,
        isLastPage: currentPage >= totalPages,
        currentPage,
        perPage,
        totalPages,
        startAt,
        endAt
      }
    };
    return result;
  };
  
  const paginate = (data, perPage, page) => {
    const limit = perPage;
    const total = data.count;
    const result = {
      per_page: limit,
      current_page: page,
      last_page: Math.ceil(total / perPage),
      data: data.rows,
      total
    };
    return result;
  };
  
  module.exports = { paginate, paginatorResult };
  