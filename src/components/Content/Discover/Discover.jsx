import React, {useState} from "react";
import styles from './Discover.module.css'

const Discover = ({onAddDiscoverClick}) => {
  const [activeMenu, setActiveMenu] = useState("Destination")
  const destinations = [
    { id: 1, name: "Sadranan Beach", image: "https://s3-alpha-sig.figma.com/img/841d/4ec1/a56bd53e89ea83670f34452a10f77b47?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OxDROU5fgRMShLTM-GjIPhT25JptfxM9yp1m3B4RSNJRk4kvkMEADI7QQKc39SH5BA2MDCuyy3f1UF1QdVtC3qf5-fbfPVH7hORHyNG~cyVpJcCYky-vasdKqLW3ZWALzsjjJAdc5k0xHX9OVpN88fRR9~SNrTrFsG9Bd8qV6uGrS0EizIRyXJtZvAlf9SA8R5oSyNWIzcZfUOqteA7yoA43gN2UdfTiPPgLFSxEjZZOWn-fHRr3YFl5Sx~keqQHRtu9MLfPY9p-dIXLXZd28FuQhAD~jx164ExzU~zK1U86ylFzSgp7IjGepGf6mb207kWh6nKN8fXxsgDu-0fHNA__" },
    { id: 2, name: "Sundak Beach", image: "https://s3-alpha-sig.figma.com/img/5b9a/3533/141c3ab77488bd4dc78883ac68f79352?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OlQ0L7mXdBTs8j4Qbzr1lwCdhV~T--Ka9ZSXTbby-x1ULcSJaedxX12Dy-Y2TzuLZSJ44VbZoLr8ung5cNTooqiez2PzYu0Vvpp8gsxu2EM-i3qNh7GGoZvz7DkVbBOhzS9F8G1U8wuUQNAnO2BCFwLK3if36XUWGanDr-u8vzWdYoWVWSMsyR1S9TaqeTTdSc-kgmvTXiTAaFxmY-F3iU4hi9vvt1-hPjnRFZnJnqDnDaY-z8LLwUvm8nptREeb33UeDD8UoVXWBuwk6VYAONLamBhVT2glRYf0Lr2UV-OhglPCdWRQm~THLS~qfMiE7ZA3fcT8ad34qocTWbPe7g__" },
    { id: 3, name: "Krakal Beach", image: "https://s3-alpha-sig.figma.com/img/fe12/a760/71c8c15094eed664e5f6566649c890a8?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D8Yug8Vy2t3rOlSTHg1ohHz-ckoGavb0T1THF6HRSy4J070iWL0jzhmF9wwG1FU4avt-kNoCl-uuPYpiX-opcdEoq-GNbZOOAfKuPeHo3TyBxz7Tjzgl~TLefbFqxAofZib2I~~v4Ho30m4Bo6f-7Z-RIJJC~5O8Q~Uza4StUjp4WF26qWhiVbhrqJD4EGsjrCUL1wHpiOCc1L-4H94J8RrSW4sJ~8~MWie7ilrQxF7SAvGVRw~QZ~RrWB0zmstKljYMXL37S4ZDR0PqpdD9tfbviij5uXYwCThLDIqi0b2oqjatF7TFvBf-non328lUJNDYsggxZgm0hEVnX-3gww__" },
    { id: 4, name: "Wedi Ombo Beach", image: "https://s3-alpha-sig.figma.com/img/7dc7/f346/432c0ccdf62a123627ce3b18c7936deb?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fKZTpmv2rQgFea5o2IEVq2o8C1FLNwiWcVgzn5f~FD6mdkHZRXS~t58pSylW6prlNjojjeOxBeG9gTD5pyoskJQC7w~UGPRlkWl9D1xiKeFqW0QubxCeYteH-jdVxA0rwH~tu9ZUnyTlTPEEa7ripxv~qvLctzPj8crQ9~Lqj~4WlmAXYqUUUtJ20kjT5AEXxnRKyuOag5xuTw-Clcqg9DcyFtoKLbQwbgvvKed-c~MuPfBqjoYJq6aLB7~pwVCBYbgmLcuruynN2EmtW8PxKo8jN2rKaKB8D2MMxIHu5d4Ix~NZQFWB3VJF5jCPLxqu6u2-kxdLxjPAFezIUHc5Tw__" },
    { id: 5, name: "Depok Beach", image: "https://s3-alpha-sig.figma.com/img/0dee/9ba1/b6feee5c0670af649292190ec0773c96?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=naqeOHZMvaPROQqkyxNSx-aijc~rHzzJ6F-UA~TieIC5iIw6qrMZZueTHrmJpz6fhu3xaYv0Q4oyWX3Flv7wDFK18qdjAhqG7E4hWj2xQyw6VDCo6lF1JPlfzHxdM2DoPdJUw37m5zJAzyH3E6AKFJYWbPrgaaR~hnBfDi3H9-gfT70snGkwNUT0er3MEbH~JbyEwAQPKZKINpfxpygyJPBQCLmxKbfpfKkvCjnJHfu-pYqD-cTda~6Q2eP4HPX36MmNya7szKCeHyAM0Mz2XGz8FNxRI-diMipkKVnNoM1RL-ylPUqm6pUj853J3DUL4pLTKzo5oOTdBMK36ge1tw__" },
    { id: 6, name: "Kukup Beach", image: "https://s3-alpha-sig.figma.com/img/b460/94bd/ac37f1692da7aa9dc04340719a51cb9c?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VJrqEngAo-CIFrkge50JQwMO6CbQ79bQPWDpQlamIjyIVg4MAevVmdq0Ut~FkK3H-GrhPoOe5d-DpjNoOFpcNXbI4GtQYKZ1SmRuBt7~Prec5skGmsAk0xSKBvRholgHOnfHmyl-fuxE8rW3GbRRGz7aJCmE~w-ptgmMMG8JsqR4gIw4W7NKPJZPTIXCc~GFDGOH6ZK~MYc-KX6FCEO1QcScQGMZFNMPTViIWPH-m3pOwyTx~m7BlZ2njwUHPYuy8c8lhF38ORC3qSukifuQqa9EZ4ANDXosxrfXdteZ16lyihV1rqyYnTA2lFA2pV~wonYAXaawiI25VhziK86~vw__" },
  ];

  const culinary = [
    { 
      id: 1, 
      name: "Gudeg", 
      description: "Gudeg is a traditional Yogyakarta dish made from young jackfruit cooked with coconut milk and various spices.",
      image: "https://s3-alpha-sig.figma.com/img/2511/b4bf/b9839d2bbbbc60301bad8362be697c08?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S5qWvaBLJzANc4T1KqT-u1y5y9drYr32U643CnH8csHnoSMBkWkwW2DgkC6GdYGsx9zS97UBDZjV7sKHzhpPeHAvMm4-9Qy5QgM5pCz23oJv9nTsr9Nw5WG6d2HEkJUUGrIuqMf0krhyhCLkUYIi9tv8IkrG~maV~Xg~~YAjfI0ZKYBGNPhbrWskfU3YoTUhzpF5z4V4hpbpBz7ev8M3oO6TVahHnDEw-4JTGHvso0ohaelJqzhC~wpFgnff0INB9gNLSb~gRKmgosmRrvM3Fb0Hmw2-bu1zTyLYjVCjsjhZoBkraxqcf1oAW1Esjh4XRuA-rsMszbv6eoa~I2qPYA__" 
    },
    { 
      id: 2, 
      name: "Dawet Ayu Ice", 
      description: "Yogyakarta's typical ice dawet ayu is a refreshing traditional drink, consisting of green cendol, coconut milk and liquid brown sugar, served with shaved ice or ice cubes. Even though it originates from...",
      image: "https://s3-alpha-sig.figma.com/img/7815/5a4b/8f06b1aa30d14219435b4e8442ee6793?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B5hbZhLvXDrmoEeePDCdpPiWB2K9dHGxXIliRBCppsZgt8ZiM6XBp8mJ6eV3EGeL-6cLSUTcJTZrIa08FVeQJdRBkHPDopyQ5vx7xAYV0E68v3uc-yckF4ywgJ5XBthMEvLtDjypDcCEtW1emkiMeKA0lyqyIVLY28yPp4F3nMcQnh9XvI1Ib31jmPTEf5TN8-IUe55X7IHHHnLceEIMNNbsQZ9bl7cdhBLMV6Gunp3A962S68xg-H34X8Xy~DXaYEgtg7u5O6aXwP8d3AYrE322LtK54-2XHKH8QOxrc4cdaI9fRTeBeIXgab1FISsK8hEtckHA-1eXnxmOp1S7Lg__" 
    },
    { 
      id: 3, 
      name: "Joss Coffee", 
      description: "Joss coffee is a unique black coffee from Yogyakarta because it is served by inserting hot charcoal into a coffee cup. The 'joss' sound when the charcoal is put into the coffee....",
      image: "https://s3-alpha-sig.figma.com/img/5a56/d355/7d5502857d9adcd6a81a06278b3963ee?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kQA1qAo9xg6~EJsYNnK~xEtpy6V7zW5tIKToLwWkhHoeAofto4OxAMhDpyF2bfHeUdzS4u1nVJk14x62b2Tvkl8Ml-GIn2hMRVqY-Bwk-8njppjlHYgvIXdwBlOHMMRBLF-yvRP1Fio22vApGsKDdiV3OQPV8Q7ZnNIDTEmIGwNcl4IFtNOqzZuowPA8DQwWYfy9u3CertNVo~Ztuat67w208IqI7DcCbZ2lRR8ClswqGbzI-f3hiWX~q5bABh80sW16CxPNmOgKW3SvEziuq0eG~NWxF2BH9RMrVsgt6UB1CIckERe4TFcOlD4qmwHRMPJ2A0gxhoRaVoOll83vaA__" 
    },
    { 
      id: 4, 
      name: "Wajik", 
      description: "Wajik is a processed food made from boiled sticky rice and mixed with coconut milk and coconut sugar, coconut. In Javanese traditional ceremonies, for example the nikahwajik",
      image: "https://s3-alpha-sig.figma.com/img/b523/ecf9/ee42ec6a1026034626add8ba1cde9409?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Apu1vL56Bw63~tyVcdgEgOgApBdrG8YK13S-D1zOvs4lNutE3MvedL2JErxqWfTr26KuR8SATzUPYcY4X61ojvpSR7O~C3NcdO~eJVAJA~3xD5kVNItkXvZ7mbBE3cTe7cF6mxPr33j-MfwkG5QtF02WADF~rKNAutOgfaBLZiuZalXEtxFETaXimhI8ywpU1Sq7YE4ycwMdoAZomM3EIEEMmq09Ja8~ip9PV1jGFyv2g8mp0SsLCgetutVQrN45BmR57cnuXBMNykuooidaKCY3iQ5G-WtVlywOmQAZKk0uwZpN~LQ3oVARMxyvoZIrYNrlIZCBcvms0idIchnc1Q__" 
    },
  ];

  const culture = [
    { 
      id: 1, 
      name: "Sekatenan", 
      description: "a traditional celebration held to commemorate the birth of the Prophet Muhammad SAW and is a legacy of the Yogyakarta and Surakarta Sultanates",
      image: "https://s3-alpha-sig.figma.com/img/ae46/ccb6/e44cd48f860aba5f3836677692006a83?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HkLfzjKG9mPu~S3uy4SApfz6M0Yrtt2Fymgvqm5uf75K~VdvX3C3Y1sfZ~XWP0fCIDELgTq9t6-0In3PQDRFXXuI7XdoRM87ao5-0XxxJEIsONe-XvkDad405ByqW0chcS8zCcbHqMdXR-xmdQmyw3cs5FMRb3emK6CW9qBozE6NCxQMBu4bgwzW4mzoP3Yb4tlbS8F4ncaGepgx-VjcZI2BRHGLrGhZdtRQPqLVrBXwawVD9cj6P729FY8pDW9oCOs7WE6KUPgrJAuydVx7ni7C0AwWWHphwRsKlrXkrONpiJBAtDxcZCnWPDsh55od4KU6PjE8KFO-FHvuyyoy6g__" 
    },
    { 
      id: 2, 
      name: "Sendratari Ramayana", 
      description: "a dance performance that tells the story of the epic Ramayana. Performed without dialogue, the dancers rely on body movements and expressions to tell the story.",
      image: "https://s3-alpha-sig.figma.com/img/7c68/5ead/2a75458fc5d0aed45c4b772277ed4e5f?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MqjXw7SkVYB-TfhjLFTwemY69T4P4aG3dg4zCiM1Q2fCdEkpL2mGEHa~RBZ1UoIahNAiKc3C8hlq~ROTmVFZnUJEUz9Z2-~PKyCGEMWO6SHIXH~ywbZfanAdGZ~PP-CpmuiNgqTVj4OfAJpzbMJIPNw1oo0V~FTRsrqILUn~k7knbYFtLOB3c-vA266FKniy52H85oZOa-QSH9Nt3psNPY-Nvy9fVDVMRkKo1q3E2AccBOq1X6AoBC2m~SJmVT9I3kpmq75UJuXhq4n-qQcF2yK9HQBWy6txP9fawivBvBNiu~HT8DecoqPCzrdfFHHezUdEEpSHrHe~~9JfJ~rUAQ__" 
    },
    { 
      id: 3, 
      name: "Karawitan", 
      description: "the art of playing gamelan which is typical of Java, involving various traditional musical instruments such as gongs, drums, saron and bonang",
      image: "https://s3-alpha-sig.figma.com/img/2ba5/e59c/28155362c9d10791faa6e47b69c70f4d?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=biLcyuo-~4z5gwxVh2kh57zfQbRf~SSAVD1aaf6p~cJB6JPlhksH2MpE0To~cT0W-iNREfJO7RYGAPT1EU5cJxU8mvmLlAQniZ5ABz9S2r~4InLssglUVUZQ8xrt4vG4zedRVLvXP9xYaXH9xA-T37ju2Zbr4iWi945Zdz3XYlceGLDb1EN623XHaJ-qyEL2qIA2eIlek71t0fWhsOrZMctPaXxa8A-TL~tPuneY1qCPMdP7M8yYvo2JxQuTQhYSbtSwwZJR14BEnFYaKjejQOfZ-10z8GRoRrmotJkEKQ979b8EEUI5zckhAuEWcx5lbzumVepE8f7dEOPuIsQY5w__" 
    },
    { 
      id: 4, 
      name: "Wayang Kulit", 
      description: "a shadow puppet show projected on a white screen, played by puppeteers who control the leather puppets",
      image: "https://s3-alpha-sig.figma.com/img/89cd/d097/4e23d4bbd4a6f53b53e760a024ad7070?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hEcqt7WmLlku7e-okK3lrw1n93yLNkGepmKLHUsNWvGrxHMbbukYXq7EM44ac~8owQMiNVXJNhBA-lnWJE1acOs6cAhZ282ARvamJI7Ueeu6j4abKENQsyxnCSETr-Al~GqrB0sJR5c~adzAnClpzr6cBrdDufVP-IaSLG7AIZbVdxewUNltNdnYBZ3zwfDH2RhOsoyI3uIKQOBc~TXpIml1kp97aE-FUGc1jk36xmQL2IyGo7qEQPqRlecpGJVpvWOwrwi8DNs~VtrcGPHayII8qisqexXsNX5Pih6BEXQOO3uTGOKmM6GaxCNxKQZXR2cmu4W0u6HTVxqjXTmxbw__" 
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h3>Discover</h3>
        <ul>
          <li className={activeMenu === "Destination" ? styles.active : null} onClick={() => setActiveMenu("Destination")}>Destination</li>
          <li className={activeMenu === "Culinary" ? styles.active : null} onClick={() => setActiveMenu("Culinary")}>Culinary</li>
          <li className={activeMenu === "Culture" ? styles.active : null} onClick={() => setActiveMenu("Culture")}>Culture</li>
        </ul>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <h2>{activeMenu}</h2>
          <button className={styles.addButton} onClick={() => onAddDiscoverClick(activeMenu)}>Add New +</button>
        </div>
        <div className={styles.grid}>
          {activeMenu === "Destination" ? (
            <>
              {destinations.map((_) => (
                <div key={_.id} className={styles.card}>
                  <img src={_.image} alt={_.name} />
                  <h3 className={styles.cardTitle}>{_.name}</h3>
                  <button>Edit Destination</button>
                </div>
              ))}
            </>
          ): null}
          {activeMenu === "Culinary" ? (
            <>
              {culinary.map((_) => (
                <div key={_.id} className={styles.card}>
                  <img src={_.image} alt={_.name} />
                  <h3 className={styles.cardTitle}>{_.name}</h3>
                  <p className={styles.cardContent}>{_.description}</p>
                  <button>Edit Culinary</button>
                </div>
              ))}
            </>
          ): null}
          {activeMenu === "Culture" ? (
            <>
              {culture.map((_) => (
                <div key={_.id} className={styles.card}>
                  <img src={_.image} alt={_.name} />
                  <h3 className={styles.cardTitle}>{_.name}</h3>
                  <p className={styles.cardContent}>{_.description}</p>
                  <button>Edit Culture</button>
                </div>
              ))}
            </>
          ): null}
        </div>
      </div>
    </div>
  );
};

export default Discover;
