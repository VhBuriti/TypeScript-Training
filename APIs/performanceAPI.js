/*
    It allows us to detect performance
    related data, it works around markers
    that we can create, that basically
    register the performance into the creation
    given time
*/

performance.mark("MyFirstMark");
performance.mark("MySecondMark");

performance.measure("Compare", "MyFirstMark", "MySecondMark");




const performanceEntries = performance.getEntriesByType("resource");
performanceEntries.forEach(entry => {
  console.log(`Name: ${entry.name}, Duration: ${entry.duration}`);
});