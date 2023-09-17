//   const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false   
//   console.log(tinderUser);

const regularUser = {
    email : "anuragdadhich2005@gmail.com",
    fullname: {
        userfullname :{
            firstname: "Anurag",
            lastname: "Dadhich"
        } 

    } 
    

}
// console.log(regularUser.fullname?.userfullname);

const obj1 = {1: "a",2:"b"}
const obj2 = {3: "a",4:"b"}
const obj3 = {5: "a",6:"b"}
// console.log(obj1,obj2,obj3);

const users = [
   {}
]
users.email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLogged"));




const course = {
    courseName : "js in Hindi",
    price: "999",
    courseInstructor : "Anurag"

}

//course.courseInstructor

const {courseInstructor : Instructor} = course
// console.log(Instructor);

// const navbar = ({company}) => {

// }

// {
//    " name ": "Anurag",
//     "courseName" : "Js in Hindi",
//    " price ": "free"

// }

[
    {},
    {},  
    {}
]