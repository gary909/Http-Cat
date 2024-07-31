function fetchCat() {
  const statusCode = document.getElementById("status-code").value;
  const catContainer = document.getElementById("cat-container");

  if (statusCode) {
    const img = document.createElement("img");
    img.src = `https://http.cat/${statusCode}`;
    img.alt = `HTTP status code ${statusCode}`;
    img.onerror = () => {
      img.src = "https://http.cat/404";
      img.alt = "HTTP status code not found";
    };

    // Clear previous image
    catContainer.innerHTML = "";
    catContainer.appendChild(img);
  } else {
    alert("Please enter a valid HTTP status code");
  }
}
