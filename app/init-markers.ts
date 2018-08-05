export class Init{
    load(){
        if(localStorage.getItem('markers') === null || localStorage.getItem('markers')=== undefined){
        console.log('No markers found....creating...');

        var markers =[
            {
                name:'Company Two',
                lat:51.678418,
                lng: 7.809007,
                draggable: true
              },
              {
                name:'Company Two',
                lat:51.678418,
                lng: 7.809007,
                draggable: true
              },
              {
                name:'Company Two',
                lat:51.678418,
                lng: 7.809007,
                draggable: false
              },
            ];
            localStorage.setItem('markers',JSON.stringify(markers));
        } else{
            console.log('Loading markers....');
        }

    }
}