
$(document).ready()


//Get champions is a method made up of methods that return a champion for each League
$(function (){
  $("select").change(function(){
     var p = document.getElementById("menu").value;

     //document.getElementById("results").innerHTML = '<div><p>'+ "The year is " + p + '</p></div>'; 

     getChampions(p)
     //fifaWC(p)
  });

});

   
function getChampions(in_year) {

   var val = in_year
   //First Rown - MLB, NBA, NHL
    var msg = '<h2>' + "Champions for " + val + '</h2>';
    
    document.getElementById("results").innerHTML = msg;
    
    //MLB Champions
      mlb.forEach((mlb) => {
         if ((mlb.year)== val)
         {
          
            var mlbPrint = '<p>'+ "<img src='images/mlb_logo.png' width='70' height='90' float='left'>" 
            +'</p>' +'<p>' + "Champion: " + mlb.winner + '</p>' 
            + '<p>' + "Loser: " + mlb.loser +'</p>' + '<p>'+ "Results: " + mlb.results + '</p>';
            document.getElementById("mlb").innerHTML = mlbPrint;
         }    
      })

     //NBA Champions
     nba.forEach((nba) => {
         if ((nba.year)== val)
         {
            var nbaPrint = '<p>'+ "<img src='images/NBA-logo.jpg' width='50' height='90' float='left'>" 
            +'</p>'
            +'<p>' + "Champion: " + nba.winner + '</p>'
            + '<p>' + "Loser: " + nba.losers +'</p>' + '<p>'+ "Results: " + nba.results + '</p>';
            document.getElementById("nba").innerHTML = nbaPrint;
         }
      })   
      
      nfl.forEach((nfl) => {
         if ((nfl.year)== val)
         {
            var nflPrint = '<p>'+ "<img src='images/nfl_logo.png' width='70' height='90' float='left'>" 
            +'</p>'
            +'<p>' + "Champion: " + nfl.winner + '</p>'
            + '<p>' + "Loser: " + nfl.losers +'</p>' + '<p>'+ "SuperBowl: " + nfl.sb + '</p>';
            document.getElementById("nfl").innerHTML = nflPrint;
         }
      }) 

      //NHL (Stanley Cup Champions)
      
      nhl.forEach((nhl) => {
         if ((nhl.year)== val)
         {
            var nhlPrint = '<p>'+ "<img src='images/nhl-logo.jpg' width='70' height='90' float='left'>" 
            +'</p>'
            +'<p>' + "Champion: " + nhl.winner + '</p>'
            + '<p>' + "Loser: " + nhl.losers +'</p>' + '<p>'+ "Results: " + nhl.results + '</p>';
            document.getElementById("nhl").innerHTML = nhlPrint;
         }
      }) 

      //Champions League Champions
      uefa.forEach((uefa) => {
         if ((uefa.year)== val)
         {
            var uefaPrint = '<p>'+ "<img src='images/uefa_logo.png' width='100' height='100' float='left'>" 
            +'</p>'+
            '<p>' + "Champion: " + uefa.winner + '</p>'
            + '<p>' + "Loser: " + uefa.losers +'</p>' + '<p>'+ "Results: " + uefa.results + '</p>';
            document.getElementById("uefa").innerHTML = uefaPrint;
         }
      }) 
   }

   
/*function fifaWC(input){
   var val = input         
   //Fifa WC Champions
            wc.forEach(( wc) => {
               if (wc.year == val)
               {
                  var  wcPrint = '<p>' + "Champion: " +  wc.winner + '</p>'
                  + '<p>' + "Loser: " +  wc.losers +'</p>' + '<p>'+ "Results: " +  wc.results + '</p>' +
                  '<p>' + "Host Country: " + wc.host + '</p>';
                  document.getElementById("wc").innerHTML =  wcPrint;
               }
               else
               {
                  var wcClear = '<p>' + "No World Cup this year" + '</p>';
                  document.getElementById("wc").innerHTML =  wcClear;
               }
            })
   }

*/

//MLB Data

