"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { staffMembers } from "@/lib/staff-data";
import { siteConfig } from "@/lib/site-config";

export default function AdministrationPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Header */}
      <section className="border-b border-white/10 px-5 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white md:text-5xl">
              Ma'muriyat
            </h1>
            <p className="mt-4 text-lg text-text-soft">
              Shahrisabz Tibbiyot Texnikumining bosh etakligi va rahbar kadrlari
            </p>
          </motion.div>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {staffMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={item}
                className="group overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-primary/20"
              >
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <div className="text-5xl mb-2">👤</div>
                        <p className="text-text-muted text-sm">Rasm mavjud emas</p>
                      </div>
                    </div>
                  )}
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">
                    {member.name}
                  </h3>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-accent-green" />
                    <p className="text-sm font-medium text-accent-green">
                      {member.position}
                    </p>
                  </div>

                  <p className="mt-3 text-sm text-text-soft">
                    {member.department}
                  </p>

                  {member.bio && (
                    <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-text-muted">
                      {member.bio}
                    </p>
                  )}

                  {member.contact && (
                    <div className="mt-4 space-y-2 border-t border-white/10 pt-4">
                      {member.contact.phone && (
                        <a
                          href={`tel:${member.contact.phone}`}
                          className="flex items-center gap-2 text-sm text-text-soft transition-colors hover:text-white"
                        >
                          <span>📞</span>
                          {member.contact.phone}
                        </a>
                      )}
                      {member.contact.email && (
                        <a
                          href={`mailto:${member.contact.email}`}
                          className="flex items-center gap-2 text-sm text-text-soft transition-colors hover:text-white"
                        >
                          <span>✉️</span>
                          <span className="truncate">{member.contact.email}</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
