import { FaJava, FaHtml5, FaCss3Alt, FaPython, FaReact } from "react-icons/fa";
import { SiApachegroovy, SiCplusplus, SiJavascript, SiC, SiMysql, SiMongodb, SiPostgresql, SiFlask, SiSpringboot, SiFastapi, SiExpress, SiTailwindcss } from "react-icons/si";

const languages = [
{
    name: "Java",
    icon: FaJava,
},
{
    name: "HTML",
    icon: FaHtml5,
}, 
{
    name: "CSS",
    icon: FaCss3Alt,
},
{
    name: "Python",
    icon: FaPython,
},
{
    name: "Groovy",
    icon: SiApachegroovy,
}, 
{
    name: "C++", 
    icon: SiCplusplus,
},
{
    name: "JavaScript",
    icon: SiJavascript,
},
{
    name: "C",
    icon: SiC,
}
];

export const programmingLanguages = {
    item: languages,
};

const DBMS = [
{
    name: "MySql",
    icon: SiMysql,
},
{
    name: "MongoDB",
    icon: SiMongodb,
},
{
    name: "PostgreSQL",
    icon: SiPostgresql,
}
];

export const databases = {
    item: DBMS,
};

const framework = [
{
    name: "React",
    icon: FaReact,
},
{
    name: "Flask",
    icon: SiFlask,
},
{
    name: "Springboot",
    icon: SiSpringboot,
},
{
    name: "FastAPI",
    icon: SiFastapi,
},
{
    name: "Express",
    icon: SiExpress,
},
{
    name: "Tailwind CSS",
    icon: SiTailwindcss,
},
];

export const frameworks = {
    item: framework,
}