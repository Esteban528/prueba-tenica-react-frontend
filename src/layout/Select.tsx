import type { JSX } from "react";

type Props = {
  options: string[];
  setter: (value: string) => void;
};

const SelectFilter = ({ options, setter }: Props): JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setter(e.target.value);
  };

  return (
    <div>
      <label htmlFor="selector">Selecciona una opción:</label>

      <select id="selector" onChange={handleChange}>
        {options.map(value => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectFilter;
