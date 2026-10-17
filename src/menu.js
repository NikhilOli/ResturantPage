

const menuItems = [
    {
        name: "Chicken Momo",
        description: "Steamed dumplings served with spicy achar.",
        price: 220,
    },
    {
        name: "Veg Chowmein",
        description: "Stir-fried noodles with fresh vegetables.",
        price: 180,
    },
    {
        name: "Chicken Burger",
        description: "Grilled chicken with lettuce, tomato, and cheese.",
        price: 350,
    },
    {
        name: "Margherita Pizza",
        description: "Classic pizza with mozzarella and fresh basil.",
        price: 550,
    },
    {
        name: "Iced Latte",
        description: "Chilled espresso with creamy milk.",
        price: 200,
    },
];

export function loadMenuPage() {
const container = document.querySelector("#content");

const menuTitle = document.createElement("h1");
menuTitle.textContent = "Our Menu";
container.appendChild(menuTitle);

const menuDetails = document.createElement("p");
menuDetails.textContent = "Discover our delicious dishes.";
container.appendChild(menuDetails);

menuItems.forEach((menu) => {
    const item = document.createElement("div");
    item.classList.add("menu-item")
    const itemName = document.createElement("h2");
    itemName.textContent = menu.name
    const itemPrice = document.createElement("p"); 
    itemPrice.textContent = `Rs. ${menu.price}`;
    const itemDesc = document.createElement("p"); 
    itemDesc.textContent = menu.description
    item.append(itemName, itemDesc, itemPrice)
    container.appendChild(item);
}) 

}