import { urlFor } from "../sanity/lib/image"
import Image from "next/image"

export default function ProjectCard ({project}) {
    return (
        <div className="bg-white border rounded-md shadow-sm p-4 space-y-2">
            {project.image && (
                <Image src={urlFor(project.image).width(500).height(300).url()} alt={project.title} width={500} height={300} className="w-full h-48 object-cover rounded-md mb-2" />
            )}
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-600">{project.description}</p>
            {project.link && (
            <a href={project.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                View Project
            </a>
            )}
        </div>
    )
}