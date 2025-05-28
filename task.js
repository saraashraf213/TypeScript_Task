//Function log product
function logProduct(product) {
    console.log("ID: ".concat(product.id));
    console.log("Name: ".concat(product.name));
    console.log("Price: ".concat(product.price));
    console.log("In Stock: ".concat(product.instoke));
}
//A generic function wrapValue<T>(value: T): T[] that returns any value
//in an array.
function wrapValue(value) {
    return [value];
}
//Bonus
function ApiResult(result) {
    if (result.success) {
        logProduct(result.data);
    }
    else {
        console.error("Error: ".concat(result.message));
    }
}
