const apiKey = process.env.VUE_APP_API_KEY
const baseUrl = `https://api.unsplash.com/photos/?client_id=${apiKey}`;

export const fetchDefaultPics = () => {

  return fetch(baseUrl)
    .then(res => {
      return res
    })
    .then((res) => res.json())
    .catch((error) => console.log(error))
};


