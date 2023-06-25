import { getProducts } from "./productsCRUD/getProducts";

import { Router } from 'express';
const router = Router();

router.get("/", getProducts);

module.exports = router;