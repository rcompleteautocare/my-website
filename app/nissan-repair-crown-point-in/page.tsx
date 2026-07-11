import MakePage, { makeMetadata } from "../components/MakePage"; import { getMakePage } from "@/lib/make-pages";
const slug = "nissan-repair-crown-point-in"; export const metadata = makeMetadata(getMakePage(slug)); export default function Page() { return <MakePage slug={slug} />; }
