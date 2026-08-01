"use client";

import Confetti from "react-confetti";
import { useEffect, useState } from "react";

export default function Ending(){

const [show,setShow]=useState(true);

useEffect(()=>{

setTimeout(()=>{

setShow(false);

},6000);

},[]);

return(

<div className="card relative overflow-hidden">

{show && <Confetti />}

<h1 className="text-4xl font-bold">

Princess 👑

</h1>

<p className="mt-8 leading-9 text-zinc-300">

I know I messed up.

<br/><br/>

I also know making this game
doesn't magically fix anything.

<br/><br/>

I just thought...

instead of sending another long paragraph...

I'd spend that time building something.

<br/><br/>

If this made you smile,

even just a little,

I'd call that

a successful deployment.

🙂

<br/><br/>

— Dheeru

</p>

<div className="mt-10">

<button
className="bg-green-500 text-black px-8 py-3 rounded-xl font-bold">

Mission Complete ✅

</button>

</div>

</div>

)

}