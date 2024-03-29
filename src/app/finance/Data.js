"use client";
import Image from "next/image";
import Link from "next/link";
import Funnel from "../funnel/page";
import { Quote } from "../SVG/Quote";
import { PatternFormat } from "react-number-format";
import Header from "../components/header";
import Footer from "../components/footer";
import Head from "next/head";
import styles from "../styles/finance.module.css";
import React, { useRef, useLayoutEffect, useState, useEffect } from "react";

export default function finance() {
  return (
    <div>

      <div style={{ color: "black" }} className={styles.backgroundColor}>
        <Header />

        <div className={styles.section}>
          <div
            style={{
              height: "70%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1 className={styles.mainTitle}>
              Streamline Your Accounting and Finance Operations with Our Robust
              IT Services
            </h1>
            <div className={styles.buttonRow}>
              <h2 className={styles.paragraph}>
                Enhance Efficiency and Security with Tailored IT Solutions for
                Accounting and Finance
              </h2>
            </div>            
              <div className={styles.arrowRow}>
                <Link href="/assesment"><div className={styles.bold}>Get A Free Assesment</div></Link>
                <Image alt={"right arrow"} src={"/static/right.webp"} height={30} width={30} />
              </div>            
          </div>
          <Image alt={"right arrow"} src={"/static/arrow.webp"} height={70} width={70} />
        </div>
        <div className={styles.sectionRow}>
          <div className={styles.eighty}>
            <div className={styles.imageContainer}>
              <Image
                alt={"it services for finance"}
                style={{ borderRadius: "5px" }}
                src={"/static/finance.webp"}
                fill={true}
              />
            </div>

            <div className={styles.stuff}>
              <h3 className={styles.title}>
                Elevating Accounting & Finance: Unlocking Potential with
                Comprehensive IT Services
              </h3>
              <div className={styles.paragraphfifty}>
                Revolutionize your accounting and finance processes with Alien
                IT, the leading provider of extraterrestrial technology
                solutions. Our expert team brings extensive experience in the
                financial sector to help you meet client needs and optimize your
                IT infrastructure. From automating tasks to safeguarding data,
                we implement cutting-edge tools like cosmic cloud technology and
                advanced security software. With Alien IT, serve your clients
                confidently, knowing your data is protected and your network is
                reliable and fast. Embark on an interstellar journey to success
                with us.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sectionOpposite}>
          <div className={styles.eightyOpposite}>
            <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                alt={"it services"}
                style={{ borderRadius: "5px" }}
                src={"/static/finance.webp"}
                width={500}
                height={400}
              />
            </div>
            <div className={styles.stuff}>
              <h4 className={styles.title}>
                Revolutionizing Financial Firms: Unleashing the Power of Managed
                IT Solutions
              </h4>
              <div className={styles.paragraphfifty}>
                At Alien IT, we specialize in simplifying the transition to
                cloud-based construction business applications. Our expert team
                Financial firms handle sensitive customer information every day,
                and to maintain customer trust and deliver top-notch services,
                managed IT becomes a game-changing solution. Protect your data
                and ensure your company's security with Alien IT's managed
                services. Our flexible offerings allow you to choose the
                services you need at a price point that fits your firm's budget.
                With scalable managed IT services, you can easily adapt the
                level of support to match your growth trajectory. Whether it's
                the high-pressure tax season or slower periods, our 24/7
                availability ensures prompt assistance. During quieter times, we
                focus on crafting your long-term strategy and efficiently
                managing day-to-day projects to drive productivity and success.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Funnel />
      <Footer />
    </div>
  );
}
