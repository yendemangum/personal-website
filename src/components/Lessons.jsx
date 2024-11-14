import lessons from "../styles/lessons.module.css";
import Contact from "./Contact";

function Lessons() {
  return (
    <>
      <h1 className={lessons.h1}>
        Music lessons for beginner and intermediate students of all ages
      </h1>
      <p className={lessons.p}> Subjects offered:</p>
      <ul className={lessons.ul}>
        <li className={lessons.li}>Classical piano performance</li>
        <li className={lessons.li}>Jazz piano performance</li>
        <li className={lessons.li}>Music theory</li>
      </ul>
      <Contact></Contact>
    </>
  );
}

export default Lessons;
