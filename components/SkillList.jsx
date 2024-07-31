function ListSkill() {
    const skill = ["Java", "Html", "Css", "JavaScript", "Project Management"]
    skill.sort();
    const skillItems = skill.map(skill =>
        <li>{skill}</li>
    )

    return (
        <ol>
            {skillItems}
        </ol>
    );
}
export default ListSkill