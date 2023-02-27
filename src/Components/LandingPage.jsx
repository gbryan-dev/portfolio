import React, { useState, useRef, useEffect } from "react";
import { ReactComponent as SvgREACT } from "../IMAGES/react.svg";

const LandingPage = () => {
  useEffect(() => {
    setTimeout(() => {
      new Audio("../Sparkle.mp3").play();
    }, 2000);
  }, []);

  const refSong = useRef();

  const myfunc = () => {
    new Audio("../Sparkle.mp3").play();
  };

  useEffect(() => {
    setTimeout(() => {
      refSong.current.click();
    }, 2000); //miliseconds
  }, []);

  const refName = useRef();
  const refEmail = useRef();
  const refMsg = useRef();
  const subMit = useRef();

  const [isDisabled, setIsDisabled] = useState(false);
  const [open, setOpen] = useState(false);
  const [sentmsg, setSentmsg] = useState("Send Message");
  const [ifsent, setSent] = useState(false);

  const contactSubmit = () => {
    if (
      refName.current.value.length > 0 &&
      refEmail.current.value.includes("@") &&
      refMsg.current.value.length > 0
    )
      return setTimeout(() => {
        subMit.current.disabled = true;
        refName.current.disabled = true;
        refEmail.current.disabled = true;
        refMsg.current.disabled = true;
        setSentmsg("Message Sent");
        setSent(true);
      }, 4000);
  };

  const skills = [
    {
      IMG: "WEBDEV.jpg",
      H3: "01",
      SPAN: "WEB DEVELOPMENT",
      P: "I make your website user friendly for better user satisfactio and interaction.",
    },
    {
      IMG: "WEBDESIGN.png",
      H3: "02",
      SPAN: "WEB DESIGN",
      P: "Give delightful experience to your visitors with a meticulous web design",
    },
    {
      IMG: "COMPFORMAT.jpg",
      H3: "03",
      SPAN: "COMPUTER FORMATTING",
      P: "I provide computer formatting services including Installation of Operating System.",
    },
    {
      IMG: "COMPNET.jpg",
      H3: "04",
      SPAN: "COMPUTER NETWORKING",
      P: "Install computer networks and maintain network services.",
    },
    {
      IMG: "COMPMAIN.jpg",
      H3: "05",
      SPAN: "COMPUTER REPAIR",
      P: "Troubleshoot system failures or bugs and provide solutions to restore functionality.",
    },
    {
      IMG: "ELECTRICIAN.jpg",
      H3: "06",
      SPAN: "ELECTRICIAN",
      P: "We install and maintain all of the electrical and power systems for your home, businesses and buildings.",
    },
  ];

  const works = [
    {
      IMAGE: "WORK5.jpg",
      TITLE: "BBQ PLATE WASHER",
      WHERE: "KALBEEYA RESTAURANT",
      WHEN: "2019",
    },
    {
      IMAGE: "WORK6.jpg",
      TITLE: "SERVICE CREW",
      WHERE: "KALBEEYA RESTAURANT",
      WHEN: "2019",
    },
    {
      IMAGE: "WORK2.jpg",
      TITLE: "WELDER'S HELPER",
      WHERE: "GOLDEN GLOW VILLAGE",
      WHEN: "2020",
    },
    {
      IMAGE: "WORK4.jpg",
      TITLE: "MASON",
      WHERE: "XAVIER ESTATES PHASE1",
      WHEN: "2020",
    },
    {
      IMAGE: "WORK3.jpg",
      TITLE: "HOUSE KEEPING",
      WHERE: "GUSA ROBINSONS",
      WHEN: "2021",
    },
    {
      IMAGE: "WORK1.jpg",
      TITLE: "ELECTRICIAN",
      WHERE: "XAVIER ESTATES PHASE4",
      WHEN: "2021",
    },
    {
      IMAGE: "WORK7.jpg",
      TITLE: "PARCEL DELIVERY",
      WHERE: "...'s AGENCY",
      WHEN: "2022",
    },
    {
      IMAGE: "WORK8.png",
      TITLE: "DATA ENCODER",
      WHERE: "...'s COMPANY",
      WHEN: "2022",
    },
  ];

  const awards = [
    { IMAGE: "3RDPLACER.png", DESC: "REGIONAL 3RD PLACER" },
    { IMAGE: "BESTINWEBDEV.png", DESC: "BEST IN WEB DEV." },
  ];

  return (
    <>
      <button ref={refSong} onClick={myfunc}>
        TEST
      </button>

      <div className="secontainer">
        <div className="s1" id="s1">
          <img src={require("../IMAGES/Banner.png")} />

          <div className="s1text">
            <h3>BRYAN G.</h3>
            <p>
              Discovering My Potential as a Self-Taught Full-Stack Web Developer.
            </p>
          </div>
          <div className="arlo_tm_arrow_wrap bounce anchor">
            <i className="fa-solid fa-angles-down"></i>
          </div>
        </div>

        <div className="s2">
          <div
            id="About"
            style={{
              margin: "0px",
              width: "100%",
              height: "2px",
              background: "transparent",
              opacity: "0",
            }}
          ></div>

          <div className="s2flex">
            <div className="s2Center">
              <div className="s2flexleft">
                <div className="s2leftforimg">
                  <img src={require("../IMAGES/MEE.jpg")} />
                </div>
              </div>

              <div className="s2flexright">
                <h3>ABOUT ME</h3>
                <p>
                Hello World, I'm Bryan Galamgam an aspiring self-taught full-stack developer with a passion for coding and technology. Although I lack formal training, I'm eager to learn and create dynamic web applications from scratch. I'm a self-starter and believe that with dedication and perseverance, I can achieve my goal of becoming a proficient full-stack developer. I'm excited to continue on this rewarding path towards my dreams.
                </p>

                <div className="s2btn">
                  <a href="/Projects" onClick="KissTheRain" id="Skills">
                    MY PROJECTS
                  </a>

                  <a href="#Resume" onClick="KissTheRain">
                    <i className="fa-solid fa-download"></i> RESUME
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="s2text" id="SKERV">
            <h3 id="SKERVH3">My Skills and Services</h3>
          </div>

          <div className="MSSsec">
            {skills?.map((skill, index) => (
              <div className="MSSCON" key={index}>
                <div className="MSSFORIMG">
                  <img src={require(`../IMAGES/${skill.IMG}`)} />
                </div>
                <div className="MSSCENTEREDNUM">
                  <h3>{skill.H3}</h3>
                </div>
                <span>{skill.SPAN}</span>

                <div className="MSSDEFCON">
                  <p>{skill.P}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="s2text">
            <h3 id="SKERVH3">My Work Experience</h3>
          </div>

          <div className="s2flex2">
            {works?.reverse().map((work, index) => (
              <div
                className="WORKSCON"
                style={{ margin: "auto", marginBottom: "20px" }}
                key={index}
              >
                <div className="WORKSIMG">
                  <img src={require(`../IMAGES/${work.IMAGE}`)} />
                </div>
                <div className="worktext">
                  {work.TITLE}
                  <br />
                  {work.WHERE}
                  <br />
                  {work.WHEN}
                </div>
              </div>
            ))}
          </div>

          <div className="s2text">
            <h3 id="SKERVH3">My Awards in Web Dev..</h3>
          </div>

          <div className="s2flex3">
            {awards?.map((award, index) => (
              <div className="AWARDSCON" key={index}>
                <div className="AWARDIMG">
                  <img src={require(`../IMAGES/${award.IMAGE}`)} />
                </div>
                <div className="awardtext">{award.DESC}</div>
              </div>
            ))}
          </div>
        </div>

        <div
          id="Contact"
          style={{
            margin: "0px",
            width: "100%",
            height: "2px",
            background: "transparent",
            opacity: "0",
          }}
        ></div>

        <div className="bottomCON">
          <div className="ContactUS">
            <div className="ContactLeft">
              <span>Contact Me</span>
              <p>
                If you have any inquiries, comments, or simply want to connect
                with me, feel free to reach out. I look forward to hearing from
                you!
              </p>
              <div className="contactsR">
                <div>
                  <i className="fa-solid fa-phone"></i> +63 912 345 6789
                </div>
                <div>
                  <i className="fa-solid fa-envelope"></i> message@gbryan.com
                </div>
                <div>
                  <i className="fa-solid fa-location-dot"></i> CM Recto USTP
                  9000
                </div>
              </div>
              <div className="socMed">
                <div
                  onClick={() =>
                    window.open("https://www.facebook.com/axios.get/", "_blank")
                  }
                >
                  <i className="fa-brands fa-square-facebook"></i>
                </div>
                <div
                  onClick={() =>
                    window.open("https://github.com/gbryan-dev", "_blank")
                  }
                >
                  <i className="fa-brands fa-github"></i>
                </div>
                <div>
                  <i className="fa-brands fa-square-twitter"></i>
                </div>
              </div>
            </div>

            <div className="ContactRight">
              <form
                action="https://script.google.com/macros/s/AKfycbzgaq49mqhofzxbSZWhWDDWkOIHF2e5a2z-Ii__4qBljaptyNv15prHeqIz-qW4I9YXvw/exec"
                className="contactform"
                method="POST"
                target="hiddenFrame"
                autoComplete="off"
              >
                <div style={{ display: "none" }}>
                  <input
                    type="text"
                    name="myDate"
                    required
                    value={new Date().toLocaleDateString().toString()}
                    spellCheck="false"
                    ref={refName}
                    disabled={isDisabled}
                  />
                  <input
                    type="text"
                    name="Time"
                    required
                    value={new Date().toLocaleTimeString()}
                    spellCheck="false"
                    ref={refName}
                    disabled={isDisabled}
                  />
                </div>
                <label>
                  <div>Your Name</div>
                  <input
                    type="text"
                    name="Name"
                    required
                    spellCheck="false"
                    ref={refName}
                    disabled={isDisabled}
                  />
                </label>
                <label>
                  <div>Email</div>
                  <input
                    type="email"
                    name="Email"
                    required
                    spellCheck="false"
                    ref={refEmail}
                    disabled={isDisabled}
                  />
                </label>
                <label>
                  <div>Message</div>
                  <textarea
                    type="text"
                    name="Message"
                    required
                    ref={refMsg}
                    spellCheck="false"
                    disabled={isDisabled}
                  />
                </label>

                <button type="submit" onClick={contactSubmit} ref={subMit}>
                  {ifsent ? (
                    <i className="fa-solid fa-check"></i>
                  ) : (
                    <i className="fa-solid fa-paper-plane"></i>
                  )}
                  &nbsp;&nbsp;{sentmsg}
                </button>
              </form>
            </div>
          </div>

          <div className="bottomFooter">
            <div
              className="div1"
              style={{
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <a href="/Projects" onClick="KissTheRain">
                MY PROJECTS
              </a>

              <a href="#Resume" onClick="KissTheRain">
                <i className="fa-solid fa-download"></i> RESUME
              </a>
            </div>

            <div className="footer_copyright">
              <div>
                Made with &nbsp;
                <SvgREACT
                  style={{ height: "35px", width: "35px" }}
                  className="sol-icon"
                />
                <span className="sl-footer-links__marked-text">
                  &nbsp; by Bryan G
                </span>
              </div>
              Invest in your future
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
