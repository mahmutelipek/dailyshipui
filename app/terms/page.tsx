import type { Metadata } from "next";

import LegalPageShell from "@/components/LegalPageShell";
import LegalSection from "@/components/LegalSection";

export const metadata: Metadata = {
  title: "Terms of Service - DailyShipUI",
  description:
    "DailyShipUI terms: 30 day email challenge, no refunds, intellectual property, liability, and governing law.",
};

export default function TermsOfServicePage() {
  return (
    <LegalPageShell title="Terms of Service">
      <LegalSection title="1. Service Delivery">
        DailyShipUI is a strictly 30 day email based design and iteration
        challenge. By purchasing, you secure access to our prompt frameworks and
        daily UX problems. You must provide a valid email address to receive the
        product.
      </LegalSection>
      <LegalSection title="2. Strict No Refund Policy">
        Because this is an immediate digital download and an educational
        framework, all sales are absolutely final and non refundable. The value
        is in the knowledge and the daily push, which cannot be returned once
        consumed.
      </LegalSection>
      <LegalSection title="3. Intellectual Property">
        The daily briefs, prompt frameworks, and website copy are the exclusive
        property of DailyShipUI. You are free to use them to build your
        iteration muscle and create your own projects, but reselling or
        publicly distributing our daily emails is strictly prohibited.
      </LegalSection>
      <LegalSection title="4. Liability and Results">
        We provide the daily motivation and the architectural frameworks, but the
        actual execution is your responsibility. We do not guarantee job
        placements or specific career outcomes. You get out exactly what you put
        in.
      </LegalSection>
      <LegalSection title="5. Governing Law">
        These terms are governed by standard international digital commerce laws.
        By completing the checkout process, you agree to all conditions listed
        above.
      </LegalSection>
    </LegalPageShell>
  );
}
