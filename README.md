# Shoe Store

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
An e-commerce website that sells many different kinds of shoes

## Table of Contents
        
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation-if-you-would-like-to-clone-the-repo-and-work-from-the-backend-otherwise-simply-visit-the-deployed-application)
- [Usage](#usage)
- [Link to Deployed Application](#link-to-deployed-application)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions for the Team?](#questions-for-the-team)

## User Story
```
AS A consumer
I WANT to be able to browse for shoes based on my preferred criteria and save my favorites
SO THAT I can purchase new shoes
```
## Acceptance Criteria
```
GIVEN an online shopping site for shoes
WHEN I arrive at the homepage
THEN I am presented with a list of shoes for sale including the name of the product, its price, and the amount in stock
WHEN I want to sort the products
THEN I am able to click on a button to sort by price or stock (either low to high, or high to low)
WHEN I click on Cart or Profile in the navigation bar
THEN I am brought to a Login/Signup page in order to sign-in to the website using my email and password, or to create a new account
WHEN I return to the homepage after logging in
THEN I now have the option to add shoes to my cart or my wishlist
WHEN I click on an individual shoe
THEN I am brought to another page that only displays that shoe
WHEN I add shoes to my wishlist
THEN I will be presented with them on my Profile page, even after I log out
WHEN I add shoes to my cart
THEN I will be presented with them on my Cart page, but only until I log out or the session expires (30 minutes)
WHEN I am logged in and visit any page on the website
THEN I will be able to add or remove shoes from my cart or wishlist
WHEN I have already added a shoe to my cart or wishlist
THEN I will see the button "clicked" for that shoe on any page I visit
WHEN I am on the Cart or Profile page and remove a show from that list
THEN I will see the page automatically reload to remove that shoe from view
```
 
## Installation (if you would like to clone the repo and work from the backend; otherwise simply [visit the deployed application](https://mighty-brushlands-95444.herokuapp.com/)) 
1. Install Node.js
    - [Download Version 16 of Node.js](https://nodejs.org/download/release/v16.18.0/node-v16.18.0-x64.msi)
2. Clone this repo
   ```sh
   git clone https://github.com/michael-loeffler/Shoe-Store.git
   ```
3. Install the dependencies included in the package.json
   ```sh
   npm i
   ```
4. Create a .env file with the following information
   ```sh
   DB_NAME='shoe_store_db'
   DB_USER='root'
   DB_PASSWORD='your MySQL password here'
   ```
5. Open MySQL, and run the following commands 
   ```sh
   source db\schema.sql
   quit
   ```
6. Seed the database in the command-line using the following command
   ```sh
   npm run seed
   ```
7. Start the server by using the following command in the command-line
   ```sh
   npm start
   ```
8. Open the site on your local host (e.g., http://localhost:3001/)

## Usage

## Link to deployed application
[https://mighty-brushlands-95444.herokuapp.com/](https://mighty-brushlands-95444.herokuapp.com/)

## Wireframe
![Wireframe of Project 2](./assets/project_2_wireframe.jpg)

## Credits

Node Packages:
  - bcrypt
  - connect-session-sequelize
  - dotenv
  - express
  - express-handlebars
  - express-session
  - mysql2
  - sequelize

## License
    
Covered under the MIT License. For more details and to view the license in full, please visit the [MIT License Webpage](https://choosealicense.com/licenses/mit/).

## Contributing
    
If you have a suggestion for improvement, please fork the repo and create a pull request. You can also open an issue and tag it for "enhancement".
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/featureName`)
3. Commit your Changes (`git commit -m 'adds featureName'`)
4. Push to the Branch (`git push origin feature/featureName`)
5. Open a Pull Request
    
## Tests

N/A

## Questions for the Team?
* Cameron Dassow: Please visit my [GitHub profile: cameronjoshua](https://github.com/cameronjoshua) or [email me with questions](mailto:cameronda145@gmail.com)
* Michael Loeffler: Please visit my [GitHub profile: michael-loeffler](https://github.com/michael-loeffler) or [email me with questions](mailto:michaeloeffler23@gmail.com)
* Danielle Torrise: Please visit my [GitHub profile: dltorrise](https://github.com/dltorrise) or [email me with questions](mailto:dltorrise@gmail.com)

<!-- 
## Description

Karaoke Knights is an interactive application that combines music and cocktails to create fun-filled, shared experiences with family or friends. Our application houses all the tools necessary to create a successful Karaoke Night: the ability to search for songs, view lyrics, as well as find fun cocktail recipes to enjoy throughout the night.

Our team wanted to create this tool because we all enjoy karaoke and spending time with friends/family, and having a way to easily recreate a karaoke experience at home would be a great way to gather and connect with loved ones. Karaoke is a simple concept; all you need are lyrics, music, and people looking to have a good time! No need for expensive karaoke machines or crowded bar karaoke nights; with the Karaoke Knights app you and your best friends can create memorable and fun experiences in your living room, paired with delicious new cocktail recipes to try out.

Through working on this project, we learned a lot about utilizing and manipulating the data fetched from Server-Side APIs to display pertinent information for users. Some of the biggest points of learning include:

* Using logic to find out if a user has any data stored in localStorage to determine what to populate the page with (if anything)
* Processing user input into the desired format (e.g., trimming, encodeURI, etc.)
* Passing user input into a URL to be fetched
* Retrieving pertinent data from the API call and formatting/displaying it for the user using JavaScript to create HTML elements
* Figuring out how to dynamically add information to arrays, add those arrays to an object, and pass that object into localStorage for later retrieval
	* Simultaneously using a count variable to set the id attribute of HTML elements to later be used as an index to reference the correct information for that element as stored in the objects in localStorage
* Using the localStorage.removeItem method to clear out specific parts of the localStorage
* When to use arrow functions to call functions with parameters during click events
* Leveraging the .empty() jQuery method to clear out an HTML element of all children elements to reset a portion of the page for restyling
* Learning how to use a new CSS Framework (Bulma) to easily format and style a web page to desired criteria

## Usage

Karaoke Knights functions by first accepting user input. A user can input data into one main area: Artist and Song search. The application processes and formats user input, and then passes it as a query parameter to the associated API fetch. Then the desired data is retrieved from the JSON response of the API call to then be formatted and added to the page dynamically using JavaScript to create new HTML elements. 

For an artist/song search, the user is presented with a list of songs related to the search with song name, artist name, and album name displayed along with album art. As these elements are created, some are assigned a number as an id which will serve as an index for an array that is simultaneously being built containing the associated lyrics API urls. When a user clicks on a song, the id of the song that was clicked on is obtained and used to locate the associated lyrics API url. Another fetch is performed and the user is now shown the lyrics for that song. When a user chooses to view the lyrics for a song, the song info is added to the "Recent Selections" list. The HTML elements are created to display the song on the list, and the song info and lyrics API url is added to an object that is passed into localStorage. That way, if the user clicks on that song in the "Recent Selections" list, they are again shown the lyrics of that song, and this "Recent Selections" list persists on page reload. A similar process is executed when a user clicks the heart icon next to a song to add it to the "Up Next" list (queue). Users are able to clear their "Recent Selections" and "Up Next" list (this process also clears that data from localStorage). Finally, when viewing a lyrics page, a user can click “Return to Search” and will be presented again with the song results from their most recent search.

A user can choose to click a button to view a random cocktail. Any time a cocktail is displayed, the page features the name of the cocktail, an image, a list of ingredients, and instructions on how to make the drink. For each of these scenarios, the desired data is formatted and added to the page dynamically using JavaScript to create new HTML elements.  -->
