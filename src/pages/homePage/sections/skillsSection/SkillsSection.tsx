import "./skillsLanguageList/skillsLanguageList.css";
import "./skillsList/SkillsList.css";
import { skillsItems } from "./skillsList/SkillsList";
import { skillsLanguageItems } from "./skillsLanguageList/SkillsLanguageList";

const Skills = () => {
  return (
    <div className="skillsContainer">
      <h2 className="skillsText">Skills</h2>
      <h3 className="skillsText">Soft Skills</h3>
      <ul className="skillsGrid">
        {skillsItems.map((item) => {
          const Icon = item.icon;
          return (
            <li className="skillsGridItem" key={item.id}>
              <Icon />
              <span className="skillsValue">{item.name}</span>
            </li>
          );
        })}
      </ul>

      <h3 className="skillsText">Language Skills</h3>
      <table className="skillsLanguageTable">
        <thead>
          <tr>
            <th>Language</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          {skillsLanguageItems.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.level}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Skills;
