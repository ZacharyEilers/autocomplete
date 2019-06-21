var searchInput = $("input");
var searchContainer = $("#suggestions-container");
var fadeDuration = 300;

const propsToSortBy = [];

var itemsToMatch = [
    "Grace eats lasagna",
    "Caleb loves eating",
    "Zachary loves tacos"
];

var correspondingData = [];

const babyGirlNames = ["Emma","Olivia","Ava","Sophia","Isabella","Mia","Charlotte","Abigail","Emily","Harper","Amelia","Evelyn","Elizabeth","Sofia","Madison","Avery","Ella","Scarlett","Grace","Chloe","Victoria","Riley","Aria","Lily","Aubrey","Zoey","Penelope","Lillian","Addison","Layla","Natalie","Camila","Hannah","Brooklyn","Zoe","Nora","Leah","Savannah","Audrey","Claire","Eleanor","Skylar","Ellie","Samantha","Stella","Paisley","Violet","Mila","Allison","Alexa","Anna","Hazel","Aaliyah","Ariana","Lucy","Caroline","Sarah","Genesis","Kennedy","Sadie","Gabriella","Madelyn","Adeline","Maya","Autumn","Aurora","Piper","Hailey","Arianna","Kaylee","Ruby","Serenity","Eva","Naomi","Nevaeh","Alice","Luna","Bella","Quinn","Lydia","Peyton","Melanie","Kylie","Aubree","Mackenzie","Kinsley","Cora","Julia","Taylor","Katherine","Madeline","Gianna","Eliana","Elena","Vivian","Willow","Reagan","Brianna","Clara","Faith","Ashley","Emilia","Isabelle","Annabelle","Rylee","Valentina","Everly","Hadley","Sophie","Alexandra","Natalia","Ivy","Maria","Josephine","Delilah","Bailey","Jade","Ximena","Alexis","Alyssa","Brielle","Jasmine","Liliana","Adalynn","Khloe","Isla","Mary","Andrea","Kayla","Emery","London","Kimberly","Morgan","Lauren","Sydney","Nova","Trinity","Lyla","Margaret","Ariel","Adalyn","Athena","Lilly","Melody","Isabel","Jordyn","Jocelyn","Eden","Paige","Teagan","Valeria","Sara","Norah","Rose","Aliyah","Mckenzie","Molly","Raelynn","Leilani","Valerie","Emerson","Juliana","Nicole","Laila","Makayla","Elise","Mariah","Mya","Arya","Ryleigh","Adaline","Brooke","Rachel","Eliza","Angelina","Amy","Reese","Alina","Cecilia","Londyn","Gracie","Payton","Esther","Alaina","Charlie","Iris","Arabella","Genevieve","Finley","Daisy","Harmony","Anastasia","Kendall","Daniela","Catherine","Adelyn","Vanessa","Brooklynn","Juliette","Julianna","Presley","Summer","Destiny","Amaya","Hayden","Alana","Rebecca","Michelle","Eloise","Lila","Fiona","Callie","Lucia","Angela","Marley","Adriana","Parker","Alexandria","Giselle","Alivia","Alayna","Brynlee","Ana","Harley","Gabrielle","Dakota","Georgia","Juliet","Tessa","Leila","Kate","Jayla","Jessica","Lola","Stephanie","Sienna","Josie","Daleyza","Rowan","Evangeline","Hope","Maggie","Camille","Makenzie","Vivienne","Sawyer","Gemma","Joanna","Noelle","Elliana","Mckenna","Gabriela","Kinley","Rosalie","Brynn","Amiyah","Melissa","Adelaide","Malia","Ayla","Izabella","Delaney","Cali","Journey","Maci","Elaina","Sloane","June","Diana","Blakely","Aniyah","Olive","Jennifer","Paris","Miranda","Lena","Jacqueline","Paislee","Jane","Raegan","Lyric","Lilliana","Adelynn","Lucille","Selena","River","Annie","Cassidy","Jordan","Thea","Mariana","Amina","Miriam","Haven","Remi","Charlee","Blake","Lilah","Ruth","Amara","Kali","Kylee","Arielle","Emersyn","Alessandra","Fatima","Talia","Vera","Nina","Ariah","Allie","Addilyn","Keira","Catalina","Raelyn","Phoebe","Lexi","Zara","Makenna","Ember","Leia","Rylie","Angel","Haley","Madilyn","Kaitlyn","Heaven","Nyla","Amanda","Freya","Journee","Daniella","Danielle","Kenzie","Ariella","Lia","Brinley","Maddison","Shelby","Elsie","Kamila","Camilla","Alison","Ainsley","Ada","Laura","Kendra","Kayleigh","Adrianna","Madeleine","Joy","Juniper","Chelsea","Sage","Erin","Felicity","Gracelyn","Nadia","Skyler","Briella","Aspen","Myla","Heidi","Katie","Zuri","Jenna","Kyla","Kaia","Kira","Sabrina","Gracelynn","Gia","Amira","Alexia","Amber","Cadence","Esmeralda","Katelyn","Scarlet","Kamryn","Alicia","Miracle","Kelsey","Logan","Kiara","Bianca","Kaydence","Alondra","Evelynn","Christina","Lana","Aviana","Dahlia","Dylan","Anaya","Ashlyn","Jada","Kathryn","Jimena","Elle","Gwendolyn","April","Carmen","Mikayla","Annalise","Maeve","Camryn","Helen","Daphne","Braelynn","Carly","Cheyenne","Leslie","Veronica","Nylah","Kennedi","Skye","Evie","Averie","Harlow","Allyson","Carolina","Tatum","Francesca","Aylin","Ashlynn","Sierra","Mckinley","Leighton","Maliyah","Annabella","Megan","Margot","Luciana","Mallory","Millie","Regina","Nia","Rosemary","Saylor","Abby","Briana","Phoenix","Viviana","Alejandra","Frances","Jayleen","Serena","Lorelei","Zariah","Ariyah","Jazmin","Avianna","Carter","Marlee","Eve","Aleah","Remington","Amari","Bethany","Fernanda","Malaysia","Willa","Liana","Ryan","Addyson","Yaretzi","Colette","Macie","Selah","Nayeli","Madelynn","Michaela","Priscilla","Janelle","Samara","Justice","Itzel","Emely","Lennon","Aubrie","Julie","Kyleigh","Sarai","Braelyn","Alani","Lacey","Edith","Elisa","Macy","Marilyn","Baylee","Karina","Raven","Celeste","Adelina","Matilda","Kara","Jamie","Charleigh","Aisha","Kassidy","Hattie","Karen","Sylvia","Winter","Aleena","Angelica","Magnolia","Cataleya","Danna","Henley","Mabel","Kelly","Brylee","Jazlyn","Virginia","Helena","Jillian","Madilynn","Blair","Galilea","Kensley","Wren","Bristol","Emmalyn","Holly","Lauryn","Cameron","Hanna","Meredith","Royalty","Sasha","Lilith","Jazmine","Alayah","Madisyn","Cecelia","Renata","Lainey","Liberty","Brittany","Savanna","Imani","Kyra","Mira","Mariam","Tenley","Aitana","Gloria","Maryam","Giuliana","Skyla","Anne","Johanna","Myra","Charley","Tiffany","Beatrice","Karla","Cynthia","Janiyah","Melany","Alanna","Lilian","Demi","Pearl","Jaylah","Maia","Cassandra","Jolene","Crystal","Everleigh","Maisie","Anahi","Elianna","Hallie","Ivanna","Oakley","Ophelia","Emelia","Mae","Marie","Rebekah","Azalea","Haylee","Bailee","Anika","Monica","Kimber","Sloan","Jayda","Anya","Bridget","Kailey","Julissa","Marissa","Leona","Aileen","Addisyn","Kaliyah","Coraline","Dayana","Kaylie","Celine","Jaliyah","Elaine","Lillie","Melina","Jaelyn","Shiloh","Jemma","Madalyn","Addilynn","Alaia","Mikaela","Adley","Saige","Angie","Dallas","Braylee","Elsa","Emmy","Hayley","Siena","Lorelai","Miah","Royal","Tiana","Elliot","Kori","Greta","Charli","Elliott","Julieta","Alena","Rory","Harlee","Rosa","Ivory","Guadalupe","Jessie","Laurel","Annika","Clarissa","Karsyn","Collins","Kenia","Milani","Alia","Chanel","Dorothy","Armani","Emory","Ellen","Irene","Adele","Jaelynn","Myah","Hadassah","Jayde","Lilyana","Malaya","Kenna","Amelie","Reyna","Teresa","Angelique","Linda","Nathalie","Kora","Zahra","Aurelia","Kalani","Rayna","Jolie","Sutton","Aniya","Jessa","Laylah","Esme","Keyla","Ariya","Elisabeth","Marina","Mara","Meadow","Aliza","Zelda","Lea","Elyse","Monroe","Penny","Lilianna","Lylah","Liv","Scarlette","Kadence","Ansley","Emilee","Perla","Annabel","Alaya","Milena","Karter","Avah","Amirah","Leyla","Livia","Chaya","Wynter","Jaycee","Lailah","Amani","Milana","Lennox","Remy","Zariyah","Clare","Hadlee","Kiera","Rosie","Alma","Kaelyn","Eileen","Jayden","Martha","Noa","Christine","Ariadne","Natasha","Emerie","Tatiana","Joselyn","Joyce","Salma","Amiya","Audrina","Kinslee","Jaylene","Analia","Erika","Lexie","Mina","Patricia","Dulce","Poppy","Aubrielle","Clementine","Lara","Amaris","Milan","Aliana","Kailani","Kaylani","Maleah","Belen","Simone","Whitney","Elora","Claudia","Gwen","Rylan","Antonella","Khaleesi","Arely","Princess","Kenley","Itzayana","Karlee","Paulina","Laney","Bria","Chana","Kynlee","Astrid","Giovanna","Lindsey","Sky","Aryanna","Ayleen","Azariah","Joelle","Nala","Tori","Noemi","Breanna","Emmeline","Mavis","Amalia","Mercy","Tinley","Averi","Aiyana","Alyson","Corinne","Leanna","Madalynn","Briar","Jaylee","Kailyn","Kassandra","Kaylin","Nataly","Amia","Yareli","Cara","Taliyah","Thalia","Carolyn","Estrella","Montserrat","Zaylee","Anabelle","Deborah","Frida","Zaria","Kairi","Katalina","Nola","Erica","Isabela","Jazlynn","Paula","Faye","Louisa","Alessia","Courtney","Reign","Ryann","Stevie","Heavenly","Lisa","Roselyn","Raina","Adrienne","Celia","Estelle","Marianna","Brenda","Kathleen","Paola","Hunter","Ellis","Hana","Lina","Raquel","Aliya","Iliana","Kallie","Emmalynn","Naya","Reina","Wendy","Landry","Barbara","Casey","Karlie","Kiana","Rivka","Kenya","Aya","Carla","Dalary","Jaylynn","Sariah","Andi","Romina","Dana","Danica","Ingrid","Kehlani","Zaniyah","Alannah","Avalynn","Evalyn","Sandra","Veda","Hadleigh","Paityn","Abril","Ciara","Holland","Lillianna","Kai","Bryleigh","Emilie","Carlee","Judith","Kristina","Janessa","Annalee","Zoie","Maliah","Bonnie","Emmaline","Louise","Kaylynn","Monserrat","Nancy","Noor","Vada","Aubriella","Maxine","Nathalia","Tegan","Aranza","Emmie","Brenna","Estella","Ellianna","Kailee","Ailani","Caylee","Zainab","Zendaya","Jana","Julianne","Ellison","Sariyah","Lizbeth","Susan","Alyvia","Jewel","Marjorie","Marleigh","Nathaly","Sharon","Yamileth","Zion","Mariyah","Lyra","Belle","Yasmin","Kaiya","Maren","Marisol","Vienna","Calliope","Hailee","Rayne","Tabitha","Anabella","Blaire","Giana","Milania","Paloma","Amya","Novalee","Harleigh","Ramona","Rhea","Aadhya","Miya","Desiree","Frankie","Sylvie","Jasmin","Moriah","Rosalyn","Kaya","Joslyn","Tinsley","Farrah","Aislinn","Halle","Madyson","Micah","Arden","Bexley","Ari","Aubri","Ayana","Cherish","Davina","Anniston","Riya","Adilynn","Ally","Amayah","Harmoni","Heather","Saoirse","Azaria","Alisha","Nalani","Maylee","Shayla","Briley","Elin","Lilia","Ann","Antonia","Aryana","Chandler","Esperanza","Lilyanna","Alianna","Luz","Meilani"];
const babyBoyNames = ["Noah","Liam","William","Mason","James","Benjamin","Jacob","Michael","Elijah","Ethan","Alexander","Oliver","Daniel","Lucas","Matthew","Aiden","Jackson","Logan","David","Joseph","Samuel","Henry","Owen","Sebastian","Gabriel","Carter","Jayden","John","Luke","Anthony","Isaac","Dylan","Wyatt","Andrew","Joshua","Christopher","Grayson","Jack","Julian","Ryan","Jaxon","Levi","Nathan","Caleb","Hunter","Christian","Isaiah","Thomas","Aaron","Lincoln","Charles","Eli","Landon","Connor","Josiah","Jonathan","Cameron","Jeremiah","Mateo","Adrian","Hudson","Robert","Nicholas","Brayden","Nolan","Easton","Jordan","Colton","Evan","Angel","Asher","Dominic","Austin","Leo","Adam","Jace","Jose","Ian","Cooper","Gavin","Carson","Jaxson","Theodore","Jason","Ezra","Chase","Parker","Xavier","Kevin","Zachary","Tyler","Ayden","Elias","Bryson","Leonardo","Greyson","Sawyer","Roman","Brandon","Bentley","Kayden","Ryder","Nathaniel","Vincent","Miles","Santiago","Harrison","Tristan","Declan","Cole","Maxwell","Luis","Justin","Everett","Micah","Axel","Wesley","Max","Silas","Weston","Ezekiel","Juan","Damian","Camden","George","Braxton","Blake","Jameson","Diego","Carlos","Ivan","Kingston","Ashton","Jesus","Brody","Emmett","Abel","Jayce","Maverick","Bennett","Giovanni","Eric","Maddox","Kaiden","Kai","Bryce","Alex","Calvin","Ryker","Jonah","Luca","King","Timothy","Alan","Brantley","Malachi","Emmanuel","Abraham","Antonio","Richard","Jude","Miguel","Edward","Victor","Amir","Joel","Steven","Matteo","Hayden","Patrick","Grant","Preston","Tucker","Jesse","Finn","Oscar","Kaleb","Gael","Graham","Elliot","Alejandro","Rowan","Marcus","Jeremy","Zayden","Karter","Beau","Bryan","Maximus","Aidan","Avery","Elliott","August","Nicolas","Mark","Colin","Waylon","Bradley","Kyle","Kaden","Xander","Caden","Paxton","Brian","Dean","Paul","Peter","Kenneth","Jasper","Lorenzo","Zane","Zion","Beckett","River","Jax","Andres","Dawson","Messiah","Jaden","Rhett","Brady","Lukas","Omar","Jorge","Riley","Derek","Charlie","Emiliano","Griffin","Myles","Brooks","Israel","Sean","Judah","Iker","Javier","Erick","Tanner","Corbin","Adriel","Jase","Jake","Simon","Cayden","Knox","Tobias","Felix","Milo","Jayceon","Gunner","Francisco","Kameron","Cash","Remington","Reid","Cody","Martin","Andre","Rylan","Maximiliano","Zander","Archer","Barrett","Killian","Stephen","Clayton","Thiago","Spencer","Amari","Josue","Holden","Emilio","Arthur","Chance","Eduardo","Leon","Travis","Ricardo","Damien","Manuel","Gage","Keegan","Titus","Raymond","Kyrie","Nash","Finley","Fernando","Louis","Peyton","Rafael","Phoenix","Jaiden","Lane","Dallas","Emerson","Cristian","Collin","Kyler","Devin","Jeffrey","Walter","Anderson","Cesar","Mario","Donovan","Seth","Garrett","Enzo","Conner","Legend","Caiden","Beckham","Jett","Ronan","Troy","Karson","Edwin","Hector","Cohen","Ali","Trevor","Conor","Orion","Shane","Andy","Marco","Walker","Angelo","Quinn","Dalton","Sergio","Ace","Tyson","Johnny","Dominick","Colt","Johnathan","Gideon","Julius","Cruz","Edgar","Prince","Dante","Marshall","Ellis","Joaquin","Major","Arlo","Alexis","Reed","Muhammad","Frank","Theo","Shawn","Erik","Grady","Nehemiah","Daxton","Atticus","Gregory","Matias","Bodhi","Emanuel","Jensen","Kash","Romeo","Desmond","Solomon","Allen","Jaylen","Leonel","Roberto","Pedro","Kason","Fabian","Clark","Dakota","Abram","Noel","Kayson","Malik","Odin","Jared","Warren","Kendrick","Rory","Jonas","Adan","Ibrahim","Trenton","Finnegan","Landen","Adonis","Jay","Ruben","Drew","Gunnar","Ismael","Jaxton","Kane","Hendrix","Atlas","Pablo","Zaiden","Wade","Russell","Cade","Sullivan","Malcolm","Kade","Harvey","Princeton","Skyler","Corey","Esteban","Leland","Derrick","Ari","Kamden","Zayn","Porter","Franklin","Raiden","Braylon","Ronald","Cyrus","Benson","Malakai","Hugo","Marcos","Maximilian","Hayes","Philip","Lawson","Phillip","Bruce","Braylen","Zachariah","Damon","Dexter","Enrique","Aden","Lennox","Drake","Khalil","Tate","Zayne","Milan","Brock","Brendan","Armando","Gerardo","Jamison","Rocco","Nasir","Augustus","Sterling","Dillon","Royal","Royce","Moses","Jaime","Johan","Scott","Chandler","Raul","Remy","Cason","Luka","Mohamed","Deacon","Winston","Albert","Pierce","Taylor","Nikolai","Bowen","Danny","Francis","Brycen","Jayson","Moises","Keith","Hank","Quentin","Kasen","Donald","Julio","Davis","Alec","Kolton","Lawrence","Rhys","Kian","Nico","Matthias","Kellan","Mathias","Ariel","Justice","Braden","Rodrigo","Ryland","Leonidas","Jerry","Ronin","Alijah","Kobe","Lewis","Dennis","Luciano","Ahmed","Frederick","Darius","Arjun","Dax","Asa","Nixon","Ezequiel","Eden","Tony","Landyn","Emmitt","Mathew","Kyson","Otto","Saul","Uriel","Colby","Dustin","Omari","Raphael","Brennan","Callen","Keaton","Arturo","Isaias","Roy","Kieran","Ty","Dorian","Cannon","Marvin","Cullen","Sage","Uriah","Darren","Cayson","Aarav","Case","Izaiah","Armani","Gustavo","Jimmy","Alberto","Duke","Rayan","Chris","Casey","Roland","Moshe","Curtis","Mauricio","Alonzo","Yusuf","Nikolas","Soren","Hamza","Jasiah","Alfredo","Devon","Jalen","Raylan","Edison","Jamari","Oakley","Samson","Lionel","Reece","Sam","Quincy","Jakob","Apollo","Kingsley","Ahmad","Bryant","Alvin","Trey","Mohammed","Conrad","Mitchell","Salvador","Quinton","Bo","Mohammad","Elian","Gianni","Lennon","Leonard","Douglas","Cassius","Ricky","Carl","Gary","Larry","Colten","Ramon","Kellen","Korbin","Wilson","Kylan","Santino","Niko","Issac","Jagger","Lance","Joe","Julien","Orlando","Jefferson","Memphis","Crosby","Mekhi","Nelson","Lucian","Ayaan","Nathanael","Neil","Makai","Finnley","Rex","Forrest","Layton","Randy","Boston","Tristen","Tatum","Brayan","Sylas","Thaddeus","Trent","Morgan","Roger","Abdullah","Casen","Maurice","Sincere","Titan","Kyree","Talon","Fletcher","Langston","Eddie","Briggs","Noe","Kamari","Rowen","Zeke","Aldo","Kaison","Valentino","Vihaan","Alden","Terry","Bruno","Canaan","Lee","Byron","Kohen","Reese","Braydon","Madden","Deandre","Flynn","Harley","Hezekiah","Amos","Harry","Zain","Alessandro","Stanley","Lucca","Branson","Ernesto","Joziah","Leandro","Ares","Marc","Blaine","Joey","Jon","Yosef","Carmelo","Franco","Jamal","Mack","Kristian","Dane","Lachlan","Callum","Graysen","Kye","Ben","Aryan","Gannon","London","Kareem","Stetson","Kristopher","Tomas","Ford","Bronson","Enoch","Baylor","Kaysen","Axton","Jaxen","Rodney","Dominik","Emery","Layne","Wilder","Jamir","Tripp","Kelvin","Vicente","Augustine","Brett","Callan","Clay","Crew","Brecken","Jacoby","Abdiel","Allan","Maxton","Melvin","Rayden","Terrance","Demetrius","Rohan","Wayne","Yahir","Arian","Fox","Brentley","Ray","Zechariah","Cain","Guillermo","Otis","Tommy","Alonso","Dariel","Jedidiah","Maximo","Cory","Grey","Reyansh","Skylar","Marcelo","Castiel","Kase","Toby","Bobby","Jadiel","Marcel","Lochlan","Jeffery","Zackary","Fisher","Yousef","Aron","Chaim","Felipe","Axl","Anakin","Brodie","Dash","Anson","Maison","Zaire","Samir","Damari","Elisha","Davion","Eugene","Hassan","Kannon","Azariah","Clyde","Harper","Nickolas","Boone","Magnus","Coen","Kole","Willie","Chad","Xzavier","Duncan","Harold","Houston","Landry","Trace","Alvaro","Ameer","Junior","Kamdyn","Vincenzo","Gerald","Marlon","Payton","Jamie","Kamryn","Camdyn","Anders","Aydin","Bentlee","Reginald","Jaziel","Benton","Bodie","Misael","Westin","Will","Channing","Harlan","Kody","Kolten","Thatcher","Valentin","Henrik","Keenan","Terrence","Denver","Emory","Jerome","Jermaine","Cairo","Sonny","Mayson","Alfred","Cristiano","Darian","Eliseo","Maxim","Stefan","Hugh","Santana","Javion","Leighton","Miller","Riaan","Rogelio","Rudy","Blaze","Bridger","Darwin","Markus","Ronnie","Shepherd","Vaughn","Billy","Marley","Huxley","Rey","Keagan","Draven","Shiloh","Brysen","Giovani","Alistair","Brixton","Heath","Kalel","Reuben","Ridge","Adrien","Rene","Sutton","Zyaire","Ephraim","Neymar","Vance","Zavier","Jessie","Dangelo","Dayton","Emmet","Ishaan","Zaid","Camron","Jordy","Kenny","Micheal","Shaun","Alexzander","Howard","Kylo","Eason","Blaise","Craig","Hakeem","Karim","Jabari","Jairo","Khalid","Turner","Van","Westley","Braiden","Cedric","Darrell","Louie","Mustafa","Yehuda","Justus","Salvatore","Alfonso","Kendall","Konnor","Lamar","Gibson","Ignacio","Koda","Leroy","Terrell","Tristian","Achilles","Jericho","Ramiro","Yahya","Rolando","Vivaan","Dario","Jair","Ulises","Judson","Kashton","Tadeo","Marquis","Avi","Dimitri","Dwayne","Musa","Ahmir","Gordon","Ira","Seamus","Kolby","Brantlee","Javon","Rocky","Urijah","Brayson","Mikael","Santos","Gilbert","Greysen","Lyric","Coleman","Dominique","Foster","Gauge","Harris","Kymani","Leif","Agustin","Keanu","Konner","Brent","Immanuel","Benicio","Ernest","Merrick","Yisroel","Amare","Jad","Lyle","Creed","Krish","Maddux","Camilo","Giancarlo","Jamarion","Steve","Anton","Jamar","Jeremias","Ralph","Wesson","Bode","Braeden","Brenden","Eliezer","Davian","Gus","Jonathon"];

