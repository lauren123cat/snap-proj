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

// my dataset! (array of objects)
// changed let to const because i don't want to be able to accidentally change my skins values
const skins = [
    {
        name: "Hello Kitty",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2020/12/29/hello-kitty-16194264.png?v608ng",
        species: "Animal",
        color: ["White", "Blue", "Yellow"],
        franchise: "Sanrio",
        // tags: ["cute", "cat"]
    },
    {
        name: "My Melody",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2023/11/29/my-melody---sanrio--64x--22148798.png?v626",
        species: "Animal",
        color: "Pink",
        franchise: "Sanrio",
        // tags: ["pink", "cute", "bunny"]
    },
    {
        name: "Larry David",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2021/02/20/larry-david-16840309.png?v627",
        species: "Human",
        color: ["Blue", "Brown", "Gray"],
        franchise: "None",
    },
    {
        name: "Steve",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2023/11/12/av-steve-22110502.png?v626",
        species: "Human",
        color: ["Blue", "Green", "Brown"],
        franchise: "Minecraft",
        // tags: ["steve", "human", "default"]
    },
    {
        name: "Arch Linux",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2022/10/08/arch-linux-tux-mascot-20929926.png?v626",
        species: "Animal",
        color: ["Black", "White", "Yellow"],
        franchise: "None",
    },
    {
        name: "Makima",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2024/03/09/--makima---chainsaw-man---22390645.png?v626",
        species: "Devil",
        color: ["Black", "White", "Red"],
        franchise: "Chainsaw Man",
    },
    {
        name: "Rilakkuma",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2023/03/16/rilakkuma-21427959.png?v626",
        species: "Animal",
        color: "Brown",
        franchise: "Sanrio",
    },
    {
        name: "Charizard",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2013/07/22/skin_20130722114920169573both.png?v612",
        species: "Other", 
        color: "Orange",
        franchise: "Pokemon",
    },
    {
        name: "Tuxedo Sam",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2021/06/16/-----*-tuxedo-sam--*--------sanrio-series-18134457.png?v609",
        species: "Animal",
        color: ["Blue", "White"],
        franchise: "Sanrio",
    },
    {
        name: "Squirtle",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2012/07/02/skin_2012070215134676557both.png?v626",
        species: "Other",
        color: ["Blue", "Brown"],
        franchise: "Pokemon",
    },
    {
        name: "Strawberry Cow",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2023/05/27/strawberry-cow-21637481.png?v609",
        species: "Animal",
        color: "Pink",
        franchise: "None",
    },
    {
        name: "Kuromi",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2023/12/30/kuromi-22220681.png?v626",
        species: "Animal",
        color: ["Black", "Pink"],
        franchise: "Sanrio",
    },
    {
        name: "Gym Bro Hello Kitty",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2023/11/29/buff-hello-kitty-22146928.png?v626",
        species: "Animal",
        color: ["Pink", "White"],
        franchise: "Sanrio",
    },
    {
        name: "Denji",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2024/04/04/denji-22452384.png?v626",
        species: ["Human", "Devil"],
        color: ["Black", "White", "Yellow"],
        franchise: "Chainsaw Man",
    },
    {
        name: "Pochita",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2023/05/23/pochita--chainsaw-man--21625235.png?v626",
        species: "Devil",
        color: "Orange",
        franchise: "Chainsaw Man",
    },
    {
        name: "Cinnamoroll",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2024/01/14/--cinnamoroll---22258550.png?v626",
        species: "Animal",
        color: ["White", "Blue"],
        franchise: "Sanrio",
    },
    {
        name: "Hotdog",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2014/06/04/skin_201406042257407526both.png?v626",
        species: "Other",
        color: ["Brown", "Red", "Yellow"],
        franchise: "None",
    },
    {
        name: "Ryuk",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2023/04/19/ryuk---death-note-21529161.png?v626",
        species: "Devil",
        color: ["Black", "White"],
        franchise: "Death Note",
    },    
    {
        name: "VDay Hello Kitty",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2021/09/01/hello-kitty-18819118.png?v608",
        species: "Animal",
        color: ["Red", "White"],
        franchise: "Sanrio",
    },
    {
        name: "Ubuntu",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2022/12/05/ubuntu-mask-21114828.png?v626",
        species: "Other",
        color: ["Orange", "White"],
        franchise: "None",
    },
    {
        name: "Pompompurin",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2023/05/31/pompompurin-21648763.png?v626",
        species: "Animal",
        color: ["Yellow", "Brown"],
        franchise: "Sanrio",
    },
    {
        name: "Asa Mitaka",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2024/03/13/asa-mikata-22399897.png?v626",
        species: "Human",
        color: ["Black", "White"],
        franchise: "Chainsaw Man",
    },
    {
        name: "TNT",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2024/04/06/tnt-man-22455153.png?v626",
        species: "Other",
        color: ["Red", "White"],
        franchise: "Minecraft",
    },
    {
        name: "Gym Bro Kuromi",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2023/12/22/buff-kuromi-22199974.png?v626",
        species: "Animal",
        color: ["Pink", "Black", "White"],
        franchise: "Sanrio",
    },
    {
        name: "Misa Amane",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2021/01/19/misa-amane-16420898.png?v626",
        species: "Human",
        color: ["Yellow", "Black"],
        franchise: "Death Note",
    },
    {
        name: "Spiderman Hello Kitty",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2024/03/31/kitty-spider-22442593.png?v626",
        species: "Animal",
        color: ["Blue", "Red", "White"],
        franchise: "Sanrio",
    },
    {
        name: "Patrick Star",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2023/12/06/patrick-22164445.png?v627",
        species: "Animal",
        color: ["Pink", "Green", "Brown"],
        franchise: "Spongebob",
    },
    {
        name: "Batman",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2024/03/24/hello-kitty-batman-22423427.png?v626",
        species: ["Human", "Other"],
        color: ["Black", "Yellow", "Gray"],
        franchise: "None",
    },
    {
        name: "Keroppi",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2023/09/25/keroppi----3-21998965.png?v626",
        species: "Animal",
        color: ["Green", "Red"],
        franchise: "Sanrio",
    },
    {
        name: "Pink Sheep",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2024/04/05/my-pink-sheep-22454210.png?v626",
        species: "Animal",
        color: "Pink",
        franchise: "Minecraft",
    },
    {
        name: "Strawberry Pochacco",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2023/07/17/pochacco-strawberry-21801011.png?v626",
        species: "Animal",
        color: ["Pink", "White"],
        franchise: "Sanrio",
    },
    {
        name: "Clownfish",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2024/03/30/marlin-the-clownfish-22439073.png?v626",
        species: "Animal",
        color: ["Orange", "White"],
        franchise: "None",
    },
    {
        name: "Badtz Maru",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2023/07/12/bad-badtz-maru-21786312.png?v626",
        species: "Animal",
        color: ["Black", "Yellow", "White"],
        franchise: "Sanrio",
    },
    {
        name: "Spongebob Squarepants",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2023/10/18/spongebob-22053198.png?v627",
        species: "Other",
        color: ["Yellow", "Brown", "Red", "White"],
        franchise: "Spongebob",
    },
    {
        name: "Chainsaw Man",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2023/10/01/denji--blood----chainsaw-man--dont-repload--22014150.png?v626",
        species: "Devil",
        color: ["Black", "White", "Orange"],
        franchise: "Chainsaw Man",
    },    
    {
        name: "Wugtrio",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2024/04/02/wugtrio-22448134.png?v626",
        species: "Other",
        color: ["Red", "Gray"],
        franchise: "Pokemon",
    },
    {
        name: "L",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2023/07/19/death-note---l-lawliet---21808899.png?v626",
        species: "Human",
        color: ["Black", "White", "Gray"],
        franchise: "Death Note",
    },    
    {
        name: "Swimming Monkey",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2023/03/11/monkey-swims-21410015.png?v626",
        species: "Animal",
        color: ["Brown", "Pink"],
        franchise: "None",
    },
    {
        name: "Lava Bucket",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2014/10/24/skin_2014102415035582205both.png?v626",
        species: "Other",
        color: ["Gray", "Red"],
        franchise: "Minecraft",
    },
    {
        name: "Jonah Hill (Superbad)",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2021/06/11/jonah-hill--superbad-18089748.png?v627",
        species: "Human",
        color: ["Blue", "Brown", "White"],
        franchise: "None",
    },
    {
        name: "Squidward Tentacles",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2023/11/26/squidward--he---s-cool-22140475.png?v627",
        species: "Animal",
        color: ["Blue", "Brown"],
        franchise: "Spongebob",
    },
    {
        name: "Mr Krabs",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2023/06/02/mr-krabs-21654024.png?v627",
        species: "Animal",
        color: ["Blue", "Purple", "Red"],
        franchise: "Spongebob",
    },
    {
        name: "Teddy Bear",
        imageUrl: "https://www.minecraftskins.com/uploads/preview-skins/2024/01/13/-*--ted-e--bear-22255364.png?v627",
        species: "Animal",
        color: ["Brown", "Red"],
        franchise: "None",
    },
];

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", () => {
    showCards(skins);
});

