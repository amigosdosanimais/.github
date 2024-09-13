import PropTypes from "prop-types";
import React from "react";
import { IconPicture } from "./IconPicture";
import styles from "./style.module.css";

export const CardVertical = ({ efeito, botO }) => {
  return (
    <div className={`${styles['card-vertical']} ${styles[efeito]} ${styles[botO]}`}>
      <div className={styles.content}>
        <div className={styles.image}>
          <div className={styles['overlap-group']}>
            <div className={styles['rectangle-wrapper']}>
              <div className={styles.rectangle} />
            </div>
            <IconPicture className={`${botO === "nenhum" ? styles.class : styles['class-2']}`} />
          </div>
        </div>
        {["dois", "um"].includes(botO) && (
          <>
            <div className={styles['t-tulo']}>
              <div className={styles['text-wrapper']}>Título</div>
            </div>
            <div className={styles['par-grafo']}>
              <p className={styles.div}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in porttitor sapien. Sed non tincidunt
                turpis. Aliquam fermentum ut lorem nec ornare. Curabitur elit erat, accumsan ac condimentum vel,
                elementum quis nisi. Maecenas pretium, felis quis congue dignissim, elit diam aliquam elit, vel
                porttitor arcu ipsum vel tortor. Cras lobortis, ex id finibus ullamcorper, orci ligula consequat sapien,
                quis tempus turpis sapien a sapien. Aliquam elit nibh, laoreet quis congue vel, imperdiet vitae neque.
                Integer id dolor ac tellus fringilla faucibus. Nulla accumsan ligula in mattis luctus. Suspendisse sit
                amet nunc nisl. Sed rutrum sem auctor sem convallis, in mollis dolor fermentum. Praesent fringilla nibh
                quis molestie porta. Aenean commodo, nibh quis pretium finibus, urna urna ullamcorper tortor, eu
                scelerisque mauris leo vel sapien. Donec luctus metus quis lectus vulputate, quis ultrices mauris
                semper. Pellentesque eu augue tellus. Maecenas rhoncus aliquet mollis.
              </p>
            </div>
            <div className={styles.button}>
              <div className={styles['bot-o-default']}>
                <div className={styles['state-layer']}>
                  <div className={styles['text-wrapper-2']}>Botão</div>
                </div>
              </div>
              {botO === "dois" && (
                <div className={styles['state-layer-wrapper']}>
                  <div className={styles['state-layer']}>
                    <div className={styles['text-wrapper-3']}>Botão</div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {botO === "nenhum" && (
          <>
            <div className={styles['div-wrapper']}>
              <div className={styles['text-wrapper-4']}>Título</div>
            </div>
            <div className={styles['par-grafo-2']}>
              <p className={styles.p}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in porttitor sapien. Sed non tincidunt
                turpis. Aliquam fermentum ut lorem nec ornare. Curabitur elit erat, accumsan ac condimentum vel,
                elementum quis nisi. Maecenas pretium, felis quis congue dignissim, elit diam aliquam elit, vel
                porttitor arcu ipsum vel tortor. Cras lobortis, ex id finibus ullamcorper, orci ligula consequat sapien,
                quis tempus turpis sapien a sapien. Aliquam elit nibh, laoreet quis congue vel, imperdiet vitae neque.
                Integer id dolor ac tellus fringilla faucibus. Nulla accumsan ligula in mattis luctus. Suspendisse sit
                amet nunc nisl. Sed rutrum sem auctor sem convallis, in mollis dolor fermentum. Praesent fringilla nibh
                quis molestie porta. Aenean commodo, nibh quis pretium finibus, urna urna ullamcorper tortor, eu
                scelerisque mauris leo vel sapien. Donec luctus metus quis lectus vulputate, quis ultrices mauris
                semper. Pellentesque eu augue tellus. Maecenas rhoncus aliquet mollis.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

CardVertical.propTypes = {
  efeito: PropTypes.oneOf(["stroke", "nenhum", "elevated"]),
  botO: PropTypes.oneOf(["nenhum", "um", "dois"]),
};
