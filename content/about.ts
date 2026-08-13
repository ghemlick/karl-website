export type BioLink = {
  label: string;
  href: string;
};

export type BioItem = {
  text: string;
  links?: BioLink[];
};

export const aboutQuotes = [
  {
    quote: "Bonkers insane brilliant",
    attribution: 'Nico Muhly on "Einstein in the HOUSE"',
  },
  {
    quote:
      "The timpani keep up a low, ominous rumble. When they ratchet up the volume, the sound rises like a tsunami...",
    attribution:
      "The New York Times on Karl's performance in Julius Eastman's Symphony no. 2",
  },
  {
    quote: "Like a computer-animated Minion gone mad with power",
    attribution:
      "PULP Arts Around Ann Arbor on Karl as the Dictator in Meredith Monk's Quarry",
  },
  {
    quote: "Conjuring up a forest of metamorphic, unsettling dreams...",
    attribution:
      "The National Sawdust Log on Grey Grant's Michigan Trees, which Karl directed and conducted",
  },
];

export const aboutIntro =
  "Karl is a composer, percussionist, dramaturg, and performance artist based in New York City.";

export const aboutLead =
  "The coolest things (in his opinion) that he's done so far are:";

export const aboutItems: BioItem[] = [
  {
    text: "Working at the Metropolitan Opera as the Dramaturgy/Opera Commissioning Associate (where he is currently employed!). Operas he's contributed research, notes, and feedback to include Kevin Puts’ The Hours, Terence Blanchard’s Champion, Anthony Davis’ X, Jeanine Tesori’s Grounded, John Adams’ Antony and Cleopatra, Mason Bates’ The Amazing Adventures of Kavalier & Clay, Missy Mazzoli’s Lincoln in the Bardo, and Huang Ruo’s The Wedding Banquet.",
  },
  {
    text: "Working with Meredith Monk, including performing as a percussionist in INDRA'S NET at the Park Avenue Armory in 2024 and in the lead role of the Dictator in Quarry at the University of Michigan in 2017.",
    links: [
      {
        label: "Quarry",
        href: "https://www.youtube.com/watch?v=O4Xf5ZqRXYs&t=76s",
      },
    ],
  },
  {
    text: "Teaching percussion, drums, and theory/composition at Sing Sing Correctional Facility with the nonprofit Musicambia and Carnegie Hall's Musical Connections Program.",
  },
  {
    text: "Co-founding Fifth Wall Performing Arts with collaborators Grey Grant and Maya Johnson, which so far has produced a full adaptation of Phillip Glass and Robert Wilson's Einstein on the Beach in Karl’s living room; Michigan and New York premieres of Grey’s folk-opera, Michigan Trees: a Guide to the Trees of Michigan and the Great Lakes Region (for which Karl served as Dramaturg, Director, and Music Director); the yearly FLUXUS FEST series; Black Hearts, Black Voices, Maya Johnson's audio storytelling show about love and Blackness; and the Michigan and NYC premieres of Karl's The Precipice, a 100-minute chamber-rock opera about irreversible change.",
    links: [
      {
        label: "Fifth Wall Performing Arts",
        href: "http://fifthwallperformingarts.com/",
      },
      {
        label: "Einstein on the Beach",
        href: "https://www.youtube.com/watch?v=RtA79lg2VuY",
      },
      {
        label: "Michigan Trees: a Guide to the Trees of Michigan and the Great Lakes Region",
        href: "https://www.youtube.com/watch?v=WO4SUttyfZ4",
      },
      { label: "FLUXUS FEST", href: "https://youtu.be/llSfN4BBQnM" },
      {
        label: "Black Hearts, Black Voices",
        href: "https://www.youtube.com/watch?v=JD_TipsGw8s",
      },
      {
        label: "NYC premieres",
        href: "https://www.contemporaneous.org/projects-imagination/the-precipice",
      },
      {
        label: "The Precipice",
        href: "https://www.youtube.com/watch?v=Nj1MURb-tSQ",
      },
    ],
  },
  {
    text: "Developing a system for Micro-rhythmic composition using a program he wrote in SuperCollider and Ableton Live, which has led so far to collaborations with artists such as Elliot Cole and Jason Treuting.",
    links: [{ label: "Micro-rhythmic composition", href: "/microrhythms" }],
  },
  {
    text: "Researching weird and wild stories in music history for Jad Abumrad of Radiolab.",
  },
  {
    text: "Inventing the Snaxophone, a feedback-based instrument built from a Pringles can, with which he frequently butchers Bach cello suites and improvises.",
    links: [{ label: "Snaxophone", href: "/multimedia-performance" }],
  },
  {
    text: "Being selected to participate in the first-ever National Youth Orchestra of the United States of America in 2013, which performed at the Lincoln Center, the Moscow Conservatory, the Mariinsky Theater, and the BBC Proms, under the baton of Valery Gergiev and with soloist Joshua Bell.",
  },
  {
    text: "Presenting Music at the Close at Carnegie Hall in November 2019, for which Karl was an improvising performer, composer, and music director. Music at the Close was a deconstructed re-interpretation of Shakespeare’s Richard II, featuring directors from the Lincoln Center Theater Directors’ Lab, 35 performers, 10 composers, six actors, and an improvising band.",
  },
  {
    text: "Premiering his composition Bahnhoffnung (which tells the story of his grandfather’s escape from East Germany to pursue his education) at a concert at the German Consulate General in New York City, celebrating the 30th anniversary of the fall of the Berlin Wall.",
    links: [
      {
        label: "Bahnhoffnung",
        href: "https://www.youtube.com/watch?v=83FjKiEEhu8&t=185s",
      },
    ],
  },
  {
    text: "Working frequently with events in Carnegie Hall’s Education Wing and performing as a percussionist in their LinkUp Orchestra.",
  },
  {
    text: "Winning the 2017 Brehm Prize in Instrumental Composition, for which Karl’s wind ensemble piece, blue-green, was premiered by the University of Michigan Symphony Band in September 2017.",
    links: [
      {
        label: "blue-green",
        href: "https://www.youtube.com/watch?v=CYKA3obqPCA",
      },
    ],
  },
];

export const aboutCloser =
  "Finally, some biographical info: Karl is a dual German-American citizen who grew up in the Seattle area, after which he went to the University of Michigan for his Bachelor's in Percussion Performance and completed his Master's Degree in Music Composition at the Mannes School of Music in New York City with Missy Mazzoli.";
