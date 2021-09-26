/*  tasks 1 */
var open_btn = document.querySelector('.tasks .first_task .short_buttons .open_btn');
var open_answer = document.querySelector('.tasks .first_task .open_button');
var close_btn = document.querySelector('.tasks .first_task .short_buttons .close_button')

open_btn.onclick = function() {
    open_answer.innerHTML = 'Мой ответ: Десять раз выведет число 10. Объявление var выделяет одну "ячейку" в памяти и на эту одну и туже "ячейку" всегда ссылается переменная i объявление let при каждой итерации выделяет новую "ячейку", таким образом переменная i на каждом шаге перебора цикла ссылается на новый адрес';

}
close_btn.onclick = function() {
    open_answer.innerHTML = "Ответ скрыт";
}

 /* tasks 2 */

/* question_1 */
 var second_1__open_btn = document.querySelector('.tasks .task_second .task__buttons .first_question__open_btn');
 var second_1__open_answer = document.querySelector('.tasks .task_second .task_second__answer');
 var second_1__close_btn = document.querySelector('.tasks .task_second .task__buttons .first_question__close_btn');
 
var today = new Date();
var day = today.getDay();
var list_of_days = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

second_1__open_btn.onclick = function() {
    second_1__open_answer.innerHTML = "Today : " + list_of_days[day] + ",  Current time: " + time
}
second_1__close_btn.onclick = function() {
    second_1__open_answer.innerHTML = "Откройте ответ"
}

/* question_2 */

var second_2__open_btn = document.querySelector('.tasks .task_second .second_question__open_btn');
second_2__open_btn.onclick = function reverse_the_string() {
    var n = prompt();
    num = String(n);
    reserved = num.split("").reverse().join("");
    alert(reserved);
}

/* question_3  */
var second_3__open_btn = document.querySelector('.tasks .task_second .third_question__open_btn');
second_3__open_btn.onclick = function() {
    let num = prompt()
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    alert(result);
}
/* question_4  */
var second_4__open_btn = document.querySelector('.tasks .task_second .fourth_question__open_btn');
second_4__open_btn.onclick = function() {
    var num1 = +prompt();
    var num2 = +prompt();
    alert(Math.max(num1, num2));
}

 /* tasks 3 */
 /* question_1 */
 var third_1_open_btn = document.querySelector('.tasks .task_third .task__buttons .first_question__open_btn');
 var third_1_open_answer = document.querySelector('.tasks .task_third .open_button');
 var third_1_close_btn = document.querySelector('.tasks .task_third .task__buttons .first_question__close_btn')
 
 third_1_open_btn.onclick = function() {
     var myColor = ["Red", "Green", "White", "Black"];
     myColor.join();
     var withplus = myColor.join('+');
     third_1_open_answer.innerHTML = '"' + myColor + '"' + ' "' + withplus + '"';
 }
 third_1_close_btn.onclick = function() {
     third_1_open_answer.innerHTML = "Откройте ответ";
 }

 /* question_2 */
var third_3__open_btn = document.querySelector('.task_third .second_question__open_btn');

third_3__open_btn.onclick = function(){
    var monthes=["January","February","March","April","May","Jun","July","August","September","October","November","Desember"];
    var first_date = prompt();
    var second_date = prompt();
    var date_1=new Date(first_date);
    var date_2=new Date(second_date);
    for(var i=0;i<=monthes.length;i++){
        if(i==date_1.getMonth()){
            var month_1 = "";
            month_1 += monthes[i];
        }
        if(i==date_2.getMonth()){
            var month_2 = "";
            month_2+=monthes[i]
            alert('"' + month_1 + '"' + " " + '"' + month_2 + '"')
        }
    }
}

/* question_4  */
var third_3__open_btn = document.querySelector('.tasks .task_third .third_question__open_btn');
third_3__open_btn.onclick = function() {
    var str = prompt();
    if (str == str.toUpperCase()) {
    alert (true);
    }
    if (str == str.toLowerCase()){
    alert (false);
    }
}


 
 /* tasks 4 */
 /* question_2 */
var fourth_1_open_btn = document.querySelector('.tasks .task_fourth .second_question__open_btn');
var element_list = document.querySelectorAll('.tasks .task_fourth .elements li');

fourth_1_open_btn.onclick = function() {
    for (var i = 0; i < element_list.length; i++) {
        element_list[i].style.color = 'green';
        if (i<3) {
            element_list[i].style.color = 'red';
        }
    }
}




/* question_3 */
var fourth_3_open_btn = document.getElementById("mom");

fourth_3_open_btn.onclick = function(){
    var list_of_elements = document.getElementById("todo_list")
    var tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
    var i;
    for(i = 0; i < tasks.length; i++){
    var list = document.createElement('li');
    list.className="task";
    list.innerHTML = tasks[i];
    list_of_elements.appendChild(list);
    }
}

/* question_4 */
const Btn = document.querySelector('.button')

const str_1 = document.getElementById("string-1").innerHTML;
const str_2 = document.getElementById("string-2").innerHTML;
const str_3 = document.getElementById("string-3").innerHTML;
const str_4 = document.getElementById("string-4").innerHTML;
const str_5 = document.getElementById("string-5").innerHTML;
const str_6 = document.getElementById("string-6").innerHTML;



Btn.addEventListener('click', (e) => {
    console.log(str_3 + "\n" + str_5 + "\n" + str_2 + "\n" + str_6 + "\n" + str_4 + "\n" + str_1)
  });

/* task_5  */

const questionF = document.querySelectorAll('.item');
const questionBtn = document.getElementById('btn5')

questionBtn.addEventListener('click', (e) => {
  questionF.forEach(item => {
    if (item.innerHTML === 'Cola 1.5 l. x 1') {
      item.remove();
    };
    if (item.innerHTML === 'Chocolate bar x 3') {
      item.innerHTML = 'Canned Fish x 4'
    }
  })
});

/* task_6 */

var sixes_1__open_btn = document.querySelector('.task_six .task_question .first_question__open_btn');

sixes_1__open_btn.onclick = function() {
    var item = prompt("Введите задачу для добавления:", "");
    var list_of_items = document.getElementById("list");
    var list_item = document.createElement('li');
    list_item.innerHTML = item;
    list_of_items.appendChild(list_item);
}