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

function showCollection(albumCollection) {
  // Console.log the number of items in the array
  console.log(`Number of Albums in the collection --> `, albumCollection.length);

  // Loop over the array
  for (let i = 0; i < albumCollection.length; i++) {

    let albumObject = albumCollection[i]; // { title: 'Fortress', artist: 'Protest the hero', yearPublished: 2008 }
    let title = albumObject.title;
    let artist = albumObject.artist;
    let yearPublished = albumObject.yearPublished;

    // let title = albumCollection[i];
    // let artist = albumCollection[i];
    // let yearPublished = albumCollection[i];

    // console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.
    console.log(`${title} by ${artist}, published in ${yearPublished}`); // ** says title, artist, and yearPublished arent defined
  }//End loop
}//End showCollection

function findByArtist(artistName) {

  const artistList = [];

  for (let i = 0; i < collection.length; i++) {

    let albumObject = collection[i];
    let title = albumObject.title;
    let artist = albumObject.artist;
    let yearPublished = albumObject.yearPublished;

    if (artist === artistName) {
      artistList.push(artist);
    }//End if
  } // End loop
  return artistList;
  console.log(artistList);
} // End findByArtist function


// ** Testing addToCollection **

addToCollection('Fortress', 'Protest The Hero', 2008);
console.log(`Current value of collection constant --> `, collection);

addToCollection('Kazaia', 'Protest The Hero', 2007);
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

showCollection(collection);

//** Testing findByArtist

findByArtist('Umphrey\'s Mcgee');
findByArtist('Brittney Spears');
findByArtist('Protest The Hero');
