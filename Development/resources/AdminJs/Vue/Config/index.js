//category

const CATEGORY_CONFIG = {
    link: '/api/category/',
    perPage: 5,
    saveWith: 'categories',
    name: 'Category'
}
const USER_CONFIG = {
    link: '/api/user/',
    perPage: "5",
    saveWith: 'users',
    name: 'User',
}
const SUB_CATEGORY_CONFIG = {
    link: '/api/sub-category/',
    perPage: "5",
    saveWith: 'subCategories',
    name: 'SubCategory',
}
const PRODUCT_CONFIG = {
    link: '/api/product/',
    perPage: "5",
    saveWith: 'products',
    name: 'Product',
}

export {
    PRODUCT_CONFIG, SUB_CATEGORY_CONFIG, USER_CONFIG, CATEGORY_CONFIG
}