
$(document).ready(function()
{
    init()
    function highest(myParamter){ 
        return myParamter.sort(function(a,b)
        { 
          return b - a; 
        }); 
      }

      $( ".inner-switch" ).on("click", function() 
      {
        if( $( "body" ).hasClass( "dark" )) 
        {
          $( "body" ).removeClass( "dark" );
          $( ".inner-switch" ).text( "OFF" );
        } 
        else 
        {
          $( "body" ).addClass( "dark" );
          $( ".inner-switch" ).text( "ON" );
        }
    });


    function init()
    {
        var url="http://api.covid19api.com/summary"
        $.get(url, function(data)
        {
            // console.log(data);
            // console.log(data.Countries[177]);
            // console.log(data.Countries[177].Country);
            // console.log(data.Countries[177].TotalConfirmed);
            // console.log(data.Countries[177].TotalDeaths);
            // console.log(data.Countries[177].TotalRecovered);
            
            var i,j;
            var output=new Array()
            
            let highestnumber
            for(i=0;i<186;i++)
            {
                output[i]=data.Countries[i].TotalConfirmed;
                
            }
            // console.log("Sorted in highest country: "+highest(output));
            highest(output)
            var HighestCountryByTotal=new Array();
            var HighestCountryByConfirmed=new Array();
            var HighestCountryByDeath=new Array();
            var HighestCountryByRecovered=new Array();
            for(i=0;i<186;i++)
            {
                for(j=0;j<186;j++)
                {
                    if(output[i]==data.Countries[j].TotalConfirmed)
                    {
                        HighestCountryByTotal[i]=data.Countries[j].Country;
                        HighestCountryByConfirmed[i]=data.Countries[j].TotalConfirmed;
                        HighestCountryByDeath[i]=data.Countries[j].TotalDeaths;
                        HighestCountryByRecovered[i]=data.Countries[j].TotalRecovered;
                        // console.log(HighestCountryByTotal[i]+" "+HighestCountryByConfirmed[i]+" "+HighestCountryByDeath[i]+" "+HighestCountryByRecovered[i])
                        // $("#countryvalue").append(HighestCountryByTotal[i]);
                        // $("#totalvalue").append(HighestCountryByConfirmed[i]);
                        // $("#deathvalue").append(HighestCountryByDeath[i]);
                        // $("#recoveredvalue").append(HighestCountryByRecovered[i]);
                        $("#countryvalue").append('<table class = "table table-hover text-center"><tr><th>'+HighestCountryByTotal[i]+'</th></tr></table>')
                        $("#totalvalue").append('<table class = "table table-hover text-center"><tr><th>'+HighestCountryByConfirmed[i]+'</th></tr></table>')
                        $("#deathvalue").append('<table class = "table table-hover text-center"><tr><th>'+HighestCountryByDeath[i]+'</th></tr></table>')
                        $("#recoveredvalue").append('<table class = "table table-hover text-center"><tr><th>'+HighestCountryByRecovered[i]+'</th></tr></table>')
                    }
                }
            }    
            // highestnumber=output[0]
            // console.log("Highest Country: "+output[0])
            // if(highestnumber==data.Countries[177].TotalDeaths)
            // {
            //     console.log("checks"+data.Countries[177].Country);
            // }
            

            totaldata=
            `
            <td>${data.Global.TotalConfirmed}</td>
            <td>${data.Global.TotalDeaths}</td>
            <td>${data.Global.TotalRecovered}</td>
            `
            totalcases=`${data.Global.TotalConfirmed}`
            totaldeaths=`${data.Global.TotalDeaths}`
            totalrecovered=`${data.Global.TotalRecovered}`
            // countrydata=
            // `
            // <td>${data.Countries[177].Country}</td>
            // <td>${data.Countries[177].TotalConfirmed}</td>
            // <td>${data.Countries[177].TotalDeaths}</td>
            // <td>${data.Countries[177].TotalRecovered}</td>
            // `
            // $("#red").css("color","red")
            $("#totaldata").html(totaldata)
            $("#totalcases").html(totalcases)
            $("#totaldeaths").html(totaldeaths)
            $("#totalrecovered").html(totalrecovered)
            // $("#countrydata").html(countrydata)
        })
    }
})

