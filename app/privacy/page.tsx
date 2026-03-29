import type { Metadata } from "next";

import LegalPageShell from "@/components/LegalPageShell";
import LegalSection from "@/components/LegalSection";

export const metadata: Metadata = {
  title: "Privacy Policy — DailyShipUI",
  description:
    "How DailyShipUI collects, uses, and protects your data — email, payments via Lemon Squeezy, cookies, MailerLite, and your rights.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell title="Privacy Policy">
      <LegalSection title="1. Data Collection and Usage">
        We collect your email address to deliver the daily design challenges
        and product updates. We also use basic analytics to understand how many
        designers visit our landing page. Your data is used strictly for these
        operational purposes.
      </LegalSection>
      <LegalSection title="2. Payment Processing">
        All transactions are handled securely by Lemon Squeezy. We do not
        touch, process, or store your credit card information on our servers.
      </LegalSection>
      <LegalSection title="3. Cookies">
        We use minimal and essential cookies to keep the website functional and
        to analyze basic site traffic. We do not use aggressive tracking or
        retargeting pixels.
      </LegalSection>
      <LegalSection title="4. Third Party Services">
        We share your email only with MailerLite to send the daily briefs. We
        will never sell, rent, or trade your personal information to outside
        marketers.
      </LegalSection>
      <LegalSection title="5. Your Rights">
        You can unsubscribe from the emails at any time, but doing so will stop
        the 30 day challenge delivery. If you want your data completely wiped
        from our systems, simply contact us.
      </LegalSection>
    </LegalPageShell>
  );
}
