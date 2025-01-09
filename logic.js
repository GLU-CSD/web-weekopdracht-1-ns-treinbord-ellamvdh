var second = 0;
var minute = 0;
var hour = 0;
var d = new Date();

setInterval(
    function(){
        d= new Date()
        second = d.getSeconds() * 6;
        minute = d.getMinutes() * 6;
        hour = d.getHours() * 30 + Math.round(minute /12);
        document.getElementById('second-hand').style.transform = "rotate("+ second + "deg)";
        document.getElementById('minute-hand').style.transform = "rotate("+ minute + "deg)";
        document.getElementById('hour-hand').style.transform = "rotate("+ hour + "deg)";


    },1000
)


//swich between 1 minuet and current time
let toggleValue = true; 

// Function to toggle the boolean value
function toggleBool() {
    toggleValue = !toggleValue;  // Switch between true and false

    // console.log(toggleValue);
    const tijdElement = document.getElementById('tijd');  // Get the element by ID
    const tijdElement2 = document.getElementById('tijd2');  // Get the element by ID

    const oneElement = document.getElementById('one');
    const minuteElement = document.getElementById('minute');

    if (toggleValue) {
        tijdElement.textContent = "1";
        tijdElement2.textContent = "minuut";
        clearInterval(timeInterval); // Clear any previous interval
    } else {
        function updateTime() {
            d = new Date();
            const h = d.getHours();
            const m = d.getMinutes();
            let z;
            if(m<=8){
                z = "0";

            }else{
                z= "";
            }
            tijdElement.textContent = h + ":" +z + (m+1);  // Display current time
        }

        updateTime(); // Call immediately once to set time
        timeInterval = setInterval(updateTime, 1000); // Set interval only once
        tijdElement2.textContent = "";
    }

}

// Set an interval to toggle every 5 seconds (5000 milliseconds)
setInterval(toggleBool, 5000);


// {/* <div id="volgende">Hierna/next: 08:53 IC Venlo</div> */}

let volgende= document.getElementById("volgende");




dVolgende = new Date();
let  uurV = d.getHours();
let minuutV = d.getMinutes();
let zVolgende;
let zVolgende2;

let uurV2 = uurV;
let minuutV2= minuutV +35;

setInterval(
function updateTime2(){

    if(minuutV2 >=60){
        minuutV2= minuutV2 -60;
        uurV2 +=1;
    }
    if(minuutV2 <=9){
        zVolgende = "0";
    }else{
        zVolgende="";
    }
    
    if(uurV2 <= 9){
        zVolgende2 = "0";
    }else{
        zVolgende2 = "";
    }
    
    
    
    volgende.textContent ="Hierna/next: "+zVolgende2+ uurV2 +":"+zVolgende+ minuutV2+" IC Venlo";
},1000
)


// if(minuutV2 >=60){
//     minuutV2= minuutV2 -60;
//     uurV2 +=1;
// }
// if(minuutV2 <=9){
//     zVolgende = "0";
// }else{
//     zVolgende="";
// }

// if(uurV2 <= 9){
//     zVolgende2 = "0";
// }else{
//     zVolgende2 = "";
// }



// volgende.textContent ="Hierna/next: "+zVolgende2+ uurV2 +":"+zVolgende+ minuutV2+" IC Venlo";









