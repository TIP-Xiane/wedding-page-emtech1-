import { motion } from "framer-motion";
import { Clock, Users } from "lucide-react";

const events = [
  { time: "4:30 PM", title: "Doors Open", desc: "Guests are welcomed into the sacred halls of Manila Cathedral." },
  { time: "5:00 PM", title: "Ceremony Begins", desc: "The solemn exchange of vows before God and loved ones." },
  { time: "6:00 PM", title: "Cocktails & Hors d'oeuvres", desc: "An intimate gathering with refreshments at Patio Victoria." },
  { time: "7:30 PM", title: "Dinner & Dancing", desc: "A joyful celebration of love, laughter, and togetherness." },
];

const weddingParty = {
  principalSponsors: [
    { male: "Don Felipe Montesco", female: "Doña Isabela Montesco" },
    { male: "Don Alejandro Capuleto", female: "Doña Rosalinda Capuleto" },
    { male: "Don Enrique de la Cruz", female: "Doña Carmen de la Cruz" },
    { male: "Don Rafael Santillan", female: "Doña Beatriz Santillan" },
  ],
  secondarySponsors: {
    veil: [
      { male: "Marco Villareal", female: "Sofia Villareal" },
    ],
    cord: [
      { male: "Luis Agoncillo", female: "Clara Agoncillo" },
    ],
    candle: [
      { male: "Gabriel Reyes", female: "Elena Reyes" },
    ],
  },
  bestMan: "Benvolio Montesco",
  maidOfHonor: "Rosalina Capuleto",
  groomsmen: ["Mercutio Escalus", "Balthasar Romero", "Abram Montesco"],
  bridesmaids: ["Helena Capuleto", "Bianca Padua", "Viola Messina"],
  flowerGirls: ["Little Sophia", "Little Isabella"],
  ringBearer: "Young Lorenzo",
  bibleBearers: ["Young Sebastian", "Young Matteo"],
};

const ProgrammeSection = () => {
  return (
    <section id="programme" className="py-24 md:py-32 bg-background/85 filipino-texture">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <p className="font-script text-3xl text-wedding-charcoal mb-2">The Celebration</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-wedding-charcoal">
            Order of the Day
          </h2>
          <div className="w-20 h-[1px] bg-wedding-charcoal/40 mx-auto mt-6" />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-wedding-charcoal/65 md:-translate-x-[0.5px]" />
          <div className="space-y-16">
            {events.map((event, index) => (
              <motion.div
                key={event.time}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: index * 0.15, ease: "easeOut" }}
                className={`relative flex items-start gap-8 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-wedding-gold border-2 border-wedding-charcoal/70 -translate-x-1/2 mt-2 z-10" />
                <div className={`ml-14 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
                  <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                    <Clock size={14} className="text-wedding-charcoal" />
                    <span className="font-body text-sm uppercase tracking-[0.2em] text-wedding-charcoal font-medium">
                      {event.time}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-wedding-charcoal font-light italic mb-2">
                    {event.title}
                  </h3>
                  <p className="font-body text-sm text-wedding-charcoal/80 leading-relaxed">
                    {event.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Wedding Entourage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <Users size={18} className="text-accent" />
            <p className="font-script text-3xl text-accent">The Entourage</p>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-light text-wedding-charcoal mb-2">
            Our Wedding Party
          </h2>
          <div className="w-20 h-[1px] bg-accent/40 mx-auto mt-4 mb-16" />
        </motion.div>

        {/* Principal Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="font-display text-2xl text-wedding-charcoal italic text-center mb-8 font-light">
            Principal Sponsors · <span className="font-script text-wedding-gold text-2xl">Ninong Crisostomo Ibarra & Ninang Maria Clara</span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4 max-w-2xl mx-auto">
            {weddingParty.principalSponsors.map((pair, i) => (
              <div key={i} className="flex justify-between items-center py-3 border-b border-border/40">
                <span className="font-display text-base text-foreground">{pair.male}</span>
                <span className="font-body text-xs text-muted-foreground mx-2">&</span>
                <span className="font-display text-base text-foreground">{pair.female}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Secondary Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="font-display text-2xl text-wedding-charcoal italic text-center mb-8 font-light">
            Secondary Sponsors
          </h3>
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            {Object.entries(weddingParty.secondarySponsors).map(([role, pairs]) => (
              <div key={role} className="space-y-3">
                <p className="font-body text-xs uppercase tracking-[0.3em] text-accent font-medium capitalize">{role} Sponsors</p>
                {pairs.map((pair, i) => (
                  <div key={i}>
                    <p className="font-display text-sm text-foreground">{pair.male}</p>
                    <p className="font-display text-sm text-foreground">{pair.female}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Best Man & Maid of Honor + Groomsmen & Bridesmaids */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto text-center">
            {/* Groom's side */}
            <div className="space-y-6">
              <div>
                <p className="font-body text-xs uppercase tracking-[0.3em] text-accent font-medium mb-2">Best Man</p>
                <p className="font-display text-lg text-foreground italic">{weddingParty.bestMan}</p>
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-[0.3em] text-accent font-medium mb-2">Groomsmen</p>
                {weddingParty.groomsmen.map((name) => (
                  <p key={name} className="font-display text-base text-foreground">{name}</p>
                ))}
              </div>
            </div>
            {/* Bride's side */}
            <div className="space-y-6">
              <div>
                <p className="font-body text-xs uppercase tracking-[0.3em] text-accent font-medium mb-2">Maid of Honor</p>
                <p className="font-display text-lg text-foreground italic">{weddingParty.maidOfHonor}</p>
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-[0.3em] text-accent font-medium mb-2">Bridesmaids</p>
                {weddingParty.bridesmaids.map((name) => (
                  <p key={name} className="font-display text-base text-foreground">{name}</p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Flower Girls, Ring Bearer, Bible Bearers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            <div>
              <p className="font-body text-xs uppercase tracking-[0.3em] text-accent font-medium mb-3">Flower Girls</p>
              {weddingParty.flowerGirls.map((name) => (
                <p key={name} className="font-display text-base text-foreground">{name}</p>
              ))}
            </div>
            <div>
              <p className="font-body text-xs uppercase tracking-[0.3em] text-accent font-medium mb-3">Ring Bearer</p>
              <p className="font-display text-base text-foreground">{weddingParty.ringBearer}</p>
            </div>
            <div>
              <p className="font-body text-xs uppercase tracking-[0.3em] text-accent font-medium mb-3">Bible Bearers</p>
              {weddingParty.bibleBearers.map((name) => (
                <p key={name} className="font-display text-base text-foreground">{name}</p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgrammeSection;
