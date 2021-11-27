import React from 'react';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
// import NavigationControl from "react-map-gl";

mapboxgl.accessToken = '';

export default class TrailMap extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lng: this.props.trail.lng,
      lat: this.props.trail.lat,
      zoom: 14
    };
    this.mapContainer = React.createRef();
  }


  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/ebell691/ckwe9s1za164315qxq1mediw9',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });


    const drawRoute = (response) => {
      const geojson = {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: response
        }
      };

      if (map.getSource('route')) {
        map.getSource('route').setData(geojson);
      }
      else {
        map.addLayer({
          id: 'route',
          type: 'line',
          source: {
            type: 'geojson',
            data: geojson
          },
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': 'red',
            'line-width': 5,
            'line-opacity': 0.85
            }
          });
        }
      }

    const waypoints = this.props.trail.waypoints.split(',')
    const start = [waypoints[0], waypoints[1]]
    const end = [waypoints[2], waypoints[3]]

      map.on('load', () => {
        $.ajax({
          method: "GET",
          url: `https://api.mapbox.com/directions/v5/mapbox/walking/${start};${end}?geometries=geojson&access_token=`,
        }).then(res => drawRoute(res.routes[0].geometry.coordinates))

        const markerStart = new mapboxgl.Marker()
          .setLngLat(start)
          .setPopup(new mapboxgl.Popup().setHTML("<h1>Start/End</h1>"))
          .addTo(map);

         
          // create a HTML element for each feature
          // const el = document.createElement('div');
          // el.className = 'marker';
          // // make a marker for each feature and add to the map
          // new mapboxgl.Marker(el).setLngLat([-112.951224, 37.259087]).addTo(map);
        
                
        const markerEnd = new mapboxgl.Marker()
          .setLngLat(end)
          .setPopup(new mapboxgl.Popup().setHTML("<h1>At this point you have a 360 view of the valley. This is the end of the trail</h1>"))
          .addTo(map);
      })

      map.addControl(new mapboxgl.NavigationControl(), 'bottom-left')
      
    //start coords in table  
    // get end coords 
    // first, get length: response.responseJSON.routes[0].geometry.coordinates.length - 1
    // response.responseJSON.routes[0].geometry.coordinates[42]
    // add to schema the begin & end pts, format to put them in the ajax url
    // Add lng and lat as center of

    
      // set new state when user moves map
      map.on('move', () => {
        this.setState({
          lng: map.getCenter().lng.toFixed(5),
          lat: map.getCenter().lat.toFixed(5),
          zoom: map.getZoom().toFixed(2)
        });
      });
  }


  render() {
    const { lng, lat, zoom } = this.state;
    return (
      <div>
          <link rel="stylesheet" href="https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.1/mapbox-gl.css" type="text/css" />
        
        {/* <div className="sidebar">
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div> */}
        <div className='map-container'>
        <div className='left-trail-side-bar'> Hello</div>
        <div ref={this.mapContainer} className="map" />
        </div>
      </div>
    );
  }
}