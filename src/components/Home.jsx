import home from "../styles/home.module.css"
import Contact from "./Contact"

function Home() {
    return (<>
    <h1 className={home.h1}>Yende Mangum</h1>
    <h2 className={home.h2}> music | web design</h2>
    <Contact></Contact>
    </>)
}

export default Home