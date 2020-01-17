import React from "react";
import styled from "styled-components";
import Project from "./Project";

const list = [
  {
    client: 'Asphalt Tango Records',
    involvement: 'Design + Development',
    title: 'ATR Website (coming soon)',
    image: 'CRImg'
  },
  {
    client: 'Circadian Rhythms',
    involvement: 'Development',
    title: 'CR004'
  },
  {
    client: 'N/A',
    involvement: 'Design Contractor',
    title: 'UI Prototypes'
  },
  {
    client: 'Circadian Rhythms',
    involvement: 'Development',
    title: 'Circadian Rhythms Website (2019)'
  },
  {
    client: 'Circadian Rhythms',
    involvement: 'Development',
    title: 'CR003'
  },
  {
    client: 'Gabi',
    involvement: 'Design, Development',
    title: 'Reagent Companion'
  }
]

const workPrint = (projects) => {
    return projects.map((p, i) => {
        return (
        <Project
            key={p.title}
            client={p.client}
            image={p.image}
            involvement={p.involvement}
            title={p.title}
        />
        )
    })
}


export default () => (
    <div>
        <div>Screenshots</div>
        {workPrint(list)}
    </div>
  );
  