var second = 0;
var minute = 0;
var hour = 0;
var d = new Date();

var TimeTillNextTrain = 1;

var HeerlenPlaats = true;


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

    const BestemmingHV = document.getElementById("bestemming");
    const via = document.getElementById("via");
    const via2 = document.getElementById("via2");
    //change the endpoint of the train
    if(HeerlenPlaats)
    {
        BestemmingHV.textContent = "Heerlen"
        via.textContent = "via 's-Hertogenbosch, Eindhoven";
        via2.textContent = "Weert, Roermond en Sittard"
        console.log("yes")
    }else{
        BestemmingHV.textContent = "Venlo"
        via.textContent = "via 's-Hertogenbosch, Eindhoven Centraal,";
        via2.textContent = "Helmond, Deurne, Host-Sevenum, Blercik"
        console.log("no")
    }

    //change via





    
    toggleValue = !toggleValue;  // Switch between true and false

    // console.log(toggleValue);
    const tijdElement = document.getElementById('tijd');  // Get the element by ID
    const tijdElement2 = document.getElementById('tijd2');  // Get the element by ID


    if (toggleValue) {
        tijdElement.textContent = TimeTillNextTrain;
        if(TimeTillNextTrain == 1){
            tijdElement2.textContent = "minuut";
        }else{
            tijdElement2.textContent = "minuten";   
        }
        // tijdElement2.textContent = "minuuten";
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


            if(HeerlenPlaats == true){
                if(m >= 10 && m <= 24 || m >= 40 && m <= 54){
                    HeerlenPlaats =  false;
                }
            }else if(HeerlenPlaats == false){
                if((m >= 55 || m <= 9) || m >= 25 && m <= 39){
                    HeerlenPlaats = true;
                }
            }

            if(HeerlenPlaats == true){
            //Heerlen api

                //trienen 6 uur
                if(h<= 6 && m <=9 || h<= 5|| h== 23 && m >= 10 ){
                    tijdElement.textContent="06:09";
                    if(h==5 && m >9 || h ==6){
                        TimeTillNextTrain= TillComing(6,9)
                    }else{
                        TimeTillNextTrain = "∞";
                    }
                }
                else if(h== 6 && m <=39){
                    tijdElement.textContent="06:39";
                    TimeTillNextTrain= TillComing(6,39)
                }

                //treinen 7 uur
                else if(h== 7 && m <=9 || h == 6 && m>=40){
                    tijdElement.textContent="07:09";
                    TimeTillNextTrain= TillComing(7,9)
                }
                else if(h== 7 && m <=39){
                    tijdElement.textContent="07:39";
                    TimeTillNextTrain= TillComing(7,39)
                }

                //treinen 8 uur
                else if(h== 8 && m <=9 || h ==7 && m >=40){
                    tijdElement.textContent="08:09";
                    TimeTillNextTrain= TillComing(8,9)
                }
                else if(h== 8 && m <=39){
                    tijdElement.textContent="08:39";
                    TimeTillNextTrain= TillComing(8,39)
                }

                //treinen 9 uur
                else if(h== 9 && m <=9 || h ==8 && m >= 40){
                    tijdElement.textContent="09:09";
                    TimeTillNextTrain= TillComing(9,9)
                }
                else if(h== 9 && m <=39){
                    tijdElement.textContent="09:39";
                    TimeTillNextTrain= TillComing(9,39)
                }

                //treinen 10 uur
                else if(h== 10 && m <=9 || h == 9 && h >=40 ){
                    tijdElement.textContent="10:09";
                    TimeTillNextTrain= TillComing(10,9)
                }
                else if(h== 10 && m <=39){
                    tijdElement.textContent="10:39";
                    TimeTillNextTrain= TillComing(10,39)
                }
            
                //treinen 11 uur
                else if(h== 11 && m <=9 || h ==10 && m >= 40){
                    tijdElement.textContent="11:09";
                    TimeTillNextTrain= TillComing(11,9)
                
                }
                else if(h== 11 && m <=39){
                    tijdElement.textContent="11:39";
                    TimeTillNextTrain= TillComing(11,39)
                }

                //treinen 12 uur
                else if(h== 12 && m <=9 || h == 11 && m >=40){
                    tijdElement.textContent="12:09";
                    TimeTillNextTrain= TillComing(12,9)
                }
                else if(h== 12 && m <=39){
                    tijdElement.textContent="12:39";
                    TimeTillNextTrain= TillComing(12,39)
                }

                //treinen 13 uur
                else if(h== 13 && m <=9 || h== 12 && m >=40){
                    tijdElement.textContent="13:09";
                    TimeTillNextTrain= TillComing(13,9)
                }
                else if(h== 13 && m <=39){
                    tijdElement.textContent="13:39";
                    TimeTillNextTrain= TillComing(13,39)
                }

                //treinen 14 uur
                else if(h== 14 && m <=9 || h == 13 && m >=40){
                    tijdElement.textContent="14:09";
                    TimeTillNextTrain= TillComing(14,9)
                }
                else if(h== 14 && m <=39){
                    tijdElement.textContent="14:39";
                    TimeTillNextTrain= TillComing(14,39)
                }

                //treinen van 15 uur
                else if(h== 15 && m <=9|| h== 14 && m >= 40){
                    tijdElement.textContent="15:09";
                    TimeTillNextTrain= TillComing(15,9)
                }
                else if(h== 15 && m <=39){
                    tijdElement.textContent="15:39";
                    TimeTillNextTrain= TillComing(15,39)
                }

                //treinen van 16 uur
                else if(h== 16 && m <=9 || h==15 && m >=40 ){
                    tijdElement.textContent="16:09";
                    TimeTillNextTrain= TillComing(16,9)
                }
                else if(h== 16 && m <=39){
                    tijdElement.textContent="16:39";
                    TimeTillNextTrain= TillComing(16,39)
                }

                //treinen van 17 uur
                else if(h== 17 && m <=9 || h== 16 && m >=40){
                    tijdElement.textContent="17:09";
                    TimeTillNextTrain= TillComing(17,9)
                }
                else if(h== 17 && m <=39){
                    tijdElement.textContent="17:39";
                    TimeTillNextTrain= TillComing(17,39)
                }

                //treinen van 18 uur
                else if(h== 18 && m <=9 || h== 17 && m >= 40){
                    tijdElement.textContent="18:09";
                    TimeTillNextTrain= TillComing(18,9)
                }
                else if(h== 18 && m <=39){
                    tijdElement.textContent="18:39";
                    TimeTillNextTrain= TillComing(18,39)
                }

                //treinen van 19 uur
                else if(h== 19 && m <=9 || h== 18 && m >= 40){
                    tijdElement.textContent="19:09";
                    TimeTillNextTrain= TillComing(19,9)
                }
                else if(h== 19 && m <=39){
                    tijdElement.textContent="19:39";
                    TimeTillNextTrain= TillComing(19,39)
                }

                //treinen van 20 uur
                else if(h== 20 && m <=9 || h == 19 && m >= 40){
                    tijdElement.textContent="20:09";
                    TimeTillNextTrain= TillComing(20,9)
                }
                else if(h== 20 && m <=39){
                    tijdElement.textContent="20:39";
                    TimeTillNextTrain= TillComing(20,39)
                }

                //treinen van 21 uur
                else if(h== 21 && m <=9 || h ==20 && m >=40){
                    tijdElement.textContent="21:09";
                    TimeTillNextTrain= TillComing(21,9)
                }
                else if(h== 21 && m <=39){
                    tijdElement.textContent="21:39";
                    TimeTillNextTrain= TillComing(21,39)
                }

                //treinen van 22 uur
                else if(h== 22 &&m<= 9 || h==21 && m>=40){
                    tijdElement.textContent="22:09";
                    TimeTillNextTrain= TillComing(22,9)
                }
                else if(h== 22 && m <=39){
                    tijdElement.textContent="22:39";
                    TimeTillNextTrain= TillComing(22,39)
                }

                //trein van 23 uur
                else if(h==23 && m <= 9 ||h==22 && m >= 40 ){
                        tijdElement.textContent="23:09";
                        TimeTillNextTrain= TillComing(23,9)

                }
        }else{
            
                //venlo treien
                //trien 6 uur
                if(h<= 6 && m <=54 || h<= 5|| h== 23 && m >= 25 ){
                    tijdElement.textContent="06:54";
                    if(h==5 && m >54 || h ==6){
                        TimeTillNextTrain= TillComing(6,54)
                    }else{
                        TimeTillNextTrain = "∞";
                    }
                }

                //treinen 7 uur
                else if(h== 7 && m <=24 || h == 6 && m>= 55){
                    tijdElement.textContent="07:24";
                    TimeTillNextTrain= TillComing(7,24)
                }
                else if(h== 7 && m <=54){
                    tijdElement.textContent="07:54";
                    TimeTillNextTrain= TillComing(7,54)
                }
                //treinen 8 uur
                else if(h== 8 && m <=24 || h == 7 && m>= 55){
                    tijdElement.textContent="08:24";
                    TimeTillNextTrain= TillComing(8,24)
                }
                else if(h== 8 && m <=54){
                    tijdElement.textContent="08:54";
                    TimeTillNextTrain= TillComing(8,54)
                }

                //treinen 9 uur
                else if(h== 9 && m <=24 || h ==8 && m >= 55){
                    tijdElement.textContent="09:24";
                    TimeTillNextTrain= TillComing(9,24)
                }
                else if(h== 9 && m <=54){
                    tijdElement.textContent="09:54";
                    TimeTillNextTrain= TillComing(9,54)
                }

                //treien 10 uur
                else if(h== 10 && m <=24 || h ==9 && m >= 55){
                    tijdElement.textContent="10:24";
                    TimeTillNextTrain= TillComing(10,24)
                }
                else if(h== 10 && m <=54){
                    tijdElement.textContent="10:54";
                    TimeTillNextTrain= TillComing(10,54)
                }

                //treien 11 uur
                else if(h== 11 && m <=24 || h ==10 && m >= 55){
                    tijdElement.textContent="11:24";
                    TimeTillNextTrain= TillComing(11,24)
                }
                else if(h== 11 && m <=54){
                    tijdElement.textContent="11:54";
                    TimeTillNextTrain= TillComing(11,54)
                }        
                
                //treien 12 uur
                else if(h== 12 && m <=24 || h ==11 && m >= 55){
                    tijdElement.textContent="12:24";
                    TimeTillNextTrain= TillComing(12,24)
                }
                else if(h== 12 && m <=54){
                    tijdElement.textContent="12:54";
                    TimeTillNextTrain= TillComing(12,54)
                }       

                //treien 13 uur
                else if(h== 13 && m <=24 || h ==12 && m >= 55){
                    tijdElement.textContent="13:24";
                    TimeTillNextTrain= TillComing(13,24)
                }
                else if(h== 13 && m <=54){
                    tijdElement.textContent="13:54";
                    TimeTillNextTrain= TillComing(13,54)
                }   

                //treien 14 uur
                else if(h== 14 && m <=24 || h ==13 && m >= 55){
                    tijdElement.textContent="14:24";
                    TimeTillNextTrain= TillComing(14,24)
                }
                else if(h== 14 && m <=54){
                    tijdElement.textContent="14:54";
                    TimeTillNextTrain= TillComing(14,54)
                }      
                
                //treien 15 uur
                else if(h== 15 && m <=24 || h ==14 && m >= 55){
                    tijdElement.textContent="15:24";
                    TimeTillNextTrain= TillComing(14,24)
                }
                else if(h== 15 && m <=54){
                    tijdElement.textContent="15:54";
                    TimeTillNextTrain= TillComing(15,54)
                }  
                
                //treien 16 uur
                else if(h== 16 && m <=24 || h ==15 && m >= 55){
                    tijdElement.textContent="16:24";
                    TimeTillNextTrain= TillComing(16,24)
                }
                else if(h== 16 && m <=54){
                    tijdElement.textContent="16:54";
                    TimeTillNextTrain= TillComing(16,54)
                }
                
                //treien 17 uur
                else if(h== 17 && m <=24 || h ==16 && m >= 55){
                    tijdElement.textContent="17:24";
                    TimeTillNextTrain= TillComing(17,24)
                }
                else if(h== 17 && m <=54){
                    tijdElement.textContent="17:54";
                    TimeTillNextTrain= TillComing(17,54)
                }

                //treien 18 uur
                else if(h== 18 && m <=24 || h ==17 && m >= 55){
                    tijdElement.textContent="18:24";
                    TimeTillNextTrain= TillComing(18,24)
                }
                else if(h== 18 && m <=54){
                    tijdElement.textContent="18:54";
                    TimeTillNextTrain= TillComing(18,54)
                }

                //treien 19 uur
                else if(h== 19 && m <=24 || h ==18 && m >= 55){
                    tijdElement.textContent="19:24";
                    TimeTillNextTrain= TillComing(19,24)
                }
                else if(h== 19 && m <=54){
                    tijdElement.textContent="19:54";
                    TimeTillNextTrain= TillComing(19,54)
                }

                //treien 20 uur
                else if(h== 20 && m <=24 || h ==19 && m >= 55){
                    tijdElement.textContent="20:24";
                    TimeTillNextTrain= TillComing(20,24)
                }
                else if(h== 20 && m <=54){
                    tijdElement.textContent="20:54";
                    TimeTillNextTrain= TillComing(20,54)
                }

                //treien 21 uur
                else if(h== 21 && m <=24 || h ==20 && m >= 55){
                    tijdElement.textContent="21:24";
                    TimeTillNextTrain= TillComing(21,24)
                }
                else if(h== 21 && m <=54){
                    tijdElement.textContent="21:54";
                    TimeTillNextTrain= TillComing(21,54)
                }

                //treien 22 uur
                else if(h== 22 && m <=24 || h ==21 && m >= 55){
                    tijdElement.textContent="22:24";
                    TimeTillNextTrain= TillComing(22,24)
                }
                else if(h== 22 && m <=54){
                    tijdElement.textContent="22:54";
                    TimeTillNextTrain= TillComing(22,54)
                }

                //trein 23 uur
                else if(h== 23 && m <=24 || h ==22 && m >= 55){
                    tijdElement.textContent="23:24";
                    TimeTillNextTrain= TillComing(23,24)
                }



            // tijdElement.textContent = h + ":" +z + (m+1);  // Display current time
        }


            
        }

        updateTime(); // Call immediately once to set time
        timeInterval = setInterval(updateTime, 1000); // Set interval only once
        tijdElement2.textContent = "";
    }

}

