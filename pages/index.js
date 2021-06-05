import { React, useState, useEffect } from 'react'
import Button from '../components/Button'
import Link from 'next/link'
import NavCard from '../components/NavCard'

export default function Home() {

  const HomeComponents = [
    {
      id: 1,      
      title: 'Gestion des tâches',
      subtitle: 'Gérer les utilisateurs',
      image: 'home-images/dashboard.jpg',
      btn: 'Continuer',
      link: 'dashboard'
    },
    {
      id: 2,
      title: 'Fiche du patient',
      subtitle: 'Gérer les patients',
      image: 'home-images/patient.jpg',
      btn: 'Continuer',
      link: 'patient'
    },
    {
      id: 3,
      title: 'Commande des repas',
      subtitle: 'Lancer et gérer la commande',
      image: 'home-images/repas.jpg',
      btn: 'Continuer',
      link: 'meal'
    },
    {
      id: 4,
      title: 'Gestion des approvisionnement',
      subtitle: 'Gérer les fournisseurs, commander des produits et gérer le stock',
      image: 'home-images/stock.jpg',
      btn: 'Continuer',
      link: 'stock'
    },
    {
      id: 5,
      title: 'Liste des traitements',
      subtitle: 'Gérer les retours',
      image: 'home-images/recycle.jpg',
      btn: 'Continuer',
      link: 'recycle'
    },
    {
      id: 6,
      title: 'Règle d\'hygiène',
      subtitle: 'Les meilleurs pratiques',
      image: 'home-images/supply.jpg',
      btn: 'Continuer',
      link: 'supply'
    },
  ]

  const [isAuthenticated, SetIsAuthenticated] = useState(false);

  useEffect(() => {
    // Make a fetch request to the server to check if the user is authenticated or no
    SetIsAuthenticated(true);
  }, [isAuthenticated])


  return (<> {!isAuthenticated && (<>
      <div className="flex flex-col lg:flex-row">
      <img src="Illustration.png" className="w-9/12 m-10 lg:w-6/12 lg:m-20"></img>
      <div className="content mt-2 p-4 text-center lg:mt-20 lg:text-left">
        <h1 className="text-2xl lg:mt-12 font-bold">Manage your catering service in a better way</h1>
        <p className="mt-5 lg:w-4/6">With our platform you can manage all your services, orders, providers and more.</p>
        <div className="mt-5 text-white">
          <Link href="/login"><a><Button name="Login" classnames="mr-0 text-white"/></a></Link>
        </div>
      </div>
      </div>
      </>)}
      {isAuthenticated && <>
            <h1 className="text-center text-2xl font-bold text-green-500 mt-10">Dashboard</h1>
            <div className="flex flex-wrap mx-auto flex-col lg:flex-row w-full mt-10">
            {HomeComponents.map((component) => (
					<NavCard title={component.title} subtitle={component.subtitle} image={component.image} btn={component.btn} id={component.id} key={component.id} link={component.link}/>
				))}
            </div>
        </>}
      </>
    
  )
}
