import { getTagList } from "@/actions/gettaglist";
export const revalidate = 3600 * 6;

export async function GET() {
    const tagList = await getTagList();

    return Response.json(tagList);
}
