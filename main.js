name_of_the_student_array = [];


function submit()
{
var first_name = document.getElementById("name_of_student_1").value;
var second_name = document.getElementById("name_of_student_2").value;
var third_name = document.getElementById("name_of_student_3").value;
var fourth_name = document.getElementById("name_of_student_4").value;

name_of_the_student_array.push(first_name);
name_of_the_student_array.push(second_name);
name_of_the_student_array.push(third_name);
name_of_the_student_array.push(fourth_name);

console.log(name_of_the_student_array);

document.getElementById("display_name").innerHTML = name_of_the_student_array;

document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);

    document.getElementById("display_name").innerHTML = name_of_the_student_array; 
}