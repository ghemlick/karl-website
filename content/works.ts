export type WorkCategory = "composition" | "percussion" | "performance";

export type Media =
  | { type: "youtube"; id: string }
  | { type: "youtube-grid"; ids: string[] }
  | { type: "spotify"; uri: string }
  | { type: "soundcloud"; url: string; title?: string; visual?: boolean }
  | {
      type: "soundcloud-list";
      title?: string;
      tracks: { url: string; title?: string }[];
    }
  | { type: "image"; src: string; alt: string }
  | { type: "images"; items: { src: string; alt: string }[] };

export type WorkLink = { label: string; href: string };

export const compositionGenres = [
  { id: "opera-theater", label: "Opera & Theater" },
  { id: "electronic-experimental", label: "Electronic & Experimental" },
  { id: "chamber", label: "Chamber" },
  { id: "large-ensemble", label: "Large Ensemble" },
  { id: "songs-band", label: "Songs & Band" },
] as const;

export type CompositionGenre = (typeof compositionGenres)[number]["id"];

export type Work = {
  slug: string;
  category: WorkCategory;
  genre?: CompositionGenre;
  title: string;
  subtitle?: string;
  media?: Media[];
  credits?: string[];
  body?: string;
  poem?: string;
  notes?: string[];
  links?: WorkLink[];
  scores?: WorkLink[];
  wantSheetMusic?: boolean;
  mediaAfter?: boolean;
};

