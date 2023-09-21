# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Elisa Zhao

  #### Je startniveau:
  Rood

  #### Je focus:
  Responsive
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  https://www.sneakersnstuff.com

  #### Screenshot(s) van de eerste pagina (small screen): 
  Home pagina  
  <img src="readme-images/homePagina_sns.png" width="375px" alt="Home pagina van sns">

  #### Screenshot(s) van de tweede pagina (small screen):
  Upcoming releases pagina 
  <img src="readme-images/upcomingReleases_sns.png" width="375px" alt="Upcoming release pagina van sns">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:

  Content
  De taal die ze op de website gebruiken is niet complex.
  De buttons geven meestal aan wat het doet, als dat niet zo is kan je wel zien dat het een button is en dat je erop kan klikken.
  De links hebben ook een beschrijving wat het product is en waarop je komt wanneer je het aanklikt.
  
  Code
  De globale code is allereerst wel goed, wanneer ik wat dieper in de code kijk
  zie ik wel enkele dingen waaraan die niet voldoet zoals, de heading elements die niet overal zijn gebruikt, de meeste images hebben geen alt tekst, ook kan je de website niet bedienen met je keyboard waardoor het minder toegankelijk is. 
  In de code zelf wordt er vooral veel gebruik gemaakt van vele classes, divs en javascript zelfs voor de kleinste dingen.

  Mobiele ervaring
  De mobiele ervaring van de website is wel goed, je hebt de mogelijkheid om de website te draaien, de horizontale scroll gaat weg, de buttons and links zijn qua grote goed en het scroll gebied is goed. 

  Video & Audio
  Ze maken vrij weinig gebruik van video/audio wanneer dat wel wordt gedaan speelt het niet automatisch af en heb je de mogelijkheid om het te stoppen, maar is er geen mogelijkheid voor ondertiteling. 

  Controls
  Ze maken gebruik van een a element voor linkjes.
  De links zijn niet zo snel te herkennen als links. 
  Alleen pas wanneer je er overheen hovert met je muis, dan worden ze onderlijnt maar ook dit is niet altijd het geval.
  Daarnaast maken ze geen gebruik van een focus state als je het probeert te bedienen met je keyboard. 
  De buttons die worden weergeven zijn gemaakt met een button element, wel merk ik dat sommige links gestyled zijn als een button.

  Animatie 
  Ze maken wel gebruik van een animatie, dit is niet storend en speelt het niet te snel af je hebt hierbij niet de mogelijkheid om het stop te zetten.

  Uiterlijk
  Ze ondersteunen geen dark&light mode, de kleuren zijn vooral zwart/wit alleen de afbeeldingen niet maar in de beschrijving weergeven ze altijd de kleur van het item. Daardoor is de website niet perse afhankelijk van de kleur.
  Het contrast kan je altijd aanpassen, de tekst kan je ook vergroten en schaalt de website meteen mee. 
  De tekst is op sommige delen van de website wel aan de kleine kant, dit is niet voor iedereen goed leesbaar.

  Contrast
  Het kleuren contrast is goed, de tekst en afbeeldingen blijven overal goed leesbaar. 
</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina + dynamisch deel: 
  <img src="readme-images/homepageBreakdown.jpg" width="375px" alt="breakdown van de home pagina + dynamisch deel">

  ### Upcoming releases pagina: 
  <img src="readme-images/upcomingreleasesBreakdown.jpg" width="375px" alt="breakdown van de upcoming releases pagina">
</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken 
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

  Deze week heb ik mij vooral bezig gehouden met het opzetten van een basis in de html, dit verliep vrijwel goed
  alleen twijfelde ik bij sommige onderdelen welke heading ik moest gebruiken en of ik voor iets wel een ul kon gebruiken.

  Bij het menu vind ik het nog lastig wat ik in de html moet zetten, want wanneer de website op mobiel scherm staat is de nav anders 
  dan dat die op desktop scherm staat. Ik heb allereerst beide uitgewerkt, maar zal ik later nog vragen hoe ik dit precies moet doen.
  <img src="readme-images/navcode.png" width="375px" alt="code van het nav element">

  Ik heb ook gewerkt aan het menu met css alleen kwam ik er later achter dat die nog helemaal niet responsive is en dus niet meeschaalt. 
  Daar moet ik dus nogmaals naar kijken!
  <img src="readme-images/menuhompage.png" width="375px" alt="code van het nav element">

  Voor deze week ben ik niet echt tevreden met mijn voortgang, ik heb alleen nog maar aan html gewerkt voor maar 1 pagine en ook weinig aan de css. Dit moet ik voor de volgende voortgang zeker inhalen! Dan wil ik tenminste klaar zijn met beide html's en een groot deel van beide css's hebben. 

  ### Agenda voor meeting
  samen met je groepje opstellen

  Student 1 - Elisa
  Wat moet er met javascript gedaan worden?
  Hoe uitgebreid moet de alt tekst zijn?
  Gebruik van sections, articles
  Hoe werkt de nav als die zich aanpast wanneer je het scherm responsive maakt?

  Student 2 - Zoë
  Hoe krijg ik de tekst ook responsive?
  Kan ik 2 ul lists in een menu plaatsen?

  Student 3 - Lynn
  Hoe krijg ik alleen de h1 responsive?
  Wanneer het scherm van mobiel naar laptop gaat, komt er een onderdeel bij in het menu. Hoe hebben ze dit gedaan?


  ### Verslag van meeting 
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Let op de structuur van je pagina.
    In de website wordt er veel gebruik gemaakt van een section > heading > ul > li > soms nog een article met daarin een heading en p 
  
  - Voeg nog enkele dingen toe in de meta van de html

  - Plaats een h2 heading bij een section, dit kan je later hiden maar dan wordt die wel voorgelezen door de voice over.
    Zo weet de gebruiker waar de section over gaat.
  
  - Kijk goed Wanneer het binnen de header valt, meestal zijn dit onderdelen die niet veranderen wanneer je naar een andere pagina gaat. 
