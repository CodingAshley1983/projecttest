

//Setting up all Mood objects. id's within each object also lead to an object (nested objects)
var happiness= {
    drinkIDS: ['14360', '14578','14730','15615','15395','12738','17266','17827','17190','14107','17224','16958','13807','15182','12560','13940','15200','11024','15951'],
  

};

var sadness ={
    drinkIDS: ['17105',
    '15288',
    '16134',
    '16271',
    '17020',
    '13194',
    '16998',
    '17245',
    '11000',
    '17229',
    '11008',
    '14071',
    '11118',
    '11119',
    '17288',
    '11117',
    '11120',
    '12798',
    '12800',
    '11157',
    '16047']
  
};

var fear = {
    drinkIDS=['14642',
    '14688',
    '15178',
    '15761',
    '14610',
    '16419',
    '17250',
    '17211',
    '16178',
    '16273',
    '11028',
    '14584',
    '17074',
    '11055',
    '13086',
    '17060',
    '11407',
    '11403',
    '17230'
  ]
};

var anger = {
    drinkIDS: ['14065',
    '12870',
    '15597',
    '16041',
    '13222',
    '13070',
    '13861',
    '14087',
    '17122',
    '12107',
    '14306',
    '16100',
    '13202',
    '11368',
    '11239',
    '17135']

};

var disgust = {
    drinkIDS= ['15082',
    '15515',
    '15743',
    '16295',
    '17118',
    '16403',
    '17120',
    '17220',
    '17380',
    '13128',
    '14466',
    '17829',
    '12101',
    '11023',
    '14598',
    '13581',
    '17222',
    '13070']
};

var suprised = {
    drinkIDS= ['14602',
    '16108',
    '16333',
    '16942',
    '13940',
    '17184',
    '14782',
    '11798',
    '11872',
    '13535',
    '16992',
    '13072',
    '13198',
    '13652',
    '16405',
    '14360',
    '11010',
    '13899',
    '11053',
    '15567',
    '11034']
};

//create random for loop function that spits out random drink id from whatever array we decide- all based on buttons.

$("#happy-button").on("click", function){
    //call random for loop function here for happy object drink ID array, continue with grabbing all emotion buttons and doing the same.
}


$("#drinkBtn").on('click', function () {
    var drinkID = "";
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkID
    // Performing AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    // After data comes back from the request
    .then(function(response) {
        // storing the data from the AJAX request in the results variable
        var results = response.drinks;
        console.log(results);
    });
});