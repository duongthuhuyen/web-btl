var arr=[];
function show(flag) {
    document.getElementById('prev').style.opacity = flag;
    document.getElementById('next').style.opacity = flag;
}
var i_ = document.querySelectorAll("li.items");
arr.push.apply(arr, i_);
arr.push(document.getElementById('prev'));
arr.push(document.getElementById('next'));

arr.forEach(element => {
    element.addEventListener('mouseover', function(){
        // alert('Bạn đã hover chuột qua thẻ');
        show(1);
    });
    element.addEventListener('mouseleave',function() { show(0);});
});