# Status projekta

## Radi
- Dvojezične statičke stranice: `/sr`, `/en`, `/sr/blog`, `/en/blog`; `/` → `/en` (engleski podrazumevan).
- Fiksno providno zaglavlje, mobilni hamburger meni, preklopnik SR / EN, link za poziv.
- Početna: uvod, O kancelariji, Oblasti rada, Kontakt. Blog je prazna stranica.
- Sav tekst u `content/site.ts`.
- Promena jezika čuva mesto na stranici (sekcija + relativan položaj); Blog ↔ Blog.
- Lenis skrol na desktopu; svetao uvod sa fotografijom `background1.jpg`; zaglavlje menja svetlu/tamnu boju po sekciji.
- Novi slogan, Inter za ceo sajt, tanak dvolinijski hamburger, strelice u oblastima rada, kontakt samo sa brojem, futer „© IVAN PETROVIĆ“.

- Uvod: fotografija jedva zamućena (0,7 px) sa blagim svetlim slojem; naslov kompaktniji i veći.
- Font: Switzer (Fontshare, ITF Free Font License, `app/fonts/`) za naslove i tekst; Inter ostaje za zaglavlje. Swiss 721 BT nije licenciran/dostupan.
- Mobilni meni: toplo beo panel kao nastavak trake, silazak + pojavljivanje 240 ms, bez animacije uz `prefers-reduced-motion`.

- Uvod koristi `background2.jpg` bez zamućenja i transformacije, sa blagim tamnim slojem i svetlim tekstom; naslov u dva reda (h1 sa dva `span.line`).
- Kontakt: telefon, e-mail (`mailto:`) i dugme „Pošalji nam upit“ koje otvara modal (`components/EnquiryDialog.tsx`); server `POST /api/enquiry` šalje preko Resend-a (`.env.example`: `RESEND_API_KEY`, `ENQUIRY_FROM_EMAIL`).

- Svaka oblast rada ima diskretno dugme „Pošalji upit“ koje otvara isti modal sa unapred izabranom oblašću (iz Kontakta je izbor prazan); `EnquiryProvider` + `EnquiryButton` u `components/EnquiryDialog.tsx`.
- „O kancelariji“: dve kolone na desktopu (tekst levo, `public/pfp.jpg` desno sa natpisom), na telefonu tekst pa fotografija. Fotografija je privremena (avatar).
- FAQ „Česta pitanja“ ispod dugmeta za upit (3 pitanja, +/−, tastatura).
- Pojavljivanje pri skrolovanju (`ScrollReveal`, `SplitText`): naslovi sekcija se podižu po rečima iz maske, ostalo blago odozdo; jednom, odmah pri klikanju linkova, bez animacije uz reduced-motion.

