const SOCIALITE = {
    redirect: 'https://neik-store.herokuapp.com', // redirectUri for socialite //
    googleClientId: '570872392783-9d2vuru01velvi9l3kor4vqell7petom.apps.googleusercontent.com',
    facebookClientId: '628286444903129',
}
const CATEGORIES_CONFIG = {
    link: '/api/category/all',
    // perPage: 5,
    saveWith: 'categories',
    name: 'Category'
}
const PRODUCT_CONFIG = {
    link: '/api/product/get',
    perPage: 10,
    name: 'Product',
}
const DISCOUNT_PRODUCT_CONFIG = {
    link: '/api/product/discount/get',
    perPage: 10,
    name: 'DiscountProduct',
}
const SEARCH_PRODUCT_CONFIG = {
    link: '/api/product/search',
    perPage: 10,
    name: 'SearchProduct',
}
const SHOW_PRODUCT_CONFIG = {
    link: '/api/product/info/',
    name: 'ShowProduct',
}
const UPDATE_USER_CONFIG = {
    link: '/api/user/update/',
    name: 'UpdateUser',
}
const CART = {
    items: [],
    totalItems: 0,
    totalUniqueItems: 0,
    cartTotal: 0,
    link: '/api/cart/'
}
const REVIEW = {
    link: '/api/review/',
    perPage: 10,
    name: 'Review',
}
export { CATEGORIES_CONFIG, PRODUCT_CONFIG, CART, SOCIALITE, DISCOUNT_PRODUCT_CONFIG, SEARCH_PRODUCT_CONFIG, SHOW_PRODUCT_CONFIG, UPDATE_USER_CONFIG,REVIEW }