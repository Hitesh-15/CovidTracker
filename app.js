
$(document).ready(function()
{
    init()
    function highest(myParamter){ 
        return myParamter.sort(function(a,b)
        { 
          return b - a; 
        }); 
      }

    function init()
    {
        var url="https://api.covid19api.com/summary"
        var data='';
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
                {// console.log(output[0])
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
                    $("#countryvalue").append('<tr><th>'+HighestCountryByTotal[i]+'</th></tr>')
                    $("#totalvalue").append('<tr><th>'+HighestCountryByConfirmed[i]+'</th></tr>')
                    $("#deathvalue").append('<tr><th>'+HighestCountryByDeath[i]+'</th></tr>')
                    $("#recoveredvalue").append('<tr><th>'+HighestCountryByRecovered[i]+'</th></tr>')
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
            countrydata=
            `
            <td>${data.Countries[177].Country}</td>
            <td>${data.Countries[177].TotalConfirmed}</td>
            <td>${data.Countries[177].TotalDeaths}</td>
            <td>${data.Countries[177].TotalRecovered}</td>
            `
            $("#red").css("color","red")
            $("#totaldata").html(totaldata)
            // $("#countrydata").html(countrydata)
        })
    }
})
