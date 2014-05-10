/*1. Write an if statement that examines two integer variables and exchanges 
their values if the first one is greater than the second one.*/

function task1() {
    var first = parseInt(document.getElementById('tfirst').value);
    var second = parseInt(document.getElementById('tsecond').valie);
    var temp;

    if (first > second) {
    temp = first;
    first = second;
    second = temp;
    alert(first + second);
    }
    else {
        alert(first + second);
    }
}
