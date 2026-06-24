"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import Button from "@/components/ui/Button";
import { FOOTER_CONTACTS } from "@/lib/data/footer";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

const SERVICES = [
  "SMM продвижение",
  "Видеопродакшн",
  "Фотосъёмка",
  "Обучение / Академия",
  "Другое",
] as const;

const inputClass =
  "w-full rounded-xl border border-gold/20 bg-background/60 px-4 py-3 text-sm text-beige placeholder:text-beige-muted/40 backdrop-blur-sm transition-colors focus:border-gold/50 focus:outline-none";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const phone = String(data.get("phone") ?? "");
    const email = String(data.get("email") ?? "");
    const service = String(data.get("service") ?? "");
    const message = String(data.get("message") ?? "");

    const body = [
      "Новая заявка с сайта ETERNA PRODUCTION",
      "",
      `Имя: ${name}`,
      `Телефон: ${phone}`,
      email ? `Email: ${email}` : null,
      `Услуга: ${service}`,
      message ? `Сообщение: ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${FOOTER_CONTACTS.email}?subject=${encodeURIComponent("Заявка с сайта")}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    setSubmitted(true);
    setLoading(false);
    form.reset();
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-gold/30 bg-background/50 px-6 py-10 text-center backdrop-blur-sm sm:px-10 sm:py-12"
      >
        <p className="font-display text-2xl text-beige sm:text-3xl">Спасибо!</p>
        <p className="mt-3 text-sm leading-relaxed text-beige-muted sm:text-base">
          Заявка отправлена. Мы свяжемся с вами в ближайшее время.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-8"
          onClick={() => setSubmitted(false)}
        >
          Отправить ещё
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <label htmlFor="name" className="mb-2 block text-[10px] tracking-[0.2em] text-gold uppercase">
            Имя *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Ваше имя"
            className={inputClass}
          />
        </motion.div>

        <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <label htmlFor="phone" className="mb-2 block text-[10px] tracking-[0.2em] text-gold uppercase">
            Телефон *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+992 90 000 00 00"
            className={inputClass}
          />
        </motion.div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        <motion.div custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <label htmlFor="email" className="mb-2 block text-[10px] tracking-[0.2em] text-gold uppercase">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="email@example.com"
            className={inputClass}
          />
        </motion.div>

        <motion.div custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <label htmlFor="service" className="mb-2 block text-[10px] tracking-[0.2em] text-gold uppercase">
            Услуга *
          </label>
          <select id="service" name="service" required defaultValue="" className={cn(inputClass, "appearance-none")}>
            <option value="" disabled>
              Выберите услугу
            </option>
            {SERVICES.map((service) => (
              <option key={service} value={service} className="bg-dark text-beige">
                {service}
              </option>
            ))}
          </select>
        </motion.div>
      </div>

      <motion.div custom={4} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <label htmlFor="message" className="mb-2 block text-[10px] tracking-[0.2em] text-gold uppercase">
          Сообщение
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Расскажите о вашем проекте..."
          className={cn(inputClass, "resize-none")}
        />
      </motion.div>

      <motion.div custom={5} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Button type="submit" disabled={loading} className="w-full px-10 py-4 text-xs sm:w-auto sm:text-sm">
          {loading ? "Отправка..." : "Оставить заявку"}
        </Button>
      </motion.div>
    </form>
  );
}

export function ContactInfo() {
  return (
    <div className="space-y-5 text-left sm:space-y-6">
      <a
        href={`tel:${FOOTER_CONTACTS.phone.replace(/\s/g, "")}`}
        className="flex items-center gap-3 text-sm text-beige-muted transition-colors hover:text-beige"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-gold/5">
          <HiOutlinePhone className="text-lg text-gold" />
        </span>
        {FOOTER_CONTACTS.phone}
      </a>
      <a
        href={`mailto:${FOOTER_CONTACTS.email}`}
        className="flex items-center gap-3 text-sm text-beige-muted transition-colors hover:text-beige"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-gold/5">
          <HiOutlineMail className="text-lg text-gold" />
        </span>
        {FOOTER_CONTACTS.email}
      </a>
      <p className="flex items-center gap-3 text-sm text-beige-muted">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-gold/5">
          <HiOutlineLocationMarker className="text-lg text-gold" />
        </span>
        {FOOTER_CONTACTS.address}
      </p>
    </div>
  );
}
