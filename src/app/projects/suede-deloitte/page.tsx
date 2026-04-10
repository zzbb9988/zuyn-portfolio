import Layout from "@/components/Layout";
import Link from "next/link";
import styles from "./SuedeDeloitte.module.css";

export default function SuedeDeloittePage() {
  return (
    <Layout>
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.hero}>
            <h1 className={styles.title}>SUEDE x Deloitte</h1>
            <div className={styles.subtitle}>Redesigning Unit of Study Selection</div>
            <p className={styles.desc}>
              A human-centered redesign of the University of Sydney's course enrollment system to help students plan
              their degrees with confidence and clarity.
            </p>

            <div className={styles.badges}>
              <div className={styles.badge}>UX Consulting</div>
              <div className={styles.badge}>User Research</div>
              <div className={styles.badge}>Product Design</div>
              <div className={styles.badge}>Limited Time Competition 1st Place</div>
              <div className={`${styles.badge} ${styles.badgeRed}`}>Deloitte Case Crack</div>
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
              Students struggle to understand their degree program's structure and requirements, leading to uncertainty
              about course selection, timing, and prerequisite fulfillment. Navigating elective courses and other
              enrichment opportunities adds to the confusion, hindering informed decision-making.
            </p>
            <div className={styles.calloutDense}>
              24 credit points of core units of study as set out in Table A, comprising three 1000-level units and one
              2000-level unit; a major (48 credit points)...
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Research</h2>
            <div className={styles.grid3}>
              <div className={styles.card}>
                <div className={styles.icon} />
                <div className={styles.featureTitle} style={{ marginTop: 10 }}>
                  Desktop Research
                </div>
                <p className={styles.p}>Academic literature on student preparedness</p>
              </div>
              <div className={styles.card}>
                <div className={`${styles.icon} ${styles.iconRed}`} />
                <div className={styles.featureTitle} style={{ marginTop: 10 }}>
                  Online Ethnography
                </div>
                <p className={styles.p}>Reddit forums analysis</p>
              </div>
              <div className={styles.card}>
                <div className={styles.icon} />
                <div className={styles.featureTitle} style={{ marginTop: 10 }}>
                  Structured Interviews
                </div>
                <p className={styles.p}>2 USYD students</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Key Themes from Research</h2>
            <div className={styles.grid4}>
              <div className={styles.card}>
                <div className={styles.featureTitle}>Poor UI/UX of university services disrupts academic planning</div>
              </div>
              <div className={styles.card}>
                <div className={styles.featureTitle}>Lack of effective centralized resources and support</div>
              </div>
              <div className={styles.card}>
                <div className={styles.featureTitle}>Insufficient guidance in understanding degree structures</div>
              </div>
              <div className={styles.card}>
                <div className={styles.featureTitle}>
                  Students face unit scheduling challenges, especially in final year
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Persona</h2>
            <div className={styles.persona}>
              <div className={styles.personaName}>Sarah, 20 — Bachelor of Commerce Student, Year 2</div>
              <div className={styles.personaQuote}>
                “I want to graduate with no regrets, no setbacks, and on time”
              </div>
              <div className={styles.grid3} style={{ marginTop: 14 }}>
                <div className={styles.card}>
                  <div className={styles.featureTitle}>Frustrations</div>
                  <ul className={styles.list}>
                    <li>Finds UI difficult to navigate when selecting units in 2nd year</li>
                    <li>Confused about when internships open and what units to take</li>
                  </ul>
                </div>
                <div className={styles.card}>
                  <div className={styles.featureTitle}>Goals</div>
                  <ul className={styles.list}>
                    <li>Take subjects that set her up for internships and a step into the workforce</li>
                  </ul>
                </div>
                <div className={styles.card}>
                  <div className={styles.featureTitle}>Quote</div>
                  <p className={styles.p}>I want to see exactly what I need, and how it affects my future.</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Pain Points</h2>
            <div className={styles.painGrid}>
              <div className={styles.card}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span className={styles.painDot} />
                  <div className={styles.featureTitle}>Forced to memorize potential units</div>
                </div>
                <p className={styles.p}>
                  The UI requires too much scrolling and mental retention — no way to save or compare courses
                </p>
              </div>
              <div className={styles.card}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span className={styles.painDot} />
                  <div className={styles.featureTitle}>Confusing table layout</div>
                </div>
                <p className={styles.p}>
                  Tables show enrolled units but don't reflect degree planning or progress toward graduation
                </p>
              </div>
              <div className={styles.card}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span className={styles.painDot} />
                  <div className={styles.featureTitle}>No visual structure</div>
                </div>
                <p className={styles.p}>
                  Students can't see their degree plan holistically — just a list of requirements
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Design Problem Statement</h2>
            <div className={styles.statement}>
              How might we enhance degree planning and unit of study selection for students at USYD desiring better
              alignment with their academic goals and interests?
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Solution</h2>
            <p className={styles.p}>
              A redesigned unit of study selection interface that brings clarity, structure, and confidence to degree
              planning.
            </p>
            <div className={styles.featureGrid}>
              <div className={styles.card}>
                <div className={styles.icon} />
                <div className={styles.featureTitle} style={{ marginTop: 10 }}>
                  Closable Instructions Area
                </div>
                <p className={styles.p}>
                  Important degree requirements and instructions can be expanded or collapsed — reducing clutter while
                  keeping guidance accessible
                </p>
              </div>
              <div className={styles.card}>
                <div className={`${styles.icon} ${styles.iconRed}`} />
                <div className={styles.featureTitle} style={{ marginTop: 10 }}>
                  Favorites & Comparison
                </div>
                <p className={styles.p}>Students can pin courses they're interested in and compare side-by-side</p>
              </div>
              <div className={styles.card}>
                <div className={styles.icon} />
                <div className={styles.featureTitle} style={{ marginTop: 10 }}>
                  Scenario Simulation Tags
                </div>
                <p className={styles.p}>Real-life scenario tags relate courses to career paths and internships</p>
              </div>
              <div className={styles.card}>
                <div className={styles.icon} />
                <div className={styles.featureTitle} style={{ marginTop: 10 }}>
                  Placeholder Tiles
                </div>
                <p className={styles.p}>Semester-by-semester credit tracking shows students what they need and where</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Additional Features</h2>
            <div className={styles.twoCol}>
              <div className={styles.card}>
                <div className={styles.featureTitle}>Collapsable Browsing</div>
                <p className={styles.p}>
                  Everything on one page with expandable sections — no interruption points, no constant page switching
                </p>
              </div>
              <div className={styles.card}>
                <div className={styles.featureTitle}>Visible Timetable Information</div>
                <p className={styles.p}>Course scheduling and timing information is prominently displayed, not buried</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Ideation Highlight</h2>
            <div className={styles.card}>
              <div className={styles.featureTitle}>Before</div>
              <p className={styles.p}>Drag and drop as selection method — visually structured degree planning</p>
              <div className={styles.featureTitle} style={{ marginTop: 14 }}>
                Note
              </div>
              <p className={styles.p}>Making the overall degree plan more visually structured</p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Mid-Fidelity Prototype</h2>
            <div className={styles.wire}>Mid-fidelity wireframes of unit selection interface</div>
            <div className={styles.caption}>Testing structural changes before high-fidelity visual design</div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Research Methodology</h2>
            <ul className={styles.smallList}>
              <li>On a scale of 1-10, how hard was planning your units in your first year?</li>
              <li>Can you highlight a time during unit selection that felt confusing?</li>
              <li>What resources did you find most helpful?</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Team</h2>
            <div className={styles.team}>
              <div className={styles.avatar}>
                Gaby <span className={styles.role}>UX Consultant</span>
              </div>
              <div className={styles.avatar}>
                Shav <span className={styles.role}>UX Consultant</span>
              </div>
              <div className={styles.avatar}>
                Zuyn <span className={styles.role}>UX Consultant</span>
              </div>
              <div className={styles.avatar}>
                Alice <span className={styles.role}>UX Consultant</span>
              </div>
            </div>
          </section>

          <div className={styles.final}>From confusion to clarity — helping students graduate on time, with confidence.</div>
        </div>
      </div>
    </Layout>
  );
}
