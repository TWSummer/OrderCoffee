export const fetchOrders = (page, sortType, sort) => (
  $.ajax({
    method: 'GET',
    url: `/api/orders?page=${page}&sort_col=${sortType}&sort=${sort}`
  })
);

export const createOrder = order => (
  $.ajax({
    method: 'POST',
    url: `/api/orders`,
    data: { order }
  })
);
