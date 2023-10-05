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
  Home pagina Desktop
  <img src="readme-images/homePagina_sns.png" width="375px" alt="Home pagina van sns desktop">

   Home pagina Mobiel (elementen)
  <img src="readme-images/snsHomeSmall1.png" width="375px" alt="Home pagina elementen van sns mobiel">
  <img src="readme-images/snsHomeSmall2.png" width="375px" alt="Home pagina elementen van sns mobiel">
  <img src="readme-images/snsHomeSmall3.png" width="375px" alt="Home pagina elementen van sns mobiel">
  <img src="readme-images/snsHomeSmall4.png" width="375px" alt="Home pagina elementen van sns mobiel">
  <img src="readme-images/snsHomeSmall5.png" width="375px" alt="Home pagina elementen van sns mobiel">

  #### Screenshot(s) van de tweede pagina (small screen):
  Upcoming releases pagina Desktop
  <img src="readme-images/upcomingReleases_sns.png" width="375px" alt="Upcoming release pagina van sns desktop">

  Upcoming releases pagina Mobiel
  <img src="readme-images/snsUpcomingReleasesSmall1.png" width="375px" alt="Upcoming releases pagina van sns mobiel">

</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:

  Voiceover: De voice over doet het over het algemeen wel goed ik kan door de website heen, ook zie ik wat er wordt geselecteerd maar,
  de alt tekst van images die worden voorgelezen is niet heel volledig, vaak wordt er gewoon de tekst weergeven die onderaan de afbeelding  
  ook staat en is er geen skip to main content functie waardoor je door de gehele navigatie moet gaan en ook de uitklap navigatie.

  Content
  De taal die ze op de website gebruiken is niet complex.
  De buttons geven meestal aan wat het doet, als dat niet zo is kan je wel zien dat het een button is en dat je erop kan klikken.
  De links hebben ook een beschrijving wat het product is en waarop je komt wanneer je het aanklikt.
  
  Code
  Tijdens het valideren van de code kreeg ik 42 errors, 23 warnings en 48 info messaged, ook wanneer ik wat dieper in de code kijk
  zie ik wel dingen waaraan die niet voldoet zoals, de heading elements die niet overal zijn gebruikt of ze gebruiken het veel voor een      
  class, je kan de website wel bedienen met je keyboard alleen zie je niet waar je op dat moment bent dit maakt het dus minder toegankelijk. 
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
  Het kleuren contrast is goed, de tekst is soms wel aan de kleine kant en kan niet voor iedereen goed leesbaar zijn, de afbeeldingen blijft wel overal goed te zien alleen gebruiken ze in hun campagne tekst over een afbeelding dit is niet altijd goed leesbaar. 
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

  - Kijk ook vooral naar de originele website, als je bijv grid gebruikt kan je precies zien wat ze hebben gedaan en wat de textuur is.
  - sommige divs die je nu in je html hebt kan je aanpassen naar sections, dit is beter en kan je ook sections in sections zetten.
  - Om een afbeelding boven de tekst te zetten, zet je eerst op de parent de display:flex en dan op de children order.
  - In combinatie met media queries kan je de border op de afbeeldingen specifieker bepalen wanneer die schaalt.
  - Doormiddel van twee ul's te gebruiken in je nav kan je de twee verschillende menu's maken wanner de website van klein scherm naar groot scherm gaat of andersom. Als je scherm groter wordt dan zoveel pix etc. dan wordt de ene navigatie ingeschakeld en de andere uitgeschakeld, andersom dus ook. 

</details>






## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen 

  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

  Screenreader
  Screen reader werkt alleen staat er steeds bezocht link, uiteindelijk hebben we het nogmaals getest als incognito "prive op een browser zit" en dan worden de links niet als bezocht weergeven omdat ik de website al meerdere keren heb bezocht.
  Voor de rest gaat de screenreader door alles heen en kan je precies zien waar die op dat moment is doormiddel van :focus.

  Verbeteringen
  - Uit de test blijkt ook dat er vele dingen zijn verbetert, allereerst het valideren van de html pagina daar kreeg ik nu 0 errors.
  - Ook heb ik geprobeert om in de html zelf niet al te veel classes/divs/javascript te gebruiken voor elk klein onderdeel 
    wat ze dus eerst wel hadden. 
  - De headings die ik nu gebruik zijn nu ook echt gebruikt als headings met titels, om iets te introduceren en niet alleen voor classes. 
  - Ook worden er nu geen heading levels overgeslagen. 
  - Wanneer je nu met je keyboard door de website gaat kan je precies zien waar je bent, ik heb vooral ervoor gezorgd om de verschillende states zoals focus, hover van elementen aan te passen zodat het meer duidelijkheid geeft. Dit vergroot ook de toengangkelijkheid. 
  - De tekst heb ik nu vergroot, omdat het allereerst niet goed leesbaar was. 
  - Ook heb ik achter de tekst die in een afbeelding stond een background geplaatst zodat dit goed leesbaar blijft 
  en niet in de afbeelding wegvalt.
  - Er is een skip to main content toegevoegd, dit had de orginele website niet.
  - Er is een dark/light mode toegevoegd en een high contrast mode, die wordt automatisch ingeschakeld naar aanleiding van 
  de systeem instellingen van de gebruiker. Ook dit had de originele website niet
  - De alt tekst heb ik uitgebreider gemaakt, door ook bijv. de kleuren van de sneakers te plaatsen en vooral te beschrijven wat een persoon draagt, omdat het vaak over de kleding gaat.
  - Animaties hebben een reduced motion function en kunnen ook handmatig aan/uitgezet worden doormiddel van een button.
</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken

  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

  Deze week heb ik mij vooral beziggehouden met de laatste dingen in de algemene styling.
  Responsiveness wanneer het scherm bijvoorbeeld kleiner wordt dat sommige context wegvalt of juist andersom.
  dit heb ik gedaan met media quaries, wat ook nieuw voor mij was maar zodra ik snapte hoe het werkte ging dit vrij goed.
  <img src="readme-images/MediaQueries.png" width="375px" alt="Media Queries">

  De verschillende states voor elementen heb ik nu ook toegevoegd, ook heb ik gekeken of het goed werkt met het besturen doormiddel van 
  controls, of je bijvoorbeeld goed ziet op welk element je op dat moment bevindt en wat ik eraan kan doen om dit te verbeteren.
  Omdat de originele website dat niet overal duidelijk had weergeven.
  <img src="readme-images/States.png" width="375px" alt="States">

  Ook heb ik meer gekeken naar de alt tekst en dingen aangepast zodat de afbeelding duidelijker overkomt, hier heb ik bijvoorbeeld de kleuren beschreven of wat er in de afbeelding gebeurt.
  <img src="readme-images/Alttekst.png" width="375px" alt="States"

  De dingen die ik nog lastig vond was een onderdeel bij de animatie.
  Het maken van de animatie zelf ging wel goed, maar kreeg ik het steeds niet voor elkaar om de animatie "lopend" te maken 
  zodat die niet pas opnieuw afspeelt wanneer die het einde heeft bereikt en zo een lege ruimte creeert.  
  <img src="readme-images/Animatie.png" width="375px" alt="Animatie">

  Het maken van de nav, het is mij wel gelukt om de nav zo te laten veranderen van tekst naar icoontjes wanneer het scherm kleiner wordt.
  Maar wist ik niet wat ik moest doen wanneer de tekst in het uitklap menu bij mobiel ook anders was dan de desktop versie.
  Ook was het positioneren van de elementen in de nav soms lastig, vooral in het uitklap menu maar dit is uiteindelijk wel gelukt!

  Ik wist ook niet zo goed hoe ik moest beginnen aan de in/uitklap tekst zodra je op de button klikt.
  en hoe ze op de orginele website ook de style elementen bijvoorbeeld een fade in de tekst hebben toegepast.
  Dit was voor mij nog vrij nieuw.
  <img src="readme-images/snsUpcomingReleasesSmall1.png" width="375px" alt="In/Uitklap tekst en fade in tekst">



  ### Agenda voor meeting
  samen met je groepje opstellen

  Student 1 - Elisa
