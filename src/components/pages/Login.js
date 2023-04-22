import { useState } from "react";

export default function Login() {
  //state
  const [value, setValue] = useState("");
  // comportements
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bonjour ${value}`);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  //affichage
  return (
    <div>
      <h1>Bienvenue chez nous</h1>
      <br/>
      <h2>Connectez-vous</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Entrez votre prénom..."
          required
          value={value}
          onChange={handleChange}
        />

        <button type="submit">Accéder à votre espace</button>
      </form>
    </div>
  );
}
