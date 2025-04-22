interface SkillItem {
    name: string;
}

interface SkillCategory {
    type: string;
    items: SkillItem[];
}



// const Hardware = [ 
//     {name: "ROS"}, 
//     {name : "VHDL"}
// ]


export default function Skill({ category }: { category: SkillCategory }) {
    return (
        <div className="mb-6">
            <h3 className="text-xl font-bold text-Blue3 mb-2">{category.type}</h3>
            <ul className="space-y-1">
                {category.items.map((skill, index) => (
                    <li key={index} className="text-gray-700">
                        {skill.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}