
var age = document.querySelectorAll('#age-input');

age.forEach(input => {
    input.addEventListener('input', function () {
        var age = parseInt(this.value, 10);
        var actionBtn = this.parentElement.nextElementSibling.querySelector('#action-btn');

        // Age condition...
        if (age >= 18) {
            actionBtn.disabled = false;
        } else {
            actionBtn.disabled= true;
        }
    });
});