function up(max) {
    document.getElementById("porsi").value = parseInt(document.getElementById("porsi").value) + 1;
    if (document.getElementById("porsi").value >= parseInt(max)) {
        document.getElementById("porsi").value = max;
    }
}
function down(min) {
    document.getElementById("porsi").value = parseInt(document.getElementById("porsi").value) - 1;
    if (document.getElementById("porsi").value <= parseInt(min)) {
        document.getElementById("porsi").value = min;
    }
}

let ul = document.querySelector('.header div:nth-child(2)');
let menu = document.querySelector('.menu-nav input');
menu.addEventListener('click', function(){
    ul.classList.toggle('on');
})