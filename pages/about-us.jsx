import React, { useEffect, useState } from "react";
import general from "../styles/General.module.css";

const AboutUsPage = () => {
  const background = "background_general";
  const containerStyle = {
    backgroundImage: `url(/images/${background}.webp)`,
  };

  return (
    <div className={general.container}>
      <div className={general.about_us_container}>
        <p>
          Humanika is a creative provider, specialising in photography, digital
          imaging, advertising, graphic design, and website design. Our studio,
          based in Bandung, West Java delivers highly functional and engaging
          photography, advertising, website, multimedia, graphic design, print,
          branding and promotion solutions for our clients. With creative
          solution, professionalism, and proportional prices, become our
          commitment for the very best of your business need.
        </p>
        <p>
          Humanika is a company proud to stand behind all of our services and
          commited to your business success. We take great pride providing high
          quality services your business deserves. We employ the latest, state
          of the art technology providing reliable and professional services.
        </p>
        <p>
          The partners at humanise deliver confidence, integrity and inject
          experience into each our clients’ business. Our experienced staff of
          professionals can help with the technological services your business
          reqires today. We take the time to understand your business so we may
          better serve you.
        </p>
        <p>
          We can say that a successful design will bring a great influence for
          thriving business. It is the one we always have within, and turn it
          out to be the essence of every creation.{" "}
        </p>
        <p>
          “Collaborate the elements of photography and design harmoniously and
          the freedom of imagination without lessens the major substance from
          dispatched messages.”
        </p>
        <p>We are proud to say that our services are quick and efficient.</p>
        <p className="font-bold">
          Give us try and make us your one step for all your photography,
          videography, graphic design needs, digital and virtual event.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
