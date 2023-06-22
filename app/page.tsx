'use client';
import { useEffect  } from "react";
import play from "@/app/playground";

export default function Home() {

  useEffect(() => {
    play();
  }, []);

  return <div>Hello World</div>;
}