import HondaPage, { hondaMetadata } from "../components/HondaPage"; import { getHondaPage } from "@/lib/honda-pages";
const slug="honda-timing-belt-service-crown-point-in"; export const metadata=hondaMetadata(getHondaPage(slug)); export default function Page(){return <HondaPage slug={slug}/>}
