import type { Metadata } from "next";
import CityPage, { type CityPageData } from "@/app/components/CityPage";

const TITLE = "Auto Repair Near Dyer, IN | R Complete Auto Care";
const DESCRIPTION =
  "Auto repair near Dyer, IN. R Complete Auto Care in Crown Point is about 25 minutes via US-30. Diagnostic-first, extended warranties accepted. (219) 262-2711.";
const URL = "https://www.rcompleteautocare.com/auto-repair-dyer-in";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "R Complete Auto Care",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

const DATA: CityPageData = {
  city: "Dyer",
  path: "/auto-repair-dyer-in",
  driveTime: "About 25 minutes",
  dateModified: "2026-11-19",
  tldr:
    "R Complete Auto Care is a diagnostic-first auto repair shop at 1305 E Summit St in Crown Point, about 25 minutes from Dyer by way of US-30. We test and confirm the cause before recommending a repair, give you a written estimate first, and work with most extended warranty plans.",
  introHeading: "Diagnostic-First Auto Repair for Dyer Drivers",
  intro: [
    "Dyer sits on the Illinois state line at the west end of Lake County, and most trips out of town start on US-30. Joliet Street carries the old Lincoln Highway through the middle of town, past Franciscan Health Dyer and on toward Schererville. It is also the most direct way to reach our shop in Crown Point, roughly 14 miles to the southeast.",
    "That drive is worth making when you want an answer rather than a guess. Before we recommend any part, we verify the complaint, scan every module, and test the suspect system. You get the findings and a clear estimate, and nothing is repaired until you approve it.",
    "Driving in and around Dyer is mostly short trips and stoplights: Calumet Avenue and Sheffield Avenue north toward Munster, US-30 east to the Schererville shopping corridor, and the rail crossings that hold traffic in town. Short, stop-and-go trips are hard on brakes and batteries, and an engine that rarely reaches full temperature is harder on its oil. If your routine looks like that, tell us when you call so we know what to check.",
    "State-line commuters see the opposite pattern, with long highway stretches toward the Illinois suburbs or Chicago. Sustained highway miles put the wear on tires, wheel bearings, cooling systems and transmission fluid instead. Either way, the first step is the same: find out what is actually wrong.",
  ],
  routeHeading: "Getting Here From Dyer",
  route: [
    "Take US-30 (Joliet Street) east out of Dyer and through Schererville.",
    "Continue on US-30 into Merrillville and turn south on Taft Street (SR-55).",
    "Follow SR-55 south into Crown Point, where it becomes Main Street.",
    "Turn east on Summit Street. We are at 1305 E Summit St.",
    "Alternate when US-30 is backed up: take US-41 south from Schererville through St. John, then 109th Avenue east into Crown Point.",
  ],
  faqs: [
    {
      q: "How far is R Complete Auto Care from Dyer, IN?",
      a: "About 14 miles, or roughly 25 minutes in normal traffic. Most Dyer drivers take US-30 east to Taft Street (SR-55) and follow it south into Crown Point. The shop is at 1305 E Summit St, Crown Point, IN 46307.",
    },
    {
      q: "Why would I drive from Dyer to Crown Point for auto repair?",
      a: "For the diagnosis. We confirm the cause of a problem with testing before recommending parts, explain what we found, and give you an estimate to approve before any work starts. For a warning light that keeps coming back or a repair quote you are not sure about, a verified diagnosis is worth a 25-minute drive.",
    },
    {
      q: "My car is registered in Illinois. Can you still work on it?",
      a: "Yes. Dyer sits on the state line and plenty of vehicles here carry Illinois plates. Where a vehicle is registered does not change how it is diagnosed or repaired. If you have an extended warranty or service contract, bring the contract with you. Coverage depends on the contract, not the state.",
    },
    {
      q: "Most of my driving is short trips around Dyer. What should I watch for?",
      a: "Short trips with a lot of stops wear brakes faster and give the battery little time to recharge. An engine that does not fully warm up also collects moisture and fuel in the oil. Watch for slow cranking, a brake pedal that feels different, or an oil-change reminder that arrives sooner than you expect, and mention your driving pattern when you call.",
    },
    {
      q: "Can I get a same-day diagnosis if I drive in from Dyer?",
      a: "Same-day diagnostics are often available, depending on the schedule and how involved the problem is. Call (219) 262-2711 before you leave Dyer so we can give you a realistic arrival time and tell you whether to plan on waiting or dropping the vehicle off.",
    },
    {
      q: "Do you accept extended warranties for Dyer customers?",
      a: "Yes. We work with most extended warranty and vehicle service contract providers. Call with your provider name and contract details before you bring the vehicle in. We document the diagnosis and deal with the claims administrator, and you approve any amount that is not covered before work begins.",
    },
  ],
  ctaLine: "A verified diagnosis and a clear estimate before any repair.",
};

export default function Dyer() {
  return <CityPage data={DATA} />;
}