// showCards: displays the minecraft skin cards on the webpage 
function showCards(skinsToShow = skins) 
{
    const cardContainer = document.getElementById("card-container"); // going down the dom tree and asking each node if they have an id card-container
    cardContainer.innerHTML = ""; // clear content
    const templateCard = document.querySelector(".card").cloneNode(true); // clone template card
    templateCard.style.display = "none"; // hide template card

    for (let i = 0; i < skinsToShow.length; i++) 
    {
        let skin = skinsToShow[i]; 
        const nextCard = templateCard.cloneNode(true); 
        nextCard.style.display = "block"; 
        editCardContent(nextCard, skin); // fill current card with data 
        cardContainer.appendChild(nextCard); // add card to the container
    }
} 

// debug:
showCards(skins);

// editCardContent: fills the card with its data 
function editCardContent(card, skin) 
{
    // name
    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = skin.name;
  
    // image
    const cardImage = card.querySelector("img");
    cardImage.src = skin.imageUrl;
    cardImage.alt = skin.name + " Skin";

    // species
    const speciesElement = card.querySelector(".species");
    if (speciesElement) 
    { 
        // makes species into a string if it's an array of multiple 
        speciesElement.textContent = "Species: " + (Array.isArray(skin.species) ? skin.species.join(", ") : skin.species);
    }

    // color
    const colorElement = card.querySelector(".color");
    if (colorElement) 
    { 
        // makes color into a string if it's an array of multiple
        colorElement.textContent = "Color: " + (Array.isArray(skin.color) ? skin.color.join(", ") : skin.color);
    }

    // franchise
    const franchiseElement = card.querySelector(".franchise");
    if (franchiseElement) 
    { 
        franchiseElement.textContent = "Franchise: " + skin.franchise;
    }

    card.style.display = "block";
}

