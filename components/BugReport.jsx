"use client";

export default function BugReport({ next }) {

  function click(correct){

      if(correct){

          next();

      }else{

          alert("❌ Wrong Fix.\n\nThat won't solve the issue.");

      }

  }

  return(

<div className="card">

<div className="title">

Root Cause Analysis

</div>

<p className="subtitle mt-6">

What actually caused the issue?

</p>

<div className="space-y-4 mt-8">

<button
onClick={()=>click(false)}
className="w-full bg-zinc-800 p-4 rounded-xl">

Ignore it

</button>

<button
onClick={()=>click(false)}
className="w-full bg-zinc-800 p-4 rounded-xl">

Hope time fixes it

</button>

<button
onClick={()=>click(true)}
className="w-full bg-green-600 p-4 rounded-xl">

Accept responsibility

</button>

</div>

</div>

  )

}