var mlb = [
   {
     year: 1980,
     winner: "Philadelphia Phillies (NL)",
     loser: "Kansas City Royals (AL)",
     results: "4 games to 2"
   },
   {
     year: 1981,
     winner: "Los Angeles Dodgers (NL)",
     loser: "New York Yankees (AL)",
     results: "4 games to 2"
   },
   {
     year: 1982,
     winner: "St. Louis Cardinals (NL)",
     loser: "Milwaukee Brewers (AL)",
     results: "4 games to 3"
   },
   {
     year: 1983,
     winner: "Baltimore Orioles (AL)",
     loser: "Philadelphia Phillies (NL)",
     results: "4 games to 1"
   },
   {
     year: 1984,
     winner: "Detroit Tigers (AL)",
     loser: "San Diego Padres (NL)",
     results: "4 games to 1"
   },
   {
     year: 1985,
     winner: "Kansas City Royals (AL)",
     loser: "St. Louis Cardinals (NL)",
     results: "4 games to 3"
   },
   {
     year: 1986,
     winner: "New York Mets (NL)",
     loser: "Boston Red Sox (AL)",
     results: "4 games to 3"
   },
   {
     year: 1987,
     winner: "Minnesota Twins (AL)",
     loser: "St. Louis Cardinals (NL)",
     results: "4 games to 3"
   },
   {
     year: 1988,
     winner: "Los Angeles Dodgers (NL)",
     loser: "Oakland Athletics (AL)",
     results: "4 games to 1"
   },
   {
     year: 1989,
     winner: "Oakland Athletics (AL)",
     loser: "San Francisco Giants (NL)",
     results: "4 games to 0"
   },
   {
     year: 1990,
     winner: "Cincinnati Reds (NL)",
     loser: "Oakland Athletics (AL)",
     results: "4 games to 0"
   },
   {
     year: 1991,
     winner: "Minnesota Twins (AL)",
     loser: "Atlanta Braves (NL)",
     results: "4games to3"
   },
   {
     year: 1992,
     winner: "Toronto Blue Jays (AL)",
     loser: "Atlanta Braves (NL)",
     results: "4 games to 2"
   },
   {
     year: 1993,
     winner: "Toronto Blue Jays (AL)",
     loser: "Philadelphia Phillies (NL)",
     results: "4 games to 2"
   },
   {
     year: 1994,
     winner: "Not Held - Lockout",
     loser: "",
     results: ""
   },
   {
     year: 1995,
     winner: "Atlanta Braves (NL)",
     loser: "Cleveland Indians (AL)",
     results: "4 games to 2"
   },
   {
     year: 1996,
     winner: "New York Yankees (AL)",
     loser: "Atlanta Braves (NL)",
     results: "4 games to 2"
   },
   {
     year: 1997,
     winner: "Florida Marlins (NL)",
     loser: "Cleveland Indians (AL)",
     results: "4 games to 3"
   },
   {
     year: 1998,
     winner: "New York Yankees (AL)",
     loser: "San Diego Padres (NL)",
     results: "4 games to 0"
   },
   {
     year: 1999,
     winner: "New York Yankees (AL)",
     loser: "Atlanta Braves (NL)",
     results: "4 games to 0"
   },
   {
     year: 2000,
     winner: "New York Yankees (AL)",
     loser: "New York Mets (NL)",
     results: "4 games to 1"
   },
   {
     year: 2001,
     winner: "Arizona Diamondbacks (NL)",
     loser: "New York Yankees (AL)",
     results: "4 games to 3"
   },
   {
     year: 2002,
     winner: "Anaheim Angels (AL)",
     loser: "San Francisco Giants (NL)",
     results: "4 games to 3"
   },
   {
     year: 2003,
     winner: "Florida Marlins (NL)",
     loser: "New York Yankees (AL)",
     results: "4 games to 2"
   },
   {
     year: 2004,
     winner: "Boston Red Sox (AL)",
     loser: "St. Louis Cardinals (NL)",
     results: "4 games to 0"
   },
   {
     year: 2005,
     winner: "Chicago White Sox (AL)",
     loser: "Houston Astros (NL)",
     results: "4 games to 0"
   },
   {
     year: 2006,
     winner: "St. Louis Cardinals (NL)",
     loser: "Detroit Tigers (AL)",
     results: "4 games to 1"
   },
   {
     year: 2007,
     winner: "Boston Red Sox (AL)",
     loser: "Colorado Rockies (NL)",
     results: "4 games to 0"
   },
   {
     year: 2008,
     winner: "Philadelphia Phillies (NL)",
     loser: "Tampa Bay Rays (AL)",
     results: "4 games to 1"
   },
   {
     year: 2009,
     winner: "New York Yankees (AL)",
     loser: "Philadelphia Phillies (NL)",
     results: "4games to2"
   },
   {
     year: 2010,
     winner: "San Francisco Giants (NL)",
     loser: "Texas Rangers (AL)",
     results: "4games to1"
   },
   {
     year: 2011,
     winner: "St. Louis Cardinals (NL)",
     loser: "Texas Rangers (AL)",
     results: "4 games to 3"
   },
   {
     year: 2012,
     winner: "San Francisco Giants (NL)",
     loser: "Detroit Tigers (AL)",
     results: "4 games to 0"
   },
   {
     year: 2013,
     winner: "Boston Red Sox (AL)",
     loser: "St. Louis Cardinals (NL)",
     results: "4 games to 2"
   },
   {
     year: 2014,
     winner: "San Francisco Giants (NL)",
     loser: "Kansas City Royals (AL)",
     results: "4 games to 3"
   },
   {
     year: 2015,
     winner: "Kansas City Royals (AL)",
     loser: "New York Mets (NL)",
     results: "4 games to 1"
   },
   {
     year: 2016,
     winner: "Chicago Cubs (NL)",
     loser: "Cleveland Indians (AL)",
     results: "4 games to 3"
   },
   {
     year: 2017,
     winner: "Houston Astros (AL)",
     loser: "Los Angeles Dodgers (NL)",
     results: "4 games to 3"
   },
   {
     year: 2018,
     winner: "Boston Red Sox (AL)",
     loser: "Los Angeles Dodgers (NL)",
     results: "4 - 1"
   }
 ] 


