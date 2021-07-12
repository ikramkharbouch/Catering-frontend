import { React, useState } from "react";
import withAuth from '../../Auth/withAuth';

const addPatient = () => {
  const [ipp, setIpp] = useState("");
  const [fullName, setfullName] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [gender, setGender] = useState("");
  const [sejourn, setsejourn] = useState("");
  const [service, setService] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [loginDate, setLoginDate] = useState("");

  const [salt, setSalt] = useState(false);
  const [sugar, setSugar] = useState(false);
  const [eggs, setEggs] = useState(false);
  const [Milk, setMilk] = useState(false);
  const [seafood, setSeaFood] = useState(false);
  const [grain, setGrain] = useState(false);
  const [nuts, setNuts] = useState(false);
  const [fruits, setFruits] = useState(false);

  const submitPatient = (e) => {
    e.preventDefault();
    console.log(salt);
    // Fetch the api
  };


  return (
    <div className="mx-auto w-3/4 mt-10">
      <h1 className="text-2xl font-bold">Remplir la prise en charge</h1>
      <form onSubmit={submitPatient} className="flex flex-col mx-auto">
        <label className="text-green-500 font-bold text-sm mt-4">
          Identification sécurité sociale
        </label>
        <input
          type="text"
          value={ipp}
          onChange={(e) => {
            setIpp(e.target.value);
          }}
          placeholder="Entrez votre addresse e-mail"
          className="border border-green-500 px-2 py-4 rounded-md mt-4"
        />
        <label className="text-green-500 font-bold text-sm mt-4">
          Nom Complet
        </label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => {
            setfullName(e.target.value);
          }}
          placeholder="Entrez votre nom et prénom"
          className="border border-green-500 px-2 py-4 rounded-md mt-4"
        />
        <label className="text-green-500 font-bold text-sm mt-4">
          Numéro de chambre
        </label>
        <input
          type="text"
          value={roomNumber}
          onChange={(e) => {
            setRoomNumber(e.target.value);
          }}
          placeholder="Entrez votre Numéro de chambre"
          className="border border-green-500 px-2 py-4 rounded-md mt-4"
        />
        <label className="text-green-500 font-bold text-sm mt-4">Sexe:</label>
        <select
          value={gender}
          onChange={(e) => {
            setGender(e.target.value);
          }}
          className="border border-green-500 px-2 py-4 rounded-md mt-4"
        >
          <option value="Femme">Femme</option>
          <option value="Homme">Homme</option>
          <option value="Non-binaire">Non-binaire</option>
        </select>
        <label className="text-green-500 font-bold text-sm mt-4">
          Type de séjour:
        </label>
        <select
          value={sejourn}
          onChange={(e) => {
            setsejourn(e.target.value);
          }}
          className="border border-green-500 px-2 py-4 rounded-md mt-4"
        >
          <option value="Séjour Long">Séjour Long</option>
          <option value="Séjour Court">Séjour Court</option>
        </select>
        <label className="text-green-500 font-bold text-sm mt-4">
          Service d'hospitalisation:
        </label>
        <select
          value={service}
          onChange={(e) => {
            setService(e.target.value);
          }}
          className="border border-green-500 px-2 py-4 rounded-md mt-4"
        >
          <option value="ORL">ORL</option>
          <option value="Cardiologie">Cardiologie</option>
          <option value="Endocrinologie">Endocrinologie</option>
          <option value="Gastroentérologie">Gastroentérologie</option>
          <option value="Neurologie">Neurologie</option>
          <option value="Urgences">Urgences</option>
          <option value="Réanimation">Réanimation</option>
        </select>
        <label className="text-green-500 font-bold text-sm mt-4">
          Date de naissance
        </label>
        <input
          type="date"
          value={birthdate}
          onChange={(e) => {
            setBirthdate(e.target.value);
          }}
          className="border border-green-500 px-2 py-4 rounded-md mt-4"
        />
        <label className="text-green-500 font-bold text-sm mt-4">
          Date d'entrée
        </label>
        <input
          type="date"
          value={loginDate}
          onChange={(e) => {
            setLoginDate(e.target.value);
          }}
          className="border border-green-500 px-2 py-4 rounded-md mt-4"
        />
        <label className="text-green-500 font-bold text-sm mt-4">
            Particularité alimentaire
        </label>
        <div className="mt-4">
        <input type="checkbox" id="salt" name="salt" onChange={(e) => setSalt(e.target.checked)}
             />
        <label for="salt" className="ml-2">Salt</label>
        </div>
        <div className="mt-4">
        <input type="checkbox" id="sugar" name="sugar" className="checked:bg-green-600 checked:border-transparent" onChange={(e) => setSugar(e.target.checked)}
               />
        <label for="sugar" className="ml-2">Sugar</label>
        </div>
        <label className="text-green-500 font-bold text-sm mt-4">
            Les allergies
        </label>
        <div className="mt-4">
        <input type="checkbox" id="eggs" name="eggs" onChange={(e) => setEggs(e.target.checked)}
             />
        <label for="eggs" className="ml-2">Eggs</label>
        </div>
        <div className="mt-4">
        <input type="checkbox" id="milk" name="milk" onChange={(e) => setMilk(e.target.checked)}
             />
        <label for="milk" className="ml-2">Milk</label>
        </div>
        <div className="mt-4">
        <input type="checkbox" id="seafood" name="seafood" onChange={(e) => setSeaFood(e.target.checked)}
             />
        <label for="seafood" className="ml-2">Seafood</label>
        </div>
        <div className="mt-4">
        <input type="checkbox" id="grain" name="grain" onChange={(e) => setGrain(e.target.checked)}
             />
        <label for="grain" className="ml-2">Grain</label>
        </div>
        <div className="mt-4">
        <input type="checkbox" id="nuts" name="nuts" onChange={(e) => setNuts(e.target.checked)}
             />
        <label for="nuts" className="ml-2">Nuts</label>
        </div>
        <div className="mt-4">
        <input type="checkbox" id="fruits" name="fruits" onChange={(e) => setFruits(e.target.checked)}
             />
        <label for="fruits" className="ml-2">Fruits</label>
        </div>
        <button
          type="submit"
          className="bg-green-500 px-2 py-4 rounded-md mt-4 text-white font-bold"
        >
          Enregister
        </button>
      </form>
    </div>
  );
};

export default withAuth(addPatient);
