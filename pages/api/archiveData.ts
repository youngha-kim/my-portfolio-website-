// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import ConnectDb from "@/components/shared/ConnectDb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    const data = req.body;
    data.content = data.content.split("+")
    await ConnectDb("archiving", "post", data, res)
  }
}
