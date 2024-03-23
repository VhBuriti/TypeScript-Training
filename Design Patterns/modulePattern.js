/*
    Consist around working with 
    modular encapsulated code, with
    the use of immediate invoked functions
*/

const ChickenModule = (() => {
  const eggColor = "white"; // private variable
  const cluck = () => console.log("Cluck! Cluck!"); // private function
  return {
    layEgg: () => {
      console.log("Laid a", eggColor, "egg.");
      cluck();
    },
  };
})();

ChickenModule.layEgg();
