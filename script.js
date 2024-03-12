
var nav =document.getElementById('nav');
var click =document.getElementById('click');


var s= 2;
var g = 4;
 var a = click.addEventListener('click',function (){
    nav.style.display='flex';

    if (g > s){
        nav.style.display='flex';
        g=2;
        s=4;
    }else{
        nav.style.display='none';

        g=4;
        s=2;
    }
})