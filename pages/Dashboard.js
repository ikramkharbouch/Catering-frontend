import NavCard from "../components/NavCard";
import withAuth from "./Auth/withAuth";

const Dashboard = () => {
  const HomeComponents = [
    {
      id: 1,
      title: "Gestion des tâches",
      subtitle: "Gérer les utilisateurs",
      image: "home-images/dashboard.jpg",
      btn: "Continuer",
      link: "routes/users",
    },
    {
      id: 2,
      title: "Fiche du patient",
      subtitle: "Gérer les patients",
      image: "home-images/patient.jpg",
      btn: "Continuer",
      link: "routes/patient",
    },
    {
      id: 3,
      title: "Commande des repas",
      subtitle: "Lancer et gérer la commande",
      image: "home-images/repas.jpg",
      btn: "Continuer",
      link: "routes/order",
    },
    {
      id: 4,
      title: "Gestion des approvisionnement",
      subtitle:
        "Gérer les fournisseurs, commander des produits et gérer le stock",
      image: "home-images/stock.jpg",
      btn: "Continuer",
      link: "routes/stock",
    },
    {
      id: 5,
      title: "Liste des traitements",
      subtitle: "Gérer les retours",
      image: "home-images/recycle.jpg",
      btn: "Continuer",
      link: "routes/return",
    },
    {
      id: 6,
      title: "Règle d'hygiène",
      subtitle: "Les meilleurs pratiques",
      image: "home-images/supply.jpg",
      btn: "Continuer",
      link: "hygiene",
    },
  ];

  return (
    <>
      <h1 className="text-center text-5xl font-bold text-green-500 mt-10">
        Dashboard
      </h1>
      {/**/}
      {/* <div className="flex flex-wrap mx-auto flex-col lg:flex-row w-full mt-10 ml-10"> */}
      <div className="grid gap-2 grid-cols-1 mt-10 w-full lg:w-4/5 mx-auto md:grid-cols-1 lg:grid-cols-3">
        {HomeComponents.map((component) => (
          <NavCard
            title={component.title}
            subtitle={component.subtitle}
            image={component.image}
            btn={component.btn}
            id={component.id}
            key={component.id}
            link={component.link}
          />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
