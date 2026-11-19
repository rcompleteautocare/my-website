// Content for /warranty-resources and /warranty-resources/[provider].
//
// WHAT IS AND IS NOT IN THIS FILE
//
// These pages used to be one template with the provider name swapped in. Each
// provider page now leads with its own in-depth topic about how vehicle
// service contract claims work (`focus*`, `questionsToAsk`, `faqs`).
//
// That content is deliberately GENERAL. It describes how service contracts
// commonly work and tells the reader to confirm against their own contract. It
// makes no statement about what any named company covers, charges, requires or
// approves. Do not add such statements from memory or from marketing pages.
//
// Provider-specific facts belong ONLY in the `verified` block of each entry.
// Contact details there are copied from the provider's own official website,
// with the source URL in a comment beside each value; never use third-party
// directories, forums or review sites. `shopNotes` is for the shop's own
// first-hand experience and is an owner TODO. Empty fields render nothing.

export type ProviderFaq = { q: string; a: string };

export type VerifiedProviderFacts = {
  /** TODO(owner): company that administers (adjudicates) claims, if different from the seller. */
  administratorName: string;
  /** TODO(owner): claims / authorization phone number the shop actually uses. */
  claimsPhone: string;
  /** TODO(owner): claims department hours, with time zone. */
  claimsHours: string;
  /** TODO(owner): official URL for starting or checking a claim. */
  claimsUrl: string;
  /** TODO(owner): the shop's own first-hand notes on working with this provider (what they ask for, typical sticking points). No approval rates or guarantees. */
  shopNotes: string;
  /** TODO(owner): date these facts were last confirmed, e.g. "2026-11-19". Shown to readers. */
  lastVerified: string;
};

const UNVERIFIED: VerifiedProviderFacts = {
  administratorName: "",
  claimsPhone: "",
  claimsHours: "",
  claimsUrl: "",
  shopNotes: "",
  lastVerified: "",
};

export type WarrantyProvider = {
  name: string;
  /** Official website (linked nofollow). */
  site: string;
  /** One line shown on the /warranty-resources hub card. */
  summary: string;
  /** Title of this page's in-depth topic. */
  focusTitle: string;
  focusIntro: string;
  focusPoints: { heading: string; detail: string }[];
  /** Questions to put to the contract administrator, specific to the focus topic. */
  questionsToAsk: string[];
  /** FAQs specific to this page's topic. */
  faqs: ProviderFaq[];
  /** Owner-verified provider facts. All TODO; see the note at the top of the file. */
  verified: VerifiedProviderFacts;
};

