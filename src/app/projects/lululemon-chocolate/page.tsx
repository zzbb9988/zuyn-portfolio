import Layout from "@/components/Layout";
import Link from "next/link";
import styles from "./LululemonChocolate.module.css";

export default function LululemonChocolatePage() {
  return (
    <Layout>
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.hero}>
            <div className={styles.date}>November 2024</div>
            <div className={styles.kicker}>3D / BRANDING CASE STUDY</div>

            <h1 className={styles.title}>Lululemon Chocolate</h1>
            <div className={styles.subtitle}>When self-care falls into line</div>
            <p className={styles.desc}>
              A premium chocolate concept that embodies discipline, self-care, and the journey from mediocrity to
              excellence.
            </p>

            <div className={styles.badges}>
              <div className={styles.badge}>3D Modelling</div>
              <div className={styles.badge}>Brand Design</div>
              <div className={styles.badge}>Poster Design</div>
              <div className={styles.badge}>Packaging Design</div>
              <div className={styles.badge}>Blender</div>
              <div className={styles.badge}>Fusion 360</div>
            </div>

            <div style={{ marginTop: 22 }}>
              <Link className={styles.topLink} href="/projects">
                ← Back to Projects
              </Link>
            </div>
          </div>

          <section className={styles.section}>
            <h2 className={styles.h2}>Brand Identity</h2>
            <p className={styles.p}>
              Lululemon's design and concept make each piece feel like an investment in well-being, justifying the
              premium price. In a multiverse where Lululemon starts manufacturing chocolate, 'Lululemon Chocolate'
              embodies a transition from mediocrity to excellence. It promotes discipline, self-care, and simplicity.
              Branded in passionate red with a logo shaped like a cocoa fruit, Lululemon Chocolate connects deeply with
              its origins.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Core Concept</h2>
            <div className={styles.grid4}>
              <div className={`${styles.card} ${styles.cardBrown}`}>
                <div className={styles.icon} />
                <div className={styles.cardTitle} style={{ marginTop: 10 }}>
                  7-Day Spiral Staircase
                </div>
                <p className={styles.p}>
                  The packaging represents balance, continuous growth, and sustainable progress across seven days of the
                  week.
                </p>
              </div>
              <div className={`${styles.card} ${styles.cardBrown}`}>
                <div className={styles.icon} />
                <div className={styles.cardTitle} style={{ marginTop: 10 }}>
                  Tangram Variations
                </div>
                <p className={styles.p}>
                  Each chocolate is crafted as a tangram piece, reflecting the diversity of life's states — from
                  relaxation to aspiration.
                </p>
              </div>
              <div className={`${styles.card} ${styles.cardBrown}`}>
                <div className={styles.icon} />
                <div className={styles.cardTitle} style={{ marginTop: 10 }}>
                  Work-Life Balance
                </div>
                <p className={styles.p}>Promoting healthy balance through design, inviting mindful self-care.</p>
              </div>
              <div className={`${styles.card} ${styles.cardBrown}`}>
                <div className={styles.icon} />
                <div className={styles.cardTitle} style={{ marginTop: 10 }}>
                  Golden Gradient
                </div>
                <p className={styles.p}>
                  The use of gold adds dimension and creates a sense of simple luxuriousness.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Design Process — Draft vs Final</h2>
            <div className={styles.ba}>
              <div className={styles.card}>
                <div className={styles.cardTitle}>Before (Draft)</div>
                <p className={styles.p}>
                  Included coffee cup, chocolate splashes, 100% cocoa sign — which created confusion and made it feel
                  like a coffee advertisement.
                </p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardTitle}>After (Final)</div>
                <p className={styles.p}>
                  Removed distracting elements. Focused on the chocolate products themselves, the tangram variations,
                  and the 7-day packaging concept. Cleaner, more refined message.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Final Poster Design</h2>
            <div className={styles.frame}>
              <div className={styles.frameInner}>
                <div className={styles.cardTitle}>
                  Final Poster Image — Dark gradient background, spiral staircase packaging, seven chocolate tangram
                  pieces displayed
                </div>
                <div className={styles.caption}>
                  Dark, smooth, gradient background to associate with minimalism and zen-like feeling.
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>The Seven Chocolates</h2>
            <div className={styles.seven}>
              <Day label="Day 1" shape="circle" desc="Represents rest — gentle start." />
              <Day label="Day 2" shape="square" desc="Represents energy — forward motion." />
              <Day label="Day 3" shape="triangle" desc="Represents focus — sharpened intent." />
              <Day label="Day 4" shape="square" desc="Represents balance — steady rhythm." />
              <Day label="Day 5" shape="circle" desc="Represents play — lightness returns." />
              <Day label="Day 6" shape="triangle" desc="Represents ambition — upward push." />
              <Day label="Day 7" shape="square" desc="Represents reflection — integrate the week." />
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>3D Modelling Process</h2>
            <div className={styles.grid4} style={{ gridTemplateColumns: "repeat(1, minmax(0, 1fr))" }}>
              <div className={styles.card}>
                <div className={styles.cardTitle}>Step 1 — Blender</div>
                <p className={styles.p}>
                  Used for rendering and material application. Blender allows me to see a rendered view in viewport
                  shading mode, which boosts a sense of achievement and helps externalise ideas in real time.
                </p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardTitle}>Step 2 — Fusion 360</div>
                <p className={styles.p}>
                  Used for parametric modelling and chocolate design. Parametric modelling was a game changer — once
                  incorporated, everything started to feel enjoyable and I felt free to try different design
                  possibilities.
                </p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardTitle}>Step 3 — Photoshop</div>
                <p className={styles.p}>
                  Used for final poster assembly. Soft round brush on layer masking creates shadow effects that are
                  detailed and natural-looking.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Key Design Elements</h2>
            <div className={styles.grid4}>
              <div className={styles.card}>
                <div className={styles.cardTitle}>Golden Gradient Colour</div>
                <p className={styles.p}>Adds dimension and simple luxuriousness</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardTitle}>Spiral Staircase Packaging</div>
                <p className={styles.p}>Represents the upward journey of bettering ourselves</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardTitle}>Tangram Variations</div>
                <p className={styles.p}>Seven pieces, seven days, seven states of life</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardTitle}>Passionate Red + Cocoa Logo</div>
                <p className={styles.p}>Connects back to the origins of chocolate</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Reflection</h2>
            <div className={styles.quote}>
              “One element that resonated with me was 'playful design'. Adding gamification elements in a non-game
              context works on improving the overall experience from a non-usability perspective, and acts on balancing
              the mood of users.”
            </div>
            <div className={styles.insights}>
              <div className={styles.card}>
                <div className={styles.cardTitle}>Adding Playfulness</div>
                <p className={styles.p}>
                  I wanted to add a sense of exploration, a feeling of freedom to explore different possibilities of
                  oneself. This is where I decided to incorporate tangram variations — it helped me refine my concept.
                </p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardTitle}>On AI</div>
                <p className={styles.p}>
                  I don't feel threatened by generative AI. I perceive design as a process supported by justifications,
                  cultural context, and meaningful considerations. AI will never reproduce what I am able to create.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Tools Used</h2>
            <div className={styles.tools}>
              <div className={styles.pill}>Blender</div>
              <div className={styles.pill}>Fusion 360</div>
              <div className={styles.pill}>Photoshop</div>
              <div className={styles.pill}>Illustrator</div>
            </div>
          </section>

          <div className={styles.final}>
            A journey from mediocrity to excellence — one chocolate, one day, one step at a time.
          </div>
        </div>
      </div>
    </Layout>
  );
}

function Day({
  label,
  shape,
  desc,
}: {
  label: string;
  shape: "circle" | "square" | "triangle";
  desc: string;
}) {
  return (
    <div className={styles.day}>
      <div className={styles.dayLabel}>{label}</div>
      {shape === "triangle" ? (
        <div style={{ marginTop: 12 }}>
          <div className={styles.shapeTriangle} />
        </div>
      ) : (
        <div className={`${styles.shape} ${shape === "circle" ? styles.shapeCircle : ""}`} />
      )}
      <div className={styles.dayDesc}>{desc}</div>
    </div>
  );
}
