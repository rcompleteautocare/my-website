"use client";

import { Analytics, type BeforeSendEvent } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import { usePathname } from "next/navigation";
import PhoneConversionListener from "@/components/PhoneConversionListener";
import SiteAnalytics from "@/components/SiteAnalytics";

const isPrivateRoute = (pathname: string) =>
  pathname === "/login" || pathname === "/command-center" || pathname.startsWith("/command-center/");

function filterPrivateRouteEvents(event: BeforeSendEvent) {
  try {
    return isPrivateRoute(new URL(event.url, window.location.origin).pathname) ? null : event;
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
      <Analytics beforeSend={filterPrivateRouteEvents} />
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
              <Script
                id="google-tag-library"
                src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(adsTagId)}`}
                strategy="afterInteractive"
              />
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
