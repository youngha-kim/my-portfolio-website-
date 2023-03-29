import { MongoClient } from "mongodb";

require('dotenv').config();

const useConnectDb = async (
  input: string,
  crud: string,
  paramid?: any,
  res?: any
) => {
  let data: any;
  const client = await MongoClient.connect(
    `mongodb+srv://youngha-kim:${process.env.PASSWORD}@my-portfolio.yerzt7i.mongodb.net/portfolio?retryWrites=true&w=majority`
  );
  const db = client.db();
  const collection = db.collection(input);

  if (crud === "get") {
    if (paramid) {
      const importData = await collection.find({ title: paramid }).toArray();
      data = importData;
    } else {
      const importData = await collection.find({}).toArray();
      data = importData;
    }
  }

  if (crud === "post") {
    if (paramid) {
      data = await collection.insertOne(paramid);
      res.status(200).json(data);
    }
  }
  client.close();

  return data;
};

export default useConnectDb;