export const warrantyProviders = {
  carshield: {
    name: "CarShield",
    site: "https://carshield.com",
    summary: "Waiting periods and pre-existing conditions: why the date a problem started matters as much as what failed.",
    focusTitle: "Waiting periods and pre-existing conditions",
    focusIntro:
      "Many vehicle service contracts do not cover a failure from the day you sign. Two contract terms decide whether an early claim is payable: the waiting period and the pre-existing condition exclusion. Both are worth understanding before your first claim, whoever your contract is with.",
    focusPoints: [
      { heading: "What a waiting period is", detail: "A set amount of time and mileage after the contract starts during which failures are not covered. A period stated as both days and miles is common, and both usually have to pass. The exact figures are in your contract's terms, often near the start date and the definitions." },
      { heading: "What counts as pre-existing", detail: "A problem that existed, or had begun to show symptoms, before coverage took effect. Administrators look at when the symptom first appeared, not when it finally got bad enough to bring the vehicle in." },
      { heading: "How the timing is established", detail: "Through repair history, stored trouble codes with their freeze-frame mileage, the condition of the failed part, and what the customer reports. An accurate, dated description of when you first noticed the problem helps a legitimate claim and should always be truthful." },
      { heading: "Why a diagnosis matters here", detail: "A documented diagnosis states what failed and what caused it. That is the evidence an administrator uses to decide whether a failure is sudden and covered or gradual and pre-existing." },
      { heading: "Month-to-month and term contracts", detail: "Contracts are sold both as fixed terms and as ongoing monthly plans. Whichever you have, confirm that it was active with payments current on the date of the failure, because a lapse can affect a claim." },
    ],
    questionsToAsk: [
      "What is the waiting period on my contract in days and miles, and has it been met?",
      "What was the odometer reading recorded when my contract started?",
      "How does my contract define a pre-existing condition?",
      "Is my contract active and are my payments current as of today?",
    ],
    faqs: [
      { q: "My car broke down a week after I bought a service contract. Is it covered?", a: "Often not, if the contract has a waiting period that has not yet passed. Check the waiting period in your contract terms and ask the administrator whether it has been satisfied in both time and mileage." },
      { q: "Who decides whether a problem was pre-existing?", a: "The contract administrator, based on the evidence: the diagnosis, the condition of the failed part, repair history and stored vehicle data. The repair shop documents what it finds but does not make the coverage decision." },
      { q: "Should I wait to report a problem until after the waiting period?", a: "No. Describe the problem and when it started accurately. Misstating when a symptom began can give the administrator grounds to deny the claim or cancel the contract, and continuing to drive on a known fault can make the damage worse." },
    ],
    // 2026-11-19: carshield.com refused automated access (HTTP 403), so nothing could be read. All TODO(owner).
    verified: UNVERIFIED,
  },

  silverrock: {
    name: "SilverRock",
    site: "https://www.silverrockinc.com",
    summary: "Inspections, parts and labor allowances: what an administrator may send, approve and pay for, and where a gap can appear.",
    focusTitle: "Inspections, parts sourcing and labor allowances",
    focusIntro:
      "Authorization is rarely a simple yes or no. An administrator can send an inspector, specify what kind of parts it will pay for, and set the labor time and rate it allows. Each of those can leave a difference between the approved amount and the shop's estimate, so it helps to know how they work.",
    focusPoints: [
      { heading: "Independent inspections", detail: "For larger claims an administrator may send an independent inspector to look at the vehicle before deciding. The inspector reports what they see; the administrator makes the decision. An inspection adds time, so ask how long it is expected to take." },
      { heading: "The kind of parts that are allowed", detail: "Many contracts let the administrator authorize new, remanufactured or used parts of like kind and quality, and some administrators arrange to supply the part themselves. Ask what was approved and what warranty comes with that part." },
      { heading: "Labor time", detail: "Administrators generally pay labor according to a published labor time guide, not the actual hours a job takes. Diagnostic time and time lost to seized or corroded parts may be treated differently." },
      { heading: "Labor rate", detail: "Some contracts cap the hourly rate they will pay or pay a customary rate for the area. If the shop's posted rate is higher, the difference can fall to the customer. Ask before work starts." },
      { heading: "Fluids, shop supplies and taxes", detail: "These are handled differently from contract to contract. They are a common source of small amounts the customer ends up paying." },
    ],
    questionsToAsk: [
      "Will an inspection be required, and how long will it take to schedule?",
      "Are the approved parts new, remanufactured or used, and what warranty do they carry?",
      "What labor time and hourly rate has been authorized?",
      "Are fluids, shop supplies, taxes and diagnostic time included in the authorization?",
    ],
    faqs: [
      { q: "Why is the authorized amount lower than the repair estimate?", a: "Usually because of differences in parts type, labor time or labor rate, or because some items on the estimate are not covered by the contract. Ask for the authorization broken down by line so you can see exactly where the difference is." },
      { q: "Can the administrator require used or remanufactured parts?", a: "Many contracts allow it. If you would prefer a different part than the one authorized, ask whether you can pay the difference, and compare the warranty that comes with each option." },
      { q: "Does an inspection mean my claim is being denied?", a: "No. Inspections are a routine step on larger or less clear claims. They verify the failure and its cause before the administrator commits to paying." },
    ],
    // 2026-11-19: silverrockinc.com states no claims administrator, claims-labeled phone, claims hours or claim URL. All TODO(owner).
    verified: UNVERIFIED,
  },

  endurance: {
    name: "Endurance",
    site: "https://www.endurancewarranty.com",
    summary: "Teardown authorization: why an engine or transmission may have to come apart before a decision, and who pays if the claim is denied.",
    focusTitle: "Teardown authorization on engine and transmission claims",
    focusIntro:
      "For internal engine and transmission failures, an administrator often cannot decide a claim from the outside. It may ask for the unit to be opened up so the failed part and the cause can be seen. That step is called a teardown, and it comes with a decision you have to make before the outcome is known.",
    focusPoints: [
      { heading: "Why a teardown is requested", detail: "A noise, a code or metal in the oil shows that something failed inside, but not what or why. Coverage depends on the specific failed component and the cause of failure, so the administrator asks to see it." },
      { heading: "Who authorizes it", detail: "You do. A teardown is labor performed on your vehicle, and the shop needs your approval before starting. The administrator requesting a teardown is not the same as the administrator agreeing to pay for it." },
      { heading: "Who pays if the claim is denied", detail: "Under many contracts, teardown labor is paid as part of the repair if the failure turns out to be covered, and is the customer's responsibility if it does not. Confirm this with the administrator, and get the shop's teardown estimate in writing, before you approve." },
      { heading: "What happens after the unit is apart", detail: "The shop documents the findings, usually with photos, and the administrator may send an inspector. Once a unit is disassembled it generally cannot be driven, so putting it back together unrepaired costs labor as well." },
      { heading: "What strengthens the claim", detail: "Maintenance records, an accurate account of when the symptoms began, and evidence that the vehicle was not driven after a warning appeared." },
    ],
    questionsToAsk: [
      "Is a teardown required for this claim, and to what extent?",
      "If the failure is covered, is the teardown labor included in what you pay?",
      "If the failure is not covered, who pays for the teardown and for reassembly?",
      "Will an inspector need to see the parts, and how soon can that be arranged?",
    ],
    faqs: [
      { q: "Do I have to agree to a teardown?", a: "No, but without it the administrator may not have enough information to approve an internal engine or transmission claim. Ask what the teardown will cost and who pays under each outcome, then decide." },
      { q: "What does a teardown involve?", a: "The shop disassembles the engine or transmission far enough to expose the failed parts, documents what it finds, and reports to the administrator. How far it has to go depends on where the failure is." },
      { q: "Can I get an estimate for the teardown before approving it?", a: "Yes. Ask for the teardown labor as a separate written figure from the repair estimate, so you know the amount at risk if the claim is not approved." },
    ],
    // Values below are copied from Endurance's official website on 2026-11-19.
    verified: {
      // Not named on the official site (it says "in most cases, Endurance"). TODO(owner).
      administratorName: "",
      // Source: https://www.endurancewarranty.com/contact/ ("Repair Facility Claim")
      claimsPhone: "(877) 414-0134 (repair facility claims line)",
      // Source: https://www.endurancewarranty.com/contact/ (hours listed for the Repair Facility Claim line)
      claimsHours: "Mon–Fri 7am–7pm CT; Sat–Sun closed",
      // Source: https://www.endurancewarranty.com/file-a-claim/
      claimsUrl: "https://www.endurancewarranty.com/file-a-claim/",
      shopNotes: "",
      lastVerified: "2026-11-19",
    },
  },

  fidelity: {
    name: "Fidelity Warranty Services",
    site: "https://www.fidelitywarrantyservices.com",
    summary: "Contracts bought with the vehicle at a dealership: finding the paperwork, using an independent shop, and cancellation and transfer.",
    focusTitle: "Service contracts purchased at a dealership",
    focusIntro:
      "Many service contracts are sold in the finance office when a vehicle is bought and are rolled into the loan. Years later, owners are often unsure what they bought, who administers it and whether they have to return to the selling dealer. These are the points to sort out before a claim.",
    focusPoints: [
      { heading: "Find the actual contract", detail: "Look in your purchase paperwork for a separate document titled as a vehicle service contract or service agreement. It lists the contract number, the plan or coverage level, the start date and mileage, the term, the deductible and the administrator's contact details. A brochure or a line on the sales contract is not the contract." },
      { heading: "Know who administers it", detail: "The dealership sold the contract, but a separate administrator usually handles claims. The administrator named in the contract is who the repair shop contacts for authorization." },
      { heading: "Where you can have repairs done", detail: "Many dealer-sold contracts allow repairs at any licensed repair facility, not only at the selling dealer. Your contract has a section on where to obtain service. Read it, or ask the administrator, before assuming either way." },
      { heading: "Manufacturer warranty comes first", detail: "If the vehicle is still within the manufacturer's warranty, or the failure is subject to a recall, that coverage generally applies before a service contract does. Those repairs are done at a franchised dealer." },
      { heading: "Cancellation and transfer", detail: "Service contracts can usually be cancelled for a prorated refund, less any fees and claims paid, and if the contract was financed the refund typically goes to the lender. Many can also be transferred to a new owner for a fee. The contract states the rules." },
    ],
    questionsToAsk: [
      "What plan or coverage level is my contract, and when and at what mileage does it expire?",
      "Can I have covered repairs done at an independent repair shop?",
      "What is my deductible, and is it per visit or per repair?",
      "Is the contract transferable or cancellable, and what are the fees?",
    ],
    faqs: [
      { q: "Do I have to go back to the dealer where I bought the contract?", a: "Not necessarily. Many dealer-sold service contracts can be used at any licensed repair facility. Check the section of your contract on where to obtain service, or ask the administrator directly." },
      { q: "I can't find my service contract paperwork. What should I do?", a: "Contact the selling dealer's finance office or the administrator with your VIN. They can usually look up the contract and send a copy. You will need the contract number and the coverage level before a claim can be opened." },
      { q: "Is a dealer-sold service contract the same as the factory warranty?", a: "No. The factory warranty comes from the vehicle manufacturer. A service contract is a separate agreement, sold for an additional cost, with its own terms, exclusions and claim process." },
    ],
    // Values below are copied from Fidelity Warranty Services' official website on 2026-11-19.
    verified: {
      // Source: https://www.fidelitywarrantyservices.com/products/vehicle-service-contract ("Administered by Fidelity Warranty Services, Inc.")
      administratorName: "Fidelity Warranty Services, Inc.",
      // Source: https://www.fidelitywarrantyservices.com/customer-support ("Claims & Customer Service")
      claimsPhone: "1-800-327-5172 (claims and customer service)",
      // Source: https://www.fidelitywarrantyservices.com/customer-support ("hours of operation for the claims group")
      claimsHours: "Mon–Fri 8am–9pm ET; Sat 9am–4pm ET",
      // No online claim page for vehicle service contracts on the official site. TODO(owner).
      claimsUrl: "",
      shopNotes: "",
      lastVerified: "2026-11-19",
    },
  },

  zurich: {
    name: "Zurich",
    site: "https://www.zurichna.com",
    summary: "Exclusionary versus stated-component coverage: how to read which kind you have and what that means when a part fails.",
    focusTitle: "Exclusionary and stated-component coverage",
    focusIntro:
      "Service contracts describe coverage in one of two ways, and the difference decides most claims. Knowing which kind of contract you hold tells you where to look when a part fails and who has to show what.",
    focusPoints: [
      { heading: "Stated-component coverage", detail: "The contract lists the parts that are covered. If the failed part is on the list, it may be covered; if it is not on the list, it is not. Lower coverage levels are usually written this way, often grouped by system such as engine, transmission and drive axle." },
      { heading: "Exclusionary coverage", detail: "The contract covers the vehicle's mechanical and electrical parts except for the items it lists as excluded. This is typically the highest coverage level. You read it the other way round: look for the failed part in the exclusions." },
      { heading: "Exclusions that appear in almost every contract", detail: "Maintenance items, wear items such as brake pads and wiper blades, damage from overheating or lack of lubrication, damage from continued operation after a failure, modifications, and conditions that existed before coverage began." },
      { heading: "The exact name of the part matters", detail: "A claim is filed for a specific failed component. A contract may cover an assembly but not a seal, sensor or module attached to it. An accurate diagnosis that names the failed part is what lets the administrator match it to the contract." },
      { heading: "Cause of failure still applies", detail: "Even a listed part may not be covered if it failed because of an excluded cause. Coverage depends on both what failed and why." },
    ],
    questionsToAsk: [
      "Is my contract exclusionary or stated-component?",
      "Is the specific failed part covered, and under which section of the contract?",
      "Are seals, gaskets, sensors and control modules covered at my coverage level?",
      "Does the cause of this failure fall under any exclusion?",
    ],
    faqs: [
      { q: "How do I tell which type of coverage I have?", a: "Read the coverage section of your contract. If it lists covered parts by system, it is stated-component. If it says all parts are covered except those listed, it is exclusionary. The coverage level name on your contract's first page also indicates it." },
      { q: "My contract covers the engine. Why was a sensor on the engine not covered?", a: "On a stated-component contract, engine coverage usually means a specific list of internal parts. Sensors, modules, seals and gaskets may be listed separately, covered only at higher levels, or covered only when replaced as part of a covered repair." },
      { q: "Does exclusionary coverage mean everything is covered?", a: "No. It means everything except the listed exclusions, and the cause of failure still has to be a covered one. The exclusions list is the part of the contract to read most carefully." },
    ],
    // 2026-11-19: zurichna.com pages returned no readable text to an automated fetch. All TODO(owner).
    verified: UNVERIFIED,
  },

  "american-auto-shield": {
    name: "American Auto Shield",
    site: "https://americanautoshield.com",
    summary: "Maintenance records: what an administrator may ask for, what counts as proof, and what to do when records are incomplete.",
    focusTitle: "Maintenance records and how they affect a claim",
    focusIntro:
      "Service contracts generally require the owner to maintain the vehicle according to the manufacturer's schedule. On engine and transmission claims in particular, an administrator may ask for proof. Records are the easiest part of a claim to prepare in advance and the hardest to recreate afterward.",
    focusPoints: [
      { heading: "What the requirement usually says", detail: "That the vehicle must be maintained as the manufacturer recommends, and that the owner must keep records and provide them on request. The contract's section on your responsibilities sets it out." },
      { heading: "What counts as a record", detail: "A dated repair order or receipt showing the vehicle (ideally the VIN), the mileage and the service performed. Shop invoices are the strongest evidence because they carry all of that." },
      { heading: "If you do your own maintenance", detail: "Keep dated receipts for the oil and filters, and a written log with the date and mileage of each service. Administrators differ in how much weight they give self-performed maintenance, so ask what yours accepts." },
      { heading: "Why oil changes get the most attention", detail: "Lubrication failures are a common reason for engine claims, and sludge or varnish inside the engine suggests overdue oil changes. A consistent oil change history is the best answer to that question." },
      { heading: "When records are missing", detail: "Ask shops that serviced the vehicle to reprint invoices. Many keep service history by VIN or by name. Gaps do not automatically end a claim, but they give the administrator a reason to look harder at the cause of failure." },
    ],
    questionsToAsk: [
      "Do you need maintenance records for this claim, and how far back?",
      "What form of record do you accept if I did the maintenance myself?",
      "What service interval does my contract require me to follow?",
      "Where should the records be sent, and by whom?",
    ],
    faqs: [
      { q: "Will my claim be denied if I am missing an oil change receipt?", a: "Not automatically. Administrators weigh the overall history and the condition of the failed parts. Gather what you have, ask prior shops for reprints, and be accurate about what was and was not done." },
      { q: "Do I have to use a dealer for maintenance to keep my service contract valid?", a: "Service contracts generally require that maintenance is done and documented, not that a particular business does it. Check your contract's maintenance section for any specific requirement." },
      { q: "How should I store maintenance records?", a: "Keep paper invoices together in the vehicle file and take a photo of each one as a backup. Make sure each shows the date, the mileage and the VIN or plate." },
    ],
    // Values below are copied from American Auto Shield's official website on 2026-11-19.
    verified: {
      // The official site names an administrator for Florida contracts only. TODO(owner).
      administratorName: "",
      // Source: https://americanautoshield.com/contact-us/ ("Claims" > "Toll Free") and https://americanautoshield.com/claims/
      claimsPhone: "1-800-531-1925",
      // The official site lists headquarters business hours only, not claims hours. TODO(owner).
      claimsHours: "",
      // Source: https://americanautoshield.com/claims/ ("Report a Claim Online")
      claimsUrl: "https://americanautoshield.com/report-a-claim/",
      shopNotes: "",
      lastVerified: "2026-11-19",
    },
  },

  carchex: {
    name: "CARCHEX",
    site: "https://www.carchex.com",
    summary: "Seller, administrator and obligor: the three roles behind a service contract and which one a repair shop actually calls.",
    focusTitle: "Who is who: seller, administrator and obligor",
    focusIntro:
      "The company whose name you remember from buying a service contract is not always the company that decides your claim. Up to three different parties can be involved, and getting to the right one quickly saves time when a vehicle is sitting in a repair bay.",
    focusPoints: [
      { heading: "The seller", detail: "The business that marketed and sold you the contract. It may be a dealership, a broker or a direct marketer. The seller handles sales and often billing and cancellations, but typically does not make claim decisions." },
      { heading: "The administrator", detail: "The company that runs the claims process: it takes the shop's call, reviews the diagnosis against the contract, and authorizes or denies the repair. This is who the repair shop needs to reach." },
      { heading: "The obligor", detail: "The party legally responsible for paying covered claims under the contract. It can be the administrator or a separate company, and it is commonly backed by an insurance policy. The obligor is named in the contract." },
      { heading: "Where to find each one", detail: "All three are identified in the contract document itself, usually on the first page or in the definitions, along with the claims phone number. A membership card or sales email often shows only the seller." },
      { heading: "Why it matters during a claim", detail: "A shop that calls the seller's sales line instead of the administrator's claims line loses time. Bring the contract so the right number is used from the start. If a dispute arises, knowing the obligor and insurer tells you who stands behind the contract." },
    ],
    questionsToAsk: [
      "Who is the administrator for my contract, and what is the claims phone number?",
      "Who is the obligor named on my contract?",
      "What is my contract number and coverage level?",
      "Who do I contact about billing or cancellation, as opposed to claims?",
    ],
    faqs: [
      { q: "I bought my contract from one company, but the paperwork names another. Is that normal?", a: "Yes. It is common for one company to sell a service contract and a different company to administer it. The administrator named in the contract is the one that handles claims." },
      { q: "Which phone number should the repair shop call?", a: "The claims or authorization number listed in the contract for the administrator. A general customer service or sales number will usually have to transfer the call." },
      { q: "What is an obligor?", a: "The party that is contractually responsible for paying covered claims. The contract names it, and it is often backed by an insurance company that is also identified in the contract." },
    ],
    // 2026-11-19: carchex.com routes claims to different administrators by contract prefix, and the claims number shown on its contact page (1-800-886-4048) does not match that page's dial link. Left as TODO(owner) until confirmed.
    verified: UNVERIFIED,
  },
} as const satisfies Record<string, WarrantyProvider>;

export type WarrantySlug = keyof typeof warrantyProviders;

/** "CarShield Warranty", but not "Fidelity Warranty Services Warranty". */
export function providerGuideName(name: string) {
  return `${name}${/warranty/i.test(name) ? "" : " Warranty"} Repair Guide`;
}

/** True once the owner has filled in at least one verified fact for a provider. */
export function hasVerifiedFacts(v: VerifiedProviderFacts) {
  return Boolean(v.administratorName || v.claimsPhone || v.claimsHours || v.claimsUrl || v.shopNotes);
}
