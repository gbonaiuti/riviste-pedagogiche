// =====================================================================
// CONFIGURAZIONE E REPERTORIO UNICO RIVISTE PEDAGOGICHE ITALIANE
// Modifica esclusivamente questo file per aggiungere/aggiornare riviste,
// URL, ISSN o ID OpenAlex: tutte le pagine si aggiorneranno in automatico.
// =====================================================================

window.APP_CONFIG = {
  contactEmail: "giovanni.bonaiuti@unica.it",
  apiKey: "WWUDctFbT11OpaARtn4h2Z",
  perPage: 20
};

window.ELENCO_PAGE_CONFIG = {
  title: "Elenco riviste scientifiche italiane di area pedagogica",
  description: "Questo repertorio raccoglie le riviste italiane in fascia A ANVUR per l'area della ricerca educativa, pedagogica e didattica (settori concorsuali 11/PAED-01 e 11/PAED-02). Cliccando su ciascuna testata è possibile accedere direttamente al sito ufficiale della rivista. Per ogni titolo è inoltre indicato se risulta indicizzato in entrambi i motori del portale (<strong>OpenAlex + Google</strong>) oppure se, non essendo ancora presente nei database aperti di OpenAlex, è interrogabile esclusivamente tramite <strong>Google Programmable Search</strong> o direttamente sul sito dell'editore."
};

