console.log('Loaded!');

//change the text of main-text div
var element = document.getElementById('main-text');

element.innerHTML = 'New value';

//move img
var img=document.getElementById("madi");
img.onclick= function(){
    img.style.marginLeft='100px';
};


//submit name
var nameInput = document.getElementById('name');
//var name =nameInput.value;
var submit= document.getElemntById('submit-btn');
submit.onclick = function() {
    //make a request to the server and send the name
    
    //capture the list of names and render it as a list
    var names= ['name1','name2','name3'];
    var list = '';
    for (var i=0;i<names.length;i++)
    {
        list == '<li>' + names[i] + '</li>';
        
    }
    var ul = document.getElementById('name-list');
    ul.innerHTML = list;
};