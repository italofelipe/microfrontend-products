import { faker } from "@faker-js/faker";

const mount = (el: Element) => {
	let products = "";

	for (let i = 0; i < 5; i++) {
		const name = faker.commerce.productName();
		products += `<div>${name}</div>`;
	}

	el.innerHTML = products;
};

/* Context/Situation #1
 We are running this file in development in isolation
 We are using our local index.html file
 which DEFINETLY has an element with an id of dev-products
we want to immediately render our app into that element.
*/

if (process.env.NODE_ENV === "development") {
	const el = document.querySelector("#dev-products");

	// Assuming our container doesnt have an element with dev-products ID
	if (el) {
		// We are probably running in isolation
		mount(el);
	}
}

/* Context/Situation #2
We are running this fine in development or production through the container app
and there's no guarantee that an element with an id of 'dev-products' exists
In this case, We do not want to try to immediatly render the app.

*/

export { mount };
