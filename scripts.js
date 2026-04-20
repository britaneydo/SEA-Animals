/*

Data Catalog Project Starter Code - SEA Stage 2

ALL SOURCES USED:

https://www.w3schools.com/jsref/met_console_log.asp
https://www.w3schools.com/js/js_array_iteration.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects
https://stackoverflow.com/questions/58404118/how-do-i-store-images-in-an-array-for-javascript
https://www.w3schools.com/jsref/jsref_foreach.asp
https://stackoverflow.com/questions/9329446/loop-for-each-over-an-array-in-javascript
https://www.w3schools.com/howto/howto_js_dropdown.asp
https://stackoverflow.com/questions/43671008/html-javascript-calling-a-function-with-drop-down-options
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
https://www.w3schools.com/jsref/jsref_match.asp
https://www.freecodecamp.org/news/javascript-regex-match-example-how-to-use-the-js-replace-method-on-a-string/
https://stackoverflow.com/questions/61739935/why-does-sorting-copied-array-sorts-original-array?utm_source=chatgpt.com

*/

// print out all data; making sure dataset is imported properly!!
console.log(AnimalDataset);

// array of all animals
let totalAnimals = [];

// add all animals into an array (so we can actually edit list to remove cards if needed)
AnimalDataset.forEach(animal => totalAnimals.push(animal));

// create copy for filtering
let filteredArray = [];

// all animal images
var animalImages = {
  Herbivore: "./images/herbivore.png",
  Carnivore: "./images/carnivore.png",
  Omnivore: "./images/omnivore.png",
  Insectivore: "./images/insectivore.png"
};

// show card of animal
function showCards(array)
{
  // formatting/styling
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < array.length; i++)
  {
    let image = animalImages[array[i].Diet];
    let name = array[i].Animal;
    let height = array[i]["Height (cm)"];
    let weight = array[i]["Weight (kg)"];
    let color = array[i].Color;
    let lifespan = array[i]["Lifespan (years)"];
    let diet = array[i].Diet;
    let habitat = array[i].Habitat

    // more formatting/styling
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, name, image, height, weight, color, lifespan, diet, habitat); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }

}

function editCardContent(card, newTitle, newImageURL, Animalheight, Animalweight, 
  Animalcolor, Animallifespan, AnimalDiet, AnimalHabitat) 
{
  card.style.display = "block";

  // this is ONLY to change the colors of the cards (based on animal diet)
  card.classList.remove("herbivore", "carnivore", "omnivore", "insectivore");
  card.classList.add(AnimalDiet.toLowerCase());

  // title of card
  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  // displays image
  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  // displaying all details to card
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
  const cardHabitat = card.querySelector("li6");
  cardHabitat.textContent = "Habitat: " + AnimalHabitat;

  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards(totalAnimals));

// for sorting
// https://stackoverflow.com/questions/43671008/html-javascript-calling-a-function-with-drop-down-options
var sort = document.getElementById("sort_chart");
sort.addEventListener("change", Sort);

// sort depending on user option. uses bubblesort
function Sort(event) 
{
  if (sort.value == '1') 
  {
    filteredArray = bubbleSort([...totalAnimals], "Weight (kg)");
  } 
  else if (sort.value == '2') 
  {
    filteredArray = bubbleSort([...totalAnimals], "Height (cm)");
  } 
  else if (sort.value == '3') 
  {
    filteredArray = bubbleSort([...totalAnimals], "Lifespan (years)");
  }

  showCards(filteredArray);

}

// pops last card in array then calls showCards to display all animals
function removeLastCard() 
{
  totalAnimals.pop(); // Remove last item in totalAnimals array
  showCards(totalAnimals); // Call showCards again to refresh
}

// adds card to end of array, calls showCards to display all animals
function addCard()
{
  // error handling
  if (ExtraAnimalDataset.length == 0)
  {
    alert("There are no more animals to add!");
    return;
  }

  let index = ExtraAnimalDataset.length - 1;

  totalAnimals.push(ExtraAnimalDataset[index]);
  alert("Animal Added: " + ExtraAnimalDataset[index].Animal);
  ExtraAnimalDataset.pop();
  showCards(totalAnimals);
}

// for filtering
var menu = document.getElementById("filter_chart");
menu.addEventListener("change", generateData);

function generateData(event) 
{

  filteredArray = [];

  if (menu.value == '1') 
  {
    for (let i = 0; i < totalAnimals.length; i++)
    {
      if (totalAnimals[i].Diet == "Herbivore")
      {
        filteredArray.push(totalAnimals[i]);
      }
    }
  } 
  else if (menu.value == '2') 
  {
    for (let i = 0; i < totalAnimals.length; i++)
    {
      if (totalAnimals[i].Diet == "Carnivore")
      {
        filteredArray.push(totalAnimals[i]);
      }
    }
  } 
  else if (menu.value == '3') 
  {
    for (let i = 0; i < totalAnimals.length; i++)
    {
      if (totalAnimals[i].Diet == "Omnivore")
      {
        filteredArray.push(totalAnimals[i]);
      }
    }
  }
  else if (menu.value == '4')
  {
    for (let i = 0; i < totalAnimals.length; i++)
    {
      if (totalAnimals[i].Diet == "Insectivore")
      {
        filteredArray.push(totalAnimals[i]);
      }
    }
  }

  showCards(filteredArray);

}

// turn weight into string
function turnNum(anyString)
{
  // regular expression to accept decimals as well
  let thisNum = anyString.match(/\d+(\.\d+)?/);

  // if not a number, make weight 0 (first of list)
  if (!thisNum)
  {
    return 0;
  }

  // return weight as an int
  return Number(thisNum[0]);
}

// bubble sort for sorting animals by height/weight/lifespan
// definitely not the fastest but will take up the least amt of space. Mergesort would be quicker
// O(n^2)
function bubbleSort(arr, type)
{
  for (let i = 0; i < arr.length; i++)
  {
    for (let j = 0; j < arr.length-1; j++)
    {
      let temp1 = turnNum(arr[j][type]);
      let temp2 = turnNum(arr[j+1][type]);

      if (temp1 < temp2)
      {
        // swap places for sorting
        let temp3 = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp3;
      }
    }
  }
  return arr;
}




