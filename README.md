\# Vegan Quartett Rating



Eine kleine Astro-Webseite, um Veganismus-Argumente in drei Kategorien zu bewerten:



\- Verbreitung

\- Komplexität

\- Trigger



\## Projekt starten



npm install

npm run dev



Danach läuft die Seite lokal unter einer Astro-Dev-URL, normalerweise etwa:

http://localhost:4321



\## Struktur



src/

\- data/

\- lib/

\- layouts/

\- pages/

\- styles/



\## Aktueller Stand



Die App kann aktuell:



\- zufällige Argument/Kategorie-Kombinationen anzeigen

\- Bewertungen per Slider annehmen

\- „kenne ich nicht“ und „überspringen“ speichern

\- Rohdaten im Admin-Bereich anzeigen

\- CSV exportieren



\## Wichtiger Hinweis



Im aktuellen Stand werden Antworten nur im Speicher gehalten, also nicht dauerhaft gespeichert.

Nach einem Neustart des Dev-Servers sind die Daten weg.



Später kann `src/lib/db.ts` z. B. durch Supabase ersetzt werden.



\## Seiten



\- `/` → Startseite

\- `/rate` → Bewertungsseite

\- `/admin` → Admin-Bereich

\- `/admin/responses` → Rohdaten

\- `/admin/scores` → Zusammenfassungen

\- `/api/export-csv` → CSV-Export



\## Nächste sinnvolle Schritte



1\. echte Datenbank anbinden

2\. Mehrfachbewertungen pro Session besser steuern

3\. Admin-Bereich schützen

4\. finale Score-Berechnung ergänzen

