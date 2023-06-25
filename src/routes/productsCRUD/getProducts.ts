const initialProducts = require("../../../data/products.json")

export async function getProducts(req: any, res: any) {
    console.log(req)
    res.status(200).send(initialProducts)
}