import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from '../card/ExperienceCard';

const Experience = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full px-2 md:px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-16 md:top-24 uppercase tracking-[20px] text-gray-500 font-semibold text-3xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-1 snap-x snap-mandatory scrollbar-hide">
        <ExperienceCard
          title="Front End Developer"
          img="https://scontent-hbe1-1.xx.fbcdn.net/v/t1.6435-9/182832338_544383266948737_2688226793255028088_n.png?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DtYqNrbzJjEAX9gUPO-&_nc_ht=scontent-hbe1-1.xx&oh=00_AT_J7U07Slw_DwmJLhf4x5CWWASyGgojbOV0SzkCdP6uqQ&oe=6374C5C1"
          date="from 8/2022 to 9/2022"
          company="Eskan Al Mansoura"
        />
        <ExperienceCard
          title="Intern Front End Developer"
          img="https://scontent-hbe1-1.xx.fbcdn.net/v/t39.30808-6/279448801_366974388786009_6406692755943124485_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ePlxYB5cMTsAX_X-xPK&tn=x5cohm49mxiOMpBr&_nc_ht=scontent-hbe1-1.xx&oh=00_AT_K632OzSqlDcvE6cFQTMOv3VOBy3WE62cgxjqWKIbfxg&oe=6352EDCF"
          date="from 11/2021 to 5/2022"
          company="Smart Code Academy"
        />
        <ExperienceCard
          title="Intern Front End Developer"
          img="https://scontent-hbe1-1.xx.fbcdn.net/v/t1.6435-9/120258880_102325214972492_8917696042448194969_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=9G-cZRikW04AX9nF4r5&_nc_ht=scontent-hbe1-1.xx&oh=00_AT_F4PdER67_Hhmkz35iLsyxLgVLwHN71aejN_VmdcqTVA&oe=63767890"
          date="from 6/2021 to 8/2021"
          company="Dev enza"
        />
      </div>
    </motion.div>
  );
};

export default Experience;
