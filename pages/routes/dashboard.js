import NavCard from '../../components/NavCard'

const dashboard = () => {

    const List = [
        {
            id: 1,
            title: 'Utilisateur',
            subtitle: 'Ajouter un utilisateur',
            image: '../home-images/catalogue.jpg',
            btn: 'Continuer',
            link: 'addUser'
        },
        {
            id: 2,
            title: 'Liste des utilisateurs',
            subtitle: 'Lister et gérer les utilisateurs',
            image: '../home-images/utilisateurs.png',
            btn: 'Continuer',
            link: 'getUsers'
        }
    ]
    return ( <> 
        <h1 className="text-center text-5xl font-bold text-green-500 mt-10">Utilisateurs</h1>
            <div className="flex flex-wrap mx-auto flex-col lg:flex-row w-full mt-10">
            {List.map((item) => (
					<NavCard title={item.title} subtitle={item.subtitle} image={item.image} btn={item.btn} id={item.id} key={item.id} link={item.link}/>
				))}
            </div>
    </> );
}
 
export default dashboard;