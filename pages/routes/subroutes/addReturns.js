import { useState, React } from "react";
import withAuth from '../../Auth/withAuth';
import Navbar from "../../../components/NavBar";

const addReturns = () => {
  const [mealType, setMealType] = useState("");
  const [initialWeight, setInitialWeight] = useState("");
  const [afterWeight, setAfterWeight] = useState("");
  const [plateCompo, setPlateCompo] = useState("");
  const [sortMethod, setSortMethod] = useState("");
  const [recyclingMethod, setRecyclingMethod] = useState("");

  const submitUser = async (e) => {
    e.preventDefault();

    // send data
    // Fetch the api
    const data = {
      fullName,
      email,
      password,
      role,
    };
    const res = await fetch(process.env.url + "/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(res);
  };

  return ( 
    <>
    <Navbar />
    <div className="mx-auto w-3/4 mt-10">
      <h1 className="text-2xl font-bold">Retouner un produit</h1>
      <form onSubmit={submitUser} className="flex flex-col mx-auto">
        <label className="text-green-500 font-bold text-sm mt-4">
        Type de repas:
        </label>
        <input
          type="text"
          value={mealType}
          onChange={(e) => {
            setMealType(e.target.value);
          }}
          placeholder="Entrez le type du repas"
          className="border border-green-500 px-2 py-4 rounded-md mt-4"
        />
        <label className="text-green-500 font-bold text-sm mt-4">
        Poids initial:
        </label>
        <input
          type="text"
          value={initialWeight}
          onChange={(e) => {
            setInitialWeight(e.target.value);
          }}
          placeholder="Entrez le poids initial"
          className="border border-green-500 px-2 py-4 rounded-md mt-4"
        />
        <label className="text-green-500 font-bold text-sm mt-4">
        Poids après service:
        </label>
        <input
          type="password"
          value={afterWeight}
          onChange={(e) => {
            setAfterWeight(e.target.value);
          }}
          placeholder="Entrez le poids après service"
          className="border border-green-500 px-2 py-4 rounded-md mt-4"
        />
        <label className="text-green-500 font-bold text-sm mt-4">
        Composition des plateaux:
        </label>
        <input
          type="password"
          value={plateCompo}
          onChange={(e) => {
            setPlateCompo(e.target.value);
          }}
          placeholder="Entrez la composition des plateaux"
          className="border border-green-500 px-2 py-4 rounded-md mt-4"
        />
        <label className="text-green-500 font-bold text-sm mt-4">
        Type de tri prévu:
        </label>
        <input
          type="password"
          value={sortMethod}
          onChange={(e) => {
            setSortMethod(e.target.value);
          }}
          placeholder="Entrez le type de tri prévu"
          className="border border-green-500 px-2 py-4 rounded-md mt-4"
        />
        
        <label className="text-green-500 font-bold text-sm mt-4">
        Type du recyclage prévu:
        </label>
        <input
          type="password"
          value={recyclingMethod}
          onChange={(e) => {
            setRecyclingMethod(e.target.value);
          }}
          placeholder="Entrez le type du recyclage prévu"
          className="border border-green-500 px-2 py-4 rounded-md mt-4"
        />
        
        
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

export default withAuth(addReturns);
