const API_KEY = 'bab3031dd3ab462fa1ca1dc7107b9eb3'
const CITY = 'mai'
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}`

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => fetch(API_URL).then((res) => res.json())
