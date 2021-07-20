 
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
    const myObj = JSON.parse(this.responseText);
    const filterBtns = document.querySelectorAll(".child");
    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function(e) {
            const subName = document.getElementById("subject-name");
            document.getElementById("subject").style.display = "none";
            document.getElementById("modal").style.display = "block";
            
           let subject = e.currentTarget.dataset.subject;
            subName.innerHTML = subject;
           let soal = myObj[subject];
        //    console.log(soal)
           displaySubject(soal);
        //    soal.forEach(addOption);
        })
    })
}
xmlhttp.open("GET", "soal.JSON")
xmlhttp.send();
const btnModal = document.querySelector("#openModal");
const userName = document.getElementById("name");
const menu = document.querySelector(".menu");
const times = document.getElementById("timesLimit");

function displaySubject(subject){
    // console.log(subject)
    const btnSubmit = document.getElementById("submitBtn");
   
    
    const name = document.getElementById("hasilNama");
    var scores = [];
    var periksa = [];
    const demo = document.getElementById("demo");

    function addClick(x, opt, name, index){
        var btn = document.getElementById(x);
        btn.onclick = function() {
                  select(x);
                  answer(opt, name, index);
        } 
      }
    function add(index){
   
        var fieldset = document.createElement("fieldset");
        var legend = document.createElement("legend");
        var p = document.createElement("p")
        var p1 = document.createElement("p")
        p.append("no. "+(index+1));
        p1.append(subject[index].question);
        legend.appendChild(p);
        legend.appendChild(p1);
        fieldset.appendChild(legend);
        demo.insertBefore(fieldset, demo.childNodes[index]);
        // console.log(subject[index].question);
        var ab = ["a", "b", "c"];
        var questionOption = subject[index].name;
        for (let i = 0 ; i < ab.length;i++){
            var button = document.createElement("button");
            var opt = ab[i];
            button.setAttribute("id", subject[index].questionId.concat(opt));
            button.setAttribute("class", subject[index].name)
            var textNode = ab[i]+") "+subject[index].options[i];
            button.append(textNode);
            fieldset.insertBefore(button,fieldset.childNodes[i+1]);
            var btnId = button.getAttribute("id");
            // memanggil fungsi button untuk masing-masing array
            addClick(btnId, subject[index].options[i], questionOption, index); 
        }
    }
    
    function addOption(val, index){
        add(index);
    }

    // menampilkan masing-masing element array
    subject.forEach(addOption)

    function answer(ans, name, index){
        if (name == subject[index].name){
            if (ans == subject[index].answer){
               scores.push(subject[index].score);
            }else {
              scores = removeItemOnce(scores, subject[index].score)
            }
        }
         console.log(scores)
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
  btnSubmit.onclick = () => {
        scores.push(0)
        function sum(total, num){
            return total + num;
        }
        name.innerHTML = userName.value;
        hasil.innerHTML = "Your scores: "+ scores.reduce(sum);
        document.getElementById("modal").style.display = "none";
        document.getElementById("outerHasil").style.display = "block";
}
}


// Membuka menu
btnModal.onclick = () =>{
    if (!userName.value){
        alert("input your name")
    }else {    
        let modal = document.createElement("div");
        modal.setAttribute("class", "test");
        
        document.getElementById("subject").style.display = "grid";
        var countDownto = new Date();
        countDownto.setMinutes(countDownto.getMinutes()+20);
        var timesLimit = countDownto.getTime()
        // PEMBARUAN
        rr = setInterval(start2, 1000)
        function start2(){
            var timeNow = new Date().getTime();
            var distance = timesLimit - timeNow;
            var minutes =  Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            times.style.color = "red"
            times.innerHTML = "Times: " + minutes + ":" +seconds;
 
            if (minutes < 1 && seconds < 1){
                times.innerHTML = "Times up";
                clearInterval(rr)
            }
        }
        
            menu.style.display = "none";
        }
    
}


