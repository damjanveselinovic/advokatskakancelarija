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

- Hero (samo ≥1200px): mali blok „Oblasti rada“ desno dole (`components/HeroAreas.tsx` + CSS blok „HERO AREAS“; za uklanjanje obrisati `<HeroAreas />` u `page.tsx` i taj CSS blok).

## Čeka podatke
- Prave fotografije Ivana i Mirjane: oba profila sada koriste `public/pfp.jpg` (avatar-zamena; `pfp.png` nije pronađen). Putanja je konstanta `PROFILE_PHOTO` u `app/[lang]/about/page.tsx`.
- Podešavanje Resend-a (ključ i verifikovana pošiljalac adresa); bez toga forma prikazuje grešku „slanje nije dostupno“.
- Pravi tekst „O kancelariji“ i konačan spisak oblasti rada (sada privremeno).
- Adresa, e-mail, radno vreme.
- Blog tekstovi.
- Prava fotografija Ivana (zameniti `public/pfp.jpg`) i konačan tekst „O kancelariji“.

## Sledeći koraci
- Uneti prave sadržaje u `content/site.ts`.
- Dodati favicon/OG sliku, domen i deploy.
- Odlučiti o strukturi bloga (MDX ili CMS) kad bude sadržaja.
