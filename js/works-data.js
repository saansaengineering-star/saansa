/* Projects shown in the carousel (index.html, #works).

   TO ADD A PROJECT
   1. Copy its photo into  assets/photos/  (JPG, 1600 px wide or less keeps the page fast).
   2. Add one entry to the list below. The carousel loops through every entry.

   Each entry:
     title     heading under the photo
     place     small label above the heading
     text      one or two sentences
     alt       describes the photo for screen readers
     image     the photo file
     position  optional crop focus for wide photos, for example "70% center"
     art       id of the drawn illustration shown if the photo cannot load
*/
window.SAANSA_WORKS = [
  {
    title: "Property valuation for banks and cooperatives",
    place: "Banks and cooperatives",
    text: "Worked with 5+ commercial banks and 10+ cooperatives for property valuation.",
    alt: "Valuation engineer in a high-visibility vest filling in a property valuation checklist while a property owner points out the plot boundary",
    image: "assets/photos/property-valuation.jpg",
    position: "40% center",
    art: "art-blueprint"
  },
  {
    title: "Specification and procurement support",
    place: "Governmental organizations",
    text: "Worked as consultant for specification and procurement support for 15+ governmental organizations.",
    alt: "Engineer pointing at a site analysis drawing on a curved monitor, with a bill of quantities and a report on the other screens",
    image: "assets/photos/site-analysis-boq.jpg",
    position: "72% center",
    art: "art-blueprint"
  },
  {
    title: "Insurance survey and loss assessment",
    place: "Non-life insurance",
    text: "Worked as insurance surveyor for 5+ non-life insurance companies.",
    alt: "Surveyor in a high-visibility vest inspecting a damaged car and a light truck on a road with snow-capped mountains behind",
    image: "assets/photos/accident-site-survey.jpg",
    position: "48% center",
    art: "art-blueprint"
  },
  {
    title: "MEP design for a hotel",
    place: "Hotel project",
    text: "Designed the MEP systems for a hotel project.",
    alt: "Engineer working on a building floor plan in CAD on a large monitor, with colleagues and drawings in a bright office",
    image: "assets/photos/design-office.jpg",
    position: "55% center",
    art: "art-blueprint"
  }
];
