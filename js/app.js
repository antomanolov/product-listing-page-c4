const mockData = {
    'bags':[
        {'brand': 'Channel', 'price': 80, 'discount': 20, 'color': 'Red', 'img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_342267.jpg'},
        {'brand': 'Dior', 'price': 180, 'discount': 20, 'color': 'Green', 'img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_342323.jpg'}
    ]
}

// filter hamburger
const filterGroup1 = document.querySelector('.filter-group1')
const filterGroup2 = document.querySelector('.filter-group2')
const hamburgerBtn = document.querySelector('.hoverby')

// category buttons
const bagsButton = document.querySelector('.bags-btn')
const shoesButton = document.querySelector('.shoes-btn')
const jewelryButton = document.querySelector('.jewelry-btn')
const scarfsButton = document.querySelector('.scarfs-btn')
const btnArray = [bagsButton, shoesButton, jewelryButton, scarfsButton]

// category and description
const categoryH2 = document.querySelector('.category h2')
const categoryPara = document.querySelector('.category p')

// load more button
const loadMore = document.querySelector('.load-more button')

// products
const products = document.querySelector('.products')

// change the category and description when category is clicked
btnArray.forEach(btn => btn.addEventListener('click', () =>{
    categoryH2.textContent = btn.textContent
    categoryPara.textContent = `This category includes all ${btn.textContent.toLowerCase()} in The Boutique Shop.`
}))
// filter functionality
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

// data product creator
for (let i = 0; i < mockData.bags.length; i++) {
    const boxDiv = document.createElement('div')
boxDiv.classList.add('box')
const img = document.createElement('img')
const descDiv = document.createElement('div')
const pItemDesc = document.createElement('p')
pItemDesc.classList.add('item-desc')
pItemDesc.textContent = `${mockData.bags[i].color} ${mockData.bags[i].brand.toUpperCase()} dress`
const hr = document.createElement('hr')
const pPrice = document.createElement('p')
pPrice.classList.add('price')
pPrice.textContent = `${mockData.bags[i].price}$` 
descDiv.classList.add('description')
descDiv.append(pItemDesc, hr, pPrice)
img.src = mockData['bags'][i].img

boxDiv.appendChild(img)
boxDiv.appendChild(descDiv)

products.appendChild(boxDiv)
}



