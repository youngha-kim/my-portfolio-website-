import React from "react";
const empasizeText = (el: string | []) => {
  const text = React.createElement('span', {
    dangerouslySetInnerHTML: { __html: el },
  });
  return text
};

export default empasizeText;
