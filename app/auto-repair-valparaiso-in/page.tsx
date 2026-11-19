import type { Metadata } from "next";
import CityPage, { type CityPageData } from "@/app/components/CityPage";

const TITLE = "Auto Repair Near Valparaiso, IN | R Complete Auto Care";
const DESCRIPTION =
  "Auto repair near Valparaiso, IN. R Complete Auto Care in Crown Point is about 35 minutes via US-30 and I-65. Diagnostic-first shop. Call (219) 262-2711.";
const URL = "https://www.rcompleteautocare.com/auto-repair-valparaiso-in";

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
  city: "Valparaiso",
  path: "/auto-repair-valparaiso-in",
  driveTime: "About 35 minutes",
  dateModified: "2026-11-19",
  tldr:
    "R Complete Auto Care serves Valparaiso drivers from 1305 E Summit St in Crown Point, about 35 minutes west on US-30 and I-65. We are a diagnostic-first shop: the cause is tested and confirmed, and you approve a written estimate, before any repair begins.",
  introHeading: "Auto Repair for Valparaiso and Porter County Drivers",
  intro: [
    "Valparaiso is the Porter County seat and the eastern edge of the area we serve. US-30 runs along the south side of town, SR-49 carries traffic north toward Chesterton and the toll road, and Lincolnway runs through downtown past the courthouse square and toward Valparaiso University. From there, Crown Point is a straight run west on US-30, about 22 miles.",
    "Most Valparaiso drivers have closer options for an oil change, and that is fine. Where the trip pays off is a problem that needs real diagnostic work: an intermittent electrical fault, a check engine light that returns after a repair, a transmission concern, or an extended warranty claim that needs proper documentation. We verify the complaint, test the system and confirm the failed part before recommending anything.",
    "A lot of Valparaiso mileage is highway mileage, whether it is the US-30 commute toward Merrillville, SR-49 to the Indiana Toll Road, or the longer haul toward Chicago. Steady highway driving is easy on brakes but adds up quickly on tires, wheel bearings, transmission fluid and cooling systems, and service intervals arrive sooner than the calendar suggests. Students and others who mostly drive short hops around town see the reverse: weak batteries, brake wear and oil that never gets fully hot.",
    "Lake-effect snow is part of winter here, and so is road salt. Cold starts expose a tired battery or starter, and salt works on brake lines, exhaust and suspension hardware over time. If a vehicle is hard to start, slow to warm up, or noisy over bumps, we test for the actual cause instead of replacing parts until it stops.",
  ],
  routeHeading: "Getting Here From Valparaiso",
  route: [
    "Take US-30 west out of Valparaiso, past Wheeler and the south side of Hobart.",
    "At Merrillville, take I-65 south toward Indianapolis.",
    "Exit at 109th Avenue (exit 249) and head west into Crown Point.",
    "Continue to Summit Street. We are at 1305 E Summit St; let your navigation handle the last few turns.",
    "The US-30 and I-65 interchange is the slow spot at rush hour. Allow a few extra minutes in the late afternoon.",
  ],
  faqs: [
    {
      q: "How far is R Complete Auto Care from Valparaiso?",
      a: "About 22 miles, or roughly 35 minutes from downtown Valparaiso. Take US-30 west to I-65 south, then the 109th Avenue exit (exit 249) into Crown Point. The shop is at 1305 E Summit St, Crown Point, IN 46307.",
    },
    {
      q: "Do you work on vehicles from Porter County, or only Lake County?",
      a: "Both. Valparaiso is part of our service area even though the shop is across the county line in Crown Point. County of registration makes no difference to diagnosis, repair or extended warranty work.",
    },
    {
      q: "What kinds of problems are worth the drive from Valparaiso?",
      a: "Problems where the diagnosis is the hard part: intermittent electrical faults, a check engine light that came back after a previous repair, transmission and drivability concerns, no-start conditions, and extended warranty claims that need a documented cause of failure. For those, a confirmed diagnosis saves more than the drive costs.",
    },
    {
      q: "I'm a Valparaiso University student with an out-of-state car. Can you help?",
      a: "Yes. We service domestic, Asian and European vehicles regardless of where they are registered. If a parent or someone else is paying, tell us and we can go over the findings and the estimate with them by phone before any work is approved.",
    },
    {
      q: "Will a check engine light fail the emissions test in Porter County?",
      a: "For most 1996 and newer vehicles, yes. Porter County vehicles are subject to Indiana's emissions testing program, and the on-board diagnostic test fails when the check engine light is commanded on. Testing is done at a state testing station. We diagnose and repair the underlying cause so the light stays off.",
    },
    {
      q: "My car won't start in Valparaiso. Can I have it towed to you?",
      a: "Yes. Have it towed to 1305 E Summit St in Crown Point and call (219) 262-2711 first so we know it is coming and can tell you where it will be dropped. We test the battery, starter, fuel, ignition and security systems as needed to find why it will not start, then call you with the findings and an estimate.",
    },
  ],
  ctaLine: "Confirmed diagnosis first. No repair without your approval.",
};

export default function Valparaiso() {
  return <CityPage data={DATA} />;
}
