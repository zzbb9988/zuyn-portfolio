import Layout from "@/components/Layout";
import DoorLinkButton from "@/components/DoorLinkButton";
import styles from "./Projects.module.css";

export default function ProjectsPage() {
  return (
    <Layout>
      <div className="zuyn-panel rounded-2xl">
        <div className="p-5 zuyn-surface zuyn-inner-highlight rounded-2xl">
          <h1 className="text-2xl font-semibold">Projects</h1>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Case studies and project pages live here.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className={styles.card}>
          <div className={styles.inner}>
            <div className={styles.thumb}>
              <img alt="SettleSync token" src="/settlesync-token.svg" />
            </div>

            <div className="mt-4">
              <div className={styles.title}>SettleSync</div>
              <div className={styles.subtitle}>Transitioning into a new community</div>

              <div className={styles.badges}>
                <span className={styles.badge}>User Research</span>
                <span className={styles.badge}>Product Design</span>
                <span className={styles.badge}>Service Design</span>
                <span className={styles.badge}>App + Physical Touchpoints</span>
              </div>
            </div>

            <div className="mt-5">
              <DoorLinkButton href="/projects/settlesync" labelClosed="Open SettleSync" labelOpen="Door opened" />
            </div>
          </div>
        </div>

        <div className={styles.cardDark}>
          <div className={styles.innerDark}>
            <div className={styles.thumb}>
              <img alt="Lululemon Chocolate token" src="/lululemon-chocolate-token.svg" />
            </div>

            <div className="mt-4">
              <div className={styles.titleGold}>Lululemon Chocolate</div>
              <div className={styles.subtitleLight}>When self-care falls into line</div>

              <div className={styles.badges}>
                <span className={styles.badgeDark}>3D Modelling</span>
                <span className={styles.badgeDark}>Brand Design</span>
                <span className={styles.badgeDark}>Poster Design</span>
                <span className={styles.badgeDark}>Packaging Design</span>
                <span className={styles.badgeDark}>Blender</span>
                <span className={styles.badgeDark}>Fusion 360</span>
              </div>
            </div>

            <div className="mt-5">
              <DoorLinkButton
                href="/projects/lululemon-chocolate"
                labelClosed="Open Lululemon Chocolate"
                labelOpen="Door opened"
                variant="red"
              />
            </div>
          </div>
        </div>

        <div className={styles.cardVibrant}>
          <div className={styles.innerVibrant}>
            <div className={styles.thumb}>
              <img alt="OlympiVerse token" src="/olympiverse-token.svg" />
            </div>

            <div className="mt-4">
              <div className={styles.titleVibrant}>OlympiVerse</div>
              <div className={styles.subtitleVibrant}>Predict. Play. Connect.</div>

              <div className={styles.badges}>
                <span className={styles.badgeVibrant}>UX Design</span>
                <span className={styles.badgeVibrant}>Product Design</span>
                <span className={styles.badgeVibrant}>Gamification</span>
                <span className={styles.badgeVibrant}>User Research</span>
                <span className={styles.badgeVibrant}>Figma</span>
                <span className={styles.badgeVibrant}>iOS + Web</span>
              </div>
            </div>

            <div className="mt-5">
              <DoorLinkButton
                href="/projects/olympiverse"
                labelClosed="Open OlympiVerse"
                labelOpen="Door opened"
                variant="vibrant"
              />
            </div>
          </div>
        </div>

        <div className={styles.cardUsyd}>
          <div className={styles.innerUsyd}>
            <div className={styles.thumb}>
              <img alt="SUEDE x Deloitte token" src="/suede-deloitte-token.svg" />
            </div>

            <div className="mt-4">
              <div className={styles.titleUsyd}>SUEDE x Deloitte</div>
              <div className={styles.subtitleUsyd}>Redesigning Unit of Study Selection</div>

              <div className={styles.badges}>
                <span className={styles.badgeUsyd}>UX Consulting</span>
                <span className={styles.badgeUsyd}>User Research</span>
                <span className={styles.badgeUsyd}>Product Design</span>
                <span className={styles.badgeUsyd}>Limited Time Competition 1st Place</span>
                <span className={`${styles.badgeUsyd} ${styles.badgeUsydRed}`}>Deloitte Case Crack</span>
              </div>
            </div>

            <div className="mt-5">
              <DoorLinkButton
                href="/projects/suede-deloitte"
                labelClosed="Open SUEDE x Deloitte"
                labelOpen="Door opened"
                variant="usyd"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
