import heroSvg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            aspernatur placeat, molestias doloribus repudiandae aperiam! Numquam
            non obcaecati vitae amet!
          </p>
        </div>
      </div>
      <div className="img-container">
        <img src={heroSvg} alt="Hero image" className="img" />
      </div>
    </section>
  );
};
export default Hero;
