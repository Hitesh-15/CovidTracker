
$(document).ready(function()
{
    init()


    function highest(myArguments){ 
        return myArguments.sort(function(a,b)
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
            for(i=0;i<186;i++)
            {
                output[i]=data.Countries[i].TotalDeaths;
                // console.log(output)
                
                // console.log(data.Countries[i].TotalDeaths)
            }
            console.log(highest(output));
            console.log(output[0])
            // output.sort()
            // console.log(output[0])

            // var points = [400, 100, 1000, 5, 25, 160];
            // console.log(points.sort(function(a, b){return b-a}));
            // console.log(points[0])

        //     data=
        //     `
        //     <td>${data.Global.TotalConfirmed}</td>
        //     <td>${data.Global.TotalDeaths}</td>
        //     <td>${data.Global.TotalRecovered}</td>
        //     `
        //     $("#data").html(data)
        })
    }
})