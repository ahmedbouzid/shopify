import { log } from "console";

export default function Home() {
  const message : string = "Hello World";
  let age : number = 30 ;
  let b !: AddEventListenerOptions;
  let c !: NodeJS.Process ;
  let person : User ={
    name :'ahmed',
  }
  return (
    <div>
      {message}
      <h3>{age}</h3>
      {person.name}
    </div>
  )
}
