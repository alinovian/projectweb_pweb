/* 
NOTES:
to make this asynchronous test work, you need to change parameters in the HTML file. 
take a look at click listener on the button, you will see "babypack".
change it to "starterpack". 
done!
*/
console.log('javascript ready...')

document.querySelector('button[class*="md:hidden"]').addEventListener('click', function () {
    const mobileMenu = document.querySelector('.md\\:hidden.hidden');
    mobileMenu.classList.toggle('hidden');
});

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        mobileMenu.style.maxHeight = mobileMenu.scrollHeight + "px";
    } else {
        mobileMenu.style.maxHeight = "0";
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 300); // Sesuai durasi transition (300ms)
    }
});