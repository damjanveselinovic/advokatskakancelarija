// Sav tekst vidljiv korisniku nalazi se u ovom fajlu (sr i en).
// All user-facing text lives in this file (sr and en).

export const locales = ["sr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

// Javni kontakt podaci (prikaz posetiocima). Primalac upita je odvojen: ENQUIRY_TO_EMAIL u okruzenju.
export const contactEmail = "office@petroviclaw.rs";
export const phone = {
  href: "tel:+381642656206",
  display: "+381 64 26 56 206",
};
export const address = "Kneginje Zorke 16a";
// Mapa: pretraga po adresi (Google Maps embed bez API kljuca) + link za navigaciju.
const mapQuery = "Kneginje Zorke 16a, Vračar, Beograd";
export const mapEmbedUrl = (lang: string) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(
    mapQuery
  )}&z=17&output=embed&hl=${lang === "sr" ? "sr-Latn" : lang}`;
export const mapLinkUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  mapQuery
)}`;

export type PracticeArea = {
  slug: string;
  title: string;
  text: string;
  intro: string[];
  listTitle: string;
  services: string[];
  closing: string;
};

export type Content = {
  htmlLang: string;
  meta: {
    title: string;
    description: string;
    blogTitle: string;
    blogDescription: string;
  };
  brand: { name: string; monogram: string; logoAlt: string };
  nav: {
    home: string;
    about: string;
    team: string;
    practice: string;
    blog: string;
    contact: string;
    ariaMain: string;
    openMenu: string;
    closeMenu: string;
    langLabel: string;
    langNames: { sr: string; en: string };
  };
  hero: { eyebrow: string; title: string; text: string; cta: string };
  about: { title: string; paragraphs: string[]; more: string };
  people: {
    title: string;
    readMore: string;
    items: { id: string; name: string; role: string; intro: string }[];
  };
  practice: {
    title: string;
    intro: string;
    enquiryCta: string;
    learnMore: string;
    back: string;
    items: PracticeArea[];
  };
  aboutPage: {
    meta: { title: string; description: string };
    title: string;
    intro: string[];
    firmTitle: string;
    firm: string[];
    teamTitle: string;
    photoAlt: string;
    team: { id: string; name: string; role: string; paragraphs: string[] }[];
  };
  contact: {
    title: string;
    text: string;
    enquiryCta: string;
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
    mapTitle: string;
    mapLink: string;
  };
  faq: { title: string; items: { q: string; a: string }[] };
  enquiry: {
    title: string;
    name: string;
    phone: string;
    email: string;
    optional: string;
    topic: string;
    topicPlaceholder: string;
    message: string;
    send: string;
    sending: string;
    close: string;
    closeLabel: string;
    success: string;
    errors: { generic: string; config: string; invalid: string; rate: string };
  };
  blog: { title: string; empty: string; back: string };
  footer: { text: string };
};

