import { useState } from "react";

export default function LoginForm() {
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
 // affichage
  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        <h1>Bienvenue chez nous !</h1>
        <br />
        <h2>Connectez-vous</h2>
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
