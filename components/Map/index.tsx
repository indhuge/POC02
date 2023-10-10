import React from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

const Map = ()=> (
                <MapContainer center={[-10.0566, -55.2139]} zoom={4} style={{height: '100%', width:'100%'}} attributionControl={false}>
  					<TileLayer
    					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  					/>
  					<Marker position={[51.505, -0.09]}>
    				<Popup>
     					A pretty CSS3 popup. <br/> Easily customizable.
    				</Popup>
  					</Marker>
					</MapContainer>
)

export default Map
