import React from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = '';

export default class TrailMap extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lng: -112.95122,
      lat: 37.25909,
      zoom: 12
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


    // make an ajax request to api to get JSON coordinates of trail
    const url = 'https://api.mapbox.com/directions/v5/mapbox/walking/-112.95122,37.25909;-112.94787,37.26931?geometries=geojson&access_token=
    const getTrailCoordinates = () => 
      $.ajax({
      method: "GET",
      url: url
      })

      // code from tutorial on mapbox
      const data = json.routes[0];
      const route = data.geometry.coordinates;
      const geojson = {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: route
        }
      };

      // getRoute => 
    map.on('load', () => {
      // make an initial directions request that
      // starts and ends at the same location
      getRoute(start);
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

  // set marker 
    // let marker = () => {
    //   new mapboxgl.Marker()
    //   .setLngLat([-112.95122, 37.25909])
    //   .addTo(map)}
  


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