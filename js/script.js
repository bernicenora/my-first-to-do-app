// Create a "close" button and append it to each list item
//Select all the list items from the list created
var myNodeList = document.getElementsByTagName("LI");
//inititialize counter i
var i;
for (i=0;i<myNodeList.length;i++){
    //create a span element
    var span = document.createElement("SPAN");
    //create a textnode with the multiplication sign(x) for close button
    var txt= document.createTextNode("\u00D7");
    //Give the created span element a class name called "close"
    span.className = "close";
    // Append the x sign to the created span element and append the span to the parent list
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var j;
for (j=0;j<close.length;j++){
    close[j].onclick=function(){
        var div = this.parentElement;
        div.style.display="none";
    }
}

// Add a "checked" symbol when clicking on a list item
var list=document.querySelector('ul');
list.addEventListener("click", function(ev){
    if(ev.target.tagName==='LI'){
        ev.target.classList.toggle('checked');
    }
},false);

// Create a new list item when clicking on the "Add" button

function newElement(){
    var li = document.createElement('li');
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    if(inputValue === ''){
        alert("You must write something!");
    }else{
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);
    li.appendChild(span);

    for(i=0;i<close.length;i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}