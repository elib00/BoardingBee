"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-10">
      <p>{count}</p>
      <Button onClick={handleClick}>Click me</Button>
    </main>
  );
}
