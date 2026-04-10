import Layout from "@/components/Layout";
import Link from "next/link";
import styles from "./OlympiVerse.module.css";

export default function OlympiVersePage() {
  return (
    <Layout>
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.hero}>
            <div className={styles.lights} aria-hidden="true">
              <div className={styles.lightBeam} />
            </div>

            <div className={styles.kicker}>UX / PRODUCT CASE STUDY</div>
            <h1 className={styles.title}>OlympiVerse</h1>
            <div className={styles.subtitle}>Predict. Play. Connect. Your Olympic Experience, Reimagined!</div>
            <p className={styles.desc}>
              An interactive, gamified platform designed to revolutionize how Gen Z engages with the Olympic Games —
              transforming passive viewership into an immersive experience.
            </p>

            <div className={styles.badges}>
              <div className={styles.badge}>UX Design</div>
              <div className={styles.badge}>Product Design</div>
              <div className={styles.badge}>Gamification</div>
              <div className={styles.badge}>User Research</div>
              <div className={styles.badge}>Figma</div>
              <div className={styles.badge}>iOS + Web</div>
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
              The Olympic Games' legacy and cultural significance is threatened by failing to engage younger audiences.
              1/3 of Australians said they are unlikely to watch because they just aren't interested and don't know the
              athletes enough to be bothered to tune in.
            </p>
            <div className={`${styles.callout} ${styles.borderLime}`}>
              <div className={styles.calloutStrong}>
                Gen Z (ages 12-27) — declining traditional viewership, rising digital media consumption
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>User Quotes</h2>
            <div className={styles.quoteGrid}>
              <div className={`${styles.quote} ${styles.borderLav}`}>
                “I'm not going to go out of my way to watch a broadcast, there's so many other things I would rather do.”
              </div>
              <div className={`${styles.quote} ${styles.borderBlue}`}>“I have no motivation to tune in.”</div>
              <div className={`${styles.quote} ${styles.borderPink}`}>“There is too much focus on the political issues.”</div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Insights</h2>
            <div className={styles.grid3}>
              <div className={`${styles.card} ${styles.borderLime}`}>
                <div style={{ fontWeight: 950 }}>Convenience is King</div>
                <p className={styles.p}>
                  Gen Z values easily accessible, convenient content. Traditional coverage is losing appeal.
                </p>
              </div>
              <div className={`${styles.card} ${styles.borderLav}`}>
                <div style={{ fontWeight: 950 }}>Connection Gap</div>
                <p className={styles.p}>Users aren't connected with athletes enough to care about watching.</p>
              </div>
              <div className={`${styles.card} ${styles.borderPink}`}>
                <div style={{ fontWeight: 950 }}>Political Fatigue</div>
                <p className={styles.p}>Geopolitical tensions and social polarization reduce enthusiasm.</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Persona — Rowan</h2>
            <div className={styles.persona}>
              <div className={styles.personaTop}>
                <div className={styles.personaName}>Rowan, 22 — Uni Student, USA</div>
                <div className={styles.personaMeta}>Archetype: Chronically Online</div>
              </div>
              <div className={styles.personaQuote}>
                “I need a split screen of subway surfers on one side and my lecture on the other”
              </div>
              <div className={styles.grid3} style={{ marginTop: 14 }}>
                <div className={`${styles.card} ${styles.borderBlue}`}>
                  <div style={{ fontWeight: 950 }}>Goals</div>
                  <ul className={styles.list}>
                    <li>Stay updated on viral moments</li>
                    <li>Follow athletes on social media</li>
                    <li>Integrate trending content</li>
                  </ul>
                </div>
                <div className={`${styles.card} ${styles.borderPink}`}>
                  <div style={{ fontWeight: 950 }}>Pain Points</div>
                  <ul className={styles.list}>
                    <li>Struggles to find engaging content</li>
                    <li>No motivation to actively watch</li>
                  </ul>
                </div>
                <div className={`${styles.card} ${styles.borderLav}`}>
                  <div style={{ fontWeight: 950 }}>Quote</div>
                  <p className={styles.p}>
                    I need something that feels like my feed — fast, social, and easy to join.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Design Problem Statement</h2>
            <div className={styles.statement}>
              How can we design an engaging digital experience that increases Gen Z's Olympic viewership by connecting
              them with athletes through accessible storytelling, viral content, and cultural pride?
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Our Solution: OlympiVerse</h2>
            <p className={styles.p}>
              An interactive, gamified platform that transforms passive viewership into an immersive experience — giving
              users the power to predict, interact, and connect with athletes and fellow fans.
            </p>
            <div className={styles.twoCol}>
              <div className={`${styles.card} ${styles.borderLime}`}>
                <div style={{ fontWeight: 950 }}>Mobile App: Prediction Game</div>
                <ul className={styles.featureList}>
                  <li>Vote for athletes to win</li>
                  <li>Read athlete bios</li>
                  <li>Earn points</li>
                  <li>Mobile-exclusive for on-the-go engagement</li>
                </ul>
              </div>
              <div className={`${styles.card} ${styles.borderLav}`}>
                <div style={{ fontWeight: 950 }}>Web Platform: Virtual Stadium</div>
                <ul className={styles.featureList}>
                  <li>Interactive livestream with chat</li>
                  <li>Seat selection by country</li>
                  <li>Cheer for athletes in real-time</li>
                  <li>Desktop for immersive experience</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Key Feature 1: Prediction Game</h2>
            <p className={styles.p}>
              Users predict which athletes will win, earn points, and learn about athletes through curated bios —
              turning passive viewing into active participation.
            </p>
            <div className={styles.grid3}>
              <div className={`${styles.card} ${styles.borderLime}`}>
                <div style={{ fontWeight: 950 }}>MVP — Most likely to win</div>
              </div>
              <div className={`${styles.card} ${styles.borderBlue}`}>
                <div style={{ fontWeight: 950 }}>Loudest Cheer — Most fan support (linked to livestream)</div>
              </div>
              <div className={`${styles.card} ${styles.borderLav}`}>
                <div style={{ fontWeight: 950 }}>Underrated Athlete — Lesser-known athlete you want to support</div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Key Feature 2: Virtual Stadium</h2>
            <p className={styles.p}>
              Users select seats by country, cheer for athletes, take virtual selfies, and experience the Olympics as if
              they're in the stadium — building cultural pride and community connection.
            </p>
            <div className={styles.smallIconGrid}>
              <div className={`${styles.smallIcon} ${styles.borderLav}`}>
                <span className={styles.dot} /> Seat Selection by Country
              </div>
              <div className={`${styles.smallIcon} ${styles.borderLime}`}>
                <span className={styles.dot} style={{ background: "rgba(0,180,255,0.75)", boxShadow: "0 18px 55px rgba(0,180,255,0.25)" }} />
                Real-time Cheer Button
              </div>
              <div className={`${styles.smallIcon} ${styles.borderPink}`}>
                <span className={styles.dot} style={{ background: "rgba(255,102,204,0.75)", boxShadow: "0 18px 55px rgba(255,102,204,0.25)" }} />
                Virtual Selfies with Jumbotron
              </div>
              <div className={`${styles.smallIcon} ${styles.borderBlue}`}>
                <span className={styles.dot} style={{ background: "rgba(184,156,255,0.85)", boxShadow: "0 18px 55px rgba(184,156,255,0.25)" }} />
                Live Chat with Emotes
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Design Iterations</h2>
            <div className={styles.grid3}>
              <div className={`${styles.card} ${styles.borderLime}`}>
                <div style={{ fontWeight: 950 }}>Before 1</div>
                <p className={styles.p}>Prediction felt like sports betting</p>
                <div style={{ marginTop: 10, fontWeight: 950 }}>After 1</div>
                <p className={styles.p}>Three interpretive categories (MVP, Loudest Cheer, Underrated)</p>
              </div>
              <div className={`${styles.card} ${styles.borderLav}`}>
                <div style={{ fontWeight: 950 }}>Before 2</div>
                <p className={styles.p}>Virtual stadium seats were confusing</p>
                <div style={{ marginTop: 10, fontWeight: 950 }}>After 2</div>
                <p className={styles.p}>Select area by country first, then unlimited seats</p>
              </div>
              <div className={`${styles.card} ${styles.borderPink}`}>
                <div style={{ fontWeight: 950 }}>Before 3</div>
                <p className={styles.p}>Overwhelming color palette</p>
                <div style={{ marginTop: 10, fontWeight: 950 }}>After 3</div>
                <p className={styles.p}>Streamlined colors, muted slightly, better visual hierarchy</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>User Testing Results</h2>
            <div className={styles.metrics}>
              <div className={`${styles.card} ${styles.borderLime}`}>
                <div style={{ fontWeight: 950 }}>Predict Feature SUS Score</div>
                <div className={styles.metricNumber}>
                  66.7 → 69.3
                </div>
                <div className={styles.metricMeta}>Above industry average of 68</div>
              </div>
              <div className={`${styles.card} ${styles.borderLav}`}>
                <div style={{ fontWeight: 950 }}>Virtual Stadium SUS Score</div>
                <div className={styles.metricNumber}>
                  64.2 → 72.5
                </div>
                <div className={styles.metricMeta}>Significantly improved</div>
              </div>
            </div>
            <p className={styles.p} style={{ marginTop: 10 }}>
              Based on System Usability Scale (SUS) — average is 68
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Final Wireflow Link</h2>
            <div className={`${styles.linkBox} ${styles.borderBlue}`}>
              <div style={{ fontWeight: 950 }}>Interactive Figma Prototype</div>
              <div className={styles.links}>
                <a className={styles.gradButton} href="#">
                  View Predict Feature Wireflow
                </a>
                <a className={`${styles.gradButton} ${styles.gradButtonAlt}`} href="#">
                  View Virtual Stadium Wireflow
                </a>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Team</h2>
            <div className={styles.team}>
              <div className={`${styles.avatar} ${styles.borderLav}`}>
                Renee Wong <span className={styles.role}>UI/UX Designer</span>
              </div>
              <div className={`${styles.avatar} ${styles.borderBlue}`}>
                Ziying Wang <span className={styles.role}>UI/UX Designer</span>
              </div>
              <div className={`${styles.avatar} ${styles.borderPink}`}>
                Yinyi Zhu <span className={styles.role}>UI/UX Designer</span>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Looking Forward</h2>
            <div className={styles.future}>
              <div className={`${styles.card} ${styles.borderLime}`}>
                <div style={{ fontWeight: 950 }}>Community Discussions</div>
                <p className={styles.p}>Daily polls and discussions on athletes and events</p>
              </div>
              <div className={`${styles.card} ${styles.borderLav}`}>
                <div style={{ fontWeight: 950 }}>Team Events</div>
                <p className={styles.p}>Expand predictions to team-based sports</p>
              </div>
              <div className={`${styles.card} ${styles.borderPink}`}>
                <div style={{ fontWeight: 950 }}>More Gamification</div>
                <p className={styles.p}>Leaderboards, streaks, and badges</p>
              </div>
            </div>
          </section>

          <div className={styles.final}>
            Predict. Play. Connect. Your Olympic Experience, Reimagined.
          </div>
        </div>
      </div>
    </Layout>
  );
}
