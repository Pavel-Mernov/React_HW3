export const CategoryOptions = ['Обувь', 'Верхняя одежда', 'Брюки'] as const 

export type ProductCategory = typeof CategoryOptions[number]