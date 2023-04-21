//Create an array containing the names of all items in the inventory.
let groceries=["onions","tomatoes","garlic","capsicum","ginger","avocado"]

//Create a separate array with the corresponding stock quantities of each item.
let quantities=[12,24,16,20,14,24]
let addGroceries={
   "potatoes":32,
}

//Write a function to add a new item to the inventory, updating both arrays.
function addItem(obj){
   groceries.push(Object.keys(obj))
   quantities.push(Object.values(obj))
   console.log(groceries)
   console.log(quantities);
}
console.log(addItem(addGroceries));

//Write a function to update the stock quantity of an existing item.
function updateStock(newValue){
for(q of quantities){
  console.log(q+=newValue)
}
}


//Write a function to calculate the total number of items in the inventory.

function totalItems(){
   let sum=0
for(q of quantities){
   sum+=q;
}
return sum;
}
console.log(totalItems(quantities));

//Write a function to find the item with the lowest stock quantity.

function lowestStock(quantities){
let min=Math.min(...quantities);
console.log(min); 
}
lowestStock()