- Hoe krijg ik mijn menu hetzelfde als het origineel qua positie?
- Hoe wordt de footer grid hetzelfde uitgelijnd als de grid erboven en dat de 1e kolom 2 blokken overneemt?
- Hoe krijg ik de footerbottom goed onder elkaar bij de a en img?
- Hoe krijg ik de pijltjes gericht op bepaalde woorden doe ik dat met nth-child wordt het dan wel overzichtelijk?
- Hoe werkt dat/wat bedoelen ze met skip link als je de website met controls gebruikt?
- Er zit geen video/audio in mijn website hoe doe ik het toegankelijkheid stukje van media, valt dat dan weg?
- Moest ik in de nav wel nou 1 kopje uitwerken of was dit al goed?
- In upcomingreleases komt animatie eerst maar het is geen h1

  Student 2 - Zoë
- hoe maak ik h5 responsive?
- hoe krijg ik mn nav als enige wat in beeld blijft en dat het dan scrolbaar is?
- wat kan ik als beste gebruiken om een img in mn footer te hebben?
- voor die images moet de link om h3 en img heen en kan ik die dan gwn leeg laten?

  Student 3 - Lynn
- Hoe krijg je een werkende slideshow van images die in een grid staan?
- Hoe zet ik tekst op een goede manier op een image?
- Hoe krijg ik de h1 over mn grid?
- De tekst loopt door uit de image, hoe krijg ik het naar de volgende regel (white-space: normal werkt niet)
- Hoe doe je een searchbalk pop up, is dat hetzelfde als bij het hamburgermenu?
- Op welke manier kan ik een gap krijgen tussen linkjes in mn navbar zonder margin?
- Wanneer ik de screenreader aan zet op de officiële site leest ie ook het hamburgermenu op, 
  terwijl die niet uitgeklapt is. Hetzelfde voor de 2e html pagina




  ### Verslag van meeting 
  hier na afloop snel de uitkomsten van de meeting vastleggen

- Kijk nogmaals in je code of je voor sommige dingen geen class hoeft te gebruiken, 
  maar inplaats daarvan bijvoorbeeld :first-of-type, :last-of-type, :first-child, :nth-of-type etc.
- Voeg skip link toe aan je website.
- Prefers-reduced-motion toepassen en wat dat is.
- Als je geen video/audio hebt in je website, valt dat in je checklist weg.
- Als een element eerder komt dan de H1 maar geen H1 is, kan je dit op de goede volgorde zetten doormiddel van order
- Als je nav bij het kleine uitklap menu ook verandert, kan je nog een nav maken met ul li. Als die in beeld komt wordt de desktop nav 
gehided en zo ook anderom.

</details>



## Eindgesprek (week 5) 


