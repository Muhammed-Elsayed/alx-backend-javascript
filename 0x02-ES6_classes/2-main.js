import HolbertonCourse from "./2-hbtn_course.js";


const c1 = new HolbertonCourse(10, 20, ["Lucie", "Guillaume"]);
const c2 = new HolbertonCourse('PHP', '20', ["Lucie", "Guillaume"]);
const c3 = new HolbertonCourse('PHP', 20, "Lucie");


console.log(c1.name)
c1.name = 20
console.log(c1.name)