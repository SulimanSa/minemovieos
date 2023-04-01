
function checkEmails() {
        const Email = document.getElementById('Email');
        if (/.+@(gmail|yahoo|hotmail)\.com$/.test(Email.value)) {
            Email.setCustomValidity('')

        } else {
            Email.setCustomValidity('No yahoo.com, gmail.com or hotmail.com emails')

                         


        }

}