export const content: Record<Locale, Content> = {
  sr: {
    htmlLang: "sr-Latn",
    meta: {
      title: "Advokatska kancelarija Petrović",
      description:
        "Advokatska kancelarija Petrović – pravna pomoć i zastupanje.",
      blogTitle: "Blog | Advokatska kancelarija Petrović",
      blogDescription: "Blog advokatske kancelarije Petrović.",
    },
    brand: {
      name: "ADVOKATSKA KANCELARIJA PETROVIĆ",
      monogram: "P",
      logoAlt: "Logo kancelarije Petrović",
    },
    nav: {
      home: "Početna",
      about: "O kancelariji",
      team: "Naš tim",
      practice: "Oblasti rada",
      blog: "Blog",
      contact: "Kontakt",
      ariaMain: "Glavna navigacija",
      openMenu: "Otvori meni",
      closeMenu: "Zatvori meni",
      langLabel: "Izbor jezika",
      langNames: { sr: "Srpski", en: "English" },
    },
    hero: {
      eyebrow: "Advokatska kancelarija",
      title: "Rešenja koja\nstvaraju vrednost",
      text: "Pružamo pravnu podršku pojedincima i privrednim društvima u složenim imovinskopravnim, građevinskim i drugim pravnim pitanjima.",
      cta: "Kontaktirajte nas",
    },
    about: {
      title: "O kancelariji",
      paragraphs: [
        "Advokatska kancelarija Petrović pruža pravne usluge zasnovane na stručnosti, iskustvu i neposrednom razumevanju potreba klijenata.",
        "Kancelariju čine advokati Mirjana Petrović i Ivan Petrović, sa po 20 godina iskustva u advokaturi.",
      ],
      more: "Više o kancelariji",
    },
    people: {
      title: "Naš tim",
      readMore: "Pročitajte biografiju",
      items: [
        {
          id: "ivan",
          name: "Ivan Petrović",
          role: "Advokat",
          intro:
            "Ivan Petrović ima 20 godina iskustva u advokaturi, sa posebnim fokusom na pravo nepokretnosti, izgradnju, investicione projekte i rešavanje sporova.",
        },
        {
          id: "mirjana",
          name: "Mirjana Petrović",
          role: "Advokat",
          intro:
            "Mirjana Petrović ima 20 godina iskustva u advokaturi, sa posebnim fokusom na porodično pravo i rešavanje složenih imovinskopravnih odnosa.",
        },
      ],
    },
    practice: {
      title: "Oblasti rada",
      intro:
        "Naša praksa usmerena je na imovinskopravne odnose, nepokretnosti, izgradnju i rešavanje sporova. Pružamo pravnu podršku u svim fazama poslovnih i investicionih aktivnosti, od preventivne pravne analize do zastupanja u složenim postupcima.",
      enquiryCta: "Pošalji upit",
      learnMore: "Saznajte više",
      back: "Oblasti rada",
      items: [
        {
          slug: "real-estate",
          title: "Nepokretnosti i izgradnja",
          text: "Pravna podrška u transakcijama, razvoju i realizaciji projekata u oblasti nepokretnosti i izgradnje.",
          listTitle: "Naše usluge uključuju:",
          closing:
            "Naš pristup povezuje pravnu sigurnost sa komercijalnim ciljevima projekta. Posebnu pažnju posvećujemo identifikovanju rizika koji mogu uticati na realizaciju investicije, ali i pronalaženju načina da se ti rizici pravno i poslovno prihvatljivo prevaziđu.",
          intro: [
            "Pružamo sveobuhvatnu pravnu podršku u vezi sa sticanjem, razvojem, izgradnjom, korišćenjem i prometom nepokretnosti.",
            "Naše iskustvo obuhvata pravne i komercijalne aspekte investicionih projekata, od početne procene pravnog statusa nepokretnosti do realizacije transakcije, praćenja transakcije i rešavanja sporova nastalih tokom ili nakon izgradnje.",
          ],
          services: [
            "Pravnu analizu nepokretnosti (legal due diligence), uključujući proveru vlasništva, tereta, ograničenja, prava trećih lica i planskog statusa.",
            "Pravnu podršku kupcima i prodavcima u transakcijama kupoprodaje nepokretnosti.",
            "Strukturiranje transakcija, pripremu i pregovaranje predugovora, ugovora o kupoprodaji i prateće dokumentacije.",
            "Učešće u pregovorima i koordinaciju pravnih aspekata transakcija.",
            "Pravno savetovanje investitora i developera u vezi sa razvojem projekata.",
            "Rešavanje pitanja prava svojine, korišćenja, službenosti, hipoteka i drugih stvarnih prava.",
            "Pripremu, analizu i pregovaranje ugovora o građenju, uključujući FIDIC i EPC ugovore.",
            "Savetovanje u vezi sa ugovornim rokovima, promenama obima radova, dodatnim radovima, odgovornošću za nedostatke i zahtevima za naknadu štete.",
            "Zastupanje u sporovima između investitora, izvođača, podizvođača i drugih učesnika u građevinskim projektima.",
            "Zakup poslovnih i drugih nepokretnosti.",
          ],
        },
        {
          slug: "dispute-resolution",
          title: "Rešavanje sporova",
          text: "Zastupanje u sudskim, arbitražnim i drugim postupcima, sa fokusom na zaštitu interesa klijenata i pronalaženje efikasnih načina rešavanja sporova.",
          listTitle: "Naše usluge obuhvataju:",
          closing:
            "Svaki spor analiziramo i sa stanovišta njegovog uticaja na poslovanje klijenta, uključujući trajanje postupka, troškove, naplativost potraživanja i posledice po postojeće poslovne odnose.",
          intro: [
            "Zastupamo klijente u složenim imovinskopravnim, privrednim, ugovornim i građevinskim sporovima.",
            "Naš pristup rešavanju sporova polazi od analize pravnog položaja klijenta, procene izgleda za uspeh i razumevanja ekonomskih posledica različitih procesnih i vanprocesnih rešenja.",
            "Ne smatramo da je vođenje postupka uvek najbolji ili jedini put do zaštite prava. Kada okolnosti to opravdavaju, nastojimo da kroz pregovore, poravnanje ili druge načine mirnog rešavanja spora postignemo rezultat koji je u interesu klijenta. Kada je sudski ili arbitražni postupak neophodan, razvijamo strategiju usmerenu na zaštitu njegovih interesa.",
          ],
          services: [
            "Zastupanje u parničnim i privrednim sporovima.",
            "Sporove u vezi sa pravom svojine i drugim stvarnim pravima.",
            "Sporove iz ugovora o kupoprodaji, zakupu i drugim poslovnim ugovorima.",
            "Sporove u vezi sa izgradnjom i realizacijom investicionih projekata.",
            "Sporove iz FIDIC i EPC ugovora.",
            "Zahteve za naknadu štete i ugovorne kazne.",
            "Zastupanje u arbitražnim postupcima.",
            "Zastupanje u izvršnim i drugim postupcima radi ostvarivanja i zaštite potraživanja.",
            "Pregovore i vansudsko rešavanje sporova.",
          ],
        },
        {
          slug: "property-administrative",
          title: "Imovinsko i upravno pravo",
          text: "Rešavanje složenih imovinskopravnih pitanja, postupci pred katastrom i drugim organima uprave, kao i zaštita prava u upravnim i sudskim postupcima.",
          listTitle: "Naše usluge uključuju:",
          closing:
            "Cilj nam je da klijentima omogućimo ostvarivanje i zaštitu prava, uz pronalaženje praktičnog puta za rešavanje problema koji često imaju dugu pravnu i faktičku istoriju.",
          intro: [
            "Pružamo pravnu pomoć u rešavanju složenih imovinskopravnih odnosa i ostvarivanju prava pred katastrom, organima uprave i sudovima.",
            "Posebno iskustvo imamo u predmetima u kojima je za ostvarivanje ili zaštitu prava potrebno povezati pravila stvarnog, obligacionog i upravnog prava, uz analizu istorije nepokretnosti i relevantne dokumentacije.",
          ],
          services: [
            "Utvrđivanje i zaštitu prava svojine i drugih stvarnih prava.",
            "Rešavanje spornih vlasničkih i suvlasničkih odnosa.",
            "Zastupanje u postupcima pred Republičkim geodetskim zavodom i nadležnim katastarskim službama.",
            "Upis, promenu i brisanje prava na nepokretnostima.",
            "Ispravku grešaka i rešavanje neusaglašenosti u katastarskoj evidenciji.",
            "Zastupanje u upravnim postupcima i upravnim sporovima.",
            "Postupke legalizacije i druga pitanja pravnog statusa nepokretnosti.",
            "Denacionalizaciju, restituciju i imovinskopravne zahteve.",
            "Eksproprijaciju i zahteve za naknadu zbog oduzimanja ili ograničenja prava.",
            "Zastupanje u ostavinskim i drugim postupcima koji se odnose na imovinu.",
          ],
        },
      ],
    },
    aboutPage: {
      meta: {
        title: "O kancelariji i timu | Advokatska kancelarija Petrović",
        description:
          "Advokatska kancelarija Petrović – o kancelariji i advokatima Mirjani i Ivanu Petroviću.",
      },
      title: "O kancelariji i timu",
      intro: [
        "Naš rad obuhvata celokupan životni ciklus investicija u nepokretnosti – od pravne analize i strukturiranja transakcija, preko pregovora i realizacije projekata, do rešavanja sporova i zaštite prava pred sudovima i nadležnim organima.",
        "Svaki predmet posmatramo iz šire perspektive, uz razumevanje pravnih, poslovnih i praktičnih okolnosti. Naš cilj nije samo da identifikujemo pravni problem, već da pronađemo delotvorno rešenje koje odgovara stvarnim potrebama klijenta.",
      ],
      firmTitle: "O kancelariji",
      firm: [
        "Advokatska kancelarija Petrović pruža pravne usluge zasnovane na stručnosti, iskustvu i neposrednom razumevanju potreba klijenata.",
        "Kancelariju čine advokati Mirjana Petrović i Ivan Petrović, sa po 20 godina iskustva u advokaturi.",
        "Naš pristup zasniva se na uverenju da kvalitetna pravna usluga podrazumeva više od poznavanja propisa. Ona zahteva sposobnost da se prepoznaju suštinski interesi klijenta, sagledaju rizici iz različitih uglova i pronađe rešenje koje je istovremeno pravno utemeljeno i praktično primenljivo.",
        "Posebno iskustvo imamo u oblasti nepokretnosti, izgradnje i rešavanja sporova, uključujući složene imovinskopravne odnose i postupke pred sudovima, katastrom i drugim nadležnim organima.",
        "Ne polazimo od unapred zadatih rešenja. Svaki predmet analiziramo individualno, nastojeći da pronađemo i mogućnosti koje na prvi pogled nisu očigledne.",
        "Verujemo u neposrednu komunikaciju, ličnu odgovornost i dugoročne odnose sa klijentima.",
      ],
      teamTitle: "Naš tim",
      photoAlt: "Ivan Petrović, advokat",
      team: [
        {
          id: "ivan",
          name: "Ivan Petrović",
          role: "Advokat",
          paragraphs: [
            "Ivan Petrović ima 20 godina iskustva u advokaturi, sa posebnim fokusom na pravo nepokretnosti, izgradnju, investicione projekte i rešavanje sporova.",
            "Tokom profesionalne karijere savetovao je domaće i međunarodne kompanije i investitore u složenim transakcijama, razvoju nepokretnosti, građevinskim ugovorima i postupcima pred sudovima i nadležnim organima.",
            "Njegovo iskustvo posebno obuhvata pregovaranje i realizaciju transakcija u oblasti nepokretnosti, pravnu analizu investicija, ugovore o građenju, uključujući FIDIC i EPC modele, kao i zastupanje u sporovima koji proizlaze iz složenih investicionih i građevinskih projekata.",
            "Ivan je poznat po poslovno orijentisanom pristupu, sposobnosti da sagleda kompleksna pravna pitanja iz različitih uglova i pronalaženju praktičnih rešenja za probleme klijenata.",
            "Posebnu oblast njegovog profesionalnog angažovanja predstavljaju složeni građevinski i infrastrukturni projekti, uključujući projekte u energetskom sektoru. Ima značajno iskustvo u pripremi, analizi i pregovaranju FIDIC i EPC ugovora, kao i u rešavanju pitanja koja nastaju tokom njihove realizacije.",
            "Savetuje investitore, izvođače i druge učesnike projekata u vezi sa ugovornim zahtevima, produženjem rokova, promenama obima radova, dodatnim troškovima, odgovornošću za nedostatke i drugim pitanjima koja mogu uticati na realizaciju projekta.",
            "Njegovo iskustvo obuhvata i zastupanje u složenim privrednim i građevinskim sporovima, uključujući arbitražne postupke.",
          ],
        },
        {
          id: "mirjana",
          name: "Mirjana Petrović",
          role: "Advokat",
          paragraphs: [
            "Mirjana Petrović ima 20 godina iskustva u advokaturi, sa posebnim fokusom na porodično pravo i rešavanje složenih imovinskopravnih odnosa.",
            "U svojoj praksi bavi se pravnim pitanjima koja nastaju u okviru porodičnih odnosa, uključujući bračnoimovinske odnose, deobu zajedničke imovine supružnika, izdržavanje, vršenje roditeljskog prava i druge pravne posledice prestanka bračne ili vanbračne zajednice.",
            "Posebno iskustvo obuhvata rešavanje imovinskih pitanja koja zahtevaju povezivanje porodičnog, stvarnog i naslednog prava, uključujući pitanja zajedničke i posebne imovine, prenosa prava na nepokretnostima i zaštite imovinskih interesa članova porodice.",
            "U radu sa klijentima neguje individualan i pažljiv pristup, uz nastojanje da se pravna pitanja sagledaju u njihovom širem životnom i imovinskom kontekstu. Posebnu pažnju posvećuje pronalaženju rešenja koja, kada god je to moguće, omogućavaju izbegavanje dugotrajnih i nepotrebnih sporova.",
          ],
        },
      ],
    },
    contact: {
      title: "Kontakt",
      text: "Za pravne upite i dogovor o sastanku, pozovite kancelariju.",
      enquiryCta: "Pošalji nam upit",
      addressLabel: "Adresa",
      phoneLabel: "Broj telefona",
      emailLabel: "Mejl",
      mapTitle: "Mapa: Kneginje Zorke 16a, Vračar, Beograd",
      mapLink: "Otvori u Google Maps",
    },
    faq: {
      title: "Česta pitanja",
      items: [
        {
          q: "Šta da navedem u prvom upitu?",
          a: "Ukratko opišite zbog čega se javljate i ostavite broj telefona na koji možemo da vas kontaktiramo.",
        },
        {
          q: "Da li je moguć razgovor na engleskom?",
          a: "Ako želite razgovor na engleskom, navedite to u upitu kako bi kancelarija mogla da vam potvrdi mogućnost.",
        },
        {
          q: "Kako da zakažem sastanak?",
          a: "Pozovite kancelariju ili pošaljite upit i navedite da želite da dogovorite sastanak.",
        },
      ],
    },
    enquiry: {
      title: "Pošaljite nam upit",
      name: "Ime i prezime",
      phone: "Kontakt telefon",
      email: "Kontakt e-mail",
      optional: "opciono",
      topic: "Zainteresovani ste za",
      topicPlaceholder: "Izaberite oblast",
      message: "Poruka",
      send: "Pošalji",
      sending: "Slanje…",
      close: "Zatvori",
      closeLabel: "Zatvori prozor",
      success: "Upit uspešno poslat",
      errors: {
        generic: "Upit nije poslat. Pokušajte ponovo ili pozovite kancelariju.",
        config:
          "Slanje trenutno nije dostupno. Pozovite kancelariju telefonom.",
        invalid: "Proverite unete podatke i pokušajte ponovo.",
        rate: "Previše pokušaja. Pokušajte ponovo malo kasnije.",
      },
    },
    blog: {
      title: "Blog",
      empty: "Tekstovi će uskoro biti objavljeni.",
      back: "Nazad na početnu",
    },
    footer: { text: "© ADVOKATSKA KANCELARIJA PETROVIĆ" },
  },
  en: {
    htmlLang: "en",
    meta: {
      title: "Petrović Law Office",
      description: "Petrović Law Office – legal advice and representation.",
      blogTitle: "Blog | Petrović Law Office",
      blogDescription: "Blog of the Petrović Law Office.",
    },
    brand: {
      name: "PETROVIĆ LAW OFFICE",
      monogram: "P",
      logoAlt: "Petrović Law Office logo",
    },
    nav: {
      home: "Home",
      about: "About",
      team: "Our Team",
      practice: "Practice areas",
      blog: "Blog",
      contact: "Contact",
      ariaMain: "Main navigation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      langLabel: "Language",
      langNames: { sr: "Srpski", en: "English" },
    },
    hero: {
      eyebrow: "Law office",
      title: "Solutions that\ncreate value",
      text: "We provide legal services to domestic and international companies, investors and individuals in complex real estate, construction and other legal matters.",
      cta: "Contact us",
    },
    about: {
      title: "About Us",
      paragraphs: [
        "Petrović Law Office provides legal services founded on professional expertise, experience and a direct understanding of clients' needs.",
        "The firm is led by attorneys Mirjana Petrović and Ivan Petrović, each bringing 20 years of experience in legal practice.",
      ],
      more: "About the firm",
    },
    people: {
      title: "Our Team",
      readMore: "Read full biography",
      items: [
        {
          id: "ivan",
          name: "Ivan Petrović",
          role: "Attorney at Law",
          intro:
            "Ivan Petrović has 20 years of experience in legal practice, with a particular focus on real estate, construction, investment projects and dispute resolution.",
        },
        {
          id: "mirjana",
          name: "Mirjana Petrović",
          role: "Attorney at Law",
          intro:
            "Mirjana Petrović has 20 years of experience in legal practice, with a particular focus on family law and complex property matters.",
        },
      ],
    },
    practice: {
      title: "Practice Areas",
      intro:
        "Our practice focuses on property law, real estate, construction and dispute resolution. We provide legal support throughout all stages of business and investment activities, from preventive legal assessment to representation in complex proceedings.",
      enquiryCta: "Send an enquiry",
      learnMore: "Learn more",
      back: "Practice Areas",
      items: [
        {
          slug: "real-estate",
          title: "Real Estate & Construction",
          text: "Legal support in real estate transactions, development and implementation of construction projects.",
          listTitle: "Our services include:",
          closing:
            "Our approach combines legal certainty with the commercial objectives of each project. We pay particular attention to identifying risks that may affect project implementation and finding legally sound and commercially viable ways to address them.",
          intro: [
            "We provide comprehensive legal support in the acquisition, development, construction, use and transfer of real estate.",
            "Our experience covers both the legal and commercial aspects of investment projects, from the initial assessment of a property's legal status to the completion of transactions, post completion support and resolving disputes arising during or after construction.",
          ],
          services: [
            "Real estate legal due diligence, including title verification, encumbrances, restrictions, third-party rights and planning status.",
            "Advising buyers and sellers on real estate transactions.",
            "Transaction structuring, preparation and negotiation of preliminary agreements, sale and purchase agreements and ancillary documentation.",
            "Participation in negotiations and coordination of the legal aspects of transactions.",
            "Advising investors and developers on project development.",
            "Resolution of matters concerning ownership, use, easements, mortgages and other property rights.",
            "Drafting, reviewing and negotiating construction contracts, including FIDIC and EPC contracts.",
            "Advising on contractual time limits, variations, additional works, defects liability and damages claims.",
            "Representation in disputes between investors, contractors, subcontractors and other participants in construction projects.",
            "Commercial and other real estate leases.",
          ],
        },
        {
          slug: "dispute-resolution",
          title: "Dispute Resolution",
          text: "Representation in court, arbitration and other proceedings, with a focus on protecting clients' interests and identifying effective dispute resolution strategies.",
          listTitle: "Our services include:",
          closing:
            "We also assess disputes in terms of their impact on the client's business, including the duration and costs of proceedings, recoverability of claims and implications for existing commercial relationships.",
          intro: [
            "We represent clients in complex property, commercial, contractual and construction disputes.",
            "Our approach begins with an assessment of the client's legal position, the prospects of success and the economic implications of different procedural and out-of-court options.",
            "We do not consider litigation to be the only or necessarily the best way to protect a client's rights. Where appropriate, we seek to achieve results through negotiations, settlement or other forms of amicable dispute resolution. Where court or arbitration proceedings are necessary, we develop a strategy focused on protecting the client's interests.",
          ],
          services: [
            "Representation in civil and commercial litigation.",
            "Ownership and other property rights disputes.",
            "Disputes arising from sale and purchase, lease and other commercial agreements.",
            "Construction and investment project disputes.",
            "Disputes under FIDIC and EPC contracts.",
            "Damages and contractual penalty claims.",
            "Representation in arbitration proceedings.",
            "Enforcement proceedings and other procedures aimed at recovering and protecting claims.",
            "Negotiations and out-of-court dispute resolution.",
          ],
        },
        {
          slug: "property-administrative",
          title: "Property & Administrative Law",
          text: "Handling complex property matters, proceedings before the Real Estate Cadastre and other public authorities, and protection of rights in administrative and judicial proceedings.",
          listTitle: "Our services include:",
          closing:
            "Our objective is to help clients establish and protect their rights while identifying practical ways to resolve matters that often have a long and complex legal and factual history.",
          intro: [
            "We provide legal assistance in resolving complex property matters and protecting clients' rights before the Real Estate Cadastre, public authorities and courts.",
            "We have particular experience in matters requiring the combined application of property, contract and administrative law, together with a detailed examination of a property's legal history and relevant documentation.",
          ],
          services: [
            "Establishment and protection of ownership and other property rights.",
            "Resolution of disputed ownership and co-ownership matters.",
            "Representation before the Republic Geodetic Authority and competent cadastral offices.",
            "Registration, amendment and deletion of rights in real estate records.",
            "Correction of errors and resolution of inconsistencies in cadastral records.",
            "Representation in administrative proceedings and administrative disputes.",
            "Legalization procedures and other matters concerning the legal status of real estate.",
            "Denationalisation, restitution and property claims.",
            "Expropriation and compensation claims arising from the taking or restriction of property rights.",
            "Representation in probate and other proceedings concerning property.",
          ],
        },
      ],
    },
    aboutPage: {
      meta: {
        title: "About the Firm & Team | Petrović Law Office",
        description:
          "Petrović Law Office – about the firm and attorneys Mirjana Petrović and Ivan Petrović.",
      },
      title: "About the Firm & Team",
      intro: [
        "Our work covers the entire lifecycle of real estate investments – from legal assessment and transaction structuring to negotiations, project implementation, dispute resolution and the protection of clients' rights before courts and public authorities.",
        "We approach every matter from a broader perspective, taking into account its legal, commercial and practical dimensions. Our objective is not merely to identify legal issues, but to develop effective solutions that address our clients' actual needs.",
      ],
      firmTitle: "About Us",
      firm: [
        "Petrović Law Office provides legal services founded on professional expertise, experience and a direct understanding of clients' needs.",
        "The firm is led by attorneys Mirjana Petrović and Ivan Petrović, each bringing 20 years of experience in legal practice.",
        "Our approach is based on the belief that high-quality legal services require more than knowledge of the law. They require an understanding of the client's underlying interests, the ability to assess risks from different perspectives and the capacity to develop solutions that are both legally sound and commercially practical.",
        "We have particular experience in real estate, construction and dispute resolution, including complex property matters and proceedings before courts, the Real Estate Cadastre and other public authorities.",
        "We do not rely on standardized solutions. Every matter is assessed individually, with a view to identifying opportunities and approaches that may not be immediately apparent.",
        "We value direct communication, personal commitment and long-term relationships with our clients.",
      ],
      teamTitle: "Our Team",
      photoAlt: "Ivan Petrović, Attorney at Law",
      team: [
        {
          id: "ivan",
          name: "Ivan Petrović",
          role: "Attorney at Law",
          paragraphs: [
            "Ivan Petrović has 20 years of experience in legal practice, with a particular focus on real estate, construction, investment projects and dispute resolution.",
            "Throughout his career, he has advised domestic and international companies and investors on complex transactions, real estate developments, construction contracts and proceedings before courts and public authorities.",
            "His experience includes negotiating and implementing real estate transactions, investment due diligence, construction contracts, including FIDIC and EPC arrangements, as well as representing clients in disputes arising from complex investment and construction projects.",
            "Ivan is recognized for his commercially oriented approach, his ability to assess complex legal issues from different perspectives and his focus on finding practical solutions to clients' challenges.",
            "A significant part of his practice involves complex construction and infrastructure projects, including projects in the energy sector. He has extensive experience in drafting, reviewing and negotiating FIDIC and EPC contracts, as well as addressing issues arising during their performance.",
            "He advises employers, contractors and other project participants on contractual claims, extensions of time, variations, additional costs, defects liability and other matters affecting project implementation.",
            "His experience also includes representation in complex commercial and construction disputes, including arbitration proceedings.",
          ],
        },
        {
          id: "mirjana",
          name: "Mirjana Petrović",
          role: "Attorney at Law",
          paragraphs: [
            "Mirjana Petrović has 20 years of experience in legal practice, with a particular focus on family law and complex property matters.",
            "Her practice covers legal issues arising from family relationships, including matrimonial property, division of marital assets, maintenance, parental responsibility and other legal consequences of the dissolution of marriage or non-marital partnerships.",
            "She has particular experience in property matters requiring the combined application of family, property and inheritance law, including issues concerning joint and separate property, transfers of real estate and the protection of family members' property interests.",
            "Her approach is characterised by individual attention to clients and a careful assessment of the broader personal and property-related circumstances of each matter. She places particular emphasis on identifying solutions that, wherever possible, avoid lengthy and unnecessary disputes.",
          ],
        },
      ],
    },
    contact: {
      title: "Contact",
      text: "For legal enquiries or to arrange a meeting, call the office.",
      enquiryCta: "Send us an enquiry",
      addressLabel: "Address",
      phoneLabel: "Phone",
      emailLabel: "Email",
      mapTitle: "Map: Kneginje Zorke 16a, Vračar, Belgrade",
      mapLink: "Open in Google Maps",
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          q: "What should I include in my first enquiry?",
          a: "Briefly describe why you are getting in touch and leave a phone number where we can reach you.",
        },
        {
          q: "Is it possible to talk in English?",
          a: "If you would like to talk in English, say so in your enquiry so that the office can confirm availability.",
        },
        {
          q: "How do I arrange a meeting?",
          a: "Call the office or send an enquiry and say that you would like to arrange a meeting.",
        },
      ],
    },
    enquiry: {
      title: "Send us an enquiry",
      name: "Full name",
      phone: "Contact phone",
      email: "Contact email",
      optional: "optional",
      topic: "You are interested in",
      topicPlaceholder: "Select an area",
      message: "Message",
      send: "Send",
      sending: "Sending…",
      close: "Close",
      closeLabel: "Close dialog",
      success: "Your enquiry was sent successfully",
      errors: {
        generic:
          "Your enquiry was not sent. Please try again or call the office.",
        config: "Sending is currently unavailable. Please call the office.",
        invalid: "Please check the details you entered and try again.",
        rate: "Too many attempts. Please try again a little later.",
      },
    },
    blog: {
      title: "Blog",
      empty: "Articles will be published soon.",
      back: "Back to home",
    },
    footer: { text: "© PETROVIĆ LAW OFFICE" },
  },
};

export const isLocale = (v: string): v is Locale =>
  (locales as readonly string[]).includes(v);
