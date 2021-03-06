import React, { useState } from "react";
import "./body.css";
import { db } from "../../firebase";

export default function Body() {
  const [latqual, setLatqual] = useState("");
  const [currentcompany, setCurrentcompany] = useState("");
  const [designation, setDesignation] = useState("");
  const [pastcompany, setPastcompany] = useState("");
  const [linkurl, setLinkurl] = useState("");
  // const [textabout, setTextabout]=usestate("")
  const [uploadphoto, setUploadphoto] = useState("");

  const handler = () => {
    const data = {
      uploadphoto: uploadphoto,
      latqual: latqual,
      currentcompany: currentcompany,
      designation: designation,
      pastcompany: pastcompany,
      linkurl: linkurl,
      // textabout       :  textabout,
    };
    db.collection("mentee").add(data);
    console.log(data);
  };

  return (
    <>
      <div className="boxmentee">
        <container className="containermentee">
          <div className="row1mentee">
            <div className="headingmentee">
              <p className="textmentee">
                Hey <span className="jeanmentee">Jean,</span> let us get you
                ready!
              </p>
            </div>
            {/* <div className="circe1mentee">
              <img
                className="ellipse1mentee"
                src={process.env.PUBLIC_URL + "/Ellipse 27.png"}
              />
            </div> */}
          </div>

          <div className="row2mentee">
            {/* <div className="circle2mentee">
              <img
                className="ellipse2mentee"
                src={process.env.PUBLIC_URL + "/Ellipse 26.png"}
              />
            </div> */}
            <div className="inputboxmentee">
              <div className="uploadphotomentee">
                <label className="labelmentee">Upload Photo</label>
                <input
                  className="inputfieldmentee"
                  type="file"
                  placeholder="Choose a file to upload"
                  accept="image"
                  // style="display:none"
                  onChange={(e) => setUploadphoto(e.target.vaue)}
                />
              </div>

              <div className="qualificationmentee">
                <label className="labelmentee">Latest Qualifiaction</label>
                <input
                  className="inputfieldmentee"
                  type="text"
                  placeholder="Ex: MBA from IIMB"
                  onChange={(e) => setLatqual(e.target.vaue)}
                />
              </div>

              <div className="companymentee">
                <label className="labelmentee">Current Company</label>
                <input
                  className="inputfieldmentee"
                  type="text"
                  placeholder="Ex: Google"
                  onChange={(e) => setCurrentcompany(e.target.value)}
                />
              </div>

              <div className="designationmentee">
                <label className="labelmentee">Designation</label>
                <input
                  className="inputfieldmentee"
                  type="text"
                  placeholder="Ex: Product Manager"
                  onChange={(e) => setDesignation(e.target.value)}
                />
              </div>

              <div className="pastcompmentee">
                <label className="labelmentee">Add past companies</label>
                <input
                  className="inputfieldmentee"
                  type="text"
                  placeholder="Ex: Ex-Flipkart, Ex-Myntra "
                  onChange={(e) => setPastcompany(e.target.value)}
                />
              </div>

              <div className="linkurlmentee">
                <label className="labelmentee">Linkedin Profile Url</label>
                <input
                  className="inputfieldmentee"
                  type="text"
                  placeholder="Paste your profile url here"
                  onChange={(e) => setLinkurl(e.target.value)}
                />
              </div>

              <div className="aboutmentee">
                <div
                  className="aboutmenteelabel"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <label className="labelmentee">About</label>
                </div>
                <textarea
                  className="textareamentee"
                  row="5"
                  column="10"
                  placeholder="Tell us a bit about yourself!"
                  // onChange={(e)=> setTextabout(e.target.value)}
                ></textarea>
              </div>
            </div>
            {/* <div className="imagementee">
              <img
                className="vectormentee"
                src={process.env.PUBLIC_URL + "/Vector.png"}
              />
            </div> */}
          </div>

          <div className="row3mentee">
            <div className="creatementee">
              <button id="button1mentee" onClick={handler}>
                Create{" "}
              </button>
            </div>

            <div className="cancelmentee">
              <button id="button2mentee">Cancel </button>
            </div>
          </div>
        </container>
      </div>
    </>
  );
}
