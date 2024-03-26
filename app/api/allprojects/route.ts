import { allProjects } from 'contentlayer/generated';

export async function GET() {
    return Response.json(allProjects);
}
