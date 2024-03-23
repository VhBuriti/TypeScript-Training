/* 
    Is used to check if a specific
    element is present in the view point of the
    user, if it's current being seeing.

    It can be used in different points, to lazy load images/components,
    check ads view time, etc.
*/

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log("Element is in view point")
        }
    });
});


// You can also pass properties/parameters to change the way the observer interacts
const observerWithParameters = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log("Element is in view point")
        }
    });
}, {properties});


const target = document.querySelector("#id");
observer.observe(target);


// Observer that tracks how long the user sees an observer

let adViewTime = [];
let adVisibleStartTime;

const observerTrackTime = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const {isIntersecting} = entry;
        if (isIntersecting) {
            //ad is visible
            adVisibleStartTime = Date.now();

        } else if (adVisibleStartTime) {
            //ad has been visible, no longer is
            let adViewDuration = Date.now() - adVisibleStartTime;
            adViewTime.push(adViewDuration);
            console.log(`Ad has view for ${adViewTime}`);
            adVisibleStartTime = undefined;
        }
    })
}, {threshold: 0.5})


