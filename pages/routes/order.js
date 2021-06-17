import NavCard from '../../components/NavCard'
import withAuth from '../Auth/withAuth';

const order = () => {

    const List = [
        {
            id: 1,
            title: 'Lancer une commande',
            subtitle: 'Lancer les commandes pour les patients',
            image: '../home-images/catalogue.jpg',
            btn: 'Continuer',
            link: 'routes/subroutes/addOrder'
        },
        {
            id: 2,
            title: 'Liste des commandes',
            subtitle: 'Lister et gérer les commades des patients',
            image: '../home-images/utilisateurs.png',
            btn: 'Continuer',
            link: 'routes/subroutes/getOrders'
        }
    ]
    return ( <> 
        <h1 className="text-center text-5xl font-bold text-green-500 mt-10">Ordres</h1>
            {/* <div className="flex flex-wrap mx-auto flex-col lg:flex-row w-full mt-10"> */}
            <div className="grid gap-2 grid-cols-1 mt-10 mx-auto lg:w-4/5 md:grid-cols-1 lg:grid-cols-2">
            {List.map((item) => (
					<NavCard title={item.title} subtitle={item.subtitle} image={item.image} btn={item.btn} id={item.id} key={item.id} link={item.link}/>
				))}
            </div>
    </> );
}
 
export default withAuth(order);