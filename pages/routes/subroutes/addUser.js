import { React, useState } from 'react'
import withAuth from '../../Auth/withAuth';

const addUser = () => {
    const [fullName, setfullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Admin');

    const submitUser = async (e) => {

        // send data
        // Fetch the api
        const data = {
            fullName, email, password, role
        }
        const res = await fetch("http://localhost:4000/v1/users", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
          });
          console.log(res);
    }

    return (
        <div className="mx-auto w-3/4 mt-10">
            <h1 className="text-2xl font-bold">Ajouter un utilisateur</h1>
            <form onSubmit={submitUser} className="flex flex-col mx-auto">
            <label className="text-green-500 font-bold text-sm mt-4">Nom Complet</label>
                <input type="text" value={fullName} onChange={e => {setfullName(e.target.value)}} placeholder="Entrez votre nom complet" className="border border-green-500 px-2 py-4 rounded-md mt-4"/>
                <label className="text-green-500 font-bold text-sm mt-4">Addresse e-mail:</label>
                <input type="text" value={email} onChange={e => {setEmail(e.target.value)}} placeholder="Entrez votre addresse e-mail" className="border border-green-500 px-2 py-4 rounded-md mt-4"/>
                <label className="text-green-500 font-bold text-sm mt-4">Mot de passe:</label>
                <input type="password" value={password} onChange={e => {setPassword(e.target.value)}} placeholder="Entrez votre mot de passe" className="border border-green-500 px-2 py-4 rounded-md mt-4"/>
                <label className="text-green-500 font-bold text-sm mt-4">Role:</label>
                <select value={role} onChange={e => {setRole(e.target.value)}} className="border border-green-500 px-2 py-4 rounded-md mt-4">
                    <option value="Admin">Admin</option>
                    <option value="Aide soignant">Aide soignant</option>
                    <option value="Agent restauration">Agent restauration</option>
                    <option value="Responsable approvisionnement">Responsable approvisionnement</option>
                    <option value="None">None</option>
                </select>
                <button type="submit" className="bg-green-500 px-2 py-4 rounded-md mt-4 text-white font-bold">Enregister</button>
            </form>
        </div>
      );
}
 
export default withAuth(addUser);