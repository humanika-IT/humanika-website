import React from "react";
import Image from "next/image";
import general from "../styles/General.module.css";
import typography from "../styles/Typography.module.css";

const ClientsPage = () => {
  return (
    <div className={general.container}>
      <div className={general.clients_container}>
        <h1 className={typography.page_title}>CLIENTS.</h1>
        <div className={general.grid_container}>
          {clients_list.map((item, index) => {
            return (
              <div
                className={general.logo_container}
                key={`organization-${index}`}
              >
                <Image
                  src={`/logo/${item.url}`}
                  alt={item.alt}
                  fill
                  // objectFit="contain"
                  // objectPosition="center"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ClientsPage;

const clients_list = [
  { alt: "", url: "logo_mandiri.png" },
  { alt: "", url: "logo_iic.png" },
  { alt: "", url: "logo_banana_inn.png" },
  { alt: "", url: "logo_kemdikbud.png" },
  { alt: "", url: "logo_c6gm.png" },
  { alt: "", url: "logo_bimaschi.png" },
  { alt: "", url: "logo_hikj.png" },
  { alt: "", url: "logo_dgallerie.png" },
  { alt: "", url: "logo_disbudpar.png" },
  { alt: "", url: "logo_paboi.png" },
  { alt: "", url: "logo_amaroossa.png" },
  { alt: "", url: "logo_pama.png" },
  { alt: "", url: "logo_giz.png" },
  { alt: "", url: "logo_kagum.png" },
  { alt: "", url: "logo_ummi.png" },
  { alt: "", url: "logo_pp.png" },
  { alt: "", url: "logo_gni.png" },
  { alt: "", url: "logo_isbi.png" },
  { alt: "", url: "logo_rshs.png" },
  { alt: "", url: "logo_ykan.png" },
  { alt: "", url: "logo_surya_maxima.png" },
  { alt: "", url: "logo_win_yourself.png" },
  { alt: "", url: "logo_upj.png" },
  { alt: "", url: "logo_tikomdik.png" },
  { alt: "", url: "logo_selasar.png" },
  { alt: "", url: "logo_honda.png" },
  { alt: "", url: "logo_mam.png" },
  { alt: "", url: "logo_galeri_soemardja.png" },
  { alt: "", url: "logo_hotel_golden_flower.png" },
  { alt: "", url: "logo_yumnasa.png" },
  { alt: "", url: "logo_grand_serela.png" },
];
