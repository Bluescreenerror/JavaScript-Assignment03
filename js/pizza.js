const studentId = document.getElementById("student");
const currentTime = new Date();
function ETA(){
    return (currentTime.getMinutes() + 30 >= 60) ? `${currentTime.getHours() + 1}:${60 - currentTime.getMinutes()}` : `${currentTime.getHours()}:${currentTime.getMinutes() + 30}` 
}

// Validate the HTML pizza order form
function validateForm() {
    const name = document.getElementById('name').value;
    const size = document.getElementById('size').value;
    const crust = document.getElementById('crust').value;
    const toppings = document.querySelectorAll('input[name="toppings"]:checked');
    const deliveryAddress = document.getElementById('delivery').value;

    if (name === "" || size === "" || crust === "" || toppings.length === 0 || deliveryAddress === "") {
        alert("Please fill out all fields in the pizza order form.");
        return false;
    }
    else{
        return true;
    }

}

// Capture form values and create Pizza object
function captureOrder() {
    const name = document.getElementById('name').value;
    const size = document.getElementById('size').value;
    const crust = document.getElementById('crust').value;
    const toppings = [];
    document.querySelectorAll('input[name="toppings"]:checked').forEach(topping => {
        toppings.push(topping.value);
    });
    const deliveryAddress = document.getElementById('delivery').value;

    return new Pizza(name, size, crust, toppings, deliveryAddress);
}

// Class for Pizza object
class Pizza {
    constructor(name, size, crust, toppings, deliveryAddress) {
        this.name = name;
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.deliveryAddress = deliveryAddress;
    }

    getDescription() {
        return `The pizza that ${this.name} has ordered is ${this.size} sized with ${this.crust} crust containing the following toppings: ${this.toppings.join(", ")}. It will be delivered to ${this.deliveryAddress}. Esitmated time of arrival: ${ETA()}`;
    }
}

// Display pizza description on the HTML page
function displayPizzaDescription(pizza) {
    const pizzaDescription = document.createElement('p');
    pizzaDescription.textContent = pizza.getDescription();
    let pizzaForm = document.getElementById('pizzaForm')
    pizzaForm.appendChild(pizzaDescription);
}

const button = document.querySelector("button");

button.addEventListener("click", () => {
    if (validateForm()) {
        const pizza = captureOrder();
        displayPizzaDescription(pizza);
        studentId.textContent = "200556157"; 
    }
});
