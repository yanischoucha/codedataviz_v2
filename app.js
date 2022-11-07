    // Fetch Block
    function updateChart() {
        async function fetchData(){
          const url = 'charts_billboard.json';
          const response = await fetch(url);
          // wait until the request has been completed
          const datapoints = await response.json();
          console.log(datapoints);
          return datapoints;
        };
    
        fetchData().then(datapoints => {
          const day = datapoints.topweekly[0].plays.map(
            function(index){
              return index.date;
            })
            const rank = datapoints.topweekly[0].plays.map(
            function(index){
              return index.rank;
            })
            const song = datapoints.topweekly[0].plays.map(
            function(index){
              return index.song;
            })
    
            console.log(day);
            console.log(rank);
            console.log(song);
    
            myChart.config.data.datasets[0].label = rank;
            myChart.config.data.labels = date;
            myChart.config.data.datasets[0].data = plays;
            myChart.update();
        });
      }