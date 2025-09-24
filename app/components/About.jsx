import { assets } from '@/assets/assets';
import Image from 'next/image';
import ToolsList from './ToolsList';
import SkillsList from './SkillsList';

const About = ({ isDarkMode }) => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-poppins">Introduction</h4>
      <h2 className="text-center text-5xl font-poppins">About me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center lg:justify-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.profile_pic}
            alt="User image"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-6 max-w-2xl font-poppins">
            I specialize in solving complex problems, automating processes, and
            creating clean, efficient solutions. I'm passionate about continuous
            learning, delivering great user experiences, and helping teams grow
            through better systems and support.
          </p>
          <h2 className="text-xl font-semibold">Technical Skills</h2>
          <SkillsList isDarkMode={isDarkMode} />
          <h4 className="text- my-12 mb-6 font-poppins dark:text-white/80">
            Tools I use
          </h4>
          <ToolsList isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
};

export default About;
