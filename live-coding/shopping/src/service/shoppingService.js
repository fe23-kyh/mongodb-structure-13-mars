const carts = []

const getAll = () => {
  return carts;
}

const get = id => {
  let cart = carts.find(cart => cart.id == id);

  if(cart == undefined) {
    cart = {id, items: []}
    carts.push(cart)
  }

  return cart;
}

const add = (cartId, {name, quantity}) => {
  const cart = get(cartId);

  cart.items.push({name, quantity});
}


export default { getAll, get, add }