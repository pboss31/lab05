var n = document.querySelectorAll('h1');
n[0].addEventListener('click',change);
n[1].addEventListener('click',change);

function change(){
    n[0].innerHTML="Really?";
    n[1].innerHTML="Why u click me ha?";
}



function butChange1(){
   var a = document.getElementById("b1");
   const but = document.querySelector('#b1.c1');
   alert(a.innerHTML)
   but.classList.remove('c1')
   but.classList.add('d1')
   
}

function butChange2(){
    var a = document.getElementById("b2");
    const but = document.querySelector('#b2.c1');
    alert(a.innerHTML)
    but.classList.remove('c1')
    but.classList.add('d2')
    
 }

 function butChange3(){
    var a = document.getElementById("b3");
    const but = document.querySelector('#b3.c1');
    alert(a.innerHTML)
    but.classList.remove('c1')
    but.classList.add('d3')
    
 }

 function butChange4(){
    var a = document.getElementById("b4");
    const but = document.querySelector('#b4.c1');
    alert(a.innerHTML)
    but.classList.remove('c1')
    but.classList.add('d4')
    
 }