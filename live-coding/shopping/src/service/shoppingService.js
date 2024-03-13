import { fetchCollection } from "../mongodb/mongoDbClient.js";

const CART_COLLECTION_NAME = "carts";

const carts = []

const getAll = async () => {
  return await fetchCollection(CART_COLLECTION_NAME).find({}, {_id: 0}).toArray(); // TODO: Projection _id: 0 does not work to prevent _id from showing
}

const get = async id => {
  return await fetchCollection(CART_COLLECTION_NAME).findOne({id});
}

const deleteCart = (cartId) => {
  fetchCollection(CART_COLLECTION_NAME).deleteOne({id: cartId});
}

const deleteItem = async (cartId, itemId) => {
  const cart = await get(cartId);

  cart.items.splice(itemId, 1);

  const result = await fetchCollection(CART_COLLECTION_NAME).updateOne({id: cartId}, { $set: {items: cart.items}});
  console.log(result);
}

const add = async (cartId, {name, quantity}) => {
  const items = [ {name, quantity} ];

  const result = await fetchCollection(CART_COLLECTION_NAME).updateOne({id: cartId}, { $push: { items }}, { upsert: true });

  return result.upsertedCount == 1 || result.modifiedCount == 1;
}


export default { getAll, get, add, deleteCart, deleteItem }