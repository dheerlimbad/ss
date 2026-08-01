"use client";

import { useState } from "react";

import Intro from "@/components/Intro";
import MiniGame from "@/components/MiniGame";
import Terminal from "@/components/Terminal";
import Ending from "@/components/Ending";

export default function Home(){

const [page,setPage]=useState(0);

return(

<div className="min-h-screen flex justify-center items-center p-6">

<div className="max-w-xl w-full">

{page === 0 && <Intro next={() => setPage(1)} />}

{page===1 && <MiniGame next={()=>setPage(2)} />}

{page===2 && <Terminal next={()=>setPage(3)} />}

{page===3 && <Ending />}

</div>

</div>

)

}