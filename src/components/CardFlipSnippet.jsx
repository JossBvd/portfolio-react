export default function CardFlipSnippet(props) {


  const handleClick = () => window.open(props.url, "_blank");

  return (
    <>
      <div
        className="col"
        onClick={handleClick}
        onTouchStart={() => this.classList.toggle("hover")}
        data-aos="zoom-in-down" 
      >
        <div className="container">
          <div
            className="front"
            style={{
              backgroundImage: `url(${props.cover})`,
              backgroundSize: "cover",
            }}
          >
            <div className="inner">
              <p>{props.name}</p>
              <span>{props.technos}</span>
            </div>
          </div>
          <div className="back">
            <div className="inner">
              <p>{props.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
