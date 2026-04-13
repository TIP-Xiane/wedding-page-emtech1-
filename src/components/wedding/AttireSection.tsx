import { motion } from "framer-motion";
import attireMen from "@/assets/attire-men.jpg";
import attireWomen from "@/assets/attire-women.jpg";

const AttireSection = () => {
  return (
    <section id="attire" className="py-24 md:py-32 bg-background/85 filipino-texture">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <p className="font-script text-3xl text-wedding-charcoal mb-2">Dress Code</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-wedding-charcoal">
            Attire Guide
          </h2>
          <div className="w-20 h-[1px] bg-wedding-charcoal/40 mx-auto mt-6" />
          <p className="font-body text-sm text-wedding-charcoal/75 mt-6 max-w-xl mx-auto leading-relaxed">
            We kindly ask our beloved guests to honour the solemnity of the occasion
            by wearing formal Filipino attire. Your elegance graces our celebration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-4xl mx-auto">
          {/* Men */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center space-y-6"
          >
            <div className="overflow-hidden rounded-sm shadow-xl mx-auto max-w-sm">
              <img
                src={attireMen}
                alt="Men's attire - Barong Tagalog"
                className="w-full h-[450px] md:h-[520px] object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
                width={720}
                height={1080}
              />
            </div>
            <div>
              <h3 className="font-display text-2xl text-wedding-charcoal italic font-light mb-2">For the Gentlemen</h3>
              <p className="font-body text-sm text-wedding-charcoal/80 leading-relaxed">
                Formal <span className="italic font-medium text-foreground">Barong Tagalog</span> — a timeless
                symbol of Filipino heritage and refinement. Paired with dark slacks and formal shoes.
              </p>
            </div>
          </motion.div>

          {/* Women */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-center space-y-6"
          >
            <div className="overflow-hidden rounded-sm shadow-xl mx-auto max-w-sm">
              <img
                src={attireWomen}
                alt="Women's attire - Formal gown"
                className="w-full h-[450px] md:h-[520px] object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
                width={720}
                height={1080}
              />
            </div>
            <div>
              <h3 className="font-display text-2xl text-wedding-charcoal italic font-light mb-2">For the Ladies</h3>
              <p className="font-body text-sm text-wedding-charcoal/80 leading-relaxed">
                Elegant floor-length gowns in <span className="italic font-medium text-foreground">champagne, blush,
                or muted earth tones</span>. Kindly avoid wearing white, as it is reserved for the bride.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Color palette */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Preferred Colour Palette</p>
          <div className="flex justify-center gap-4">
            {["#D4B896", "#C9B99A", "#B8A88A", "#A89070", "#E8D5C4", "#D4C4B0"].map((color) => (
              <div
                key={color}
                className="w-10 h-10 rounded-full border border-border shadow-sm"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AttireSection;
