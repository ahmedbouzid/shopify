import { log } from "console";

/* 
Ts recommand to use Interfaces over types
Descripe data structure in more natural way 
Describing Objects

*/
interface Person {
  name : string ,
  age:number
}
// type Aliases 
// to describe functions types
//
/* 
type Person = {
  name : string ,
  age:number
}
*/
interface personnLogger  {
  (name : string , age:number): string }

export default function play() {
  console.log("Hello World"); 
  // methode using erro functon for person logger 
  const logperson3 :personnLogger = (personName :string , personAge:number) : string => {
    const info = `Name: ${personName}, age: ${personAge} `
    console.log('Using errro functions ::::::::::::::::: ',info) ;
    return info
  }
    const person : Person = { 
       name : 'Ahmed' ,
       age : 27 ,
    }
 function logPErsonInfo( personName :string , personAge : number) {
  const info = "name: " + personName + ", age : " + personAge ;
  console.log(info)
  return info
   }
   
   function logPerson2(person:Person) { 
    const info = ` Name 1: ${person.name} , age: ${person.age}`
    console.log(info) ;
    return info 
   }
   logPErsonInfo(person.name , person.age)
   logPerson2(person) ;
   logperson3
}
