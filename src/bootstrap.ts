import { faker } from "@faker-js/faker";
let products = "";

for (let i = 0; i < 5; i++) {
	const name = faker.commerce.productName();
	console.log();
	products += `<div>${name}</div>`;
}

document.querySelector("#dev-products")!.innerHTML = products;
console.log("Products mfe");