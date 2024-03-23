// Runs only one time
setTimeout(function () {
  console.log("Hello");
}, 2000);

// Runs every time interval
setInterval(function () {
  console.log("2 seconds has passed!!");
}, 2000);

// Clears/stops an time out/interval
clearTimeout(myTimeOut);
clearInterval(myInterval);

/* 
    We can use timers to debounce/delay
    code exectuion or functions
*/

const searchInput = document.querySelector("#ID");
let debounceTimeout;

function queryAPI() {
  console.log("API Request");
}

searchInput.addEventListener("input", () => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    queryAPI();
  }, 400);
});

// Same behind logic, but more scalable

function queryAPI(searchTerm) {
  console.log(`Searching the API for ${searchTerm}`);
}

function debounce(callback, delay) {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const debouncedQueryAPI = debounce(queryAPI, 300);

/* 
  There also throttling, which
  limits how many requests
  we can do to a given amout of time
*/

let isThrottled = false;

if (!isThrottled) {
  //do stuff
  isThrottled = true;
  setTimeout(() => {
    isThrottled = false;
  }, 300);
}
