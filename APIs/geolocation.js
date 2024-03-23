/* 
    The geolocation api is a build in browser api
    used to get geograpic data from the user

    For it to work, the user needs to allow the browser to collect the geolocation data
*/

navigator.geolocation.getCurrentPosition((position) => {
  const { latitude, longitude } = position.coords;
  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
});
