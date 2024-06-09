import ProjectContent from "@/components/project-content";
import type {Metadata} from "next";
import { getMetadata } from "@/site.config";

export const metadata: Metadata = getMetadata("home")

const Projects = () => {
    return (
        <ProjectContent/>
    )
}


export default Projects;