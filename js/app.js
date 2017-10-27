'use strict';

//get list items from list 1
var list1item1 = document.getElementsByName('list1item1')[0];
var list1item2 = document.getElementsByName('list1item2')[0];
var list1item3 = document.getElementsByName('list1item3')[0];
var list1item4 = document.getElementsByName('list1item4')[0];
var list1item5 = document.getElementsByName('list1item5')[0];
var list1item6 = document.getElementsByName('list1item6')[0];

//get list items from list 2
var list2item1 = document.getElementsByName('list2item1')[0];
var list2item2 = document.getElementsByName('list2item2')[0];
var list2item3 = document.getElementsByName('list2item3')[0];
var list2item4 = document.getElementsByName('list2item4')[0];
var list2item5 = document.getElementsByName('list2item5')[0];
var list2item6 = document.getElementsByName('list2item6')[0];

list1item1.addEventListener('click', toggleCheckbox);
list1item2.addEventListener('click', toggleCheckbox);
list1item3.addEventListener('click', toggleCheckbox);
list1item4.addEventListener('click', toggleCheckbox);
list1item5.addEventListener('click', toggleCheckbox);
list1item6.addEventListener('click', toggleCheckbox);

function toggleCheckbox(e) {
  if (e.target.parentElement.getAttribute('class') === 'unchecked') {
    e.target.parentElement.setAttribute('class', 'checked');
  } else {
    e.target.parentElement.setAttribute('class', 'unchecked');
  }
}
