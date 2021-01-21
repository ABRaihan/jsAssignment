// https://github.com/ABRaihan/jsAssignment

/* --------> Kilometer To Meter Converting <-------- */
function kilometerToMeter(km) {
    // for checking that is number negative or character string
    if (km < 0 || ('' + Number(km) === 'NaN')) return 'Input Valid Unit...';
    else return 1000 * km;
}

/* --------> Budget Calculator <-------- */
function budgetCalculator(watch, phone, laptop) {
    const watchPrice = 50, phonePrice = 100, laptopPrice = 500;
    // for checking that is number negative or character string
    const checkNegativeValue = watch < 0 || phone < 0 || laptop < 0;
    const checkIsItString = ('' + Number(watch) === 'NaN') || ('' + Number(phone) === 'NaN') || ('' + Number(laptop) === 'NaN');
    if (checkNegativeValue || checkIsItString) return 'Input Valid Quantity...';
    else return (watch * watchPrice) + (phone * phonePrice) + (laptop * laptopPrice);
}

/* --------> Hotel Cost Calculate <-------- */
function hotelCost(days) {
    // for checking that is number negative or character string
    if (days < 0 || ('' + Number(days) === 'NaN')) return 'Input Valid Days...';
    else if (days <= 10) return days * 100;
    else if (days <= 20) return (10 * 100) + ((days - 10) * 80);
    else if (days > 20) return (10 * 100) + (10 * 80) + ((days - 20) * 50);
}

/* --------> Find The Largest Name <-------- */
function megaFriend(names) {
    // check whether all the names are string
    for (let i = 0; i < names.length; i++){
        if(typeof names[i] !== 'string') return 'You have to input all names as string...'
    }
    // sorting the large name in descending order
    for (let i = 0; i < names.length; i++){
        for (let j = 0; j < names.length - 1; j++){
            if (names[j].length < names[j + 1].length) [names[j], names[j + 1]] = [names[j + 1], names[j]];
        }
    }
    let largeName = names[0]
    return largeName;
}