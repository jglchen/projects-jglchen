import Image from "next/image";
import { Skill } from "@/types/skill";
import { motion } from "framer-motion";

const SingleSkill = ({ skill, selectSkill, skillSelected }: { skill: Skill; selectSkill: (s: string)  => void; skillSelected: string;}) => {
    const { srno, image, id } = skill;

    return (
        <>
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },
    
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: srno*0.05 }}
            viewport={{ once: true }}
            className="animate_top bg-white rounded-lg shadow-solid-8"
          >
            <div onClick={() => selectSkill(id)} className={`block relative aspect-square cursor-pointer opacity-100 transition-all duration-300 hover:opacity-65 bg-white rounded-lg ${skillSelected === id ? "border-4 border-[#DC2626]": ""}`}> 
              <Image
                className="p-2"
                src={image} 
                alt={id} 
                fill 
                />
            </div>
          </motion.div>
        </>
      );

}  


export default SingleSkill;
