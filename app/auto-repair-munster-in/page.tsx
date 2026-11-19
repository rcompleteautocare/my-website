import type { Metadata } from "next";
import CityPage, { type CityPageData } from "@/app/components/CityPage";

const TITLE = "Auto Repair Near Munster, IN | R Complete Auto Care";
const DESCRIPTION =
  "Auto repair near Munster, IN. R Complete Auto Care in Crown Point is about 30 minutes via I-65. Diagnostic-first, extended warranties accepted. (219) 262-2711.";
const URL = "https://www.rcompleteautocare.com/auto-repair-munster-in";

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
  city: "Munster",
  path: "/auto-repair-munster-in",
  driveTime: "About 30 minutes",
  dateModified: "2026-11-19",
  tldr:
    "For Munster drivers who want a second opinion or a real diagnosis, R Complete Auto Care is about 30 minutes away at 1305 E Summit St in Crown Point. We confirm the cause with testing, explain it in plain language, and give you an estimate to approve before any repair.",
  introHeading: "A Diagnostic-First Shop Within Reach of Munster",
  intro: [
    "Munster is the northwest corner of our service area, tucked against the Illinois line with the Borman Expressway (I-80/94) along its north edge. Calumet Avenue runs the length of town, past Community Hospital and down toward Dyer, and Ridge Road and 45th Street carry the east-west traffic. Our shop is in Crown Point, about 18 miles to the southeast.",
    "We are not the closest shop to Munster, and we will not pretend otherwise. The reason to make the drive is the way we work. A trouble code or a symptom is a starting point, not a diagnosis, so we test the system, confirm what failed and why, and show you the findings before recommending anything. That matters most when you have been quoted a large repair, such as a transmission, an engine or a major electrical fault, and want it verified first.",
    "Munster driving has two very different sides. In town it is short trips with frequent stops along Calumet Avenue and Ridge Road, which wears brakes and works a battery hard. On the Borman it is heavy truck traffic, sudden slowdowns and winter road salt, which is rough on cooling systems, brake lines and the underside of the vehicle. Northwest Indiana's freeze-thaw cycles add potholes that take their toll on tires, alignment and suspension parts.",
    "If the vehicle is not safe to drive that far, do not risk it. A flashing check engine light, overheating, a low oil pressure warning or a brake problem means it should be towed rather than driven. Call us first and we will tell you what we would do.",
  ],
  routeHeading: "Getting Here From Munster",
  route: [
    "From Calumet Avenue, get on I-80/94 (the Borman Expressway) heading east.",
    "Take I-65 south toward Indianapolis.",
    "Exit at 109th Avenue (exit 249) and head west into Crown Point.",
    "Continue to Summit Street. We are at 1305 E Summit St; let your navigation handle the last few turns.",
    "Prefer to stay off the interstate? Take US-41 south through Highland, Schererville and St. John, then 109th Avenue east into Crown Point. Allow a little longer.",
  ],
  faqs: [
    {
      q: "How long is the drive from Munster to your Crown Point shop?",
      a: "About 30 minutes in normal traffic, around 18 miles. The usual route is the Borman Expressway (I-80/94) east to I-65 south, then the 109th Avenue exit into Crown Point. Borman traffic varies a lot by time of day, so allow extra time at rush hour.",
    },
    {
      q: "I was quoted a big repair at a shop near Munster. Can you give a second opinion?",
      a: "Yes. Bring the estimate and any codes or test results you were given. We run our own diagnosis instead of relying on someone else's conclusion, then tell you whether we reach the same result and what the repair options are. You decide what to do with that information.",
    },
    {
      q: "Is it safe to drive my car from Munster to Crown Point if it has a problem?",
      a: "It depends on the symptom. A steady check engine light with the car running normally is usually fine for a 30-minute drive. A flashing check engine light, overheating, a red oil pressure warning, grinding brakes or a slipping transmission is not, and the vehicle should be towed. Call (219) 262-2711 and describe what it is doing before you set out.",
    },
    {
      q: "Does all the road salt on the Borman cause problems you can check for?",
      a: "Road salt speeds up corrosion on brake lines, fuel lines, exhaust parts, suspension fasteners and electrical connectors under the vehicle. We can inspect the underside while the vehicle is on the lift and point out what needs attention now and what can be watched. Rinsing the undercarriage during winter helps slow it down.",
    },
    {
      q: "Will a check engine light keep my car from passing the Indiana emissions test?",
      a: "For most 1996 and newer vehicles, yes. Lake County vehicles are subject to Indiana's emissions testing program, and the on-board diagnostic test fails when the check engine light is commanded on. The test itself is done at a state testing station. Our part is diagnosing and repairing the cause so the light stays off.",
    },
    {
      q: "Can I drop my vehicle off and get back to Munster?",
      a: "Yes, most customers coming from this far drop the vehicle off rather than wait. Arrange your own ride back, and call ahead so we can schedule the drop-off. If you need to leave the vehicle before or after hours, call first and we will explain where to leave the keys. We contact you with the findings and an estimate before starting any repair.",
    },
  ],
  ctaLine: "Worth the drive when you want the diagnosis verified before the repair.",
};

export default function Munster() {
  return <CityPage data={DATA} />;
}
