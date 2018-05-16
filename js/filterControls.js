/* 
 * restaurants
 */

//prices
var checkList1 = document.getElementById('list1');
var items1 = document.getElementById('items1');
checkList1.getElementsByClassName('anchor')[0].onclick = function (evt) {
    if (items1.classList.contains('visible')){
        items1.classList.remove('visible');
        items1.style.display = "none";
    }
    else{
        items1.classList.add('visible');
        items1.style.display = "block";
    }
}
items1.onblur = function(evt) {
    items1.classList.remove('visible');
}

//ratings
var checkList2 = document.getElementById('list2');
var items2 = document.getElementById('items2');
checkList2.getElementsByClassName('anchor')[0].onclick = function (evt) {
    if (items2.classList.contains('visible')){
        items2.classList.remove('visible');
        items2.style.display = "none";
    }
    else{
        items2.classList.add('visible');
        items2.style.display = "block";
    }
}
items2.onblur = function(evt) {
    items2.classList.remove('visible');
}

//regions
var checkList3 = document.getElementById('list3');
var items3 = document.getElementById('items3');
checkList3.getElementsByClassName('anchor')[0].onclick = function (evt) {
    if (items3.classList.contains('visible')){
        items3.classList.remove('visible');
        items3.style.display = "none";
    }
    else{
        items3.classList.add('visible');
        items3.style.display = "block";
    }
}
items3.onblur = function(evt) {
    items3.classList.remove('visible');
}

//tastes
var checkList4 = document.getElementById('list4');
var items4 = document.getElementById('items4');
checkList4.getElementsByClassName('anchor')[0].onclick = function (evt) {
    if (items4.classList.contains('visible')){
        items4.classList.remove('visible');
        items4.style.display = "none";
    }
    else{
        items4.classList.add('visible');
        items4.style.display = "block";
    }
}
items4.onblur = function(evt) {
    items4.classList.remove('visible');
}



/* 
 * hotels
 */

//prices
var checkList5 = document.getElementById('list5');
var items5 = document.getElementById('items5');
checkList5.getElementsByClassName('anchor')[0].onclick = function (evt) {
    if (items5.classList.contains('visible')){
        items5.classList.remove('visible');
        items5.style.display = "none";
    }
    else{
        items5.classList.add('visible');
        items5.style.display = "block";
    }
}
items5.onblur = function(evt) {
    items5.classList.remove('visible');
}

//ratings
var checkList6 = document.getElementById('list6');
var items6 = document.getElementById('items6');
checkList6.getElementsByClassName('anchor')[0].onclick = function (evt) {
    if (items6.classList.contains('visible')){
        items6.classList.remove('visible');
        items6.style.display = "none";
    }
    else{
        items6.classList.add('visible');
        items6.style.display = "block";
    }
}
items6.onblur = function(evt) {
    items6.classList.remove('visible');
}

//regions
var checkList7 = document.getElementById('list7');
var items7 = document.getElementById('items7');
checkList7.getElementsByClassName('anchor')[0].onclick = function (evt) {
    if (items7.classList.contains('visible')){
        items7.classList.remove('visible');
        items7.style.display = "none";
    }
    else{
        items7.classList.add('visible');
        items7.style.display = "block";
    }
}
items7.onblur = function(evt) {
    items7.classList.remove('visible');
}


/* 
 * entertainment
 */

//prices
var checkList9 = document.getElementById('list9');
var items9 = document.getElementById('items9');
checkList9.getElementsByClassName('anchor')[0].onclick = function (evt) {
    if (items9.classList.contains('visible')){
        items9.classList.remove('visible');
        items9.style.display = "none";
    }
    else{
        items9.classList.add('visible');
        items9.style.display = "block";
    }
}
items9.onblur = function(evt) {
    items9.classList.remove('visible');
}

//ratings
var checkList10 = document.getElementById('list10');
var items10 = document.getElementById('items10');
checkList10.getElementsByClassName('anchor')[0].onclick = function (evt) {
    if (items10.classList.contains('visible')){
        items10.classList.remove('visible');
        items10.style.display = "none";
    }
    else{
        items10.classList.add('visible');
        items10.style.display = "block";
    }
}
items10.onblur = function(evt) {
    items10.classList.remove('visible');
}

//regions
var checkList11 = document.getElementById('list11');
var items11 = document.getElementById('items11');
checkList11.getElementsByClassName('anchor')[0].onclick = function (evt) {
    if (items11.classList.contains('visible')){
        items11.classList.remove('visible');
        items11.style.display = "none";
    }
    else{
        items11.classList.add('visible');
        items11.style.display = "block";
    }
}
items11.onblur = function(evt) {
    items11.classList.remove('visible');
}

//venue types
var checkList12 = document.getElementById('list12');
var items12 = document.getElementById('items12');
checkList12.getElementsByClassName('anchor')[0].onclick = function (evt) {
    if (items12.classList.contains('visible')){
        items12.classList.remove('visible');
        items12.style.display = "none";
    }
    else{
        items12.classList.add('visible');
        items12.style.display = "block";
    }
}
items12.onblur = function(evt) {
    items12.classList.remove('visible');
}