<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  Home pagina Desktop
  <img src="readme-images/snsHomeDesk1eind.png" width="375px" alt="Home pagina desktop">
  <img src="readme-images/snsHomeDesk2eind.png" width="375px" alt="Home pagina desktop">
  <img src="readme-images/snsHomeDesk3eind.png" width="375px" alt="Home pagina desktop">

  Upcoming Releases pagina Desktop
  <img src="readme-images/snsUpcomingReleasesDesk1eind.png" width="375px" alt="upcoming releases pagina desktop">
  <img src="readme-images/snsUpcomingReleasesDesk2eind.png" width="375px" alt="upcoming releases pagina desktop">

  Home pagina Mobiel
  <img src="readme-images/snsHomeMobiel1eind.png" width="375px" alt="Home pagina mobiel">
  <img src="readme-images/snsHomeMobiel2eind.png" width="375px" alt="Home pagina mobiel">
  <img src="readme-images/snsHomeMobiel3eind.png" width="375px" alt="Home pagina mobiel">
  <img src="readme-images/snsHomeMobiel4eind.png" width="375px" alt="Home pagina mobiel">

  Upcoming Releases pagina Mobiel
  <img src="readme-images/snsUpcomingReleasesMobiel1eind.png" width="375px" alt="upcoming releases pagina mobiel">
  <img src="readme-images/snsUpcomingReleasesMobiel2eind.png" width="375px" alt="upcoming releases pagina mobiel">




  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  Ik heb tijdens het maken van de website heel veel nieuwe dingen geleerd zoals:
  Hoe mijn website responsive is.

  Ik heb vooral veel geleerd bij het maken van de nav, hoe het zich aanpast als het kleiner wordt en hoe het uitklap gedeelte werkt.
  <img src="readme-images/DesktopNav.png" width="375px" alt="Desktop Navigatie">
  <img src="readme-images/MobielNav.png" width="375px" alt="Mobiel Navigatie">
  <img src="readme-images/snsHomeMobiel4eind.png" width="375px" alt="Uitklap menu">

  Hoe ik de toegankelijkheid van mijn website kan verbeteren en wat daar allemaal bij komt kijken. 
  Bijvoorbeeld reduce motion, contrast, play/pauze knop voor animaties, skip link.
  Dit zijn allemaal dingen die ik eerder nog niet heb gebruikt, maar doormiddel van die kleine dingen die vrij simpel waren om uit te voeren heb ik de toegankelijkheid al een stuk meer verbetert dan het origineel.

  Werken met grid.

  Werken met media queries.

  Om met custom properties te werken, dit ging goed en vond ik het ook heel handig. 
  Vooral toen ik de dark/light mode & high contrast mode wou maken dit was ook iets wat nieuw voor mij was. 
  <img src="readme-images/customProperties.png" width="375px" alt="Custom properties & dark/light/highcontrast mode">

  Togglebutton waarbij de tekst in en uitklapt wanneer je op de button klikt, ik wist allereerst niet hoe ik hieraan moest beginnen
  en ook met het fade effect die ze hebben toegevoegd. Uiteindelijk met hulp is dit gelukt en weet ik hoe het werkt.
  <img src="readme-images/TekstIngeklapt.png" width="375px" alt="Tekst ingeklapt">
  <img src="readme-images/TekstUitgeklapt.png" width="375px" alt="Tekst uitgeklapt">

  Het plaatsen van symbolen/tekens achter een tekst.
  Allereerst dacht ik dat dit misschien ingewikkeld zou zijn, maar dit ging heel simpel doormiddel van after:: of before:: 
  en dan content: " "
  <img src="readme-images/tekensSymbolen.png" width="375px" alt="Tekens en symbolen toevoegen">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  Wat helaas nog niet is gelukt:
  De play&pause button heb ik nu onderaan de animatie, die wou ik liever naast de animatie. 
  Omdat ik het qua design mooier vindt, maar ook omdat het wat handiger lijkt.
  Maar met alles wat ik ook probeerde, bewoog de button mee met de animatie.
  <img src="readme-images/PlaybuttonHome.png" width="375px" alt="Play button home">
  <img src="readme-images/PlaybuttonUpcomingReleases.png" width="375px" alt="Play button Upcoming releases">

  Ook wou ik graag dat de animatie steeds doorloopt en niet helemaal naar het einde loopt een lege ruimte creeert
  en vervolgens opnieuw afspeelt. Ik heb hierbij heel veel dingen geprobeerd maar kwam ik er steeds niet uit.
  <img src="readme-images/Animatie.png" width="375px" alt="Animatie">

  Bij de shopping cart is het mij ook niet gelukt om een klein rondje bovenin te krijgen. Ook als ik meer tijd had wou ik er
  misschien een interactie op plaatsen wanneer je iets toevoegd, dat het cijfer dan verandert.
  <img src="readme-images/ShoppingcartInteractie.png" width="375px" alt="Shopping Cart Interactie en vormgeving">

  Wat ik tijdens het proces soms nog wel moeilijk vond maar wat wel was gelukt is de nav, werken met grid, wanneer het scherm bijvoorbeeld kleiner wordt dat het dan verandert naar 2 rijen en wanneer het groter wordt verandert naar 4 bijvoorbeeld.

  Als ik nog meer tijd had, zou ik ook nog gaan kijken naar de kleine details. 
  Bijvoorbeeld dat de onderste lijnen gelijk zijn uitgelijnd met de footer, dat er aan de zijkant van sommige sections die border gebruiken geen border is, Countdown toevoegen aan de upcoming releases en zou ik willen kijken hoe ik ook het menu kan uitklappen bij desktop als je over de opties hovert. Zie afbeeldingen:
  <img src="readme-images/UitklapDesktop.png" width="375px" alt="Uitklap menu desktop">
  <img src="readme-images/Uitlijning.png" width="375px" alt="Uitlijning met footer">
  <img src="readme-images/Countdown.png" width="375px" alt="Countdown bij upcoming releases">

