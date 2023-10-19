// przyciski w menu mobiles
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
// przyciski w menu desktop
const oneP = document.querySelector('.one_p');
const twoP = document.querySelector('.two_p');
const threeP = document.querySelector('.three_p');
const fourP = document.querySelector('.four_p');
const fiveP = document.querySelector('.five_p');
// przycisk powrotu
const btnGrinding = document.querySelector('.btn_grinding');
const btnEtching = document.querySelector('.btn_etching');
const btnHanging = document.querySelector('.btn_hanging');
const btnPowder = document.querySelector('.btn_powder');
const btnPacking = document.querySelector('.btn_packing');
// artykuły 
const grinding = document.querySelector('.grinding');
const etching = document.querySelector('.etching');
const hanging = document.querySelector('.hanging');
const powder = document.querySelector('.powder');
const packing = document.querySelector('.packing');
const topic = document.querySelector('.topic');



function grindScroll(){
    grinding.scrollIntoView({behavior: "smooth", block: "start"});
}
one.addEventListener('click', grindScroll);
oneP.addEventListener('click', grindScroll);

function etchingScroll(){
    etching.scrollIntoView({behavior: "smooth", block: "start"});
}
two.addEventListener('click', etchingScroll);
twoP.addEventListener('click', etchingScroll);

function hangingScroll(){
    hanging.scrollIntoView({behavior: "smooth", block: "start"});
}
three.addEventListener('click', hangingScroll);
threeP.addEventListener('click', hangingScroll);

function powderScroll(){
    powder.scrollIntoView({behavior: "smooth", block: "start"});
}
four.addEventListener('click', powderScroll);
fourP.addEventListener('click', powderScroll);

function packingScroll(){
    packing.scrollIntoView({behavior: "smooth", block: "start"});
}
five.addEventListener('click', packingScroll);
fiveP.addEventListener('click', packingScroll);

function topicScroll(){
    topic.scrollIntoView({behavior: "smooth", block: "start"});
}
btnGrinding.addEventListener('click', topicScroll);
btnEtching.addEventListener('click', topicScroll);
btnHanging.addEventListener('click', topicScroll);
btnPowder.addEventListener('click', topicScroll);
btnPacking.addEventListener('click', topicScroll);










