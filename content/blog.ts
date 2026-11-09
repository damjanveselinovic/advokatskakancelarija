// Blog: svi clanci na jednom mestu. Novi clanak = novi objekat u `articles` (slug, date, author, sr, en).
// Redosled na sajtu se odredjuje automatski po datumu (najnoviji prvi). Tekst clanka je niz blokova:
//   { type: "h", text }                      podnaslov
//   { type: "p", text }                      pasus
//   { type: "ul" | "ol", items: [{ text, sub? }] }   lista (sub = ugnjezdena lista)
// U tekstu: *kurziv*, **podebljano**, [tekst](https://link).
// Izvor: "Ivan Petrovic Blog.docx" (oznake ENG:/SRP:, brojevi i datumi iz dokumenta nisu deo teksta).

import type { Locale } from "./site";

export type ListItem = { text: string; sub?: string[] };
export type Block =
  | { type: "h"; text: string }
  | { type: "p"; text: string }
  | { type: "ul" | "ol"; items: ListItem[] };

export type Article = {
  slug: string;
  date: string; // ISO (YYYY-MM-DD), datum objave za oba jezika
  author: string;
  sr: { title: string; blocks: Block[] };
  en: { title: string; blocks: Block[] };
};

export const articles: Article[] = [
  {
    "slug": "pledge-and-retention",
    "date": "2025-08-28",
    "author": "Ivan Petrović",
    "sr": {
      "title": "Zaloga i zadržani iznos – sukob prava i interesa banke",
      "blocks": [
        {
          "type": "h",
          "text": "Istorijski razvoj zaloge"
        },
        {
          "type": "p",
          "text": "Zaloga je jedno od najstarijih i najšire prihvaćenih sredstava obezbeđenja potraživanja. Različiti oblici zaloge postojali su još u mesopotamskom i hetitskom pravu. U to vreme u zalogu su se mogli dati čak i članovi dužnikove porodice, na primer sinovi, što je danas nezamislivo."
        },
        {
          "type": "p",
          "text": "Tek je u rimskom pravu zaloga dobila poseban naziv (*pignus*) i osnovna načela. Razlikovale su se zaloga sa predajom stvari u državinu (*pignus cum possessione*) i zaloga bez predaje u državinu (*hypotheca*), a zalagati su se mogla i potraživanja. Justinijanov kodeks već je poznavao zalogu na stvarima i na potraživanjima, uključujući i zalogu bez predaje u državinu."
        },
        {
          "type": "p",
          "text": "Vremenom se razvilo načelo javnosti, čija je svrha bila da treća lica mogu saznati da je određena imovina založena i da ne mogu računati na to da će se iz nje namiriti za svoja potraživanja prema njenom vlasniku."
        },
        {
          "type": "h",
          "text": "Zaloga u srpskom pravu"
        },
        {
          "type": "p",
          "text": "U srpskom pravu zaloga na pokretnim stvarima dugo je imala stvarnopravni karakter (*in rem*). Prema Zakonu o obligacionim odnosima, založno pravo na pokretnoj stvari nastajalo je predajom stvari poveriocu u državinu, dok je za zalogu potraživanja bilo dovoljno obavestiti dužnika tog potraživanja."
        },
        {
          "type": "p",
          "text": "Načelo javnosti ostvarivalo se samo delimično. Kod pokretnih stvari zaloga je bila uočljiva po prenosu državine. Kod potraživanja je obaveštenje dobijao samo dužnik, pa treća lica nisu mogla znati da je potraživanje založeno. To je često dovodilo do sporova o prvenstvu između založnog poverioca i drugih poverilaca."
        },
        {
          "type": "p",
          "text": "Ovaj problem rešen je Zakonom o založnom pravu na pokretnim stvarima i pravima upisanim u registar iz 2005. godine, kojim je uveden javni registar zaloge. Upisom se obezbeđuje javnost založnog prava i rešava pitanje prvenstva između državinske i bezdržavinske zaloge. Prvenstvo pripada upisanom založnom poveriocu, bez obzira na to kada je stvar predata u državinu ili kada je zaključen ugovor o zalozi. Time se obezbeđuje pravna sigurnost poverilaca i trećih lica, jer se nakon upisa svako ko zanemari upisano založno pravo po samom zakonu smatra nesavesnim."
        },
        {
          "type": "h",
          "text": "Zaloga u građevinskoj i infrastrukturnoj praksi"
        },
        {
          "type": "p",
          "text": "Na građevinskim i infrastrukturnim projektima zaloga na potraživanjima ima posebnu ulogu. Izvođači često zalažu svoja buduća potraživanja prema naručiocu u korist banke kako bi obezbedili finansiranje radova. Banke se oslanjaju na plaćanja po ugovoru o građenju kao izvor otplate. Upis založnog prava daje im prvenstvo u odnosu na druge poverioce, čak i kada obezbeđeno potraživanje nastane nakon što je drugi poverilac već stekao potraživanje prema istom dužniku."
        },
        {
          "type": "h",
          "text": "Zadržani iznos u ugovorima o građenju"
        },
        {
          "type": "p",
          "text": "Ugovori zasnovani na FIDIC uslovima, koji se široko primenjuju na većim projektima u Srbiji, gotovo uvek predviđaju zadržani iznos (*retention sum*). Iako se u praksi ovaj mehanizam naziva retencijom, on se razlikuje od prava zadržavanja stvari u smislu Zakona o obligacionim odnosima. Reč je o ugovornom pravu naručioca da zadrži deo overene vrednosti radova kao obezbeđenje za uredno izvršenje radova i otklanjanje nedostataka."
        },
        {
          "type": "p",
          "text": "Mehanizam je jednostavan. Naručilac zadržava određeni procenat iznosa po svakoj privremenoj situaciji do završetka radova ili do isteka roka za otklanjanje nedostataka. Naručilac tako stiče potraživanje prema izvođaču u trenutku overe svake privremene situacije, dok izvođač stiče pravo na isplatu zadržanog iznosa tek po potpunom izvršenju svojih obaveza."
        },
        {
          "type": "p",
          "text": "Iako se često posmatra kao sredstvo obezbeđenja, zadržani iznos po svojoj pravnoj prirodi nije zaloga. Naručilac ne može steći založno pravo na sopstvenom novcu. Čak i kada bi se pretpostavilo da je u korist naručioca uspostavljena zaloga, ona bi prestala po samom zakonu usled sjedinjenja prava (*confusio*)."
        },
        {
          "type": "h",
          "text": "Sukob interesa naručioca i banke"
        },
        {
          "type": "p",
          "text": "Do sukoba u praksi dolazi kada izvođač založi banci svoja potraživanja prema naručiocu, a potom ne izvrši ugovorne obaveze. Naručilac tada koristi zadržani iznos da plati trećim licima završetak radova ili otklanjanje nedostataka. Banka, međutim, smatra da je zadržani iznos deo potraživanja izvođača i da ima pravo prvenstva pri naplati. Iz ugla banke, taj iznos funkcioniše kao „skrivena zaloga“ u korist naručioca koja podriva prvenstvo stečeno upisom."
        },
        {
          "type": "p",
          "text": "Iz ugla naručioca, zadržani iznos ne čini deo potraživanja izvođača sve dok izvođač ne ispuni svoje obaveze. Taj iznos za naručioca predstavlja vrednost neizvedenih radova koje je morao da poveri i plati drugima."
        },
        {
          "type": "p",
          "text": "Zbog toga banke zahtevaju da se zadržani iznos isplati neposredno njima, dok naručioci smatraju da imaju pravo da njime pokriju troškove nastale zbog neispunjenja obaveza izvođača. Mogućnost banke da u takvoj situaciji od naručioca naplati zadržani iznos veoma je ograničena, a u većini slučajeva takva naplata nije moguća."
        },
        {
          "type": "h",
          "text": "Prvenstvo prava i dospelost zadržanog iznosa"
        },
        {
          "type": "p",
          "text": "Prvenstvo banke u odnosu na druge poverioce izvođača je nesporno. Pitanje je da li naručilac ima prvenstvo u odnosu na banku kada je reč o zadržanom iznosu. Kada bi se zadržani iznos smatrao zalogom ustanovljenom u korist naručioca, odgovor bi bio potvrdan. Međutim, zadržani iznos predstavlja deo ugovorene cene za radove i usluge koje je izvođač dužan da izvrši. Kada se koristi za pokriće troškova neizvedenih radova ili otklanjanja nedostataka, time se ugovorena cena umanjuje zbog nepotpunog izvršenja."
        },
        {
          "type": "p",
          "text": "Činjenica da je zadržani iznos prethodno bio obuhvaćen overenim privremenim situacijama ne menja njegovu pravnu prirodu. Drugačije tumačenje narušilo bi načelo jednake vrednosti uzajamnih davanja, a zadržani iznos bi poprimio karakter avansa za buduće radove. Sam Zakon o obligacionim odnosima predviđa da poverilac u slučaju delimičnog neispunjenja može, između ostalog, zahtevati sniženje cene."
        },
        {
          "type": "p",
          "text": "Drugo odlučujuće pitanje jeste dospelost založenog potraživanja. Prema Zakonu o obligacionim odnosima, založni poverilac može naplatiti potraživanje tek kada ono dospe. U ugovorima zasnovanim na FIDIC uslovima, potraživanje izvođača na isplatu zadržanog iznosa ne dospeva overom privremenih situacija. Polovina zadržanog iznosa dospeva izdavanjem potvrde o preuzimanju radova (*Taking-Over Certificate*), a druga polovina po isteku roka za otklanjanje nedostataka, pod uslovom da naručilac taj iznos već nije iskoristio."
        },
        {
          "type": "p",
          "text": "Banka, prema tome, može zahtevati isplatu zadržanog iznosa samo ako je izvođač u celosti izvršio obaveze u skladu sa ugovorom. Potraživanje dospeva samo u delu koji naručilac nije iskoristio."
        },
        {
          "type": "p",
          "text": "S obzirom na pravnu prirodu zadržanog iznosa, a naročito na uslove nastanka i dospelosti potraživanja na njegovu isplatu, banka se prema naručiocu ne može pozivati na prvenstvo pre nego što se ti uslovi ispune. Do tada naručilac može koristiti zadržani iznos u skladu sa ugovorom. Upis založnog prava banke na potraživanjima izvođača ne utiče na to ugovorno pravo naručioca."
        },
        {
          "type": "p",
          "text": "Pri zasnivanju zaloge banka je dužna da proceni da li je potraživanje podobno kao sredstvo obezbeđenja, uzimajući u obzir i ugovorne odredbe koje utiču na njegov nastanak i dospelost. Zanemarivanje tih odredaba bilo bi protivno načelu savesnosti i poštenja. Banka svesno prihvata da je reč o budućem i uslovnom potraživanju, čija dospelost zavisi od toga da li je izvođač izvršio svoje obaveze. Zakon o obligacionim odnosima pritom izričito daje dužniku založenog potraživanja, odnosno naručiocu, pravo da prema založnom poveriocu, odnosno banci, istakne sve prigovore koje bi mogao istaći prema svom poveriocu, odnosno izvođaču."
        },
        {
          "type": "h",
          "text": "Prebijanje potraživanja u praksi"
        },
        {
          "type": "p",
          "text": "U praksi naručilac i izvođač ponekad drugačije urede način korišćenja zadržanog iznosa. Kada pravo naručioca na zadržavanje nije sporno, može se dogoditi da naručilac izvođaču obračuna troškove koje je platio trećim licima, a koje je izvođač bio dužan da snosi. Ugovorne strane potom prebijaju svoja uzajamna potraživanja."
        },
        {
          "type": "p",
          "text": "Ako su potraživanja izvođača već založena banci, banka može smatrati da se takvim dogovorom umanjuje vrednost založenog potraživanja i da bi time mogla biti oštećena kao poverilac."
        },
        {
          "type": "p",
          "text": "Prebijanje se može ostvariti i u sudskom postupku, isticanjem prigovora radi prebijanja ili podnošenjem protivtužbe. Banka stoga nije oštećena sporazumnim prebijanjem između naručioca i izvođača, jer bi naručilac isti prigovor prebijanja mogao istaći i prema banci. Suprotno stanovište bilo bi protivno načelu savesnosti i poštenja."
        },
        {
          "type": "p",
          "text": "Prihvatanjem zaloge na potraživanjima banka svesno preuzima rizike koji proizlaze iz osnovnog ugovora o građenju. Ima pravo da naplati potraživanje kada ono dospe i da preduzme mere radi njegovog očuvanja. Naručilac pritom zadržava pravo da raspolaže zadržanim iznosom na način predviđen ugovorom."
        },
        {
          "type": "h",
          "text": "Zaključak"
        },
        {
          "type": "p",
          "text": "Zaloga potraživanja izvođača u korist banke ne ograničava pravo naručioca da zadržani iznos koristi za pokriće svojih troškova. Nastanak i dospelost potraživanja na isplatu zadržanog iznosa određuju se isključivo ugovorom o građenju. Zato svaki poverilac koji prima potraživanje izvođača ustupanjem ili uzima to potraživanje u zalogu mora da se upozna sa ugovornim odredbama o zadržanom iznosu. Upis založnog prava ne utiče na primenu tih odredaba."
        },
        {
          "type": "p",
          "text": "Ako banka od naručioca zahteva isplatu zadržanog iznosa, naručilac prema banci može istaći sve prigovore koje bi mogao istaći prema izvođaču. To uključuje prigovor da potraživanje nije nastalo, da još nije dospelo ili da se traži plaćanje za radove koji nisu izvedeni."
        }
      ]
    },
    "en": {
      "title": "Pledge and Retention – Conflict Between Rights and the Bank’s Interests",
      "blocks": [
        {
          "type": "h",
          "text": "Historical development of pledge"
        },
        {
          "type": "p",
          "text": "The pledge is one of the oldest and most widely accepted instruments for securing claims. Already in Mesopotamian and Hittite legal systems, forms of pledge existed, although at that time even members of a debtor’s family (e.g., sons) could be pledged – something unthinkable today."
        },
        {
          "type": "p",
          "text": "Only in Roman law did pledge acquire its specific name (*pignus*) and form its essential principles, ranging from possessory pledge (*pignus cum possessione*) to non-possessory pledge (*hypotheca*), with an extension to receivables. Justinian’s Codex already recognized pledges on both things and receivables, including non-possessory pledges."
        },
        {
          "type": "p",
          "text": "Over time, the principle of publicity developed, which in essence served to notify third parties that a given asset was pledged and that they could not expect to satisfy their claims against the owner from that asset."
        },
        {
          "type": "h",
          "text": "Pledge in Serbian law"
        },
        {
          "type": "p",
          "text": "In Serbian law, pledge on movables long had a real (*in rem*) character. Under the Law on Obligations, a pledge on a movable was created by delivery of the asset into the creditor’s possession, while for a pledge on receivables it was sufficient to notify the debtor."
        },
        {
          "type": "p",
          "text": "The principle of publicity was only partially achieved: with movables publicity was obvious (by transfer of possession), but with receivables it was deficient since notice to the debtor was not public, and thus third parties (other than the debtor himself) could not know of the pledge. This often led to disputes over priority between the pledgee and other creditors."
        },
        {
          "type": "p",
          "text": "This problem was resolved by the Law on Pledge on Movable Assets and Rights Registered in the Pledge Register (2005), which introduced a public register of pledges. Registration provides full publicity and resolves the conflict between possessory and non-possessory pledge: priority belongs to the registered creditor, regardless of when possession was delivered or the pledge contract concluded. Legal certainty is thereby ensured for creditors and third parties alike, since after registration all who disregard a registered pledge are ex lege deemed to act in bad faith."
        },
        {
          "type": "h",
          "text": "Pledge in construction and infrastructure practice"
        },
        {
          "type": "p",
          "text": "In construction and infrastructure projects, pledge over receivables plays a special role. Contractors often pledge their future receivables against the employer in favor of a bank, thereby securing financing of the works. Banks rely on contractual payments to ensure their repayment. Registration of the pledge gives them priority over all other creditors, even where the secured receivable arises after another creditor has already acquired a claim against the same debtor."
        },
        {
          "type": "h",
          "text": "Retention in Construction Contracts"
        },
        {
          "type": "p",
          "text": "FIDIC-based contracts, widely used in larger projects in Serbia, almost always provide for a retention sum. Colloquially called “retention,” this mechanism is not a true legal retention in the sense of the Law on Obligations (i.e., retention of a thing), but rather a contractual right of the employer to withhold a part of the certified value of works as security for proper performance and remedying of defects."
        },
        {
          "type": "p",
          "text": "The function of the retention is straightforward: the employer withholds a certain percentage from each interim payment certificate and retains it until completion of works or expiry of the defects liability period. Thus, the employer acquires a claim against the contractor at the moment each interim certificate is certified, while the contractor acquires a right to payment of the retention only upon full performance of obligations."
        },
        {
          "type": "p",
          "text": "Although often viewed as a form of security, retention is not a pledge. The employer cannot acquire a pledge over his own money. Even if it were hypothetically considered a pledge in favor of the employer, it would ex lege cease by virtue of confusion of rights."
        },
        {
          "type": "h",
          "text": "Conflict Between Employer and Bank"
        },
        {
          "type": "p",
          "text": "A practical conflict arises when a contractor pledges his receivables against the employer to a bank, but then fails to perform his contractual obligations. The employer then uses the retention to pay third parties to complete the works or remedy defects. The bank, however, argues that retention is part of the contractor’s receivables and that it is entitled to priority payment. To the bank, retention resembles a “hidden pledge” in favor of the employer, undermining its registered priority."
        },
        {
          "type": "p",
          "text": "From the employer’s standpoint, the retention does not form part of the contractor’s receivables until the contractor has fulfilled his obligations. For the employer, retention simply represents the value of works not performed, which he was forced to pay others to complete."
        },
        {
          "type": "p",
          "text": "This tension results in banks demanding that retention be paid directly to them, while employers insist they are entitled to apply it toward their costs caused by the contractor’s non-performance. The bank’s right to claim retention from the employer in such a situation is very limited, and in most cases impossible."
        },
        {
          "type": "h",
          "text": "Priority of Rights and Maturity of Retention"
        },
        {
          "type": "p",
          "text": "While the bank’s priority vis-à-vis other contractor’s creditors is undisputed, the question is whether the employer has priority over the bank regarding retention. If retention were viewed as a pledge established in favor of the employer, the answer would be yes. However, retention is not a pledge, but a portion of the contract price for works and services the contractor must perform. Accordingly, retention used to cover costs of unperformed works or defect remedying is nothing other than a reduction of the contract price due to incomplete performance."
        },
        {
          "type": "p",
          "text": "The fact that retention was earlier included in certified interim payments does not alter its legal nature. Otherwise, the equivalence of obligations would be undermined, and retention would take the character of an advance for future works. The Law on Obligations itself provides that in cases of partial nonperformance the creditor may, inter alia, demand a reduction of price."
        },
        {
          "type": "p",
          "text": "Another decisive factor is the maturity of the pledged receivable. The Law on Obligations clearly provides that a pledgee may only collect when the claim becomes due. Under FIDIC-based contracts, the contractor’s right to retention does not fall due upon certification of interim payments. Half of the retention becomes due upon issuance of the *Taking-Over Certificate*, and the other half after the defects liability period, provided the employer has not already used it."
        },
        {
          "type": "p",
          "text": "This means the bank may demand retention only if the contractor has fully performed in accordance with the contract, since retention is due only to the extent it has not been used by the employer."
        },
        {
          "type": "p",
          "text": "Given the legal nature of retention, and in particular the conditions for its accrual and maturity, the bank cannot assert priority over the employer before those conditions are met. Meanwhile, the employer is free to use retention under the contract. The fact that the bank holds a registered pledge over receivables is irrelevant to the employer’s contractual right to apply retention."
        },
        {
          "type": "p",
          "text": "The bank, when taking the pledge, is obliged to assess the adequacy of the pledged receivable, including contractual terms affecting its accrual and maturity. Ignoring such terms would contravene the principle of good faith. The bank knowingly accepts that the pledged receivable is conditional and future, with maturity dependent on the contractor’s performance. Moreover, the Law on Obligations explicitly grants the debtor of the pledged receivable (the employer) the right to raise against the pledgee (the bank) any objections he could raise against his own creditor (the contractor)."
        },
        {
          "type": "h",
          "text": "Set-off Practice"
        },
        {
          "type": "p",
          "text": "In practice, employers and contractors sometimes structure retention differently. Where there is no dispute over the employer’s right to retain, it may happen that the employer charges the contractor for third-party costs (which the contractor was obliged to bear) and the parties then offset their mutual claims."
        },
        {
          "type": "p",
          "text": "If the contractor’s receivables are already pledged to a bank, such arrangements may give the bank the impression that the value of the pledged receivable is being diminished, potentially amounting to creditor prejudice."
        },
        {
          "type": "p",
          "text": "However, set-off need not always be voluntary – it may also be judicially enforced by way of a set-off defense or counterclaim. This means the bank is not harmed by consensual set-off between employer and contractor, since the employer would be entitled to raise the same set-off objection against the bank as against the contractor. Any contrary view would contradict the principle of good faith."
        },
        {
          "type": "p",
          "text": "By taking a pledge over receivables, the bank knowingly assumes all risks arising from the underlying construction contract. Its right consists in collecting the receivable when due and in taking measures to preserve it. That right does not include prohibiting the employer from using retention in the manner provided under the contract."
        },
        {
          "type": "h",
          "text": "Conclusion"
        },
        {
          "type": "p",
          "text": "The employer’s right to apply the retention toward covering its costs is not limited by the contractor’s pledge of receivables to a bank. The accrual and maturity of retention are determined solely by the construction contract. Accordingly, any creditor taking an assignment or pledge over the contractor’s receivables must acquaint itself with the contract provisions governing retention. Registration of a pledge has no effect on these contractual provisions."
        },
        {
          "type": "p",
          "text": "If the bank seeks payment of retention from the employer, the employer may raise against the bank any objections it could have raised against the contractor – including that the claim has not arisen, that it is not yet due, or that the demand concerns payment for works not performed."
        }
      ]
    }
  },
  {
    "slug": "property-registration-without-decision",
    "date": "2026-01-15",
    "author": "Ivan Petrović",
    "sr": {
      "title": "Upis prava svojine bez donošenja rešenja u Srbiji – veća efikasnost i nova pitanja pravne sigurnosti",
      "blocks": [
        {
          "type": "h",
          "text": "Uvod"
        },
        {
          "type": "p",
          "text": "U srpskom pravu sticanje prava svojine na nepokretnostima tradicionalno se zasniva na valjanom pravnom osnovu (*iustus titulus*) i upisu kao odlučujućem aktu sticanja (*modus acquirendi*). Upis ima konstitutivno dejstvo, deluje prema svima (*erga omnes*) i omogućava trećim licima da se pouzdaju u upisane podatke."
        },
        {
          "type": "p",
          "text": "U protekloj deceniji sistem upisa prošao je kroz opsežne reforme, prvenstveno usmerene na povećanje efikasnosti digitalizacijom, ublažavanjem formalnih zahteva i sprovođenjem upisa u upravnom postupku. Najnovijim izmenama Zakona o državnom premeru i katastru uveden je ubrzani postupak koji omogućava upis prava svojine bez donošenja rešenja."
        },
        {
          "type": "h",
          "text": "Upis bez donošenja rešenja"
        },
        {
          "type": "p",
          "text": "Izmene Zakona o državnom premeru i katastru donele su značajnu promenu u postupku upisa. Ranije su zahtev za upis mogli da podnesu samo profesionalni korisnici i organi javne vlasti. Prema novom zakonskom okviru, zahtev može podneti svako lice."
        },
        {
          "type": "p",
          "text": "Po prijemu zahteva, nadležna služba katastra izdaje obaveštenje kojim potvrđuje da su ispunjeni formalni uslovi za upis i traži dostavljanje originalnih isprava i plaćanje propisanih taksi. Kada se ti uslovi ispune, služba katastra upisuje pravo svojine bez donošenja rešenja. Takvim upisom nastaje zakonska pretpostavka da je upisano lice zakoniti vlasnik koji je pravo svojine stekao na valjan način."
        },
        {
          "type": "p",
          "text": "Treće lice može osporiti upis podnošenjem zahteva za preispitivanje nadležnoj službi katastra u roku od godinu dana od dana upisa. Uz zahtev se prilažu isprave kojima se dokazuje da upisano pravo nije valjano nastalo ili da je prestalo da postoji. Po prijemu zahteva, služba katastra o njemu odlučuje rešenjem."
        },
        {
          "type": "p",
          "text": "U praksi, postupak preispitivanja zahteva da služba katastra oceni dokaze koje su stranke dostavile kako bi utvrdila da li su bili ispunjeni uslovi za upis. Ovaj izuzetak od inače strogo formalizovanog postupka uveden je radi bržeg upisa i vođenja ažurne i tačne evidencije o nepokretnostima."
        },
        {
          "type": "p",
          "text": "Protiv rešenja donetog povodom zahteva za preispitivanje ne može se izjaviti žalba u upravnom postupku. Nezadovoljna stranka može pokrenuti upravni spor pred Upravnim sudom. Ako se zahtev za preispitivanje odbije, podnosilac se rešenjem upućuje da protiv upisanog lica podnese tužbu sudu opšte nadležnosti. Spor o pravu svojine tako se može voditi u dva paralelna postupka, pred Upravnim sudom i pred sudom opšte nadležnosti. Oba suda mogu se naći u situaciji da ocenjuju osnovanost suprotstavljenih zahteva u pogledu prava svojine."
        },
        {
          "type": "h",
          "text": "Procesne posledice"
        },
        {
          "type": "p",
          "text": "Očekuje se da će upis bez donošenja rešenja biti efikasan u jednostavnim i nespornim predmetima. To bi doprinelo ažurnosti katastra, bržem prometu nepokretnosti i manjem administrativnom opterećenju. Prethodne reforme su, međutim, već smanjile broj jednostavnih predmeta i povećale udeo složenih ili spornih slučajeva."
        },
        {
          "type": "p",
          "text": "Kada postoji sumnja u upisano pravo ili je izgledno da će doći do spora o svojini, prednosti ubrzanog postupka mogu biti manje izražene. Upis u javnu evidenciju stvara zakonsku pretpostavku o postojanju prava svojine, što upisano lice može staviti u povoljniji položaj u eventualnom kasnijem sporu."
        },
        {
          "type": "p",
          "text": "Sa procesnog stanovišta, nekoliko odlika sadašnjeg sistema zaslužuje posebnu pažnju. Služba katastra nema obavezu da licima na čija prava upis utiče dostavi rešenje. Protiv upisa se ne može izjaviti redovna žalba, a jednogodišnji rok za njegovo osporavanje teče od dana upisa, bez obzira na to kada je lice obavešteno ili kada je za upis saznalo. U praksi se zato može dogoditi da upis nepovoljno utiče na postojećeg nosioca prava svojine, a da on nema delotvornu mogućnost da zaštiti svoje pravo u postupku pred katastrom."
        },
        {
          "type": "h",
          "text": "Otvorena pitanja pravne sigurnosti, ustavnih garancija i budućih mehanizama kontrole"
        },
        {
          "type": "p",
          "text": "Izostanak rešenja otvara pitanje kako lica na čija prava upis utiče mogu delotvorno koristiti pravni lek, naročito kada upis neposredno utiče na ustavom zaštićeno pravo svojine. Sa stanovišta Ustava i Evropske konvencije o ljudskim pravima ostaje da se oceni da li sadašnji sistem pruža procesne garancije jednake onima koje se tradicionalno vezuju za odluke o pravu svojine."
        },
        {
          "type": "p",
          "text": "Ubrzani postupak može efikasno funkcionisati u jasnim i nespornim predmetima. Njegove posledice manje su izvesne kada je pravni osnov sticanja svojine nejasan ili kada postoji realna mogućnost da više lica polaže pravo na istu nepokretnost. U takvim slučajevima upis bez donošenja rešenja, uz ograničenu komunikaciju između službe katastra i lica na čija prava upis utiče, može posredno uticati na zaštitu prava svojine."
        },
        {
          "type": "p",
          "text": "Ako od upisa protekne godinu dana a upis nije uspešno osporen, zakonski okvir uspostavlja pretpostavku u korist upisanog vlasnika. Svrha te pretpostavke jeste da doprinese pravnoj sigurnosti, ali ona može znatno opteretiti ranije nosioce prava koji za upis nisu znali ili nisu mogli da reaguju u propisanom roku. Time se u praksi sužava mogućnost zaštite postojećeg prava svojine."
        },
        {
          "type": "p",
          "text": "Slično pitanje postavlja se i u pogledu prava na delotvoran pravni lek. Mogućnost preispitivanja formalno postoji, ali njena delotvornost u praksi može biti ograničena jer postupak upisa ne obezbeđuje blagovremeno obaveštavanje i učešće svih lica na čija prava upis utiče. Strogi rok, koji teče od dana upisa, može dodatno otežati korišćenje pravnog leka licu koje za upis sazna tek kasnije."
        }
      ]
    },
    "en": {
      "title": "Property registration without a formal decision in Serbia: efficiency gains and emerging legal uncertainties",
      "blocks": [
        {
          "type": "h",
          "text": "Background"
        },
        {
          "type": "p",
          "text": "Under Serbian law, acquisition of title to real estate is traditionally based on a valid legal ground (*iustus titulus*) and registration as the decisive act of acquisition (*modus acquirendi*). Registration therefore has constitutional relevance, producing *erga omnes* effects and enabling reliance by third parties."
        },
        {
          "type": "p",
          "text": "Over the past decade, the registration framework has undergone extensive reform, primarily aimed at increasing efficiency through digitalization, reduced formalism and an administrative registration process. The most recent phase of this development, introduced through amendments to the Law on State Survey and Cadastre, provides for a fast-track registration mechanism that allows title registration without the issuance of a formal administrative decision."
        },
        {
          "type": "h",
          "text": "Registration without a formal decision"
        },
        {
          "type": "p",
          "text": "The amendments to the Law on State Survey and Cadastre introduced a significant change to the registration process. Unlike the former framework, under which the right to submit a registration request was limited to professional users and public authorities, the new legislation allows any person to file an application for registration."
        },
        {
          "type": "p",
          "text": "Following the submission of an application, the cadastral authority issues a notice confirming that the formal requirements for registration have been met and requests the submission of original documents together with payment of the applicable fees. Once these requirements are fulfilled, the cadastral authority proceeds with the registration of title without issuing a formal administrative decision. Such registration creates a legal presumption that the registered person is the lawful owner who acquired title through a valid mode of acquisition."
        },
        {
          "type": "p",
          "text": "A registered title may be challenged by a third party, provided that a request for reconsideration is submitted to the cadastral authority within one year from the date of registration. The request must be supported by documents demonstrating that the registered title was not validly constituted or has ceased to exist. Upon receipt of the request, the cadastral authority decides on the reconsideration by issuing a formal decision."
        },
        {
          "type": "p",
          "text": "In practice, this reconsideration procedure requires the cadastral authority to assess the evidence submitted by the parties in order to determine whether the conditions for registration were met. This exception to the otherwise highly formalized registration process is intended to accelerate registrations and contribute to the creation of an up-to-date and accurate real estate register."
        },
        {
          "type": "p",
          "text": "The decision rendered upon reconsideration cannot be challenged through administrative appeal proceedings. However, the dissatisfied party may initiate judicial review before the administrative court. In addition, where a request for reconsideration is rejected, the decision directs the applicant to pursue a civil claim against the registered person before a court of general jurisdiction. As a result, disputes concerning title may proceed along two parallel tracks—one before the administrative court and another before the court of general jurisdiction—both of which may be required to assess the substantive merits of the competing rights."
        },
        {
          "type": "h",
          "text": "Procedural implications"
        },
        {
          "type": "p",
          "text": "The newly introduced mechanism of registration without a formal decision is expected to be efficient in straightforward and uncontested cases, contributing to updated cadastral records, faster market transactions and reduced administrative burden. However, the effects of earlier reforms have already reduced the number of such “easy” cases, while increasing the proportion of complex or disputed ownership situations."
        },
        {
          "type": "p",
          "text": "In cases where the registered title is not free from doubt or where a dispute concerning ownership is likely to arise, the efficiency of the fast-track procedure may become less evident. Registration in the public records creates a legal presumption as to the existence of title, which may place the registered party in a more favorable position in any subsequent dispute."
        },
        {
          "type": "p",
          "text": "From a procedural perspective, certain features of the current framework warrant closer attention. In particular, the cadastral authority is not required to serve a formal administrative decision on affected parties, registration is not subject to review through an ordinary appeal mechanism, and challenges to registration are limited to a one-year period commencing from the date of registration rather than from notification or actual knowledge. In practice, these elements may result in situations where an existing title holder is adversely affected by a registration without having an effective opportunity to seek redress through the cadastral process."
        },
        {
          "type": "h",
          "text": "Open questions: legal certainty, constitutional safeguards, and future control mechanisms"
        },
        {
          "type": "p",
          "text": "The absence of a formal administrative decision raises the question of how affected parties may effectively exercise a legal remedy, particularly in cases where registration directly impacts constitutionally protected property rights. From both a constitutional and European Convention on Human Rights perspective, it therefore remains to be assessed whether the current framework provides procedural safeguards equivalent to those traditionally associated with decisions determining property rights."
        },
        {
          "type": "p",
          "text": "While the fast-track registration mechanism may function efficiently in clear and uncontested cases, its implications become less certain in borderline situations where the legal basis of title is ambiguous or where competing claims may reasonably arise. In such cases, registration without a formal decision, combined with limited procedural interaction between the cadastral authority and affected parties, may indirectly affect the protection of property rights."
        },
        {
          "type": "p",
          "text": "In particular, once a title has remained registered for a period of one year without a successful challenge, the legal framework establishes a presumption in favor of the registered owner. Although intended to promote legal certainty, this presumption may place a significant burden on previously entitled parties who were not aware of the registration or were unable to react within the prescribed time limit, thereby reducing the practical ability to protect an existing property right."
        },
        {
          "type": "p",
          "text": "Similar considerations arise with respect to the right to an effective legal remedy. Although a mechanism for reconsideration formally exists, its effectiveness may be limited in practice, as the registration process does not operate as a genuinely two-way procedure involving timely notification and participation of all affected parties. Moreover, the strict time limit for challenging a registration, calculated from the date of registration rather than from the moment of knowledge, may further restrict the practical availability of an effective remedy in cases where the affected party becomes aware of the registration only at a later stage."
        }
      ]
    }
  },
  {
    "slug": "extension-of-time-construction-contracts",
    "date": "2025-05-09",
    "author": "Ivan Petrović",
    "sr": {
      "title": "Produženje roka u ugovorima o građenju prema srpskom pravu",
      "blocks": [
        {
          "type": "p",
          "text": "Mehanizam produženja roka (*Extension of Time*, u daljem tekstu EoT) široko se primenjuje u ugovorima o građenju kako bi se uvažila kašnjenja na koja izvođač ne može da utiče. Prema srpskom pravu, međutim, izvođač ne može sudskim putem ostvariti pravo na produženje roka čak ni kada su ga ugovorne strane izričito ugovorile. Zaštitu mu pružaju odredbe o oslobođenju od odgovornosti za kašnjenje. Pravna teorija dopušta mogućnost da samostalni zahtevi za utvrđenje prava na produženje roka pod određenim uslovima budu dopušteni, ali srpsko procesno pravo i sudska praksa za sada ne pružaju oslonac za takve zahteve. U ovom tekstu razmatra se kako ugovorne odredbe, srpsko materijalno pravo i procesna pravila utiču na ostvarivanje prava na produženje roka."
        },
        {
          "type": "h",
          "text": "I. Uvod"
        },
        {
          "type": "p",
          "text": "Produženje roka je pravni institut koji se široko primenjuje u ugovornim odnosima. O njegovoj pravnoj prirodi postoje različita shvatanja. Prema preovlađujućem shvatanju, reč je o pravu ugovorne strane koja svoju obavezu ne može da ispuni zbog okolnosti na koje ne može da utiče. Produženje roka može imati i preventivnu ulogu kada se jednoj strani neosnovano pripisuje povreda ugovora zbog kašnjenja za koje ona nije odgovorna."
        },
        {
          "type": "p",
          "text": "Složenost ovog instituta najviše dolazi do izražaja kod ugovora o građenju. Građevinski projekti traju duže vreme i uključuju brojne međusobno povezane odnose. Na kašnjenje mogu uticati različiti učesnici u projektu, kao i spoljni faktori. Standardni obrasci ugovora o građenju u slučaju povrede ugovora ili neispunjenja obaveze obično daju naručiocu pravo da zahteva ugovornu kaznu ili da umanji iznos koji treba da isplati izvođaču."
        },
        {
          "type": "p",
          "text": "Razlozi koji izvođaču daju pravo na produženje roka razlikuju se među standardnim obrascima ugovora o građenju, kao što su FIDIC, ÖNORM, AIA, ConsensusDocs i VOB/B. Ipak, mogu se svrstati u dve kategorije, opravdana kašnjenja (*Excusable Delays*) i višu silu (*Force Majeure*)."
        },
        {
          "type": "p",
          "text": "Pravo izvođača da zahteva produženje roka najčešće prati i pravo da zahteva naknadu troškova. To je razumljivo, naročito kada je do kašnjenja došlo zbog postupanja naručioca ili investitora. Kada kašnjenje izazovu spoljni događaji, poput elementarnih nepogoda, nepredviđenih prepreka ili neuobičajenih vremenskih uslova, a naručilac mu ni na koji način nije doprineo, pitanje troškova postaje presudno. Zahtev za produženje roka tada povlači i pitanje naknade troškova koji mogu ugroziti finansiranje projekta i poremetiti investicione planove naručioca. Otuda nastaju brojni sporovi o tome da li je događaj bio predvidiv, da li su se njegove posledice mogle ublažiti i o sličnim pitanjima."
        },
        {
          "type": "p",
          "text": "Srpski pravni sistem pripada kontinentalnoevropskoj pravnoj tradiciji, u kojoj su zakoni i drugi pisani propisi osnovni izvori prava. Sudska praksa utiče na primenu prava, a obavezujući karakter imaju obavezna pravna shvatanja Vrhovnog suda Republike Srbije."
        },
        {
          "type": "p",
          "text": "Osnovni propis kojim se uređuju ugovorni odnosi u Srbiji jeste Zakon o obligacionim odnosima (ZOO). On utvrđuje opšta načela, među kojima je sloboda ugovaranja (*libertas contrahendi*). Sloboda ugovaranja ograničena je prinudnim odredbama ZOO. Strane slobodno pregovaraju i zaključuju ugovore, ali pred sudom ne mogu ostvariti prava na osnovu ugovora ili pojedine ugovorne odredbe koja je protivna tim pravilima."
        },
        {
          "type": "p",
          "text": "Pored materijalnopravnih izvora, kao što su ugovor i ZOO, značaj imaju i procesna pravila. Zakon o parničnom postupku (ZPP) uređuje postupak rešavanja građanskopravnih sporova i može uticati na mogućnost sudskog ostvarivanja pojedinih prava, uključujući i pravo na produženje roka. U praksi se zato može pokazati da je ostvarivanje izričito ugovorenog prava pred sudom neizvesno."
        },
        {
          "type": "h",
          "text": "II. Srpsko zakonodavstvo i produženje roka"
        },
        {
          "type": "p",
          "text": "U Srbiji se na ugovore u oblasti građenja prvenstveno primenjuje ZOO. Relevantna su njegova opšta načela, odredbe o ugovoru o delu i posebna pravila o ugovoru o građenju. Strane u ugovoru o građenju mogu ugovoriti i primenu Posebnih uzansi o građenju."
        },
        {
          "type": "p",
          "text": "ZOO ne uređuje izričito produženje roka ni kod jednog imenovanog ugovora, pa ni kod ugovora o građenju. Pominje ga samo kao mogući ustupak u okviru ugovora o poravnanju. I u tom kontekstu produženje roka je mogućnost o kojoj strane mogu da pregovaraju pri zaključenju poravnanja. Iz te odredbe ne proizlazi pravo koje bi se moglo ostvariti pred sudom."
        },
        {
          "type": "p",
          "text": "Posebne uzanse o građenju detaljnije uređuju produženje roka. Izvođač može zahtevati produženje zbog promenjenih okolnosti ili zbog neispunjenja obaveza naručioca, pod uslovom da ga je to neispunjenje sprečilo da izvrši radove. Uzanse navode i primere događaja koji mogu opravdati produženje roka, pri čemu ta lista nije konačna."
        },
        {
          "type": "p",
          "text": "Uzanse zahtevaju blagovremeno obaveštavanje i predviđaju da razlog za produženje roka mora nastati pre nego što sam izvođač padne u docnju. Izvođač na osnovu uzansi, kao i na osnovu ugovora o građenju, može od naručioca zahtevati produženje roka. Uzanse, međutim, ne propisuju postupak za ostvarivanje tog prava u slučaju spora. Njihove odredbe o produženju roka nisu preuzete u ZOO, pa u tom pogledu postoji pravna praznina."
        },
        {
          "type": "p",
          "text": "Prema ZOO, izvođač ne odgovara za kašnjenje koje je prouzrokovao naručilac, na primer ako nije obezbedio materijal, odobrio tražene izmene ili uplatio avans. Uopšteno, izvođač ne odgovara za kašnjenje koje je posledica postupanja naručioca. Dok Posebne uzanse omogućavaju produženje roka zbog promenjenih okolnosti, ZOO izvođaču daje pravo da pred sudom ili arbitražnim tribunalom zahteva raskid ugovora zbog promenjenih okolnosti. U takvoj situaciji opstanak ugovora zavisio bi od spremnosti naručioca da pristane na produženje roka."
        },
        {
          "type": "p",
          "text": "U ugovorima o građenju u Srbiji strane ipak često ugovaraju pravo izvođača na produženje roka u određenim okolnostima. Takvo pravo često proizlazi iz primene opštih uslova ugovora FIDIC, koji ga detaljno uređuju. Mogućnost njegovog ostvarivanja u sporu ostaje neizvesna."
        },
        {
          "type": "p",
          "text": "Ako do kašnjenja dođe iz razloga koji su na strani naručioca, a strane se ne dogovore o konkretnom produženju roka, izvođač bi morao da se obrati sudu ili arbitražnom tribunalu radi utvrđenja tog prava. Ako izvođač nije imao dodatne troškove ili nema pravo na njihovu naknadu, njegov zahtev odnosio bi se na utvrđenje produženja roka. Sud ili tribunal bi o tome morao da donese odluku utvrđujuće prirode."
        },
        {
          "type": "p",
          "text": "Ako se takav zahtev podnese sudu, tužilac mora da dokaže pravni interes za podnošenje tužbe. Član 194. stav 2. ZPP predviđa da se tužba za utvrđenje može podneti ako tužilac ima pravni interes da sud, pre dospelosti zahteva za činidbu iz spornog odnosa, utvrdi postojanje ili nepostojanje spornog prava ili pravnog odnosa, istinitost ili neistinitost isprave, ili ako tužilac ima neki drugi pravni interes."
        },
        {
          "type": "p",
          "text": "Pravni interes za tužbu za utvrđenje postoji kada tužiocu nije na raspolaganju drugi vid pravne zaštite, kada postoji neposredna opasnost od nastanka pravne štete i kada odluka može sprečiti buduće sporove i otkloniti pravnu neizvesnost. Svi ovi uslovi moraju biti ispunjeni kumulativno. Ako tužilac ne dokaže pravni interes, sud će odbaciti tužbu."
        },
        {
          "type": "p",
          "text": "Kod samostalne tužbe za utvrđenje prava na produženje roka te je uslove teško dokazati. Izvođač može da zahteva naknadu troškova, da ospori zahtev naručioca za ugovornu kaznu ili da tužbom zahteva isplatu ugovorene cene ako ju je naručilac neosnovano umanjio ili izvršio prebijanje. Izvođač tako može zaštititi svoja ugovorna i zakonska prava u postupku povodom zahteva za činidbu."
        },
        {
          "type": "p",
          "text": "Odlukom o zahtevu za činidbu jednoj strani nalaže se da nešto učini ili da se od nečega uzdrži. Sud u okviru tog postupka utvrđuje postoji li pravo ili obaveza na kojoj se zahtev zasniva i na tom utvrđenju zasniva svoju odluku. Zato o postojanju prava nije potrebna posebna odluka po tužbi za utvrđenje."
        },
        {
          "type": "p",
          "text": "Ishod bi bio isti i kada bi se zahtev izvođača za utvrđenje ugovorenog prava na produženje roka preoblikovao u samostalni zahtev za utvrđenje da je izvođač, na osnovu prinudne odredbe ZOO, oslobođen odgovornosti za kašnjenje. Pošto postoji drugi vid pravne zaštite i nema neposredne opasnosti od nastanka pravne štete, sud bi takvu tužbu odbacio."
        },
        {
          "type": "p",
          "text": "U srpskoj pravnoj teoriji razvija se stav da bi sudovi mogli da prihvate samostalne zahteve za utvrđenje prava na produženje roka. Prema preovlađujućem stavu, samostalni zahtev za utvrđenje prava na produženje roka ili oslobođenja od odgovornosti nije dopušten kada se to pitanje može rešiti u postupku povodom zahteva za činidbu. Pojedini autori, međutim, smatraju da pravni interes za samostalno utvrđenje može postojati kada postoji rizik od više sporova."
        },
        {
          "type": "p",
          "text": "Shvatanje da rizik od više sporova može opravdati postojanje pravnog interesa ima značajnu podršku u pravnoj teoriji. Autori ukazuju na to da bi u različitim sporovima mogle biti donete protivrečne odluke o pravu na produženje roka ili o oslobođenju od odgovornosti. Pravna neizvesnost tada bi bila veća, a pitanje da li takvo pravo postoji moglo bi biti presudno za ishod kasnijih sporova. Samostalna odluka kojom se utvrđuje pravo na produženje roka mogla bi da spreči dalje sporove i doprinese efikasnosti i ekonomičnosti postupka."
        },
        {
          "type": "p",
          "text": "Ostaje da se u praksi proveri da li će sudovi prihvatiti rizik od više sporova kao osnov za postojanje pravnog interesa. Srpski sudovi za sada su uzdržani pri oceni pravnog interesa, naročito kada je strankama na raspolaganju mogućnost da spor reše povodom zahteva za činidbu."
        },
        {
          "type": "p",
          "text": "Iako za ovo shvatanje postoji uporište u teoriji, teško je zamisliti situaciju u kojoj bi rizik od više sporova na građevinskom projektu opravdao samostalnu tužbu za utvrđenje prava na produženje roka ili oslobođenja od odgovornosti. Pretpostavka je da bi jedan događaj koji je izazvao kašnjenje mogao dovesti do tri ili više sporova u vezi sa projektom. U njima bi, međutim, učestvovale različite strane, poput podizvođača, dobavljača ili finansijskih institucija."
        },
        {
          "type": "p",
          "text": "Čak i kada bi sud ili arbitražni tribunal utvrdio pravo na produženje roka, to pravo bi proizlazilo iz ugovora između naručioca i izvođača. Ni naručilac ni izvođač ne bi mogli da se na tu odluku pozovu prema drugim učesnicima u projektu. Ishod bi bio isti kod samostalne odluke kojom se utvrđuje oslobođenje od odgovornosti, jer ono proizlazi iz posebne odredbe ZOO koja uređuje ugovor o građenju. Prema ZPP, odluka suda ili arbitraže obavezuje stranke u sporu, a prema trećim licima može imati dejstvo samo ako to proizlazi iz posebne prirode prava koje je utvrđeno, kao što je pravo svojine."
        },
        {
          "type": "p",
          "text": "Iako pravna teorija dopušta mogućnost da samostalni zahtev za utvrđenje prava na produženje roka bude dopušten, teško je očekivati da će srpski sudovi to shvatanje prihvatiti u praksi. ZOO štiti izvođača kroz institut oslobođenja od odgovornosti. Izvođač može od naručioca zahtevati naknadu troškova ili isplatu ugovorene cene, odnosno zaštititi svoja prava tužbom za činidbu ili se braniti od neosnovanih zahteva naručioca."
        },
        {
          "type": "p",
          "text": "Arbitražni tribunali, naročito u postupcima pred međunarodnim arbitražnim institucijama, verovatno bi prihvatili samostalni zahtev za produženje roka. Dejstvo arbitražne odluke kojom je rok produžen u srpskom pravnom sistemu ipak bi bilo upitno, posebno u odnosu na treća lica."
        },
        {
          "type": "p",
          "text": "Samostalni zahtev za utvrđenje oslobođenja od odgovornosti po ZOO takođe bi bio nedopušten. Oslobođenje izvođača od odgovornosti proizlazi iz prinudne zakonske odredbe i primenjuje se bez obzira na sadržinu konkretnog ugovora. Sud bi i kod takvog zahteva strogo ispitivao postojanje pravnog interesa. Pošto je izvođač oslobođen odgovornosti po samom zakonu, sud bi smatrao da mu je na raspolaganju drugi vid zaštite. Pored toga, bilo bi teško dokazati neposrednu pravnu opasnost. Neposrednost bi postojala tek ako bi naručilac istakao zahtev za činidbu, dok pravna opasnost podrazumeva rizik od gubitka prava, a ne samo novčani gubitak, pri čemu izvođač svoje pravo stiče neposredno na osnovu zakona."
        },
        {
          "type": "p",
          "text": "Oslobođenje od odgovornosti po ZOO ne daje ugovornoj strani mogućnost da pred sudom unapred istakne samostalni zahtev za produženje roka. Primenjujući srpsko pravo, sud ili arbitražni tribunal ne bi izvođaču samostalnom odlukom utvrdio pravo na produženje roka i odredio trajanje produženja. Sud, međutim, može da oceni odgovornost za kašnjenje kada odlučuje o zahtevu za činidbu, na primer o zahtevu za isplatu, i da odluku donese uzimajući u obzir sve činjenice konkretnog slučaja."
        },
        {
          "type": "p",
          "text": "Prinudni karakter člana 607. ZOO može, međutim, ograničiti sud ili arbitražni tribunal kada su rizici ugovorom raspodeljeni u korist naručioca, naročito kada se istovremeno jave kašnjenja za koja su odgovorne obe strane. Oslobođenje izvođača od odgovornosti za kašnjenja koja se mogu pripisati naručiocu može dovesti do toga da se pri odlučivanju u potpunosti zanemari kašnjenje za koje je odgovoran sam izvođač."
        },
        {
          "type": "p",
          "text": "ZOO je donet 1978. godine. Iako ga pojedini smatraju zastarelim ili nedovoljnim za savremene poslovne odnose, njegova dugotrajna primena govori u prilog neutralnosti i jednostavnosti njegovih rešenja. Uprkos značajnim promenama političkog i pravnog okvira u Srbiji, ZOO se pokazao otpornim i primenljivim i u novim okolnostima. Njegove odredbe i danas funkcionišu, što upućuje na to da izmene radi uvođenja produženja roka ili drugih pravnih instituta možda nisu potrebne. Prekomerno normiranje pojedinih oblasti moglo bi da uspori prirodan razvoj pravnog sistema."
        },
        {
          "type": "p",
          "text": "Buduća primena produženja roka u Srbiji verovatno zavisi od usvajanja posebnih metodologija koje bi veštacima dale jasne smernice za ocenu kašnjenja i drugih događaja koji utiču na tok građevinskih projekata. Na osnovu nalaza veštaka, sudovi i arbitražni tribunali mogli bi da odlučuju o zahtevima svih strana, uzimajući u obzir prinudne zakonske norme i odredbe konkretnog ugovora. Tako bi mogli da donesu pravične odluke o odgovornosti za kašnjenje."
        },
        {
          "type": "h",
          "text": "Zaključak"
        },
        {
          "type": "p",
          "text": "Iako se produženje roka često predviđa ugovorima o građenju u Srbiji, pravo na produženje roka može se pravno ostvarivati samo ako je izričito ugovoreno. Srpski pravni sistem izvođaču ne pruža neposredan mehanizam da pred sudom ili arbitražom dobije produženje roka, naročito na osnovu samostalnog zahteva. Zaštitu mu pružaju pravila o oslobođenju od odgovornosti, koja sprečavaju naručioca da ga sankcioniše za kašnjenja na koja izvođač nije mogao da utiče."
        },
        {
          "type": "p",
          "text": "Pravna teorija dopušta mogućnost da samostalni zahtevi za produženje roka budu priznati u određenim okolnostima, naročito ako sudovi prihvate rizik od više sporova kao osnov za postojanje pravnog interesa. Srpski sudovi, međutim, do sada su bili uzdržani prema odstupanju od načela da se zaštita tužbom za utvrđenje pruža samo ako drugi pravni lek nije dostupan."
        },
        {
          "type": "p",
          "text": "Buduća primena produženja roka u Srbiji verovatnije će se razvijati kroz preciznije ugovorne metodologije za analizu kašnjenja i nezavisne stručne ocene. Izmene zakona možda neće biti potrebne. U praksi bi izvođači trebalo da se postaraju da ugovorne odredbe o produženju roka budu jasne i da, gde je to moguće, razmotre međunarodnu arbitražu kao način rešavanja sporova."
        },
        {
          "type": "p",
          "text": "Sudovi će i dalje o ovim pitanjima odlučivati povodom zahteva za činidbu, uz primenu pravila o oslobođenju od odgovornosti. Ostvarivanje produženja roka u Srbiji stoga prvenstveno zavisi od toga šta su strane dogovorile i da li mogu da se sporazumeju o konkretnom produženju."
        }
      ]
    },
    "en": {
      "title": "Applicability of Extension of Time in Construction Contract in Serbian Law",
      "blocks": [
        {
          "type": "p",
          "text": "The Extension of Time (EoT) mechanism is widely used in construction contracts to account for delays beyond the contractor’s control. However, under Serbian law, EoT is not a legally enforceable right even if explicitly agreed upon by the contracting parties. Instead, the legal framework provides contractors with protection through liability release provisions rather than proactive EoT claims. While legal theory suggests that standalone EoT claims could be admissible under specific conditions, Serbian procedural law and court practice currently do not support such claims. This paper explores the interplay between contractual provisions, Serbian statutory law, and procedural rules affecting EoT claims."
        },
        {
          "type": "h",
          "text": "I. Introduction"
        },
        {
          "type": "p",
          "text": "Extension of Time (EoT) is a legal institute broadly applied in the contracts. Defining of the legal nature of the EoT may be divergent. The majority would view an EoT as a right granted to a party that is unable to fulfill its obligation due to circumstances beyond its control. However, it can also serve as a preventive remedy when a party is mistakenly considered in breach for a delay that is not attributable to them."
        },
        {
          "type": "p",
          "text": "The complexity of EoT legal institute is the most prominent in construction contracts. The construction affairs are followed by multiple relationships throughout the significant time period whereby a number of participants in the project and various external factors may cause or influence the delay. Standard forms of the construction contracts commonly impose sanctions for the breach or default through employer’s rights such as contractual penalty or right to deduct the payment."
        },
        {
          "type": "p",
          "text": "Although the reasons giving the contractor the right to EoT are different in standard forms of construction contracts (FIDIC, ONORM, AIA, Consensusdocs, VOB/B), the grounds for EoT may be subsumed in two categories: *Excusable Delays* and *Force Majeure*."
        },
        {
          "type": "p",
          "text": "The contractor’s right to claim EoT is predominantly followed by the right to claim costs. This entitlement is rational, especially for the cases of employer’s delays (or owner’s actions). However, in the case of external events such as “Acts of God”, unforeseen obstacles or abnormal weather, where the employer did not contribute to a delay in any manner, the contractor’s costs become crucial. In such cases the requests and entitlement to EOT put forward the claim for the costs which may challenge the financing of the project and jeopardize the employer’s plans in terms of the investment. Consequently, this fact leads to a number of disputes whereby the parties are testing the foreseeability of the event, or possibility of mitigating and similar."
        },
        {
          "type": "p",
          "text": "The Serbian legal system follows the civil law tradition, where statutes and codified laws serve as the primary sources of law, while case law, with the exception of mandatory opinions of the Supreme Court of the Republic of Serbia, remains non-binding, having only an influential role."
        },
        {
          "type": "p",
          "text": "The cornerstone of contractual relations in Serbia is the Law on Contracts and Torts (LCT), which sets out general principles, including the *libertas contrahendi* principle (freedom of contract). However, this principle is limited by the mandatory provisions of the LCT. Consequently, while parties are free to negotiate and enter into agreements, any contract (or contractual provision) that violates these mandatory rules will be deemed unenforceable by the court."
        },
        {
          "type": "p",
          "text": "Beyond substantive legal sources such as contracts and the LCT, procedural law also plays a role. The Serbian Law on Civil Procedure governs the rules and procedures for resolving civil disputes and can affect the enforceability of certain legal institutes, including the EoT. In practice, a contractually agreed right or entitlement may become uncertain when subjected to judicial review in a dispute resolution process."
        },
        {
          "type": "h",
          "text": "II. Serbian legislation and EoT"
        },
        {
          "type": "p",
          "text": "In Serbia, legislation governing construction-related contracts is primarily based on the LCT. This includes general principles, provisions on service agreements, and specific rules on construction contracts. In addition, parties to a construction contract may agree to apply the Special Usances on Construction (SUC)."
        },
        {
          "type": "p",
          "text": "The LCT does not explicitly regulate the EoT in any of the named contracts including the construction matters. It only mentions EoT as a possible compromise in settlement agreements. Even in this context, EoT is not recognized as an enforceable right before the courts but rather as an option that may be negotiated in a settlement."
        },
        {
          "type": "p",
          "text": "By contrast, SUC provides more detailed regulation of EoT. It allows the contractor to request an extension in cases of changed circumstances or the employer’s default, provided that the default prevented the contractor from performing the work. SUC also non-exhaustively lists specific events that may justify an EoT."
        },
        {
          "type": "p",
          "text": "SUC further requires timely notice and stipulates that the grounds for EoT must arise before the contractor itself is in delay. However, SUC does not specify the procedure for enforcing an EoT claim. Like a construction contract, it allows the contractor to request EoT from the employer, but it does not establish a dispute resolution mechanism for enforcing this right. Crucially, SUC’s EoT provisions are not incorporated into the LCT, creating a significant legal gap."
        },
        {
          "type": "p",
          "text": "Under the LCT, a contractor is not liable for delays caused by the employer, such as failure to provide materials, failure to approve requested changes, or failure to make advance payments. More generally, if the delay results from the employer’s actions, the contractor may not be held responsible. While SUC allows the EoT in the event of “changed circumstances”, by LCT the “changed circumstances” entitle the contractor to request the termination of the contract by the court or arbitral tribunal, and the survival of the contract would depend on the willingness of the employer to agree on EoT."
        },
        {
          "type": "p",
          "text": "However, the parties involved in construction contracts in Serbia commonly agree on the contractor's right to an EoT under specific circumstances. This agreement often stems from the adoption of the FIDIC general conditions of the contract, which provide detailed provisions regarding EoT rights for contractors. Nevertheless, the enforcement of this contractor right remains uncertain."
        },
        {
          "type": "p",
          "text": "In a hypothetical scenario where the contractor faces delays attributable to the employer's responsibilities and the parties have not agreed on an actual EoT, the contractor would need to approach a court or arbitral tribunal to establish its entitlement to an EoT. Assuming the contractor incurs no costs or is not entitled to recover costs, the relief sought would involve determining the EoT, necessitating a declarative decision from the court or tribunal."
        },
        {
          "type": "p",
          "text": "If such a request is made to the court the claimant would be required to demonstrate a legal interest in filing the claim. This is because the Article 194, paragraph 2 of the Law on Civil Procedure stipulates that, “[a] declaratory lawsuit may be filed if the plaintiff has a legal interest that the court determines the existence or nonexistence of a disputed right or legal relationship before the due date of a claim arising from that relationship, or to establish the truth or falsehood of a document, or if the plaintiff has some other legal interest.”"
        },
        {
          "type": "p",
          "text": "Legal interest for pursuing declaratory relief is established when (i) no alternative protection is available, (ii) there is an imminent risk of legal damage, and (iii) the decision could prevent future disputes and legal uncertainty. All these conditions must be met cumulatively. If the claimant fails to prove legal interest, the case will be dismissed."
        },
        {
          "type": "p",
          "text": "Proving the necessary conditions to establish legal interest in a standalone claim for EoT is not feasible. The contractor has an alternative option to (i) file a claim for cost reimbursement, (ii) contest the employer’s claim for contractual penalties, or (iii) file a claim for payment of the contract price in cases of unjustified deductions or set-offs by the employer. Thus, the contractor is entitled to various legal remedies in performative lawsuits that safeguard its rights under the contract and the law."
        },
        {
          "type": "p",
          "text": "Performative decisions, which compel one party to act (or refrain from acting), do not require a determining decision to affirm entitlement to a right, as the determining decision is inherently included within the performative decision. When adjudicating a performative claim, the court will assess the existence or non-existence of a specific right or obligation during the proceedings and base its performative decision on that assessment."
        },
        {
          "type": "p",
          "text": "Even if the contractor's claim for determining the contractually agreed EoT right were to be recharacterized as a standalone claim for establishing legal entitlement to release from responsibility for delays, in line with the mandatory provision of the LCT, the court's ruling would still be the same. The criteria of lacking alternative protection and facing imminent legal damage would not be satisfied, leading to a dismissal of the case."
        },
        {
          "type": "p",
          "text": "Serbian legal theory is evolving to a position where standalone claims for determining EoT rights might be accepted by the courts. Although the prevailing legal theory argues that standalone determinations of the right to EoT or release from responsibility are not viable due to the option of raising claims in a performative context, some authors identify legal interest for standalone determinations of EoT or release from responsibility in scenarios involving a “risk of multiple disputes”."
        },
        {
          "type": "p",
          "text": "The concept of “risk of multiple disputes” as a basis for existing legal interest is well-supported in legal theory. Commentators emphasize that multiple disputes can lead to contradictory decisions regarding entitlements to EoT or releases from responsibility. In such instances, the significance of legal uncertainty would escalate, making the existence or non-existence of the right to EoT or release from responsibility a pivotal issue for subsequent cases. A declarative standalone decision regarding the right to EoT would further mitigate disputes and enhance the principles of efficiency and cost-effectiveness within the LCP."
        },
        {
          "type": "p",
          "text": "Adopting of the “risk of multiple disputes” as a legitimate legal interest needs to be tested in practice. So far, the Serbian courts are reluctant to assessing the existence of the legal interest, especially when the parties have an alternative mechanism to resolve the dispute through the performative claim."
        },
        {
          "type": "p",
          "text": "Although theoretically well supported, the risk of multiple disputes as the legal interest for filing performative claim for EoT or release from responsibility in construction affairs is difficult to imagine. The risk of multiple disputes implies that there could be three or more disputes related to the project due to one delay event. However, such disputes would involve different parties such as subcontractors, suppliers, financial institutions or else."
        },
        {
          "type": "p",
          "text": "Even if EoT right would be determined by the court or arbitration, this right would originate from the contract between employer and contractor and neither the contractor nor the employer could use the declarative decision on EoT towards their other partners in the project. In the case of standalone decision determining the release from responsibility, the result would be the same since this right originates from the specific provision of LCT regulating the construction contract. At the end of the day, pursuant to the LCP the court or arbitration decision is legally binding only between the parties in the dispute and may be binding to third parties only in the case of the specific nature of the right determined by the court (such as ownership right)."
        },
        {
          "type": "p",
          "text": "Although the legal theory suggests that the standalone claim for determining the EoT entitlement would be admissible, it is hard to expect that the courts in the Republic of Serbia would accept to implement this theory in practice. The LCT provides the legal protection for the contractor through the “release of responsibility” institute allowing the contractor to claim the costs or claim the payment from the employer. Such a legal framework will allow the contractor to pursue its rights through the performative claim or to defend itself from the employer’s illegal claims."
        },
        {
          "type": "p",
          "text": "The arbitral tribunals, especially in the processes held before the international arbitral institutions, would most probably accept the standalone claim for EoT. However, the effect of arbitral decision granting EoT in the Serbian legal system would be questionable, especially in terms of the effect towards third parties."
        },
        {
          "type": "p",
          "text": "Determining the release of responsibility under the LCT would also be inadmissible. The right for release of responsibility for the contractor arises from the imperative provision of the law and the contractor is entitled to a release of responsibility regardless of the contents of the respective contract. The strict assessment of the existence of the legal interest for such a claim would still be applied by the court. Since the contractor is released from the responsibility under the imperative rules of the law the court would consider that the alternative protection would be available. In addition, the pre-condition of “imminent legal risk” could easily be challenged since: (i) “imminence” would exist only if there is a performative claim by the employer and (ii) “legal risk” implies a loss of right (not loss of monetary value) in the situation where the contractor gained its right directly by the law."
        },
        {
          "type": "p",
          "text": "The release of responsibility under the LCT does not constitute a right for the party to make a proactive standalone claim for EoT before the court. When applying the Serbian law, the court or arbitral tribunal would not grant the contractor a right to EoT and, hypothetically determine that contractor’s entitlement to EoT and the duration of EoT. This allows the court to assess responsibility when deciding on a performative claim (request for payment) and to render a decision considering all the facts of the case."
        },
        {
          "type": "p",
          "text": "However, the imperativeness of article 607 of LCT may limit the decision makers where the allocation of the risks is employer friendly, especially in cases of concurrent delays attributable to both parties. The release of responsibility for the contractor in cases attributable to the employer may result in decisions where the contractor’s delay is completely neglected."
        },
        {
          "type": "p",
          "text": "The Law on Contracts and Torts (LCT) was enacted in 1978, and while some may view it as outdated or insufficient for modern business affairs, its enduring relevance is a testament to its neutrality and simplicity. Despite significant changes in Serbia’s political and legal landscape, the LCT has proven resilient, adapting well to new circumstances. Its provisions continue to function effectively today, suggesting that introducing amendments to incorporate Extension of Time or other legal institutes may not be necessary. Overregulating certain areas of law could hinder the natural development of the legal system."
        },
        {
          "type": "p",
          "text": "The future applicability of EoT in Serbia likely lies in adopting specialized methodologies that provide experts with clear guidelines for assessing delays and incidental events in construction projects. Based on expert reports, courts and arbitral tribunals would be able to adjudicate claims from all parties, considering both the imperative norms of the law and the specific contractual provisions, ultimately ensuring fair and just decisions in matters of responsibility."
        },
        {
          "type": "h",
          "text": "Conclusion"
        },
        {
          "type": "p",
          "text": "Although EoT is a common feature in construction contracts in Serbia, it does not constitute a legally enforceable right unless expressly agreed upon. The Serbian legal system does not provide a direct mechanism for contractors to obtain an EoT through courts or arbitration, particularly as a standalone claim. Instead, protection is offered through liability release rules, preventing employers from penalizing contractors for delays outside their control."
        },
        {
          "type": "p",
          "text": "Legal theory suggests that standalone EoT claims could be recognized under specific circumstances, particularly if courts adopt the “risk of multiple disputes” doctrine. However, Serbian courts have been reluctant to depart from the principle that declaratory relief should only be granted when no other remedy is available."
        },
        {
          "type": "p",
          "text": "The future of EoT applicability in Serbia likely lies in improved contractual methodologies for delay analysis and independent expert determinations rather than statutory amendments. In practice, contractors should ensure that EoT provisions are clearly defined in contracts and consider international arbitration for dispute resolution where possible."
        },
        {
          "type": "p",
          "text": "Courts will continue to rely on performative claims and liability release rules rather than proactively granting EoT entitlements. Thus, securing an EoT in Serbia remains primarily a matter of contract negotiation rather than judicial enforcement."
        }
      ]
    }
  },
  {
    "slug": "ima-dana-skadarlija",
    "date": "2022-01-21",
    "author": "Ivan Petrović",
    "sr": {
      "title": "Poznati beogradski restoran „Ima dana“ u Skadarliji prodat kompaniji BG UrbanLUX",
      "blocks": [
        {
          "type": "p",
          "text": "Kompanija BG Urban Lux završila je kupovinu restorana „Ima dana“ u Skadarliji, najstarijoj i najpoznatijoj boemskoj četvrti u srcu Beograda."
        },
        {
          "type": "p",
          "text": "Restoran je kupljen od Beogradske industrije piva (BIP) u okviru stečajnog postupka. Na javnom nadmetanju učestvovalo je pet zainteresovanih kupaca, a konačna cena iznosila je 1.300.000 evra."
        },
        {
          "type": "p",
          "text": "Osnovna delatnost kompanije BG Urban Lux je izgradnja stambenih i poslovnih objekata. Kompanija je osnovana u novembru 2016. godine sa ciljem da se razvije kao investitor i izvođač građevinskih projekata. Angažovanjem stručnjaka sa iskustvom u građevinarstvu nastoji da obezbedi visok kvalitet u svim aspektima izgradnje."
        }
      ]
    },
    "en": {
      "title": "Famous Belgrade restaurant ‘Ima dana’ in Skadarlija sold to BG UrbanLUX",
      "blocks": [
        {
          "type": "p",
          "text": "The company BG Urban Lux has successfully completed the transaction of acquisition of ‘Ima dana’ restaurant in Skadarlija - the oldest and most famous bohemian quarter in the heart of Belgrade."
        },
        {
          "type": "p",
          "text": "The purchase was done in the bankruptcy proceedings, from the Belgrade beer industry BIP. There were 5 interested buyers in the public bidding procedure, and the final price achieved is 1,300,000 EUR."
        },
        {
          "type": "p",
          "text": "BG Urban Lux is a company whose main activity is the construction of residential and commercial buildings. It was created in November 2016 with the idea of developing into a serious investment and construction company. Through the engagement of professional and experienced staff in the field of construction industry, they create facilities whose main characteristic is quality in every sense."
        }
      ]
    }
  },
  {
    "slug": "construction-laws-amendments",
    "date": "2023-08-14",
    "author": "Ivan Petrović",
    "sr": {
      "title": "Izmene paketa zakona u oblasti izgradnje",
      "blocks": [
        {
          "type": "p",
          "text": "Narodna skupština Republike Srbije usvojila je na sednici održanoj 26. jula 2023. godine tri zakona u oblasti izgradnje."
        },
        {
          "type": "ol",
          "items": [
            {
              "text": "**Zakon o izmenama i dopunama Zakona o planiranju i izgradnji**, koji je stupio na snagu 4. avgusta 2023. godine."
            },
            {
              "text": "**Zakon o dopunama Zakona o ozakonjenju objekata**, koji je stupio na snagu 28. jula 2023. godine."
            },
            {
              "text": "**Zakon o prestanku važenja Zakona o posebnim postupcima radi realizacije projekata izgradnje i rekonstrukcije linijskih infrastrukturnih objekata od posebnog značaja za Republiku Srbiju**, koji je stupio na snagu 4. avgusta 2023. godine."
            }
          ]
        },
        {
          "type": "p",
          "text": "Najviše pažnje privukle su izmene i dopune Zakona o planiranju i izgradnji. O njima smo pisali još dok je zakon bio u fazi predloga. [Prethodni tekst Ivana Petrovića](https://www.jpm.law/draft-amendments-to-the-planning-and-construction-act-adopted/)"
        },
        {
          "type": "p",
          "text": "Najznačajnije izmene odnose se na konverziju, odnosno pretvaranje prava korišćenja na građevinskom zemljištu u pravo svojine bez naknade. Krug lica oslobođenih plaćanja naknade za konverziju sada je znatno širi. Ovo pitanje detaljnije smo razmotrili u prethodnom tekstu."
        },
        {
          "type": "p",
          "text": "Izmene i dopune Zakona o planiranju i izgradnji posebnu pažnju posvećuju energetskoj efikasnosti, zelenoj agendi i zaštiti prirodnih resursa i kulturnog nasleđa. Tako će, na primer, pribavljanje sertifikata o energetskim svojstvima zgrade ili njenog posebnog dela biti obavezno prilikom overe ugovora o kupoprodaji nepokretnosti, kao i prilikom zaključenja ugovora o zakupu nepokretnosti."
        },
        {
          "type": "p",
          "text": "Jača se učešće nadležnih organizacija za zaštitu prirode i zaštitu nepokretnog kulturnog nasleđa, naročito u postupcima izrade i donošenja planskih dokumenata. Zakon uvodi pojmove „zelena gradnja“, „sertifikat zelene gradnje“ i „zelena infrastruktura“. Vlada Republike Srbije treba da, na predlog Ministarstva građevinarstva, saobraćaja i infrastrukture i u skladu sa zakonskim ovlašćenjem, utvrdi podsticaje za zelenu gradnju. Investitori će biti podstaknuti na zelenu gradnju umanjenjem doprinosa za uređivanje građevinskog zemljišta za objekte za koje je izdat sertifikat zelene gradnje."
        },
        {
          "type": "p",
          "text": "Izmenama i dopunama Zakona o planiranju i izgradnji predviđeno je osnivanje Agencije za prostorno planiranje i urbanizam Republike Srbije kao javne agencije. Uvode se i funkcije glavnog državnog urbaniste i glavnog urbaniste autonomne pokrajine, koji će biti nadležni za kontrolu prostornih i urbanističkih planskih dokumenata. Proširuje se i krug subjekata koji mogu biti ovlašćeni za izdavanje informacije o lokaciji."
        },
        {
          "type": "p",
          "text": "Istovremeno sa donošenjem zakona kojim prestaje da važi poseban zakon o izgradnji i rekonstrukciji linijskih infrastrukturnih objekata, u Zakon o planiranju i izgradnji unete su odredbe koje uređuju pojedina važna pitanja izgradnje linijskih infrastrukturnih objekata od posebnog značaja za Republiku Srbiju."
        },
        {
          "type": "p",
          "text": "Dopune Zakona o ozakonjenju objekata donose povoljnije uslove vlasnicima nezakonito izgrađenih objekata, posebno vlasnicima stambenih objekata i stanova u nezakonito izgrađenim zgradama. Ti objekti mogu se privremeno priključiti na komunalnu i elektroenergetsku mrežu javnih preduzeća, bez obzira na vreme izgradnje."
        }
      ]
    },
    "en": {
      "title": "Amendments of the set of laws related to construction",
      "blocks": [
        {
          "type": "p",
          "text": "The National Assembly of the Republic of Serbia adopted several proposed laws related to construction during its session on 26 July 2023. These are:"
        },
        {
          "type": "ol",
          "items": [
            {
              "text": "**The Law on Amendments and supplements to the Law on Spatial Planning and Construction**, which came into force on 4 August 2023."
            },
            {
              "text": "**The Law on supplements to the Law on Legalization of Buildings**, which came into force on 28 July 2023."
            },
            {
              "text": "**The Law on Cessation of Validity of the Law on Special Procedures for Realization of Projects of Construction and Reconstruction of Linear Infrastructural Objects of Special Importance of the Republic of Serbia**, which came into force on 4 August 2023."
            }
          ]
        },
        {
          "type": "p",
          "text": "The highest level of attention is given to the amendments and supplements to the Law on Spatial Planning and Construction. We have already discussed these amendments while the same was still in the phase of law proposal (text prepared by our Partner, Mr. Ivan Petrović, can be found at the [following link](https://www.jpm.law/draft-amendments-to-the-planning-and-construction-act-adopted/))."
        },
        {
          "type": "p",
          "text": "The most significant amendments and supplements to the Law on Spatial Planning and Construction address the matter of conversion, i.e. conversion of the right of use of the construction land to ownership right without remuneration. The obligation to pay conversion fees is now abolished for a significantly larger group of entities than before. This matter was discussed in more detail in the text available at the above link."
        },
        {
          "type": "p",
          "text": "Besides this amendment, the amendments and supplements to the Law on Spatial Planning and Construction give special attention to the matters of energy efficiency, green agenda and to the protection of natural resources and cultural heritage. For example, now it shall be mandatory to obtain the certificate on energy properties of the building, i.e. separate part of the building, for the purposes of certification of the real estate sale-purchase agreement, as well as for the purposes of execution of the agreement on real estate lease."
        },
        {
          "type": "p",
          "text": "The participation of competent organizations for the protection of nature and organizations for the protection of immovable cultural heritage is enhanced, especially in the procedures of preparation and adoption of spatial planning documents. The law introduces the notion of “green building”, “green building certificate”, as well as the notion of “green infrastructure”. The Government of the Republic of Serbia should, on the basis of the proposal of the Ministry of Construction, Traffic and Infrastructure, and pursuant to the authorization granted to it by the law, determine the incentives for green building. The investors shall be incentivized to pursue green building through the reduction of contributions for the development of construction land for facilities for which the green building certificate is issued."
        },
        {
          "type": "p",
          "text": "The amendments and supplements of the Law on Spatial Planning and Construction introduce the establishment of the Agency for Spatial Planning and Urbanism of the Republic of Serbia, as the public agency, the establishment of a chief state urban planner and chief urban planner of the autonomous province, who shall be in charge for control of spatial and urban planning documents. Also, the amendments extend potential entities that are authorized for issuance of the information on location."
        },
        {
          "type": "p",
          "text": "Also, simultaneously with the adoption of the Law on Cessation of Validity of the Law on Special Procedures for Realization of Projects of Construction and Reconstruction of Linear Infrastructural Objects of Special Importance of the Republic of Serbia, the amendments and supplements of the Law on Spatial Planning and Construction implement thereof provisions that tackle certain important matters for construction of linear infrastructural objects that are recognized as linear infrastructural objects of special importance for the Republic of Serbia."
        },
        {
          "type": "p",
          "text": "As per the Law on supplements to the Law on Legalization of Buildings, the adopted supplements are good news for the owners of illegally constructed facilities, and especially for the owners of illegally constructed residential buildings, or of the apartments in the illegally constructed buildings. Their buildings may be temporarily connected to the utility and electric grid network of public companies, regardless of when these buildings were constructed."
        }
      ]
    }
  },
  {
    "slug": "agricultural-land-public-bidding",
    "date": "2021-09-14",
    "author": "Ivan Petrović",
    "sr": {
      "title": "Javno nadmetanje za zakup i korišćenje poljoprivrednog zemljišta u državnoj svojini isključivo putem veb-aplikacije",
      "blocks": [
        {
          "type": "p",
          "text": "Ministarstvo poljoprivrede, šumarstva i vodoprivrede Republike Srbije donelo je izmene Pravilnika o uslovima i postupku davanja u zakup i na korišćenje poljoprivrednog zemljišta u državnoj svojini („Službeni glasnik RS“, br. 16/2017, 111/2017, 18/2019, 45/2019, 3/2020, 25/2020, 133/2020 i 63/2021, u daljem tekstu Pravilnik). Izmene su stupile na snagu 24. juna 2021. godine."
        },
        {
          "type": "p",
          "text": "Prethodna verzija Pravilnika predviđala je dva načina sprovođenja javnog nadmetanja za zakup ili korišćenje poljoprivrednog zemljišta u državnoj svojini. Prvi je bio klasično javno nadmetanje, koje je zahtevalo lično prisustvo, a drugi elektronsko javno nadmetanje putem veb-aplikacije Uprave za poljoprivredno zemljište."
        },
        {
          "type": "p",
          "text": "Najznačajnija novina ovih izmena jeste potpuno ukidanje javnog nadmetanja uz lično prisustvo. Fizička i pravna lica registrovana kao poljoprivredna gazdinstva, koja imaju pravo da učestvuju u ovim nadmetanjima, od stupanja izmena na snagu mogu da učestvuju isključivo elektronski. [Veb-aplikacija za elektronsko javno nadmetanje](https://gp.upz.minpolj.gov.rs/InzemBid)"
        },
        {
          "type": "p",
          "text": "Sprovođenje upravnih postupaka elektronskim putem dobrodošao je pravac razvoja koji je u Srbiji prisutan već neko vreme, naročito od donošenja Zakona o elektronskoj upravi 2018. godine („Službeni glasnik RS“, br. 27/2018). Osnovna ideja tog zakona bila je da se licima pruži dodatni način ostvarivanja prava pred organima uprave, uz mogućnost izbora. Zakon nije propisao da se postojeći postupci koji podrazumevaju neposredan kontakt u potpunosti zamene elektronskim postupcima i da se učesnicima ukine mogućnost ličnog prisustva."
        },
        {
          "type": "p",
          "text": "Zato se postavlja pitanje kakve će posledice ove izmene imati za zainteresovane učesnike. U javnim nadmetanjima za zakup ili korišćenje poljoprivrednog zemljišta učestvuju poljoprivredna gazdinstva, koja posluju u sektoru manje oslonjenom na elektronsko poslovanje. Ostaje da se vidi da li će prelazak na isključivo elektronsko nadmetanje tim učesnicima olakšati ili otežati učešće."
        }
      ]
    },
    "en": {
      "title": "Public bidding for lease/use of state-owned agricultural land exclusively via web application",
      "blocks": [
        {
          "type": "p",
          "text": "The Ministry of Agriculture, Forestry and Water Management of the Republic of Serbia introduced newest amendments of the Rulebook on Conditions and Procedure for Public Bidding for Lease/Use of State Owned Agricultural Land (“Official Gazette of RS”, no. 16/2017, 111/2017, 18/2019, 45/2019, 3/2020, 25/2020, 133/2020 and 63/2021) (the “Rulebook”) that came into force on 24 June 2021."
        },
        {
          "type": "p",
          "text": "Previous version of Rulebook prescribed two possible manners for conducting the public bidding for lease/use of state owned agricultural land – regular - “old-school” public bidding that requires physical presence, and e-public bidding that is conducted through web application provided by the Administration for Agricultural Land."
        },
        {
          "type": "p",
          "text": "The most notable novelty of the latest amendments of the Rulebook is the complete elimination of regular “old-school” public bidding. From now on, natural and legal persons registered as agricultural holdings, being the subjects entitled to participate in respective public biddings, can participate in public biddings only electronically through mentioned web application. The web application for digital public bidding can be accessed by the [following link](https://gp.upz.minpolj.gov.rs/InzemBid)."
        },
        {
          "type": "p",
          "text": "The trend of conducting administrative procedures through electronic means is welcomed and ongoing in Serbia for a while now, and especially since 2018 when the Law on Electronic Administration (“Official Gazette of RS”, no. 27/2018) was introduced. However, the main idea of this law was to provide for yet another possibility in realization of one’s rights before the administrative bodies, which assumes the choice of a subject at hand. It was never prescribed that existing procedures that assume personal “face-to-face” contact should be completely replaced by e-procedures and subjects deprived from the possibility to take part in these procedures physically - “in person”."
        },
        {
          "type": "p",
          "text": "Having this in mind, it stands to question the latest amendments of the Rulebook, especially from the perspective of interested subject – since the participants in public biddings for lease/use of agricultural land are agricultural holdings/subjects and not subjects who come from sectors more focused on digital/electronic environment of doing business – it is left to be seen whether the effects of the latest amendments of the Rulebook are going to be positive or negative for the bidders."
        }
      ]
    }
  }
];


/** Svi clanci, od najnovijeg ka najstarijem (po datumu objave). */
export function getArticles(): Article[] {
  return [...articles].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

const MONTHS: Record<Locale, string[]> = {
  sr: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"],
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
};

/** sr: "15. januar 2026." / en: "15 January 2026" */
export function formatDate(iso: string, lang: Locale): string {
  const [y, m, d] = iso.split("-").map(Number);
  return lang === "sr" ? `${d}. ${MONTHS.sr[m - 1]} ${y}.` : `${d} ${MONTHS.en[m - 1]} ${y}`;
}

/** Tekst bez oznaka (*, **, [x](url)). */
export function plain(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)\s]+\)/g, "$1")
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/\*(.+?)\*/g, "$1");
}

/** Kratak izvod iz prvog pasusa (do ~max znakova, na granici reci). */
export function excerpt(article: Article, lang: Locale, max = 240): string {
  const first = article[lang].blocks.find((b) => b.type === "p");
  const t = first && first.type === "p" ? plain(first.text) : "";
  if (t.length <= max) return t;
  const cut = t.slice(0, max);
  return cut.slice(0, Math.max(cut.lastIndexOf(" "), 1)).replace(/[\s,;:.–-]+$/, "") + "…";
}
