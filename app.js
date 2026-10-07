const content = {
  it: {
    pageTitle: "Da un'altra parte - Il Teatro di Pan",
    htmlLanguage: "it",
    labels: {
      skipLink: "Salta al contenuto",
      navLabel: "Navigazione principale",
      navShow: "Lo spettacolo",
      navCast: "Cast",
      navScenes: "Le scene",
      navCredits: "Crediti",
      tagline: "Una ricerca teatrale sul senso di appartenenza",
      date: "Domenica 11 ottobre 2026 · ore 20:00",
      scrollCue: "Scopri lo spettacolo",
      overviewEyebrow: "Il progetto",
      overviewTitle: "Una domanda aperta",
      castEyebrow: "In scena",
      castTitle: "Il cast",
      directorRole: "Regia",
      scenesEyebrow: "Una mappa per lo spettacolo",
      scenesTitle: "Le scene",
      scenesIntro: "Un percorso fatto di memorie, lingue e partenze.",
      creditsEyebrow: "Dietro le quinte",
      creditsTitle: "Crediti",
      footerLine: "Berlino · 2026",
      backToTop: "Torna all'inizio",
      questionLabel: "Una domanda",
      excerptHeading: "Estratti",
      italianExcerpt: "Estratto in italiano da inserire",
      englishExcerpt: "Traduzione inglese da inserire",
      portraitPending: "Foto non ancora disponibile",
      portraitAlt: "Ritratto di",
      creditDirection: "Regia",
      creditCostume: "Costumi",
      creditSound: "Suoni",
      creditLight: "Luci",
      creditText: "I testi sono stati scritti da"
    },
    overview: [
      "“Da un'altra parte” è un progetto di ricerca artistica che indaga il significato personale e sociale del concetto di Heimat, inteso come casa, luogo di appartenenza e senso di radicamento.",
      "Al centro del progetto ci sono ricordi individuali, esperienze personali e diverse concezioni di ciò che significa sentirsi a casa. Il punto di partenza sono soprattutto domande aperte: che cosa trasforma un luogo in una casa? È possibile sentirsi a casa in più luoghi – oppure in nessuno? In che modo la migrazione, il senso di appartenenza, la lingua e le esperienze personali modificano la nostra idea di casa?",
      "Il progetto si configura come una ricerca aperta, che non intende offrire risposte precostituite, ma rendere visibili prospettive diverse e lasciare emergere nuove domande."
    ],
    // Edit each scene's excerpts.it and excerpts.en fields here. Blank fields show localized prompts.
    scenes: [
      {
        id: "intro",
        title: "Intro",
        excerpts: {
          it: `Acqua. Avanti. Insieme. Respira.
Non fermarti. Più forte. Scrivimi. Vai avanti. Vedo qualcosa. Mi mancherai.

Non vedo. Dove? Più piano. Aspetta. Mi sono perso. C'è nebbia. Da che parte?

Non regge. È buio. Ho paura. Solo mare. Aiuto. Terra. Dove sono?`,
          en: `Water. Forward.Together. Breathe.
Don't stop. Faster. Write to me. Keep going. I see something. I will miss you.

I can't see. Where? Slower. Hold on. I am lost. There is fog. Which way?

It won't hold. It's dark. I'm scared. Only the sea. Help. Land. Where am I?`
        },
        summary: "Sette corpi immaginano una traversata. Il respiro diventa ritmo comune, poi si spezza.",
        question: "Che cosa portiamo con noi quando partiamo?"
      },
      {
        id: "whereDoIComeFrom",
        title: "Da dove vengo?",
        excerpts: {
          it: `È il novembre del 1968 quando si mette in viaggio col treno. Un viaggio di 1800 km. [...] Così mette per la prima volta piede nella gelida Berlino Est.

Forse in quel momento è una fortuna non appartenere a nessuna delle due Germanie. Essere solo straniero. Un giovane, che non parla né tedesco né inglese.

[...]

È notte fonda quando arriva a Hermannstraße. Suo fratello, non avendolo visto scendere a Zoologischer Garten, era tornato a casa e dormiva. Fu costretto ad aspettare in strada e per non patire il freddo si muoveva e camminava su e giù per la Hermannstraße.

[...]

Così ebbe inizio la sua storia a Berlino e anche la mia.`,
          en: `It is November 1968 when he sets off by train. A journey of 1,800 kilometres... He sets foot in freezing East Berlin for the first time.

Maybe at that moment it's a good thing not to belong to either of the two Germanies. To simply be a foreigner. A young man who speaks neither German nor English.

[...]

It's the middle of the night when he arrives at Hermannstraße. He is forced to wait outside and, to keep himself from freezing, he walks up and down Hermannstraße.

[...]

And that's how his story in Berlin began — and mine too.`
        },
        summary: "Un racconto familiare ripercorre il viaggio del padre di Manuela dalla Basilicata a Berlino nel 1968.",
        question: "Quando la partenza di una persona diventa parte della storia di un'intera famiglia?"
      },
      {
        id: "soWhenDoYouComeBack",
        title: "Sì, ma quando torni?",
        excerpts: {
          it: `**INTERVISTATORE:** E come ti trovi in Germania?
**ALESSIO:** Mi sto integrando, sto cercando di parlare il tedesco...
**INTERVISTATORE:** Ah il tedesco...è difficile eh da imparare!

[...]

Sembra aggressiva, come se fossero sempre arrabbiati. Poi loro sono un po' freddi in generale.

[...]

Ma d'estate cosa fai che non c'è il mare?

[...]

Però...dí la verità...come in Italia non si mangia da nessuna parte!

[...]

Fai la colazione al bar? È vero che frutta e verdura non sanno di niente? Come fate senza bidet? Ma non è triste vivere là?

“Da quanto?” “Due anni?” “Ti piace?” “Torni?” “Quando?” “Perché sei andato?” “Qui non bastava?”

**ALESSIO: NON LO SO.**`,
          en: `**INTERVIEWER:** So, how are you finding Germany?
**ALESSIO:** I'm settling in, I'm trying to speak German...
**INTERVIEWER:** Ah, German... it's difficult to learn, isn't it?

[...]

It sounds aggressive, as if they're always angry. And they're generally a bit cold, aren't they?

[...]

But what do you do in summer when there's no sea?

[...]

You have to admit, though — nowhere does food like Italy!

[...]

Are you coming back? When? Why did you leave? Wasn't what you had here enough? Do you have breakfast at a café? Is it true that fruit and vegetables don't taste of anything? How do you manage without a bidet? Isn't it depressing living there?

How long? Two years? Do you like it? Are you coming back? When? Why did you go? Wasn't what you had here enough?

**ALESSIO: I DON'T KNOW.**`
        },
        summary: "Un'intervista si trasforma in un coro di domande, aspettative e stereotipi rivolti a chi emigra.",
        question: "Chi ha il diritto di chiedere perché qualcuno è partito?"
      },
      {
        id: "functioningIsNotBelonging",
        title: "Appartenenza",
        excerpts: {
          it: `**ALESSIO:** Ma c’è una differenza tra funzionare e appartenere. Funzionare è facile. Capisci le regole, le segui. Appartenere è un’altra cosa. Non dipende da te.

**DANIELE:** Ma quella è la parte più leggera del pacco. Il peso che legge la bilancia. Poi c’è il peso vero. Quello non si vede, lo legge solo il cuore.

**VALENTINA:** Molti, a un certo punto, hanno attraversato una soglia invisibile. [...] E una città straniera non è più un luogo di passaggio o un soggetto di ricerca antropologica, ma diventa una nuova casa.

[...]

**ALESSIO:** Perché non sei più completamente da nessuna parte. Sei tra due versioni della tua vita. E nessuna delle due è intera.`,
          en: `**ALESSIO:** But there's a difference between functioning and belonging. Functioning is easy. You understand the rules, you follow them. Belonging is something else. It's not up to you.

**DANIELE:** But that's the lightest part of the package. The weight the scales can measure. Then there's the real weight. You can't see that one. Only the heart can measure it.

**VALENTINA:** At some point, many people cross an invisible threshold. [...] And a foreign city is no longer somewhere you're just passing through, or the subject of some anthropological study. It becomes a new home.

[...]

**ALESSIO:** Because you no longer belong completely anywhere. You're caught between two versions of your life. And neither one is whole.`
        },
        summary: "Un pacco arrivato da casa porta con sé cibo, affetto, nostalgia e domande difficili.",
        question: "Si può stare bene in un luogo senza sentirsi parte?"
      },
      {
        id: "whyDoYouLeave",
        title: "Perché te ne vai?",
        excerpts: {
          it: `Nel mio caso, non è che io stessi fuggendo alla fame, alla precarietà... non avevo, in verità, una necessità pressante di lasciare il mio paese.

E se io fossi nato altrove, in un'India remota? [...] Sarei chi sono io oggi? [...] E se ci fosse una parte di me che si sente buddista? E se ci fosse una parte di me che si sente pura geometria e dovere?

Da una parte la migrazione implica tanto sforzo, capacità di adattamento, indipendenza... dall’altra c’è però anche spazio per il gioco, per reinventarsi, per la libertà - un margine. Attraverso la migrazione abbiamo margine, uno *Spielraum* - spazio per giocare, per speculare, che forse nelle nostre terre, in seno alle nostre famiglie, non ci è mai stato dato.

[...]

Può capitare, al ritorno, che il gergo sia un altro, che le strade siano cambiate... infine, di non riconoscere più la tua Itaca, il tuo paese.

[...]

Alla fine, l’estraneo non era l’altro.
**L’estraneo ero io.**`,
          en: `In my case, it wasn't as though I was escaping hunger or insecurity... The truth is, I had no urgent need to leave my country.

And what if I'd been born somewhere else? In some remote part of India? Would I be who I am today? What if there were a part of me that feels Buddhist? What if there were a part of me drawn to pure geometry and duty?

On the one hand, migration demands enormous effort, adaptability, independence... But on the other, it also creates room to play, to reinvent yourself, to be free — a margin of possibility. Through migration we gain a *Spielraum* — room to play, to explore possibilities — that perhaps we were never given back home, within our families.

[...]

Sometimes, when you return, the streets have changed, the slang is different... until eventually you no longer recognise your own Ithaca, your own country.

[...]

In the end, the stranger wasn't the other person.
**The stranger was me.**`
        },
        summary: "Partire può nascere anche dalla curiosità, dal desiderio di cambiare e dallo spazio per reinventarsi.",
        question: "Si può partire per desiderio, non per mancanza?"
      },
      {
        id: "whatIfILeave",
        title: "E se poi me ne vado?",
        excerpts: {
          it: `Quando sono entrata nel mio primo appartamento - dopo anni di subaffitti e precarietà perché mi dicevo “e se poi me ne vado?” - l’appartamento, fresco di ristrutturazioni, era completamente vuoto.

[...]

Non volevo investire molto nella cucina, e se poi me ne vado? mi dicevo. Ma di qualcosa avevo bisogno. Meglio fare in fretta, raccattare qualche soluzione temporanea che mi permetta di sopravvivere.

[...]

Arredavo il resto dell’appartamento. [...] Ogni stanza prendeva forma e gradualmente diventava sempre più mia.

Poi guardavo la cucina, spoglia, scomoda, spesso sporca e pensavo: dovrei proprio farmi una cucina ma che senso ha. E se poi me ne vado?

[...]

E siccome non mi sento a casa non faccio la cucina, e senza cucina, mi sento meno a casa. Torna sempre quella domanda “e se poi me ne vado?”

Chissà cosa succederebbe alla mia cucina se cominciassi a chiedermi:

**“e se poi non me ne vado?”**`,
          en: `When I moved into my first apartment — after years of sublets and uncertainty, always telling myself, “What if I end up leaving?” — the apartment was completely empty.

[...]

I didn't want to invest too much in the kitchen. What if I ended up leaving?

But I needed something. Better to do it quickly, cobble together some temporary solution that would allow me to get by.

[...]

I furnished the rest of the apartment. [...] Each room took shape and gradually became more and more my own.

Then I'd look at the kitchen — bare, impractical, often dirty — and think: I really should get myself a proper kitchen. But what's the point? What if I ended up leaving?

[...]

And because I don't feel at home, I don't build the kitchen. And without a kitchen, I feel even less at home. The same question keeps coming back: “What if I end up leaving?”

I wonder what would happen to my kitchen if I started asking myself:

**“What if I don't leave?”**`
        },
        summary: "Una cucina lasciata a metà diventa il ritratto di una casa e di un futuro tenuti in sospeso.",
        question: "Quanto è difficile investire in un luogo senza sapere per quanto ci resteremo?"
      },
      {
        id: "reflections",
        title: "Qual è il nostro lessico familiare?",
        excerpts: {
          it: `**SARA:** Basta una parola, una frase: una di quelle frasi antiche, sentite e ripetute infinite volte, nel tempo della nostra infanzia.

[...]

Una di quelle frasi o parole, ci farebbe riconoscere l’uno con l’altro, noi fratelli, nel buio d’una grotta, fra milioni di persone.

**MANUELA:** Soprattutto attraverso la lingua riesco a mantenere il contatto con le mie radici. Non rinuncerei per nulla al mondo a pensare, ascoltare, parlare — sentire — la lingua dei miei genitori.

**GERMAN:** Ricordo anche il nonno e i suoi modi di dire. [...] «Avanti bersaglieri, che la battaglia è nostra!» [...] Lei rimase immobile, sbalordita, e mi rispose: «È qualcosa che avrebbe potuto dire mio nonno». E io: «Sì... lo diceva anche il mio».`,
          en: `**SARA:** All it takes is a word, a phrase — one of those old phrases we heard and repeated countless times throughout our childhood.

[...]

One of those words or phrases would be enough for us siblings to recognise one another [...] in the darkness of a cave, among millions of people.

**MANUELA:** Above all, it is through language that I manage to stay connected to my roots. I wouldn't give up, for anything in the world, thinking, hearing, speaking — feeling — the language of my parents.

**GERMAN:** I also remember my grandfather and his stock phrases. [...] “Forward, Bersaglieri, the battle is ours!” [...] She stood there, stunned, and replied: “That's something my grandfather could have said.” And I said: “Yes... mine used to say it too.”`
        },
        summary: "Italiano, tedesco e spagnolo si intrecciano nei ricordi e nelle parole che tengono insieme una famiglia.",
        question: "Quali parole conservano un luogo e una storia familiare?"
      },
      {
        id: "whatMakesMeFeelAtHome",
        title: "Cosa mi fa sentire a casa?",
        excerpts: {
          it: `La mia lingua è la lente attraverso la quale ho imparato a conoscere il mondo.

[...]

Si impara a sentire la vita, ad assorbire le cose del mondo così, un suono alla volta,
una sillaba dopo l’altra.

Si dà un nome a quella luce improvvisa e calda che è “L’ALBA”. Si dà un nome al vento, all'odore del pane. Al buio. A quel sentimento che ti prende alle viscere che si chiama “PAURA”.

[...]

A volte sono troppo rumorosa, caciarona, a volte parlo poco, sto quasi zitta. La maggior parte del tempo qui la passo a sentirmi troppo, o troppo poco.

[...]

Non capiscono questa costante necessità di tradursi, di cercare di tradurre la propria identità.

**Ma è possibile tradurre un’identità?**`,
          en: `My language is the lens through which I first learned to understand the world.

[...]

You learn to feel life, to absorb the things of the world like this: one sound at a time, one syllable after another.

You give a name to that sudden, warm light: “dawn”. You give a name to the wind, to the smell of bread. To darkness. To that feeling that grips you in the gut: “fear”.

[...]

Sometimes I'm too loud, too boisterous; sometimes I barely speak at all, I almost fall silent. Most of the time here, I feel like I'm either too much or not enough.

[...]

This constant need to translate yourself, to try to translate your own identity.

**But is it possible to translate an identity?**`
        },
        summary: "Una lingua può avvicinarci alle nostre radici e, altrove, farci sentire fuori posto.",
        question: "La lingua può farci sentire a casa o fuori posto?"
      },
      {
        id: "epilogue",
        title: "Epilogo",
        excerpts: {
          it: `Ma nel viaggio, quello che ci portiamo sempre appresso, l’indelebile sono le parole degli inizi.

**Mamma.**
**Acqua.**
**Pane.**
**Paura.**
**Casa.**
**Ti voglio bene.**`,
          en: `On the journey, what we always carry with us — what can never be erased — are the words we learned at the very beginning.

**Mum.**
**Water.**
**Fear.**
**Home.**
**I love you.**`
        },
        summary: "Il respiro e il movimento riportano il gruppo all'immagine iniziale della traversata.",
        question: "E se casa fosse imparare a stare in equilibrio mentre tutto si muove?"
      }
    ],
    credits: [
      { role: "Costumi", name: "Kathrin Hauer", href: "https://www.kathrinhauer.de/de/" },
      { role: "Luci", name: "Cordula Ritter" },
      { role: "Suono", name: "Davide Bozzaro" },
      { role: "Assistenza sala", name: "Nicoló Rossi" },
      { role: "Assistenza camerino", name: "Emilia Refolo" },
      { role: "Foto", name: "Jade Thoms" }
    ]
  },
  en: {
    pageTitle: "Da un'altra parte - Il Teatro di Pan",
    htmlLanguage: "en",
    labels: {
      skipLink: "Skip to content",
      navLabel: "Primary navigation",
      navShow: "The play",
      navCast: "Cast",
      navScenes: "Scenes",
      navCredits: "Credits",
      tagline: "An artistic research project on the meaning of belonging",
      date: "Sunday, 11 October 2026 · 8:00 pm",
      scrollCue: "Discover the play",
      overviewEyebrow: "The project",
      overviewTitle: "An open question",
      castEyebrow: "On stage",
      castTitle: "The cast",
      directorRole: "Direction",
      scenesEyebrow: "A guide to the play",
      scenesTitle: "The scenes",
      scenesIntro: "A journey through memories, languages and departures.",
      creditsEyebrow: "Behind the scenes",
      creditsTitle: "Credits",
      footerLine: "Berlin · 2026",
      backToTop: "Back to top",
      questionLabel: "A question",
      excerptHeading: "Excerpts",
      italianExcerpt: "Italian excerpt to be added",
      englishExcerpt: "English translation to be added",
      portraitPending: "Portrait not yet available",
      portraitAlt: "Portrait of",
      creditDirection: "Direction",
      creditCostume: "Costumes",
      creditSound: "Sound",
      creditLight: "Lighting",
      creditText: "Script written by"
    },
    overview: [
      "“Da un'altra parte” is an artistic research project exploring the personal and social meaning of Heimat: home, a place of belonging, and a sense of rootedness.",
      "At its heart are individual memories, personal experiences, and different ideas of what it means to feel at home. The project begins with open questions: What turns a place into a home? Can you feel at home in more than one place, or in none? How do migration, belonging, language, and personal experience shape our idea of home?",
      "This is an open-ended exploration. It offers no ready-made answers, but brings different perspectives into view and makes room for new questions."
    ],
    scenes: [
      {
        id: "intro",
        title: "Intro",
        summary: "Seven bodies imagine a crossing. Breath becomes a shared rhythm, then slips out of sync.",
        question: "What do we carry with us when we leave?"
      },
      {
        id: "whereDoIComeFrom",
        title: "Where Do I Come From?",
        summary: "A family story retraces Manuela's father's journey from Basilicata to Berlin in 1968.",
        question: "When does one person's departure become part of a whole family's story?"
      },
      {
        id: "soWhenDoYouComeBack",
        title: "Yes, But When Are You Coming Back?",
        summary: "An interview becomes a chorus of questions, expectations and stereotypes directed at migrants.",
        question: "Who gets to ask why someone left?"
      },
      {
        id: "functioningIsNotBelonging",
        title: "Belonging",
        summary: "A package from home carries food, affection, longing and difficult questions.",
        question: "Can you be well in a place without feeling that you belong?"
      },
      {
        id: "whyDoYouLeave",
        title: "Why Are You Leaving?",
        summary: "Leaving can also grow from curiosity, a desire for change and the freedom to reinvent yourself.",
        question: "Can we leave out of desire, rather than need?"
      },
      {
        id: "whatIfILeave",
        title: "What If I End Up Leaving?",
        summary: "An unfinished kitchen becomes a portrait of a home and a future kept on hold.",
        question: "How hard is it to invest in a place when you don't know how long you'll stay?"
      },
      {
        id: "reflections",
        title: "What Is Our Family Lexicon?",
        summary: "Italian, German and Spanish intertwine in memories and words that hold a family together.",
        question: "Which words preserve a place and a family history?"
      },
      {
        id: "whatMakesMeFeelAtHome",
        title: "What Makes Me Feel At Home?",
        summary: "A language can bring us closer to our roots and, somewhere else, make us feel out of place.",
        question: "Can language make us feel at home or out of place?"
      },
      {
        id: "epilogue",
        title: "Epilogue",
        summary: "Breath and movement bring the group back to the opening image of a crossing.",
        question: "What if home meant learning to stay balanced while everything moves?"
      }
    ],
    credits: [
      { role: "Costumes", name: "Kathrin Hauer", href: "https://www.kathrinhauer.de/de/" },
      { role: "Lightning", name: "Cordula Ritter" },
      { role: "Sound", name: "Davide Bozzaro" },
      { role: "Theatre Stage Assistance", name: "Nicoló Rossi" },
      { role: "Theatre Dressing Room Assistance", name: "Emilia Refolo" },
      { role: "Photos", name: "Jade Thoms" }
    ]
  }
};

