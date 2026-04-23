export const metrics = [
  {
    id: "verbreitung",
    name: "Verbreitung",
    question:
      "Wie häufig begegnet dir dieses Argument in Gesprächen, Kommentaren oder Debatten über Veganismus?",
    leftLabel: "selten",
    rightLabel: "sehr oft",
  },
  {
    id: "komplexitaet",
    name: "Komplexität",
    question:
      "Wie viel Fachwissen oder Hintergrundwissen braucht man, um dieses Argument wirklich fundiert zu beantworten?",
    leftLabel: "eher simpel",
    rightLabel: "sehr tiefgehend",
  },
  {
    id: "trigger",
    name: "Trigger",
    question:
      "Wie emotional aufgeladen ist dieses Argument typischerweise für die Person, die es bringt?",
    leftLabel: "eher sachlich",
    rightLabel: "stark emotional",
  },
] as const;