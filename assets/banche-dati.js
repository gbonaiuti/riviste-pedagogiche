window.BANCHE_DATI_CONFIG = {
  title: "Banche dati bibliografiche internazionali per la ricerca educativa e accademica",
  description: "Questa pagina raccoglie le principali banche dati e piattaforme di ricerca utili per la stesura di tesi di laurea, progetti di ricerca, articoli scientifici e revisioni della letteratura."
};

/*
  Valori ammessi per il campo "tipologia":
  - "INDISPENSABILI" -> Banche dati indispensabili
  - "SPECIALISTICHE" -> Banche dati specialistiche
  - "OPEN_ACCESS"    -> Risorse Open Access
*/
window.INTERNATIONAL_DATABASES = [
  // 1. BANCHE DATI INDISPENSABILI
  {
    tipologia: "INDISPENSABILI",
    nome: "ERIC",
    ambito: "Educazione, pedagogia, formazione",
    quandoUsarla: "Database di riferimento per la ricerca pedagogica internazionale. Ideale per tesi e revisioni della letteratura in ambito educativo.",
    accesso: "Gratuito",
    link: "https://eric.ed.gov"
  },
  {
    tipologia: "INDISPENSABILI",
    nome: "Scopus",
    ambito: "Multidisciplinare",
    quandoUsarla: "Ricerca avanzata di articoli scientifici, analisi delle citazioni e revisioni sistematiche della letteratura.",
    accesso: "Tramite Ateneo",
    link: "https://www.scopus.com"
  },
  {
    tipologia: "INDISPENSABILI",
    nome: "Web of Science",
    ambito: "Multidisciplinare",
    quandoUsarla: "Individuazione di pubblicazioni autorevoli, analisi citazionale e studi bibliometrici.",
    accesso: "Tramite Ateneo",
    link: "https://www.webofscience.com"
  },
  {
    tipologia: "INDISPENSABILI",
    nome: "Google Scholar",
    ambito: "Multidisciplinare",
    quandoUsarla: "Ricerca preliminare rapida di articoli, libri, tesi e documenti accademici.",
    accesso: "Gratuito",
    link: "https://scholar.google.com"
  },

  // 2. BANCHE DATI SPECIALISTICHE
  {
    tipologia: "SPECIALISTICHE",
    nome: "PsycINFO",
    ambito: "Psicologia, psicologia dell'educazione",
    quandoUsarla: "Per studi su apprendimento, sviluppo, motivazione, inclusione e processi cognitivi.",
    accesso: "Tramite Ateneo",
    link: "https://www.apa.org/pubs/databases/psycinfo"
  },
  {
    tipologia: "SPECIALISTICHE",
    nome: "Education Research Complete",
    ambito: "Educazione e formazione",
    quandoUsarla: "Per accedere a numerose riviste internazionali di pedagogia e didattica.",
    accesso: "Tramite Ateneo",
    link: "https://www.ebsco.com/products/research-databases/education-research-complete"
  },
  {
    tipologia: "SPECIALISTICHE",
    nome: "ProQuest Education Database",
    ambito: "Educazione e scienze sociali",
    quandoUsarla: "Utile per reperire articoli, tesi e report di ricerca nel settore educativo.",
    accesso: "Tramite Ateneo",
    link: "https://www.proquest.com"
  },
  {
    tipologia: "SPECIALISTICHE",
    nome: "JSTOR",
    ambito: "Scienze umane e sociali",
    quandoUsarla: "Ideale per studi teorici, storici e classici della pedagogia.",
    accesso: "Accesso variabile",
    link: "https://www.jstor.org"
  },
  {
    tipologia: "SPECIALISTICHE",
    nome: "SAGE Journals",
    ambito: "Educazione e scienze sociali",
    quandoUsarla: "Ampia raccolta di riviste internazionali peer-reviewed.",
    accesso: "Accesso variabile",
    link: "https://journals.sagepub.com"
  },
  {
    tipologia: "SPECIALISTICHE",
    nome: "Taylor & Francis Online",
    ambito: "Educazione e scienze sociali",
    quandoUsarla: "Per approfondimenti specialistici e ricerche empiriche.",
    accesso: "Accesso variabile",
    link: "https://www.tandfonline.com"
  },
  {
    tipologia: "SPECIALISTICHE",
    nome: "SpringerLink",
    ambito: "Multidisciplinare",
    quandoUsarla: "Accesso a libri e articoli scientifici di numerose discipline.",
    accesso: "Accesso variabile",
    link: "https://link.springer.com"
  },
  {
    tipologia: "SPECIALISTICHE",
    nome: "ScienceDirect",
    ambito: "Multidisciplinare",
    quandoUsarla: "Ricerca di articoli scientifici e studi empirici pubblicati da Elsevier.",
    accesso: "Tramite Ateneo",
    link: "https://www.sciencedirect.com"
  },
  {
    tipologia: "SPECIALISTICHE",
    nome: "PubMed",
    ambito: "Medicina, salute, educazione sanitaria",
    quandoUsarla: "Per ricerche collegate a inclusione, disabilità, salute e professioni educative.",
    accesso: "Gratuito",
    link: "https://pubmed.ncbi.nlm.nih.gov"
  },

  // 3. RISORSE OPEN ACCESS
  {
    tipologia: "OPEN_ACCESS",
    nome: "DOAJ",
    ambito: "Multidisciplinare",
    quandoUsarla: "Per trovare riviste scientifiche open access di qualità.",
    accesso: "Gratuito",
    link: "https://doaj.org"
  },
  {
    tipologia: "OPEN_ACCESS",
    nome: "OpenAlex",
    ambito: "Multidisciplinare",
    quandoUsarla: "Alternativa aperta a Scopus e Web of Science per esplorare pubblicazioni, autori e citazioni.",
    accesso: "Gratuito",
    link: "https://openalex.org"
  },
  {
    tipologia: "OPEN_ACCESS",
    nome: "BASE",
    ambito: "Multidisciplinare",
    quandoUsarla: "Ricerca in repository istituzionali e archivi accademici di tutto il mondo.",
    accesso: "Gratuito",
    link: "https://www.base-search.net"
  },
  {
    tipologia: "OPEN_ACCESS",
    nome: "CORE",
    ambito: "Multidisciplinare",
    quandoUsarla: "Accesso a milioni di articoli full-text provenienti da repository e archivi aperti.",
    accesso: "Gratuito",
    link: "https://core.ac.uk"
  }
];
