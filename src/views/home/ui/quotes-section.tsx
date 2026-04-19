"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { motivationalQuotes } from "@/shared/data/content";

export function QuotesSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {motivationalQuotes.map((quote) => (
          <div
            key={quote.author}
            className="glow-card min-w-[300px] max-w-[400px] shrink-0 snap-center rounded-xl border border-(--border) bg-(--bg-card) p-5 transition-all duration-300 hover:border-primary/20"
          >
            <div className="mb-3 text-primary">
              <Quote size={24} />
            </div>
            <p className="mb-4 text-sm italic leading-relaxed text-(--text-muted)">
              &ldquo;{quote.text}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src={quote.image}
                  alt={quote.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold">{quote.author}</p>
                <p className="text-xs text-(--text-muted)">{quote.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
