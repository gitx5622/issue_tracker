let API_ROUTE;

if (process.env.NODE_ENV === "production") {
  API_ROUTE = "https://api.github.com/repos";
} else {
  API_ROUTE = "https://api.github.com/repos";
}

export default API_ROUTE;
