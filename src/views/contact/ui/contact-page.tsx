"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import { SectionHeading } from "@/shared/ui/section-heading";
import { ContactForm } from "@/features/contact-form";
import { contactAddress, contactSocial } from "@/shared/data/profile";
import { LinkedInIcon } from "@/shared/ui/social-icons";

const infoCards = [
  {
    icon: <MapPin size={20} />,
    title: "Location",
    lines: contactAddress.map((a) => `${a.name}: ${a.value}`),
  },
  {
    icon: <Mail size={20} />,
    title: "Email",
    lines: [contactSocial.find((c) => c.name === "Email")?.value ?? ""],
  },
  {
    icon: <Phone size={20} />,
    title: "Phone",
    lines: [contactSocial.find((c) => c.name === "Phone")?.value ?? ""],
  },
  {
    icon: <LinkedInIcon size={20} />,
    title: "LinkedIn",
    lines: [contactSocial.find((c) => c.name === "LinkedIn")?.value ?? ""],
  },
];

export function ContactPage() {
  return (
    <div className="py-8">
      <SectionHeading title="Get In Touch" />

      {/* Info Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {infoCards.map((card) => (
          <div
            key={card.title}
            className="glow-card rounded-xl border border-(--border) bg-(--bg-card) p-5 transition-all duration-300 hover:border-primary/20 hover:shadow-[0_0_30px_rgba(255,193,7,0.05)]"
          >
            <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2.5 text-primary transition-transform hover:scale-110">
              {card.icon}
            </div>
            <h3 className="mb-1 text-sm font-semibold">{card.title}</h3>
            {card.lines.map((line, i) => (
              <p key={i} className="text-xs text-(--text-muted)">
                {line}
              </p>
            ))}
          </div>
        ))}
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glow-card rounded-xl border border-(--border) bg-(--bg-card) p-6"
      >
        <h3 className="mb-6 text-lg font-bold">
          Send me a message<span className="text-primary">.</span>
        </h3>
        <ContactForm />
      </motion.div>
    </div>
  );
}