//NBA Data
var nba =[
   {
      year: 2018,
     winner: "Golden State Warriors",
     losers: "Cleveland Cavaliers",
     results: "4 games to 0"
   },
   {
      year: 2017,
     winner: "Golden State Warriors",
     losers: "Cleveland Cavaliers",
     results: "4 games to 1"
   },
   {
      year: 2016,
     winner: "Cleveland Cavaliers",
     losers: "Golden State Warriors",
     results: "4 games to 3"
   },
   {
      year: 2015,
     winner: "Golden State Warriors",
     losers: "Cleveland Cavaliers",
     results: "4 games to 2"
   },
   {
      year: 2014,
     winner: "San Antonio Spurs",
     losers: "Miami Heat",
     results: "4 games to 1"
   },
   {
      year: 2013,
     winner: "Miami Heat",
     losers: "San Antonio Spurs",
     results: "4 games to 3"
   },
   {
      year: 2012,
     winner: "Miami Heat",
     losers: "Oklahoma City Thunder",
     results: "4 games to 1"
   },
   {
      year: 2011,
     winner: "Dallas Mavericks",
     losers: "Miami Heat",
     results: "4 games to 2"
   },
   {
      year: 2010,
     winner: "Los Angeles Lakers",
     losers: "Boston Celtics",
     results: "4 games to 3"
   },
   {
      year: 2009,
     winner: "Los Angeles Lakers",
     losers: "Orlando Magic",
     results: "4 games to 1"
   },
   {
      year: 2008,
     winner: "Boston Celtics",
     losers: "Los Angeles Lakers",
     results: "4 games to 2"
   },
   {
      year: 2007,
     winner: "San Antonio Spurs",
     losers: "Cleveland Cavaliers",
     results: "4 games to 0"
   },
   {
      year: 2006,
     winner: "Miami Heat",
     losers: "Dallas Mavericks",
     results: "4 games to 2"
   },
   {
      year: 2005,
     winner: "San Antonio Spurs",
     losers: "Detroit Pistons",
     results: "4 games to 3"
   },
   {
      year: 2004,
     winner: "Detroit Pistons",
     losers: "Los Angeles Lakers",
     results: "4 games to 1"
   },
   {
      year: 2003,
     winner: "San Antonio Spurs",
     losers: "New Jersey Nets",
     results: "4 games to 2"
   },
   {
      year: 2002,
     winner: "Los Angeles Lakers",
     losers: "New Jersey Nets",
     results: "4 games to 0"
   },
   {
      year: 2001,
     winner: "Los Angeles Lakers",
     losers: "Philadelphia 76ers",
     results: "4 games to 1"
   },
   {
      year: 2000,
     winner: "Los Angeles Lakers",
     losers: "Indiana Pacers",
     results: "4 games to 2"
   },
   {
      year: 1999,
     winner: "San Antonio Spurs",
     losers: "New York Knicks",
     results: "4 games to 1"
   },
   {
      year: 1998,
     winner: "Chicago Bulls",
     losers: "Utah Jazz",
     results: "4 games to 2"
   },
   {
      year: 1997,
     winner: "Chicago Bulls",
     losers: "Utah Jazz",
     results: "4 games to 2"
   },
   {
      year: 1996,
     winner: "Chicago Bulls",
     losers: "Seattle SuperSonics",
     results: "4 games to 2"
   },
   {
      year: 1995,
     winner: "Houston Rockets",
     losers: "Orlando Magic",
     results: "4 games to 0"
   },
   {
      year: 1994,
     winner: "Houston Rockets",
     losers: "New York Knicks",
     results: "4 games to 3"
   },
   {
      year: 1993,
     winner: "Chicago Bulls",
     losers: "Phoenix Suns",
     results: "4 games to 2"
   },
   {
      year: 1992,
     winner: "Chicago Bulls",
     losers: "Portland Trail Blazers",
     results: "4 games to 2"
   },
   {
      year: 1991,
     winner: "Chicago Bulls",
     losers: "Los Angeles Lakers",
     results: "4 games to 1"
   },
   {
      year: 1990,
     winner: "Detroit Pistons",
     losers: "Portland Trail Blazers",
     results: "4 games to 1"
   },
   {
      year: 1989,
     winner: "Detroit Pistons",
     losers: "Los Angeles Lakers",
     results: "4 games to 0"
   },
   {
      year: 1988,
     winner: "Los Angeles Lakers",
     losers: "Detroit Pistons",
     results: "4 games to 3"
   },
   {
      year: 1987,
     winner: "Los Angeles Lakers",
     losers: "Boston Celtics",
     results: "4 games to 2"
   },
   {
      year: 1986,
     winner: "Boston Celtics",
     losers: "Houston Rockets",
     results: "4 games to 2"
   },
   {
      year: 1985,
     winner: "Los Angeles Lakers",
     losers: "Boston Celtics",
     results: "4 games to 2"
   },
   {
      year: 1984,
     winner: "Boston Celtics",
     losers: "Los Angeles Lakers",
     results: "4 games to 3"
   },
   {
      year: 1983,
     winner: "Philadelphia 76ers",
     losers: "Los Angeles Lakers",
     results: "4 games to 0"
   },
   {
      year: 1982,
     winner: "Los Angeles Lakers",
     losers: "Philadelphia 76ers",
     results: "4 games to 2"
   },
   {
      year: 1981,
     winner: "Boston Celtics",
     losers: "Houston Rockets",
     results: "4 games to 2"
   },
   {
      year: 1980,
     winner: "Los Angeles Lakers",
     losers: "Philadelphia 76ers",
     results: "4 games to 2"
   }
 ]    

