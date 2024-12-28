document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const responseMessage = document.getElementById('responseMessage');

    if(name && email && message) {
        responseMessage.textContent = '謝謝妳的訊息！我會盡快回覆妳喔 😊';
        responseMessage.style.color = '#ff69b4';
        
        this.reset();
    } else {
        responseMessage.textContent = '請完整填寫每個欄位。';
        responseMessage.style.color = 'red';
    }
});