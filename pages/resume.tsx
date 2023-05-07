import Bar from "@/components/Bar";
import { languages, tools } from "@/data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "animation";
const resume = () => {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ height: "68vh" }}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h6 className="my-2 font-semibold">
              Web & Mobile Developer (2019-2021)
            </h6>
            <p className="font-medium">YouCode-Simplon.co</p>
            <h5 className="my-2 font-semibold">
              Specialized technician in IT Development (2016-2018)
            </h5>
            <p className="font-medium">
              Specialized Institute of Applied Technology
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h6 className="my-2 font-semibold">
              Full Stack Developer(Apr 2022 - Oct 2022)
            </h6>
            <p className="font-medium">at Medzey</p>
            <h5 className="my-2 font-semibold">
              INTERNSHIP - Full Stack Developer (Jul 2021 - jan 2022)
            </h5>
            <p className="font-medium">at Devotech</p>
          </div>
        </motion.div>
      </div>
      <div className="grid mt-20 gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar value={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar value={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
