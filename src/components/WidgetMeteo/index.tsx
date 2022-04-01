import React, { useEffect } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import WidgetForm from './WidgetForm';
import './styles.scss';

const apiKey = process.env.REACT_APP_API_KEY;
type CounterProps = {
  defaultCity: string
}
function WidgetMeteo({defaultCity}: CounterProps) {
  const [value, setValue] = useState('');
  const [ville, setVille] = useState(defaultCity);
  const [desc, setDesc] = useState('description');
  const [temp, setTemp] = useState('--');

  useEffect(() => {
    async function getMeteo (cityName: string = 'Paris') {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=FR`);
        const result = await response.data;
        setDesc(result.weather[0].description);
        setTemp(result.main.temp.toFixed());
      } catch (error) {
        console.log(error)
      }
    };
    getMeteo(ville);
  }, [ville]);

  return (
    <div className="widget-meteo">
      <div className="widget-meteo__infos">
        <div className="widget-meteo__infos__left">
          <p className="widget-meteo__city">{ville}</p>
          <p className="widget-meteo__desc">{desc}</p>
        </div>
        <p className="widget-meteo__temp">{temp}°C</p>
      </div>
      
      <WidgetForm
        handleChangeValue={setValue}
        value={value}
        setVille={setVille}
      />
    </div>
  );
};

WidgetMeteo.propTypes= {
  defaultCity: PropTypes.string,
};

WidgetMeteo.defaultProps = {
  defaultCity: 'Tokyo',
};

export default WidgetMeteo;
