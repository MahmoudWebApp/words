import { Variants, motion } from "framer-motion";


interface IProps {
  className: string;
  text: string;
}

const AnimatedTextMainTitle: React.FC<IProps> = (props) => {
  const words = Array.from(props.text);
  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: i * 0.12,
       
          },
    }),
  };
  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
        repeat: Infinity,
        repeatDelay: 3,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
       
    
      },
    },
  };

  return (
    <motion.div
      className={props.className}
      variants={container}
      initial="hidden"
      animate="visible"
    //   transition={{ repeatType: "loop", repeatDelay: 1 }}
    >
      {words?.map((word, index) => (
        <motion.span variants={child} key={index}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextMainTitle;
