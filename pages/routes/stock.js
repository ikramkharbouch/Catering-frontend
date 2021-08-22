import NavCard from '../../components/NavCard'
import withAuth from '../Auth/withAuth';
import dynamic from 'next/dynamic'
const Navbar = dynamic(() => import("../../components/NavBar"), { ssr: false }) //<- set SSr to false

const stock = () => {

    const List = [
        {
            id: 1,
            title: 'Coordonnées des fournisseurs',
            subtitle: 'Ajouter des fournisseurs',
            image: '../home-images/catalogue.jpg',
            btn: 'Continuer',
            link: 'routes/subroutes/addSupplier'
        },
        {
            id: 2,
            title: 'Fournisseurs',
            subtitle: 'Gérer les fournisseurs',
            image: '../home-images/utilisateurs.png',
            btn: 'Continuer',
            link: 'routes/subroutes/manageSuppliers'
        },
        // {
        //     id: 3,
        //     title: 'Critères des fournisseurs',
        //     subtitle: 'Gérer les critères des fournisseurs',
        //     image: '../home-images/utilisateurs.png',
        //     btn: 'Continuer',
        //     link: 'routes/subroutes/suppliersCriteria'
        // },
        {
            id: 3,
            title: 'Enregistement des produits',
            subtitle: 'Ajouter des produits au stock',
            image: '../home-images/utilisateurs.png',
            btn: 'Continuer',
            link: 'routes/subroutes/addProduct'
        },
        {
            id: 4,
            title: 'Stock',
            subtitle: 'Gérer le stock',
            image: '../home-images/utilisateurs.png',
            btn: 'Continuer',
            link: 'routes/subroutes/manageStock'
        },
        {
            id: 5,
            title: 'Commander des produits',
            subtitle: 'Commander des produits pour le stock',
            image: '../home-images/utilisateurs.png',
            btn: 'Continuer',
            link: 'routes/subroutes/orderProduct'
        },
        {
            id: 6,
            title: 'Produits',
            subtitle: 'Lister et gérer les produits commandées pour le stock',
            image: '../home-images/utilisateurs.png',
            btn: 'Continuer',
            link: 'routes/subroutes/getProducts'
        }
    ]
    return ( <>
    <Navbar />
        <h1 className="text-center text-5xl font-bold text-green-500 mt-10">Stock</h1>
        <div className="grid gap-2 grid-cols-1 mt-10 mx-auto lg:w-4/5 md:grid-cols-1 lg:grid-cols-3">
            {List.map((item) => (
					<NavCard title={item.title} subtitle={item.subtitle} image={item.image} btn={item.btn} id={item.id} key={item.id} link={item.link}/>
				))}
            </div>
    </> );
}
 
export default withAuth(stock);