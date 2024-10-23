import React from 'react'

type nameType = {
  common: string
}

interface Icountry {
  name: { common: string }
  flags: { svg: string }
  capital: string[]
  maps: { googleMaps: string }
  continents: string[]
}

function Country({ name, capital, flags, maps, continents }: Icountry) {
  return (
    <div
      style={{
        height: '150px',
        width: '600px',
        backgroundColor: 'lightgrey',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        gap: '1.5rem'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <h3 style={{ display: 'flex', alignItems: 'start' }}>
          Country: {name.common} {'/'} {continents}
        </h3>
        <h4 style={{ display: 'flex', alignItems: 'start' }}>Capital: {capital}</h4>
        <img
          src={flags.svg}
          alt="#"
          style={{ width: '5rem', height: '3rem', display: 'flex', alignItems: 'start' }}
        />
      </div>
      <div style={{ cursor: 'pointer' }}>
        <a
          href={maps.googleMaps}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: 'none' }}
        >
          Show on map
        </a>
      </div>
    </div>
  )
}

export default Country
