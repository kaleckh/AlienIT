'use client'
import Image from 'next/image'
import { Quote } from './SVG/Quote'
import Footer from './components/footer'
import Link from 'next/link'
import Header from '../app/components/header'
import styles from '../app/styles/page.module.css'
import React, { useRef, useLayoutEffect, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [fixedHeader, setFixedHeader] = useState(false)
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const HEADER_HEIGHT = 90
  const router = useRouter()
  return (
    <div className={styles.main}>
      <div className={styles.backgroundColor}>
        <Header />

        <div className={styles.section}>
          <div className={styles.mainTitle}>
            Easy IT Support For All Businesses In Utah
          </div>
          <div className={styles.buttonRow}>
            <Link href="/assesment/" title="buy new and used copiers">
              <button className={styles.buttonRed}>Get Started</button>
            </Link>
            <button
              onClick={() => {
                router.push('/assesment')
              }}
              className={styles.button}
            >
              Call 801-123-4567
            </button>
          </div>
        </div>
      </div>

      <div className={styles.sectionRow}>
        <div className={styles.buttonRow}>
          <Image
            alt={"Expert managed IT services"}
            src={'/professional.webp'}
            height={375}
            width={375}
            style={{ borderRadius: '10px' }}
          />
        </div>
        <div className={styles.centerRow}>
          <div className={styles.midTitle}>Expert Managed IT Services</div>
          <div className={styles.paragraph}>
            Welcome to Alien IT, your trusted destination for comprehensive
            Managed IT Services. With our industry expertise and commitment to
            excellence, we provide tailored solutions for network security,
            cloud computing, data management, and technical support. Our
            proactive approach ensures seamless operations by identifying and
            resolving potential issues before they disrupt your business. With
            Alien IT as your partner, you can focus on driving growth while we
            handle your IT challenges. Experience the transformative power of
            our expertly managed services and unlock the full potential of your
            technology infrastructure. Contact us today to take your business to
            the next level with Alien IT.
          </div>
        </div>
      </div>
      <div className={styles.sectionServiceRow}>
        <div className={styles.mainTitleFull}>Our Services Include</div>
        <div className={styles.serviceRow}>
          <div className={styles.sideRowLeft}>
            <div>
              <h2 className={styles.title}>Ransomware Protection</h2>
              <div className={styles.paragraph}>
                Ransomware evolves, anti-ransomware utilities will evolve as
                well.
              </div>
            </div>
            <div>
              <h2 className={styles.title}>Backup And Restore</h2>
              <div className={styles.paragraph}>
                Allowing users to create backups & restore from backups created
                earlier.
              </div>
            </div>
            <div>
              <h2 className={styles.title}>Full Printer Support</h2>
              <div className={styles.paragraph}>
                Download drivers, run diagnostic tools & troubleshoot your
                printer
              </div>
            </div>
            <div>
              <h2 className={styles.title}>Network Efficiency</h2>
              <div className={styles.paragraph}>
                Concept of efficiency can be applied to both local & global
                scales in a network
              </div>
            </div>
          </div>
          <div className={styles.imageContainerFront}>
            <Image
              alt={"Alien IT services"}
              src={'/support.webp'}
              fill={true}
              style={{ borderRadius: '10px' }}
            />
          </div>
          <div className={styles.sideRowLeft}>
            <div>
              <h2 className={styles.title}>
                Secure Collabration and cloud support{' '}
              </h2>
              <div className={styles.paragraph}>
                Secure Collaboration can provide secure, fully managed cloud
                services
              </div>
            </div>
            <div>
              <h2 className={styles.title}>Fix Broken Hardware </h2>
              <div className={styles.paragraph}>
                Replacing hardware that is out of service & installing new
                hardware
              </div>
            </div>
            <div>
              <h2 className={styles.title}>Secure And Fast Setup</h2>
              <div className={styles.paragraph}>
                Stay secure with optional verification setup
              </div>
            </div>
            <div>
              <h2 className={styles.title}>Software And App Support</h2>
              <div className={styles.paragraph}>
                Application support specialist can provide technical support to
                clients
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          flexDirection: 'column',
          paddingBottom: '40px',
          height: '450px',
        }}
        className={styles.sectionRow}
      >
        <div className={styles.middle}>
          <h3 className={styles.reviewBig}>Recent Google Reviews...</h3>
        </div>
        <div className={styles.reviewRow}>
          <div className={styles.paragraphContainer}>
            <div className={styles.title}>Tara Bennets</div>
            <div className={styles.smallRow}>
              <Quote />
              <div className={styles.titleSmall}>
                People there are always fantastic to work with. I recommend them
                to everyone
              </div>
            </div>
          </div>
          <div className={styles.paragraphContainer}>
            <div className={styles.title}>Kyle Francis</div>
            <div className={styles.smallRow}>
              <Quote />
              <div className={styles.titleSmall}>
                Great company to work with. They have friendly staff and were
                able to get me up and running within a few days.
              </div>
            </div>
          </div>
          <div className={styles.paragraphContainer}>
            <div className={styles.title}>Carley Ward</div>
            <div className={styles.smallRow}>
              <Quote />
              <div className={styles.titleSmall}>
                This company is the best to do work with. They are very friendly
                and very helpful.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.centerReview}>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.google.com/maps/place/Copiers+for+Less/@40.599545,-111.9827469,13z/data=!4m12!1m2!2m1!1scopiers+utah!3m8!1s0x87528bb3da9348f5:0x52af9011e571a1bf!8m2!3d40.599545!4d-111.9065292!9m1!1b1!15sCgxjb3BpZXJzIHV0YWhaDiIMY29waWVycyB1dGFokgEVY29waWVyX3JlcGFpcl9zZXJ2aWNlmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU4xTjJaeE0xTjNFQUXgAQA!16s%2Fg%2F1hc90lr04"
          >
            <button className={styles.bigButton}>See All Google Reviews</button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}
