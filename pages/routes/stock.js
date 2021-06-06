import NavCard from '../../components/NavCard'

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
        {
            id: 3,
            title: 'Critères des fournisseurs',
            subtitle: 'Gérer les critères des fournisseurs',
            image: '../home-images/utilisateurs.png',
            btn: 'Continuer',
            link: 'routes/subroutes/suppliersCriteria'
        },
        {
            id: 4,
            title: 'Enregistement des produits',
            subtitle: 'Ajouter des produits au stock',
            image: '../home-images/utilisateurs.png',
            btn: 'Continuer',
            link: 'routes/subroutes/addProduct'
        },
        {
            id: 5,
            title: 'Stock',
            subtitle: 'Gérer le stock',
            image: '../home-images/utilisateurs.png',
            btn: 'Continuer',
            link: 'routes/subroutes/manageStock'
        },
        {
            id: 6,
            title: 'Commander des produits',
            subtitle: 'Commander des produits pour le stock',
            image: '../home-images/utilisateurs.png',
            btn: 'Continuer',
            link: 'routes/subroutes/orderProduct'
        },
        {
            id: 7,
            title: 'Produits',
            subtitle: 'Lister et gérer les produits commandées pour le stock',
            image: '../home-images/utilisateurs.png',
            btn: 'Continuer',
            link: 'routes/subroutes/getProducts'
        }
    ]
    return ( <> 
        <h1 className="text-center text-5xl font-bold text-green-500 mt-10">Stock</h1>
            <div className="flex flex-wrap mx-auto flex-col lg:flex-row w-full mt-10">
            {List.map((item) => (
					<NavCard title={item.title} subtitle={item.subtitle} image={item.image} btn={item.btn} id={item.id} key={item.id} link={item.link}/>
				))}
            </div>
    </> );
}
 
export default stock;