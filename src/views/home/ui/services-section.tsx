"use client";

import { motion } from "framer-motion";
import { Layers, Plug, Cloud, Users } from "lucide-react";
import { services } from "@/shared/data/content";

const icons = [Layers, Plug, Cloud, Users];

export function ServicesSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="grid gap-4 sm:grid-cols-2"
    >
      {services.map((service, i) => {
        const Icon = icons[i];
        return (
          <div
            key={service.title}
            className="glow-card group rounded-xl border border-(--border) bg-(--bg-card) p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-[0_0_30px_rgba(255,193,7,0.05)] hover:-translate-y-0.5"
          >
            <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2.5 text-primary transition-transform group-hover:scale-110">
              <Icon size={20} />
            </div>
            <h3 className="mb-2 text-sm font-semibold">{service.title}</h3>
            <p className="text-xs leading-relaxed text-(--text-muted)">
              {service.description}
            </p>
          </div>
        );
      })}
    </motion.div>
  );
}
