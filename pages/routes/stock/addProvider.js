import { React, useState } from "react";
import ModalBox from "../../../components/ModalBox";
import withAuth from "../../Auth/withAuth";
import dynamic from "next/dynamic";
import SuccessCard from "../../../components/SuccessCard";
import ErrorCard from "../../../components/ErrorCard";
const Navbar = dynamic(() => import("../../../components/NavBar"), {
  ssr: false,
}); //<- set SSr to false

const addSupplier = () => {
  const [apeCode, setApeCode] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [representativeName, setRepresentativeName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("Aliments");
  const [specialty, setSpecialty] = useState("");
  const [modal, setModal] = useState(false);
  const [onssa, setOnssa] = useState(false);
  const [iso, setIso] = useState(false);
  const [price, setPrice] = useState(false);
  const [delay, setDelay] = useState(false);
  const [conditions, setConditions] = useState(false);
  const [temperatures, setTemperatures] = useState(false);

  // error and success msgs
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const submitInfo = async (e) => {
    e.preventDefault();

    // Fetch the api here
    // send data
    // Fetch the api
    const data = {
      apeCode,
      companyName,
      representativeName,
      contact,
      email,
      category,
      specialty,
      onssa,
      iso,
      price,
      delay,
      conditions,
      temperatures,
    };
    const res = await fetch("/api/addProvider", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.status == 403 || res.status == 500) {
      console.log("Something went wrong");
      window.scrollTo(0, 0);
      resetValues();
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else if (res.status == 200) {
      console.log("Added successfully");
      window.scrollTo(0, 0);
      resetValues();
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
  };

  const handleClick = () => {
    setModal(true);
  };

  const submitCriteria = async (e) => {
    e.preventDefault();
    setModal(false);
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
              id="price"
              name="price"
              defaultChecked={price}
              onChange={(e) => {
                setPrice(true);
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
              id="conditions"
              name="conditions"
              defaultChecked={conditions}
              onChange={() => {
                setConditions(true);
              }}
            />
            <label className="ml-2">Conditionnement</label>
          </div>
          <div className="mt-4">
            <input
              type="checkbox"
              id="temperatures"
              name="temperatures"
              defaultChecked={temperatures}
              onChange={(e) => {
                setTemperatures(true);
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
      {success && <SuccessCard message="Provider was added successfully"/>}
      {error && <ErrorCard error="Something went wrong"/>}
      {modal && (
        <ModalBox
          classnames="visible"
          modal={modal}
          handleClose={handleClose}
          Form={Form}
        ></ModalBox>
      )}
      <div className="mx-auto w-3/4 mt-10 z-0">
        <h1 className="text-2xl font-bold">Ajouter un fournisseur</h1>
        <form onSubmit={submitInfo} className="flex flex-col">
          <label className="text-green-500 font-bold text-sm mt-4">
            Code APE
          </label>
          <input
            type="text"
            value={apeCode}
            onChange={(e) => {
              setApeCode(e.target.value);
            }}
            placeholder="Code APE"
            className="border border-green-500 px-2 py-4 rounded-md mt-4"
          />
          <label className="text-green-500 font-bold text-sm mt-4">
            Société:
          </label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => {
              setCompanyName(e.target.value);
            }}
            placeholder="Nom de la société"
            className="border border-green-500 px-2 py-4 rounded-md mt-4"
          />
          <label className="text-green-500 font-bold text-sm mt-4">
            Nom du représentant:
          </label>
          <input
            type="text"
            value={representativeName}
            onChange={(e) => {
              setRepresentativeName(e.target.value);
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
            <option value="Aliments">Aliments</option>
            <option value="Equipement">Equipement</option>
          </select>
          <label className="text-green-500 font-bold text-sm mt-4">
            Spécification:
          </label>
          <input
            type="text"
            value={specialty}
            onChange={(e) => {
              setSpecialty(e.target.value);
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
