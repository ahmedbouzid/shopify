'use client';
import { useEffect  } from "react";
import play from "@/app/playground";
import Flex from './css/flex'
export default function Home() {

  useEffect(() => {
    play();

  }, []);

  return  (
  <div> 
    <Flex/>

  </div>
           )
}