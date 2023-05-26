let tds = document.querySelectorAll('td');
tds.forEach(element => {
    element.onclick = function () {
        this.style.background = '#222';
    }
});