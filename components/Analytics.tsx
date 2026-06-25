"use client";

import Script from "next/script";
import { useEffect } from "react";

/**
 * Analytics and ad-conversion tracking.
 *
 * Everything here is gated behind environment variables, so nothing loads
 * until you set the matching IDs (in Vercel project settings or .env.local).
 * With no IDs set, this renders nothing and adds zero network requests.
 *
 * Because every conversion on this site is a phone call, a single document
 * click listener watches for clicks on any `tel:` link and fires:
 *  - a GA4 event (phone_call_click)
 *  - a Google Ads conversion (if a call conversion label is set)
 *  - a Meta Pixel "Contact" event
 *
 * Env vars (all optional, all NEXT_PUBLIC_ so they reach the browser):
 *  - NEXT_PUBLIC_GA_MEASUREMENT_ID         e.g. G-XXXXXXXXXX  (GA4)
 *  - NEXT_PUBLIC_GOOGLE_ADS_ID             e.g. AW-XXXXXXXXX  (Google Ads)
 *  - NEXT_PUBLIC_GOOGLE_ADS_CALL_CONVERSION e.g. AW-XXXXXXXXX/AbCdEf123  (send_to)
 *  - NEXT_PUBLIC_META_PIXEL_ID             e.g. 1234567890     (Meta Pixel)
 */

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const ADS_CALL_CONVERSION = process.env.NEXT_PUBLIC_GOOGLE_ADS_CALL_CONVERSION;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export default function Analytics() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const link = target?.closest?.('a[href^="tel:"]');
      if (!link) return;

      window.gtag?.("event", "phone_call_click", {
        event_category: "engagement",
        event_label: "tel_cta",
      });
      if (ADS_CALL_CONVERSION) {
        window.gtag?.("event", "conversion", {
          send_to: ADS_CALL_CONVERSION,
        });
      }
      window.fbq?.("track", "Contact");
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const googleTagId = GA_ID || ADS_ID;

  return (
    <>
      {googleTagId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              ${GA_ID ? `gtag('config', '${GA_ID}');` : ""}
              ${ADS_ID ? `gtag('config', '${ADS_ID}');` : ""}
            `}
          </Script>
        </>
      )}

      {META_PIXEL_ID && (
        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}
    </>
  );
}
