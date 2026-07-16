import ModelPage, { modelMetadata } from "../components/ModelPage"; import { getModelPage } from "@/lib/model-pages";
const slug = "chevrolet-silverado-repair-crown-point-in"; export const metadata = modelMetadata(getModelPage(slug)); export default function Page() { return <ModelPage slug={slug} />; }
