import React from 'react';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = '';

export default class TrailMap extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lng: -112.95122,
      lat: 37.25909,
      zoom: 14
    };
    this.mapContainer = React.createRef();
  }

  // Way to get the coordinates for the angel trail landing.
  // https://api.mapbox.com/directions/v5/mapbox/walking/-112.95122,37.25909;-112.94787,37.26931?geometries=geojson&access_token=
// api request for retrieving directions. GET /directions/v5 / { profile } / { coordinates }



  // Boiler Plate code from mapbox to render map
  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/ebell691/ckwe9s1za164315qxq1mediw9',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });


    // let coords = response.responseJSON.routes[0].geometry.coordinates
    // drawRoute(coords)

    const drawRoute = (response) => {
      // const json = response.json;
      // const data = json.routes[0];
      // const route = data.geometry.coordinates;
      
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
            'line-opacity': 0.75
          }
        });
      }
    }

      map.on('load', () => {
        $.ajax({
          method: "GET",
          url: 'https://api.mapbox.com/directions/v5/mapbox/walking/-112.95122,37.25909;-112.94787,37.26931?geometries=geojson&access_token=',
        }).then(res => drawRoute(res.routes[0].geometry.coordinates))
      })

    // set new state when user moves map
    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });


  }

  


  render() {
    const { lng, lat, zoom } = this.state;
    return (
      <div>
        <div className="sidebar">
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
        <div ref={this.mapContainer} className="map-container" />
      </div>
    );
  }
}