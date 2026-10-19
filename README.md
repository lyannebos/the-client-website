# The Client - Website

Ontwerp en maak een website voor een opdrachtgever en bespreek het resultaat tijdens de Sprint Review.

De instructie van deze leertaak staan in de [WIKI](https://github.com/fdnd-task/the-client-website/wiki)

Live website: lyannebos.github.io/the-client-website/tekenmethodes.html

## Inhoudsopgave Readme
  * [intro] (#intro)
  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Intro
Opdrachtgever: Charley Muhren, Dilia Porcelijn

Charley wil een platform waar studenten en docenten 
tekenmethodes kunnen vinden om hun (reflectieve) vakproces visueel te maken. 
Oud studenten Dilia had voor haar eindproject een uitgewerkte design gemaakt voor de website 
Visual Thinking. Aan ons de vraag om die visie tot leven te maken.


## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->
De pagina Tekenmethodes laat een overzicht zien van tekenmethodes binnen een categorie, zoals "Leren over jezelf en Reflecteren".

Wat je op de pagina vindt:

- Header met logo, hoofdmenu, zoeken, account, favorieten en de knop "Materiaal indienen"
- Hamburgermenu op mobiel, dat van rechts in- en uitschuift
- Breadcrumb, zodat je ziet waar je bent op de site
- Zoekveld om een tekenmethode te zoeken
- Filters per categorie, die op mobiel horizontaal scrollen
- Grid met tekenmethodes, met een video bovenaan
- Paginering en een footer met socials en links

Mobiel:
![Mobiele versie](assets/Scherm­afbeelding%202026-10-07%20om%2011.47.38.png.png)
![Mobiele versie menu](assets/Scherm­afbeelding%202026-10-07%20om%2011.52.14.png)

Desktop:
![Desktop versie](assets/Scherm­afbeelding%202026-10-07%20om%2012.48.35.png)

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->

HTML
Semantische HTML: header, nav, main, section en footer
Echte <button>-elementen voor knoppen en een <label> bij het zoekveld
Icoontjes met betekenis hebben een alt-tekst (bijvoorbeeld "Zoeken", "Account"). Decoratieve icoontjes naast tekst hebben alt="", zodat ze niet dubbel worden voorgelezen
Bewust zo weinig mogelijk ARIA gebruikt, volgens de eerste regel van ARIA: gebruik eerst gewone HTML als die bestaat
De huidige pagina in de breadcrumb en paginering heeft class="active"
"Materiaal indienen" staat twee keer in de HTML: één keer in het menu (voor mobiel) en één keer in de header (voor desktop). Met CSS wordt steeds de versie verborgen die je niet nodig hebt

CSS
Custom properties in :root voor fonts en kleuren, zodat je een kleur of font op één plek kunt aanpassen
Fonts: Rigid Square voor de titels (via Adobe Fonts) en Yrsa voor de tekst (via Google Fonts)
Mobile first: eerst de mobiele versie, daarna een media query voor desktop vanaf 60em
Flexbox in de header. Het logo heeft margin-right: auto, waardoor de icoontjes naar rechts worden geduwd
Hamburgermenu: het menu staat met position: fixed over de pagina en wordt met translate: 100% buiten beeld geschoven. Met transition schuift het in en uit
Bekend: het menu schuift kort als je het venster versmalt

Het menu heeft op mobiel een transition, zodat het netjes in- en uitschuift. Als je het browservenster versleept van desktop naar mobiel, verandert translate van unset naar 100%. De browser ziet dat ook als een verandering en animeert die, waardoor je het menu kort ziet wegschuiven.

Ik kan dit weghalen door de transition alleen op het open menu (.is-open) te zetten, maar dan verdwijnt het menu bij het sluiten in één keer. Ik heb gekozen voor een animatie bij openen én sluiten, omdat gewone bezoekers hun venster bijna nooit verslepen.

JavaScript
Het hamburgermenu werkt met JavaScript:

Het script zoekt de menuknop (.menu-button) en het menu (.hoofdmenu) op
De knop luistert naar een klik
Bij een klik wordt de class is-open op het menu aan- of uitgezet met classList.toggle()

In CSS zorgt is-open ervoor dat het menu in beeld schuift en dat het hamburgericoon een kruisje wordt.

Nog niet af

De zoek-, sorteer- en filterknoppen doen nog niets. Daar is JavaScript voor nodig in een volgende sprint
Links met href="#" gaan naar pagina's die nog niet bestaan
De dropdowns bij Oefenen en Verdiepen moeten nog gemaakt worden


Bronnen
First Rule of ARIA: Don't Use ARIA – CODE Magazine
Class selectors – MDN
Aligning items in a flex container – MDN
Yrsa – Google Fonts
CSS Challenge 5 Positions


## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
