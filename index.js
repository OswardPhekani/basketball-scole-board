let homeScore = document.getElementById("home-score");
// console.log(homeScore);
let guestScore = document.getElementById("guest-score");
// console.log(guestScore);


let add1 = 0;
let add2 = 0;
let add3 = 0;

let scoreSum = add1 + add2 + add3;
let guestSum = add1 + add2 + add3;



function resetBoard(){
    scoreSum = 0;
    guestSum = 0;
    homeScore.textContent = scoreSum;
    guestScore.textContent = guestSum;
}
// Home Team calculations
function addHomePlus1(){
   scoreSum += 1;
    homeScore.textContent = scoreSum;
    // console.log("Home Plus 3 clicked ");
}
function addHomePlus2 (){
    scoreSum += 2;
    homeScore.textContent = scoreSum;
    // console.log("Home Plus 3 clicked ");
    
}
function addHomePlus3 (){
      scoreSum += 3;
    homeScore.textContent = scoreSum;
    // console.log("Home Plus 3 clicked ");
}

// Guest calculations
function addGuestPlus1 (){
   guestSum += 1;
    guestScore.textContent = guestSum
    // console.log("Guest Plus 1 clicked ");
    
}

function addGuestPlus2 (){
   guestSum += 2;
    guestScore.textContent = guestSum;
    // console.log("Guest Plus 2 clicked ");
    
}

function addGuestPlus3 (){
   guestSum += 3;
    guestScore.textContent = guestSum;
    // console.log("Guest Plus 3  clicked ");
    
}
