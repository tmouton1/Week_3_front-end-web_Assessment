

const food = ['St. Anselm', 'Oku DC', 'Toastique', 'The Fancy Radish']

const random = Math.floor(Math.random() *food.length);
console.log(random, food[random]);


document.getElementById("randomRestaurantButton").addEventListener("click", function() {
    alert(food[random]);
  });

  //page must be refreshed for new random restaurant so pop up. Is there a way around this?