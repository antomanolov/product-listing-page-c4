// This is the data object from where I get all the info for the product page
const mockData = {
    'dresses':[
        {'brand': 'the boutique', 'price': 120, 'discount': 30, 'color': 'Green', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_342323.jpg'},
        {'brand': 'the boutique', 'price': 80, 'discount': null, 'color': 'Black', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_342267.jpg'},
        {'brand': 'the boutique', 'price': 90, 'discount': null, 'color': 'Black', 'material': 'Linen','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341919.jpg'},
        {'brand': 'the boutique', 'price': 110, 'discount': null, 'color': 'Purple', 'material': 'Silk','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_340892.jpg'},
        {'brand': 'the boutique', 'price': 200, 'discount': null, 'color': 'Red', 'material': 'Linen','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341907.jpg'},
        {'brand': 'the boutique', 'price': 210, 'discount': 40, 'color': 'Blue', 'material': 'Linen','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341503.jpg'},
        {'brand': 'the boutique', 'price': 93, 'discount': null, 'color': 'Green', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341258.jpg'},
        {'brand': 'the boutique', 'price': 340, 'discount': null, 'color': 'White', 'material': 'Silk','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341262.jpg'},
        {'brand': 'the boutique', 'price': 120, 'discount': null, 'color': 'Green', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_342323.jpg'},
        {'brand': 'the boutique', 'price': 80, 'discount': 40, 'color': 'Black', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_342267.jpg'},
        {'brand': 'the boutique', 'price': 90, 'discount': null, 'color': 'Black', 'material': 'Linen','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341919.jpg'},
        {'brand': 'the boutique', 'price': 110, 'discount': null, 'color': 'Purple', 'material': 'Silk','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_340892.jpg'},
        {'brand': 'the boutique', 'price': 200, 'discount': null, 'color': 'Red', 'material': 'Linen','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341907.jpg'},
        {'brand': 'the boutique', 'price': 210, 'discount': null, 'color': 'Blue', 'material': 'Linen','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341503.jpg'},
        {'brand': 'the boutique', 'price': 93, 'discount': null, 'color': 'Green', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341258.jpg'},
        {'brand': 'the boutique', 'price': 340, 'discount': 200, 'color': 'White', 'material': 'Silk','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341262.jpg'},
        {'brand': 'the boutique', 'price': 120, 'discount': null, 'color': 'Green', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_342323.jpg'},
        {'brand': 'the boutique', 'price': 80, 'discount': null, 'color': 'Black', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_342267.jpg'},
        {'brand': 'the boutique', 'price': 90, 'discount': null, 'color': 'Black', 'material': 'Linen','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341919.jpg'},
        {'brand': 'the boutique', 'price': 110, 'discount': null, 'color': 'Purple', 'material': 'Silk','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_340892.jpg'},
        {'brand': 'the boutique', 'price': 200, 'discount': 120, 'color': 'Red', 'material': 'Linen','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341907.jpg'},
        {'brand': 'the boutique', 'price': 210, 'discount': null, 'color': 'Blue', 'material': 'Linen','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341503.jpg'},
        {'brand': 'the boutique', 'price': 93, 'discount': null, 'color': 'Green', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341258.jpg'},
        {'brand': 'the boutique', 'price': 340, 'discount': 220, 'color': 'White', 'material': 'Silk','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341262.jpg'},
        {'brand': 'the boutique', 'price': 120, 'discount': null, 'color': 'Green', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_342323.jpg'},
        {'brand': 'the boutique', 'price': 80, 'discount': null, 'color': 'Black', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_342267.jpg'},
        {'brand': 'the boutique', 'price': 90, 'discount': null, 'color': 'Black', 'material': 'Linen','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341919.jpg'},
        {'brand': 'the boutique', 'price': 110, 'discount': null, 'color': 'Purple', 'material': 'Silk','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_340892.jpg'},
        {'brand': 'the boutique', 'price': 200, 'discount': 65, 'color': 'Red', 'material': 'Linen','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341907.jpg'},
        {'brand': 'the boutique', 'price': 210, 'discount': null, 'color': 'Blue', 'material': 'Linen','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341503.jpg'},
        {'brand': 'the boutique', 'price': 93, 'discount': null, 'color': 'Green', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341258.jpg'},
        {'brand': 'the boutique', 'price': 340, 'discount': null, 'color': 'White', 'material': 'Silk','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341262.jpg'},
        {'brand': 'the boutique', 'price': 120, 'discount': null, 'color': 'Green', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_342323.jpg'},
        {'brand': 'the boutique', 'price': 80, 'discount': null, 'color': 'Black', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_342267.jpg'},
        {'brand': 'the boutique', 'price': 90, 'discount': null, 'color': 'Black', 'material': 'Linen','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341919.jpg'},
        {'brand': 'the boutique', 'price': 110, 'discount': null, 'color': 'Purple', 'material': 'Silk','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_340892.jpg'},
        {'brand': 'the boutique', 'price': 200, 'discount': 100, 'color': 'Red', 'material': 'Linen','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341907.jpg'},
        {'brand': 'the boutique', 'price': 210, 'discount': 200, 'color': 'Blue', 'material': 'Linen','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341503.jpg'},
        {'brand': 'the boutique', 'price': 93, 'discount': null, 'color': 'Green', 'material': 'Cotton','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341258.jpg'},
        {'brand': 'the boutique', 'price': 340, 'discount': 120, 'color': 'White', 'material': 'Silk','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341262.jpg'},
        {'brand': 'the boutique', 'price': 340, 'discount': null, 'color': 'White', 'material': 'Silk','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341262.jpg'},
        {'brand': 'the boutique', 'price': 340, 'discount': null, 'color': 'White', 'material': 'Silk','img': 'https://www.ivet.bg/userfiles/productthumbs/thumb_341262.jpg'},
       
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
    'bags':[
        {'brand': 'the boutique', 'price': 110, 'discount': 10, 'color': 'Black', 'material': 'Leather','img': 'https://www.ivet.bg/product/103461/damska-chanta-famanda.html'},
        {'brand': 'the boutique', 'price': 230, 'discount': 23, 'color': 'Green', 'material': 'Leather','img': 'https://www.ivet.bg/product/103448/damska-chanta-meferda-green.html'},
        {'brand': 'the boutique', 'price': 410, 'discount': 41, 'color': 'Purple', 'material': 'Leather','img': 'https://www.ivet.bg/product/103449/damska-chanta-meferda-fuchsia.html'},
        {'brand': 'the boutique', 'price': 110, 'discount': 11, 'color': 'Black', 'material': 'Leather','img': 'https://www.ivet.bg/product/103450/damska-chanta-meferda-black.html'},
        {'brand': 'the boutique', 'price': 440, 'discount': 44, 'color': 'White', 'material': 'Leather','img': 'https://www.ivet.bg/product/103273/damska-chanta-fridala-beige.html'},
        {'brand': 'the boutique', 'price': 210, 'discount': 21, 'color': 'White', 'material': 'Cotton','img': 'https://www.ivet.bg/product/102035/plazhna-chanta-banzeka.html'},
        {'brand': 'the boutique', 'price': 110, 'discount': 11, 'color': 'Red', 'material': 'Cotton','img': 'https://www.ivet.bg/product/101861/plazhna-chanta-arnizia.html'},
        {'brand': 'the boutique', 'price': 90, 'discount': 9, 'color': 'Green', 'material': '','img': 'https://www.ivet.bg/product/101001/damska-chanta-sensilia-green.html'},
        {'brand': 'the boutique', 'price': 110, 'discount': 11, 'color': 'Black', 'material': 'Leather','img': 'https://www.ivet.bg/product/103461/damska-chanta-famanda.html'},
        {'brand': 'the boutique', 'price': 230, 'discount': 23, 'color': 'Green', 'material': 'Leather','img': 'https://www.ivet.bg/product/103448/damska-chanta-meferda-green.html'},
        {'brand': 'the boutique', 'price': 410, 'discount': 41, 'color': 'Purple', 'material': 'Leather','img': 'https://www.ivet.bg/product/103449/damska-chanta-meferda-fuchsia.html'},
        {'brand': 'the boutique', 'price': 110, 'discount': 11, 'color': 'Black', 'material': 'Leather','img': 'https://www.ivet.bg/product/103450/damska-chanta-meferda-black.html'},
        {'brand': 'the boutique', 'price': 440, 'discount': 44, 'color': 'White', 'material': 'Leather','img': 'https://www.ivet.bg/product/103273/damska-chanta-fridala-beige.html'},
        {'brand': 'the boutique', 'price': 210, 'discount': 21, 'color': 'White', 'material': 'Cotton','img': 'https://www.ivet.bg/product/102035/plazhna-chanta-banzeka.html'},
        {'brand': 'the boutique', 'price': 110, 'discount': 11, 'color': 'Red', 'material': 'Cotton','img': 'https://www.ivet.bg/product/101861/plazhna-chanta-arnizia.html'},
        {'brand': 'the boutique', 'price': 90, 'discount': 9, 'color': 'Green', 'material': '','img': 'https://www.ivet.bg/product/101001/damska-chanta-sensilia-green.html'},
        {'brand': 'the boutique', 'price': 110, 'discount': 11, 'color': 'Black', 'material': 'Leather','img': 'https://www.ivet.bg/product/103461/damska-chanta-famanda.html'},
        {'brand': 'the boutique', 'price': 230, 'discount': 23, 'color': 'Green', 'material': 'Leather','img': 'https://www.ivet.bg/product/103448/damska-chanta-meferda-green.html'},
        {'brand': 'the boutique', 'price': 410, 'discount': 41, 'color': 'Purple', 'material': 'Leather','img': 'https://www.ivet.bg/product/103449/damska-chanta-meferda-fuchsia.html'},
        {'brand': 'the boutique', 'price': 110, 'discount': 11, 'color': 'Black', 'material': 'Leather','img': 'https://www.ivet.bg/product/103450/damska-chanta-meferda-black.html'},
        {'brand': 'the boutique', 'price': 440, 'discount': 44, 'color': 'White', 'material': 'Leather','img': 'https://www.ivet.bg/product/103273/damska-chanta-fridala-beige.html'},
        {'brand': 'the boutique', 'price': 210, 'discount': 21, 'color': 'White', 'material': 'Cotton','img': 'https://www.ivet.bg/product/102035/plazhna-chanta-banzeka.html'},
        {'brand': 'the boutique', 'price': 110, 'discount': 11, 'color': 'Red', 'material': 'Cotton','img': 'https://www.ivet.bg/product/101861/plazhna-chanta-arnizia.html'},
        {'brand': 'the boutique', 'price': 90, 'discount': 9, 'color': 'Green', 'material': '','img': 'https://www.ivet.bg/product/101001/damska-chanta-sensilia-green.html'},
        {'brand': 'the boutique', 'price': 110, 'discount': 11, 'color': 'Black', 'material': 'Leather','img': 'https://www.ivet.bg/product/103461/damska-chanta-famanda.html'},
        {'brand': 'the boutique', 'price': 230, 'discount': 23, 'color': 'Green', 'material': 'Leather','img': 'https://www.ivet.bg/product/103448/damska-chanta-meferda-green.html'},
        {'brand': 'the boutique', 'price': 410, 'discount': 41, 'color': 'Purple', 'material': 'Leather','img': 'https://www.ivet.bg/product/103449/damska-chanta-meferda-fuchsia.html'},
        {'brand': 'the boutique', 'price': 110, 'discount': 11, 'color': 'Black', 'material': 'Leather','img': 'https://www.ivet.bg/product/103450/damska-chanta-meferda-black.html'},
        {'brand': 'the boutique', 'price': 440, 'discount': 44, 'color': 'White', 'material': 'Leather','img': 'https://www.ivet.bg/product/103273/damska-chanta-fridala-beige.html'},
        {'brand': 'the boutique', 'price': 210, 'discount': 21, 'color': 'White', 'material': 'Cotton','img': 'https://www.ivet.bg/product/102035/plazhna-chanta-banzeka.html'},
        {'brand': 'the boutique', 'price': 110, 'discount': 11, 'color': 'Red', 'material': 'Cotton','img': 'https://www.ivet.bg/product/101861/plazhna-chanta-arnizia.html'},
        {'brand': 'the boutique', 'price': 90, 'discount': 9, 'color': 'Green', 'material': '','img': 'https://www.ivet.bg/product/101001/damska-chanta-sensilia-green.html'},
        {'brand': 'the boutique', 'price': 110, 'discount': 11, 'color': 'Black', 'material': 'Leather','img': 'https://www.ivet.bg/product/103461/damska-chanta-famanda.html'},
        {'brand': 'the boutique', 'price': 230, 'discount': 23, 'color': 'Green', 'material': 'Leather','img': 'https://www.ivet.bg/product/103448/damska-chanta-meferda-green.html'},
        {'brand': 'the boutique', 'price': 410, 'discount': 41, 'color': 'Purple', 'material': 'Leather','img': 'https://www.ivet.bg/product/103449/damska-chanta-meferda-fuchsia.html'},
        {'brand': 'the boutique', 'price': 110, 'discount': 11, 'color': 'Black', 'material': 'Leather','img': 'https://www.ivet.bg/product/103450/damska-chanta-meferda-black.html'},
        {'brand': 'the boutique', 'price': 440, 'discount': 44, 'color': 'White', 'material': 'Leather','img': 'https://www.ivet.bg/product/103273/damska-chanta-fridala-beige.html'},
        {'brand': 'the boutique', 'price': 210, 'discount': 21, 'color': 'White', 'material': 'Cotton','img': 'https://www.ivet.bg/product/102035/plazhna-chanta-banzeka.html'},
        {'brand': 'the boutique', 'price': 110, 'discount': 11, 'color': 'Red', 'material': 'Cotton','img': 'https://www.ivet.bg/product/101861/plazhna-chanta-arnizia.html'},
        {'brand': 'the boutique', 'price': 90, 'discount': 9, 'color': 'Green', 'material': '','img': 'https://www.ivet.bg/product/101001/damska-chanta-sensilia-green.html'},
        {'brand': 'the boutique', 'price': 110, 'discount': 11, 'color': 'Red', 'material': 'Cotton','img': 'https://www.ivet.bg/product/101861/plazhna-chanta-arnizia.html'},
        {'brand': 'the boutique', 'price': 90, 'discount': 9, 'color': 'Green', 'material': '','img': 'https://www.ivet.bg/product/101001/damska-chanta-sensilia-green.html'},
    ],
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
for (let i = 0; i < 21; i++) {
    const boxDiv = document.createElement('div')
boxDiv.classList.add('box')
const img = document.createElement('img')
const descDiv = document.createElement('div')
const pItemDesc = document.createElement('p')
pItemDesc.classList.add('item-desc')
pItemDesc.textContent = `${mockData.shoes[i].color} ${mockData.shoes[i].brand.toUpperCase()} shoes`
const hr = document.createElement('hr')
const pPrice = document.createElement('p')
pPrice.classList.add('price')
if(mockData.shoes[i].discount != null) {
    pPrice.innerHTML = `${mockData.shoes[i].discount}$ &nbsp; <span>${mockData.shoes[i].price}$</span>` 
} else {
    pPrice.textContent = `${mockData.shoes[i].price}$`
}

descDiv.classList.add('description')
descDiv.append(pItemDesc, hr, pPrice)
img.src = mockData.shoes[i].img

boxDiv.appendChild(img)
boxDiv.appendChild(descDiv)

products.appendChild(boxDiv)
}



