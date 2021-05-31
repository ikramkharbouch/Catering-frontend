import { useState } from 'react';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) => {
        e.preventDefault();
        // Fetch the api
    }

    return (
        <div className="mx-auto w-3/4 mt-10">
            <h1 className="text-2xl font-bold">Sign in</h1>
            <form onSubmit={login} className="flex flex-col mx-auto">
                <label className="text-green-500 font-bold text-sm mt-4">Addresse e-mail:</label>
                <input type="text" value={email} onChange={e => {setEmail(e.target.value)}} placeholder="Entrez votre addresse e-mail" className="border border-green-500 px-2 py-4 rounded-md mt-4"/>
                <label className="text-green-500 font-bold text-sm mt-4">Mot de passe:</label>
                <input type="password" value={password} onChange={e => {setPassword(e.target.value)}} placeholder="Entrez votre mot de passe" className="border border-green-500 px-2 py-4 rounded-md mt-4"/>
                <button type="submit" className="bg-green-500 px-2 py-4 rounded-md mt-4 text-white font-bold">Login</button>
            </form>
        </div>
      );
}

export default Login;