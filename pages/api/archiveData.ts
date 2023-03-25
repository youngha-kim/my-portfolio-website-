// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   name: string
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    const data = req.body;
    data.content = data.content.split("+")

    const client = await MongoClient.connect(
      "mongodb+srv://youngha-kim:dkstmq25@my-portfolio.yerzt7i.mongodb.net/portfolio?retryWrites=true&w=majority"
    );
    const db = client.db();
    const initialCollection = db.collection("archiving");
    const result = await initialCollection.insertOne(data);
    res.status(200).json(result);
    client.close();
  }
}
