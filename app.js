
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
        var url="https://api.covid19api.com/summary"
        var data='';
        $.get(url, function(data)
        {
            var i,j;
            var output=new Array()
            
            let highestnumber
            for(i=0;i<186;i++)
            {
                output[i]=data.Countries[i].TotalConfirmed;
                
            }
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
                        $("#countryvalue").append('<table class = "table table-hover text-center"><tr><th>'+HighestCountryByTotal[i]+'</th></tr></table>')
                        $("#totalvalue").append('<table class = "table table-hover text-center"><tr><th>'+HighestCountryByConfirmed[i]+'</th></tr></table>')
                        $("#deathvalue").append('<table class = "table table-hover text-center"><tr><th>'+HighestCountryByDeath[i]+'</th></tr></table>')
                        $("#recoveredvalue").append('<table class = "table table-hover text-center"><tr><th>'+HighestCountryByRecovered[i]+'</th></tr></table>')
                    }
                }
            } 
            totaldata=
            `
            <td>${data.Global.TotalConfirmed}</td>
            <td>${data.Global.TotalDeaths}</td>
            <td>${data.Global.TotalRecovered}</td>
            `
            $("#totaldata").html(totaldata)
        })
    }
})
