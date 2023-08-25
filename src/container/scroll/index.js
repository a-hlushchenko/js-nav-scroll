let isDisplay = false;

setInterval(() => {
    if (scrollY > window.innerHeight && !isDisplay) {
        button.style.display = 'block';
        isDisplay = true;
    } else if (scrollY <= window.innerHeight && isDisplay) {
        button.style.display = 'none';
        isDisplay = false;
    }
}, 500)

button.onclick = () => {
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
}