export const works: Work[] = [
  {
    slug: "the-precipice",
    category: "composition",
    genre: "opera-theater",
    title: "THE PRECIPICE",
    media: [{ type: "youtube", id: "Nj1MURb-tSQ" }],
    credits: [
      "Created by KARL",
      "from Text and Music by Karl Ronneburg and Grey Rose Grant",
      "Production by Corey Smith",
      "Commissioned by Contemporaneous and Fifth Wall Performing Arts",
      "June 27-28, 2024",
      "The Space at Irondale, Brooklyn, NY",
      "CAST in order of vocal appearance:",
      "Grey's Voice Double: Morgan Mastrangelo",
      "Karl's Voice Double: Wayne Arthur",
      "Grey: Grey Rose Grant",
      "Karl: Karl Ronneburg",
      "CONTEMPORANEOUS",
      "David Bloom, Conductor",
      "Madison Greenstone, Clarinet",
      "Josh Henderson, Violin",
      "Titilayo Ayangade, Cello",
      "Brendon Randall-Myers, Electric Guitar",
      "Pat Swoboda, Electric Bass",
      "Milena Gligic, Piano/Toy Piano",
      "Robby Bowen, Percussion",
      "Set Design by Roni Sipp",
      "Lighting by McKenna Ebert",
      "Sound by Charles Mueller",
      "Video by Christopher Smith",
      "Stage Management by David Furney",
    ],
    poem: `for our friends:

find a place to watch and look out, a cliff by the beach, an edge in the sunlight

chase that open empty, the feeling of turning a corner, the boundary of now and whenever

this is two parallel lives, this is in and out (and in and out) of love,
this is leaving and jumping and getting lost and maybe moving on

this is our precipice:
"roar, lion of the heart, and tear me open" - Jalal al-Din Rumi`,
    body: "Weaving together text and music from journal entries, poems, and voice memos by Karl Ronneburg and Grey Rose Grant, THE PRECIPICE is a 100-minute abstract chamber-rock opera that tells the story of two parallel lives — trans/queer and cis/straight perspectives on leaving, jumping, getting lost, and maybe moving on.",
    notes: [
      "Content Warning: some strong language, conversations of sexual assault",
      "Press CC button for subtitles",
    ],
    links: [
      {
        label: "Director's Note and full program",
        href: "https://docs.google.com/document/d/1poMHF3DBRxec0GYwAyFAmvzuReZmSjnI52GeL-LbuJ0/edit?usp=sharing",
      },
      {
        label: "Production information / how to book",
        href: "https://www.contemporaneous.org/projects-imagination/the-precipice",
      },
      {
        label: "Full libretto",
        href: "https://bit.ly/precipice-libretto",
      },
    ],
  },
  {
    slug: "arrhythmia",
    category: "composition",
    genre: "electronic-experimental",
    title: "ARRHYTHMIA",
    media: [{ type: "youtube", id: "SsjrkCX3q5g" }],
    credits: [
      "Eric Puente, Synthesizers, Vocals, and Field Recordings",
      "Jason Treuting, Drums, Vocals, and Field Recordings",
      "Karl Ronneburg, Vibraphone, Vocals, and Field Recordings",
      "Performed at the (all-virtual) So Percussion Summer Institute 2021",
    ],
    body: "Arrhythmia is a heart condition I have personal experience with in which the heart beats with an irregular or abnormal rhythm. Arrhythmias come in many forms and can be benign or dangerous. My musical response follows those irregular patterns through four movements:",
    notes: [
      "I. I read the news today (arrhythmic patterns following speech rhythms in an expanding structure)",
      "II. Rock Song (arrhythmic patterns following rocks rolled along the ground, arranged into a rock-song structure)",
      "III. DANGER MUSIC (arrhythmic patterns chaotically arranged, based on bursting and cutting sounds)",
      "Coda: Souvenirs (just some pleasant textural memories, no rhythms necessary)",
    ],
    wantSheetMusic: true,
  },
  {
    slug: "microrhythms",
    category: "composition",
    genre: "electronic-experimental",
    title: "Microrhythms",
    mediaAfter: true,
    media: [
      {
        type: "soundcloud",
        url: "https://soundcloud.com/karl-allmusic/isomicro",
        title: "iso+micro (with Elliot Cole)",
      },
      {
        type: "soundcloud",
        url: "https://soundcloud.com/karl-allmusic/sickmorleys",
        title: "BDA-GOON-KA (with Sickmorley's)",
      },
      {
        type: "soundcloud-list",
        title: "Microgrooves",
        tracks: [
          {
            url: "https://soundcloud.com/karl-allmusic/microgroove-1-ultra-laid-back",
            title: "Microgroove 1: Ultra-Laid-Back",
          },
          {
            url: "https://soundcloud.com/karl-allmusic/microgroove-3-warped-samba-groove",
            title: "Microgroove 2: Warped Samba",
          },
          {
            url: "https://soundcloud.com/karl-allmusic/microgroove-3-stretched-7",
            title: "Microgroove 3: Stretched 7",
          },
          {
            url: "https://soundcloud.com/karl-allmusic/micro-4-slow-64",
            title: "Microgroove 4: Slow 6/4",
          },
          {
            url: "https://soundcloud.com/karl-allmusic/microgroove-5-drunk-hiphop",
            title: "Microgroove 5: Drunk Hip-Hop?",
          },
        ],
      },
    ],
    body: "I’m investigating the possibilities of composing with microrhythmic inflections, studying how subtle changes of tempo and note placement can open up new realms of rhythmic creation and perception. This can come in the form of rhythmic frameworks, like inventing a new kind of Viennese Waltz or a new system of swing, or can be used as a more flexible compositional tool, adding varying amounts of rhythmic warping and nuance throughout a particular piece.\n\nI built a sequencer interface in SuperCollider to help me design and explore these rhythmic ideas, which I then turned into MIDI, audio, and transcriptions to create the following tracks and short pieces. Included below is my electronic collaboration with Elliot Cole iso+micro, my open-instrumentation piece BDA-GOON-KA (performed here with the improv punk band Sickmorley's), and a collection of studio recordings I made of microrhythmic drum loops, called Microgrooves.",
    scores: [
      {
        label: "Essay on Microrhythmic Composition",
        href: "/scores/microrhythms-essay.pdf",
      },
      { label: "Score for BDA-GOON-KA", href: "/scores/bda-goon-ka.pdf" },
      { label: "Score for Microgrooves 1–5", href: "/scores/microgrooves.pdf" },
    ],
    links: [{ label: "SuperCollider notes and transcriptions", href: "/microrhythms" }],
  },
  {
    slug: "patience",
    category: "composition",
    genre: "chamber",
    title: "Patience",
    media: [{ type: "youtube", id: "_hVrbXBRa6g" }],
    credits: [
      "Performed by Karl Ronneburg, Vibraphone",
      "Video and Audio recorded and edited by Spiff Wiegand",
      "Brooklyn, February 2020",
    ],
    body: "Approaching the 1 year anniversary of New York City's shut down for the COVID-19 pandemic, patience has been on my mind. Waiting for vaccines, waiting to perform again in public, waiting for life to resume — this piece sits inside that waiting.",
    wantSheetMusic: true,
  },
  {
    slug: "talk-pop-song",
    category: "composition",
    genre: "songs-band",
    title: "TALK / Pop Song",
    mediaAfter: true,
    media: [
      { type: "spotify", uri: "spotify:track:3BRseAlAbdYy7gD2DAzC8P" },
      { type: "spotify", uri: "spotify:track:68XsF50k8zZyt5NG228Vyt" },
    ],
    credits: [
      "José María: Vocals",
      "Karl Ronneburg, Drums, Keyboards",
      "Mixed and Mastered by Cesar Gonzalez",
      "Released July 2020",
    ],
    body: "These two Meredith Monk-inspired songs were a collaboration with José María.",
    links: [
      { label: "José María", href: "https://www.joseishere.com/" },
      {
        label: "LQQK album on Bandcamp",
        href: "https://joseishere.bandcamp.com/album/lqqk-a-visual-ep-in-six-parts",
      },
    ],
    wantSheetMusic: true,
  },
  {
    slug: "be-that-empty",
    category: "composition",
    genre: "chamber",
    title: "be that empty",
    mediaAfter: true,
    media: [{ type: "spotify", uri: "spotify:track:6HJJbLixs3yCP9HPszxxym" }],
    credits: ["Commissioned and Performed by the Vanguard Reed Quintet, 2020"],
    body: '"be that empty" is a musical rendering of Rumi\'s "The Song of the Reed", as translated by Coleman Barks.',
    poem: `Listen to the story told by the reed,
of being separated.

"Since I was cut from the reed bed,
I have made this crying sound."
Anyone apart from someone he loves
understands what I say.
Anyone pulled from a source
longs to go back.

At any gathering I am there,
mingling in the laughing and grieving,
a friend to each, but few
will hear the secrets hidden
within the notes. No ears for that.
Body flowing out of spirit,
spirit up from body: no concealing
that mixing. But it's not given us
to see the soul. The reed flute
is fire, not wind. Be that empty.

Hear the love fire tangled
in the notes, as bewilderment
melts into wine. The reed is a friend
to all who want the fabric torn
and drawn away. The reed is hurt
and salve combining. Intimacy
and longing for intimacy, one
song. A disastrous surrender
and a fine love, together.`,
    wantSheetMusic: true,
  },
  {
    slug: "bahnhoffnung",
    category: "composition",
    genre: "opera-theater",
    title: "Bahnhoffnung",
    media: [{ type: "youtube", id: "83FjKiEEhu8" }],
    credits: [
      "Premiere Performance at the German Consulate General, New York, February 28, 2019.",
      "Jens Ibsen: Tenor",
      "Lasse Bjerknæs-Jacobsen: Trumpet",
      "Jesse Goldberg: Piano",
      "Narrated excerpts from Jürgen Ronneburg’s documents",
      "Sung lyrics by Jürgen Ronneburg",
      "Edited and Translated by Karl Ronneburg",
      "Grace Jackson, Vocals",
      "Violin, Cello, Flute, Bass Clarinet performed by the Red Shoe Company",
      "Ann Arbor, October 2018",
    ],
    body: "Bahnhoffnung: a combination of the German words for train station (Bahnhof) and hope (Hoffnung).\n\nBahnhoffnung tells the story of my grandfather Jürgen Ronneburg's escape via train from East Germany through the original government documents and personal poems I received after he passed away in the Fall of 2018.",
    poem: `English Translation:

1)
Jürgen Ronneburg was born to Paul and Herta Ronneburg on June 21, 1939 in Bitterfeld.

2)
May 28th, 1953
Subject: Your son
Because of the new structure of high schools, a new standard is being applied for school performance as well as for social activity, and thus the admission of your son is withdrawn. You now must decide...
Habel Bauermeister, Head of Department

It certainly won’t happen again,
that I miss another train,
and let it drive away without me.`,
    wantSheetMusic: true,
  },
  {
    slug: "dreams-sleeping-in-the-forest",
    category: "composition",
    genre: "songs-band",
    title: "Dreams / Sleeping in the Forest",
    media: [{ type: "youtube", id: "8Q-aSjrn5_E" }],
    body: "A lush, dark setting of two of my favorite Mary Oliver poems, created through my 2018 residency with the Red Shoe company.",
    wantSheetMusic: true,
  },
  {
    slug: "blue-green",
    category: "composition",
    genre: "large-ensemble",
    title: "blue-green",
    media: [{ type: "youtube", id: "CYKA3obqPCA" }],
    credits: [
      "World Premiere Performance",
      "University of Michigan Symphony Band",
      "Michael Haithcock, conductor",
      "September 28, 2017",
      "Hill Auditorium, Ann Arbor, MI",
      "Recorded by Dave Schall and Cory Robinson",
    ],
    body: "There's a wildness at the core of my Pacific Northwest home— a darkness too, and a melancholy—a gray-blue-dark-green, the overwhelming aloneness the rain makes one feel, but there's also a glory to it, a singing out, the open varied spaces: it's riding a ferry past mountains in the morning, or driving through the woods at night, it's a tiny beach town called Copalis, which inspired a band and an album by the same name, which in turn inspired this music, it's hurricane cliffs and never feeling quite dry.",
    wantSheetMusic: true,
  },
  {
    slug: "dance-and-meditation",
    category: "composition",
    genre: "chamber",
    title: "dance and meditation and dance and",
    media: [{ type: "youtube", id: "Mizw-azf57Y" }],
    credits: [
      "Performed by Karl Ronneburg and Jesse Goldberg",
      "Dec. 19, 2017",
      "Mannes College of Music, New York, NY",
      "Recorded by Yifan Guo",
    ],
    body: "When I moved to New York I had to meditate almost every day just to stay sane in this crazy town—this is some music about the dance that is living here and meditating inside it and then dancing and meditating again.",
    wantSheetMusic: true,
  },
  {
    slug: "hack-the-bells-reclaim",
    category: "composition",
    genre: "electronic-experimental",
    title: 'Hack the Bells: "Reclaim"',
    media: [{ type: "youtube", id: "Xedxe6FhEwU" }],
    credits: [
      "By Karl Ronneburg and Spencer Haney",
      "Electronics: Becca Fisher and Alex Miller",
      "Carillon: Rachael Park",
      "Amanda Ross: Trumpet",
      "Spencer Schaefer, Daniel Skib, Tommy Militello: French Horn",
      "Riley Bahin: Euphonium",
      "Cars: Spencer Haney and Em Yang",
      "Made possible by Professors Tiffany Ng, John Granzow, and the University of Michigan's \"Hack the Bells\" Grant",
      "September 29, 2017",
    ],
    body: "Today, the University of Michigan's Baird Carillon strains to be heard amidst rampant noise pollution. The acoustic environment is drowned in road noise from cars and buses, the drone of regulating machines on the roofs of buildings, the crunch of construction vehicles and the monotonous pacing of hundreds of people en route. Lost in a sea of noise, the carillon has no voice. Without a voice, the carillon stands only as a monolith, unable to subvert its physical presence as yet another erection of institutional power. We claim this loss of character to be unacceptable.",
    wantSheetMusic: true,
  },
  {
    slug: "three-scenes-from-sleeping-bear",
    category: "composition",
    genre: "chamber",
    title: "Three Scenes from Sleeping Bear",
    media: [
      { type: "youtube", id: "kZsRUYn2udc" },
      { type: "youtube", id: "oARnLjHAFiw" },
      { type: "youtube", id: "K4shdRJAPmY" },
    ],
    credits: [
      "Andrew Grossman: Percussion",
      "Phoebe Wu: Piano",
      "Karl Ronneburg: Timpani",
      "University of Michigan, November 2014",
    ],
    body: "The final version of this music was inspired by a weekend camping trip to the Sleeping Bear Dunes National Lakeshore in October 2014. The particular flavor of those few days, combined with the rugged landscape of beach, dune, and forest, shaped these three scenes: before dawn, the beach; a hike through the dunes; chorale, the sunrise.",
    wantSheetMusic: true,
  },
  {
    slug: "shapes-and-the-thought-that-made-them",
    category: "composition",
    genre: "large-ensemble",
    title: "SHAPES and the thought that made them",
    media: [
      { type: "youtube", id: "dzQyK-jr9Do" },
      { type: "youtube", id: "14yNtikqIAI" },
      { type: "youtube", id: "J9s90kIohjg" },
      { type: "youtube", id: "8-bV-j38wgY" },
    ],
    credits: [
      "Thomas Gamboa, Conducting",
      "Janet Lyu, Violin",
      "Jack Mobley, Viola",
      "Zan Berry, Cello",
      "Tommy Hawthorne, Bass",
      "Andrea Voulgaris, Soprano Sax",
      "Jonathan Hostottle, Alto Sax",
      "David Foley, Tenor Sax",
      "Jeffrey Leung, Bari Sax",
      "Julian Bridges, Percussion",
      "Andrew Grossman, Percussion",
      "Nicole Patrick, Percussion",
      "Karl Ronneburg, Percussion, Speaking",
      "Grey Grant: Speaking",
      "Canterbury House, Ann Arbor, MI, May 2016",
      "Recorded by Patterson McKinney and David Newton",
    ],
    body: `The title for this music and each of the section titles are out-of-context quotes taken from Ayn Rand's "The Fountainhead"—the idea being that I was using Ayn's words to tell my own story, making my commentary, interpretation, and refutation of her writing with my music. The main title comes from architect Howard Roark: “I would give the greatest sunset in the world for one sight of New York's skyline. Particularly when one can't see the details. Just the shapes. The shapes and the thought that made them."

Originally this description was an inspiration to me, as I attempted to make each of the eight parts in this piece a study in musical form, shapes guided by my thoughts; however, in this process I discovered that shapes and form alone do not make something good—it's instead the people and stories behind them, the shape only a frame for the humanity inside.`,
    links: [
      {
        label: "Full 35-minute performance",
        href: "https://www.youtube.com/watch?v=f8wnp6CL1LM",
      },
    ],
    wantSheetMusic: true,
  },
  {
    slug: "trio-for-light-and-air",
    category: "composition",
    genre: "chamber",
    title: "Trio for Light and Air",
    media: [{ type: "youtube", id: "B_SiGkBAtvg" }],
    credits: [
      "Chase Lancaster, Vibes",
      "Jonathan Hostottle, Bari Sax",
      "Karl Ronneburg, Glockenspiel",
      "April 2014",
      "University of Michigan",
    ],
    wantSheetMusic: true,
  },
  {
    slug: "roboboros",
    category: "composition",
    genre: "songs-band",
    title: "Roboboros",
    credits: [
      "Johnny Stevens, Guitar/Vox",
      "Jackson Rudd, Keys/Vox",
      "Mitch Schrader, Bass",
      "Karl Ronneburg, Drums/Percussion/Keys",
      "Recorded by Don Farwell",
      "Released August 2, 2013",
    ],
  },

  {
    slug: "tam-lin",
    category: "percussion",
    title: "TAM LIN by Fiona Gillespie and Elliot Cole",
    credits: [
      "Performed by Fiona Gillespie, Elliot Cole, Bradley King, Molly Netter, Alyssa Weathersby, Ben Matus, Loren Ludwig, Kivie Cahn-Lipman, Caitlin Hedge, Paul Morton, Tracy Cowart, Sian Ricketts, Dylan Greene, and Karl Ronneburg",
      "Filmed at St. Mary's on Grand in NYC, October 2021",
      "Videography: Four/Ten Media",
    ],
  },
  {
    slug: "neither-separated-nor-undone",
    category: "percussion",
    title: "Neither Separated, Nor Undone by Derrick Skye",
    credits: [
      "Cantori Choir featuring Every Voice Concert Choir",
      "Violin I: Doori Na, Christine Wu",
      "Violin II: Phoenix Avalon, Coco Mi",
      "Viola: Hannah Burnett, Maurycy Banaszek",
      "Cello: Audrey Chen, Sebastian Stoger",
      "Flute: Laura Jordan-Cocks",
      "Bass: Patrick Duff",
      "Percussion: Karl Ronneburg",
      "Church of the Holy Apostles, New York, NY, November 13, 2022",
      "Audio: Swan Studios NYC / Andreas Meyer",
      "Video: Jacob McCoy / Richard Berg",
    ],
  },
  {
    slug: "slight-songs",
    category: "percussion",
    title: "Slight Songs by James Moore",
    credits: [
      "Performed by Ava Machado, Brendan McBride, Karl Ronneburg, and Michael Yeung",
      "So Percussion Summer Institute, July 2019",
      "Videography: Four/Ten Media",
    ],
  },
  {
    slug: "free-improvisation",
    category: "percussion",
    title: 'Free Improvisation: "I\'m a man of mystery"',
    credits: [
      "Sara Salomon, Violin",
      "Sun Kyoung Min, Cello",
      "Anthony Coleman, Piano",
      "Karl Ronneburg, Percussion",
      "January 2020",
    ],
  },
  {
    slug: "copalis",
    category: "percussion",
    title: "COPALIS",
    subtitle: "Seattle-based indie band",
    credits: [
      "Johnny Stevens, Guitar/Vox",
      "Jackson Rudd, Keys/Vox",
      "Mitch Schrader, Bass",
      "Karl Ronneburg, Drums/Percussion/Vox",
      "Dylan Wall, Mixing",
      "Mac Porter, Mastering",
      "Sebastian Choe, Art",
      "Released June 22, 2015",
    ],
    body: '"Just like paddling out and waiting for the right wave to come, so do you put on Copalis and wait for that first moment when you feel yourself borne up." — The Even Ground',
    links: [
      { label: "Bandcamp", href: "https://copalis.bandcamp.com/" },
      { label: "Spotify", href: "https://open.spotify.com/search/Copalis" },
    ],
  },
  {
    slug: "extremes",
    category: "percussion",
    title: "EXTREMES by Jason Treuting",
    media: [{ type: "youtube", id: "VaNnPjzZ4N0" }],
    credits: [
      "Performed by Karl Ronneburg, Nicole Patrick, Arlo Shultis, and Evan Saddler",
      "May 2015",
    ],
  },
  {
    slug: "death-with-dignity",
    category: "percussion",
    title: "Death with Dignity (Sufjan Stevens) — Marimba/Vocal cover",
    media: [{ type: "youtube", id: "NHfsNvUnBcQ" }],
    credits: [
      "Videography by Spencer Haney",
      "Marimba and Vocals by Karl Ronneburg",
      "Production and Mixing by Karl Ronneburg and Spencer Haney",
      "Mastering by Mac Porter",
      "Farming by Madelyn Celovsky",
    ],
  },
  {
    slug: "ms-sword",
    category: "percussion",
    title: "Ms. Sword by Shu Zhou",
    media: [{ type: "youtube", id: "g5QDzVxGagg" }],
    credits: [
      "Commissioned by the Solo and Chamber Timpanist's Initiative.",
      "Griffen Harvey and Tanner Tanyeri: marimba",
      "Karl Ronneburg and Casey Voss: timpani",
      "Produced by Sly Pup Productions",
    ],
  },

  {
    slug: "the-snaxophone",
    category: "performance",
    title: "The Snaxophone",
    media: [
      {
        type: "youtube-grid",
        ids: ["9R_ljEwDGsk", "u0T4QgcTVmA", "0figojbmZP0", "4bGl1W8cbdw"],
      },
    ],
    body: "The Snaxophone is an instrument I invented by taking a Pringles can and sticking a contact mic inside it, which creates a surprisingly beautiful feedback tone when held in front of an amp. Run through a Max/MSP patch I wrote, I've used the Snaxophone to improvise and perform music by composers from J.S. Bach to Julius Eastman.",
  },
  {
    slug: "einstein-in-the-house",
    category: "performance",
    title: "Einstein in the HOUSE",
    media: [{ type: "youtube", id: "RtA79lg2VuY" }],
    credits: [
      "Conductor - Victor Huls",
      "Directors – Grey Grant and Karl Ronneburg",
      "Choreography – Grey in collaboration with Dancers",
      "Mise en Scene (making cardboard trains) – Levin Kim and Andrew Zick",
      "Lighting - Karl Ronneburg and Sam Burck",
      "Person 1 – Karl Ronneburg",
      "Person 2 - Grey Grant",
      "Train Conductor/Judge /Bus Driver – Phoebe Wu",
      "Crazy Eddie – Thomas Kratofil",
      "Kid Judge- Jacob Rogers",
      "Stenographers – Kayla Mathes, Melanie Holt",
      "Dancers – Melanie Holt, Daz Dandylion, Kayla Mathes, Grey Grant",
      "Einstein -- Teagan Faran",
      "Soprano Soloist – Hayley Boggs",
      "Alto Soloist - Madeline Gotschlich",
      "Soloist for “Building” - Rebecca Rosen",
      "Chorus: Soprano – Christina Swanson, Maya Ballester, Hayley Boggs; Alto – Madeleine Gotschlich, Rebecca Rosen, Marty Gray; Tenor – Grant Rossi, Walker Durell; Bass – Walker Durell, Dayton Hare, Thomas Kratofil",
      "Flute 1/picc- Noniko Hsu",
      "Flute 2/sop sax- Lisa Keeney",
      "Bass Clarinet/ Bb clarinet - Jordan Kauffman",
      "Organ 1 - Karalyn Schubrig",
      "Organ 2 – Annie Jeng",
    ],
    body: 'It\'s so incredibly beautiful to be part of a community of people who, when you have an idea as insane as "Let\'s put on a full, free, student production of Einstein on the Beach—in my house", have no hesitation in saying yes.\n\nSo enjoy our adaptation of Phillip Glass and Robert Wilsons\' masterpiece!',
    links: [
      { label: "fifthwallperformingarts.com", href: "http://fifthwallperformingarts.com/" },
    ],
  },
  {
    slug: "voice-piece-for-soprano",
    category: "performance",
    title: "Voice Piece for Soprano, by Yoko Ono",
    media: [{ type: "youtube", id: "d6BQRbqY1C0" }],
    credits: [
      "Performed by Karl Ronneburg",
      "Filmed by Alexander Ronneburg",
      "Brooklyn, 2020",
    ],
    body: "A pandemic rooftop performance of Yoko Ono's performance piece for Fifth Wall Performing Arts' Fluxus Fest 2020.\n\nThe 60s-70s Fluxus art movement had newfound relevance in 2020, when we performed our lives online during the coronavirus pandemic.",
    links: [
      { label: "Fluxus Fest 2020", href: "https://youtu.be/llSfN4BBQnM" },
      {
        label: "Article in New Music Box",
        href: "https://nmbx.newmusicusa.org/",
      },
    ],
  },
  {
    slug: "the-dictators-song-and-dance",
    category: "performance",
    title: "The Dictator's Song and Dance",
    media: [{ type: "youtube", id: "O4Xf5ZqRXYs" }],
    credits: [
      "Dictator: Karl Ronneburg",
      "Henchman: Johnny Matthews",
      "2 February 2017, Power Center for the Performing Arts",
      "From Meredith Monk's Quarry at the University of Michigan.",
    ],
  },
  {
    slug: "squirrel-university",
    category: "performance",
    title: "Squirrel University",
    media: [{ type: "youtube", id: "NNuThGn0_Bs" }],
    credits: [
      "by Zach Kolo, Thomas Kratofil, Phoebe Wu, and Karl Ronneburg",
      'with guest squirrels Dee Perillo, Daniel Ghastin, Carlos Valls, Julia Gaynor, and Mia Massimino as "Boom Operator"',
      "Duderstadt Video Studio",
      "April 2017, Ann Arbor",
    ],
    body: "A collection of promotional materials for any of you squirrels out there looking into your post-secondary options.",
  },
  {
    slug: "something-actually-bad",
    category: "performance",
    title: "Something Actually Bad",
    media: [{ type: "youtube", id: "rF-WHNokOuI" }],
    credits: [
      "by Julia Dooley, Melanie Holt, Thomas Kratofil, Mac Porter, Cailin Ferguson, and Karl Ronneburg",
      "December 2016, Ann Arbor",
    ],
    body: "A mixed cast of inanimate and human actors ask the question: can performance be dangerous? Are humans onstage real people? Are boxes and stools? What’s the difference between something bad that happens and something actually bad?",
  },
  {
    slug: "the-story-of-daniel",
    category: "performance",
    title: "The Story of Daniel",
    subtitle: "Weak Staff Performance Art",
    media: [{ type: "youtube", id: "TO_CbPEiCaE" }],
    credits: [
      "Written and performed by: Phoebe Wu, Zach Kolo, Karl Ronneburg, and Thomas Kratofil",
      "Living Arts Lounge, Winter 2015",
    ],
    body: "A set of bricks embossed with the name DANIEL reveal a set of stories about the mysterious man.",
  },
  {
    slug: "washing-machine-explodes",
    category: "performance",
    title: "Washing Machine Explodes in Super Slow Motion",
    subtitle: "severely edited video",
    media: [{ type: "youtube", id: "WsB6_ykFWZQ" }],
    credits: [
      "Video/Audio Edit by Karl",
      "Shown at the THREADS All Arts Festival, March 2018",
    ],
    body: "For some reason, this is by far my most popular YouTube video.",
  },
];

