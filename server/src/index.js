"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require("cors");
const app = (0, express_1.default)();
const port = 3000;
const graph_endpoint = "https://api.thegraph.com/subgraphs/name/somemoecoding/surgeswap-v2";
app.use(cors());
app.get("/", (req, res) => {
    res.send("Hi Welcome to Modula!");
});
app.get("/token/:tokenAddr", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tokenAddr = req.params.tokenAddr;
        const date_gte = req.query.date_gte
            ? parseInt(req.query.date_gte)
            : undefined;
        const date_lte = req.query.date_lte
            ? parseInt(req.query.date_lte)
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
        const fetched_token_data = yield fetch(graph_endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                query: query,
            }),
        });
        const token_data = yield fetched_token_data.json();
        console.log(token_data);
        res.json(token_data);
    }
    catch (error) {
        console.error("Error making external API request:", error);
        res.status(500).send("We are facing some issues, Please try again");
    }
}));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
