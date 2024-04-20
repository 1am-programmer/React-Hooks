import React, { useState, useEffect } from "react";

export default function TheList({ getItem }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(getItem());
    console.log("Updating items");
  }, [getItem]);

  return items.map((item) => <div key={item}>{item}</div>);
}
