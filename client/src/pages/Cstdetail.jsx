import React from "react";
import "../styles/cstdetailstyle.css";
import Navbar from "../components/Navbar";
import YoutubeEmbed from "../YoutubeEmbed";

export default function App() {
  return (
    <>
      <Navbar />
      <h1>
        This videos are only to understand Craniosacral Therapy and its
        benefits!!
      </h1>
      <section className="App">
        <div className="video-responsive">
          <br></br>
          <YoutubeEmbed embedId="NOazEIijXTo" />
        </div>
      </section>
      <section className="App">
        <div className="video-responsive">
          <br></br>
          <YoutubeEmbed embedId="m-mLstQUKQ0" />
        </div>
      </section>
    </>
  );
}
