import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import { services } from "../data";
import ServiceCard from "@/components/ServiceCard";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "@/animation";
const index = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ height: "68vh" }}
    >
      <h4 className="my-3 font-medium">
        Hello, I am a <strong>EL HANCHAOUI Taoufiq</strong> and i am a <b> web & mobile developer</b>. I
        can provide clean code and pixel perfect design. I also make the website
        more & more interactive with web animations. A responsive design makes
        your website accessible to all users, regardless of thier device.
      </h4>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer</h6>
        <motion.div
          className="grid gap-6 lg:grid-cols-2 mt-14"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service, i) => (
            <motion.div
              variants={fadeInUp}
              key={i}
              className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;

// export const getServerSideProps = async(context:GetServerSidePropsContext)=>{

//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   console.log("dataaaaaaaaaaaaaaaaaaa",services);

//   return {
//     props:{
//       services: data.services,
//     }
//   }
// }
// export const getStaticProps = async(context:GetStaticPropsContext)=>{

//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   console.log("dataaaaaaaaaaaaaaaaaaa",services);

//   return {
//     props:{
//       services: data.services,
//     }
//   }
// }
