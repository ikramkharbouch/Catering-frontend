const Card = ({ title, image, text, id }) => {
  return (
    <>
      <div className="card shadow-lg rounded-md" key={id}>
      <img src={image} width="100px" height="100px" className="mx-auto mt-5"/>
      <div className="mt-2">
          <h1 className="text-sm font-bold mx-4">{title}</h1>
          <p className="text-sm mt-2 mx-4">{text}</p>
      </div>
  </div>
    </>
  );
};

export default Card;

// old stuff
