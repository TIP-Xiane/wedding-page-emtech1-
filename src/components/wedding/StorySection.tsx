import { motion } from "framer-motion";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import story4 from "@/assets/story-4.jpg";

const storyChapters = [
  {
    image: story1,
    title: "Where It All Began",
    date: "March 2019",
    text: "It was during a weekend nature trip with friends, out in the open fields with the mountains standing tall in the distance. Romeo, the easygoing and nonchalant guy, was simply enjoying the laughter and carefree vibe of the day. But when Juliet suddenly stumbled on the trail, everything changed in an instant. Without hesitation, he rushed to her side and carried her on his back, the two of them framed by the golden sunset. That moment — simple yet unforgettable — revealed how love can turn even the most laid-back soul into someone ready to protect and care. Minsan, sa isang hakbang na alalay, doon mo makikita kung gaano ka agad handang magmahal."
  },
  {
    image: story2,
    title: "The First Dance",
    date: "August 2020",
    text: "After countless coffee dates and long walks beneath the old acacia trees, they found themselves at a quaint jazz bar in the heart of Manila. Romeo asked her to dance. Neither of them were good dancers, but that night, they were perfect — two hearts swaying to the same gentle rhythm.",
  },
  {
    image: story3,
    title: "The Promise",
    date: "February 2023",
    text: "On a golden evening by the shore, with the sun painting the sky in hues of amber and rose, Romeo knelt before Juliet. With trembling hands and a heart full of devotion, he asked her the question that would change their lives forever. Through tears of joy, she whispered the sweetest “yes” the wind had ever carried. 'Ang bawat 'oo' na mula sa puso, ay simula ng pangako na walang hanggan.' ",
  },
  {
    image: story4,
    title: "Forever Begins",
    date: "April 2026",
    text:"And now, before God and the people they love most, Romeo and Juliet will seal their covenant — a promise not just of love, but of patience, of grace, and of unwavering faith in one another. This is not the end of their story; it is only the most beautiful beginning. 'Sa harap ng Diyos at ng lahat, ang pag-ibig na ito ay magiging walang hanggan. ' "  ,
  },
];

const StorySection = () => {
  return (
    <section id="story" className="py-24 md:py-32 bg-secondary/30 filipino-texture">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <p className="font-script text-3xl text-wedding-charcoal mb-2 filipino-ornament">Our Love Story</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-wedding-charcoal">
            A Journey Written by Fate
          </h2>
          <div className="w-20 h-[1px] bg-wedding-charcoal/40 mx-auto mt-6" />
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {storyChapters.map((chapter, index) => (
            <motion.div
              key={chapter.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-10 md:gap-16 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative overflow-hidden rounded-sm shadow-xl">
                  <img
                    src={chapter.image}
                    alt={chapter.title}
                    className="w-full h-[350px] md:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    width={800}
                    height={800}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <p className="font-body text-xs uppercase tracking-[0.3em] text-wedding-charcoal/70">
                  {chapter.date}
                </p>
                <h3 className="font-display text-3xl md:text-4xl font-light text-wedding-charcoal italic">
                  {chapter.title}
                </h3>
                <div className="w-12 h-[1px] bg-accent/50" />
                <p className="font-body text-sm md:text-base text-wedding-charcoal/80 leading-relaxed">
                  {chapter.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
