let countPushUp = document.getElementById("pushup-count");
let countSitUp = document.getElementById("situp-count");
let countSquats = document.getElementById("squat-count")
let totalCounts = document.getElementById("total-count")
let saveCount = document.getElementById("save-count");
// console.log(countPushUp);

let pushUp = 0;
let sitUp = 0;
let squats = 0;
let total;


function pushUpIncrement() {
    pushUp += 1;
    countPushUp.textContent = pushUp;
}

function sitUpIncrement() {
    sitUp += 1;
    countSitUp.textContent = sitUp;
}

function squatIncrement() {
    squats += 1;
    countSquats.textContent = squats;
}

function totalCount() {
    total = pushUp + sitUp + squats;
    totalCounts.textContent = total;
}

function save() {
    saveCount.innerText = `Congratulations. You Reached: \n ${pushUp} Push Up \n ${sitUp} Sit Up \n ${squats} Squats. \n Your Total Exercise Count: ${total}`;
}