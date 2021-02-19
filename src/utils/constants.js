let API_ROUTE;

if (process.env.NODE_ENV === "production") {
  API_ROUTE = "https://api.github.com";
} else {
  API_ROUTE = "https://api.github.com";
}

export default API_ROUTE;
