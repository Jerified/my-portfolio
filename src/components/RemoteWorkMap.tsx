'use client'

import React, { useMemo } from 'react';
import Map, { Marker, Source, Layer, NavigationControl } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
// @ts-ignore
import type { CircleLayer, LineLayer } from 'maplibre-gl';

// Work locations with coordinates
const workLocations = [
  { city: "Lagos", lat: 6.5244, lng: 3.3792, isHome: true },
  { city: "New York", lat: 40.7128, lng: -74.006 },
  { city: "London", lat: 51.5074, lng: -0.1278 },
  { city: "Tokyo", lat: 35.6762, lng: 139.6503 },
  { city: "Sydney", lat: -33.8688, lng: 151.2093 },
  { city: "Paris", lat: 48.8566, lng: 2.3522 },
  { city: "San Francisco", lat: 37.7749, lng: -122.4194 },
  { city: "Moscow", lat: 55.7558, lng: 37.6176 },
  { city: "Beijing", lat: 39.9042, lng: 116.4074 },
  { city: "Singapore", lat: 1.3521, lng: 103.8198 },
];

// Helper to generate Great Circle paths (approximate for visual effect)
function getGreatCircle(start: { lng: number, lat: number }, end: { lng: number, lat: number }, points = 50) {
    const startLng = start.lng * Math.PI / 180;
    const startLat = start.lat * Math.PI / 180;
    const endLng = end.lng * Math.PI / 180;
    const endLat = end.lat * Math.PI / 180;
    const coordinates = [];

    for (let i = 0; i <= points; i++) {
        const f = i / points;
        const A = Math.sin((1 - f) * Math.PI) / Math.sin(Math.PI); // Simplification for straight line interpolation on sphere
        // Actually, for visual arcs on Mercator, simple interpolation often looks straight. 
        // We need 'intermediatePoint' logic. 
        // Let's use a simpler quadratic bezier approx for "height" visual if 3D, but for 2D map, 
        // distinct curves require proper Great Circle formulae.
        // Implementing standard Slerp...
        
        const d = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin((startLat - endLat) / 2), 2) +
            Math.cos(startLat) * Math.cos(endLat) * Math.pow(Math.sin((startLng - endLng) / 2), 2)));
        
        const A_slerp = Math.sin((1 - f) * d) / Math.sin(d);
        const B_slerp = Math.sin(f * d) / Math.sin(d);
        
        const x = A_slerp * Math.cos(startLat) * Math.cos(startLng) + B_slerp * Math.cos(endLat) * Math.cos(endLng);
        const y = A_slerp * Math.cos(startLat) * Math.sin(startLng) + B_slerp * Math.cos(endLat) * Math.sin(endLng);
        const z = A_slerp * Math.sin(startLat) + B_slerp * Math.sin(endLat);
        
        const lat = Math.atan2(z, Math.sqrt(x*x + y*y));
        const lng = Math.atan2(y, x);
        
        coordinates.push([lng * 180 / Math.PI, lat * 180 / Math.PI]);
    }
    return coordinates;
}

export function RemoteWorkMap() {
  const home = workLocations.find(l => l.isHome)!;

  // Generate lines from Home to every other location
  const linesGeoJSON = useMemo(() => {
    return {
      type: 'FeatureCollection',
      features: workLocations.filter(l => !l.isHome).map(loc => ({
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: getGreatCircle({ lng: home.lng, lat: home.lat }, { lng: loc.lng, lat: loc.lat })
        }
      }))
    };
  }, [home]);

  const layerStyle: LineLayer = {
    id: 'lines',
    type: 'line',
    paint: {
        'line-color': '#feb47b', // Theme orange
        'line-width': 1.5,
        'line-opacity': 0.6,
        'line-dasharray': [2, 1] // Dashed effect
    }
  };

  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-xl border border-white/20 shadow-2xl">
      <Map
        initialViewState={{
          longitude: 10,
          latitude: 20,
          zoom: 1.5
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
        attributionControl={false}
        scrollZoom={false} // Disable scroll zoom by default to prevent getting stuck
        dragPan={true}
        dragRotate={true}
      >
        <NavigationControl position="bottom-right" showCompass={false} />

        {/* Lines Layer */}
        {/* @ts-ignore - geojson types mismatch often occur but are valid */}
        <Source id="routes" type="geojson" data={linesGeoJSON}>
            <Layer {...layerStyle} />
        </Source>

        {/* Markers */}
        {workLocations.map((loc, index) => (
          <Marker 
            key={index} 
            longitude={loc.lng} 
            latitude={loc.lat} 
            anchor="center"
          >
            <div className="relative flex items-center justify-center group">
                <div className={`
                    absolute rounded-full opacity-75 animate-ping
                    ${loc.isHome ? 'bg-[#feb47b] w-6 h-6' : 'bg-blue-400 w-3 h-3'}
                `} />
                <div className={`
                    relative rounded-full border-2 border-white shadow-lg transition-all duration-300
                    ${loc.isHome ? 'bg-[#feb47b] w-3 h-3 group-hover:w-4 group-hover:h-4' : 'bg-blue-500 w-2 h-2 group-hover:w-3 group-hover:h-3'}
                `} />
                
                {/* Tooltip on hover */}
                <div className="absolute top-4 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/80 text-white text-[10px] px-2 py-1 rounded mt-1 pointer-events-none">
                    {loc.city}
                </div>
            </div>
          </Marker>
        ))}
      </Map>

      {/* Overlay Gradient for "fade" effect */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0f0f10] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0f0f10] to-transparent pointer-events-none" />

      
    </div>
  )
}
