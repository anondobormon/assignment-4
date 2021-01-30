
document.getElementById('plus-button').addEventListener('click', function () {
    calculateTicket('first-class', true);
    calculation();
})
document.getElementById('minus-button').addEventListener('click', function () {
    calculateTicket('first-class', false);
    calculation();
    
})
document.getElementById('economy-minus').addEventListener('click', function () {
    calculateTicket('economy-class', false);
    calculation();

})
document.getElementById('economy-plus').addEventListener('click', function () {
    calculateTicket('economy-class', true);
    calculation();
})

function calculateTicket(id, increase) {
    const firstClass = document.getElementById(id);
    const firstValue = parseInt(firstClass.value);

    // let countTicket = firstValue;

    if (increase == true) {
        firstClass.value = firstValue + 1;
    }
    // console.log(firstClass.value);


    if (increase == false && firstValue > 0) {
        firstClass.value = firstValue - 1;
    }
    console.log(firstClass.value);
}

function calculation() {
    const subTotal = document.getElementById('first-class');
    const subAmount = parseInt(subTotal.value);

    const economyTotal = document.getElementById('economy-class');
    const subEconomy = parseInt(economyTotal.value);
    
    const subTotalAmount =  subAmount * 150 + subEconomy * 100;
    document.getElementById('sub-total').innerText = '$' + subTotalAmount;

    document.getElementById('vat').innerText ='$' + subTotalAmount * 0.1;

    const Total = subTotalAmount + subTotalAmount * 0.1;
    const grossTotal = parseInt(Total);
    document.getElementById('total').innerText ='$' + grossTotal;
}



// <!-- --------------massage-form-------------- -->
// *****Clicked Book Now button ***************


const bookNowBtn = document.getElementById('book-now').addEventListener('click', function(){
    document.getElementById('booking-area').style.display = 'none';
    document.getElementById('confirmation').style.display = 'block';

// ************flyingform*************

const flyingForm = document.getElementById('flying-from');
const flyingValue = flyingForm.value;
document.getElementById('fly-ing').value = flyingValue;


// *************return to **************

const flyingTo = document.getElementById('return-to');
const flyingToValue = flyingTo.value;
document.getElementById('flying-to').value = flyingToValue;



// ***********departure date*************

    const departure = document.getElementById('departure-tickit').value;
    document.getElementById('departure-value').innerText = departure;

// ***********return date***********

    const returnTKT = document.getElementById('return-tickit').value;
    document.getElementById('return-value').innerText = returnTKT;

// *********First class***********

    const firstTickit = document.getElementById('first-class').value;
    const firstClass1 = firstTickit.toString();
    document.getElementById('first-class1').innerText = firstClass1  + ' X 150 X 0.1';

// ***********economy class************

    const economyTickit = document.getElementById('economy-class').value;
    const economyA = economyTickit.toString();
    document.getElementById('economy-1').innerText = economyA  + ' X 100 X 0.1';

// ******gross total*******

    const totalall = document.getElementById('total').innerText;
    document.getElementById('gross-total').innerText = totalall;
})





























// const subTotal = document.getElementById('first-class');
// const subAmount = parseInt(subTotal.value);
// console.log(subAmount);









// plusButton.addEventListener('click', function(){
//     const firstValue = parseInt(firstClass.value);
//     const totalValues = firstValue + 1;
//     document.getElementById('first-class').value = totalValues;
// })

// minusClass.addEventListener('click', function(){
//     const firstValue = parseInt(firstClass.value);
//     const totalValues = firstValue - 1;
//     if(totalValues < 0){
//         totalValues = 0;
//     }
//     console.log(totalValues);
//     document.getElementById('first-class').value = totalValues;
// })

