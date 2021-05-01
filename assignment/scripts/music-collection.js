console.log('***** Music Collection *****')

// Create a variable collection that starts as an empty array
const collection = [];

// Add a function named addToCollection -- Take in the album's title, artist, yearPublished as input parameters
function addToCollection(title, artist, yearPublished) {
  // Create a new object having the above properties
  const album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  }; // Ending object - albums

  // Add the new object to the end of the collection array
  collection.push(album);

  // Return the newly created object
  return album;
} // End addToCollection


// ** Testing **
// Test addToCollection: Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
// Test addToCollection: Console.log each album as added using the returned value.
// Test addToCollection: After all are added, console.log the collection array

// Add a function named showCollection
// showCollection should: Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
// showCollection should: Console.log the number of items in the array.
// showCollection should: Loop over the array and console.log each album's information formatted like: TITLE by ARTIST, published in YEAR

// Test the showCollection function.

// Add a function named findByArtist
// findByArtist should: Take in artist (a string) parameter
// findByArtist should: Create an array to hold any results, empty to start
// findByArtist should: Loop through the collection and add any objects with a matching artist to the array
// findByArtist should: Return the array with the matching results. If no results are found, return an empty array

// Test the findByArtist function:
// Make sure to test with an artist you know is in the collection,
// as well as an artist you know is not in your collection.
// Check that for artists with multiple matches, all are found.



// **** Stretch ****
// Create a function called search
// Take an input parameter for a search criteria object
// Return a new array of all items in the collection matching all of the search criteria
// If no results are found, return an empty array
// If there is no search object or an empty search object provided as input, then return all albums in the collection


// Add an array of tracks to your album objects
// Each track should have a name and duration

// Update the addToCollection function to also take an input parameter for the array of tracks
// Update search to allow a trackName search criteria
// Update the showCollection function to display the list of tracks for each album with its name and duration



/* The OG code -- save for debugging */
/*
const collection = [];

function addToCollection (title, artist, yearPublished) {
  let album = {
    title: addToCollection.title,
    artist: addToCollection.artist,
    yearPublished: addToCollection.yearPublished,
  }//End album/object creation
  return album;
  console.log(album);//Checking if album/object was created
  collection.push (album); //Push new album/object to collection
}//End addToCollection
console.log(collection);//Checking if album was added to collection array
*/



/**** Random Notes: ****/
// using a string as the key/property means you must use an object NOT an array
// arrays and dobjects both allow indexed and associative(strings) keys

/* Note: Semicolons after functions are harmless, but are parsed as a separate empty statement (ie. as it you hit return and added a semicolon to a new line) */

/** End Random Notes: **/
