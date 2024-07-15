let scrollContainer = document.querySelector('.container');
let backBtn = document.getElementById('backBtn');
let nextBtn = document.getElementById('nextBtn');

scrollContainer.addEventListener("wheel", (e) =>{
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
    scrollContainer.style.scrollBehaviour = 'auto';
})

nextBtn.addEventListener("click", () =>{
    scrollContainer.style.scrollBehaviour = 'smooth';
    scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", () =>{
    scrollContainer.style.scrollBehaviour = 'smooth';
    scrollContainer.scrollLeft -= 900;
});