const SOCIALITE = {
    redirect: 'http://localhost:8000', // redirectUri for socialite //
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
    link: '/api/product/',
    perPage: 5,
    name: 'Product',
}
const CART = {
    items: [],
    totalItems: 0,
    totalUniqueItems: 0,
    cartTotal: 0,
}
export { CATEGORIES_CONFIG, PRODUCT_CONFIG, CART, SOCIALITE }