- Nova topla neutralna paleta (bela #F6F3ED, kamena #EAE6DD, grafit #272925, maslinasta #52604B); tekst smanjen oko 6–7%.
- Zaglavlje je uvek ista poluprovidna topla bela traka sa blur 18px (uklonjena promena teme); ispravljen CSS da Chrome zaista primeni `backdrop-filter`.
- Oblasti rada: naslov i uvod iznad, dve kolone (jedna na telefonu), naziv + opis + „Pošalji upit →“, bez numeracije.

- Uvod: `background5.jpg` kao pozadina cele sekcije sa tekstom preko (lokalni blur/zatamnjenje sloj, kontrast ≥4,5:1 izmeren); ranije dve kolone ukinute; naslovi u Source Serif 4 Light; dugmad sa prelivom sleva nadesno; kompaktan mobilni meni uz desnu ivicu.

- Zaglavlje: poluprovidna grafitna traka (blur 28px, toplo beo tekst), globus uz SR / EN, bez ikone telefona; otvoren meni preko celog ekrana ispod trake (grafit + blur), skrol stranice zaustavljen, fokus zarobljen u meniju.

- Glavni naslov uvoda u Source Serif 4 Regular 400.

- Sadržaj iz `Tekst za sajt.docx` (SR i EN): početna je pregled; stranica „O kancelariji i timu“ (`/about`, biografije sa sidrima); tri stranice oblasti rada (`/practice/<slug>`, liste 10/9/10 stavki) sa dugmetom za upit; forma i server koriste 3 oblasti. Ispravljeno „pojedincima i privrednim društvima“.

- Naziv sajta „Advokatska kancelarija Petrović“ / „Petrović Law Office“ (zaglavlje, tab, futer); logo sa tankim kružnim okvirom; favicon iz `newlogo.png`; javni kontakt (adresa, telefon, office@petroviclaw.rs); otvoreni meni sa manjim tekstom.

- Uvod: responzivna slika (`background6.jpg` ispod 900px), lokalni blur sloj prati tekst; `h1` u Palatino Linotype (sistemski font), velika slova.
- Kontakt: tri jednaka bloka (adresa, telefon, mejl); modal doteran; isti `pfp` za oba profila tima.

- Hamburger se prikazuje ispod 1180px (pre nego što se linkovi prelome); mapa Google Maps ispod kontakta; uvod sa blur slojem od gornje ivice sa mekim vertikalnim prelazom.

- Stranice oblasti rada imaju široki baner (160 px) odmah ispod zaglavlja, pa naslov i sadržaj; link „← Oblasti rada“ je premešten na kraj stranice.

- Hero (≥1360px): naslov u 4 reda, veličina tako da najduža reč završava na osi novčića (`--hero-fs`, `--k-word` po jeziku), prvi red naslova niže od zaglavlja; desna kolona 460px (pasusi u pravom italicu, justify, dugmad iste širine desno, kompaktna, zaobljena, hover prigušena maslinastosiva); blur samo na pozadinskoj slici u dve meke zone (`.hero-glass-wide`), novčić iznad blura i ispod teksta, poslednji red naslova prelazi preko novčića (text-shadow). Hero = 100svh. Ispod 1360px centrirana jedna kolona. `Switzer-Italic.woff2` dodat u `app/fonts`.

- Hero: dugme „Pošalji nam upit“ iznad „Kontaktirajte nas“; „Naš tim“ naslov na telefonu veći i podebljan (46px/600); detalji oblasti imaju link „← Nazad na oblasti rada“ odmah ispod zaglavlja (`/<lang>#practice`).

## Čeka podatke
- Prave fotografije Ivana i Mirjane: oba profila sada koriste `public/pfp.jpg` (avatar-zamena; `pfp.png` nije pronađen). Putanja je konstanta `PROFILE_PHOTO` u `app/[lang]/about/page.tsx`.
- Podešavanje Resend-a (ključ i verifikovana pošiljalac adresa); bez toga forma prikazuje grešku „slanje nije dostupno“.
- Pravi tekst „O kancelariji“ i konačan spisak oblasti rada (sada privremeno).
- Adresa, e-mail, radno vreme.
- Blog tekstovi.
- Prava fotografija Ivana (zameniti `public/pfp.jpg`) i konačan tekst „O kancelariji“.
- Hero (široki desktop ≥1360px, samo SR): reči STVARAJU i VREDNOST imaju zasebne veličine fonta (`.hero-word:nth-of-type(3/4)` u bloku „HERO SR naslov“ na kraju `globals.css`), računate prema luku novčića; razmak do oboda ≈17–32 px (VREDNOST 24–32 px) na 1360–1920 px; EN nepromenjen. `h1` je i dalje jedan, reči su `span.hero-word`.
- Hero naslov (≥1360px): slova 5px manja (`--title-fs = --hero-fs − 5px`; novčić i raspored i dalje prate `--hero-fs`); u SR je VREDNOST pomerena 12px nagore (`--sr-pull`), razmak do oboda: VREDNOST 28–37 px, STVARAJU 19–41 px.
- Hero je prepravljen: dve kolone na desktopu (tekst levo, ceo statičan novčić + dugmad desno), jedna kolona na telefonu (dugmad levo / novčić desno). Uklonjeni: novčić u dve polovine (`CoinHalves.tsx`, `CoinTop/CoinBottom`, `.coin-*`, reveal „coin“), 4-redni SR/EN naslov sa per-word veličinama i sav CSS za to.
- Hero doterivanje: pasusi 14px (telefon) / 14,5px (desktop), naslov na desktopu 2,5px manji, novčić + dugmad ~30px ulevo; desktop ulazna animacija (naslov sleva, pasusi +150 ms, novčić+dugmad zajedno zdesna; trajanje/usporavanje kao `data-reveal`; isključena uz reduced-motion i na telefonu).
- Potvrda upita ima prateću rečenicu (`enquiry.successNote`, samo u stanju uspeha); pasusi su obostrano poravnati (`text-align: justify`) u hero uvodu, „O kancelariji“ na početnoj, `.prose p` (stranica O kancelariji i oblasti rada) i opisima oblasti rada.
- Kartice oblasti rada: opisi levo, dugmad uvek na dnu kartice (`margin-top:auto`, kartice iste visine). „O kancelariji“ (početna + stranica) na `--grey`, stranice oblasti rada (sadržaj + traka „Nazad“) na `--grey` sa ~28% manjim `h1` (`.area-title`).
- Baner na stranicama oblasti rada: visina `clamp(260px, 23vw, 420px)` (ranije fiksnih 224px), vidi se oko 1,5× više fotografije na desktopu.
- Stranica „O kancelariji i timu“: na telefonu ≈22px veći gornji razmak (`.about-top`); fotografija u uvodu je uklonjena.
- Iz `Tekst za sajt 2.docx`: dve nove oblasti rada (`commercial-corporate` sa `/oblastiRada/privredno.jpg`, `intellectual-property` sa `/oblastiRada/intelektualno.jpg`; kartica = prvi pasus, stranica = svi pasusi iz dokumenta, bez liste usluga) i nove biografije Ivana i Mirjane Petrović (početna: prvi pasus, stranica „O kancelariji i timu“: ceo tekst), SR i EN. Mreža oblasti na desktopu je 3+2.
- Blog: 5 članaka iz `Ivan Petrovic Blog.docx` (uklonjeni: katastar/premer i „Ima dana“ / BG UrbanLUX) u `content/blog.ts` (SR + EN, datum, autor; auto-sort po datumu). Pregled u stilu novina (`/[lang]/blog`), članak `/[lang]/blog/[slug]` sa trakom „Nazad na blog“, obostrano poravnatim tekstom i menijem „Ostali članci“ (desktop: sticky, lista se skroluje zasebno uz `data-lenis-prevent` + `overscroll-behavior-y: contain`; telefon: ispod teksta). Novi članak = novi objekat u `articles`.

## Sledeći koraci
- Uneti prave sadržaje u `content/site.ts`.
- Dodati favicon/OG sliku, domen i deploy.
- Odlučiti o strukturi bloga (MDX ili CMS) kad bude sadržaja.
