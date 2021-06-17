import { useState, react } from "react";
import withAuth from '../../Auth/withAuth';

const addProduct = () => {

    const [ref, setRef] = useState('');
    const [category, setCategory] = useState('')
    const [unity, setUnity] = useState('')
    const [designation, setDesignation] = useState('')
    const [securityStock, setSecurityStock] = useState('')
    const [actualStock, setActualStock] = useState('')
    const [status, setStatus] = useState('')
    const [entryDate, setEntryDate] = useState('')
    const [expireDate, setExpireDate] = useState('')

    const submitInfo = () => {

    }


    return ( <> 
        <div className="mx-auto w-3/4 mt-10">
        <h1 className="text-2xl font-bold">Ajouter un produit au stock</h1>
        <form onSubmit={submitInfo} className="flex flex-col mx-auto">
          <label className="text-green-500 font-bold text-sm mt-4">
            Référence du produit
          </label>
          <input
            type="text"
            value={ref}
            onChange={(e) => {
              setRef(e.target.value);
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
            <option value="Admin">Catégorie</option>
            <option value="Aide soignant">Aide soignant</option>
            <option value="Agent restauration">Agent restauration</option>
            <option value="Responsable approvisionnement">
              Responsable approvisionnement
            </option>
            <option value="None">None</option>
          </select>
          <label className="text-green-500 font-bold text-sm mt-4">
            Unité:
          </label>
          <select
            value={unity}
            onChange={(e) => {
              setUnity(e.target.value);
            }}
            className="border border-green-500 px-2 py-4 rounded-md mt-4"
          >
            <option value="Admin">Unité</option>
            <option value="Aide soignant">Aide soignant</option>
            <option value="Agent restauration">Agent restauration</option>
            <option value="Responsable approvisionnement">
              Responsable approvisionnement
            </option>
            <option value="None">None</option>
          </select>
          
          <label className="text-green-500 font-bold text-sm mt-4">
            Désignation:
          </label>
          <input
            type="text"
            value={designation}
            onChange={(e) => {
              setDesignation(e.target.value);
            }}
            placeholder="Désignation"
            className="border border-green-500 px-2 py-4 rounded-md mt-4"
          />
          <label className="text-green-500 font-bold text-sm mt-4">
            Stock de sécurité:
          </label>
          <input
            type="text"
            value={securityStock}
            onChange={(e) => {
              setSecurityStock(e.target.value);
            }}
            placeholder="Stock de sécurité"
            className="border border-green-500 px-2 py-4 rounded-md mt-4"
          />
          <label className="text-green-500 font-bold text-sm mt-4">
            Stock Actuel:
          </label>
          <input
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
 
export default withAuth(addProduct);