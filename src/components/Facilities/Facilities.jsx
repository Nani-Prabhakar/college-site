import "./Facilities.css";

const Facilities = () => {
  return (
    <section className="facilities">
      <h1>Our Facilities</h1>
      <p>Immerse yourself in a world of exceptional amenities and services.</p>
      <div className="row">
        <div className="facilities-col">
          <img src="/images/library.png" alt="" />
          <h3>World Class Library</h3>
          <p>
            Dive into a sea of knowledge with our state-of-the-art library. An
            oasis for intellectual exploration.
          </p>
        </div>
        <div className="facilities-col">
          <img src="/infinimove/classroom.JPG" alt="" />
          <h3>Beautiful Class Rooms</h3>
          <p>
            Unleash your energy on our expansive playground. A haven for sports
            enthusiasts and active minds.
          </p>
        </div>
        <div className="facilities-col">
          <img src="/infinimove/lab.JPG" alt="" />
          <h3>KES Labs</h3>
          <p>
            
            Our college lab is a collaborative, 
            innovation-driven space equipped with advanced technology, 
            empowering students to explore, experiment, and create solutions for real-world challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