const babyNamesArr = babyBoyNames.concat(babyGirlNames);


//if we have multi-property data, we should put the data we want to sort by in the itemsToMatch array and
// //corresponding data in the correspondingData array

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(function(response){
//     console.log("users acquired");
//     return response.json();
// })
// .then(setUpData);

function setUpData (json = undefined){

    json = babyNamesArr;
    
    json.forEach(function(item, index){

        if(propsToSortBy.length > 0){
             //for each item, lets get all the properties we want out of that item
            propsToSortBy.forEach(function(property){
            //set the itemsToMatch array item to item's property
           
            itemsToMatch[index] = item[property];
            //store the all of the data in the correspondingData array
            correspondingData = json[index];
        });
        } 
        else {
            itemsToMatch[index] = item;
        }

    });

    //just clear it for debugging purposes

    console.log(itemsToMatch);

    //remove the loading text
    $("#loading-text").css("display", "none");
}

setUpData();

function changeFocusState() {
  var isGoingToBeFocused = searchInput.is(":focus");
  
  if (isGoingToBeFocused) {
    showSuggestions();
  } else {
    hideSuggestions();
  }
}

function showSuggestions(){
    
    searchContainer.fadeIn(
        {
            duration: fadeDuration,
            start: function(){ 
                    searchContainer.css("display", "block");
            }
        });
}

function hideSuggestions(){
    searchContainer.fadeOut(fadeDuration, () => { searchContainer.css("display", "none"); });
}

function getSuggestions(){
    var value = searchInput.val();
    if (value  == ""){
        hideSuggestions();
    } else{
        showSuggestions();
    }

    var parsedValue = parseValue(value);
    var itemScores = matchString(parsedValue, parseItemsToMatch(itemsToMatch));
    
    var renderParams = [];

    itemScores.forEach(function(itemScore, index){
        renderParams.push(
            {
                suggestion: itemsToMatch[index],
                score: itemScore
            }
        );
    });

    //TODO: SORT RENDERPARAMS
    renderParams.sort(function(a, b){
        return b.score-a.score;
    });

    //render suggestions takes an array of objects eaching containing the suggestion and the score.
        //the array should be sorted greatest to least by the score.
    renderSuggestions(renderParams.slice(0, 100));
}

function renderSuggestions(renderParams){

    console.log("render suggestions function fired");

    let htmlRenderString = ``;

    //unpack the renderParams object and turn it into html we can insert into the DOM
    renderParams.forEach(function(suggestionObj){
        htmlRenderString += `<li class = "suggestion">${suggestionObj.suggestion}</li>`;
    })

    searchContainer.html(htmlRenderString);
}


function parseItemsToMatch(arr){
    var returnArray = [];

    for(let i = 0; i < arr.length; i++){
        returnArray.push(
            parseValue(arr[i])
        );
    }
    return returnArray;
}

 //parse the value and turn it into an array of words
function parseValue(value){
    var wordArray = [];

    let currentWord = "";
    for(let i = 0 ; i<value.length; i++){
        
        // if we hit a space and we aren't on the first or last character
        if (value[i] == " "){
            //push the word to the wordCounter Array;
            wordArray.push(currentWord);
            currentWord = "";
        //else add the current character to the current word
        } else if(i == value.length-1){
            currentWord += value[i];
            wordArray.push(currentWord);
        } else{
            currentWord += value[i];
        }
    }

    return wordArray;
}

/*
    total rank score = 0

    for (each item trying to search through)
        for (all items in word array = word)
            for(all words in the string trying to match for)
                if words match, then thats a score of 100; add it to total rank score
                
                else

                                        // trying matching the first two characters
                                        //     try the first three characters...
                                        //         repeat until characters don't match
                                        //     move to point after where character didn't match
                                        //     find the character in the word that it is on
                                        //     keep successively trying to match
                        
                        just count the number of characters that match
                        Gr == Gr
                        Grc != Gra
                        find 'c' in Grace
                        find 'c' in Grce
                        
                        c = c
                        ce = ce

                        Grce => Grace

                        Gr matches Gr
                        ce matches ce
*/

/*
    query: is

    is is is is is = 100
    is             = 100

    for each word in the string being scored,
        increment the score of the string by the 100/numWordsInStringBeingMatched
    
    if the strings are the same length, add a boost of 100 points the scored string's score
*/

function matchString(wordArray, items){
    var scores = [];

    //for each string trying to match query against
    for(var itemOn = 0; itemOn < items.length; itemOn++){
        var totalScore = 0;

        //for each word in the query
        for(var wordOn = 0; wordOn < wordArray.length; wordOn++){
            let wordScore = 0;  //max of 100
            let increment = 100/items[itemOn].length;

            //for each word in the current string trying to match against and generate a score for
            for(var itemWordOn = 0; itemWordOn < items[itemOn].length; itemWordOn++){
                //generate a score for this word

                //if the words match exactly
                if(wordArray[wordOn] == items[itemOn][itemWordOn]){
                    console.log(itemOn, items[itemOn], wordArray[wordOn], items[itemOn][itemWordOn], increment);
                    wordScore += increment;
                    console.log("wordScore for "+ wordArray[wordOn]+" and " + items[itemOn] +":   "+ wordScore);
                }
                else {
                    wordScore += matchUnequalWords(wordArray[wordOn], items[itemOn][itemWordOn]);
                }
            }

            totalScore += wordScore;
        }

        //if they are the same length, then give it a boost of 100 points
        if(wordArray.length == items[itemOn].length){
            totalScore += 100;

            console.log("word array lengths DO match: totalScore for "+ items[itemOn] + ": "+ totalScore);
        } else{
            console.log("word array lengths DO NOT match: totalScore for "+ items[itemOn] + ": "+ totalScore);
        }
        
        scores.push(totalScore);
    }

    return scores;
}

function matchUnequalWords(queryWord, matchWord){
    let increment = 100 / queryWord.length;
     //thanks stackoverflow
            //https://stackoverflow.com/questions/48985834/is-there-a-way-to-count-how-many-shared-characters-are-between-two-strings-using/48993356

        const value1 = [...queryWord.toLowerCase().replace(/\s|-/g,'')];
        const value2 = [...matchWord.toLowerCase().replace(/\s|-/g,'')];
        const freq = {};
        value1.forEach(ch => freq[ch] = (freq[ch] || 0) + 1);
        var numCharsMatch = value2.reduce((acc, ch) => acc + (freq[ch] ? !!freq[ch]-- : 0), 0);

        return numCharsMatch*increment;
}

searchInput.on("focusin", changeFocusState);
searchInput.on("focusout", changeFocusState);

searchInput.on('input', getSuggestions);




//$("body").css("background-color", "red");
