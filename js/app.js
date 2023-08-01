
// This is the data object from where I get all the info for the product page
const mockData = {
    'dresses':[
        {'brand': 'the boutique', 'stars': 1,'price': 120, 'discount': 30, 'color': 'Green', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_342323.jpg'},
        {'brand': 'the boutique', 'stars': 2,'price': 80, 'discount': null, 'color': 'Black', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_342267.jpg'},
        {'brand': 'the boutique', 'stars': 4,'price': 90, 'discount': null, 'color': 'Black', 'material': 'Linen','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341919.jpg'},
        {'brand': 'the boutique', 'stars': 5,'price': 110, 'discount': null, 'color': 'Purple', 'material': 'Silk','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_340892.jpg'},
        {'brand': 'the boutique', 'stars': 2,'price': 200, 'discount': null, 'color': 'Red', 'material': 'Linen','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341907.jpg'},
        {'brand': 'the boutique', 'stars': 2,'price': 210, 'discount': 40, 'color': 'Blue', 'material': 'Linen','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341503.jpg'},
        {'brand': 'the boutique', 'stars': 3,'price': 93, 'discount': null, 'color': 'Green', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341258.jpg'},
        {'brand': 'the boutique', 'stars': 3,'price': 340, 'discount': null, 'color': 'White', 'material': 'Silk','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341262.jpg'},
        {'brand': 'the boutique', 'stars': 5,'price': 120, 'discount': null, 'color': 'Green', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_342323.jpg'},
        {'brand': 'the boutique', 'stars': 5,'price': 80, 'discount': 40, 'color': 'Black', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_342267.jpg'},
        {'brand': 'the boutique', 'stars': 2,'price': 90, 'discount': null, 'color': 'Black', 'material': 'Linen','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341919.jpg'},
        {'brand': 'the boutique', 'stars': 3,'price': 110, 'discount': null, 'color': 'Purple', 'material': 'Silk','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_340892.jpg'},
        {'brand': 'the boutique', 'stars': 1,'price': 200, 'discount': null, 'color': 'Red', 'material': 'Linen','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341907.jpg'},
        {'brand': 'the boutique', 'stars': 1,'price': 210, 'discount': null, 'color': 'Blue', 'material': 'Linen','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341503.jpg'},
        {'brand': 'the boutique', 'stars': 1,'price': 93, 'discount': null, 'color': 'Green', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341258.jpg'},
        {'brand': 'the boutique', 'stars': 3,'price': 340, 'discount': 200, 'color': 'White', 'material': 'Silk','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341262.jpg'},
        {'brand': 'the boutique', 'stars': 4,'price': 120, 'discount': null, 'color': 'Green', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_342323.jpg'},
        {'brand': 'the boutique', 'stars': 4,'price': 80, 'discount': null, 'color': 'Black', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_342267.jpg'},
        {'brand': 'the boutique', 'stars': 1,'price': 90, 'discount': null, 'color': 'Black', 'material': 'Linen','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341919.jpg'},
        {'brand': 'the boutique', 'stars': 2,'price': 110, 'discount': null, 'color': 'Purple', 'material': 'Silk','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_340892.jpg'},
        {'brand': 'the boutique', 'stars': 2,'price': 200, 'discount': 120, 'color': 'Red', 'material': 'Linen','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341907.jpg'},
        {'brand': 'the boutique', 'stars': 4,'price': 210, 'discount': null, 'color': 'Blue', 'material': 'Linen','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341503.jpg'},
        {'brand': 'the boutique', 'stars': 5,'price': 93, 'discount': null, 'color': 'Green', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341258.jpg'},
        {'brand': 'the boutique', 'stars': 5,'price': 340, 'discount': 220, 'color': 'White', 'material': 'Silk','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341262.jpg'},
        {'brand': 'the boutique', 'stars': 4,'price': 120, 'discount': null, 'color': 'Green', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_342323.jpg'},
        {'brand': 'the boutique', 'stars': 3,'price': 80, 'discount': null, 'color': 'Black', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_342267.jpg'},
        {'brand': 'the boutique', 'stars': 2,'price': 90, 'discount': null, 'color': 'Black', 'material': 'Linen','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341919.jpg'},
        {'brand': 'the boutique', 'stars': 1,'price': 110, 'discount': null, 'color': 'Purple', 'material': 'Silk','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_340892.jpg'},
        {'brand': 'the boutique', 'stars': 2,'price': 200, 'discount': 65, 'color': 'Red', 'material': 'Linen','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341907.jpg'},
        {'brand': 'the boutique', 'stars': 3,'price': 210, 'discount': null, 'color': 'Blue', 'material': 'Linen','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341503.jpg'},
        {'brand': 'the boutique', 'stars': 5,'price': 93, 'discount': null, 'color': 'Green', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341258.jpg'},
        {'brand': 'the boutique', 'stars': 5,'price': 340, 'discount': null, 'color': 'White', 'material': 'Silk','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341262.jpg'},
        {'brand': 'the boutique', 'stars': 5,'price': 120, 'discount': null, 'color': 'Green', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_342323.jpg'},
        {'brand': 'the boutique', 'stars': 5,'price': 80, 'discount': null, 'color': 'Black', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_342267.jpg'},
        {'brand': 'the boutique', 'stars': 4,'price': 90, 'discount': null, 'color': 'Black', 'material': 'Linen','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341919.jpg'},
        {'brand': 'the boutique', 'stars': 4,'price': 110, 'discount': null, 'color': 'Purple', 'material': 'Silk','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_340892.jpg'},
        {'brand': 'the boutique', 'stars': 4,'price': 200, 'discount': 100, 'color': 'Red', 'material': 'Linen','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341907.jpg'},
        {'brand': 'the boutique', 'stars': 4,'price': 210, 'discount': 200, 'color': 'Blue', 'material': 'Linen','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341503.jpg'},
        {'brand': 'the boutique', 'stars': 2,'price': 93, 'discount': null, 'color': 'Green', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341258.jpg'},
        {'brand': 'the boutique', 'stars': 2,'price': 340, 'discount': 120, 'color': 'White', 'material': 'Silk','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341262.jpg'},
        {'brand': 'the boutique', 'stars': 1,'price': 340, 'discount': null, 'color': 'White', 'material': 'Silk','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341262.jpg'},
        {'brand': 'the boutique', 'stars': 5,'price': 340, 'discount': null, 'color': 'White', 'material': 'Silk','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341262.jpg'},
       
    ],
    'shoes':[
        {'brand': 'the boutique', 'price': 110, 'discount': 50, 'color': 'White', 'material': 'Fabric','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_338268.jpg'},
        {'brand': 'the boutique', 'price': 95, 'discount': null, 'color': 'Black', 'material': 'Fabric','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_336397.jpg'},
        {'brand': 'the boutique', 'price': 30, 'discount': null, 'color': 'White', 'material': 'Fabric','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_324836.jpg'},
        {'brand': 'the boutique', 'price': 105, 'discount': null, 'color': 'Red', 'material': 'Fabric','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_315447.jpg'},
        {'brand': 'the boutique', 'price': 450, 'discount': 220, 'color': 'Blue', 'material': 'Leather','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_178310.jpg'},
        {'brand': 'the boutique', 'price': 120, 'discount': null, 'color': 'Purple', 'material': 'Fabric','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_241344.jpg'},
        {'brand': 'the boutique', 'price': 340, 'discount': null, 'color': 'Black', 'material': 'Fabrick','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_178305.jpg'},
        {'brand': 'the boutique', 'price': 60, 'discount': null, 'color': 'White', 'material': 'Leather','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_240009.jpg'},
        {'brand': 'the boutique', 'price': 110, 'discount': 40, 'color': 'White', 'material': 'Fabric','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_338268.jpg'},
        {'brand': 'the boutique', 'price': 95, 'discount': null, 'color': 'Black', 'material': 'Fabric','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_336397.jpg'},
        {'brand': 'the boutique', 'price': 30, 'discount': null, 'color': 'White', 'material': 'Fabric','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_324836.jpg'},
        {'brand': 'the boutique', 'price': 105, 'discount': 100, 'color': 'Red', 'material': 'Fabric','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_315447.jpg'},
        {'brand': 'the boutique', 'price': 450, 'discount': null, 'color': 'Blue', 'material': 'Leather','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_178310.jpg'},
        {'brand': 'the boutique', 'price': 120, 'discount': 40, 'color': 'Purple', 'material': 'Fabric','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_241344.jpg'},
        {'brand': 'the boutique', 'price': 340, 'discount': null, 'color': 'Black', 'material': 'Fabrick','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_178305.jpg'},
        {'brand': 'the boutique', 'price': 60, 'discount': null, 'color': 'White', 'material': 'Leather','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_240009.jpg'},
        {'brand': 'the boutique', 'price': 110, 'discount': 60, 'color': 'White', 'material': 'Fabric','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_338268.jpg'},
        {'brand': 'the boutique', 'price': 95, 'discount': null, 'color': 'Black', 'material': 'Fabric','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_336397.jpg'},
        {'brand': 'the boutique', 'price': 30, 'discount': null, 'color': 'White', 'material': 'Fabric','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_324836.jpg'},
        {'brand': 'the boutique', 'price': 105, 'discount': null, 'color': 'Red', 'material': 'Fabric','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_315447.jpg'},
        {'brand': 'the boutique', 'price': 450, 'discount': 320, 'color': 'Blue', 'material': 'Leather','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_178310.jpg'},
        {'brand': 'the boutique', 'price': 120, 'discount': null, 'color': 'Purple', 'material': 'Fabric','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_241344.jpg'},
        {'brand': 'the boutique', 'price': 340, 'discount': 300, 'color': 'Black', 'material': 'Fabrick','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_178305.jpg'},
        {'brand': 'the boutique', 'price': 60, 'discount': null, 'color': 'White', 'material': 'Leather','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_240009.jpg'},
        {'brand': 'the boutique', 'price': 110, 'discount': null, 'color': 'White', 'material': 'Fabric','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_338268.jpg'},
        {'brand': 'the boutique', 'price': 95, 'discount': null, 'color': 'Black', 'material': 'Fabric','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_336397.jpg'},
        {'brand': 'the boutique', 'price': 30, 'discount': null, 'color': 'White', 'material': 'Fabric','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_324836.jpg'},
        {'brand': 'the boutique', 'price': 105, 'discount': null, 'color': 'Red', 'material': 'Fabric','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_315447.jpg'},
        {'brand': 'the boutique', 'price': 450, 'discount': 125, 'color': 'Blue', 'material': 'Leather','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_178310.jpg'},
        {'brand': 'the boutique', 'price': 120, 'discount': null, 'color': 'Purple', 'material': 'Fabric','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_241344.jpg'},
        {'brand': 'the boutique', 'price': 340, 'discount': null, 'color': 'Black', 'material': 'Fabrick','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_178305.jpg'},
        {'brand': 'the boutique', 'price': 60, 'discount': null, 'color': 'White', 'material': 'Leather','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_240009.jpg'},
        {'brand': 'the boutique', 'price': 110, 'discount': null, 'color': 'White', 'material': 'Fabric','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_338268.jpg'},
        {'brand': 'the boutique', 'price': 95, 'discount': 30, 'color': 'Black', 'material': 'Fabric','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_336397.jpg'},
        {'brand': 'the boutique', 'price': 30, 'discount': null, 'color': 'White', 'material': 'Fabric','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_324836.jpg'},
        {'brand': 'the boutique', 'price': 105, 'discount': null, 'color': 'Red', 'material': 'Fabric','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_315447.jpg'},
        {'brand': 'the boutique', 'price': 450, 'discount': null, 'color': 'Blue', 'material': 'Leather','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_178310.jpg'},
        {'brand': 'the boutique', 'price': 120, 'discount': null, 'color': 'Purple', 'material': 'Fabric','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_241344.jpg'},
        {'brand': 'the boutique', 'price': 340, 'discount': 200, 'color': 'Black', 'material': 'Fabrick','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_178305.jpg'},
        {'brand': 'the boutique', 'price': 60, 'discount': null, 'color': 'White', 'material': 'Leather','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_240009.jpg'},
        {'brand': 'the boutique', 'price': 340, 'discount': null, 'color': 'Black', 'material': 'Fabrick','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_178305.jpg'},
        {'brand': 'the boutique', 'price': 60, 'discount': 15, 'color': 'White', 'material': 'Leather','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_240009.jpg'},
    ],
    'jewelry':[
        {'brand': 'the boutique', 'price': 205, 'discount': 100, 'color': '', 'material': 'Gold','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_340395.jpg'},
        {'brand': 'the boutique', 'price': 310, 'discount': null, 'color': '', 'material': 'Silver','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_340374.jpg'},
        {'brand': 'the boutique', 'price': 120, 'discount': null, 'color': '', 'material': 'Gold','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_340360.jpg'},
        {'brand': 'the boutique', 'price': 330, 'discount': null, 'color': '', 'material': 'Silver','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_339591.jpg'},
        {'brand': 'the boutique', 'price': 540, 'discount': null, 'color': '', 'material': 'Gold','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_339214.jpg'},
        {'brand': 'the boutique', 'price': 120, 'discount': null, 'color': '', 'material': 'Silver','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_339187.jpg'},
        {'brand': 'the boutique', 'price': 310, 'discount': null, 'color': '', 'material': 'Gold','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_329999.jpg'},
        {'brand': 'the boutique', 'price': 410, 'discount': null, 'color': '', 'material': 'Gold','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_327113.jpg'},
        {'brand': 'the boutique', 'price': 205, 'discount': null, 'color': '', 'material': 'Gold','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_340395.jpg'},
        {'brand': 'the boutique', 'price': 310, 'discount': null, 'color': '', 'material': 'Silver','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_340374.jpg'},
        {'brand': 'the boutique', 'price': 120, 'discount': null, 'color': '', 'material': 'Gold','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_340360.jpg'},
        {'brand': 'the boutique', 'price': 330, 'discount': null, 'color': '', 'material': 'Silver','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_339591.jpg'},
        {'brand': 'the boutique', 'price': 540, 'discount': 240, 'color': '', 'material': 'Gold','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_339214.jpg'},
        {'brand': 'the boutique', 'price': 120, 'discount': null, 'color': '', 'material': 'Silver','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_339187.jpg'},
        {'brand': 'the boutique', 'price': 310, 'discount': null, 'color': '', 'material': 'Gold','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_329999.jpg'},
        {'brand': 'the boutique', 'price': 410, 'discount': null, 'color': '', 'material': 'Gold','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_327113.jpg'},
        {'brand': 'the boutique', 'price': 205, 'discount': null, 'color': '', 'material': 'Gold','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_340395.jpg'},
        {'brand': 'the boutique', 'price': 310, 'discount': null, 'color': '', 'material': 'Silver','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_340374.jpg'},
        {'brand': 'the boutique', 'price': 120, 'discount': null, 'color': '', 'material': 'Gold','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_340360.jpg'},
        {'brand': 'the boutique', 'price': 330, 'discount': null, 'color': '', 'material': 'Silver','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_339591.jpg'},
        {'brand': 'the boutique', 'price': 540, 'discount': null, 'color': '', 'material': 'Gold','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_339214.jpg'},
        {'brand': 'the boutique', 'price': 120, 'discount': null, 'color': '', 'material': 'Silver','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_339187.jpg'},
        {'brand': 'the boutique', 'price': 310, 'discount': null, 'color': '', 'material': 'Gold','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_329999.jpg'},
        {'brand': 'the boutique', 'price': 410, 'discount': 120, 'color': '', 'material': 'Gold','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_327113.jpg'},
        {'brand': 'the boutique', 'price': 205, 'discount': null, 'color': '', 'material': 'Gold','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_340395.jpg'},
        {'brand': 'the boutique', 'price': 310, 'discount': null, 'color': '', 'material': 'Silver','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_340374.jpg'},
        {'brand': 'the boutique', 'price': 120, 'discount': null, 'color': '', 'material': 'Gold','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_340360.jpg'},
        {'brand': 'the boutique', 'price': 330, 'discount': null, 'color': '', 'material': 'Silver','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_339591.jpg'},
        {'brand': 'the boutique', 'price': 540, 'discount': null, 'color': '', 'material': 'Gold','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_339214.jpg'},
        {'brand': 'the boutique', 'price': 120, 'discount': null, 'color': '', 'material': 'Silver','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_339187.jpg'},
        {'brand': 'the boutique', 'price': 310, 'discount': null, 'color': '', 'material': 'Gold','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_329999.jpg'},
        {'brand': 'the boutique', 'price': 410, 'discount': 100, 'color': '', 'material': 'Gold','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_327113.jpg'},
        {'brand': 'the boutique', 'price': 205, 'discount': null, 'color': '', 'material': 'Gold','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_340395.jpg'},
        {'brand': 'the boutique', 'price': 310, 'discount': null, 'color': '', 'material': 'Silver','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_340374.jpg'},
        {'brand': 'the boutique', 'price': 120, 'discount': null, 'color': '', 'material': 'Gold','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_340360.jpg'},
        {'brand': 'the boutique', 'price': 330, 'discount': null, 'color': '', 'material': 'Silver','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_339591.jpg'},
        {'brand': 'the boutique', 'price': 540, 'discount': null, 'color': '', 'material': 'Gold','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_339214.jpg'},
        {'brand': 'the boutique', 'price': 120, 'discount': null, 'color': '', 'material': 'Silver','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_339187.jpg'},
        {'brand': 'the boutique', 'price': 310, 'discount': null, 'color': '', 'material': 'Gold','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_329999.jpg'},
        {'brand': 'the boutique', 'price': 410, 'discount': null, 'color': '', 'material': 'Gold','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_327113.jpg'},
        {'brand': 'the boutique', 'price': 310, 'discount': null, 'color': '', 'material': 'Gold','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_329999.jpg'},
        {'brand': 'the boutique', 'price': 410, 'discount': null, 'color': '', 'material': 'Gold','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_327113.jpg'},
    ],
    'jeans':[
        {'brand': 'the boutique', 'price': 110, 'discount': 10, 'color': 'Blue', 'material': 'Denom','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_334460.jpg'},
        {'brand': 'the boutique', 'price': 230, 'discount': 23, 'color': 'Black', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_334456.jpg'},
        {'brand': 'the boutique', 'price': 410, 'discount': 41, 'color': 'Black', 'material': 'Denim','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_334082.jpg'},
        {'brand': 'the boutique', 'price': 110, 'discount': 11, 'color': 'Blue', 'material': 'Denim','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_334074.jpg'},
        {'brand': 'the boutique', 'price': 440, 'discount': 44, 'color': 'Blue', 'material': 'Denim','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_334051.jpg'},
        {'brand': 'the boutique', 'price': 210, 'discount': 21, 'color': 'Blue', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_334031.jpg'},
        {'brand': 'the boutique', 'price': 110, 'discount': 11, 'color': 'Black', 'material': 'Denim','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_334011.jpg'},
        {'brand': 'the boutique', 'price': 90, 'discount': 9, 'color': 'Black', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_331489.jpg'},
        {'brand': 'the boutique', 'price': 110, 'discount': 10, 'color': 'Blue', 'material': 'Denom','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_334460.jpg'},
        {'brand': 'the boutique', 'price': 230, 'discount': 23, 'color': 'Black', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_334456.jpg'},
        {'brand': 'the boutique', 'price': 410, 'discount': 41, 'color': 'Black', 'material': 'Denim','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_334082.jpg'},
        {'brand': 'the boutique', 'price': 110, 'discount': 11, 'color': 'Blue', 'material': 'Denim','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_334074.jpg'},
        {'brand': 'the boutique', 'price': 440, 'discount': 44, 'color': 'Blue', 'material': 'Denim','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_334051.jpg'},
        {'brand': 'the boutique', 'price': 210, 'discount': 21, 'color': 'Blue', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_334031.jpg'},
        {'brand': 'the boutique', 'price': 110, 'discount': 11, 'color': 'Black', 'material': 'Denim','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_334011.jpg'},
        {'brand': 'the boutique', 'price': 90, 'discount': 9, 'color': 'Black', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_331489.jpg'},
        {'brand': 'the boutique', 'price': 110, 'discount': 10, 'color': 'Blue', 'material': 'Denom','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_334460.jpg'},
        {'brand': 'the boutique', 'price': 230, 'discount': 23, 'color': 'Black', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_334456.jpg'},
        {'brand': 'the boutique', 'price': 410, 'discount': 41, 'color': 'Black', 'material': 'Denim','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_334082.jpg'},
        {'brand': 'the boutique', 'price': 110, 'discount': 11, 'color': 'Blue', 'material': 'Denim','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_334074.jpg'},
        {'brand': 'the boutique', 'price': 440, 'discount': 44, 'color': 'Blue', 'material': 'Denim','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_334051.jpg'},
        {'brand': 'the boutique', 'price': 210, 'discount': 21, 'color': 'Blue', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_334031.jpg'},
        {'brand': 'the boutique', 'price': 110, 'discount': 11, 'color': 'Black', 'material': 'Denim','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_334011.jpg'},
        {'brand': 'the boutique', 'price': 90, 'discount': 9, 'color': 'Black', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_331489.jpg'},
        {'brand': 'the boutique', 'price': 110, 'discount': 10, 'color': 'Blue', 'material': 'Denom','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_334460.jpg'},
        {'brand': 'the boutique', 'price': 230, 'discount': 23, 'color': 'Black', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_334456.jpg'},
        {'brand': 'the boutique', 'price': 410, 'discount': 41, 'color': 'Black', 'material': 'Denim','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_334082.jpg'},
        {'brand': 'the boutique', 'price': 110, 'discount': 11, 'color': 'Blue', 'material': 'Denim','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_334074.jpg'},
        {'brand': 'the boutique', 'price': 440, 'discount': 44, 'color': 'Blue', 'material': 'Denim','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_334051.jpg'},
        {'brand': 'the boutique', 'price': 210, 'discount': 21, 'color': 'Blue', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_334031.jpg'},
        {'brand': 'the boutique', 'price': 110, 'discount': 11, 'color': 'Black', 'material': 'Denim','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_334011.jpg'},
        {'brand': 'the boutique', 'price': 90, 'discount': 9, 'color': 'Black', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_331489.jpg'},
        {'brand': 'the boutique', 'price': 110, 'discount': 10, 'color': 'Blue', 'material': 'Denom','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_334460.jpg'},
        {'brand': 'the boutique', 'price': 230, 'discount': 23, 'color': 'Black', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_334456.jpg'},
        {'brand': 'the boutique', 'price': 410, 'discount': 41, 'color': 'Black', 'material': 'Denim','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_334082.jpg'},
        {'brand': 'the boutique', 'price': 110, 'discount': 11, 'color': 'Blue', 'material': 'Denim','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_334074.jpg'},
        {'brand': 'the boutique', 'price': 440, 'discount': 44, 'color': 'Blue', 'material': 'Denim','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_334051.jpg'},
        {'brand': 'the boutique', 'price': 210, 'discount': 21, 'color': 'Blue', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_334031.jpg'},
        {'brand': 'the boutique', 'price': 110, 'discount': 11, 'color': 'Black', 'material': 'Denim','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_334011.jpg'},
        {'brand': 'the boutique', 'price': 90, 'discount': 9, 'color': 'Black', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_331489.jpg'},
        {'brand': 'the boutique', 'price': 110, 'discount': 11, 'color': 'Black', 'material': 'Denim','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_334011.jpg'},
        {'brand': 'the boutique', 'price': 90, 'discount': 9, 'color': 'Black', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_331489.jpg'},
    ],
}

// ----- DOM ELEMENTS -----
// filter hamburger
const filterGroup1 = document.querySelector('.filter-group1');
const filterGroup2 = document.querySelector('.filter-group2');
const hamburgerBtn = document.querySelector('.hoverby');

// category buttons
const bagsButton = document.querySelector('.bags-btn');
const shoesButton = document.querySelector('.shoes-btn');
const jewelryButton = document.querySelector('.jewelry-btn');
const scarfsButton = document.querySelector('.scarfs-btn');
const btnArray = [bagsButton, shoesButton, jewelryButton, scarfsButton];

// category and description
const categoryH2 = document.querySelector('.category h2');
const categoryPara = document.querySelector('.category p');

// load more button
const loadAll = document.querySelector('.load-more button');

// products
const products = document.querySelector('.products');

// products couter
const productsCount = document.querySelector('.counter')

// shopping cart element


// go to top button
const goTopBtn = document.querySelector('.go-top');
// ----- END OF DOM ELEMENTS -----

// ----- FUNCTIONS -----

// data product creator
function createProducts (product, endLoop) {
    let productSingular = ''
    if(product == 'dresses') {
        productSingular = 'dress'
    } else {
        productSingular = product
    }
    
    for (let i = 0; i < endLoop; i++) {
    const boxDiv = document.createElement('div')
    boxDiv.classList.add('box')
    const img = document.createElement('img')
    const descDiv = document.createElement('div')
    const itemDescDiv = document.createElement('div')
    itemDescDiv.classList.add('item-desc')
    const pStars = document.createElement('p')
    const pProductDesc = document.createElement('p')
    pProductDesc.classList.add('product-desc')
    const aBasket = document.createElement('a')
    const aInner = document.createElement('p')
    aInner.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>'
    aBasket.appendChild(aInner)
    aBasket.addEventListener('click', ()=> {
        alert('Your product is successfully added')
    })
    pStars.innerHTML = `${mockData[product][i].stars}/5 <i class="fa-solid fa-star"></i>`
    pStars.classList.add('stars')
    itemDescDiv.append(pStars, pProductDesc, aBasket)
    if(product == 'jewelry'){
        pProductDesc.textContent = `${mockData[product][i].material}  ${productSingular}`
    } else {
        pProductDesc.textContent = `${mockData[product][i].color}  ${productSingular}`
    }
    
    const hr = document.createElement('hr')
    const pPrice = document.createElement('p')
    pPrice.classList.add('price')
    if(mockData[product][i].discount != null) {
        pPrice.innerHTML = `${mockData[product][i].discount}$ &nbsp; <span>${mockData[product][i].price}$</span>` 
    } else {
        pPrice.textContent = `${mockData[product][i].price}$`
    }
    
    descDiv.classList.add('description')
    descDiv.append(itemDescDiv, hr, pPrice)
    img.src = mockData[product][i].img
    
    boxDiv.appendChild(img)
    boxDiv.appendChild(descDiv)
    
    products.appendChild(boxDiv)
    productsCount.textContent = `products ${endLoop}/${mockData[product].length}`
    }
}

// function that detecs scrolling down
function scrollFunction() {
    if(document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) {
        goTopBtn.style.display = 'block';
    } else {
        goTopBtn.style.display = 'none';
    }
}

// function that returns to top of the page
function goTop () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// initial page call
createProducts('dresses', 15);


// ----- END OF FUNCTIONS -----


// ----- ADDING EVENT LISTENERS/FUNCTIONALITY -----

// change the category and description when category is clicked
btnArray.forEach(btn => btn.addEventListener('click', () =>{
    categoryH2.textContent = btn.textContent
    categoryPara.textContent = `This category includes all ${btn.textContent.toLowerCase()} in The Boutique Shop.`
    loadAll.style.display = 'inline'
    products.innerHTML = ''
    createProducts(btn.textContent.toLowerCase(), 15);
}))



loadAll.addEventListener('click', () => {
    let currentProduct = categoryH2.textContent.toLowerCase();
    createProducts(currentProduct, mockData[currentProduct].length);
    loadAll.style.display = 'none';
})
// go to top button functionality
window.onscroll = function() {scrollFunction()}
goTopBtn.addEventListener('click', goTop)



// filter functionality on mobile 
hamburgerBtn.addEventListener('click', () => {
    if(hamburgerBtn.classList.contains('active')){
        filterGroup1.style.display = 'none';
        filterGroup2.style.display = 'none';
        hamburgerBtn.classList.remove('active');
    } else {
        hamburgerBtn.classList.add('active');
        filterGroup1.style.display = 'block';
        filterGroup2.style.display = 'block';
    }
   
})