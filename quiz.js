const btnModal = document.querySelector("#openModal");
const btnSubmit = document.getElementById("submitBtn");
const times = document.getElementById("timesLimit");
const menu = document.querySelector(".menu")
const elemnt = ["div"];
var scores = [];
var periksa = [];
const soal = [
    {
        questionId : "q1",
        question: "1+1 = ?",
        options: ["2", "4", "6"],
        name: "optionQ1",
        answer: "2",
        score: 30
    },
    {
        questionId : "q2",
        question: "2+2 = ?",
        options : ["2", "4", "7"],
        name: "optionQ2",
        answer: "4",
        score: 30
    },
    {
        questionId  : "q3",
        question: "10+5 = ?",
        options: ["15", "12", "20"],
        name: "optionQ3",
        answer: "15",
        score: 20
    },
    {
        questionId  : "q4",
        question: "20+5 = ?",
        options: ["25", "52", "55"],
        name: "optionQ4",
        answer: "25",
        score: 10
    },
    {
        questionId  : "q5",
        question: "45+5 = ?",
        options: ["50", "52", "33"],
        name: "optionQ5",
        answer: "50",
        score: 10
    }
   
]
// add Elements
const demo = document.getElementById("demo");
function add(index){
   
    var fieldset = document.createElement("fieldset");
    var legend = document.createElement("legend");
    var p = document.createElement("p")
    var p1 = document.createElement("p")
    p.append("no. "+(index+1));
    p1.append(soal[index].question);
    legend.appendChild(p);
    legend.appendChild(p1);
    fieldset.appendChild(legend);
    demo.insertBefore(fieldset, demo.childNodes[index]);
    
    var ab = ["a", "b", "c"];
    var questionOption = soal[index].name;
    for (let i = 0 ; i < ab.length;i++){
        var button = document.createElement("button");
        var opt = ab[i];
        button.setAttribute("id", soal[index].questionId.concat(opt));
        button.setAttribute("class", soal[index].name)
        var textNode = ab[i]+") "+soal[index].options[i];
        button.append(textNode);
        fieldset.insertBefore(button,fieldset.childNodes[i+1]);
        var btnId = button.getAttribute("id");
        addClick(btnId, soal[index].options[i], questionOption, index); 
    }
}

function addClick(x, opt, name, index){
  var btn = document.getElementById(x);
  btn.onclick = function() {
            select(x);
            answer(opt, name, index);
  } 
}

function addOption(val, index){
    add(index);
}

function answer(ans, name, index){
      if (name == soal[index].name){
          if (ans == soal[index].answer){
             scores.push(soal[index].score);
          }else {
            scores = removeItemOnce(scores, soal[index].score)
          }
      }
       console.log(scores)
}

function sum(total, sum){
     
    return total + sum
}

function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

function select(id){
    var btn = document.getElementById(id);
    var colorBtn = btn.getAttribute("class");
    var color = document.querySelectorAll(`.${colorBtn}`);
    console.log(colorBtn)
    for (let i = 0; i < color.length;i++){
        if (color[i] == btn){
            color[i].style.backgroundColor = "red";
            color[i].setAttribute("disabled", "disabled")
        }else {
            color[i].style.backgroundColor = "white";
            color[i].removeAttribute("disabled")
        }
    }
}
// menampilkan masing-masing element array
soal.forEach(addOption);

btnSubmit.onclick = () => {
scores.push(0)
    function sum(total, num){
        return total + num;
    }
    // hasilNama.innerHTML = nama.value;
    hasil.innerHTML = "Your scores: "+ scores.reduce(sum);
    document.getElementById("outer").style.display = "none";
    document.getElementById("outerHasil").style.display = "block";

}

btnModal.onclick = () =>{
    let modal = document.createElement(elemnt[0]);
    modal.setAttribute("class", "test");
    document.getElementById("modal").style.display = "block";
    document.getElementById("outer").style.display = "block";
    
var countDownto = new Date();
var b = new Date();
countDownto.setMinutes(countDownto.getMinutes()+20);
var timesLimit = countDownto.getTime()
rr = setInterval(start2, 1000)
 

function start2(){
    var timeNow = new Date().getTime();
    var distance = timesLimit - timeNow;
    var minutes =  Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    times.style.color = "red"
    if (minutes == 0 && seconds == 0){
        clearInterval(rr)
    }
    times.innerHTML = "Times: " + minutes + ":" +seconds;
}

    menu.style.display = "none";
}


