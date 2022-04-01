import axios from 'axios';
export async function getMeteo (cityName: string) {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7c140b7814e808669488912b2b8d1f47&units=metric&lang=FR`);
    const result = await response.data;
    return result
  } catch (error) {
    console.log(error)
  }
}