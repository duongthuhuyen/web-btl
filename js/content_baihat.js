var hq_sq = document.querySelectorAll("div.vien_>:last-child"); 
var i; 
for(i=0; i<hq_sq.length; i+=Math.floor(Math.random() * 5)){
    hq_sq[i].style.backgroundColor="#e74c3c" ;
    hq_sq[i].innerHTML="SQ" ; } 
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
var number_listen = document.querySelectorAll("div.number-listen>:last-child");
for(i=0; i<number_listen.length; ++i){
    number_listen[i].innerHTML = ""+ numberWithCommas(Math.floor(Math.random()*30000));
}

var number_a = document.querySelectorAll(".number ");
// alert(number_a.length);
// alert(Math.floor(Math.random() * 256));
for(i=1; i<number_a.length; ++i){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    number_a[i].style.color = "rgb( "+r+", "+g+", "+b+") ";
    // alert(number_a[i]);
}