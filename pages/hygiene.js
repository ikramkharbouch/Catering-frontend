import Card from '../components/Card'
import withAuth from './Auth/withAuth';
// import Navbar from '../components/NavBar';

import dynamic from 'next/dynamic'
const Navbar = dynamic(() => import("../components/NavBar"), { ssr: false }) //<- set SSr to false

const hygiene = () => {

const info = [
	{
        id: '1',
		title: 'La chaîne du froid entre 0 et 3°Celsius',
		text:
			'doit être contrôlée en permanance et étalonnée à fréquence régulière.',
		image: "images/cold.jpg",
	},
	{
        id: '2',
		title: 'La chaîne du chaud',
		text:
			'un aliment doit être rapidement monté en température supérieure à 63°Celsius et y être maintenu.',
		image: "images/hot.jpg",
	},
	{
        id: '3',
		title: 'Emballage adaptés aux denrées alimentaires',
		text:
			'Ils doivent être faciles à nettoyer et à désinfecter en répondant aux exigences réglementaires.',
		image: "images/foodpack.jpg",
	},
	{
        id: '4',
		title: 'Alimentation en eau',
		text:
			"L'alimentation en eau potable doit être disponible, pour éviter la contamination des denrées alimentaires et un examen bactériologique doit être effectuée avec une fréquence trimestrielle.",
		image: "images/water.jpg",
	},
	{
        id: '5',
		title: 'Hygiène personnelle',
		text:
			'Il est exigé que toute personne travaillant dans une zone de manutention de denrées alimentaires respecte un niveau élevé de propreté personnelle et porte des tenues adaptées (gants, masques, coiffes, tabliers).',
		image: "images/staff.jpg",
	},
	{
        id: '6',
		title: 'Les locaux',
		text:
			"Répondent au principe de la marche en avant, les revêtements de sol, surfaces de manipulation, les murs et les portes doivent être bien entretenus, faciles à nettoyer et, au besoin désinfectés. L'utilisation de matériaux étanches, lisses, non absorbants, lavables et non toxiques est nécessaire.",
		image: "images/local.jpg",
	},
]

    return ( 
        <>
		<Navbar />
		 	<h1 className="text-center text-5xl font-bold text-green-500 mt-10">Règles d'hygiène</h1>
            <div className="grid gap-2 grid-cols-1 mt-10 mx-auto lg:w-4/5 md:grid-cols-1 lg:grid-cols-2">
            {info.map((card) => (
					<Card image={card.image} title={card.title} text={card.text} id={card.id} key={card.id}/>
				))}
            </div>
        </>
     );
}
 
export default withAuth(hygiene);