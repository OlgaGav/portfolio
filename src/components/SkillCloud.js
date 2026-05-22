import { useMemo } from "react";

const MIN_WEIGHT = 5;
const MAX_WEIGHT = 10;

function getFontSize(weight) {
  const t = (weight - MIN_WEIGHT) / (MAX_WEIGHT - MIN_WEIGHT);
  return 0.78 + t * 0.92; // rem: 0.78 → 1.7
}

function getPadding(weight) {
  const t = (weight - MIN_WEIGHT) / (MAX_WEIGHT - MIN_WEIGHT);
  const v = 0.28 + t * 0.32;
  const h = 0.65 + t * 0.55;
  return `${v.toFixed(2)}rem ${h.toFixed(2)}rem`;
}

const SkillCloud = ({ skillGroups }) => {
  const skills = useMemo(() => {
    // interleave groups so categories are visually mixed
    const columns = skillGroups.map((g) =>
      g.skills.map((s) => ({ ...s, badgeClass: g.badgeClass, category: g.title }))
    );
    const result = [];
    const maxLen = Math.max(...columns.map((c) => c.length));
    for (let i = 0; i < maxLen; i++) {
      columns.forEach((col) => { if (col[i]) result.push(col[i]); });
    }
    return result;
  }, [skillGroups]);

  return (
    <div className="skill-cloud" role="list" aria-label="Skills">
      {skills.map((skill) => (
        <span
          key={skill.name}
          role="listitem"
          className={`skill-cloud-bubble ${skill.badgeClass}`}
          style={{
            fontSize: `${getFontSize(skill.weight).toFixed(2)}rem`,
            padding: getPadding(skill.weight),
          }}
          title={`${skill.category} — proficiency ${skill.weight}/10`}
        >
          {skill.name}
        </span>
      ))}
    </div>
  );
};

export default SkillCloud;
