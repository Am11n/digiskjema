# Digiskjema UI-fix: Designsystemet faktisk aktivt

## Problem
UI ser ut som ren HTML uten Designsystemet-styling.
Qoder påstår at komponenter og tema er integrert, men skjermbildet viser standard browser-stiler.

## Mål
Alle sider skal bruke Digdir Designsystemet (theme + komponenter).
Appen skal ha fast app-shell: header, sidebar, main content.
Ingen emoji-ikoner.

## 1) Rask verifisering (må gjøres først)
1. Åpne DevTools.
2. Søk i loaded CSS etter `@digdir/designsystemet-css`.
3. I Elements, sjekk `computed` på en knapp.
   - Hvis den ser ut som browser default, er Designsystemet ikke lastet.
4. Legg midlertidig inn én Designsystemet Button på en side.
   - Hvis den fortsatt ser ut som browser default, er CSS/theme ikke aktiv.

Output fra denne verifiseringen skal skrives i commit-melding eller i PR-beskrivelse.

## 2) Installer og last CSS og theme globalt
Krav:
- `@digdir/designsystemet-css` skal importeres i global stylesheet eller root layout.
- Theme skal lastes før komponenter.

Oppgave:
- Finn root entry:
  - Next App Router: `app/layout.tsx` + `app/globals.css`
  - React/Vite: `main.tsx` + `index.css`
- Legg inn globale imports:

```css
@import "@digdir/designsystemet-css/theme";
@import "@digdir/designsystemet-css";
Akseptanse:

Body får tydelig endret typografi og spacing.

Knapper endrer stil uten lokale className-hacks.

3) Bygg AppShell (header + sidebar + main)
Oppgave:

Lag AppShell.tsx og bruk det på alle sider.

Layout:

Header øverst (sticky)

Sidebar venstre (fast på desktop)

Main content med maks bredde og god padding

Krav:

Sidebar skal ikke være en <ul> med bullets.

Ingen emoji. Bruk tekst, og evt. ikonbibliotek som passer Designsystemet hvis tilgjengelig.

Akseptanse:

Menyen ser ut som ekte navigasjon, ikke liste.

Aktiv side er tydelig markert.

På mobil blir sidebar en drawer.

4) Bytt ut HTML controls med Designsystemet-komponenter
For siden "Skjemaoversikt":

Søk og filter
Bytt <input> til DS Textfield

Bytt <select> til DS Select

Tabell
Bruk DS Table-komponent hvis tilgjengelig.

Hvis ikke: behold <table> men style med DS tokens og riktig spacing.

Legg inn:

Sticky header

Row hover

Align på kolonner

Handlinger som Button-group

Status
Status skal være Badge/Tag, ikke plain tekst.

Akseptanse:

Input, select, buttons og badges ser ut som én helhet.

Handlingsknapper har riktig hierarki:

Primær: Åpne

Sekundær: Rediger

Tertiær: Dupliser

Danger: Arkiver, Slett

5) Fjern alt som bryter uttrykket
Oppgave:

Fjern emoji-ikoner i sidebar.

Fjern browser-default margins ved å sette layout-spacing i AppShell.

Fjern tilfeldige “gradient accents” før basis sitter.

Først standard Designsystemet.

Så kan du legge på pynt.

Akseptanse:

Ingen emoji i UI.

Alt er konsistent og rolig.

6) Definisjon av ferdig
Designsystemet CSS og theme er lastet globalt.

Alle sider bruker AppShell.

Skjemaoversikt har DS-komponenter for input, select, button, status.

Sidebar er responsiv og har aktiv state.

UI ser lik ut i Chrome, Safari og Edge.

Leveransekrav
Commit 1: “Enable Designsystemet theme globally”

Commit 2: “Add AppShell layout”

Commit 3: “Refactor Skjemaoversikt to DS components”

Screenshots før/etter i PR.

bash
Copy code

Hvis Qoder faktisk hadde gjort det den påstår, ville du sett det umiddelbart.

Når CSS/theme er riktig lastet, endrer hele appen uttrykk uten at du trenger å “style” hver eneste ting manuelt.
::contentReference[oaicite:0]{index=0}