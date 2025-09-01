// @ts-nocheck
/* eslint-disable */
"use client";

import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import styles from "./GenerateEstimate.module.css";

export const GenerateEstimate = () => {
  const [prompt, setPrompt] = useState("");
  const [phone, setPhone] = useState("");
  const [estimate, setEstimate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [emailSent, setEmailSent] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  useEffect(() => {
    const sendPhoneEmail = async () => {
      if (phone.trim().length >= 7 && !emailSent) {
        try {
          await fetch("/api/notify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: "Not provided",
              number: phone,
              comments: prompt || "No description provided",
            }),
          });
          setEmailSent(true);
        } catch (err) {
          console.error("Failed to send phone email:", err);
        }
      }
    };

    sendPhoneEmail();
  }, [phone, emailSent, prompt]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError(null);
    setEstimate(null);
    setPhoneError(false);

    if (phone.trim().length < 7) {
      setPhoneError(true);
      setError("Please enter a valid phone number.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/generate-estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      if (response.ok) {
        setEstimate(data.result);
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai_estimate" className="container scroll-anchor">
      <div
        className={`${styles.aiSection} component-mb relative flex flex-col items-center rounded-3xl p-10 shadow-lg ${styles.animateFadeIn}`}
      >
        {/* 🔑 Главный заголовок */}
        <h2
          className={`custom-heading ${styles.animatePulse} first-letter:text-main-yellow`}
        >
          Remodel Cost Calculator – Instant AI Estimate
        </h2>

        {/* 🔑 Скрытый подзаголовок для SEO */}
        <h3 className="sr-only">AI remodeling cost estimate tool</h3>

        {/* 🔑 SEO-описание */}
        <p className="text-main-gray text-center mb-6 max-w-2xl">
          Use our AI-powered remodel cost calculator to estimate project costs in Seattle.
          Enter your project details and instantly receive an estimated budget for your remodel.
        </p>

        {/* Форма */}
        <form onSubmit={handleSubmit} className="inside-mb w-full max-w-2xl">
          <textarea
            className={styles.textArea}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your remodel project (scope, size, rooms...)"
            rows={4}
            cols={70}
          ></textarea>

          {phoneError && (
            <p className="text-red-600 text-sm mt-2">
              Phone number is required.
            </p>
          )}

          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
            className={`${styles.textArea} mt-4 ${
              phoneError ? "border border-red-500" : ""
            }`}
          />

          <Button
            variant="secondary"
            className="mt-5 container flex justify-center"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <div className={styles.spinner}>
                <div className={styles.bounce1}></div>
                <div className={styles.bounce2}></div>
                <div className={styles.bounce3}></div>
              </div>
            ) : (
              "Get Estimate"
            )}
          </Button>
        </form>
      </div>

      {/* Ошибка */}
      {error && <p className={`${styles.errorText} mt-4`}>{error}</p>}

      {/* Лоадер */}
      {loading && (
        <div className={styles.loadingContainer}>
          <h3>Generating your estimate...</h3>
          <div className={styles.loadingAnimation}></div>
        </div>
      )}

      {/* Результат */}
      {estimate && phone.trim().length >= 7 && (
        <div className={`container ${styles.resultSection} component-mb`}>
          <h2 className={styles.textTitle}>Your Estimate</h2>
          <div className={styles.estimateBox}>
            <ReactMarkdown className={styles.markdown}>
              {estimate}
            </ReactMarkdown>
          </div>
        </div>
      )}
    </section>
  );
};
