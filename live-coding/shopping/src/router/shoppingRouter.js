import express from 'express';
import shoppingController from '../controller/shoppingController.js';

const router = express.Router();

router
  .get("/carts", shoppingController.getAllCarts)
  .get("/carts/:id", shoppingController.getCart)
  .put("/carts/:id", shoppingController.addItem)
  .post("/carts/:id/item", shoppingController.addItem)
  .delete("/carts/:id/item/:itemId", shoppingController.deleteItem)
  .patch("/carts/:id/item/:itemId", shoppingController.updateItem);


export default router;