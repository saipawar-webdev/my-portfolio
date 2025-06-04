import { client } from '../../sanity/lib/client'
import ProjectCard from '@/components/ProjectCard'

export default async function ProjectsPage() {
    const projects = await client.fetch(`*[_type == "project"] | order(_createdAt desc) `)

    return (
        <section className="py-8 space-y-6">
            <h1 className="text-3xl font-bold">Projects</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((p) => (
                    <ProjectCard key={p._id} project={p} />
                ))}
            </div>
        </section>
    )
}
