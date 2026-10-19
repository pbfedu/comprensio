window.QuestionBank = {
  TEXTS: [
    {
      id: 'text_1',
      title: "Els Microplàstics",
      author: "Adaptació feta a partir del text d’Atlàntida Assegurances.",
      source: "«Microplàstics: com afecten la salut» [en línia]",
      image: "https://www.iberdrola.com/documents/20125/40453/microplasticos_nuevo_746x419.jpg/30daee52-3f0c-c9b4-a1f1-7f69430ecda9?t=1736257219185",
      color: "#059669",
      icon: "fa-bottle-water",
      isAiGenerated: false,
      content: `Els microplàstics són cada cop més presents en el medi ambient i ja es comença a detectar quin impacte poden tenir en la nostra salut. Els microplàstics són trossos de plàstic diminuts, de menys de 5 miŀlímetres i de formes irregulars. Procedeixen de la descomposició de productes de plàstic llençats a l’entorn i sovint es fragmenten en trossets encara més petits, que es coneixen com a nanoplàstics i que són encara més preocupants per a la salut.

      El plàstic és un producte molt versàtil i químicament estable i per això es fa servir de manera àmplia en molts processos de producció. També, a causa de la seva rendibilitat, és un material gairebé insubstituïble en molts àmbits de la nostra vida quotidiana. El problema és que és un contaminant, ja que no es degrada i és tòxic. A més, pot contenir restes de metalls, hidrocarburs, plaguicides o productes farmacèutics, en funció dels contaminants que hagi pogut absorbir.

La producció de plàstic supera àmpliament els 300 milions de tones a tot el món cada any.

L’única manera de revertir-ho és aconseguir materials no contaminants que el puguin substituir o impulsar-ne la reutilització. En aquests moments, però, les taxes de reciclatge són tan baixes que els plàstics suposen el 54 % de la massa global de residus.

S’han detectat microplàstics —en una àmplia gamma de concentracions— en aigües marines, aigües residuals, aigua dolça, aliments, aire i aigua potable, tant embotellada com de l’aixeta. Per tant, poden entrar en el nostre cos per inhalació o per ingestió, sigui de manera directa o a través del menjar. Per exemple, s’han detectat partícules de plàstics en animals que formen part de la nostra dieta, com ara moltes espècies marines, i també en aliments processats.

Tots els experts assenyalen que els plàstics són més perillosos per a la nostra salut com més petits són. Un dels estudis més recents en aquest àmbit, liderat per la Universitat Autònoma de Barcelona i el Centre de Recerca Ecològica i Aplicacions Forestals, conclou que els nanoplàstics afecten la composició, la diversitat i la funcionalitat del microbioma intestinal. Quan es modifica el microbioma intestinal sorgeixen alteracions en els sistemes immunitari, endocrí i nerviós.

El 90 % dels plàstics que ingerim acabaran excretats, però una part es fragmentarà en nanoplàstics. Són tan petits que són capaços de penetrar en les cèŀlules i causar-hi efectes nocius. L’estudi constata que s’han descrit alteracions en l’absorció de nutrients, reaccions inflamatòries en el revestiment intestinal i efectes sobre el metabolisme i la capacitat de produir energia del cos i, finalment, alteracions en les respostes immunitàries.

També s’ha constatat que, en humans, les partícules de plàstic es poden allotjar en els pulmons i l’aparell digestiu. I poden arribar als conductes limfàtics i als ganglis i, finalment, a diversos òrgans del cos, com la meduŀla òssia, els ronyons, la melsa o el fetge. Els metges es troben amb la dificultat afegida que les lesions que poden produir són semblants a les d’altres tòxics i, per tant, és complicat relacionar-les amb els plàstics utilitzant la tecnologia actual.`,
      questions: [
        {
          id: 'q1_1',
          type: 'tf',
          statement: "Després de llegir atentament el text anterior, indiqueu si les afirmacions següents són vertaderes o falses. [0,5 punts. Per cada resposta errònia es descomptaran 0,1 punts; per les qüestions no contestades no hi haurà cap descompte.]",
          items: [
            { id: 'tf_1', text: "Nanoplàstic és sinònim de microplàstic", correct: false, explanation: "a" },
            { id: 'tf_2', text: "El plàstic es degrada amb facilitat.", correct: false, explanation: "a" },
            { id: 'tf_3', text: "Els plàstics suposen menys del 50 % de la massa global de residus.", correct: false, explanation: "a" },
            { id: 'tf_4', text: "L’aigua embotellada no té tants microplàstics com l’aigua del’aixeta.", correct: false, explanation: "a" },
            { id: 'tf_5', text: "Els plàstics modifiquen el microbioma intestinal.", correct: true, explanation: "a" },
          ]
        },
        {
          id: 'q1_2',
          type: 'synonyms',
          statement: "Trobeu en el text els mots que poden funcionar com a sinònims dels mots següents. [0,5 punts]",
          words: [
            { id: 's1', word: "Es trenquen, es fraccionen", answer: "es fragmenten" },
            { id: 's2', word: "Irreemplaçable", answer: "insubstituïble" },
            { id: 's3', word: "Expulsats, expeŀlits", answer: "excretats" },
            { id: 's4', word: "Perjudicials", answer: "nocius" },
            { id: 's5', word: "Trastorns, canvis", answer: "alteracions" },
          ]
        },
        {
          id: 'q1_3',
          type: 'pronouns',
          statement: "Escriviu el referent dels pronoms següents, marcats en el text. La resposta ha de contenir tots els elements que formen la construcció substituïda. [0,5 punts]",
          words: [
            { id: 'p1', pronoun: "Són tan petits que són capaços de penetrar en les cèŀlules i causar-hi efectes nocius", answer: "les cèl·lules" },
            { id: 'p2', pronoun: "Els metges es troben amb la dificultat afegida que les lesions que poden produir són semblants a les d’altres tòxics i, per tant, és complicat relacionar-les amb els plàstics utilitzant la tecnologia actual", answer: "les lesions"},

          ]
        },
        {
          id: 'q1_4',
          type: 'summary',
          statement: "Exposeu, en un màxim de cinquanta mots, quin és l’impacte que pot tenir la ingestió de plàstics en la salut. [0,5 punts]",
          keywords: ["ingestió", "plàstics", "alterar", "absorció", "nutrients", "provocar", "inflamació", "budells", "afectar", "metabolisme", "respostes", "immunitàries", "allotjar", "pulmons", "aparell", "digestiu", "òrgans", "medul·la", "òssia", "ronyons", "melsa", "fetge"],
          modelAnswer: "La ingestió de plàstics pot alterar l’absorció de nutrients, pot provocar inflamació en els budells i pot afectar el metabolisme i les respostes immunitàries. Els plàstics es poden allotjar en els pulmons i l’aparell digestiu i també poden afectar un seguit d’òrgans, com ara la medul·la òssia, els ronyons, la melsa o el fetge"
        }
      ]
    },
    {
      id: 'text_2',
      title: "La Fúmiga",
      author: "Comprens.io App",
      source: "La Fúmiga: el fenomen festiu que renova la música en valencià",
      image: "https://www.elfoment.org/wp-content/uploads/2025/11/la-fumiga-strenes-foment-mirona3.webp",
      color: "#de7a0e",
      icon: "fa-music",
      isAiGenerated: true,
      content: `La Fúmiga s'ha consolidat com un dels projectes musicals més influents del panorama valencià actual, captivant milers de seguidors amb una proposta festiva i intransigent. El grup va nàixer a la ciutat d'Alzira l'any 2012, fruit de la iniciativa d'un col·lectiu d'amics vinculats a la tradició bandística local. Allò que va començar com a reunions informals de caràcter lúdic ha evolucionat fins a esdevenir una banda referencial que omple recintes arreu del territori.

El so característic de la formació amalgama influències de la música de banda tradicional amb ritmes balcànics, pop alternatiu i l'energia de les brass bands centreeuropees. Aquesta amalgama instrumental, dominada per una potent secció de vent i percussió, genera una dinàmica vibrant que connecta immediatament amb el públic assistent a festivals i sales de concerts.

Amb el llançament del seu primer àlbum d'estudi, Espremedors (2019), la banda alzirenya va catapultar-se cap a l'èxit massiu gràcies a senzills enganxosos com «Mediterrània» o «La Ferida». Malgrat les dificultats derivades de la crisi sanitària global, que va paralitzar temporalment la seua gira, el grup va saber adaptar-se i continuar creant composicions que reflecteixen la seua maduresa artística.

Un dels aspectes més remarcables de la trajectòria de La Fúmiga és la seua capacitat per actuar com a altaveu de la llengua catalana en àmbits festius i intergeneracionals. Les seues lletres combinen missatges reivindicatius amb vivències quotidianes, aconseguint que la perceba com a vehicle de cohesió social i d'orgull identitari entre el jovent.

Els directes de la formació es caracteritzen per una posada en escena trepidant i desbordant d'emotivitat, on la complicitat amb l'audiència esdevé el motor principal de cada actuació. Els membres del grup defensen constantment la importància de mantenir vius els vincles amb les seues arrels culturals, tot evitant oblidar d'on provenen malgrat haver assolit cotes de popularitat insospitades.

Pel que fa a la composició actual, la banda manté una estructura col·laborativa on dotze músics fusionen talent i complicitat damunt l'escenari. Aquesta constància en el treball diari els ha permès publicar nous treballs discogràfics que revaliden la seua posició privilegiada dins de la indústria musical contemporània.

Els crítics culturals assenyalen que el fenomen de La Fúmiga no respon només a una moda passatgera, sinó a una sòlida construcció artística que sap reinventar-se constantment. Tanmateix, s'enfronten al repte de gestionar una exigència professional creixent sense perdre l'essència autèntica que els va veure nàixer als carrers de la Ribera Alta.`,
      questions: [
        {
          id: 'q2_1',
          type: 'tf',
          statement: "Després de llegir atentament el text anterior, indiqueu si les afirmacions següents són vertaderes o falses. [0,5 punts. Per cada resposta errònia es descomptaran 0,1 punts; per les qüestions no contestades no hi haurà cap descompte.]",
          items: [
            { id: 'tf_2_1', text: "La Fúmiga es va fundar originàriament a la ciutat de València.", correct: false, explanation: "" },
            { id: 'tf_2_2', text: "L'estil musical del grup combina instruments de vent amb ritmes balcànics.", correct: true, explanation: "" },
            { id: 'tf_2_3', text: "El primer disc de la banda portava per títol «Espremedors».", correct: true, explanation: "" },
            { id: 'tf_2_4', text: "La pandèmia va impedir totalment que el grup continuara creant cançons.", correct: false, explanation: "" },
            { id: 'tf_2_5', text: "La formació actual està composta exactament per vint músics damunt l'escenari.", correct: false, explanation: "" },

          ]
        },
        {
          id: 'q2_2',
          type: 'synonyms',
          statement: "Trobeu en el text els mots que poden funcionar com a sinònims dels mots següents. [0,5 punts]",
          words: [
            { id: 's2_1', word: "Barreja, uneix", answer: "amalgama" },
            { id: 's2_2', word: "Impulsar-se, projectar-se", answer: "cataputar-se" },
            { id: 's2_3', word: "Intensa, accelerada", answer: "trepidant" },
            { id: 's2_4', word: "Perseverança, fermesa", answer: "constància" },
            { id: 's2_5', word: "Transitòria, breu", answer: "passatgera" },
          ]
        },
        {
          id: 'q2_3',
          type: 'pronouns',
          statement: "Escriviu el referent dels pronoms següents, marcats en negreta en el text. La resposta ha de contenir tots els elements que formen la construcció substituïda pel pronom feble. [0,5 punts]",
          words: [
            { id: 'p2_1', pronoun: "aconseguint que la perceba com a vehicle de cohesió social i d'orgull identitari", answer: "la llengua catalana" },
            { id: 'p2_2', pronoun: "Aquesta constància en el treball diari els ha permès publicar nous treballs discogràfics", answer: "els membres de la banda" },

          ]
        },
        {
          id: 'q2_4',
          type: 'summary',
          statement: "Exposeu, en un màxim de cinquanta mots, quina importància cultural i musical ha tingut el grup La Fúmiga al País Valencià. [0,5 punts]",
          keywords: ["valencià", "referent", "festiva", "banda", "identitari", "cohesió", "música", "cultura"],
          modelAnswer: "La Fúmiga s'ha convertit en un referent clau de la música en valencià i de la cohesió social juvenil. Gràcies a la seua proposta festiva que fusiona tradició de banda i ritmes balcànics, el grup actua com a altaveu identitari i cultural de primer ordre al territori valencià."
}
      ]
    },
    {
      id: 'text_3',
      title: "Eurocambra i la IA",
      author: "Adaptació feta a partir del text de R. Bruna. «L’Eurocambra aprova la primera llei per regular la inteŀligència artificial».",
      source: "El Punt Avui [en línia] (13 març 2024)",
      image: "https://img.rtve.es/imagenes/mananas-rne-inigo-alfonso-marta-peirano-regular-inteligencia-artificial/01706778408615.jpg",
      color: "#0e5ede",
      icon: "fa-robot",
      isAiGenerated: false,
      content: `El Parlament Europeu ha ratificat aquest dimecres amb una àmplia majoria la normativa consensuada amb els vint-i-set per regular la intel·ligència artificial a la Unió Europea (UE). La llei, pionera a escala mundial en aquesta matèria, ha rebut l’aval de 523 eurodiputats, el rebuig de 46 i 49 abstencions.

El comissari europeu del Mercat Interior i impulsor de la iniciativa, Thierry Breton, ha celebrat «l’aclaparador suport del Parlament Europeu a la nostra llei d’intel·ligència artificial, la primera norma global i vinculant del món per una intel·ligència artificial fiable». «Europa és ara un referent mundial», ha destacat. Breton ha assegurat que la UE «regula el mínim possible, però tot el que cal».

La normativa fa així un pas determinant per a la seva aprovació definitiva en el Consell de la UE, que es preveu que tindrà lloc les properes setmanes. Amb tot, la nova legislació no entrarà en vigor fins al 2026.

La llei europea sobre la intel·ligència artificial en permet o en prohibeix l’ús en funció del risc social que suposi per a les persones. La normativa cerca garantir així que els sistemes existents i utilitzats a la UE siguin segurs i respectin els drets fonamentals i els valors europeus.

Un dels punts més controvertits durant la negociació de la normativa han estat els límits de la identificació biomètrica per part de les forces de seguretat. En general, la llei veta la vigilància massiva als espais públics però permet que les forces de seguretat puguin utilitzar aquesta tecnologia, amb una autorització judicial prèvia, en casos flagrants com ara el risc d’un atac terrorista imminent. Els cossos policials també hi podran recórrer per identificar persones que hagin comès delictes de terrorisme, tràfic de persones, explotació sexual i crims mediambientals, i també per localitzar les víctimes.

Un altre punt espinós que tracta la norma és la categorització biomètrica, que queda prohibida per creences polítiques, religioses, filosòfiques o per raça i orientació sexual. Tampoc no es podran utilitzar els sistemes que puntuen les persones segons el comportament, la intel·ligència artificial capaç de manipular el comportament humà o els sistemes per crear bases de dades facials captant dades de manera indiscriminada a través d’Internet.

Quant als sistemes d’intel·ligència artificial generativa —en els quals es basen programaris com ChatGPT o Bard—, les empreses hauran de complir criteris de transparència, com ara especificar si un text, una cançó o una fotografia s’ha generat a través d’aquest sistema. També hauran de garantir que les dades utilitzades per entrenar els sistemes respecten els drets d’autor.

Finalment, la norma preveu la creació de l’Oficina Europea d’Intel·ligència Artificial, que coordinarà l’ús de la tecnologia entre les autoritats estatals i que estarà assessorada per un grup de científics i representants de la societat civil.`,
      questions: [
        {
          id: 'q3_1',
          type: 'tf',
          statement: "Després de llegir atentament el text anterior, indiqueu si les afirmacions següents són vertaderes o falses. [0,5 punts. Per cada resposta errònia es descomptaran 0,1 punts; per les qüestions no contestades no hi haurà cap descompte.]",
          items: [
            { id: 'tf_3_1', text: "La Unió Europea està formada per vint-i-set països.", correct: true, explanation: "" },
            { id: 'tf_3_2', text: "Hi ha hagut quaranta-nou diputats que no han aprovat la normativa per a regular la inteŀligència artificial.", correct: false, explanation: "" },
            { id: 'tf_3_3', text: "La normativa té un abast mundial.", correct: true, explanation: "" },
            { id: 'tf_3_4', text: "La identificació biomètrica permet de reconèixer les persones.", correct: true, explanation: "" },
            { id: 'tf_3_5', text: "El ChatGPT no és un sistema d’inteŀligència artificial generativa.", correct: false, explanation: "" },

          ]
        },
        {
          id: 'q3_2',
          type: 'synonyms',
          statement: "Trobeu en el text els mots que poden funcionar com a sinònims dels mots següents. [0,5 punts]",
          words: [
            { id: 's3_1', word: "Capdavantera", answer: "pionera" },
            { id: 's3_2', word: "Refús", answer: "rebuig" },
            { id: 's3_3', word: "Polèmics", answer: "controvertits" },
            { id: 's3_4', word: "Inapeŀlables, incontestables", answer: "flagrants" },
            { id: 's3_5', word: "Immediat", answer: "imminent" },
          ]
        },
        {
          id: 'q3_3',
          type: 'pronouns',
          statement: "Escriviu el referent dels pronoms següents, marcats en negreta en el text. La resposta ha de contenir tots els elements que formen la construcció substituïda pel pronom feble. [0,5 punts]",
          words: [
            { id: 'p2_1', pronoun: "En general, la llei veta la vigilància massiva als espais públics però permet que les forces de seguretat puguin utilitzar aquesta tecnologia, amb una autorització judicial prèvia, en casos flagrants com ara el risc d’un atac terrorista imminent. Els cossos policials també hi podran recórrer per identificar persones que hagin comès delictes de terrorisme", answer: "a aquesta tecnologia" },
            { id: 'p2_2', pronoun: "La llei europea sobre la inteŀligència artificial en permet o en prohibeix l’ús en funció del risc social que suposi per a les persones", answer: "de la intel·ligència artificial" },

          ]
        },
        {
          id: 'q3_4',
          type: 'summary',
          statement: "Exposeu, en un màxim de cinquanta mots, per què la normativa prohibeix la categorització biomètrica [0,5 punts]",
         keywords: ["llei", "prohibeix", "categorització", "biomètrica", "dades", "religioses", "polítiques", "raça", "privacitat"],
          modelAnswer: "La llei prohibeix la categorització biomètrica basada en creences religioses, polítiques, filosòfiques, raça o orientació sexual per protegir la privacitat i els drets fonamentals de les persones."
        }
      ]
    },
    {
      id: 'text_4',
      title: "Maria-Mercè Marçal",
      author: "Comprens.io App",
      source: "Maria-Mercè Marçal: la veu insubmissa, feminista i queer de la poesia catalana",
      image: "https://img.rtve.es/n/2305422/?w=1600",
      color: "#ad0cbe",
      icon: "fa-venus",
      isAiGenerated: true,
      content: `Maria-Mercè Marçal i Serra (Ivars d'Urgell, 1952 - Barcelona, 1998) és una de les veus poètiques més sòlides, lúcides i renovadores de la literatura catalana contemporània. La seva obra no només destaca per l'excel·lència formal i el domini de la mètrica tradicional, sinó també per haver introduït amb una força inusitada la veu de les dones, el cos femení i el desig lèsbic al centre del cànon literari, sovint dominat per una perspectiva tradicional i patriarcal.

Des dels seus inicis literaris, especialment amb el poemari Bruixa de dol (1979), Marçal va articular un univers poètic on la identitat femenina es construïa de manera autònoma i trencadora. La figura de la bruixa, tradicionalment estigmatitzada per la societat conservadora, es converteix sota la seva ploma en un símbol d'alliberament, saviesa ancestral i resistència davant les imposicions morals de l'època.

Un dels eixos fonamentals de la seva poètica i trajectòria vital fou la defensa valenta de la seva condició de dona queer i lesbiana en un context profundament normatiu. Marçal va saber visibilitzar l'amor entre dones no com a un marge o una excepció, sinó com a una experiència vital plena i font de creació artística. Els seus versos van trencar armaris i tabús socials, defensant la identitat lèsbica fins a fer-la central en el seu discurs poètic, convertint-se així en un referent ineludible per a les generacions posteriors.

A més de la seva faceta com a poetessa, Marçal va destacar com a traduccionista, ensenyant de català i militant cultural compromesa amb el feminisme i el progressisme polític. Juntament amb altres intel·lectuals, va impulsar moviments de reivindicació de gènere i va teoritzar sobre la necessitat d'una escriptura des de la diferència femenina, qüestionant les estructures de poder establertes.

La seva novel·la pòstuma i única, La passió segons Renée Vivien (1994), guardonada amb diversos premis de prestigi, exemplifica aquesta fusió entre biografia, ficció i reflexió identitària. En aquesta obra, l'autora basteix un homenatge fascinant a la poetessa britànica d'expressió francesa Renée Vivien, explorant les complexitats del desig lèsbic, l'art i la llibertat creativa a principis del segle xx, alhora que reflecteix les pròpies inquietuds estètiques i vitals.

En els textos de Marçal, aquest posicionament vital els ha atorgat una vigència extraordinària en els estudis de gènere i literaris actuals, inspirant nombrosos treballs d'investigació acadèmica i activisme LGTBIQ+.

Avui dia, el llegat de Maria-Mercè Marçal continua viu als carrers, a les escoles i a les universitats, recordant-nos que la literatura pot ser una eina subversiva de transformació social. La seva capacitat per cantar al desig, al dol, a la maternitat i a la llibertat des d'una mirada lèsbica i feminista manté una llum enlluernadora que guia el pensament crític contemporani.`,
      questions: [
        {
          id: 'q4_1',
          type: 'tf',
          statement: "Després de llegir atentament el text anterior, indiqueu si les afirmacions següents són vertaderes o falses. [0,5 punts. Per cada resposta errònia es descomptaran 0,1 punts; per les qüestions no contestades no hi haurà cap descompte.]",
          items: [
            { id: 'tf_4_1', text: "Maria-Mercè Marçal va néixer originàriament a la ciutat de Barcelona.", correct: false, explanation: "" },
            { id: 'tf_4_2', text: "El poemari Bruixa de dol empra la figura de la bruixa com a símbol d'alliberament.", correct: true, explanation: "" },
            { id: 'tf_4_3', text: "L'autora va ignorar completament el desig lèsbic en la seva producció poètica.", correct: false, explanation: "" },
            { id: 'tf_4_4', text: "La passió segons Renée Vivien és l'única novel·la publicada per l'autora.", correct: true, explanation: "" },
            { id: 'tf_4_5', text: "La seva obra ha estat rebutjada pels estudis de gènere i literaris actuals.", correct: false, explanation: "" },

          ]
        },
        {
          id: 'q4_2',
          type: 'synonyms',
          statement: "Trobeu en el text els mots que poden funcionar com a sinònims dels mots següents. [0,5 punts]",
          words: [
            { id: 's4_1', word: "Independent, autogestionada", answer: "autònoma" },
            { id: 's4_2', word: "Condemnada, titllada negativament", answer: "estigmatitzada" },
            { id: 's4_3', word: "Inevitable, imprescindible", answer: "ineludible" },
            { id: 's4_4', word: "Transgressora, revolucionària", answer: "subversiva" },
            { id: 's4_5', word: "Resplendent, brillant", answer: "enlluernadora" },
          ]
        },
        {
          id: 'q4_3',
          type: 'pronouns',
          statement: "Escriviu el referent dels pronoms següents, marcats en negreta en el text. La resposta ha de contenir tots els elements que formen la construcció substituïda pel pronom feble. [0,5 punts]",
          words: [
            { id: 'p4_1', pronoun: "defensant la identitat lèsbica fins a fer-la central en el seu discurs poètic", answer: "la identitat lèsbica" },
            { id: 'p4_2', pronoun: "En els textos de Marçal, aquest posicionament vital els ha atorgat una vigència extraordinària", answer: "els textos de Marçal" },

          ]
        },
        {
          id: 'q3_4',
          type: 'summary',
          statement: "Exposeu, en un màxim de cinquanta mots, per què la normativa prohibeix la categorització biomètrica [0,5 punts]",
         keywords: ["feminista", "queer", "lesbiana", "referent", "desig", "identitat", "subversiva", "poesia"],
         modelAnswer: "Maria-Mercè Marçal ha esdevingut un referent fonamental de la literatura catalana des d'una perspectiva feminista i queer. La seva poesia i obra narrativa visibilitzen el desig lèsbic i la identitat de gènere, trencant amb els marges patriarcals i transformant el cànon literari amb una veu pròpia i subversiva."
},
      ]
    },
    {
      id: 'text_5',
      title: "El Turisme",
      author: "Properament",
      source: "No Disponible",
      image: "https://www.bbva.com/wp-content/uploads/2020/12/turismo_sostenible.jpg",
      color: "#cdb40f",
      icon: "fa-plane",
      isAiGenerated: false,
      content: `Properament...`,
       questions: [
        {
          id: 'q5_1',
          type: 'tf',
          statement: "El text estarà disponible properament",
          items: [
            { id: 'tf_4_1', text: "No Disponible", correct: true, explanation: "" },
          ]
        },
      ]
    },
    {
      id: 'text_6',
      title: "La Bola Negra",
      author: "Properament",
      source: "No Disponible",
      image: "https://img.rtve.es/n/17226149?w=1600",
      color: "#32312c",
      icon: "fa-bowling-ball",
      isAiGenerated: true,
      content: `Properament...`,
      questions: [
        {
          id: 'q5_1',
          type: 'tf',
          statement: "El text estarà disponible properament",
          items: [
            { id: 'tf_4_1', text: "No Disponible", correct: true, explanation: "" },
          ]
        },
      ]
    },
  ]
};