//Superbowl Champions
 var nfl =[
   {
     sb: "XV",
      year: 1980,
     winner: "Oakland Raiders (AFC)",
     losers: "Philadelphia Eagles (NFC)"
   },
   {
     sb: "XVI",
      year: 1981,
     winner: "San Francisco 49ers (NFC)",
     losers: "Cincinnati Bengals (AFC)"
   },
   {
     sb: "XVII",
      year: 1982,
     winner: "Washington Redskins (NFC)",
     losers: "Miami Dolphins (AFC)"
   },
   {
     sb: "XVIII",
      year: 1983,
     winner: "Los Angeles Raiders (AFC)",
     losers: "Washington Redskins (NFC)"
   },
   {
     sb: "XIX",
      year: 1984,
     winner: "San Francisco 49ers (NFC)",
     losers: "Miami Dolphins (AFC)"
   },
   {
     sb: "XX",
      year: 1985,
     winner: "Chicago Bears (NFC)",
     losers: "New England Patriots (AFC)"
   },
   {
     sb: "XXI",
      year: 1986,
     winner: "New York Giants (NFC)",
     losers: "Denver Broncos (AFC)"
   },
   {
     sb: "XXII",
      year: 1987,
     winner: "Washington Redskins (NFC)",
     losers: "Denver Broncos (AFC)"
   },
   {
     sb: "XXIII",
      year: 1988,
     winner: "San Francisco 49ers (NFC)",
     losers: "Cincinnati Bengals (AFC)"
   },
   {
     sb: "XXIV",
      year: 1989,
     winner: "San Francisco 49ers (NFC)",
     losers: "Denver Broncos (AFC)"
   },
   {
     sb: "XXV",
      year: 1990,
     winner: "New York Giants (NFC)",
     losers: "Buffalo Bills (AFC)"
   },
   {
     sb: "XXVI",
      year: 1991,
     winner: "Washington Redskins (NFC)",
     losers: "Buffalo Bills (AFC)"
   },
   {
     sb: "XXVII",
      year: 1992,
     winner: "Dallas Cowboys (NFC)",
     losers: "Buffalo Bills (AFC)"
   },
   {
     sb: "XXVIII",
      year: 1993,
     winner: "Dallas Cowboys (NFC)",
     losers: "Buffalo Bills (AFC)"
   },
   {
     sb: "XXIX",
      year: 1994,
     winner: "San Francisco 49ers (NFC)",
     losers: "San Diego Chargers (AFC)"
   },
   {
     sb: "XXX",
      year: 1995,
     winner: "Dallas Cowboys (NFC)",
     losers: "Pittsburgh Steelers (AFC)"
   },
   {
     sb: "XXXI",
      year: 1996,
     winner: "Green Bay Packers (NFC)",
     losers: "New England Patriots (AFC)"
   },
   {
     sb: "XXXII",
      year: 1997,
     winner: "Denver Broncos (AFC)",
     losers: "Green Bay Packers (NFC)"
   },
   {
     sb: "XXXIII",
      year: 1998,
     winner: "Denver Broncos (AFC)",
     losers: "Atlanta Falcons (NFC)"
   },
   {
     sb: "XXXIV",
      year: 1999,
     winner: "St. Louis Rams (NFC)",
     losers: "Tennessee Titans (AFC)"
   },
   {
     sb: "XXXV",
      year: 2000,
     winner: "Baltimore Ravens (AFC)",
     losers: "New York Giants (NFC)"
   },
   {
     sb: "XXXVI",
      year: 2001,
     winner: "New England Patriots (AFC)",
     losers: "St. Louis Rams (NFC)"
   },
   {
     sb: "XXXVII",
      year: 2002,
     winner: "Tampa Bay Buccaneers (NFC)",
     losers: "Oakland Raiders (AFC)"
   },
   {
     sb: "XXXVIII",
      year: 2003,
     winner: "New England Patriots (AFC)",
     losers: "Carolina Panthers (NFC)"
   },
   {
     sb: "XXXIX",
      year: 2004,
     winner: "New England Patriots (AFC)",
     losers: "Philadelphia Eagles (NFC)"
   },
   {
     sb: "XL",
      year: 2005,
     winner: "Pittsburgh Steelers (AFC)",
     losers: "Seattle Seahawks (NFC)"
   },
   {
     sb: "XLI",
      year: 2006,
     winner: "Indianapolis Colts (AFC)",
     losers: "Chicago Bears (NFC)"
   },
   {
     sb: "XLII",
      year: 2007,
     winner: "New York Giants (NFC)",
     losers: "New England Patriots (AFC)"
   },
   {
     sb: "XLIII",
      year: 2008,
     winner: "Pittsburgh Steelers (AFC)",
     losers: "Arizona Cardinals (NFC)"
   },
   {
     sb: "XLIV",
      year: 2009,
     winner: "New Orleans Saints (NFC)",
     losers: "Indianapolis Colts (AFC)"
   },
   {
     sb: "XLV",
      year: 2010,
     winner: "Green Bay Packers (NFC)",
     losers: "Pittsburgh Steelers (AFC)"
   },
   {
     sb: "XLVI",
      year: 2011,
     winner: "New York Giants (NFC)",
     losers: "New England Patriots (AFC)"
   },
   {
     sb: "XLVII",
      year: 2012,
     winner: "Baltimore Ravens (AFC)",
     losers: "San Francisco 49ers (NFC)"
   },
   {
     sb: "XLVIII",
      year: 2013,
     winner: "Seattle Seahawks (NFC)",
     losers: "Denver Broncos (AFC)"
   },
   {
     sb: "XLIX",
      year: 2014,
     winner: "New England Patriots (AFC)",
     losers: "Seattle Seahawks (NFC)"
   },
   {
     sb: 50,
      year: 2015,
     winner: "Denver Broncos (AFC)",
     losers: "Carolina Panthers (NFC)"
   },
   {
     sb: "LI",
      year: 2016,
     winner: "New England Patriots (AFC)",
     losers: "Atlanta Falcons (NFC)"
   },
   {
     sb: "LII",
      year: 2017,
     winner: "Philadelphia Eagles (NFC)",
     losers: "New England Patriots (AFC)"
   },
   {
     sb: "LIII",
      year: 2018,
     winner: "New England Patriots (AFC)",
     losers: "Los Angeles Rams (NFC)"
   }
 ]

 //Stanley Cup CHampions

 var nhl = [
   {
     year: 1980,
     winner: "New York Islanders",
     losers: "Philadelphia Plyers",
     results: "4 games to 2"
   },
   {
      year: 1981,
     winner: "New York Islanders",
     losers: "Minnesota North Stars",
     results: "4 games to 1"
   },
   {
      year: 1982,
     winner: "New York Islanders",
     losers: "Vancouver Canucks",
     results: "4 games to 0"
   },
   {
      year: 1983,
     winner: "New York Islanders",
     losers: "Edmonton Oilers",
     results: "4 games to 0"
   },
   {
      year: 1984,
     winner: "Edmonton Oilers",
     losers: "New York Islanders",
     results: "4 games to 1"
   },
   {
      year: 1985,
     winner: "Edmonton Oilers",
     losers: "Philadelphia Flyers",
     results: "4 games to 1"
   },
   {
      year: 1986,
     winner: "Montreal Canadiens",
     losers: "Calgary Flames",
     results: "4 games to 1"
   },
   {
      year: 1987,
     winner: "Edmonton Oilers",
     losers: "Philadelphia Flyers",
     results: "4 games to 3"
   },
   {
      year: 1988,
     winner: "Edmonton Oilers",
     losers: "Boston Bruins",
     results: "4 games to 0"
   },
   {
      year: 1989,
     winner: "Calgary Flames",
     losers: "Montreal Canadiens",
     results: "4 games to 2"
   },
   {
      year: 1990,
     winner: "Edmonton Oilers",
     losers: "Boston Bruins",
     results: "4 games to 1"
   },
   {
      year: 1991,
     winner: "Pittsburgh Penguins",
     losers: "Minnesota North Stars",
     results: "4 games to 2"
   },
   {
      year: 1992,
     winner: "Pittsburgh Penguins",
     losers: "Chicago Blackhawks",
     results: "4 games to 0"
   },
   {
      year: 1993,
     winner: "Montreal Canadiens",
     losers: "Los Angeles Kings",
     results: "4 games to 1"
   },
   {
      year: 1994,
     winner: "New York Rangers",
     losers: "Vancouver Canucks",
     results: "4 games to 3"
   },
   {
      year: 1995,
     winner: "New Jersey Devils",
     losers: "Detroit Red Wings",
     results: "4 games to 0"
   },
   {
      year: 1996,
     winner: "Colorado Avalanche",
     losers: "Florida Panthers",
     results: "4 games to 0"
   },
   {
      year: 1997,
     winner: "Detroit Red Wings",
     losers: "Philadelphia Flyers",
     results: "4 games to 0"
   },
   {
      year: 1998,
     winner: "Detroit Red Wings",
     losers: "Washington Capitals",
     results: "4 games to 0"
   },
   {
      year: 1999,
     winner: "Dallas Stars",
     losers: "Buffalo Sabres",
     results: "4 games to 2"
   },
   {
      year: 2000,
     winner: "New Jersey Devils",
     losers: "Dallas Stars",
     results: "4 games to 2"
   },
   {
      year: 2001,
     winner: "Colorado Avalanche",
     losers: "New Jersey Devils",
     results: "4 games to 3"
   },
   {
      year: 2002,
     winner: "Detroit Red Wings",
     losers: "Carolina Hurricanes",
     results: "4 games to 1"
   },
   {
      year: 2003,
     winner: "New Jersey Devils",
     losers: "Anaheim Mighty Ducks",
     results: "4 games to 3"
   },
   {
      year: 2004,
     winner: "Tampa Bay Lightning",
     losers: "Calgary Flames",
     results: "4 games to 3"
   },
   {
      year: 2005,
     winner: "canceled due to labour dispute",
     losers: "",
     results: ""
   },
   {
      year: 2006,
     winner: "Carolina Hurricanes",
     losers: "Edmonton Oilers",
     results: "4 games to 3"
   },
   {
      year: 2007,
     winner: "Anaheim Ducks",
     losers: "Ottawa Senators",
     results: "4 games to 1"
   },
   {
      year: 2008,
     winner: "Detroit Red Wings",
     losers: "Pittsburgh Penguins",
     results: "4 games to 2"
   },
   {
      year: 2009,
     winner: "Pittsburgh Penguins",
     losers: "Detroit Red Wings",
     results: "4 games to 3"
   },
   {
      year: 2010,
     winner: "Chicago Blackhawks",
     losers: "Philadelphia Flyers",
     results: "4 games to 2"
   },
   {
      year: 2011,
     winner: "Boston Bruins",
     losers: "Vancouver Canucks",
     results: "4 games to 3"
   },
   {
      year: 2012,
     winner: "Los Angeles Kings",
     losers: "New Jersey Devils",
     results: "4 games to 2"
   },
   {
      year: 2013,
     winner: "Chicago Blackhawks",
     losers: "Boston Bruins",
     results: "4 games to 2"
   },
   {
      year: 2014,
     winner: "Los Angeles Kings",
     losers: "New York Rangers",
     results: "4 games to 1"
   },
   {
      year: 2015,
     winner: "Chicago Blackhawks",
     losers: "Tampa Bay Lightning",
     results: "4 games to 2"
   },
   {
      year: 2016,
     winner: "Pittsburgh Penguins",
     losers: "San Jose Sharks",
     results: "4 games to 2"
   },
   {
      year: 2017,
     winner: "Pittsburgh Penguins",
     losers: "Nashville Predators",
     results: "4 games to 2"
   },
   {
      year: 2018,
     winner: "Washington Capitals",
     losers: "Vegas Golden Knights",
     results: "4 games to 1"
   }
 ]

