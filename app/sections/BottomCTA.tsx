"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function BottomCTA() {
  return (
    <section className="relative w-full py-24 bg-[#F3F3F3] overflow-hidden flex items-center justify-center">
      {/* Footer PNG Images - positioned like in pen file */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[476px] h-[336px] opacity-80">
        <Image
          src="/footer.png"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: "center" }}
        />
      </div>
      <div className="absolute left-20 bottom-0 w-[341px] h-[241px] opacity-60 -scale-x-100">
        <Image
          src="/footer.png"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: "center" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex w-full max-w-xl flex-col items-center px-4 text-center sm:px-6">
        <h2 className="font-serif text-5xl md:text-6xl font-normal text-[#1A1A1A] mb-4">
          Hemen Başla
        </h2>
        <p className="text-lg text-[#00000080] mb-8">
          Bugün kaydol, yarın ilk challenge&apos;ını al.
        </p>

        <Field className="w-full items-stretch">
          <FieldLabel htmlFor="bottom-cta-email" className="sr-only">
            E-posta
          </FieldLabel>
          <div className="flex w-full min-w-0 items-stretch gap-3">
            <div className="relative min-w-0 flex-1">
              <EnvelopeIcon
                className="pointer-events-none absolute left-3 top-1/2 z-10 size-5 -translate-y-1/2 text-[#999999]"
                aria-hidden
              />
              <Input
                id="bottom-cta-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="sen@tasarimci.com"
                className="relative z-0 w-full min-w-0 rounded-xl border-0 bg-white pr-3 pl-10 font-sans text-sm text-black placeholder:text-[#999999]"
              />
            </div>
            <Button type="button" className="shrink-0">
              Start Shipping
            </Button>
          </div>
          <FieldDescription className="text-center text-[13px] text-[#64748B] font-sans">
            $24.99 one time payment. Secure checkout via Stripe.
          </FieldDescription>
        </Field>
      </div>
    </section>
  );
}
