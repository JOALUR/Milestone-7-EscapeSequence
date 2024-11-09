const imageSources = [
  "assets/trail.jpeg",
  "assets/lakesunset.jpeg",
  "assets/cabin.jpeg",
  "assets/doe.jpeg",
  "assets/starrynight.jpeg",
];

/*
  1. addThumbnail
1.1 Create the image element
Start by creating a new <img> element and storing it in a variable.

1.2 Customize the image element
Update the element's src property with whatever value was passed to the imageSource parameter. There are some pre-written styles for the thumbnails in 
style.css
. Activate the styles by adding the thumbnail class to the element.

1.3 Append the image element
Select the div with the id thumbnail-container and use the appendChild method to append the new thumbnail to it. Check your page preview and you should see all of the thumbnails added to the page.

🧠 Pro-tip: At this point, you can test your logic by calling addThumbnail from the console and passing in an image source as a string. If everything is working correctly, you should see a thumbnail rendered to the page.

1.4 Display fullsize image when thumbnail is clicked
To display the fullsize image when its thumbnail is clicked, you'll need to attach an onclick function to the image element you created. The onclick function should select the image with the id fullsize-image and update its src property with whatever value was passed to the imageSource parameter.

🗒️ Note: You may need to use your Google Fu here - how do we add an onclick to an element created entirely in JavaScript when we can't access its HTML directly?
*/

function addThumbnail(imageSource) {
  // 1.1 Create the element
  let img = document.getElementById();
  // 1.2 Customize the element
  img.setAttribute("src", "imageSource");
  // 1.3 Append the element
  const div = document
    .getElementById("thumbnail-container")
    .appendChild("imageSource");
  // 1.4 Add the onclick
}

console.log(addThumbnail);

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
  // 2.2 Call addThumbnail each iteration
}

// 2.3 Call addAllThumbnails

// LevelUp Display the first image on page load
