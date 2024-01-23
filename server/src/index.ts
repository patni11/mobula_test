import express, { Request, Response } from "express";
const cors = require("cors");

const app = express();
const port = 3000;
const graph_endpoint =
  "https://api.thegraph.com/subgraphs/name/somemoecoding/surgeswap-v2";

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hi Welcome to Modula!");
});

app.get("/token/:tokenAddr", async (req: Request, res: Response) => {
  try {
    const tokenAddr: string = req.params.tokenAddr;
    const date_gte: number | undefined = req.query.date_gte
      ? parseInt(req.query.date_gte as string)
      : undefined;
    const date_lte: number | undefined = req.query.date_lte
      ? parseInt(req.query.date_lte as string)
      : undefined;

    // Make a GET request to the specified external API
    console.log(date_gte, date_lte);

    let tokenDayData = `tokenDayData {
      orderBy:date
      dailyVolumeUSD
      totalLiquidityUSD
      priceUSD
    }`;

    if (date_gte && date_lte) {
      tokenDayData = `tokenDayData (where: { date_gte: ${date_gte}, date_lte: ${date_lte} }) {
        orderBy:date
        dailyVolumeUSD
        totalLiquidityUSD
        priceUSD
      }`;
    }

    const query = `{
      token(id: "${tokenAddr}") {     
        symbol
        name
        tradeVolumeUSD
        liquidityUSD
        ${tokenDayData}
      }
    }`;

    const fetched_token_data = await fetch(graph_endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: query,
      }),
    });

    const token_data = await fetched_token_data.json();
    res.json(token_data);
  } catch (error) {
    console.error("Error making external API request:", error);
    res.status(500).send("We are facing some issues, Please try again");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
