const navshow = document.querySelector('.nav-show');
const buttonshow = document.querySelector('.checkss');
 
 
buttonshow.addEventListener('click', () => {
    if (navshow.style.display == 'none') {
        navshow.style.display = 'block';
        
    }

    
    else {
        navshow.style.display = 'none';
    }
});
 
 