import { MongoClient } from "mongodb";
import Serial from "../serialData";

const useConnectDb = async (input: string, crud: string) => {

  const convertToArray = (input: any) => {
    let array = [];
    for (let el in input) {
      array.push(input[el]);
    }
    return array;
  };

  const client = await MongoClient.connect(
    `mongodb+srv://youngha-kim:dkstmq25@my-portfolio.yerzt7i.mongodb.net/portfolio?retryWrites=true&w=majority`
  );
  const db = client.db();
  const Colllection = db.collection(input);
  let Data: any;

  if (crud === "get") {
    const importData = await Colllection.find({}).toArray();
    Data = convertToArray(Serial(importData)) ?? null;
  } 
  const serialized = Data;
  client.close();

  return serialized;
};

export default useConnectDb;
