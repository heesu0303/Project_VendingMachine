import ItemGenerator from "./components/itemGenerator.js";
import VendingMachine from "./components/vendingmachine.js";

const itemGenerator = new ItemGenerator();
const vendingmachine = new VendingMachine();

await itemGenerator.setup();
vendingmachine.setup();