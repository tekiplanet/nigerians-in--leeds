"use client";

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

// Fix for default marker icons in Leaflet + Next.js
const DefaultIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapComponentProps {
    activeLocation: {
        name: string;
        coords: [number, number];
        description: string;
        stats: string;
        helpType: string;
    };
}

// Helper component to center the map when activeLocation changes
const ChangeView = ({ center }: { center: [number, number] }) => {
    const map = useMap();
    useEffect(() => {
        map.setView(center, 12, { animate: true });
    }, [center, map]);
    return null;
};

const MapComponent: React.FC<MapComponentProps> = ({ activeLocation }) => {
    const locations = [
        { name: "Leeds", coords: [53.801277, -1.548567] as [number, number] },
        { name: "Bradford", coords: [53.79391, -1.75206] as [number, number] },
        { name: "York", coords: [53.95996, -1.08729] as [number, number] },
    ];

    return (
        <div className="w-full h-full rounded-[32px] overflow-hidden shadow-inner border-4 border-white isolate">
            <MapContainer
                center={activeLocation.coords}
                zoom={12}
                style={{ height: '100%', width: '100%' }}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />
                <ChangeView center={activeLocation.coords} />
                {locations.map((loc) => (
                    <Marker
                        key={loc.name}
                        position={loc.coords}
                        icon={DefaultIcon}
                    >
                        <Popup>
                            <div className="font-sans font-bold text-brand-purple p-1">{loc.name}</div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default MapComponent;
