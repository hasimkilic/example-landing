"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import apiClient from "@/lib/axios-client";
import { useI18n } from "@/lib/i18n/I18nProvider";

const ContactCta = () => {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<null | { type: "success" | "error"; message: string }>(null);
    const { t } = useI18n();

    useEffect(() => {
        if (!status) return;
        const t = setTimeout(() => setStatus(null), 5000);
        return () => clearTimeout(t);
    }, [status]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const formData = new FormData(form);
        const payload = {
            full_name: String(formData.get("full_name") || "").trim(),
            email: String(formData.get("email") || "").trim(),
            phone: String(formData.get("phone") || "").trim(),
            subject: String(formData.get("subject") || "").trim(),
            message: String(formData.get("message") || "").trim(),
        };

        setLoading(true);
        setStatus(null);
        try {
            const res = await apiClient.post("/web/contact", payload);
            const apiMsg = res?.data?.status?.message || t('contact.form.success');
            setStatus({ type: "success", message: apiMsg });
            form.reset();
        } catch (err: any) {
            const msg = err?.response?.data?.status?.message || err?.response?.data?.message || t('contact.form.error');
            setStatus({ type: "error", message: msg });
        } finally {
            setLoading(false);
        }
    };
    return (
        <section className="my-24">
            <div className="max-w-[1200px] mx-auto px-5 sm:px-10">
                <div className="bg-gradient-to-br from-[#259c84] to-[#1c7f6a] rounded-[30px] overflow-hidden">
                    <div className="grid lg:grid-cols-2 items-stretch">
                        {/* Left content */}
                        <div className="py-12 px-6 sm:p-12 md:p-16 flex flex-col justify-center text-center lg:text-left">
                            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                                {t('contact.form.heading')}
                            </h2>
                            <p className="mt-4 text-white/90 text-base max-w-prose mx-auto lg:mx-0">
                                {t('contact.form.intro')}
                            </p>
                            <p className="mt-4 text-white/90 text-base max-w-prose mx-auto lg:mx-0 flex flex-col">
                                {t('contact.form.contact-info.phone-label')}: <a href={`tel:${t('contact.form.contact-info.phone')}`} className="text-white underline">{t('contact.form.contact-info.phone')}</a>
                                <br />
                                {t('contact.form.contact-info.email-label')}: <a href={`mailto:${t('contact.form.contact-info.email')}`} className="text-white underline">{t('contact.form.contact-info.email')}</a>
                            </p>
                        </div>

                        {/* Right form */}
                        <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-10 md:p-12 lg:p-12">
                            <form className="grid grid-cols-1 gap-4 sm:gap-5" onSubmit={handleSubmit}>
                                {/* İsim Soyisim */}
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="full_name" className="text-sm font-medium text-white/90">
                                        {t('contact.form.fields.full_name.label')}
                                    </label>
                                    <input
                                        id="full_name"
                                        name="full_name"
                                        type="text"
                                        placeholder={t('contact.form.fields.full_name.placeholder')}
                                        className="h-12 rounded-xl px-4 text-base text-[#0a0a0a] placeholder:text-black/40 outline-none bg-white/90 focus:bg-white transition-colors"
                                        required
                                    />
                                </div>

                                {/* Telefon ve E-posta yan yana (lg) */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="phone" className="text-sm font-medium text-white/90">
                                            {t('contact.form.fields.phone.label')}
                                        </label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            inputMode="tel"
                                            placeholder={t('contact.form.fields.phone.placeholder')}
                                            className="h-12 rounded-xl px-4 text-base text-[#0a0a0a] placeholder:text-black/40 outline-none bg-white/90 focus:bg-white transition-colors"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="email" className="text-sm font-medium text-white/90">
                                            {t('contact.form.fields.email.label')}
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder={t('contact.form.fields.email.placeholder')}
                                            className="h-12 rounded-xl px-4 text-base text-[#0a0a0a] placeholder:text-black/40 outline-none bg-white/90 focus:bg-white transition-colors"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="subject" className="text-sm font-medium text-white/90">
                                        {t('contact.form.fields.subject.label')}
                                    </label>
                                    <input
                                        id="subject"
                                        name="subject"
                                        type="text"
                                        placeholder={t('contact.form.fields.subject.placeholder')}
                                        className="h-12 rounded-xl px-4 text-base text-[#0a0a0a] placeholder:text-black/40 outline-none bg-white/90 focus:bg-white transition-colors"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="message" className="text-sm font-medium text-white/90">
                                        {t('contact.form.fields.message.label')}
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder={t('contact.form.fields.message.placeholder')}
                                        rows={5}
                                        className="rounded-xl px-4 py-3 text-base text-[#0a0a0a] placeholder:text-black/40 outline-none bg-white/90 focus:bg-white transition-colors resize-y min-h-32"
                                        required
                                    />
                                </div>

                                {/* Status message */}
                                {status && (
                                    <div
                                        aria-live="polite"
                                        className={`mt-2 text-sm font-medium ${status.type === "success" ? "text-emerald-100" : "text-red-100"}`}
                                    >
                                        {status.message}
                                    </div>
                                )}

                                <motion.button
                                    type="submit"
                                    initial={{ backgroundColor: "#ffffff", color: "#259c84", borderColor: "#ffffff", scale: 1 }}
                                    whileHover={{ backgroundColor: loading ? "#ffffff" : "#259c84", color: loading ? "#259c84" : "#ffffff", borderColor: loading ? "#ffffff" : "#259c84", scale: loading ? 1 : 1.02 }}
                                    transition={{ duration: 0.25, ease: "easeInOut" }}
                                    disabled={loading}
                                    className={`mt-2 rounded-[8px] px-6 py-3.5 inline-flex items-center justify-center gap-2.5 border shadow-[0_4px_14px_0_rgba(37,156,132,0.12)] focus:outline-none ${loading ? "opacity-60 cursor-not-allowed" : "cursor-pointer hover:ring-1 hover:ring-offset-1 hover:ring-white"}`}
                                >
                                    <span className="font-medium text-base">{loading ? t('contact.form.submitting') : t('contact.form.submit')}</span>
                                </motion.button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactCta;