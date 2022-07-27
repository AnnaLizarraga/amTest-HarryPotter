import "../Sass/_CardsOfCharacters.scss";
import BookmarkOutline from "../Assets/icons/BookMark-G-Outine.svg";

export default function CardsOfCharacters({ charactersData }) {

  return (
    <section className="mainCharacters">
      {charactersData &&
        charactersData.map((characterData) => (
          <div key={characterData.name} className="card">

            <section className={(characterData.house ? characterData.house : "noneHouse")}>
              
                 <img src={characterData.image} className="card__character-img__image" alt="Howarts Character
                 "/>
        
            </section>  

            <section 
            className={(characterData.alive === true ? "card__character-data --alive" : "card__character-data --finado")}>
              <section className="card__character-data__stats">
                <div className="card__character-data__stats__stat">
                  <span>{characterData.alive === true ? 'VIVO' : 'FINADO '}</span> / 
                  <span>{characterData.hogwartsStudent === true ? " ESTUDIANTE" : " STAFF"}</span>
                </div>
                <img src={BookmarkOutline} className="card__character-data__stats__bookmark" alt="Bookmark"/>

         
              </section> 

              <p className="card__character-data__name">{characterData.name}</p>

              <section className="card__character-data__info ">
                <div>
                  <span className="card__character-data__info__rule--bold">Cumpleaños: </span>
                  <span className="card__character-data__info__rule--regular">{characterData.dateOfBirth}</span>
                </div> 
                <div>
                  <span className="card__character-data__info__rule--bold">Género: </span>
                  <span className="card__character-data__info__rule--regular">{characterData.gender}</span>
                </div> 
                <div>
                  <span className="card__character-data__info__rule--bold">Color de ojos: </span>
                  <span className="card__character-data__info__rule--regular">{characterData.eyeColour}</span>
                </div> 
                <div>
                  <span className="card__character-data__info__rule--bold">Color de pelo: </span>
                  <span className="card__character-data__info__rule--regular">{characterData.hairColour}</span>
                </div> 
              </section>

            </section>
          </div>
        ))}
    </section>
  );
}
