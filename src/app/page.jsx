import planets from "../../lib/Planets";
export default function Home() {
  return (
    <div>
      <p>1</p>
      <br />
      <hr />
      <br />
      <div className="square"></div>
      <br />
      <br />
      <p>2</p>
      <br />

      <hr />
      <img
        style={{ width: "100%" }}
        src="https://hmh-react-intro.netlify.app/meme.webp"
        alt="meme"
      />
      <br />
      <p>3</p>
      <br />
      <hr />
      <br />
      <br />
      <h2>Alien Planets</h2>
      <div className="parent">
        {planets.map((planet) => {
          return (
            <div key={planet.id} className="box">
              <span>{planet.emoji}</span>
              <span>{planet.name}</span>
              <span>{planet.content}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