// not done yet
function quoteAlert() 
{
    console.log("Button Clicked!")
    // alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

// not done yet
function removeLastCard() 
{
    titles.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}

// filter and sort skins (dropdown menu)
function applyFilters() 
{
    let filteredSkins = [...skins]; // copy original array

    // franchise
    const franchiseFilter = document.getElementById('filterFranchise').value;
    if (franchiseFilter !== "All") 
    {
        // => arrow syntax goes through every element in the array in skin and only includes it if skin's franchise is the one specified
        filteredSkins = filteredSkins.filter(skin => skin.franchise === franchiseFilter);
    }

    // species
    const speciesFilter = document.getElementById('filterSpecies').value;
    if (speciesFilter !== "All") 
    {
        filteredSkins = filteredSkins.filter(skin => {
            return Array.isArray(skin.species) ? skin.species.includes(speciesFilter) : skin.species === speciesFilter;
        });
    }

    // color
    const colorFilter = document.getElementById('filterColor').value;
    if (colorFilter !== "All") 
    {
        filteredSkins = filteredSkins.filter(skin => {
            return Array.isArray(skin.color) ? skin.color.includes(colorFilter) : skin.color === colorFilter;
        });
    }

    // sort by name (ascending / descending)
    const sortOrder = document.getElementById('sortOrder').value;
    filteredSkins.sort((a, b) => {
        let nameA = a.name.toUpperCase(); 
        let nameB = b.name.toUpperCase();
        if (sortOrder === "Ascending") 
        {
            return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
        } else // descending
        { 
            return nameA > nameB ? -1 : nameA < nameB ? 1 : 0;
        }
    });

    console.log("Filtered skins:", filteredSkins); // <- for me
    showCards(filteredSkins); // show the new skins
}

