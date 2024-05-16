// import Mycomp from './mycomp';
'use client'

import Link from "next/link";

// import { useState } from "react"

export default function Home() {
  // const [name, setName] = useState("Omama Aslam")
  // const myFunc = () => {
  //   setName("Abubaker Sheikh");
  // }
  return (
    <main >
      {/* <Mycomp name="Omama Aslam"/> */}
      {/* <p>Events, Function & State in Next JS {name}</p>
      <button onClick={() => myFunc()}>Click Me</button> */}
      <Link href='/login'>Goto Login Page</Link>
      <br />
      <br />
      <Link href='/about'>Goto About Page</Link>
    </main>
  );
}
