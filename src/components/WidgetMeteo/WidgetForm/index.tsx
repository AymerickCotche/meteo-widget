import React, { SyntheticEvent } from 'react';
import './styles.scss';

type CounterProps = {
  value: string,
  handleChangeValue: React.Dispatch<React.SetStateAction<string>>,
  setVille: React.Dispatch<React.SetStateAction<string>>,
}

function WidgetForm({
  value,
  handleChangeValue,
  setVille,
}: CounterProps) {
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();  
    setVille(value);
  }
  return (
    <form className="widget-meteo__form" onSubmit={handleSubmit}>
      <input
        className="widget-meteo__input"
        type="text"
        placeholder="Entrer le nom d'une ville"
        value={value}
        onChange={(e) => handleChangeValue(e.currentTarget.value)}
      />
    </form>
  );
}

export default WidgetForm;
