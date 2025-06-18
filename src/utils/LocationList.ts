export const locationList = [
  {
    id: 1,
    name: "Mall del Sur",
    stores: [
      {
        address: "Av. Los Lirios 301, San Juan de Miraflores 15801",
        hours: "10 a.m. - 10 p.m. Diario",
        point: [-12.154951848922439, -76.98226078998569],
        name: "Mall del Sur",
      },
    ],
    description:
      "Centro comercial moderno en SJM con tiendas por departamento, cine, patio de comidas y opciones de entretenimiento para toda la familia.",
  },
  {
    id: 2,
    name: "Cine Star Atocongo",
    stores: [
      {
        address: "Av. Los Héroes, San Juan de Miraflores",
        hours: "2 p.m. - 10 p.m. Diario",
        point: [-12.152321493309348, -76.97683068502738],
        name: "Cine Star Atocongo",
      },
    ],
    description:
      "Cine económico ubicado cerca de la estación Atocongo del Metro de Lima. Ofrece una experiencia sencilla con funciones actuales a precios accesibles.",
  },
  {
    id: 3,
    name: "Open Plaza Atocongo",
    stores: [
      {
        address: "Av. Circunvalación, San Juan de Miraflores",
        hours: "10 a.m. - 10 p.m. Diario",
        point: [-12.146942838645698, -76.98115853955281],
        name: "Open Plaza Atocongo",
      },
    ],
    description:
      "Centro comercial con supermercados, tiendas por departamento, restaurantes, cine y gimnasio. Ubicado estratégicamente frente a la estación Atocongo.",
  },
];

export const markersGoogle = [
  {
    coordinates: {
      latitude: -12.154951848922439,
      longitude: -76.98226078998569,
    },
    title: "Mall del Sur",
    snippet: "Centro comercial en San Juan de Miraflores",
    draggable: true,
  },
  {
    coordinates: {
      latitude: -12.152321493309348,
      longitude: -76.97683068502738,
    },
    title: "Cine Star Atocongo",
    snippet: "Cine económico cerca de la estación Atocongo",
    draggable: true,
  },
  {
    coordinates: {
      latitude: -12.146942838645698,
      longitude: -76.98115853955281,
    },
    title: "Open Plaza Atocongo",
    snippet: "Centro comercial frente a la estación Atocongo",
    draggable: true,
  },
];

export const polylineCoordinates = [
  { latitude: -12.154924828802882, longitude: -76.98164121902997 },
  { latitude: -12.155473630511553, longitude: -76.98248330035912 },
  { latitude: -12.158230094715384, longitude: -76.98016119727191 },
  { latitude: -12.161036420320091, longitude: -76.97944670400544 },
  { latitude: -12.16060695252997, longitude: -76.97745619164623 },
  { latitude: -12.158593460092975, longitude: -76.9779047506229 },
  { latitude: -12.156834816700409, longitude: -76.97837682651955 },
  { latitude: -12.156585362795202, longitude: -76.97852993221576 },
  { latitude: -12.157907465826774, longitude: -76.980150300834 },
];
