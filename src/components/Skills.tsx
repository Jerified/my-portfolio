import { skillsData } from "@/data/skills";
import { skillsImage } from "@/data/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  const firstHalf = skillsData.slice(0, Math.ceil(skillsData.length / 2));
  const secondHalf = skillsData.slice(Math.ceil(skillsData.length / 2));

  const SkillRow = ({ skills, direction = "left" }: { skills: string[], direction?: "left" | "right" }) => (
    <Marquee
      gradient={false}
      speed={80}
      pauseOnHover={true}
      pauseOnClick={true}
      delay={0}
      play={true}
      direction={direction}
    >
      {skills.map((skill, id) => (
        <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
          key={id}>
          <div className="h-full w-full rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm shadow-none group-hover:border-[#feb47b] transition-all duration-500">
            <div className="flex -translate-y-[1px] justify-center">
              <div className="w-3/4">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#feb47b] to-transparent" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 p-6">
              <div className="h-8 sm:h-10">
                <Image
                  src={skillsImage(skill)?.src}
                  alt={skill}
                  width={40}
                  height={40}
                  className="h-full w-auto rounded-lg"
                />
              </div>
              <p className="text-white text-sm sm:text-lg">
                {skill}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Marquee>
  );

  return (
    <div id="skills" className="relative z-[1]">
      <div className="w-full my-12 flex flex-col gap-6">
        <div className="hidde xl:bloc">
          <SkillRow skills={firstHalf} direction="left" />
          <div className="mt-8">
            <SkillRow skills={secondHalf} direction="right" />
          </div>
        </div>
        {/* <div className="xl:hidden">
          <SkillRow skills={skillsData} />
        </div> */}
      </div>
    </div>
  );
}

export default Skills;
