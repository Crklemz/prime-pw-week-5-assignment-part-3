console.log('***** Music Collection *****');

const collection = [];

function addToCollection(title, artist, yearPublished) {
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

function showCollection(array) {
  console.log(array.length);
  for (let i=0; i<array.length; i++) {
    return (`${album.title by ${album.artist}, published in ${album.yearPublished}`);
  }//End loop
}//End showCollection

// ** Testing addToCollection **

addToCollection('Fortress', 'Protest the hero', 2008);
console.log(`Current value of collection constant --> `, collection);

addToCollection('Between the buried and me', 'Colors', 2007);
console.log(`Current value of collection constant --> `, collection);

addToCollection('Never odd or even', 'Dopapod', 2014);
console.log(`Current value of collection constant --> `, collection);

addToCollection('Sir Nebula', 'Tauk', 2016);
console.log(`Current value of collection constant --> `, collection);

addToCollection('Anchor Drops', 'Umphrey\'s Mcgee', 2004);
console.log(`Current value of collection constant --> `, collection);

addToCollection('Matriarch', 'Veil of Maya', 2015);
console.log(`Current value of collection constant --> `, collection);

//** Testing showCollection

console.log(showCollection(collection));


// Add a function named findByArtist
// findByArtist should: Take in artist (a string) parameter
// findByArtist should: Create an array to hold any results, empty to start
// findByArtist should: Loop through the collection and add any objects with a matching artist to the array
// findByArtist should: Return the array with the matching results. If no results are found, return an empty array

// Test the findByArtist function:
// Make sure to test with an artist you know is in the collection,
// as well as an artist you know is not in your collection.
// Check that for artists with multiple matches, all are found.