// Nota: se openAlexId è valorizzato (es. "S4306502263"), la rivista viene
// automaticamente inclusa nei due motori OpenAlex e contrassegnata come
// "Indicizzata" nell'Elenco Riviste. Se openAlexId è vuoto (""), risulta
// "Non indicizzata" in OpenAlex.
window.PEDAGOGICAL_JOURNALS = [
  { name: "ANNALI DI STORIA DELL'EDUCAZIONE E DELLE ISTITUZIONI SCOLASTICHE", issn: "1723-9672", issn2: "", url: "https://riviste.gruppostorico.it/index.php/ASE", openAlexId: "" },
  { name: "ANNALI DI STORIA DELLE UNIVERSITÀ ITALIANE", issn: "1127-8250", issn2: "2724-5527", url: "https://www.morcelliana.net/riviste/annali-di-storia-dell-educazione-e-delle-istituzioni-scolastiche", openAlexId: "S4306502263" },
  { name: "ANNALI ONLINE DELLA DIDATTICA E DELLA FORMAZIONE DOCENTE", issn: "2038-1034", issn2: "", url: "https://annali.unife.it/adfd", openAlexId: "S4306502269" },
  { name: "ATTUALITÀ PEDAGOGICHE", issn: "2704-873X", issn2: "", url: "", openAlexId: "" },
  { name: "BOLLETTINO CIRSE", issn: "1971-5714", issn2: "", url: "https://oaj.fupress.net/index.php/bc", openAlexId: "" },
  { name: "BOLLETTINO DELLA FONDAZIONE NAZIONALE \"VITO FAZIO-ALLMAYER\"", issn: "1591-3988", issn2: "", url: "", openAlexId: "" },
  { name: "CADMO", issn: "1972-5019", issn2: "1122-5165", url: "https://www.francoangeli.it/riviste/sommario.aspx?IDRivista=106", openAlexId: "S19980076" },
  { name: "CIVITAS EDUCATIONIS", issn: "2280-6865", issn2: "2281-9568", url: "", openAlexId: "" },
  { name: "CQIA RIVISTA", issn: "2039-4039", issn2: "", url: "https://forperlav.unibg.it/index.php/fpl", openAlexId: "S7407060939" },
  { name: "DIRIGENTI SCUOLA", issn: "2280-8744", issn2: "", url: "https://riviste.gruppostudium.it/content/dirigenti-scuola", openAlexId: "S7407078554" },
  { name: "EDUCATION SCIENCES & SOCIETY", issn: "2284-015X", issn2: "2038-9442", url: "https://journals.francoangeli.it/index.php/ess", openAlexId: "S2764754554" },
  { name: "EDUCATIONAL REFLECTIVE PRACTICES", issn: "2240-7758", issn2: "2279-9605", url: "https://journals.francoangeli.it/index.php/erp", openAlexId: "S2764926952" },
  { name: "EDUCAZIONE", issn: "2280-7837", issn2: "", url: "https://www.educazione-giornale.it/", openAlexId: "" },
  { name: "EDUCAZIONE APERTA", issn: "2785-079X", issn2: "2532-3091", url: "https://educazioneaperta.it/", openAlexId: "S7407061703" },
  { name: "EDUCAZIONE INTERCULTURALE", issn: "2420-8175", issn2: "", url: "", openAlexId: "" },
  { name: "EDUCAZIONE LINGUISTICA LANGUAGE EDUCATION", issn: "2280-6792", issn2: "", url: "", openAlexId: "" },
  { name: "EFFETTI DI LETTURA", issn: "2785-7050", issn2: "", url: "https://ojs.pensamultimedia.it/index.php/edl", openAlexId: "S7407065710" },
  { name: "ENCYCLOPAIDEIA", issn: "1825-8670", issn2: "1590-492X", url: "https://encp.unibo.it/", openAlexId: "S5407051223" },
  { name: "EXCELLENCE AND INNOVATION IN LEARNING AND TEACHING", issn: "2499-507X", issn2: "", url: "https://www.francoangeli.it/riviste/sommario.aspx?IDRivista=215&lingua=It", openAlexId: "S4210232712" },
  { name: "FORM@RE", issn: "1825-7321", issn2: "", url: "https://oaj.fupress.net/index.php/formare", openAlexId: "S2737795832" },
  { name: "FORMAZIONE & INSEGNAMENTO", issn: "1973-4778", issn2: "2279-7505", url: "https://ojs.pensamultimedia.it/index.php/siref", openAlexId: "S4306510750" },
  { name: "GIORNALE ITALIANO DEI DISTURBI DEL NEUROSVILUPPO", issn: "2499-6068", issn2: "", url: "https://www.vanniniscientifica.it/giornale-italiano-del-neurosviluppo/", openAlexId: "" },
  { name: "GIORNALE ITALIANO DELLA RICERCA EDUCATIVA", issn: "2038-9744", issn2: "2038-9736", url: "https://ojs.pensamultimedia.it/index.php/sird", openAlexId: "S4393918067" },
  { name: "GIORNALE ITALIANO DI EDUCAZIONE ALLA SALUTE, SPORT E DIDATTICA INCLUSIVA", issn: "2532-3296", issn2: "3103-5744", url: "https://ojs.gsdjournal.it/index.php/GSD", openAlexId: "S4306511492" },
  { name: "HISTORY OF EDUCATION & CHILDREN'S LITERATURE", issn: "1971-1093", issn2: "1971-1131", url: "https://www.hecl.it/", openAlexId: "S2764780498" },
  { name: "I PROBLEMI DELLA PEDAGOGIA", issn: "0032-9347", issn2: "", url: "https://www.problemidellapedagogia.it/", openAlexId: "" },
  { name: "ITALIAN JOURNAL OF EDUCATIONAL TECHNOLOGY", issn: "2532-7720", issn2: "2532-4632", url: "https://ijet.itd.cnr.it/", openAlexId: "S7407060860" },
  { name: "ITALIAN JOURNAL OF SPECIAL EDUCATION FOR INCLUSION", issn: "2282-5061", issn2: "2282-6041", url: "https://ojs.pensamultimedia.it/index.php/sipes", openAlexId: "S2765078606" },
  { name: "JE-LKS. JOURNAL OF E-LEARNING AND KNOWLEDGE SOCIETY", issn: "1826-6223", issn2: "1971-8829", url: "https://www.je-lks.org/ojs/index.php/Je-LKS_EN", openAlexId: "S2764440991" },
  { name: "JOURNAL OF EDUCATIONAL, CULTURAL AND PSYCHOLOGICAL STUDIES", issn: "2037-7932", issn2: "2037-7924", url: "https://www.ledonline.it/ECPS-Journal/", openAlexId: "S2764926460" },
  { name: "JOURNAL OF INCLUSIVE METHODOLOGY AND TECHNOLOGY IN LEARNING AND TEACHING", issn: "2785-5104", issn2: "", url: "https://www.inclusiveteaching.it/index.php/inclusiveteaching", openAlexId: "" },
  { name: "L'INTEGRAZIONE SCOLASTICA E SOCIALE", issn: "1720-996X", issn2: "2724-2242", url: "https://rivistedigitali.erickson.it/integrazione-scolastica-sociale/", openAlexId: "" },
  { name: "LA FAMIGLIA", issn: "0392-2774", issn2: "", url: "https://riviste.gruppostudium.it/content/la-famiglia", openAlexId: "" },
  { name: "LA SCUOLA E L'UOMO RICERCA", issn: "2785-7107", issn2: "", url: "", openAlexId: "" },
  { name: "LLL. LIFELONG LIFEWIDE LEARNING", issn: "2279-9001", issn2: "", url: "https://www.edaforum.it/ojs/index.php/LLL", openAlexId: "S4306518672" },
  { name: "MALTRATTAMENTO E ABUSO ALL'INFANZIA", issn: "1591-4267", issn2: "1972-5140", url: "https://journals.francoangeli.it/index.php/mal", openAlexId: "S4210191034" },
  { name: "MEDIA EDUCATION", issn: "2038-3002", issn2: "", url: "https://oaj.fupress.net/index.php/med", openAlexId: "S4210211739" },
  { name: "MEDIC. METODOLOGIA DIDATTICA E INNOVAZIONE CLINICA", issn: "1824-3991", issn2: "", url: "", openAlexId: "" },
  { name: "MEDICAL HUMANITIES & MEDICINA NARRATIVA", issn: "2724-3281", issn2: "", url: "", openAlexId: "" },
  { name: "METIS", issn: "2240-9580", issn2: "", url: "https://www.metisjournal.it/", openAlexId: "S4210238235" },
  { name: "MIZAR", issn: "2499-5835", issn2: "", url: "https://ese-journals.unisalento.it/index.php/mizar/index", openAlexId: "S4306520072" },
  { name: "NUOVA SECONDARIA", issn: "1828-4582", issn2: "", url: "https://riviste.gruppostudium.it/nuova-secondaria", openAlexId: "S4306521213" },
  { name: "NUOVO BOLLETTINO CIRSE", issn: "1972-6562", issn2: "", url: "https://www.nuovobollettinocirse.it/", openAlexId: "" },
  { name: "ORIENTAMENTI PEDAGOGICI", issn: "0030-5391", issn2: "", url: "https://rivistedigitali.erickson.it/orientamenti-pedagogici/", openAlexId: "S4306521657" },
  { name: "PAGINE GIOVANI", issn: "2532-8751", issn2: "", url: "", openAlexId: "" },
  { name: "PAIDEUTIKA", issn: "1974-6814", issn2: "2785-566X", url: "", openAlexId: "" },
  { name: "PAMPAEDIA", issn: "2785-7077", issn2: "", url: "", openAlexId: "" },
  { name: "PEDAGOGIA E VITA", issn: "0031-3777", issn2: "", url: "https://riviste.gruppostudium.it/content/pedagogia-e-vita", openAlexId: "S4306522151" },
  { name: "PEDAGOGIA OGGI", issn: "2611-6561", issn2: "1827-0824", url: "https://ojs.pensamultimedia.it/index.php/siped", openAlexId: "S4306522153" },
  { name: "PEDAGOGIA PIÙ DIDATTICA", issn: "1973-7181", issn2: "2421-2946", url: "https://rivistedigitali.erickson.it/pedagogia-piu-didattica/", openAlexId: "" },
  { name: "QDS. QUADERNI DI DIDATTICA DELLA SCRITTURA", issn: "1825-8301", issn2: "", url: "https://www.carocci.it/riviste/qds-quaderni-di-didattica-della-scrittura", openAlexId: "S4306525116" },
  { name: "QTIMES", issn: "2038-3282", issn2: "", url: "https://www.qtimes.it/", openAlexId: "" },
  { name: "QWERTY", issn: "1828-7344", issn2: "2240-2950", url: "https://www.ckbg.org/qwerty/index.php/qwerty", openAlexId: "S2765063172" },
  { name: "RASSEGNA DI PEDAGOGIA", issn: "0033-9571", issn2: "", url: "https://www.torrossa.com/it/resources/an/2193269", openAlexId: "" },
  { name: "REM. RESEARCH ON EDUCATION AND MEDIA", issn: "2037-0849", issn2: "2037-0830", url: "https://sciendo.com/journal/REM", openAlexId: "S2739317210" },
  { name: "RICERCAZIONE", issn: "2036-5330", issn2: "", url: "https://ricercazione.iprase.tn.it/", openAlexId: "" },
  { name: "RICERCHE DI PEDAGOGIA E DIDATTICA", issn: "1970-2221", issn2: "", url: "https://rpd.unibo.it/", openAlexId: "S99455688" },
  { name: "RICERCHE DI PSICOLOGIA", issn: "0391-6081", issn2: "1972-5620", url: "https://journals.francoangeli.it/index.php/rp", openAlexId: "S4306528526" },
  { name: "RICERCHE PEDAGOGICHE", issn: "1971-5706", issn2: "2611-2213", url: "https://www.ricerchepedagogiche.it/", openAlexId: "" },
  { name: "RIVISTA DI STATISTICA UFFICIALE", issn: "1828-1982", issn2: "", url: "", openAlexId: "" },
  { name: "RIVISTA DI STORIA DELL'EDUCAZIONE", issn: "2532-2818", issn2: "2384-8294", url: "https://rivistadistoriadelleducazione.it/index.php/rse", openAlexId: "S4210202793" },
  { name: "RIVISTA DI STORIA DELL'UNIVERSITÀ DI TORINO", issn: "2281-2164", issn2: "", url: "", openAlexId: "" },
  { name: "RIVISTA ITALIANA DI EDUCAZIONE FAMILIARE", issn: "2037-1861", issn2: "1973-638X", url: "https://oaj.fupress.net/index.php/rief", openAlexId: "S4210234947" },
  { name: "SCHOLÉ", issn: "2611-9978", issn2: "", url: "https://www.morcelliana.net/riviste/schole", openAlexId: "" },
  { name: "SCUOLA DEMOCRATICA", issn: "1129-731X", issn2: "2039-2699", url: "https://www.rivisteweb.it/issn/1129-731X", openAlexId: "S4306529389" },
  { name: "STUDI SULLA FORMAZIONE", issn: "2036-6981", issn2: "1127-1124", url: "https://oaj.fupress.net/index.php/sf", openAlexId: "S2736798144" },
  { name: "STUDIUM EDUCATIONIS", issn: "2035-844X", issn2: "1722-8395", url: "https://ojs.pensamultimedia.it/index.php/studium", openAlexId: "S4306531220" },
  { name: "TD TECNOLOGIE DIDATTICHE", issn: "1970-061X", issn2: "2499-4324", url: "", openAlexId: "" }
];
