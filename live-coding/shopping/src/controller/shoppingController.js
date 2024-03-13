// A controller is a bridge between http and our javascript code. It translates the text data sent from the client into data that we can handle as normal javascript without knowledge of http.

import shoppingService from "../service/shoppingService.js";

const getAllCarts = (req, resp) => {
  resp.send(shoppingService.getAll());
};

const getCart = (req, resp) => {
  resp.send("Not implemented yet");
}

const addItem = (req, resp) => {
  const {name, quantity} = req.body;

  if(name == undefined || quantity == undefined) {
    return resp.status(400).send({err: "Missing parameters name or quantity"});
  } else if(!req.params.id.match("[0-9]*")) {
    return resp.status(400).send({err: "Id number is malformed"}); // TODO: change this to middlware
  }

  shoppingService.add(req.params.id, {name, quantity});

  resp.status(201).send({msg: "Item was added"});
}

const deleteItem = (req, resp) => {
  resp.send("Not implemented yet");
}

const updateItem = (req, resp) => {
  resp.send("Not implemented yet");
}

export default { getAllCarts, getCart, addItem, deleteItem, updateItem }