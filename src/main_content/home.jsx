import bgImage from "../image/bg-image.jpg";
function Home(){
    return <section style={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
    backgroundPosition: "center center !important",
    }}>
        <span></span>
    </section>
}
export default Home
