const CardPortfolio = (props) => {
  const { src, name, children } = props;

  return (
    <div className="card mb-4">
      <img className="card-img" src={src} alt="img" />
      <div className="card-body">
        <h6 className="card-title text-center">{name}</h6>
      </div>
      {children}
    </div>
  );
};

export default CardPortfolio;
