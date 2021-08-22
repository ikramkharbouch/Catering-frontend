import { useState, React } from "react";
import withAuth from "../../Auth/withAuth";
import dynamic from "next/dynamic";
import Router from 'next/router';
const Navbar = dynamic(() => import("../../../components/NavBar"), {
  ssr: false,
}); //<- set SSr to false

const addReturns = () => {
  const [kitchenOrder, setKitchenOrder] = useState("");
  const [foodWeight, setFoodWeight] = useState("");
  const [plasticWeight, setPlasticWeight] = useState("");
  const [cartonPaperWeight, setcartonPaperWeight] = useState("");
  const [metalWeight, setMetalWeight] = useState("");

  const submitUser = async (e) => {
    e.preventDefault();

    // send data
    // Fetch the api
    const data = {
      kitchenOrder,
      foodWeight,
      plasticWeight,
      cartonPaperWeight,
      metalWeight,
    };
    const res = await fetch("/api/addReturn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.status == 403 || res.status == 500) {
      console.log("Something went wrong");
      Router.reload(window.location.pathname);
    } else if (res.status == 200) {
      console.log("Added successfully");
      Router.reload(window.location.pathname);
    }
  };

  return (
    <>
      <Navbar />
      <div className="mx-auto w-3/4 mt-10">
        <h1 className="text-2xl font-bold">Retouner un produit</h1>
        <form onSubmit={submitUser} className="flex flex-col mx-auto">
          <label className="text-green-500 font-bold text-sm mt-4">
            Id de l'ordre de la cuisine:
          </label>
          <input
            type="text"
            value={kitchenOrder}
            onChange={(e) => {
              setKitchenOrder(e.target.value);
            }}
            placeholder="Entrez l'id de l'ordre de la cuisine"
            className="border border-green-500 px-2 py-4 rounded-md mt-4"
          />
          <label className="text-green-500 font-bold text-sm mt-4">
            Poids des aliments:
          </label>
          <input
            type="number"
            value={foodWeight}
            onChange={(e) => {
              setFoodWeight(e.target.value);
            }}
            placeholder="Entrez le poids des aliments"
            className="border border-green-500 px-2 py-4 rounded-md mt-4"
          />
          <label className="text-green-500 font-bold text-sm mt-4">
            Poids du plastique:
          </label>
          <input
            type="number"
            value={plasticWeight}
            onChange={(e) => {
              setPlasticWeight(e.target.value);
            }}
            placeholder="Entrez le poids du plastique"
            className="border border-green-500 px-2 py-4 rounded-md mt-4"
          />

          <label className="text-green-500 font-bold text-sm mt-4">
            Poids du papier et carton:
          </label>
          <input
            type="number"
            value={cartonPaperWeight}
            onChange={(e) => {
              setcartonPaperWeight(e.target.value);
            }}
            placeholder="Entrez le poids du papier et carton"
            className="border border-green-500 px-2 py-4 rounded-md mt-4"
          />

          <label className="text-green-500 font-bold text-sm mt-4">
            Poids du métal:
          </label>
          <input
            type="number"
            value={metalWeight}
            onChange={(e) => {
              setMetalWeight(e.target.value);
            }}
            placeholder="Entrez le poids du métal"
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
