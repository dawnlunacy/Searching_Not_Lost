const apiKey = process.env.VUE_APP_API_KEY

export const fetchDefaultPics = (query) => {
  console.log("query", query)
  const baseUrlWithQuery = `https://api.unsplash.com/search/photos?client_id=${apiKey}&query=${query}`
  return fetch(baseUrlWithQuery)
    .then(res => {
      return res
    })
    .then((res) => res.json())
    .catch((error) => console.log(error))
};


