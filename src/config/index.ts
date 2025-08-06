import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
  title: {
    // write a default title for astra a ai powered website builder suggest something unique and catchy don't use the same words of ai powered website builder give a unique name
    default: "RocketLyz - Marketing Upgraded !",
    template: `%s | RocketLyz`,
  },
  description:
    "Unlock the Power of Product Insights to Create Compelling Value Propositions and Drive Meaningful Business Growth!",
  icons: {
    icon: [
      {
        url: "/icons/favicon.ico",
        href: "/icons/favicon.ico",
      },
    ],
  },
  openGraph: {
    title: "RocketLyz - Marketing Upgraded",
    description:
      "Unlock the Power of Product Insights to Create Compelling Value Propositions and Drive Meaningful Business Growth!",
    images: [
      {
        url: "/assets/og-image.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@aninima01",
    title: "RocketLyz - Marketing Upgraded !",
    description:
      "Unlock the Power of Product Insights to Create Compelling Value Propositions and Drive Meaningful Business Growth!",
    images: [
      {
        url: "/assets/og-image.png",
      },
    ],
  },
  metadataBase: new URL("https://astra-app.vercel.app"),
};