const textNames = "German Brero · Mattia Doneda · Manuela Pucciarelli · Sara Romandini · Marina Rondini"

const performers = [
  { name: "Daniele Avola", image: "assets/actors/daniele.jpg" },
  { name: "German Brero", image: "assets/actors/german.jpg" },
  { name: "Manuela Pucciarelli", image: null },
  { name: "Sara Romandini", image: "assets/actors/sara.jpg" },
  { name: "Marina Rondini", image: "assets/actors/marina.jpg" },
  { name: "Alessio Sordo", image: "assets/actors/alessio.jpg" },
  { name: "Valentina Tomassini", image: "assets/actors/valentina.jpg" }
];
const director = { name: "Erika Tribbioli", image: "assets/actors/erika.jpg" };

const languageButtons = [...document.querySelectorAll("[data-language]")];
let currentLanguage = "it";

function initials(name) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function renderOverview(copy) {
  document.querySelector("#overview-copy").innerHTML = copy.overview
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");
}

function renderCast(copy) {
  const { portraitAlt, portraitPending } = copy.labels;
  const renderCard = ({ name, image }) => `
      <article class="cast-card">
        <div class="cast-portrait"${image ? "" : ` role="img" aria-label="${portraitPending}: ${name}"`}>
          ${image
        ? `<img class="cast-photo" src="${image}" alt="${portraitAlt} ${name}">`
        : `<span aria-hidden="true">${initials(name)}</span>`}
        </div>
        <h3>${name}</h3>
      </article>
    `;
  document.querySelector("#cast-grid").innerHTML = performers
    .map(renderCard)
    .join("");
  document.querySelector("#director-grid").innerHTML = [director]
    .map(renderCard)
    .join("");
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function renderExcerpt(value) {
  return escapeHtml(value)
    .replace(/\*\*([^*\n]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*\n]+)\*/g, "<em>$1</em>")
    .replace(/\r?\n/g, "<br>");
}

