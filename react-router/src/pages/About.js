import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <h1>About</h1>
      <p>
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy mi
        id neque varius, in fringilla quam pellentesque. Proin id urna in sapien
        consequat gravida. Cras convallis, arcu non molestie consectetur, mauris
        est eleifend neque.
      </p>
      <Link to="/contact-us">Contact Us</Link>
    </section>
  );
};

export default About;
