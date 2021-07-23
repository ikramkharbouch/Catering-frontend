import withAuth from "../Auth/withAuth";
import NavCard from "../../components/NavCard";
import Navbar from "../../components/NavBar";

const recycle = ({ Returns }) => {
  const List = [
    {
      id: 1,
      title: "Retours",
      subtitle: "Retouner un produit",
      image: "../home-images/catalogue.jpg",
      btn: "Continuer",
      link: "routes/subroutes/addReturns",
    },
    {
      id: 2,
      title: "Liste des retours",
      subtitle: "Lister et gérer les retours",
      image: "../home-images/utilisateurs.png",
      btn: "Continuer",
      link: "routes/subroutes/getReturns",
    },
  ];
  return (
    <>
    <Navbar />
      <h1 className="text-center text-5xl font-bold text-green-500 mt-10">
        Recyclage
      </h1>
      {/* <div className="flex flex-wrap mx-auto flex-col lg:flex-row w-full mt-10"> */}
      <div className="grid gap-2 grid-cols-1 mt-10 mx-auto lg:w-4/5 md:grid-cols-1 lg:grid-cols-2">
        {List.map((item) => (
          <NavCard
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            btn={item.btn}
            id={item.id}
            key={item.id}
            link={item.link}
          />
        ))}
      </div>
    </>
  );
};

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("http://localhost:3000/Returns");
  const Returns = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      Returns,
    },
  };
}

export default withAuth(recycle);