export function worksByCategory(category: WorkCategory) {
  return works.filter((work) => work.category === category);
}

export function genreLabel(work: Work) {
  return compositionGenres.find((genre) => genre.id === work.genre)?.label ?? "";
}

export function groupWorksByGenre(items: Work[]) {
  const grouped: { id: string; label: string; works: Work[] }[] = compositionGenres
    .map((genre) => ({
      id: genre.id,
      label: genre.label,
      works: items.filter((work) => work.genre === genre.id),
    }))
    .filter((group) => group.works.length > 0);

  const uncategorized = items.filter(
    (work) => !work.genre || !compositionGenres.some((genre) => genre.id === work.genre),
  );

  if (uncategorized.length > 0) {
    grouped.push({ id: "other", label: "Other", works: uncategorized });
  }

  return grouped;
}

function mediaSearchText(media: Media) {
  switch (media.type) {
    case "soundcloud":
      return media.title ?? "";
    case "soundcloud-list":
      return [media.title, ...media.tracks.map((track) => track.title ?? "")].join(" ");
    case "image":
      return media.alt;
    case "images":
      return media.items.map((item) => item.alt).join(" ");
    default:
      return "";
  }
}

export function workMatchesQuery(work: Work, query: string) {
  const tokens = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return true;

  const haystack = [
    work.title,
    work.subtitle,
    work.body,
    work.poem,
    genreLabel(work),
    ...(work.credits ?? []),
    ...(work.notes ?? []),
    ...(work.links ?? []).map((link) => link.label),
    ...(work.scores ?? []).map((score) => score.label),
    ...(work.media ?? []).map(mediaSearchText),
  ]
    .join("\n")
    .toLowerCase();

  return tokens.every((token) => haystack.includes(token));
}
