document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.navbar').classList.toggle('active');
});



var typed = new Typed(".text", {
    strings: ["Frontend Developer", "UI/UX Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


document.getElementById('submitBtn').addEventListener('click', function () {
    // Retrieve form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    // Create CSV content
    var csvContent = "Name,Email,Subject,Message\n"; // Header row
    csvContent += '"' + name + '","' + email + '","' + subject + '","' + message + '"\n';

    // Send the form data to data.csv file
    sendFormDataToCSV(csvContent);
});

function sendFormDataToCSV(csvContent) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'data.csv', true); // Assuming data.csv is in the same directory
    xhr.setRequestHeader('Content-type', 'text/csv; charset=utf-8');
    xhr.send(csvContent);

    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
}

