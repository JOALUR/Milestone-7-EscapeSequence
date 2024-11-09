const imageSources = [
  "assets/trail.jpeg",
  "assets/lakesunset.jpeg",
  "assets/cabin.jpeg",
  "assets/doe.jpeg",
  "assets/starrynight.jpeg",
];

function addThumbnail(imageSource) {
  // 1.1 Create the element
  let img = document.createElement("img");
  // 1.2 Customize the element
  img.setAttribute("src", imageSource);
  img.classList.add("thumbnail");

  // 1.3 Append the element
  const div = document.getElementById("thumbnail-container");
  div.appendChild(img);

  // 1.4 Add the onclick
  img.onclick = function () {
    //selects element displaying image at ful size
    const fullSizeImage = document.getElementById("fullsize-image");

    //update src attribute to imageSource
    fullSizeImage.setAttribute("src", imageSource);
  };

  console.log(img);
}

/*
  2. addAllThumbnails
2.1 Loop through the image sources
Write a for or while loop that iterates through the entirety of the imageSources array.

2.2 Add each thumbnail to the page
Invoke the addThumbnail function on each iteration of the loop and pass in the current image source.

2.3 Call the function
Call addAllThumbnails at the bottom of your script to render all thumbnails to the page. If your logic is working as intended, you should see five thumbnails on the page.


*/

function addAllThumbnails() {
  // 2.1 Loop through imageSources
  for (let i = 0; i < imageSources.length; i++) {
    addThumbnail(imageSources[i]);
  }
  // 2.2 Call addThumbnail each iteration
}

// 2.3 Call addAllThumbnails
addAllThumbnails();

// LevelUp Display the first image on page load
document.getElementById("fullsize-image").setAttribute("src", imageSources[0]);