function renderScenes(copy) {
  const { labels } = copy;
  document.querySelector("#scene-list").innerHTML = copy.scenes
    .map((scene, index) => {
      const excerpts = content.it.scenes.find(({ id }) => id === scene.id)?.excerpts || {};
      return `
      <article class="scene-card">
        <div class="scene-number" aria-hidden="true">${String(index + 1).padStart(2, "0")}</div>
        <div class="scene-main">
          <h3>${scene.title}</h3>
          <!-- <p class="scene-summary">${scene.summary}</p>
          <div class="scene-question">
            <span class="eyebrow">${labels.questionLabel}</span>
            <p>${scene.question}</p>
          </div> -->
          <div class="excerpt-area">
            <p class="excerpt-heading">${labels.excerptHeading}</p>
            <div class="excerpt-pair">
              <div class="excerpt-slot">
                <span class="excerpt-language">IT</span>
                <span class="excerpt-prompt">${renderExcerpt(excerpts.it || labels.italianExcerpt)}</span>
              </div>
              <div class="excerpt-slot">
                <span class="excerpt-language">EN</span>
                <span class="excerpt-prompt">${renderExcerpt(excerpts.en || labels.englishExcerpt)}</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    `;
    })
    .join("");
}

function renderCredits(copy) {
  const labelMap = {
    Regia: copy.labels.creditDirection,
    Costumi: copy.labels.creditCostume,
    Suoni: copy.labels.creditSound,
    Luci: copy.labels.creditLight
  };
  const creditItems = copy.credits
    .map(({ role, name, href }) => `
      <div class="credit-item">
        <span class="credit-role">${labelMap[role] || role}</span>
        <span class="credit-name">${href
          ? `<a href="${href}" target="_blank" rel="noopener">${name}</a>`
          : name}</span>
      </div>
    `)
    .join("");
  // const castNames = performers.map(({ name }) => name).join(" · ");
  document.querySelector("#credits-grid").innerHTML = `
    ${creditItems}
    <div class="credit-item credit-cast">
      <span class="credit-role">${copy.labels.creditText}</span>
      <span class="credit-name">${textNames}</span>
    </div>
  `;
}

function setLanguage(language, announce = false) {
  if (!content[language]) return;
  currentLanguage = language;
  const copy = content[language];

  document.documentElement.lang = copy.htmlLanguage;
  document.title = copy.pageTitle;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (copy.labels[key] !== undefined) element.textContent = copy.labels[key];
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (copy.labels[key] !== undefined) element.setAttribute("aria-label", copy.labels[key]);
  });

  renderOverview(copy);
  renderCast(copy);
  renderScenes(copy);
  renderCredits(copy);

  languageButtons.forEach((button) => {
    const selected = button.dataset.language === language;
    button.setAttribute("aria-pressed", String(selected));
  });

  if (announce) {
    document.querySelector("#language-announcement").textContent = language === "it"
      ? "Lingua impostata su italiano."
      : "Language set to English.";
  }
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language, true));
});

setLanguage(currentLanguage);
