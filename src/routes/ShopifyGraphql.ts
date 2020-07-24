import { Request, Response, Router } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
const fetch = require("node-fetch");

// Init shared
const router = Router();

/******************************************************************************
 *                      Get All Users - "GET /api/users/all"
 ******************************************************************************/

router.get('/', async (req: Request, res: Response) => {
    console.log('arrive shopify graphql');

    fetch("https://tastermonialfoodmarket.myshopify.com/admin/api/graphql.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": "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"
      },
      body: JSON.stringify({
        query: `{
          products(first: 1) {
            edges {
              node {
                id
                images(first: 10) {
                  edges {
                    node {
                      id
                    }
                  }
                }
              }
            }
          }
        }`
      })
    })
    .then((result: any) => {
      return result.json();
    })
    .then((data: any) => {
      console.log("data returned:\n", data.data.products.edges);
      res.send(data);
    });
});


/******************************************************************************
 *                       Add One - "POST /api/users/add"
 ******************************************************************************/

export default router;