//UEFA Champions League
var uefa =[
   {
      year: 1980,
     winner: "Nottingham Forest",
     losers: "Hamburg",
     results: "Nottingham (1-0)"
   },
   {
      year: 1981,
     winner: "Liverpool",
     losers: "Real Madrid",
     results: "Liverpool (1-0)"
   },
   {
      year: 1982,
     winner: "Aston Villa",
     losers: "Bayern Munich",
     results: "Aston Villa (1-0)"
   },
   {
      year: 1983,
     winner: "Hamburg",
     losers: "Juventus",
     results: "Hamburg (1-0)"
   },
   {
      year: 1984,
     winner: "Liverpool",
     losers: "AS Roma",
     results: "Liverpool won 4-2 on penalties"
   },
   {
      year: 1985,
     winner: "Juventus",
     losers: "Liverpool",
     results: "Juventus (1-0)"
   },
   {
      year: 1986,
     winner: "Steaua București",
     losers: "Barcelona",
     results: "Steaua București 2-0 on penalties"
   },
   {
      year: 1987,
     winner: "FC Porto",
     losers: "Bayern Munich",
     results: "Porto (2-1)"
   },
   {
      year: 1988,
     winner: "PSV Eindhoven",
     losers: "Benfica",
     results: "PSV won 6-5 on penalties"
   },
   {
      year: 1989,
     winner: "AC Milan",
     losers: "Steaua București",
     results: "Milan (4-0)"
   },
   {
      year: 1990,
     winner: "AC Milan",
     losers: "Benfica",
     results: "Milan (1-0)"
   },
   {
      year: 1991,
     winner: "Red Star Belgrade",
     losers: "Marseille",
     results: "Red Star won 5-3 on penalties"
   },
   {
      year: 1992,
     winner: "Barcelona",
     losers: "Sampdoria",
     results: "Barcelona (1-0)"
   },
   {
      year: 1993,
     winner: "Marseille",
     losers: "AC Milan",
     results: "Marseille (1-0)"
   },
   {
      year: 1994,
     winner: "AC Milan",
     losers: "Barcelona",
     results: "AC Milan (4-0)"
   },
   {
      year: 1995,
     winner: "Ajax",
     losers: "AC Milan",
     results: "Ajax (1-0)"
   },
   {
      year: 1996,
     winner: "Juventus",
     losers: "Ajax",
     results: "Juventus (4-2 on penalties)"
   },
   {
      year: 1997,
     winner: "Borussia Dortmund",
     losers: "Juventus",
     results: "B.Dortmund (3-1)"
   },
   {
      year: 1998,
     winner: "Real Madrid",
     losers: "Juventus",
     results: "Real Madrid (1-)"
   },
   {
      year: 1999,
     winner: "Manchester United",
     losers: "Bayern Munich",
     results: "Man utd (2-1)"
   },
   {
      year: 2000,
     winner: "Real Madrid",
     losers: "Valencia",
     results: "Real Madrid (3-0)"
   },
   {
      year: 2001,
     winner: "Bayern Munich",
     losers: "Valencia",
     results: "Bayern (5-4 on penalties)"
   },
   {
      year: 2002,
     winner: "Real Madrid",
     losers: "Bayer Leverkusen",
     results: "Real Madrid won 2-1"
   },
   {
      year: 2003,
     winner: "AC Milan",
     losers: "Juventus",
     results: "AC Milan (3-2 on penalties)"
   },
   {
      year: 2004,
     winner: "FC Porto",
     losers: "AS Monaco",
     results: "FC Porto (3-0)"
   },
   {
      year: 2005,
     winner: "Liverpool",
     losers: "AC Milan",
     results: "Liverpool (3-2 on penalties)"
   },
   {
      year: 2006,
     winner: "Barcelona",
     losers: "Arsenal",
     results: "Barcelona (2-1)"
   },
   {
      year: 2007,
     winner: "AC Milan",
     losers: "Liverpool",
     results: "AC Milan (2-1)"
   },
   {
      year: 2008,
     winner: "Manchester United",
     losers: "Chelsea",
     results: "Man United (6-5 on penalties)"
   },
   {
      year: 2009,
     winner: "Barcelona",
     losers: "Manchester United",
     results: "Barcelona (2-0)"
   },
   {
      year: 2010,
     winner: "Inter Milan",
     losers: "Bayern Munich",
     results: "Inter (3-0)"
   },
   {
      year: 2011,
     winner: "Barcelona",
     losers: "Manchester United",
     results: "Barcelona (3-1)"
   },
   {
      year: 2012,
     winner: "Chelsea",
     losers: "Bayern Munich",
     results: "Chelsea (4-3 on penalties)"
   },
   {
      year: 2013,
     winner: "Bayern Munich",
     losers: "Borussia Dortmund",
     results: "Bayern (2-1)"
   },
   {
      year: 2014,
     winner: "Real Madrid",
     losers: "Atletico Madrid",
     results: "Real Madrid (4-1 in extra time)"
   },
   {
      year: 2015,
     winner: "Barcelona",
     losers: "Juventus",
     results: "Barcelena (3-1)"
   },
   {
      year: 2016,
     winner: "Real Madrid",
     losers: "Atletico Madrid",
     results: "Real Madrid (5-3 on penalties)"
   },
   {
      year: 2017,
     winner: "Real Madrid",
     losers: "Juventus",
     results: "Real Madrid (4-1)"
   },
   {
      year: 2018,
     winner: "Real Madrid",
     losers: "Liverpool",
     results: "Real Madrid (3-1)"
   }
 ]

