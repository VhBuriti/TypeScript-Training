// Basic fetch sintaxe

async function fetchAPI() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(`Warning: ${error}`);
  }
}

// fetch (API_URL)
//      .then((res) => res.json())
//      .then((data) => console.log(data));

// Working with error

try {
  // do stuff...
} catch (error) {
  throw new Error(`Error while doing X: ${error}`);
}

/// HTTPS Errors

async function HTTPSRequest() {
  const response = await fetch("https://api.example.com/data");

  if (!response.ok) {
    throw new Error(`HTTPS Error: ${response.status}`);
  }
}

fetch("https://api.example.com/data")
  .then((res) => {
    console.log("It worked!");
    console.log(res);

    if (!res.ok) {
      throw new Error(`HTTPS Error: ${res.status}`);
    }
  })
  .catch((e) => {
    console.log(`Something went wrong with the fetch call, ${e}`);
  });

// Fetch Headers

async function fetchDataWithHeaders() {
  const headers = new Headers({
    "Content-Type": "application/json",
    Authorization: "Bearer YOUR_TOKEN",
  });

  try {
    const response = await fetch("https://api.example.com/data", { headers });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
fetchDataWithHeaders();

// Fetch With Methods

async function postData() {
  const payload = {
    key1: "value1",
    key2: "value2",
  };

  try {
    const response = await fetch("https://api.example.com/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error posting data:", error);
  }
}
postData();

async function uploadFile(file) {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch("https://api.example.com/upload", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error uploading file:", error);
  }
}

// Assuming there's an input element with type "file" and ID "myFile"

const fileInput = document.querySelector("#myFile");
fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  uploadFile(file);
});
