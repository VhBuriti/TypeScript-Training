/* 
    Generator Functions are used to yield/hold values upon calling,
    you create a generic generator with the function, then
    it will store the base value and return it upon calling,
    using the keyword .next()

    It "pauses" it's executiong to return upon calling

    ** This can be really useful to calling up useful resourse,
    for example, in a ecommerce, if you have 1000 products images,
    but want to show just 10 of them at the time, you can use
    generator functions and get it 10 by 10 by the click of a buttom.
*/

function* evens(n) {
  while (true) {
    yield n;
    n += 2;
  }
}

const evensGenerator = evens(2);

evensGenerator.next();

function* fibonnaci() {
  let a = 0,
    b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fibGen = fibonnaci();
fibGen.next();

//Example with images/

const allImages = Array.from(
  { length: 1000 },
  (_, i) => `https://placeimg.com/640/480/any?image=${i}`
);

function* getBatchOfImages(images, batchSize = 10) {
  let currIndex = 0;
  while (currIndex < images.length) {
    yield images.slice(currIndex, currIndex + batchSize);
    currIndex += batchSize;
  }
}

const imageGen = getBatchOfImages(allImages);
