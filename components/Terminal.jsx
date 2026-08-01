"use client";

import { useEffect, useState } from "react";

const lines = [
  "PS C:\\Princess> npm run smile",
  "",
  "> Initializing...",
  "> Loading princess.exe",
  "> Fixing bugs...",
  "> Build Successful ✔",
  "",
  "Smile Probability : 87%",
  "",
  "Opening Message..."
];

export default function Terminal({ next }) {

  const [visible, setVisible] = useState([]);

  useEffect(() => {

    let index = 0;

    const timer = setInterval(() => {

      setVisible((old) => [...old, lines[index]]);

      index++;

      if (index === lines.length) {

        clearInterval(timer);

        setTimeout(next,1500);

      }

    },700);

    return ()=>clearInterval(timer);

  },[]);

  return (

<div className="card">

<h2 className="text-2xl font-bold mb-6">

Terminal

</h2>

<div className="bg-black rounded-xl p-5 font-mono text-green-400 min-h-[350px]">

{visible.map((line,index)=>(

<p key={index} className="mb-2">

{line}

</p>

))}

</div>

</div>

  );

}