</details>



## Bronnenlijst 

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. Auto-fit in .bloggrid
  https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/

  2. Flexbox properties - flexbox elementen
  https://css-tricks.com/snippets/css/a-guide-to-flexbox/

  3. Icons in menubar
  https://fonts.google.com/icons?icon.platform=web

  4. Carrousel - homepage new arrivals
  DLO - Werkgroep 4
  
  5. Grid - grid elementen
  DLO - Werkgroep 3 

  6. Nav mee laten scrollen over de pagina heen - Chatgpt
  Om de navigatie (nav) mee te laten scrollen met de pagina, kun je gebruik maken van CSS. Dit wordt vaak gedaan door de position: 
  
  fixed; eigenschap te gebruiken. Hier is een eenvoudige stap-voor-stap uitleg:
  position: fixed;: Hiermee wordt het element gefixeerd op de positie ten opzichte van het venster. In dit geval wordt het aan de bovenkant van het venster vastgezet.
  top: 0;: Zorgt ervoor dat de bovenkant van het element op de bovenkant van het venster blijft.
  width: 100%;: Zorgt ervoor dat de navigatie de volledige breedte van het venster beslaat.

  7. Tekst in animation 
  De tekst blijft wrappen, maar ik wil dat alles op 1 lijn blijft hoe doe ik dat? - Chatgpt
  Als je wilt voorkomen dat de tekst binnen de elementen gaat wrappen bij het schalen, kun je de eigenschap white-space gebruiken. Je kunt deze instellen op nowrap, wat ervoor zorgt dat de tekst op één regel blijft staan, zelfs als dit betekent dat de tekst buiten de zichtbare grenzen van het element gaat.

  8. Links in footer 
  Links openen in een nieuwe window en hoe je dat informeert aan de gebruiker.
  https://medium.com/@svinkle/why-let-someone-know-when-a-link-opens-a-new-window-8699d20ed3b1

  9. Skip link
  https://www.w3schools.com/accessibility/accessibility_skip_links.php

  10. Play & pause button with images 
  ChatGpT

  11. Dark/light mode & hight contrast mode
  DlO - week 4 - werkgroep 8

  12. Visually Hidden
  https://www.a11yproject.com/posts/how-to-hide-content/

  13. Skip Link
  https://www.w3schools.com/accessibility/accessibility_skip_links.php

  14. Nav menu
  DLO - Werkgroep 5 - JS 3-stap - Responsive burgers
</details>