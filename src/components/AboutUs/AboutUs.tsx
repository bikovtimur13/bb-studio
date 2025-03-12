import { useEffect, useState } from "react";
import styles from "./AboutUs.module.scss";
import { AboutUsData } from "./_types";

const AboutUs: React.FC = () => {
  const [data, setData] = useState<AboutUsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/about");
        if (!response.ok) {
          throw new Error("Ошибка загрузки данных");
        }
        const result: AboutUsData = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Неизвестная ошибка");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="main-wrapper"><p>Загрузка...</p></div>;
  if (error) return <div className="main-wrapper"><p>Ошибка: {error}</p></div>;

  return (
    <div className="main-wrapper">
      <section className={styles.aboutUs}>
        <h2 className={styles.aboutUs__heading}>О нас</h2>
        <p className={styles.aboutUs__description}>{data?.description}</p>
        <div className={styles.aboutUs__stats}>
          {data?.stats.map((stat, index) => (
            <div key={index} className={styles.aboutUs__stat}>
              <div className={styles.aboutUs__valueContainer}>
                <span className={styles.aboutUs__value}>{stat.value}</span>
                <span className={styles.aboutUs__meta}>{stat.meta}</span>
              </div>
              <span className={styles.aboutUs__label}>{stat.label}</span>
            </div>
          ))}
        </div>
      </section >
    </div >
  );
};

export default AboutUs;
