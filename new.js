// const http=require('http')
// const a = {"Name" : "Ramesh",
//             "Subects" : ["Maths", "Scence" , "chemistry"],
//             "Grade" : {"Type" : "marks","Total" : [88,90,99,87]},
//             "Range" : {"opt" : "100", "type" : ["secure","subject","class"]},
//             "achive" : [{"Rank" :"rank", "place":[1,2,3]}, 
// {"Ordinalindicator":"st"},"12"],
//             "joints" : ['outof','got','and']
//           }
//  Output: Ramesh got 99 outof 100 marks
//              and secure 1st rank.
// console.log(a.Name)
// console.log(a.joints[1])
// console.log(a.Grade.Total[2])
// console.log(a.joints[0])
// console.log(a.Range.opt); 
// console.log(a.Grade.Type) ;
// console.log(a.joints[2]);
// console.log(a.Range.type[0])
// // console.log(a.achive.place[0])
// console.log(a.achive[0].place[0])
// console.log(a.achive[1].Ordinalindicator)
// console.log(a.achive[0].Rank)
const jsonObject=
{
"name": "John",
"age": 25,
"city": "New York"
}
console.log( jsonObject["age"])