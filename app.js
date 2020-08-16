
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
            
            var i;
            var output=new Array()
            
            let highestnumber
            for(i=0;i<186;i++)
            {
                output[i]=data.Countries[i].TotalConfirmed;
                
            }
            // console.log("Sorted in highest country: "+highest(output));
            highest(output)
            var HighestCountryByTotal=new Array();
            for(i=0;i<178;i++)
            {
                // console.log(output[0])
                if(output[0]==data.Countries[i].TotalConfirmed)
                {
                    HighestCountryByTotal[i]=data.Countries[i].Country;
                    console.log(HighestCountryByTotal[i])
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
            $("#countrydata").html(countrydata)
        })
    }
})
