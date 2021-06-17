import { React, useState } from "react";
import Success from "../../../components/Success"
import withAuth from '../../Auth/withAuth';

const addOrder = () => {
  const [hospitalizationType, setHospitalizationType] = useState("");
  const [meals, setMeals] = useState("");
  const [submit, setSubmit] = useState(false);

  const login = (e) => {
    e.preventDefault();
    // Fetch the api
    setSubmit(true);
  };

  return (
    <>
      {submit && <Success data="Order"/>}
      {!submit && (
        <div className="mx-auto w-3/4 mt-10">
          <h1 className="text-2xl font-bold">Lancer une commande</h1>
          <form onSubmit={login} className="flex flex-col mx-auto">
            <label className="text-green-500 font-bold text-sm mt-4">
              Service d'hospitalisation:
            </label>
            <select
              value={hospitalizationType}
              onChange={(e) => {
                setHospitalizationType(e.target.value);
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
              Repas:
            </label>
            <select
              value={meals}
              onChange={(e) => {
                setMeals(e.target.value);
              }}
              className="border border-green-500 px-2 py-4 rounded-md mt-4"
            >
              <option value="Petit déjeuner">Petit déjeuner</option>
              <option value="Déjeuner">Déjeuner</option>
              <option value="Dîner">Dîner</option>
            </select>
            <button
              type="submit"
              className="bg-green-500 px-2 py-4 rounded-md mt-4 text-white font-bold"
            >
              Enregister
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default withAuth(addOrder);
