// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import ConnectDb from "@/components/shared/hooks/ConnectDb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    const data = req.body;
    data.content = data.content.split("+")

    const result = await ConnectDb("archiving", "post", data, res)
    // const client = await MongoClient.connect(
    //   "mongodb+srv://youngha-kim:dkstmq25@my-portfolio.yerzt7i.mongodb.net/portfolio?retryWrites=true&w=majority"
    // );
    // const db = client.db();
    // const initialCollection = db.collection("archiving");
    // const result = await initialCollection.insertOne(data);
    // res.status(200).json(result);
    // console.log(res)
  }
}
