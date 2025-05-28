// product interface
interface Product {
    id : number;
    name: string;
    price:number;
    instoke: boolean;
}
//Function log product
function logProduct(product: Product): void {
    console.log(`ID: ${product.id}`);
    console.log(`Name: ${product.name}`);
    console.log(`Price: ${product.price}`);
    console.log(`In Stock: ${product.instoke}`);
}
// A union type ProductOrError = Product | string
type ProductOrError = Product | string;

//A generic function wrapValue<T>(value: T): T[] that returns any value
//in an array.

function wrapValue<T>(value: T): T[] {
    return [value];
}
//A generic interface ApiResult<T> with: data: T, success: boolean,
//and message: string

interface ApiResult<T> {
    data: T;
    success: boolean;
    message: string;
}

//Bonus
function ApiResult<T>(result: ApiResult<Product>):void{
    if(result.success) {
       logProduct(result.data);
    }
    else {
        console.error(`Error: ${result.message}`);}
}