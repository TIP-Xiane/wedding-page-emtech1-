import { motion } from "framer-motion";
import { MapPin, Cloud, Sun, CloudRain, Thermometer } from "lucide-react";
import { useState, useEffect } from "react";
import cathedralImg from "@/assets/manila-cathedral.jpg";
import patioImg from "@/assets/patio-victoria.jpg";

const venues = [
  {
    label: "Ceremony",
    name: "Manila Cathedral",
    address: "Cabildo St, Intramuros, Manila, Philippines",
    description: "A historic and sacred sanctuary where faith meets beauty — the perfect setting for an eternal vow.",
    image: cathedralImg,
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.2!2d120.9739!3d14.5916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca1b0c3e9c49%3A0x3a693e6f5f72e3d!2sMinor%20Basilica%20and%20Metropolitan%20Cathedral%20of%20the%20Immaculate%20Conception!5e0!3m2!1sen!2sph!4v1699000000000!5m2!1sen!2sph",
  },
  {
    label: "Reception",
    name: "Patio Victoria",
    address: "Gen. Luna St, Intramuros, Manila, Philippines",
    description: "An enchanting courtyard adorned with timeless elegance — where the celebration of love continues under the stars.",
    image: patioImg,
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.2!2d120.9739!3d14.5916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca1b6e55e2d7%3A0x9e1b1e0a3e3d8e0!2sPatio%20Victoria!5e0!3m2!1sen!2sph!4v1699000000000!5m2!1sen!2sph",
  },
];

const LocationSection = () => {
  const [weather, setWeather] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(true);
  const [weatherError, setWeatherError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Manila&appid=d4cad7e86f4c2dbb6b339af309a3323a&units=metric`
        );
        if (!response.ok) throw new Error('Weather data unavailable');
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        setWeatherError(error.message);
      } finally {
        setWeatherLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const getWeatherIcon = (condition) => {
    if (condition.includes('rain')) return <CloudRain className="text-blue-500" size={24} />;
    if (condition.includes('cloud')) return <Cloud className="text-gray-500" size={24} />;
    return <Sun className="text-yellow-500" size={24} />;
  };

  return (
    <section id="location" className="py-24 md:py-32 bg-secondary/30 filipino-texture">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <p className="font-script text-3xl text-wedding-charcoal mb-2">The Venues</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-wedding-charcoal">
            Where Love Unfolds
          </h2>
          <div className="w-20 h-[1px] bg-wedding-charcoal/40 mx-auto mt-6" />
        </motion.div>

        <div className="space-y-20">
          {venues.map((venue, index) => (
            <motion.div
              key={venue.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Venue header */}
              <div className="text-center">
                <p className="font-body text-xs uppercase tracking-[0.4em] text-wedding-charcoal mb-2">{venue.label}</p>
                <h3 className="font-display text-3xl md:text-4xl text-wedding-charcoal italic font-light">{venue.name}</h3>
                <div className="flex items-center justify-center gap-2 mt-3">
                  <MapPin size={14} className="text-wedding-charcoal/70" />
                  <p className="font-body text-sm text-wedding-charcoal/70">{venue.address}</p>
                </div>
                <p className="font-body text-sm text-wedding-charcoal/75 mt-3 max-w-lg mx-auto leading-relaxed">
                  {venue.description}
                </p>
              </div>

              {/* Image + Map grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-[300px] md:h-[380px] object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    width={1024}
                    height={1024}
                  />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-lg bg-muted">
                  <iframe
                    src={venue.mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "300px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${venue.name}`}
                    className="h-[300px] md:h-[380px]"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Weather Widget */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-20 text-center"
        >
          <p className="font-script text-3xl text-wedding-charcoal mb-2">Wedding Day Weather</p>
          <h3 className="font-display text-2xl md:text-3xl font-light text-wedding-charcoal mb-8">
            Manila, Philippines - April 25, 2026
          </h3>
          <div className="max-w-md mx-auto bg-background/80 backdrop-blur-sm border border-border/60 rounded-xl p-6 shadow-lg">
            {weatherLoading ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
              </div>
            ) : weatherError ? (
              <p className="text-muted-foreground">Weather data unavailable</p>
            ) : weather ? (
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2">
                  {getWeatherIcon(weather.weather[0].main.toLowerCase())}
                  <span className="font-display text-2xl text-wedding-charcoal">
                    {Math.round(weather.main.temp)}°C
                  </span>
                </div>
                <p className="font-body text-sm text-wedding-charcoal/80 capitalize">
                  {weather.weather[0].description}
                </p>
                <div className="flex justify-between text-xs text-wedding-charcoal/70">
                  <span>Humidity: {weather.main.humidity}%</span>
                  <span>Wind: {weather.wind.speed} m/s</span>
                </div>
              </div>
            ) : null}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