//Fifa world cup

var wc =[
   {
      year: 2018,
     host: "Russia",
     winner: "France",
     losers: "Croatia",
     results: "France 4 to 2"
   },
   {
      year: 2014,
     host: "Brazil",
     winner: "Germany",
     losers: "Argentina",
     results: "Germany 1 to 0"
   },
   {
      year: 2010,
     host: "South Africa",
     winner: "Spain",
     losers: "Netherlands",
     results: "Spain 1 to 0"
   },
   {
      year: 2006,
     host: "Germany",
     winner: "Italy",
     losers: "France",
     results: "1 to 1 (Italy 5 to 3 on penalties)"
   },
   {
      year: 2002,
     host: "Japan/S.Korea",
     winner: "Brazil",
     losers: "Germany",
     results: "Brazil 2 to 0"
   },
   {
      year: 1998,
     host: "France",
     winner: "France",
     losers: "Brazil",
     results: "France 3 to 0"
   },
   {
      year: 1994,
     host: "USA",
     winner: "Brazil",
     losers: "Italy",
     results: "0 to 0, (Brazil 3 to 2 on Penalties)"
   },
   {
      year: 1990,
     host: "Italy",
     winner: "Germany",
     losers: "Argentina",
     results: "Germany 1 to 0"
   },
   {
      year: 1986,
     host: "Mexico",
     winner: "Argentina",
     losers: "Germany",
     results: "Argentina 3 to 2"
   },
   {
      year: 1982,
     host: "Spain",
     winner: "Italy",
     losers: "Germany",
     results: "Italy 3 to 1"
   }
 ]


