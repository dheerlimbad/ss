"use client";

import { motion } from "framer-motion";

export default function Bug({ bug, onFix }) {
  return (
    <motion.div
initial={{scale:0}}
animate={{
scale:1,
rotate:[0,10,-10,5,-5,0],
x:[0,15,-15,10,-10,0],
y:[0,-10,10,-15,10,0]
}}
transition={{
duration:3,
repeat:Infinity
}}
whileTap={{
scale:0,
rotate:360
}}
onClick={()=>onFix(bug.id)}
className="absolute cursor-pointer"
style={{
left:`${bug.x}%`,
top:`${bug.y}%`
}}
>

<div className="bg-red-600 px-3 py-2 rounded-lg shadow-lg">

🐛 {bug.name}

</div>

</motion.div>
  );
}