import { React, useState, useEffect } from "react";
import withAuth from "../../Auth/withAuth";
import dynamic from "next/dynamic";
import SuccessCard from "../../../components/SuccessCard";
import ErrorCard from "../../../components/ErrorCard";
import Router from "next/router";
import Navbar from "../../../components/NavBar";
// const Navbar = dynamic(() => import("../../../components/NavBar"), {
//   ssr: false,
// }); //<- set SSr to false

const addPatient = () => {
  // Inputs
  const [ssNumber, setssNumber] = useState("");
  const [fullName, setfullName] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [gender, setGender] = useState("femme");
  const [sejourn, setsejourn] = useState("court séjour");
  const [service, setService] = useState("ORL");
  const [birthday, setbirthday] = useState("");
  const [enterDate, setenterDate] = useState("");
  const [disease, setDisease] = useState("ORL");

  // Food Particularity booleans
  const [salt, setSalt] = useState(false);
  const [sugar, setSugar] = useState(false);
  const [eggs, setEggs] = useState(false);
  const [milk, setMilk] = useState(false);
  const [seafood, setSeaFood] = useState(false);
  const [grain, setGrain] = useState(false);
  const [nuts, setNuts] = useState(false);
  const [fruits, setFruits] = useState(false);

  // Error and Success messages
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  let Message = null;

  const resetValues = () => {
    setssNumber("");
    setfullName("");
    setRoomNumber("");
    setGender("femme");
    setsejourn("court séjour");
    setService("ORL");
    setbirthday("");
    setenterDate("");
    setDisease("ORL");
    setSalt(false);
    setSugar(false);
    setEggs(false);
    setMilk(false);
    setSeaFood(false);
    setGrain(false);
    setNuts(false);
    setFruits(false);
  };
  
  const submitPatient = async (e) => {
    // send data
    // Fetch the api
    e.preventDefault();
    const data = {
      fullName,
      ssNumber,
      roomNumber,
      gender,
      birthday,
      sejourn,
      service,
      enterDate,
      disease,
      salt,
      sugar,
      eggs,
      milk,
      seafood,
      grain,
      nuts,
      fruits,
    };

    // console.log(data);
    const res = await fetch("/api/addPatient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log(res.status);

    if (res.status == 403 || res.status == 500) {
      console.log("Something went wrong");
      // Router.reload(window.location.pathname);
      window.scrollTo(0,0)
      resetValues();
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else if (res.status == 200) {
      console.log("Added Successfully");
      window.scrollTo(0,0)
      resetValues();
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
  };

  return (
    <>
      <Navbar />
      {success && <SuccessCard message="The patient was added successfully" />}
      {error && <ErrorCard error="Something went wrong, please retry" />}
      {/* {success ? <SuccessCard message="success code" /> : null} */}
      <div className="mx-auto w-3/4 mt-10">
        <h1 className="text-2xl font-bold">Remplir la prise en charge</h1>
        <form onSubmit={submitPatient} className="flex flex-col mx-auto">
          <label className="text-green-500 font-bold text-sm mt-4">
            Identification sécurité sociale
          </label>
          <input
          required
            type="text"
            value={ssNumber}
            onChange={(e) => {
              setssNumber(e.target.value);
            }}
            placeholder="Identification sécurité sociale"
            className="border border-green-500 px-2 py-4 rounded-md mt-4"
          />
          <label className="text-green-500 font-bold text-sm mt-4">
            Nom Complet
          </label>
          <input
          required
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
          required
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
            <option value="Séjour Long">séjour Long</option>
            <option value="Séjour Court">séjour Court</option>
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
            Maladie:
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
            Date de naissance
          </label>
          <input
            type="date"
            value={birthday}
            onChange={(e) => {
              setbirthday(e.target.value);
            }}
            className="border border-green-500 px-2 py-4 rounded-md mt-4"
          />
          <label className="text-green-500 font-bold text-sm mt-4">
            Date d'entrée
          </label>
          <input
            type="date"
            value={enterDate}
            onChange={(e) => {
              setenterDate(e.target.value);
            }}
            className="border border-green-500 px-2 py-4 rounded-md mt-4"
          />
          <label className="text-green-500 font-bold text-sm mt-4">
            Particularité alimentaire
          </label>
          <div className="mt-4">
            <input
              type="checkbox"
              id="salt"
              name="salt"
              onChange={(e) => setSalt(e.target.checked)}
            />
            <label htmlFor="salt" className="ml-2">
              Salt
            </label>
          </div>
          <div className="mt-4">
            <input
              type="checkbox"
              id="sugar"
              name="sugar"
              className="checked:bg-green-600 checked:border-transparent"
              onChange={(e) => setSugar(e.target.checked)}
            />
            <label htmlFor="sugar" className="ml-2">
              Sugar
            </label>
          </div>
          <label className="text-green-500 font-bold text-sm mt-4">
            Les allergies
          </label>
          <div className="mt-4">
            <input
              type="checkbox"
              id="eggs"
              name="eggs"
              onChange={(e) => setEggs(e.target.checked)}
            />
            <label htmlFor="eggs" className="ml-2">
              Eggs
            </label>
          </div>
          <div className="mt-4">
            <input
              type="checkbox"
              id="milk"
              name="milk"
              onChange={(e) => setMilk(e.target.checked)}
            />
            <label htmlFor="milk" className="ml-2">
              Milk
            </label>
          </div>
          <div className="mt-4">
            <input
              type="checkbox"
              id="seafood"
              name="seafood"
              onChange={(e) => setSeaFood(e.target.checked)}
            />
            <label htmlFor="seafood" className="ml-2">
              Seafood
            </label>
          </div>
          <div className="mt-4">
            <input
              type="checkbox"
              id="grain"
              name="grain"
              onChange={(e) => setGrain(e.target.checked)}
            />
            <label htmlFor="grain" className="ml-2">
              Grain
            </label>
          </div>
          <div className="mt-4">
            <input
              type="checkbox"
              id="nuts"
              name="nuts"
              onChange={(e) => setNuts(e.target.checked)}
            />
            <label htmlFor="nuts" className="ml-2">
              Nuts
            </label>
          </div>
          <div className="mt-4">
            <input
              type="checkbox"
              id="fruits"
              name="fruits"
              onChange={(e) => setFruits(e.target.checked)}
            />
            <label htmlFor="fruits" className="ml-2">
              Fruits
            </label>
          </div>
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

export default withAuth(addPatient);
