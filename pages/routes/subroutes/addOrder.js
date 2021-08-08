import { React, useState } from "react";
import withAuth from "../../Auth/withAuth";
import Navbar from "../../../components/NavBar";
import Router from "next/router";
import SuccessCard from "../../../components/SuccessCard";
import ErrorCard from "../../../components/ErrorCard";

const addOrder = () => {
  const [ssNumber, setssNumber] = useState("");
  const [disease, setDisease] = useState("ORL");
  const [meal, setMeal] = useState("Petit déjeuner");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const addMeal = async (e) => {
    // send data
    // Fetch the api
    e.preventDefault();
    const data = {
      ssNumber,
      disease,
      meal,
    };
    const res = await fetch("/api/addOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log(res.status);

    if (res.status == 403 || res.status == 500) {
      setError(true);
      Router.reload(window.location.pathname);
    } else if (res.status == 200) {
      setSuccess(true);
      Router.reload(window.location.pathname);
    }
  };

  return (
    <>
      <Navbar />
      {error && (
        <ErrorCard error="Quelque chose ne marche pas, réessayez dans quelques minutes..." />
      )}
      {success && <SuccessCard message="La commande a été lancée" />}
      <div className="mx-auto w-3/4 mt-10">
        <h1 className="text-2xl font-bold">Lancer une commande</h1>
        <form onSubmit={addMeal} className="flex flex-col mx-auto">
          <label className="text-green-500 font-bold text-sm mt-4">
            Numéro de sécurité sociale :
          </label>
          <input
            type="text"
            value={ssNumber}
            onChange={(e) => {
              setssNumber(e.target.value);
            }}
            placeholder="Entrez votre numéro de sécurité sociale"
            className="border border-green-500 px-2 py-4 rounded-md mt-4"
          />
          <label className="text-green-500 font-bold text-sm mt-4">
            Service d'hospitalisation:
          </label>
          <select
            value={disease}
            onChange={(e) => {
              setDisease(e.target.value);
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
            value={meal}
            onChange={(e) => {
              setMeal(e.target.value);
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
    </>
  );
};

export default withAuth(addOrder);
