import Layout from "@/components/Layout";
import Link from "next/link";
import styles from "./SettleSync.module.css";

export default function SettleSyncPage() {
  return (
    <Layout>
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.hero} style={{ position: "relative" }}>
            <div className={styles.sparkles} aria-hidden="true">
              <div className={styles.sparkle} style={{ left: "8%", top: "12%" }} />
              <div className={`${styles.sparkle} ${styles.sparkleBig}`} style={{ left: "46%", top: "6%" }} />
              <div className={styles.sparkle} style={{ right: "10%", top: "22%" }} />
              <div className={styles.sparkle} style={{ right: "18%", top: "52%" }} />
            </div>
            <div className={styles.kicker}>UX Portfolio Case Study</div>

            <h1 className={styles.title}>SettleSync</h1>
            <div className={styles.subtitle}>Transitioning into a new community</div>
            <p className={styles.desc}>
              An item-handling system that transforms moving from a stressful task into a connected, community-driven
              experience.
            </p>

            <div className={styles.badges}>
              <div className={styles.badge}>User Research</div>
              <div className={styles.badge}>Product Design</div>
              <div className={styles.badge}>Service Design</div>
              <div className={styles.badge}>App + Physical Touchpoints</div>
            </div>

            <div style={{ marginTop: 22 }}>
              <Link className={styles.topLink} href="/projects">
                ← Back to Projects
              </Link>
            </div>
          </div>

          <section className={styles.section}>
            <h2 className={styles.h2}>Problem</h2>
            <p className={styles.p}>
              Frequent relocation forces temporary residents to constantly make adjustments to their personal
              possessions, social connections, and lifestyle. Usable items are often thrown away — not because they're
              broken or worthless, but because moving them is costly or inconvenient, and they lack community
              connections to pass them on.
            </p>

            <div className={styles.callout}>
              <div className={styles.calloutStrong}>
                Over 50% of international students rent privately and move at least once a year
              </div>
              <div className={styles.calloutMeta}>Source: QILT 2023</div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>User quotes</h2>
            <div className={styles.quoteGrid}>
              <div className={styles.quote}>
                <div className={styles.quoteTop}>
                  <div className={styles.avatar}>U1</div>
                  <div className={styles.cardTitle}>Temporary resident</div>
                </div>
                <div className={styles.quoteText}>
                  “I usually don't get too involved with the community when I move a lot, it just hurts too much to care
                  too deeply.”
                </div>
              </div>

              <div className={styles.quote}>
                <div className={styles.quoteTop}>
                  <div className={styles.avatar}>U2</div>
                  <div className={styles.cardTitle}>Mover</div>
                </div>
                <div className={styles.quoteText}>
                  “I don't want to throw it away, but I also don't know who needs this lamp.”
                </div>
              </div>

              <div className={styles.quote}>
                <div className={styles.quoteTop}>
                  <div className={styles.avatar}>U3</div>
                  <div className={styles.cardTitle}>Student</div>
                </div>
                <div className={styles.quoteText}>
                  “There isn't a dedicated platform which lets me trade second-hand items safely.”
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Opportunities</h2>
            <div className={styles.cardGrid3}>
              <div className={styles.card}>
                <div className={styles.cardTitle}>Foster safe and convenient ways of exchanging second-hand items</div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardTitle}>Develop a simple, one-stop system for getting rid of items</div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardTitle}>Facilitate social connections through sharing and mutual help</div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Design problem statement</h2>
            <div className={styles.centerBox}>
              <div className={styles.statement}>
                How might we engage users in local community-based personal item sharing and exchange practices whilst
                still prioritising convenience?
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Solution</h2>
            <p className={styles.p}>
              SettleSync is a hybrid system that connects digital convenience with physical accessibility — including an
              app, donation stations, and e-trolleys.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>The three touchpoints</h2>
            <div className={styles.touchpoints}>
              <div className={styles.card}>
                <div className={styles.cardTitle}>Touchpoint 1 — A-WAY App</div>
                <p className={styles.p}>
                  Hyper-local marketplace for selling, donating, and requesting help. Chat-first design. Urgent posts get
                  boosted.
                </p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardTitle}>Touchpoint 2 — Donation Stations</div>
                <p className={styles.p}>
                  Physical drop-off points for light, low-value items. Located in apartments, uni campuses, libraries.
                </p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardTitle}>Touchpoint 3 — E-Trolleys</div>
                <p className={styles.p}>
                  Borrowable electric trolleys for transporting bulky items during moves. Book via app.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Value propositions</h2>
            <div className={styles.valueGrid}>
              <div className={styles.valueItem}>
                <div className={styles.valueLabel}>For Users</div>
                <div className={styles.p}>Convenient way to sell and donate</div>
              </div>
              <div className={styles.valueItem}>
                <div className={styles.valueLabel}>For Councils</div>
                <div className={styles.p}>Reduced waste, optimised collection</div>
              </div>
              <div className={styles.valueItem}>
                <div className={styles.valueLabel}>For Universities</div>
                <div className={styles.p}>Affordable learning resources</div>
              </div>
              <div className={styles.valueItem}>
                <div className={styles.valueLabel}>For Communities</div>
                <div className={styles.p}>Stronger sharing culture</div>
              </div>
              <div className={styles.valueItem}>
                <div className={styles.valueLabel}>For Environment</div>
                <div className={styles.p}>Reduced carbon footprint</div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Trivial Exchange as Social Icebreaker</h2>
            <p className={styles.p}>
              The small-item and non-item exchange feature encourages users to connect over casual transactions. It
              gives newcomers a natural reason to talk to neighbours — making the first conversation, often the hardest
              one, simple and meaningful.
            </p>
            <div className={styles.flowExample}>
              <div className={styles.pill}>Anyone going to USYD?</div>
              <div className={styles.arrow}>→</div>
              <div className={styles.pill}>Shared Uber</div>
              <div className={styles.arrow}>→</div>
              <div className={styles.pill}>New friendship</div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Urgency Amplification</h2>
            <p className={styles.p}>
              Users with time-sensitive needs can create urgent posts. As urgent posts increase, a cat mascot's
              expression intensifies — adding a fun, low-stakes visual cue that drives engagement without stress.
            </p>
            <div className={styles.card}>
              <div className={styles.cardTitle}>
                <span className={styles.cat}>🐱</span> Urgency is a visual signal — not a pressure mechanic
              </div>
              <p className={styles.p}>
                The mascot amplifies urgency in a playful way, helping users scan the feed and respond quickly.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>User testing insights</h2>
            <div className={styles.ba}>
              <div className={styles.baCol}>
                <div className={styles.baTitle}>Before</div>
                <ul className={styles.baList}>
                  <li className={styles.baRow}>
                    <div className={styles.baLeft}>Message function should be more prominent</div>
                    <div className={styles.baMid}>→</div>
                    <div className={styles.baRight}>Made messaging a primary CTA</div>
                  </li>
                  <li className={styles.baRow}>
                    <div className={styles.baLeft}>Unsure what 'bond level' meant</div>
                    <div className={styles.baMid}>→</div>
                    <div className={styles.baRight}>Removed bond level. Trust based on proximity (same building/uni)</div>
                  </li>
                  <li className={styles.baRow}>
                    <div className={styles.baLeft}>Donation should be simpler</div>
                    <div className={styles.baMid}>→</div>
                    <div className={styles.baRight}>One-tap “Convert to donation” if item doesn't sell</div>
                  </li>
                </ul>
              </div>

              <div className={styles.baCol}>
                <div className={styles.baTitle}>After</div>
                <ul className={styles.baList}>
                  <li className={styles.baRow}>
                    <div className={styles.baLeft}>Exchange should be more central</div>
                    <div className={styles.baMid}>→</div>
                    <div className={styles.baRight}>Made sharing the heart of the experience</div>
                  </li>
                  <li className={styles.baRow}>
                    <div className={styles.baLeft}>What if e-trolley runs out of battery?</div>
                    <div className={styles.baMid}>→</div>
                    <div className={styles.baRight}>Redesigned with clearer battery status</div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Persona</h2>
            <div className={styles.persona}>
              <div className={styles.personaCard}>
                <div className={styles.personaName}>Oliv, 22 — International Student</div>
                <div className={styles.personaQuote}>
                  “Honestly the worst part of moving isn't even packing, it's dragging all that bulky crap around with
                  nowhere to put it.”
                </div>
                <ul className={styles.needs}>
                  <li>One-stop convenience</li>
                  <li>Safe and fair exchanges</li>
                  <li>Low-effort community connection</li>
                </ul>
              </div>

              <div className={styles.personaCard}>
                <div className={styles.cardTitle}>Scenario</div>
                <p className={styles.p}>
                  “Oliv just moved into a new apartment. She needs to get to uni but the nearest bus stop is a 16-minute
                  walk away. She posts in the community carousel: 'Anyone going to USYD?' Zero, a neighbour, sees the
                  post. They share an Uber — saving money and making a new friend.”
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Key changes</h2>
            <div className={styles.baCol}>
              <div className={styles.baTitle}>What We Heard → What We Changed</div>
              <ul className={styles.baList}>
                <li className={styles.baRow}>
                  <div className={styles.baLeft}>Message function is important</div>
                  <div className={styles.baMid}>→</div>
                  <div className={styles.baRight}>Made messaging prominent on every post</div>
                </li>
                <li className={styles.baRow}>
                  <div className={styles.baLeft}>Donation is ethical but should be simpler</div>
                  <div className={styles.baMid}>→</div>
                  <div className={styles.baRight}>One-tap conversion to donation</div>
                </li>
                <li className={styles.baRow}>
                  <div className={styles.baLeft}>Exchange should be more central</div>
                  <div className={styles.baMid}>→</div>
                  <div className={styles.baRight}>Made sharing the heart of the experience</div>
                </li>
                <li className={styles.baRow}>
                  <div className={styles.baLeft}>What if e-trolley runs out of battery?</div>
                  <div className={styles.baMid}>→</div>
                  <div className={styles.baRight}>Redesigned with clearer battery status</div>
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Team</h2>
            <div className={styles.team}>
              <div className={styles.member}>
                Carmen <span>— UI/UX Designer</span>
              </div>
              <div className={styles.member}>
                Jessica <span>— UI/UX Designer</span>
              </div>
              <div className={styles.member}>
                Olivia <span>— UI/UX Designer</span>
              </div>
              <div className={styles.member}>
                Vincent <span>— Product Designer</span>
              </div>
              <div className={styles.member}>
                Zyun <span>— UI/UX Designer</span>
              </div>
            </div>
          </section>

          <div className={styles.final}>From moving stress to community connection — one exchange at a time.</div>
        </div>
      </div>
    </Layout>
  );
}
