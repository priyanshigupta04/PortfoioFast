import { motion } from "framer-motion";

const ProjectCard = ({
  image,
  alt,
  name,
  description,
  tech,
  buttonColor,
  buttonTextColor,
  buttonGradient,
  buttonHover,
  link,
  overlayColor,
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 },
        hover: { scale: 1.05, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" },
      }}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      className="bg-white/80 backdrop-blur-lg border-2 border-transparent bg-clip-padding rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8"
    >
      <div className="p-6 flex flex-col items-center group relative">
        {/* Project Image with overlay */}
        <div className="w-full h-40 rounded-xl shadow relative overflow-hidden">
          <img
            src={image}
            alt={alt}
            className="w-full h-full object-cover rounded-xl"
          />
          {/* Overlay details, visible on hover */}
          <div
            className={`absolute inset-0 ${overlayColor} bg-opacity-90 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4`}
          >
            <p className="text-xs mb-4 text-center">{description}</p>
          </div>
        </div>
        {/* Project name always visible */}
        <h3 className="text-xl font-semibold mb-2 text-center mt-4">{name}</h3>
        {/* Tech tags and button always visible */}
        <div className="flex flex-wrap justify-center gap-2 mb-4 mt-2">
          {tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 border border-slate-300 text-slate-700 text-sm rounded-md bg-white/70 transition-all duration-200"
            >
              {t}
            </span>
          ))}
        </div>
        <button
          className={`w-full px-4 py-2 border ${buttonColor} ${buttonTextColor} rounded-lg font-medium ${buttonGradient} ${buttonHover} transition-all duration-300 flex items-center justify-center`}
          onClick={() => window.open(link, "_blank")}
        >
          <span className="text-lg mr-2">↗</span>
          View Project
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;