"use client";

import { Analytics, type BeforeSendEvent } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import { usePathname } from "next/navigation";
import GtagLoader from "@/components/GtagLoader";
import PhoneConversionListener from "@/components/PhoneConversionListener";
import SiteAnalytics from "@/components/SiteAnalytics";
import { isUntrackablePath } from "@/lib/junk-paths";

const isPrivateRoute = (pathname: string) =>
  pathname === "/login" || pathname === "/command-center" || pathname.startsWith("/command-center/");

// Drop events for private/admin routes and for junk paths that no real route
// produces — bracket-wrapped/pasted URLs (e.g. "/[https://www.rcompleteautocare.com]")
// and template-injection scanner probes (e.g. "/{ignore}"). These would
// otherwise show up in Vercel Analytics as bogus "visited" routes.
function filterAnalyticsEvents(event: BeforeSendEvent) {
  try {
    const { pathname } = new URL(event.url, window.location.origin);
    return isPrivateRoute(pathname) || isUntrackablePath(pathname) ? null : event;
  } catch {
    return event;
  }
}

export default function SiteTracking({
  adsTagId,
  gaMeasurementId,
}: {
  adsTagId?: string;
  gaMeasurementId?: string;
}) {
  const pathname = usePathname();
  const excludeTracking = isPrivateRoute(pathname);

  return (
    <>
      <Analytics beforeSend={filterAnalyticsEvents} />
      {excludeTracking ? null : (
        <>
          {adsTagId ? (
            <>
              <Script id="google-tag-init" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){
                    var path = window.location.pathname;
                    if (path === '/login' || path === '/command-center' || path.indexOf('/command-center/') === 0) return;
                    dataLayer.push(arguments);
                  }
                  gtag('consent', 'default', { ad_storage: 'granted', analytics_storage: 'granted' });
                  gtag('js', new Date());
                  gtag('config', ${JSON.stringify(adsTagId)});
                  ${gaMeasurementId ? `gtag('config', ${JSON.stringify(gaMeasurementId)});` : ""}
                  window.updateGtagConsent = function(consent) { try { gtag('consent', 'update', consent); } catch(e){} };
                `}
              </Script>
              {/* gtag.js loads on first interaction or a 3s idle — see GtagLoader. */}
              <GtagLoader adsTagId={adsTagId} />
              <PhoneConversionListener />
            </>
          ) : null}
          <SpeedInsights />
          <SiteAnalytics />
        </>
      )}
    </>
  );
}
