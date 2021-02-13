var names = Array();
var marks = Array(); 
var grades = Array();

var i;
for(i = 0; i < 5;i++){
    var name = window.prompt("Enter name of student " + String(i+1) + " : " );
    var str_mark = window.prompt("Enter mark of " + name + " : ");

    var mark = parseFloat(str_mark);
    var grade;
    if(mark > 90){
        grade = "A";
    }
    else if(mark > 80){
        grade = "B";
    }
    else if(mark > 70){
        grade = "C";
    }
    else if(mark > 60){
        grade = "D";
    }
    else if(mark > 50){
        grade = "E";
    }
    else{
        grade = "F";
    }

    names.push(name);
    marks.push(mark);
    grades.push(grade);
}

console.log(marks);
document.getElementById("stu1").innerHTML = 
    "<td>" + String(names[0]) + "</td>" +
    "<td>" + String(marks[0]) + "</td>" +
    "<td>" + String(grades[0]) + "</td>"; 
document.getElementById("stu2").innerHTML = 
    "<td>" + names[1] + "</td>" +
    "<td>" + marks[1] + "</td>" +
    "<td>" + grades[1] + "</td>";
document.getElementById("stu3").innerHTML = 
    "<td>" + names[2] + "</td>" +
    "<td>" + marks[2] + "</td>" +
    "<td>" + grades[2] + "</td>";
document.getElementById("stu4").innerHTML = 
    "<td>" + names[3] + "</td>" +
    "<td>" + marks[3] + "</td>" +
    "<td>" + grades[3] + "</td>";
document.getElementById("stu5").innerHTML = 
    "<td>" + names[4] + "</td>" +
    "<td>" + marks[4] + "</td>" +
    "<td>" + grades[4] + "</td>";
