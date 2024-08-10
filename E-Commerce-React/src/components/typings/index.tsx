

export interface IProduct {
    id: number,
    productName: string,
    price: number,
    imageSrc:string,
    rate: number,
    stars: number,
    isOnSale: true,
    salePercent: number
    quantity?:number
}