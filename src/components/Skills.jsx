import { skills } from "../data";
import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <section className="background align-element py-20" id="skills">
      <SectionTitle title="Skill Stack" />
      <div className="py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};
export default Skills;
