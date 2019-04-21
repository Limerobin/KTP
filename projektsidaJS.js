var images = ['projektimages/image1.jpg', 'projektimages/image2.jpg', 'projektimages/image3.jpg'];

var index = 0;

var the_image = document.getElementById("main-image");
the_image.src = images[0];

function show_image(direction)
{
  if (direction == "left")
  {
    index--;
  }
  else
  {
    index++;
    index %= images.length;
  }
  
  if (index < 0)
  {
    index = images.length - 1;
  }
  
  the_image.src = images[index];
}