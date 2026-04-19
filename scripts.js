/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

/* ALL SOURCES:

https://www.w3schools.com/jsref/met_console_log.asp
https://www.w3schools.com/js/js_array_iteration.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects
https://stackoverflow.com/questions/58404118/how-do-i-store-images-in-an-array-for-javascript
https://www.w3schools.com/jsref/jsref_foreach.asp
https://stackoverflow.com/questions/9329446/loop-for-each-over-an-array-in-javascript

*/


// print out all data; making sure dataset is imported properly!!
console.log(AnimalDataset);

// array of all animals
let totalAnimals = [];

// all animal images
var animalImages = {
  Herbivore: "honda.png",
  Carnivore: "carnivore.jpg",
  Omnivore: "omnivore.jpg",
  Insectivore: "insectivore.jpg",
  Error: "error.jpg"
};

// show card of animal
function showCards()
{
  // formatting/styling (REMEMBER TO CHANGE!!)
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  // add all animals into an array (so we can actually edit list to remove cards if needed)
  AnimalDataset.forEach(animal => totalAnimals.push(animal));

  for (let i = 0; i < totalAnimals.length; i++)
  {
    let image = animalImages[totalAnimals[i].Diet];
    let name = totalAnimals[i].Animal;
    let height = totalAnimals[i]["Height (cm)"];
    let weight = totalAnimals[i]["Weight (kg)"];
    let color = totalAnimals[i].Color;
    let lifespan = totalAnimals[i]["Lifespan (years)"];
    let diet = totalAnimals[i].Diet;

    // more formatting/styling
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, name, image, height, weight, color, lifespan, diet); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }

}

function editCardContent(card, newTitle, newImageURL, Animalheight, Animalweight, Animalcolor, Animallifespan, AnimalDiet) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  const cardHeight = card.querySelector("li1");
  cardHeight.textContent = "Height (cm): " + Animalheight;
  const cardWeight = card.querySelector("li2");
  cardWeight.textContent = "Weight (kg): " + Animalweight;
  const cardColor = card.querySelector("li3");
  cardColor.textContent = "Color: " + Animalcolor;
  const cardLifespan = card.querySelector("li4");
  cardLifespan.textContent = "Lifespan (Years): " + Animallifespan;
  const cardDiet = card.querySelector("li5");
  cardDiet.textContent = "Diet: " + AnimalDiet;
  
  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!",
  );
}

function removeLastCard() {
  totalAnimals.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}
