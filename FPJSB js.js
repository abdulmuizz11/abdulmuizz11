function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth'
        });
    }
}
function bookHotel(event) {
    
    event.preventDefault();

    var checkInDate = new Date(document.getElementById('checkin').value);
    let checkin = document.getElementById('check-in');
    checkin.textContent = formatDate(checkInDate);

    
    var checkOutDate = new Date(document.getElementById('checkout').value);
    let checkout = document.getElementById('check-out');
    checkout.textContent = formatDate(checkOutDate);

    var dateRangeList = document.getElementById('dateRangeList');
    dateRangeList.innerHTML = '';

    while (checkInDate < checkOutDate) {
        var listItem = document.createElement('li');
        listItem.textContent = formatDate(checkInDate);
        dateRangeList.appendChild(listItem);

        checkInDate.setDate(checkInDate.getDate() + 1);
    }
    document.getElementById('date-range-section').classList.remove('d-none');

    scrollToSection('date-range-section')

    let fullName = document.getElementById('fullName').value
    let name = document.getElementById('name')
    name.textContent = fullName
    let phoneNumber = document.getElementById('phoneNumber').value
    let phone = document.getElementById('phone')
    phone.textContent = phoneNumber
    let Age = document.getElementById('Age').value
    let age = document.getElementById('age')
    age.textContent = Age + ' ' + 'years old'

    var totalDays = calculateTotalDays(new Date(document.getElementById('checkin').value), new Date(document.getElementById('checkout').value));
    document.getElementById('totalDays').textContent = totalDays;
    border('profiles','1px solid white')
    border('dates','1px solid white')
    return false;
}

function formatDate(date) {
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0');
    var yyyy = date.getFullYear();
    date.getDay()

    return dd + '/' + mm + '/' + yyyy;
}

function calculateTotalDays(checkInDate, checkOutDate) {
    var oneDay = 24 * 60 * 60 * 1000;
    var diffDays = Math.round(Math.abs((checkOutDate - checkInDate) / oneDay));
    return diffDays;
}

function border(element,color){
    let dates = document.getElementsByClassName(element);
    for (let i = 0; i < dates.length; i++) {
      dates[i].style.border = color;
    }
}

function edit1(){
    document.getElementById('fullName').value = '';
    document.getElementById('phoneNumber').value = '';
    document.getElementById('Age').value = '';
    scrollToSection('booking-section');
    border('profiles','1px solid red')
}

function edit2(){
    document.getElementById('checkin').value = '';
    document.getElementById('checkout').value = '';
    scrollToSection('booking-section');
    border('dates','1px solid red')
}

function deleteBooking() {
    document.getElementById('fullName').value = '';
    document.getElementById('phoneNumber').value = '';
    document.getElementById('Age').value = '';
    document.getElementById('checkin').value = '';
    document.getElementById('checkout').value = '';

    document.getElementById('date-range-section').classList.add('d-none');
    scrollToSection('booking-section');
    border('profiles','1px solid white')
    border('dates','1px solid white')
}