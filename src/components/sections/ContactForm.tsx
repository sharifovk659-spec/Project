"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { useLocale } from "@/components/providers/LocaleProvider";
import { FOOTER_CONTACTS } from "@/lib/data/footer";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

const SERVICES = [
  "contact.services.smm",
  "contact.services.video",
  "contact.services.photo",
  "contact.services.academy",
  "contact.services.other",
] as const;

const BUDGET_OPTIONS = [
  "contact.services.package500",
  "contact.services.package700",
  "contact.services.package1000",
] as const;

const inputClass =
  "w-full rounded-xl border border-gold/20 bg-background/60 px-4 py-3 text-sm text-beige placeholder:text-beige-muted/40 backdrop-blur-sm transition-colors focus:border-gold/50 focus:outline-none";

export default function ContactForm() {
  const { t } = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [budget, setBudget] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const phone = String(data.get("phone") ?? "");
    const email = String(data.get("email") ?? "");
    const service = String(data.get("service") ?? "");
    const selectedBudget = String(data.get("budget") ?? "");
    const message = String(data.get("message") ?? "");

    const body = [
      t("contact.form.mailHeader"),
      "",
      `${t("contact.form.mailName")}: ${name}`,
      `${t("contact.form.mailPhone")}: ${phone}`,
      email ? `${t("contact.form.mailEmail")}: ${email}` : null,
      selectedBudget ? `${t("contact.form.mailBudget")}: ${selectedBudget}` : null,
      `${t("contact.form.mailService")}: ${service}`,
      message ? `${t("contact.form.mailMessage")}: ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${FOOTER_CONTACTS.email}?subject=${encodeURIComponent(t("contact.form.mailSubject"))}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    setSubmitted(true);
    setLoading(false);
    setBudget("");
    form.reset();
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-gold/30 bg-background/50 px-6 py-10 text-center backdrop-blur-sm sm:px-10 sm:py-12"
      >
        <p className="font-display text-2xl font-bold text-beige sm:text-3xl">{t("contact.form.thanks")}</p>
        <p className="mt-3 text-sm leading-relaxed text-beige-muted sm:text-base">
          {t("contact.form.success")}
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-8"
          onClick={() => setSubmitted(false)}
        >
          {t("contact.form.again")}
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <label htmlFor="name" className="mb-2 block text-[10px] tracking-[0.2em] text-gold uppercase">
            {t("contact.form.name")}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder={t("contact.form.namePh")}
            className={inputClass}
          />
        </motion.div>

        <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <label htmlFor="phone" className="mb-2 block text-[10px] tracking-[0.2em] text-gold uppercase">
            {t("contact.form.phone")}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder={t("contact.form.phonePh")}
            className={inputClass}
          />
        </motion.div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        <motion.div custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <label htmlFor="email" className="mb-2 block text-[10px] tracking-[0.2em] text-gold uppercase">
            {t("contact.form.email")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder={t("contact.form.emailPh")}
            className={inputClass}
          />
        </motion.div>

        <motion.div custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <label htmlFor="service" className="mb-2 block text-[10px] tracking-[0.2em] text-gold uppercase">
            {t("contact.form.service")}
          </label>
          <select id="service" name="service" required defaultValue="" className={cn(inputClass, "appearance-none")}>
            <option value="" disabled>
              {t("contact.form.servicePh")}
            </option>
            {SERVICES.map((serviceKey) => (
              <option key={serviceKey} value={t(serviceKey)} className="bg-dark text-beige">
                {t(serviceKey)}
              </option>
            ))}
          </select>
        </motion.div>

        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="col-span-2"
        >
          <p className="mb-2 text-[10px] tracking-[0.2em] text-gold uppercase">{t("contact.form.budget")}</p>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {BUDGET_OPTIONS.map((key) => {
              const label = t(key);
              const selected = budget === label;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setBudget(selected ? "" : label)}
                  className={cn(
                    "rounded-lg border py-2.5 text-center text-xs tracking-wide transition-all sm:py-3 sm:text-sm",
                    selected
                      ? "border-gold/50 bg-gold/10 text-gold"
                      : "border-gold/20 bg-background/40 text-beige-muted hover:border-gold/35 hover:text-beige",
                  )}
                  aria-pressed={selected}
                >
                  {label}
                </button>
              );
            })}
          </div>
          <input type="hidden" name="budget" value={budget} />
        </motion.div>
      </div>

      <motion.div custom={5} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <label htmlFor="message" className="mb-2 block text-[10px] tracking-[0.2em] text-gold uppercase">
          {t("contact.form.message")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder={t("contact.form.messagePh")}
          className={cn(inputClass, "resize-none")}
        />
      </motion.div>

      <motion.div custom={6} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Button type="submit" disabled={loading} className="w-full px-10 py-4 text-xs sm:w-auto sm:text-sm">
          {loading ? t("contact.form.submitting") : t("contact.form.submit")}
        </Button>
      </motion.div>
    </form>
  );
}
