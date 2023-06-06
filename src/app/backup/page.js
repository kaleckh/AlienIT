'use client'
import Image from 'next/image'
import Funnel from '../funnel/page'
import { Quote } from '../SVG/Quote'
import { PatternFormat } from 'react-number-format'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/finance.module.css'
import React, { useRef, useLayoutEffect, useState, useEffect } from 'react'

export default function backup() {
  return (
    <div>
      <div style={{ color: 'black' }} className={styles.backgroundColor}>
        <Header />

        <div className={styles.section}>
          <div
            style={{
              width: '80%',
              height: '60%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div className={styles.mainTitle}>
              Safeguard Your Business with Alien IT's Robust Ransomware
              Protection Services
            </div>
            <div className={styles.buttonRow}>
              <div className={styles.paragraph}>
                Stop worrying about your security, let us worry for you
              </div>
            </div>
            <a href="/assesment">
              <div className={styles.arrowRow}>
                <div className={styles.bold}>Get A Free Assesment</div>
                <Image src={'/arrowR.webp'} height={30} width={30} />
              </div>
            </a>
          </div>
        </div>
        <div className={styles.sectionRow}>
          <div style={{width:"50%", display:"flex"}}>
            <Image src={'/health.webp'} width={200} height={200} />
          </div>
          <div className={styles.paragraph}>
            Alien IT understands the critical importance of protecting your
            business from the growing threat of ransomware attacks. Our
            dedicated team specializes in providing robust ransomware protection
            services that shield your systems and data from malicious encryption
            attempts. Leveraging advanced technologies and industry best
            practices, we proactively monitor your network, detect potential
            threats, and swiftly respond to mitigate any potential damage. With
            Alien IT as your trusted partner, you can rest assured that your
            business is equipped with the most effective ransomware protection
            solutions, allowing you to focus on your core operations without the
            fear of crippling cyberattacks.
          </div>
        </div>
      </div>
      <Funnel/>
      <Footer />
    </div>
  )
}
