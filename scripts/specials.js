
/*jshint esversion: 6 */
/*jshint unused:false*/
/* function to populate the province dropdown menu
*/
/*    
 *    WC4 Team Project
 *    Author: Emma Middleton, Joshua Knutson, Mobin Syed, Johan Elder
 *    Date: March 2, 2022
 */
function populateList() {
//create the array for the dropdown menu list
var provinces = ["Select...", "ON", "QC", "SK", "AB", "BC", "NWT", "YK", "NB", "NS", "PEI", "NU"];

    // pass the contents of the array into the list elements
    let pLen = provinces.length;

    let results = "<ul>";
       for (let i = 0; i < pLen; i++) {
          results += "<option>" + provinces[i] + "</option>";
       }
       results += "</ul>";


    document.getElementById('selectProvince').innerHTML = results;
} // end of function populateList

/// validate form
/**
 *  validates user data entry
 */
 function validateForm() {
    // declare variables
    let txtFirstName = document.getElementById('fName');
    let txtLastName = document.getElementById('lName');
    let emailInput = document.getElementById('txtEmail').value.trim();
    let selectedProvince = document.getElementById('selectProvince');
    let phoneInput = document.getElementById('txtPhone');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // validate first name
    if (txtFirstName.value === '') {
        window.alert('You must enter a first name');
        txtFirstName.focus();
        return false;
    } // end if
    else
    // validate last name
    if (txtLastName.value === '') {
        window.alert('You must enter a last name');
        txtLastName.focus();
        return false;   
    } // end if
    else
    // validate email address
    if (emailInput.value === '') {
        window.alert('You must enter an email address');
        emailInput.focus();
        return false;
    } // end if
    else
    // validate email as correct
    if (!emailRegex.test(emailInput)) {
      alert('Please enter a valid email address');
      return false;
    }
    else
    // validate phone
    if (phoneInput.value === '') {
      window.alert('You must enter a phone number');
      phoneInput.focus();
      return false;   
    } // end if
    else
    // validate province
    if (selectedProvince.value === 'Select...') {
      window.alert('You must select a province');
      selectedProvince.focus();
      return false;   
    } // end if
    else {
        return true;
    } // end else

} // end function validateForm

// function to verify phone number
function verifyPhone(){
  var phoneNum = document.getElementById("txtPhone");
  
  phoneNum.addEventListener('input', () => {
    phoneNum.setCustomValidity('');
    phoneNum.checkValidity();
  });
  
  phoneNum.addEventListener('invalid', () => {
    if(phoneNum.value === '') {
      phoneNum.setCustomValidity('Enter phone number!');
    } else {
      phoneNum.setCustomValidity('Enter phone number in this format: 123-456-7890');
    }
  });
  } // end of function verifyPhone
