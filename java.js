let valuerun = 0;
setInterval(run, 100);
function run() {
    if (valuerun <= 12) {

        document.getElementById('run').innerHTML = valuerun;
        valuerun++;
    }
}
let valuerun1 = 0;
setInterval(run1, 50);
function run1() {
    if (valuerun1 <= 50) {

        document.getElementById('run1').innerHTML = valuerun1;
        valuerun1++;
    }
}
let valuerun2 = 0;
setInterval(run2, 10);
function run2() {
    if (valuerun2 <= 200) {

        document.getElementById('run2').innerHTML = valuerun2;
        valuerun2++;
    }
}
let valuerun3 = 0;
setInterval(run3,);
function run3() {
    if (valuerun3 <= 20000) {

        document.getElementById('run3').innerHTML = valuerun3;
        valuerun3++;
    }
}
// function f(){
//     let d=' ';
//     let c='Full Stack Development';
//     let stores =0;
//     setInterval(()=>{
//         d+=c[stores];
//         document.getElementById('tex').innerHTML = d;
//         stores++;
//     },100)
// }
// setTimeout()

const popoverButton = document.getElementById('popoverButton');
const popoverContent = document.getElementById('popoverContent');
const closePopover = document.getElementById('closePopover');

popoverButton.addEventListener('click', function() {
  popoverContent.style.display = 'block';
});

closePopover.addEventListener('click', function() {
  popoverContent.style.display = 'none';
});