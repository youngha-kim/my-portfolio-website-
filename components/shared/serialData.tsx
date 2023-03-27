import { ObjectId } from "mongodb";

const Serial = (readMeData: any) => {
  let makeSerialObj = (inputObj: any) => {
    let obj: any = {};
    Object.keys(inputObj).forEach((key) => {
      if (key) {
        let value = inputObj[key];
        if (
          typeof value === "string" ||
          typeof value === typeof new ObjectId()
        ) {
          value = JSON.parse(JSON.stringify(value));
        }

        if (Array.isArray(value)) {
          value.map((element) => {
            if (typeof element === "object") {
              return makeSerialObj(element);
            } else if (typeof value === "string") {
              return JSON.parse(JSON.stringify(value));
            }
          });
        }

        if (typeof value === "object") {
          makeSerialObj(value);
        }
        obj[key] = value;
      }
    });
    return obj;
  };

  return makeSerialObj(readMeData);
};

// 객체를 돌면서
// 만약에 배열을 만나면 배열안으로 들어가서
//  그 배열을 돌면서 string이면 그대로 출력하고,
//  객체면은 recursion 들어감
// 만약에 객체면 recursion
// 만약에 string 이면 그대로 출력

export default Serial;
