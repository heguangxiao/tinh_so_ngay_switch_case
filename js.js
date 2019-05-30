function tinhsongay(){

    let month = parseInt(document.getElementById('month').value);

    switch (month) {
        case 2:
            document.getElementById('messageDiv').innerHTML = 'Thang 2 co 28 hoac 29 ngay!';
            break;
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById('messageDiv').innerHTML = 'Thang '+month+' co 31 ngay!';
            break;
        case 4:
        case 6:
        case 9:
        case 10:
            document.getElementById('messageDiv').innerHTML = 'Thang '+month+' co 30 ngay!';
            break;
        default:
            document.getElementById('messageDiv').innerHTML = 'Chi co 12 thang "1,2,3,4,5,6,7,8,9,10,11,12". OK !';
    }
}