import { useState, useEffect } from "react";
import withAuth from "../../Auth/withAuth";
import Navbar from "../../../components/NavBar";
import SuccessCard from "../../../components/SuccessCard";
import ErrorCard from "../../../components/ErrorCard";

const addProduct = () => {
  const [productref, setProductRef] = useState("");
  const [category, setCategory] = useState("");
  const [unite, setUnite] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [safetyStock, setSafetyStock] = useState("");
  const [actualStock, setActualStock] = useState("");
  const [status, setStatus] = useState("");
  const [expireAt, setExpireAt] = useState("");
  const [addedAt, setAddedAt] = useState("");
  const [yearlyOrders, setYearlyOrders] = useState("");
  const [costOfProcurement, setCostOfProcurement] = useState("");
  const [possessionCost, setPossessionCost] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setError(false);
    setSuccess(false);
  }, []);

  const resetValues = () => {
    setProductRef("");
    setCategory("");
    setUnite("");
    setUnitPrice("");
    setSafetyStock("");
    setActualStock("");
    setStatus("");
    setExpireAt("");
    setAddedAt("");
    setYearlyOrders("");
    setCostOfProcurement("");
    setPossessionCost("");
  };

  const submitInfo = async (e) => {
    e.preventDefault();
    const data = {
      productref,
      category,
      unite,
      unitPrice,
      safetyStock,
      actualStock,
      status,
      expireAt,
      addedAt,
      yearlyOrders,
      costOfProcurement,
      possessionCost,
    };
    const result = await fetch("http://localhost:3005/api/addProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data),
    });

    if (result.status == 200) {
      console.log("Added Successfully");
      resetValues();
      setSuccess(true);
      setTimeout(() => {
        setSuccess(true);
      }, 3000);
    } else if (result.status == 500) {
      console.log("Something went wrong");
      resetValues();
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <>
      <Navbar />
      {error && <ErrorCard error="Something went wrong" />}
      {success && <SuccessCard message="User was added successfully" />}
      <div className="mx-auto w-3/4 mt-10">
        <h1 className="text-2xl font-bold">Ajouter un produit au stock</h1>
        <form onSubmit={submitInfo} className="flex flex-col mx-auto">
          <label className="text-green-500 font-bold text-sm mt-4">
            Référence du produit
          </label>
          <input
            required
            type="text"
            value={productref}
            onChange={(e) => {
              setProductRef(e.target.value);
            }}
            placeholder="Référence du produit"
            className="border border-green-500 px-2 py-4 rounded-md mt-4"
          />
          <label className="text-green-500 font-bold text-sm mt-4">
            Catégorie:
          </label>
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            className="border border-green-500 px-2 py-4 rounded-md mt-4"
          >
            <option value="Equipement">Equipement</option>
            <option value="Aliment">Aliment</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Produit hygienique">Produit hygiénique</option>
            <option value="None">None</option>
          </select>
          <label className="text-green-500 font-bold text-sm mt-4">
            Unité:
          </label>
          <select
            value={unite}
            onChange={(e) => {
              setUnite(e.target.value);
            }}
            className="border border-green-500 px-2 py-4 rounded-md mt-4"
          >
            <option value="Pièce">Pièce</option>
            <option value="Lot">Lot</option>
            <option value="Kg restauration">Kg</option>
          </select>

          <label className="text-green-500 font-bold text-sm mt-4">
            Prix de l'unité:
          </label>
          <input
            required
            type="text"
            value={unitPrice}
            onChange={(e) => {
              setUnitPrice(e.target.value);
            }}
            placeholder="Prix de l'unité"
            className="border border-green-500 px-2 py-4 rounded-md mt-4"
          />

          <label className="text-green-500 font-bold text-sm mt-4">
            Stock de sécurité:
          </label>
          <input
            required
            type="text"
            value={safetyStock}
            onChange={(e) => {
              setSafetyStock(e.target.value);
            }}
            placeholder="Stock de sécurité"
            className="border border-green-500 px-2 py-4 rounded-md mt-4"
          />
          <label className="text-green-500 font-bold text-sm mt-4">
            Stock Actuel:
          </label>
          <input
            required
            type="text"
            value={actualStock}
            onChange={(e) => {
              setActualStock(e.target.value);
            }}
            placeholder="Stock Actuel"
            className="border border-green-500 px-2 py-4 rounded-md mt-4"
          />
          <label className="text-green-500 font-bold text-sm mt-4">
            Statut:
          </label>
          <select
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
            }}
            className="border border-green-500 px-2 py-4 rounded-md mt-4"
          >
            <option value="Épuisé">Épuisé</option>
            <option value="Disponible">Disponible</option>
            <option value="Bientôt épuisé">Bientôt épuisé</option>
            <option value="None">None</option>
          </select>
          <label className="text-green-500 font-bold text-sm mt-4">
            Date d'entrée en stock:
          </label>
          <input
            type="date"
            value={addedAt}
            onChange={(e) => {
              setAddedAt(e.target.value);
            }}
            className="border border-green-500 px-2 py-4 rounded-md mt-4"
          />
          <label className="text-green-500 font-bold text-sm mt-4">
            Date de péremption:
          </label>
          <input
            type="date"
            value={expireAt}
            onChange={(e) => {
              setExpireAt(e.target.value);
            }}
            className="border border-green-500 px-2 py-4 rounded-md mt-4"
          />

          <label className="text-green-500 font-bold text-sm mt-4">
            Les commandes annuelles:
          </label>
          <input
            required
            type="text"
            value={yearlyOrders}
            onChange={(e) => {
              setYearlyOrders(e.target.value);
            }}
            placeholder="Les commandes annuelles"
            className="border border-green-500 px-2 py-4 rounded-md mt-4"
          />

          <label className="text-green-500 font-bold text-sm mt-4">
            Coût d'approvisionnement:
          </label>
          <input
            required
            type="text"
            value={costOfProcurement}
            onChange={(e) => {
              setCostOfProcurement(e.target.value);
            }}
            placeholder="coût d'approvisionnement"
            className="border border-green-500 px-2 py-4 rounded-md mt-4"
          />

          <label className="text-green-500 font-bold text-sm mt-4">
            Coût de possession:
          </label>
          <input
            required
            type="text"
            value={possessionCost}
            onChange={(e) => {
              setPossessionCost(e.target.value);
            }}
            placeholder="Coût de possession"
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

export default withAuth(addProduct);
