import { useState, React } from "react";
import withAuth from '../../Auth/withAuth';
import dynamic from 'next/dynamic'
const Navbar = dynamic(() => import("../../../components/NavBar"), { ssr: false }) //<- set SSr to false

const orderProduct = () => {

    const [label, setLabel] = useState("");
    const [productName, setProductName] = useState("");
    const [supplier, setSupplier] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [status, setStatus] = useState("");
    const [entryDate, setEntryDate] = useState("");
    const [expireDate, setExpireDate] = useState("");

    const submitInfo = () => {
        // Fetch api here
    }

    const deleteData = () => {
      // delete the data
      console.log("deleted");
    };

    return ( <> 
    <Navbar />
        <div className="mx-auto w-3/4 mt-10">
        <h1 className="text-2xl font-bold">Ajouter un produit au stock</h1>
        <form onSubmit={submitInfo} className="flex flex-col mx-auto">
          <label className="text-green-500 font-bold text-sm mt-4">
            Libellé du produit:
          </label>
          <input
            type="text"
            value={label}
            onChange={(e) => {
              setLabel(e.target.value);
            }}
            placeholder="Libellé du produit"
            className="border border-green-500 px-2 py-4 rounded-md mt-4"
          />
          <label className="text-green-500 font-bold text-sm mt-4">
            Nom du produit:
          </label>
          <input
            type="text"
            value={productName}
            onChange={(e) => {
              setProductName(e.target.value);
            }}
            placeholder="Nom du produit"
            className="border border-green-500 px-2 py-4 rounded-md mt-4"
          />
          <label className="text-green-500 font-bold text-sm mt-4">
            Nom du fournisseur:
          </label>
          <input
            type="text"
            value={supplier}
            onChange={(e) => {
              setSupplier(e.target.value);
            }}
            placeholder="Nom du fournisseur"
            className="border border-green-500 px-2 py-4 rounded-md mt-4"
          />
          <label className="text-green-500 font-bold text-sm mt-4">
            Prix unitaire:
          </label>
          <input
            type="text"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            placeholder="Prix unitaire"
            className="border border-green-500 px-2 py-4 rounded-md mt-4"
          />
          <label className="text-green-500 font-bold text-sm mt-4">
            Quantité:
          </label>
          <input
            type="text"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
            placeholder="Quantité"
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
            <option value="Admin">Statut</option>
            <option value="Aide soignant">Aide soignant</option>
            <option value="Agent restauration">Agent restauration</option>
            <option value="Responsable approvisionnement">
              Responsable approvisionnement
            </option>
            <option value="None">None</option>
          </select>
          <label className="text-green-500 font-bold text-sm mt-4">
            Date d'entrée en stock:
          </label>
          <input
            type="date"
            value={entryDate}
            onChange={(e) => {
              setEntryDate(e.target.value);
            }}
            className="border border-green-500 px-2 py-4 rounded-md mt-4"
          />
          <label className="text-green-500 font-bold text-sm mt-4">
            Date de péremption:
          </label>
          <input
            type="date"
            value={expireDate}
            onChange={(e) => {
              setExpireDate(e.target.value);
            }}
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
    </> );
}
 
export default withAuth(orderProduct);