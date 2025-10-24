import { useLanguage } from "@/contexts/LanguageContext";

interface ValueProp {
  titleKey: string;
  descriptionKey: string;
  color: string;
}

const DuoValueProps = () => {
  const { t } = useLanguage();

  const valueProps: ValueProp[] = [
    {
      titleKey: "valueProps.fun",
      descriptionKey: "valueProps.funDesc",
      color: "#3cbb90" // Teal
    },
    {
      titleKey: "valueProps.effective",
      descriptionKey: "valueProps.effectiveDesc",
      color: "#98a763" // Olive green
    },
    {
      titleKey: "valueProps.backedByScience",
      descriptionKey: "valueProps.backedByScienceDesc",
      color: "#b2d82c" // Lime green
    },
    {
      titleKey: "valueProps.stayMotivated",
      descriptionKey: "valueProps.stayMotivatedDesc",
      color: "#18613a" // Dark forest green
    },
    {
      titleKey: "valueProps.personalizedLearning",
      descriptionKey: "valueProps.personalizedLearningDesc",
      color: "#5bb246" // Bright green
    }
  ];

  return (
    <section style={{ background: 'white', padding: '60px 24px', borderBottom: '2px solid #E5E5E5' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '40px',
          justifyContent: 'center',
          alignItems: 'flex-start'
        }}>
          {valueProps.map((prop, index) => (
            <div
              key={index}
              className="duo-float-icon"
              style={{
                animationDelay: `${index * 0.3}s`,
                flex: '1 1 200px',
                maxWidth: '250px',
                minWidth: '200px',
                textAlign: 'center'
              }}
            >
              <h3 style={{
                fontSize: '28px',
                color: prop.color,
                marginBottom: '8px',
                fontWeight: 800
              }}>
                {t(prop.titleKey)}
              </h3>
              <p style={{
                fontSize: '16px',
                color: 'var(--duo-gray)',
                lineHeight: '1.5'
              }}>
                {t(prop.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DuoValueProps;