</details>







## Voortgang 2 (week 3)

<details> 
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken 
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

  Ik heb deze week vooral verder gewerkt aan de css van mijn website
  Wat goed ging was het werken met grid, dit was aan het begin veel uitproberen maar uiteindelijk is het toch gelukt. 
  Het lastige was nog wel de blog posts onderaan de pagina responive krijgen en in combinatie met grid, dit is uiteindelijk wel 
  gelukt met hulp van de studentasisstenten.
  <img src="readme-images/voortgang2codegrid.png" width="375px" alt="code van responsive maken van de blog posts">
  <img src="readme-images/voortgang2grid.png" width="375px" alt="website blog posts">
  <img src="readme-images/voortgang2gridklein.png" width="375px" alt="website blog posts kleiner scherm">

  Flexbox ging ook goed, dit heb ik toegepast op deels de footer en de carrousel, dit is ook de eerste keer dat ik een carrousel 
  heb gemaakt en dit ging vrij snel en simpel!
  <img src="readme-images/carrousel.png" width="375px" alt="carrousel op de homepagina">
  <img src="readme-images/carrouselcode.png" width="375px" alt="code van de carrousel">
  
  Daarnaast heb ik ook verder gewerkt aan styling van de verschillende elementen zoals 
  emoji's toevoegen (dit heb ik nieuw geleerd), teksten etc.
  maar moet ik nog wel wat dingen doen zoals animaties, borders, witruimtes om het geheel af te maken. 
  Ik heb ook geprobeerd om de afbeeldingen eerst te krijgen inplaats van de tekst, dit heb ik gedaan met flexbox > order:1; bijv.
  maar lukt dit telkens niet. 

  Ook heb ik geprobeerd om de tekst te verschuiven en juist te krijgen, maar lukte het niet om die responsive te krijgen.
    <img src="readme-images/responsivetekst.png" width="375px" alt="tekst is niet responsive bij de campaignheader">

  Ik ben deze week tevreden met de vooruitgang van mijn website en lijkt die al veel meer op het origineel, wel moet ik nog veel werken aan de styling van sommige elementen en mij meer focussen op 1 deel van de website en daarna pas verder gaan naar de volgende.


  ### Agenda voor meeting
  samen met je groepje opstellen

  Student 1 - Elisa
  Ik heb nu div’s gezet om de verschillende “kopjes” in de footer, mag dat? Of moet ik er sections van maken? <!-- ! -->
  Moet ik in de footer na de section ook een H2 zetten met een titel?
  Moet ik werken met meerdere css bestanden?
  Hoe krijg ik aan de linkerkant van de scherm geen border? Maar tussen de afbeeldingen wel?
  Hoe verander ik de style wanneer ik op het invulveld van een forum klik?
  Hoe krijg ik in de footer de laatste afbeelding eronder wanneer het scherm kleiner wordt? 
  Hoe zorg ik ervoor dat de tekst in de campaign header ook responsive wordt? 
  Hoe zorg ik ervoor dat ik allereerst het plaatje zie en dan pas de tekst? Doe ik dat met order? <!-- ! -->
  Van een volledig menu naar icoontjes en dat de style verandert, hoe werkt dat? <!-- ! -->

  Student 2 - Zoë
  Is het handig om flexbox te gebruiken of is left and bottom beter?
  Mag padding gebruikt worden?
  Wanneer ik hover zoom heb op een image, hoe zorg ik dat die tekst hetzelfde blijft?
  @fontface werkt niet?
  Hoeveel javascript moet je hebben?
  Is vijf witregels in css een must of mag je het zelf weten?
  Wanneer ik position relative en absolute gebruik op tekst komt de tekst in elkaar, wat is een goede manier om dit te fixen?

  Student 3 - Lynn
  Hoe doe je een searchbalk pop up?
  Waarom werkt flexbox niet meer wanneer ik position relative gebruik?
  Mag top/bottom etc. wel?
  Hoe werkt het met de font?
  Hoe krijg je een responsive slideshow van images?
  Mag je bij tekst die over images staan left en right etc. gebruiken?
  Hoe krijg ik de titels korter (om vormgeving redenen) wanneer het scherm kleiner wordt?

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
- ...

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst <!-- dit moet nog -->

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. Auto-fit in .bloggrid
  https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/

  2. Flexbox properties
  https://css-tricks.com/snippets/css/a-guide-to-flexbox/

  3. Icons in menubar
  https://fonts.google.com/icons?icon.platform=web

  4. Carrousel - homepage new arrivals
  DLO - Werkgroep 4
  
  5. grid - homepage blog posts 
  DLO - Werkgroep 3 

</details>