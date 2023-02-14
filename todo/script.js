'use strict'

const $ = document.querySelector.bind(document);

const mainDiv = $('#main');
const todoTextInput=$('#todoContent');
const todoAddButton =$('#todoButton');


function addTodo(){
    var d= document.createElement('div');
    mainDiv.appendChild(d);
    d.innerHTML = todoTextInput.value;
    d.addEventListener('click',function(){
        d.classList.add('completed');
    });
    todoTextInput.value='';
}

todoAddButton.addEventListener('click',addTodo);



