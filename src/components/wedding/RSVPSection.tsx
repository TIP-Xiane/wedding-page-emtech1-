import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

const RSVPSection = () => {
  const [guestName, setGuestName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [hasPlusOne, setHasPlusOne] = useState(false);
  const [plusOneName, setPlusOneName] = useState("");
  const [attendance, setAttendance] = useState<"accepts" | "declines" | null>(null);
  const [dietary, setDietary] = useState("");
  const [message, setMessage] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const normalizeName = (value: string) => value.replace(/[^a-zA-Z\s'-]/g, "");
  const normalizePhone = (value: string) => value.replace(/\D/g, "").slice(0, 11);
  const isFormValid =
    guestName.trim().length > 0 &&
    attendance !== null &&
    email.trim().length > 0 &&
    phone.length === 11;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    setShowConfirm(true);
  };

  const confirmSubmit = () => {
    setShowConfirm(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="rsvp" className="py-24 md:py-32 bg-secondary/30 filipino-texture">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl mx-auto px-6 text-center"
        >
          <Heart className="mx-auto text-accent mb-6" size={48} />
          <h2 className="font-display text-4xl text-foreground italic font-light mb-4">Thank You</h2>
          <p className="font-body text-muted-foreground">
            Your response has been received with gratitude. We look forward to celebrating this beautiful day with you.
          </p>
        </motion.div>
      </section>
    );
  }

  const inputClass =
    "w-full bg-transparent border-b border-border/80 py-3 font-display text-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors";

  return (
    <section id="rsvp" className="py-24 md:py-32 bg-secondary/30 filipino-texture">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="font-script text-3xl text-wedding-charcoal mb-2">Kindly Respond</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-wedding-charcoal">
            You Are Cordially Invited
          </h2>
          <div className="w-20 h-[1px] bg-wedding-charcoal/40 mx-auto mt-6" />
          <p className="font-body text-sm text-wedding-charcoal/75 mt-6 max-w-md mx-auto leading-relaxed">
            We would be truly honoured by your presence on our most cherished day.
            Please let us know if you will grace us with your company.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          onSubmit={handleSubmit}
          className="bg-background/80 backdrop-blur-sm border border-border/60 rounded-xl p-8 md:p-12 shadow-lg space-y-8"
        >
          {/* Guest name */}
          <div className="space-y-2">
            <label className="font-body text-xs uppercase tracking-[0.2em] text-wedding-charcoal/70">
              Your Name
            </label>
            <input
              type="text"
              autoComplete="name"
              value={guestName}
              onChange={(e) => setGuestName(normalizeName(e.target.value))}
              placeholder="Enter your full name"
              required
              maxLength={100}
              className={inputClass}
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="font-body text-xs uppercase tracking-[0.2em] text-wedding-charcoal/70">
              Email Address
            </label>
            <input
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              required
              maxLength={255}
              className={inputClass}
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label className="font-body text-xs uppercase tracking-[0.2em] text-wedding-charcoal/70">
              Phone Number
            </label>
            <input
              type="tel"
              inputMode="numeric"
              pattern="[0-9]{11}"
              value={phone}
              onChange={(e) => setPhone(normalizePhone(e.target.value))}
              placeholder="639123456789"
              required
              maxLength={11}
              className={inputClass}
            />
            <p className="font-body text-xs text-wedding-charcoal/60 mt-1">
              Please enter exactly 11 digits, no letters or symbols.
            </p>
          </div>

          {/* Plus one toggle */}
          <div className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer group text-wedding-charcoal/80">
              <div
                className={`w-5 h-5 rounded-sm border-2 flex items-center justify-center transition-colors ${
                  hasPlusOne ? "bg-accent border-accent" : "border-border hover:border-accent/50"
                }`}
                onClick={() => setHasPlusOne(!hasPlusOne)}
              >
                {hasPlusOne && (
                  <svg className="w-3 h-3 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className="font-body text-sm text-foreground">I have a plus one</span>
            </label>

            <AnimatePresence>
              {hasPlusOne && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="pl-8"
                >
                  <input
                    type="text"
                    autoComplete="name"
                    value={plusOneName}
                    onChange={(e) => setPlusOneName(normalizeName(e.target.value))}
                    placeholder="Guest's full name"
                    maxLength={100}
                    className={inputClass}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Attendance */}
          <div className="space-y-4">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Attendance
            </p>
            <p className="font-display text-base text-muted-foreground italic">
              We can't wait to celebrate with you! Will you be joining us?
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => setAttendance("accepts")}
                className={`flex-1 py-4 px-6 rounded-lg border-2 font-display text-lg italic transition-all ${
                  attendance === "accepts"
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-border text-muted-foreground hover:border-accent/40"
                }`}
              >
                Joyfully Accepts
              </button>
              <button
                type="button"
                onClick={() => setAttendance("declines")}
                className={`flex-1 py-4 px-6 rounded-lg border-2 font-display text-lg italic transition-all ${
                  attendance === "declines"
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-border text-muted-foreground hover:border-accent/40"
                }`}
              >
                Regretfully Declines
              </button>
            </div>
          </div>

          {/* Dietary Restrictions */}
          <div className="space-y-2">
            <label className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Dietary Restrictions
            </label>
            <p className="font-display text-sm text-muted-foreground italic">
              Please let us know of any allergies or dietary needs so we may accommodate you with care.
            </p>
            <input
              type="text"
              value={dietary}
              onChange={(e) => setDietary(e.target.value)}
              placeholder="e.g. Vegetarian, No seafood, Nut allergy…"
              maxLength={200}
              className={inputClass}
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Words for the Couple (Optional)
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Share your blessings..."
              maxLength={500}
              rows={3}
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!isFormValid}
            className="w-full py-4 bg-primary text-primary-foreground font-body text-sm uppercase tracking-[0.3em] rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Send Your Response
          </button>
        </motion.form>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirm} onOpenChange={setShowConfirm}>
        <DialogContent className="bg-background border-border rounded-xl max-w-md">
          <DialogHeader className="text-center">
            <div className="mx-auto mb-4">
              <Heart className="text-accent mx-auto" size={36} />
            </div>
            <DialogTitle className="font-display text-2xl md:text-3xl italic font-light text-foreground">
              Confirm Your Response
            </DialogTitle>
            <DialogDescription className="font-body text-sm text-muted-foreground mt-3 leading-relaxed">
              Please review your details before we receive your gracious reply.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3 py-4 border-t border-b border-border/50 my-2">
            <div className="flex justify-between">
              <span className="font-body text-xs uppercase tracking-widest text-muted-foreground">Name</span>
              <span className="font-display text-sm text-foreground italic">{guestName}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-body text-xs uppercase tracking-widest text-muted-foreground">Email</span>
              <span className="font-body text-sm text-foreground">{email}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-body text-xs uppercase tracking-widest text-muted-foreground">Phone</span>
              <span className="font-body text-sm text-foreground">{phone}</span>
            </div>
            {hasPlusOne && plusOneName && (
              <div className="flex justify-between">
                <span className="font-body text-xs uppercase tracking-widest text-muted-foreground">Plus One</span>
                <span className="font-display text-sm text-foreground italic">{plusOneName}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="font-body text-xs uppercase tracking-widest text-muted-foreground">Attendance</span>
              <span className="font-display text-sm text-accent italic">
                {attendance === "accepts" ? "Joyfully Accepts" : "Regretfully Declines"}
              </span>
            </div>
            {dietary && (
              <div className="flex justify-between">
                <span className="font-body text-xs uppercase tracking-widest text-muted-foreground">Dietary</span>
                <span className="font-body text-sm text-foreground">{dietary}</span>
              </div>
            )}
          </div>

          <DialogFooter className="flex flex-col sm:flex-row gap-3 mt-2">
            <button
              onClick={() => setShowConfirm(false)}
              className="flex-1 py-3 border-2 border-border rounded-lg font-body text-sm uppercase tracking-widest text-muted-foreground hover:border-accent/40 transition-colors"
            >
              Go Back
            </button>
            <button
              onClick={confirmSubmit}
              className="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-body text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors"
            >
              Confirm
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default RSVPSection;
