import type { Metadata } from "next";
import Link from "next/link";
import {
  HiOutlineArrowLeft,
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import { PRIVACY_CONTACT } from "@/lib/data/privacy";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description:
    "Политика конфиденциальности ETERNA Production — как мы собираем, используем и защищаем персональные данные.",
};

const SECTIONS = [
  {
    title: "Какие данные мы собираем",
    intro: "Мы можем собирать следующую информацию:",
    items: [
      "Имя и фамилия",
      "Номер телефона",
      "Адрес электронной почты",
      "Информация из форм обратной связи",
      "Данные, которые пользователь добровольно предоставляет при подаче заявки",
    ],
  },
  {
    title: "Цель сбора данных",
    intro: "Собранная информация используется для:",
    items: [
      "Связи с клиентом",
      "Подготовки коммерческих предложений",
      "Оказания услуг компании",
      "Улучшения качества сервиса",
      "Информирования о новых услугах и предложениях",
    ],
  },
  {
    title: "Защита информации",
    text: "Мы принимаем необходимые технические и организационные меры для защиты персональных данных от несанкционированного доступа, изменения или удаления.",
  },
  {
    title: "Передача данных третьим лицам",
    text: "ETERNA Production не продаёт и не передаёт персональные данные третьим лицам, за исключением случаев, предусмотренных законодательством Республики Таджикистан.",
  },
  {
    title: "Файлы Cookie",
    text: "Сайт может использовать файлы Cookie для улучшения работы сайта, анализа посещаемости и повышения удобства пользователей.",
  },
  {
    title: "Права пользователя",
    intro: "Пользователь имеет право:",
    items: [
      "Запросить информацию о своих данных",
      "Изменить или удалить свои данные",
      "Отозвать согласие на обработку персональных данных",
    ],
  },
] as const;

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-hidden bg-background pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(200,155,92,0.14),transparent)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-32 h-64 w-64 rounded-full bg-gold/[0.04] blur-3xl"
        />

        <Container className="relative">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-xs tracking-[0.15em] text-beige-muted uppercase transition-colors hover:text-gold sm:mb-10"
          >
            <HiOutlineArrowLeft className="text-sm" />
            На главную
          </Link>

          <div className="mx-auto max-w-4xl">
            <p className="mb-3 text-xs font-bold tracking-[0.35em] text-gold uppercase">Правовая информация</p>
            <h1 className="font-display text-3xl font-bold tracking-wide text-gradient-gold sm:text-4xl lg:text-5xl">
              Политика конфиденциальности
            </h1>
            <div className="gold-line mt-6 max-w-xs" />

            <div className="mt-8 rounded-2xl border border-gold/15 bg-dark/70 p-6 backdrop-blur-sm sm:mt-10 sm:p-8">
              <p className="text-sm leading-relaxed text-beige-muted sm:text-[15px] sm:leading-7">
                Компания ETERNA Production уважает конфиденциальность своих клиентов и посетителей сайта.
                Настоящая Политика конфиденциальности объясняет, какие данные мы собираем, как их используем
                и защищаем.
              </p>
            </div>

            <div className="mt-6 space-y-4 sm:mt-8">
              {SECTIONS.map((section, index) => (
                <section
                  key={section.title}
                  className="rounded-2xl border border-gold/10 bg-white/[0.02] p-5 sm:p-6"
                >
                  <div className="mb-4 flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gold/25 bg-gold/10 font-display text-sm font-medium text-gold">
                      {index + 1}
                    </span>
                    <h2 className="pt-1 font-display text-xl font-bold text-beige sm:text-2xl">
                      {section.title}
                    </h2>
                  </div>

                  {"text" in section && section.text ? (
                    <p className="pl-[52px] text-sm leading-relaxed text-beige-muted sm:text-[15px] sm:leading-7">
                      {section.text}
                    </p>
                  ) : null}

                  {"intro" in section && section.intro ? (
                    <p className="mb-3 pl-[52px] text-sm text-beige-muted sm:text-[15px]">{section.intro}</p>
                  ) : null}

                  {"items" in section && section.items ? (
                    <ul className="space-y-2.5 pl-[52px]">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-relaxed text-beige-muted sm:text-[15px]"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}

              <section className="rounded-2xl border border-gold/20 bg-gold/[0.04] p-5 sm:p-6">
                <div className="mb-4 flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gold/25 bg-gold/10 font-display text-sm font-medium text-gold">
                    7
                  </span>
                  <h2 className="pt-1 font-display text-xl font-bold text-beige sm:text-2xl">
                    Контактная информация
                  </h2>
                </div>

                <p className="mb-5 pl-[52px] text-sm text-beige-muted sm:text-[15px]">
                  По вопросам обработки персональных данных вы можете связаться с нами:
                </p>

                <div className="grid gap-3 pl-[52px] sm:grid-cols-3">
                  <div className="rounded-xl border border-gold/15 bg-background/50 p-4">
                    <HiOutlinePhone className="mb-2 text-lg text-gold" />
                    <p className="text-xs tracking-[0.12em] text-gold uppercase">Телефон</p>
                    <p className="mt-1 text-sm text-beige">{PRIVACY_CONTACT.phone}</p>
                  </div>
                  <div className="rounded-xl border border-gold/15 bg-background/50 p-4">
                    <HiOutlineMail className="mb-2 text-lg text-gold" />
                    <p className="text-xs tracking-[0.12em] text-gold uppercase">Email</p>
                    <a
                      href={`mailto:${PRIVACY_CONTACT.email}`}
                      className="mt-1 block text-sm text-beige transition-colors hover:text-gold"
                    >
                      {PRIVACY_CONTACT.email}
                    </a>
                  </div>
                  <div className="rounded-xl border border-gold/15 bg-background/50 p-4 sm:col-span-1">
                    <HiOutlineLocationMarker className="mb-2 text-lg text-gold" />
                    <p className="text-xs tracking-[0.12em] text-gold uppercase">Адрес</p>
                    <p className="mt-1 text-sm leading-relaxed text-beige">{PRIVACY_CONTACT.address}</p>
                  </div>
                </div>
              </section>

              <section className="rounded-2xl border border-gold/10 bg-white/[0.02] p-5 sm:p-6">
                <div className="mb-4 flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gold/25 bg-gold/10 font-display text-sm font-medium text-gold">
                    8
                  </span>
                  <h2 className="pt-1 font-display text-xl font-bold text-beige sm:text-2xl">
                    Изменения политики
                  </h2>
                </div>
                <p className="pl-[52px] text-sm leading-relaxed text-beige-muted sm:text-[15px] sm:leading-7">
                  Компания оставляет за собой право вносить изменения в настоящую Политику
                  конфиденциальности. Актуальная версия всегда доступна на сайте.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
