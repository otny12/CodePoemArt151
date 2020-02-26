let index = 0;      // Used for Ali's and Ben's functions as well as the click function
let x1 = 0;         /*All of these x values are use for the scroll functions*/
let x2 = 500;       // width * 1
let x3 = 1000;      // width * 2
let x4 = 1500;      // width * 3
let x5 = 2000;      // width * 4
let x6 = 2500;      // width * 5
let allowClick = false; // boolean variable that decides whether the function will let mouseClick enabled

function preload() {

  image1 = loadImage('pic1.png');
  image2 = loadImage('pic2.png');
  image3 = loadImage('pic3.png');
  image4 = loadImage('pic4.png');
  image5 = loadImage('pic5.png');
  image6 = loadImage('pic6.png');
}

function setup() {
  // creates the canvas by a 500 by 500 size
  createCanvas(500, 500);

  // creates object that has all of the functions
  platformCreated = new Platform(image1, image2, image3, image4, image5, image6);

  // sets the background color to black
  background(0);
}

function draw() {
  // In order to call the desired function you want to use
  // something like "platformCreated.functionName();" and if it asks for a parameter
  // just type in as "platformCreated.functionName(value you want in here);"

  //ex: platformCreated.ScrollSidetoSide(3);
  platformCreated.scrollAutoUp(1);

}

class Platform {
  constructor() {
    this.x = 0;             // offset position that will affect all the images
    this.speed = 3.32;      // how fast you want something to move, depends on your implementation 
    this.arr = [image1, image2, image3, image4, image5, image6];     // array containing references to all of our images
  }

  // scroll left to right by the user's mouse X axis
  // takes in a parameter of a new Speed value in order to show all the images correctly
  scrollSidetoSide(newSpeed) {
    this.speed = newSpeed;  // user gets to decide how fast it moves
    this.x = mouseX * this.speed; // set the new x position

    // images will be displayed side to side, all of them will be resized to 500 by 500
    image(this.arr[0], 0 - this.x, 0, width, height);
    image(this.arr[1], 500 - this.x, 0, width, height);
    image(this.arr[2], 1000 - this.x, 0, width, height);
    image(this.arr[3], 1500 - this.x, 0, width, height);
    image(this.arr[4], 2000 - this.x, 0, width, height);
    image(this.arr[5], 2500 - this.x, 0, width, height);
  }

  // scroll up and down by the user's mouse Y axis
  // takes in a parameter of a new Speed value in order to show all the images correctly
  scrollUpDown(newSpeed) {
    this.speed = newSpeed;  // user gets to decide how fast it moves
    this.x = mouseY * this.speed;  //set the new x position
    image(this.arr[0], 0, 0 - this.x, width, height);
    image(this.arr[1], 0, 500 - this.x, width, height);
    image(this.arr[2], 0, 1000 - this.x, width, height);
    image(this.arr[3], 0, 1500 - this.x, width, height);
    image(this.arr[4], 0, 2000 - this.x, width, height);
    image(this.arr[5], 0, 2500 - this.x, width, height);

  }

  // scroll automatically to the left without user control
  scrollAuto(newSpeed) {
    this.speed = newSpeed;
    image(this.arr[0], x1, 0, width, height);
    image(this.arr[1], x2, 0, width, height);
    image(this.arr[2], x3, 0, width, height);
    image(this.arr[3], x4, 0, width, height);
    image(this.arr[4], x5, 0, width, height);
    image(this.arr[5], x6, 0, width, height);

    x1 -= this.speed;
    x2 -= this.speed;
    x3 -= this.speed;
    x4 -= this.speed;
    x5 -= this.speed;
    x6 -= this.speed;

    if (x1 < -2500) {
      x1 = width;
    }
    if (x2 < -2500) {
      x2 = width;
    }
    if (x3 < -2500) {
      x3 = width;
    }
    if (x4 < -2500) {
      x4 = width;
    }
    if (x5 < -2500) {
      x5 = width;
    }
    if (x6 < -2500) {
      x6 = width;
    }

  }

  scrollAutoUp(newSpeed) {
    this.speed = newSpeed;
    image(this.arr[0], 0, x1, width, height);
    image(this.arr[1], 0, x2, width, height);
    image(this.arr[2], 0, x3, width, height);
    image(this.arr[3], 0, x4, width, height);
    image(this.arr[4], 0, x5, width, height);
    image(this.arr[5], 0, x6, width, height);

    x1 -= this.speed;
    x2 -= this.speed;
    x3 -= this.speed;
    x4 -= this.speed;
    x5 -= this.speed;
    x6 -= this.speed;

    if (x1 < -2500) {
      x1 = height;
    }
    if (x2 < -2500) {
      x2 = height;
    }
    if (x3 < -2500) {
      x3 = height;
    }
    if (x4 < -2500) {
      x4 = height;
    }
    if (x5 < -2500) {
      x5 = height;
    }
    if (x6 < -2500) {
      x6 = height;
    }
  }

  // Basic clickthru of the images like a slideshow
  clickThru() {
    allowClick = true;
    image(this.arr[index], 0, 0, width, height);
  }

  // Ali's function:
  // Acts the same way as the older windows
  functionWin() {
    allowClick = true;
    image(this.arr[index], pmouseX - 100, pmouseY - 100, 200, 200);
  }

  // Ben's function:
  // Displays the image, and goes through them with a delayed time
  autoDisplayDelayed(frameDelay) {
    allowClick = false;
    if (frameCount % frameDelay == 0) {
      index =
        // if (index + 1) is less than the # of items in arr, increment the current index
        // otherwise, assing zero to the current index
        index + 1 < this.arr.length ?
        index + 1 : 0;
    }

    // display image at the currentIndex of arr
    image(this.arr[index], 0, 0);
  }
}





// for function9 and functionWin currently
// its a function that is outside of the class platform, 
// used to change the index, ignore this function
function mousePressed() {
  if (allowClick == true) {
    index++;

    // reset the index
    if (index > 5) {
      index = 0;
    }
  }
}