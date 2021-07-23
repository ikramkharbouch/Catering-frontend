import { React, useState } from "react";
import ModalBox from "../../../components/ModalBox";
import Button from "../../../components/Button";
import withAuth from '../../Auth/withAuth';
import Navbar from "../../../components/NavBar";

const addSupplier = () => {
  const [identifier, setIdentifier] = useState("");
  const [society, setSociety] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [specification, setSpecification] = useState("");
  const [modal, setModal] = useState(false);
  const [onssa, setOnssa] = useState(false);
  const [iso, setIso] = useState(false);
  const [quality, setQuality] = useState(false);
  const [delay, setDelay] = useState(false);
  const [conditioning, setConditioning] = useState(false);
  const [temper, setTemper] = useState(false);

  const submitInfo = () => {};

  const handleClick = () => {
    setModal(true);
  };

  const submitCriteria = (e) => {
    e.preventDefault();
    
    // Fetch the api here
  };

  const handleClose = () => {
    setModal(false);
  };

  const Form = () => {
    return (
      <>
        <form onSubmit={submitCriteria}>
          <div className="mt-4">
            <input
              type="checkbox"
              id="onssa"
              name="onssa"
              defaultChecked={onssa}
              onChange={(e) => {
                setOnssa(true);
              }}
            />
            <label className="ml-2">Agrément ONSSA</label>
          </div>
          <div className="mt-4">
            <input
              type="checkbox"
              id="iso"
              name="iso"
              defaultChecked={iso}
              onChange={(e) => {
                setIso(true);
              }}
            />
            <label className="ml-2">Certifications ISO</label>
          </div>
          <div className="mt-4">
            <input
              type="checkbox"
              id="quality"
              name="quality"
              defaultChecked={quality}
              onChange={(e) => {
                setQuality(true);
              }}
            />
            <label className="ml-2">Qualité/Prix</label>
          </div>
          <div className="mt-4">
            <input
              type="checkbox"
              id="delay"
              name="delay"
              defaultChecked={delay}
              onChange={(e) => {
                setDelay(true);
              }}
            />
            <label className="ml-2">Respect des délais</label>
          </div>
          <div className="mt-4">
            <input
              type="checkbox"
              id="conditioning"
              name="conditioning"
              defaultChecked={conditioning}
              onChange={() => {
                setConditioning(true);
              }}
            />
            <label className="ml-2">Conditionnement</label>
          </div>
          <div className="mt-4">
            <input
              type="checkbox"
              id="temper"
              name="temper"
              defaultChecked={temper}
              onChange={(e) => {
                setTemper(true);
              }}
            />
            <label className="ml-2">Respect des températures</label>
          </div>
          <button
            type="submit"
            className="bg-green-500 px-2 py-4 rounded-md mt-4 text-white font-bold"
          >
            Enregister
          </button>
        </form>
      </>
    );
  };

  return (
    <>
    <Navbar />
      {modal && (
        <ModalBox
          classnames="visible"
          modal={modal}
          handleClose={handleClose}
          Form={Form}
        >
          <form onSubmit={submitCriteria}>
            <div className="mt-4">
              <input type="checkbox" id="onssa" name="onssa" />
              <label className="ml-2">Agrément ONSSA</label>
            </div>
            <div className="mt-4">
              <input type="checkbox" id="fruits" name="fruits" />
              <label className="ml-2">Certifications ISO</label>
            </div>
            <div className="mt-4">
              <input type="checkbox" id="fruits" name="fruits" />
              <label className="ml-2">Qualité/Prix</label>
            </div>
            <div className="mt-4">
              <input type="checkbox" id="fruits" name="fruits" />
              <label className="ml-2">Respect des délais</label>
            </div>
            <div className="mt-4">
              <input type="checkbox" id="fruits" name="fruits" />
              <label className="ml-2">Conditionnement</label>
            </div>
            <div className="mt-4">
              <input type="checkbox" id="fruits" name="fruits" />
              <label className="ml-2">Respect des températures</label>
            </div>
          </form>
        </ModalBox>
      )}
      <div className="mx-auto w-3/4 mt-10 z-0">
        <h1 className="text-2xl font-bold">Ajouter un fournisseur</h1>
        <form onSubmit={submitInfo} className="flex flex-col">
          <label className="text-green-500 font-bold text-sm mt-4">
            Identifiant Commercial
          </label>
          <input
            type="text"
            value={identifier}
            onChange={(e) => {
              setIdentifier(e.target.value);
            }}
            placeholder="Entrez votre addresse e-mail"
            className="border border-green-500 px-2 py-4 rounded-md mt-4"
          />
          <label className="text-green-500 font-bold text-sm mt-4">
            Société:
          </label>
          <input
            type="text"
            value={society}
            onChange={(e) => {
              setSociety(e.target.value);
            }}
            placeholder="Nom de la société"
            className="border border-green-500 px-2 py-4 rounded-md mt-4"
          />
          <label className="text-green-500 font-bold text-sm mt-4">
            Nom du représentant:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Nom du représentant"
            className="border border-green-500 px-2 py-4 rounded-md mt-4"
          />
          <label className="text-green-500 font-bold text-sm mt-4">
            Contact:
          </label>
          <input
            type="text"
            value={contact}
            onChange={(e) => {
              setContact(e.target.value);
            }}
            placeholder="Contact"
            className="border border-green-500 px-2 py-4 rounded-md mt-4"
          />
          <label className="text-green-500 font-bold text-sm mt-4">
            Addresse e-mail:
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="addresse e-mail"
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
            Spécification:
          </label>
          <input
            type="text"
            value={specification}
            onChange={(e) => {
              setSpecification(e.target.value);
            }}
            placeholder="Spécification"
            className="border border-green-500 px-2 py-4 rounded-md mt-4"
          />
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mt-5"
              viewBox="0 0 20 20"
              fill="#1F2937"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
            <p
              className="font-regular text-green-500 text-sm mt-5 ml-2"
              onClick={handleClick}
            >
              Add Criteria
            </p>
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

export default withAuth(addSupplier);
