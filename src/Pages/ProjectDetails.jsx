import { motion } from "framer-motion";
import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        fetch("/project.json")
            .then(res => res.json())
            .then(data => {
                const found = data.find(p => p._id === id);
                setProject(found);
            });
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="text-gray-500">Loading...</span>
            </div>
        );
    }

    return (
        <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-10">
            <div className="px-6">

                {/* Back */}
                <div className="flex items-center justify-between py-3 mb-10">
                    <Link to={"/"} className="bg-indigo-600 rounded-sm py-2 px-4 text-white">
                    Back to Home
                    </Link>
                    
                    <h1 className="text-center md:text-6xl font-medium  text-indigo-600">
                        {project.name}
                    </h1>
                    <div></div>
                </div>
                {/* Main Card */}
                <motion.div
                    className="bg-white rounded-3xl shadow-xl overflow-hidden"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Hero Image */}
                    <div className="relative">
                        <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-full object-cover"
                        />

                    </div>

                    {/* Content */}
                    <div className="p-8 space-y-12">

                        {/* Overview */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="md:col-span-2 space-y-4">
                                <h2 className="text-2xl font-semibold text-gray-900">
                                    Project Overview
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    {project.description}
                                </p>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                        Challenges
                                    </h3>
                                    <p className="text-gray-600">
                                        {project.challenges}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                        Future Plans
                                    </h3>
                                    <p className="text-gray-600">
                                        {project.futurePlans}
                                    </p>
                                </div>
                            </div>

                            {/* Info Card */}
                            <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                                <div>
                                    <p className="text-sm text-gray-500">Tech Stack</p>
                                    <p className="font-medium text-gray-800">
                                        {project.techStack}
                                    </p>
                                </div>

                                <div className="flex flex-col gap-3 pt-4">
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        className="px-4 py-3 bg-indigo-600 text-white text-center rounded-xl hover:bg-indigo-700 transition"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        className="px-4 py-3 bg-gray-900 text-white text-center rounded-xl hover:bg-black transition"
                                    >
                                        GitHub Repo
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* 🔥 Other Images Gallery */}
                        {project.otherImage?.length > 0 && (
                            <div>
                                <motion.h2
                                    className="text-2xl font-semibold text-gray-900 mb-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    Project Screenshots
                                </motion.h2>

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                    {project.otherImage.map((img, index) => (
                                        <motion.div
                                            key={index}
                                            className="group rounded-2xl overflow-hidden shadow-lg"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                        >
                                            <img
                                                src={img}
                                                alt={`Screenshot ${index + 1}`}
                                                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectDetails;
