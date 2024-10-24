"use client";
import Image from "next/image";
import Link from "next/link";
import Funnel from "../funnel/page";
import { Quote } from "../SVG/Quote";
import { PatternFormat } from "react-number-format";
import Header from "../components/header";
import Head from "next/head";
import Footer from "../components/footer";
import styles from "../styles/finance.module.css";
import React, { useRef, useLayoutEffect, useState, useEffect } from "react";

export default function backup() {
  return (
    <div>
      <div style={{ color: "black" }} className={styles.backgroundColor}>
        <Header />
        <div style={{ height: "530px" }} className={styles.section}>
          <div
            style={{
              width: "95%",
              height: "70%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1 className={styles.mainTitle}>
              Safeguard Your Business: Comprehensive Backup and Restore
              Solutions by Alien IT
            </h1>
            <div className={styles.buttonRow}>
              <h2 className={styles.paragraph}>
                Stop worrying about your backups, let us worry for you
              </h2>
            </div>            
              <div className={styles.arrowRow}>
                <Link href="/assesment"><div className={styles.bold}>Get A Free Assessment</div></Link>
                <Image alt={"right arrow"} src={"/static/right.webp"} height={30} width={30} />
              </div>            
          </div>
        </div>

        <div className={styles.sectionRow}>
          <div className={styles.eighty}>
            <div className={styles.imageContainer}
            >
              <Image
                alt={"secure your business with our backup services"}
                src={"/static/rest2.webp"}
                fill={true}
              />
            </div>
            <div className={styles.stuff}>
              <h3 className={styles.title}>
                Secure Your Business with Alien IT's Robust Backup and Restore
                Services
              </h3>
              <div className={styles.paragraphfifty}>
                At Alien IT, we understand the critical importance of protecting
                your business from unforeseen data loss and system failures.
                That's why we offer top-notch Backup and Restore services to
                safeguard your valuable information and ensure business
                continuity. Our dedicated team specializes in implementing robust
                backup solutions tailored to your specific needs, ensuring that
                all your critical data is securely backed up and readily available
                when you need it the most. In the event of any data loss or system
                failure, our expert technicians swiftly initiate the restore
                process, minimizing downtime and restoring your operations to full
                functionality. With Alien IT as your trusted partner, you can have
                peace of mind knowing that your business is well-prepared against
                data loss and equipped with reliable backup and restore solutions.
                Focus on your core operations while we take care of securing your
                invaluable data.
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
