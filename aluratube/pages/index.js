import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/Timeline";

function HomePage() {
  const estiloDaHomePage = {
    // backgroundColor: "red" 
    };

 // console.log(config.playlists);


  return (
  <>
  <CSSReset/>
  <div style={estiloDaHomePage}>
    <Menu/>
    <Header/>
    <Timeline playlists={config.playlists}/>
  </div>
  </>
  );
}

export default HomePage


/* function Menu() {
  return (
    <div>
      Menu
    </div>
  )
} */


const StyledHeader = styled.div`
    img {
      width:80px;
      height: 80px;
      border-radius: 50%;
    }
    .user-info{
      margin-top: 50px;
      display: flex;
      align-items: center;
      width: 100%;
      padding: 16px 32px;
      gap: 16px
    }
  `;
function Header() {
  return (
    <StyledHeader>
      {/* <img src="banner" /> */}

      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <h2>{config.name}</h2>
        <p>{config.job}</p>
      </section>
    </StyledHeader>
  )
}

function Timeline(propriedades) {
  //console.log("Dentro do componente", propriedades.playlists);
  const playlistNames = Object.keys(propriedades.playlists);

  return (
    <StyledTimeline>
      {playlistNames.map((playlistNames) => {
        const videos = propriedades.playlists[playlistNames];
        console.log(playlistNames)
        console.log(videos);
        return (
          <section>
            <h2>{playlistNames}</h2>
            <div>
              {videos.map((video) => {
          return(
            <a href={video.url}>
              <img src={video.thumb}/>
              <span>
                {video.title}
              </span>
            </a>
          )
        })}
            </div>
          </section>
        )

      })}
    </StyledTimeline>
  )
}