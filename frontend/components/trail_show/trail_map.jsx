import React from 'react';
import mapboxgl from 'mapbox-gl'; 
// import NavigationControl from "react-map-gl";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandAlt } from '@fortawesome/free-solid-svg-icons'
import TrailShow from './trail_show'

mapboxgl.accessToken = '';

export default class TrailMap extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lng: this.props.trail.lng,
      lat: this.props.trail.lat,
      zoom: 14,
      isActive: this.props.isActive
    };
    this.mapContainer = React.createRef();
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent() {
    this.setState({ isActive: false })
    console.log(this.state.isActive)
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

      // emerald trail: https://api.mapbox.com/directions/v5/mapbox/walking/-112.95622,37.25179;-112.95622,37.25179;-112.96569623443925,37.256845017140556;-112.96167302936777,37.25688614702615;-112.95155416784984,37.25976679368479;-112.95622,37.25179?geometries=geojson&access_token=
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

      map.addControl(new mapboxgl.NavigationControl(), 'top-right')
      
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
      
        {this.state.isActive ? 
        (<div className='map-container'>
        <div className='left-trail-side-bar'>
            <div className='link-to-trail-box'>
              <button className='link-to-trail' onClick={this.hideComponent}>View Trail Details  <FontAwesomeIcon id='expand-icon' icon={faExpandAlt} /></button>
            </div>
            <div className='trail-photo-container-sidebar'>
              <img className='trail-photo-sidebar' src='https://trail-photos.s3.us-east-2.amazonaws.com/Angels_trail_landing.jpg' />
              <div className='title-bucket'>
                <h1 className='trail-title'>{this.props.trail.trail_name}</h1>
                <div className='trail-specs'>
                  <span className='difficulty'>{this.props.trail.difficulty}</span>
                  <span id='agg-rating'>
                    <span>
                      <img className='yellow-star' src='https://cdn-assets.alltrails.com/assets/packs/4058040f767242298c7d.svg'></img>
                      <img className='yellow-star' src='https://cdn-assets.alltrails.com/assets/packs/4058040f767242298c7d.svg'></img>
                      <img className='yellow-star' src='https://cdn-assets.alltrails.com/assets/packs/4058040f767242298c7d.svg'></img>
                      <img className='yellow-star' src='https://cdn-assets.alltrails.com/assets/packs/4058040f767242298c7d.svg'></img>
                      <img className='yellow-star' src='https://cdn-assets.alltrails.com/assets/packs/4058040f767242298c7d.svg'></img>
                    </span>
                  </span>
                </div>
                <a className='link-to-park'>Zion National Park</a>
              </div>
            </div>
            <div className='main-container-sidebar' >
              <div className='action-bar' />
              <div className='route-container' >
                <img className='route-icon' src='https://cdn-assets.alltrails.com/assets/packs/ed305b8cebf7bc15eec3.png' />
              </div>
            </div>
            <div className='trail-info'>
                <article id='trail-description-box'>
                  <section id='trail-description'>
                    <p className='trail-description-text-sidebar'>{this.props.trail.description}</p>
                  </section>
                  <section className='trail-details'>
                    <span className='trail-details-styling'>
                      <span className='trail-stat'>Length</span>
                      <span className='trail-detail-stat'>{this.props.trail.length} mi</span>
                    </span>
                    <span className='trail-details-styling'>
                      <span className='trail-stat'>Elevation Gain</span>
                      <span className='trail-detail-stat'>{this.props.trail.elevation_gain} ft</span>
                    </span>
                    <span className='trail-details-styling'>
                      <span className='trail-stat'>Route Type</span>
                      <span className='trail-detail-stat'>{this.props.trail.route_type}</span>
                    </span>
                  </section>
                  <section className='reviews-box'>
                    <div>Placeholder for the review form - MVP 5</div>
                  </section>
                </article>
              
          </div>
        </div>
        <div ref={this.mapContainer} className="map" />
        </div>) : (<TrailShow isActive={this.state.isActive} />) 
        }

      </div>
    );
  }
}