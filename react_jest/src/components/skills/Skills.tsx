import React, { useEffect, useState } from "react";
import { SkillProps } from "./skill.model";

const Skills = ({ skill }: SkillProps) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoggedIn(!isLoggedIn)
        }, 1000)
    }, [])

    return (
        <div>
            <ul>
                {skill.map((val) => {
                    return <li key={val}>{val}</li>;
                })}
            </ul>

            {isLoggedIn ? <button>Start Learning</button>
                : <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Login</button>
            }

        </div>
    );
};

export default Skills;
