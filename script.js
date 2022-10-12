const quizData = [
    {
        question: "Please enter your full name below: ",
        val: 1,
        type: "text"
    },
    {
        question: "Please enter your age below: ",
        val: 1,
        type: "number"
    },
    {
        question: "Please enter below the country you currently reside in: ",
        val: 1, 
        type: "text"

    },
    {
        question: "Please enter your country of origin below: ",
        val: 1, 
        type: "text"
    },
    {
        question: "What languages do you speak? ",
        val: 1, 
        type: "text"
    },
    {
        question: "What devices do you have access to? ",
        choices: ["Macbook", "PC/Non-Apple Laptop", "iPhone", "Android Phone", "Tablet", "iPad"],
        val: 2
    },{
        question: "Please select the gender you identify the most with. ",
        choices: ["Female", "Male", "Nonbinary"],
        val: 2
    },
    {
        question: "Do you have experience in digital art? ",
        choices: ["Yes", "No"],
        val: 2
    },
    {
        question: "If so, which software have you used before? ",
        choices: ["CSP", "Photoshop", "Illustrator", "None"],
        val: 2
    },
    {
        question: "This is a sample question", 
        choices: ["A", "B", "C", "D"], 
        images: ["A.jpg", "B.jpg", "C.jpg", "D.jpg"],
        val: 3 
    }];


 function $(id) {
    return document.getElementById(id); }
  function upload() {
      localStorage.answer = $("fname").value; } 
  function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms)); } 
  function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, ''); }
  async function main() {
    data = [] 
    let len = quizData.length; 
    var i = 0; 
    var j; 
    console.log("Waiting for datastream")  
    while (i < quizData.length) {
        $("question").innerText = quizData[i].question; 
        $("data").innerHTML = ""; 
        if(quizData[i].val == 1) {
            let inputField = document.createElement("input"); 
            inputField.type = quizData[i].type; 
            inputField.id = "fname"; 
            inputField.name = "fname"; 
            inputField.class = "answer"; 
            $("data").appendChild(inputField);
            inputField.addEventListener("keypress", function(event) {
                if (event.key === "Enter") {
                event.preventDefault();
                document.getElementById("submit").click();
                }});}
        else if (quizData[i].val == 2) {
            let inputField = document.createElement("select"); 
            inputField.type = "text"; 
            inputField.id = "fname"; 
            inputField.name = "fname"; 
            inputField.class = "answer"; 
            $("data").appendChild(inputField);
            inputField.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("submit").click();
            }});
            j = 0 
            while(j < quizData[i].choices.length) {
                newOption = document.createElement("option"); 
                newOption.name = quizData[i].choices[j]; 
                newOption.innerHTML = quizData[i].choices[j]; 
                inputField.append(newOption); 
                j += 1; 
            }}
        else if (quizData[i].val == 3) {
            var k = 0; 
            for(k=1;k<=quizData[i].choices.length;k++) {
                let inputField = document.createElement("input"); 
                inputField.type = "radio"; 
                inputField.id = "fname"; 
                inputField.name = "fname"; 
                inputField.class = "answer"; 
                inputField.value = quizData[i].choices[k-1]; 
                $("data").appendChild(inputField);
                let labelField = document.createElement("label"); 
                labelField.for = inputField.id; 
                labelField.value = quizData[i].choices[k-1]; 
                labelField.optNum = (k - 1); 
                labelField.qNum = i; 
                labelField.innerHTML = quizData[i].choices[k-1]; 
                $("data").appendChild(labelField);
                let linebreak = document.createElement("br"); 
                $("data").appendChild(linebreak); 
                $("data").appendChild(linebreak); 
                $("data").appendChild(linebreak); 
                labelField.onmouseover = function(eventInstance) {
                    console.log("Hovered over image");
                    console.log(i)
                    console.log(k)
                    $("hoverimage").src = camelize(labelField.innerText) + ".jpg"; 
                    $("hoverimage").alt = labelField.innerText; 
                }}}
        while(true) {
            if(localStorage.answer != "") {
                data.push(localStorage.answer); 
                console.log(data); 
                localStorage.answer = ""; 
                i += 1 
                break; 
            }
            await sleep(20); 
        }}
        alert("Thank you for filling the form!"); 
        $("quiz").innerHTML = ""; }
main();