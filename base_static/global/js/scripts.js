(()=>{
    function aboutContainerChange() {
        var scrollLimit = 180;
        var aboutContainer = document.getElementById('aboutme');

        if (window.scrollY >= scrollLimit) {
            aboutContainer.classList.remove('-tw-left-full');
            aboutContainer.style.transition = 'transform 1s ease-in-out';
            aboutContainer.style.transform = 'translateX(0px)';
        } else {
            aboutContainer.style.transition = 'left 1s ease-out';
            aboutContainer.style.transform = 'translateX(-450px)';
            aboutContainer.classList.add('-tw-left-full');
        }

    }

    window.addEventListener('scroll', aboutContainerChange);
})();