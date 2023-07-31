const filterGroup1 = document.querySelector('.filter-group1')
const filterGroup2 = document.querySelector('.filter-group2')
const hamburgerBtn = document.querySelector('.hoverby')

hamburgerBtn.addEventListener('click', () => {
    if(hamburgerBtn.classList.contains('active')){
        filterGroup1.style.display = 'none'
        filterGroup2.style.display = 'none'
        hamburgerBtn.classList.remove('active')
    } else {
        hamburgerBtn.classList.add('active')
        filterGroup1.style.display = 'block'
        filterGroup2.style.display = 'block'
    }
   
})