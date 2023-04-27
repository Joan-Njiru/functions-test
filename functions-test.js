//Create an array containing the names of all items in the inventory.
let groceries=["onions","tomatoes","garlic","capsicum","ginger","avocado"]

//Create a separate array with the corresponding stock quantities of each item.
let quantities=[12,24,16,20,14,24]


//Write a function to add a new item to the inventory, updating both arrays.
function addItem(item,quant){
  
   groceries.push(item)
   quantities.push(quant)
   console.log(groceries)
   console.log(quantities);
}
addItem("Courgettes",8)

//Write a function to update the stock quantity of an existing item.
function updateStock(item1,quant1){
   let check=groceries.indexOf(item1)
   if(check=== -1){
      console.log("Item not found");
     
   }
   
      
      quantities.push(quant1)
      console.log(item1+ " has been updated with " + quant1 + " as it's new quantity");
   }

updateStock("Groceries",9)


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

function lowestStock(){
let min=Math.min(...quantities);
let index=quantities.indexOf(min)
console.log(groceries[index]); 
}
lowestStock()





