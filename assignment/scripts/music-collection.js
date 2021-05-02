console.log('***** Music Collection *****');

const collection = [];

function addToCollection(title, artist, yearPublished) {
  const album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  }; // Ending object - albums

  collection.push(album);

  return album;
} // End addToCollection

function showCollection(albumCollection) {
  console.log(`Number of Albums in the collection --> `, albumCollection.length);

  for (let i = 0; i < albumCollection.length; i++) {

    let albumObject = albumCollection[i];
    let title = albumObject.title;
    let artist = albumObject.artist;
    let yearPublished = albumObject.yearPublished;

    console.log(`${title} by ${artist}, published in ${yearPublished}`);
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
  console.log(artistList);
  return artistList;
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
console.log('Testing showCollection');
showCollection(collection);

//** Testing findByArtist
console.log('Testing Umphrey\'s McGee search');
findByArtist('Umphrey\'s Mcgee');
console.log('Testing search for artist NOT in list');
findByArtist('Brittney Spears');
console.log('Testing artist with multiple albums');
findByArtist('Protest The Hero');
