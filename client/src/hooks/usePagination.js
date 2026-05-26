function usePagination(data, itemsPerPage) {

  return {

    currentItems:
      data.slice(0, itemsPerPage),

  };
}

export default usePagination;