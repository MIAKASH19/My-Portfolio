import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/project.json")
            .then((res) => res.json())
            .then((data) => setProjects(data));
    }, []);

    return (
        <section
            id="projects"
            className="w-full py-20 bg-linear-to-r from-indigo-50 to-purple-50"
        >
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-gray-900 mb-14 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    My Projects
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project._id}
                            className="group bg-white rounded-2xl shadow-lg overflow-hidden"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                            {/* Image */}
                            <div className="overflow-hidden m-3 border rounded-lg">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-[50%] object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col gap-4">
                                <h3 className="text-xl font-semibold text-indigo-600">
                                    {project.name}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <p className="text-gray-500 text-xs font-medium">
                                    Tech Stack: {project.techStack}
                                </p>

                                {/* Buttons */}
                                <div className="flex flex-wrap gap-3 pt-2">

                                    <Link
                                        to={`/projects/${project._id}`}
                                        className="px-4 py-2 w-full flex items-center justify-center text-sm bg-indigo-600 text-white rounded-lg hover:bg-gray-900 transition"
                                    >
                                        Details
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