// Set an interval to toggle every 5 seconds (5000 milliseconds)
setInterval(toggleBool, 5000);



let volgende = document.getElementById("volgende");

// Set an interval to update the next time
setInterval(function updateTime2() {
    // Create a new Date object to get the current time
    let dVolgende = new Date();
    let uurV = dVolgende.getHours();
    let minuutV = dVolgende.getMinutes();
    
    if(HeerlenPlaats == true){
        let minuutV2 = minuutV +TimeTillNextTrain + 15;
        // let minuutV2 = minuutV + TimeTillNextTrain + 15 ;
        
        // If minute exceeds 60, adjust it and add to the hour
        if (minuutV2 >= 60) {
            minuutV2 -= 60;
            uurV += 1;
        }
    
        // Format hours and minutes with leading zeros if needed
        let zVolgende = (minuutV2 <= 9) ? "0" : "";
        let zVolgende2 = (uurV <= 9) ? "0" : "";
    
        // Set the formatted time for "next"
        volgende.textContent = "Hierna/next: " + zVolgende2 + uurV + ":" + zVolgende + minuutV2 + " IC Venlo";
    }else{
        let minuutV2 = minuutV +TimeTillNextTrain + 15;
        if (minuutV2 >= 60) {
            minuutV2 -= 60;
            uurV += 1;
        }
        let zVolgende = (minuutV2 <= 9) ? "0" : "";
        let zVolgende2 = (uurV <= 9) ? "0" : "";

        volgende.textContent = "Hierna/next: " + zVolgende2 + uurV + ":" + zVolgende + minuutV2 + " IC Heerlen";
    }

}, 100);  // Update every second


function TillComing(h,m){
    let time = new Date();
    var endtime = new Date();

    endtime.setHours(h);
    endtime.setMinutes(m);

    return timeDif = (endtime.getTime()- time.getTime())/1000/60;

}
