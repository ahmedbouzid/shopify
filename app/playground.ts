export default function play() {
  console.log("Hello World"); 
  
    const person = { 
       name : 'Ahmed' ,
       age : 27 ,
    }
 function logPErsonInfo( personName :string , personAge : number) {
  const info = "name: " + personName + ", age : " + personAge ;
  console.log(info)
  return info
   }
   function logPerson2(person:any) { 
    const info = ` Name 1: ${person.name} , age: ${person.age}`
    console.log(info) ;
    return info 
   }
   logPErsonInfo(person.name , person.age)
   logPerson2(person) ;
}
