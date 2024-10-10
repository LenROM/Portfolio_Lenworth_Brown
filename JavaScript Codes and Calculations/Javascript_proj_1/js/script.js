// Create an array of all the elements with the "form" class and save the array in a variable called "forms".
let forms = document.querySelectorAll('.form');

let currentForm = 0;
showForm(currentForm); // Display the first "form" in the forms array.

// This function will display the appropriate form, and hide or alter the buttons as needed.
function showForm(n) {
    // Display the nth form in the "forms" array. For example: If n = 0, the first form in the array will be displayed.  
    forms[n].style.display = 'block';


    // Hide the "Previous" button if the first form is displayed.
    if (currentForm === 0) {
        document.getElementById('prev').style.display = 'none';
    } else {
        document.getElementById('prev').style.display = 'inline';
    }
    // Change the "Next" button inner HTML to "Submit" when the user is on the second to last form.
    if (currentForm === forms.length - 2) {
        document.getElementById('next').innerHTML = "Submit";
    } else {
        document.getElementById('next').innerHTML = 'Next';
    }

    // Hide the buttons when the student's result is displayed. 
    if (currentForm === forms.length - 1) {
        document.querySelector('#prev').style.display = 'none';
        document.querySelector('#next').style.display = 'none';

    }



    var StuId = document.getElementById("IDOfStudent").value;
    var Stuname = document.getElementById("nameOfStudent").value;
    var Stuage = document.getElementById("ageOfStudent").value;
    var Stuclass = document.getElementById("classOfStudent").value;
    var nsub1 = document.getElementById("nameOfSubject").value;
    var Tgrd1N1 = Math.trunc(document.getElementById("termGrade1").value);
    var Tgrd2N1 = Math.trunc(document.getElementById("termGrade2").value);
    var Tgrd3N1 = Math.trunc(document.getElementById("termGrade3").value);
    var nsub2 = document.getElementById("nameOfSubject-subject2").value;
    var Tgrd1N2 = Math.trunc(document.getElementById("termGrade1-subject2").value);
    var Tgrd2N2 = Math.trunc(document.getElementById("termGrade2-subject2").value);
    var Tgrd3N2 = Math.trunc(document.getElementById("termGrade3-subject2").value);
    var nsub3 = document.getElementById("nameOfSubject-subject3").value;
    var Tgrd1N3 = Math.trunc(document.getElementById("termGrade1-subject3").value);
    var Tgrd2N3 = Math.trunc(document.getElementById("termGrade2-subject3").value);
    var Tgrd3N3 = Math.trunc(document.getElementById("termGrade3-subject3").value);
    var result = document.getElementById("result");

    var avg1 = Math.trunc((Tgrd1N1 + Tgrd2N1 + Tgrd3N1) / 3);
    var avg2 = Math.trunc((Tgrd1N2 + Tgrd2N2 + Tgrd3N2) / 3);
    var avg3 = Math.trunc((Tgrd1N3 + Tgrd2N3 + Tgrd3N3) / 3);
    var totavg = Math.trunc((avg1 + avg2 + avg3) / 3);
    var letterGrade1;
    var letterGrade2;
    var letterGrade3;


    if ((avg1 >= 0) && (avg1 <= 50)) { // Prints out the score "D" when average grade is from 0 to 50
        letterGrade1 = "D";

    } else if ((avg1 > 50) && (avg1 <= 60)) { // Prints out the score "C" when average grade is from 51 to 60
        letterGrade1 = "C";

    } else if ((avg1 > 60) && (avg1 <= 70)) { // Prints out the score "B" when average grade is from 61 to 70
        letterGrade1 = "B";

    } else if ((avg1 > 70) && (avg1 <= 90)) { // Prints out the score "A" when average grade is from 71 to 90
        letterGrade1 = "A";
    } else if (avg1 > 90) {
        letterGrade1 = "A+"; // Prints out the score "A+" when average grade is from 90 to 100
    }



    if ((avg2 >= 0) && (avg2 <= 50)) {
        letterGrade2 = "D";

    } else if ((avg2 > 50) && (avg2 <= 60)) {
        letterGrade2 = "C";

    } else if ((avg2 > 60) && (avg2 <= 70)) {
        letterGrade2 = "B";

    } else if ((avg2 > 70) && (avg2 <= 90)) {
        letterGrade2 = "A";
    } else if (avg2 > 90) {
        letterGrade2 = "A+";
    }



    if ((avg3 >= 0) && (avg3 <= 50)) {
        letterGrade3 = "D";

    } else if ((avg3 > 50) && (avg3 <= 60)) {
        letterGrade3 = "C";

    } else if ((avg3 > 60) && (avg3 <= 70)) {
        letterGrade3 = "B";

    } else if ((avg3 > 70) && (avg3 <= 90)) {
        letterGrade3 = "A";
    } else if (avg3 > 90) {
        letterGrade3 = "A+";
    }

    result.innerHTML = "<center><h1>Student's Grade Results</h1><center><br><br><table><tr><th>Student ID</th><th>Name of Student</th><th>Age of Student</th><th>Class of Student</th><th>Name of Subject</th><th>Term Grade 1</th><th>Term Grade 2</th><th>Term Grade 3</th><th>Average</th><th>Letter Grade</th></tr>" + "<tr><td>" + StuId + "</td>" + "<td>" + Stuname + "</td>" + "<td>" + Stuage + "</td>" + "<td>" + Stuclass + "</td>" + "<td>" + nsub1 + "</td><td>" + Tgrd1N1 + "%" + "</td><td>" + Tgrd2N1 + "%" + "</td><td>" + Tgrd3N1 + "%" + "</td><td>" + avg1 + "%" + "</td><td>" + letterGrade1 + "</td></tr>" + "<tr><td>" + "" + "</td>" + "<td>" + "" + "</td>" + "<td>" + "" + "</td>" + "<td>" + "" + "</td>" + "<td>" + nsub2 + "</td><td>" + Tgrd1N2 + "%" + "</td><td>" + Tgrd2N2 + "%" + "</td><td>" + Tgrd3N2 + "%" + "</td><td>" + avg2 + "%" + "</td><td>" + letterGrade2 + "</td></tr>" + "<tr><td>" + "" + "</td>" + "<td>" + "" + "</td>" + "<td>" + "" + "</td>" + "<td>" + "" + "</td>" + "<td>" + nsub3 + "</td><td>" + Tgrd1N3 + "%" + "</td><td>" + Tgrd2N3 + "%" + "</td><td>" + Tgrd3N3 + "%" + "</td><td>" + avg3 + "%" + "</td><td>" + letterGrade3 + "</td></tr>" + "<tr><td>" + "" + "</td>" + "<td>" + "" + "</td>" + "<td>" + "" + "</td>" + "<td>" + "" + "</td>" + "<td>" + "" + "</td><td>" + "" + "</td><td>" + "" + "</td><td>" + "<b>Overall Average: </b>" + "</td><td>" + "<b>" + totavg + "%" + "</b>" + "</td><td>" + "" + "</td></tr>" + "</table>";
    //Outline of Table Above
    // <table>
    //         <tr>
    //             <th>Student ID</th>
    //             <th>Name of Student</th>
    //             <th>Age of Student</th>
    //             <th>Class of Student</th>
    //             <th>Name of Subject</th>
    //             <th>Term Grade 1</th>
    //             <th>Term Grade 2</th>
    //             <th>Term Grade 3</th>
    //         </tr>
    //         <tr>
    //             <td>32974</td>
    //             <td>Lenworth Brown</td>
    //             <td>23</td>
    //             <td>R8</td>
    //             <td>Science</td>
    //             <td>73</td>
    //             <td>83</td>
    //             <td>93</td>
    //         </tr>

    //         <tr>
    //             <td>Maths</td>
    //             <td>73</td>
    //             <td>83</td>
    //             <td>93</td>
    //         </tr>

    //         <tr>
    //             <td>English</td>
    //             <td>73</td>
    //             <td>83</td>
    //             <td>93</td>
    //         </tr>
    //     </table>

}

// This function allows the user to toggle between forms using the "Next" and "Previous" buttons.
function nextPrev(n) {
    hideCurrent(currentForm); // Hide the current form
    currentForm += n; // Increment or decrement the index
    showForm(currentForm); // Display the next or previous form
}

// This function hides the form that is currently visible.
function hideCurrent(n) {
    forms[n].style.display = 'none';
}