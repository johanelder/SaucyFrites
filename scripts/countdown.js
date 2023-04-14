// JavaScript Document
/*jshint unused:false*/
/*    
 *    WC4 Team Project
 *    Author: Emma Middleton, Joshua Knutson, Mobin Syed, Johan Elder
 *    Date: March 2, 2022
 */

/* 1. eventClock() - start up function - displays countdown in days, hours, 
    minutes, seconds to target date
   2. calculateDays - returns the number of days left between the current
    date and target date
*/

function eventClock() {
    
    // create a variable that contains the curret date and time
    let today = new Date();

    // make a call to calculateDays(today) 
    let days = calculateDays(today);

    // display the days left in the txtDaysLeft textbox
    document.getElementById('txtDaysLeft').value = Math.floor(days);

    // calculate the hours left in the current day
    let hours = ( days -  Math.floor(days)) * 24;

    // display hours rounded to the next lowest integer
    document.getElementById('txtHrLeft').value = Math.floor(hours);

    // calculate the minutes left to the cuurent hour
    let minutes = (hours - Math.floor(hours)) * 60 ; 

    // display minutes rounded to the next lowest integer
    document.getElementById('txtMinLeft').value = Math.floor(minutes);

    // calculate the seconds left to the current minute
    let seconds = (minutes - Math.floor(minutes)) * 60;

    // display seconds rounded to the next lowest integer
    document.getElementById('txtSecLeft').value = Math.floor(seconds); 
}

/**
 * returns the number of days left between the current date and target date
 * @param {Date} currentDate 
 */
function calculateDays(currentDate) {

    //set the openingDate
    let openingDate = new Date('May 21, 2023 11:30:00');

    //convert milliseconds to days
    let numberOfDays = (openingDate - currentDate) / (1000 * 60 * 60 * 24) ;
    return numberOfDays;
}
