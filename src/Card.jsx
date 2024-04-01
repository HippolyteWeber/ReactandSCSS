import "./style.scss";
import albumimg from "./albumimg.jpg";
function Card() {
  return (
    <>
      <main className="container">
        <div className="imgContainer">
          <img src={albumimg} width="200" height="200" />
          <div className="textContainer">
            <h1>Alpha Wann</h1>
            <p>Une main lave l'autre</p>
            <p>(2015)</p>
          </div>
        </div>
        <div className="footer">
          <h3>rate this album</h3>
          <ul>
            <li>☆☆☆☆</li>
          </ul>
        </div>
      </main>
    </>
  );
}
export default Card;
