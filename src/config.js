module.exports = {
  links: [
    {
      id: 1,
      label: "Interior Narratives’",
      menuItems: [{ id: 1, label: "All", url: "/interior/all" }],
    },
    {
      id: 2,
      label: "Chronicles",
      menuItems: [
        { id: 1, label: "Sub menu 1", url: "/" },
        { id: 2, label: "Sub menu 2", url: "/" },
        { id: 3, label: "Sub menu 3", url: "/" },
        { id: 4, label: "Sub menu 4", url: "/" },
      ],
    },
    {
      id: 3,
      label: "Our Story",
      menuItems: [
        { id: 1, label: "Spellbound", url: "/" },
        { id: 2, label: "Our Design Culture", url: "/" },
      ],
    },
    {
      id: 4,
      label: "About",
      menuItems: [{ id: 1, label: "Contact Us", url: "/contact" }],
    },
  ],
  blocks: [
    {
      id: 1,
      component: "OneImageBlock",
      subBlocks: [
        {
          id: 11,
          title: "interiors",
          subtitle: "",
          body: "We follow a deeply contextual approach to our work and combine this with a strong focus on building the tactile and sensory qualities and experiential nature of the space through an in-depth understanding of methodologies, materials and story-telling.",
          url: "",
          image: "BlockImage11.jpg",
        },
      ],
    },
    {
      id: 2,
      component: "FourImageBlock",
      subBlocks: [
        {
          id: 21,
          title: "RAAS Chhatrasagar",
          subtitle: "Hospitality",
          body: "A wildlife camping experience that reinterprets the historical, and weaves in the biodiversity of its setting with resilient ways of building, RAAS Chhatrasagar seeks to stand out from the crowd by blending in with its environment.",
          url: "/interior/all/raas",
          image: "BlockImage21.jpg",
        },
        {
          id: 22,
          title: "The Quorum Gurugram",
          subtitle: "F&B | Leisure",
          body: "A seamless spatial experience combining leisure and learning, crafted to create an urban commune.",
          url: "/interior/all/raas",
          image: "BlockImage22.jpg",
        },
        {
          id: 23,
          title: "Lifeyoga",
          subtitle: "Leisure",
          body: "The flagship centre for Lifeyoga is a first-of-its-kind meditative retreat for city dwellers in the heart of New Delhi",
          url: "/interior/all/raas",
          image: "BlockImage23.jpg",
        },
        {
          id: 24,
          title: "Ekaya Ahmedabad",
          subtitle: "retail",
          body: "Immersive celebration of Banarasi textile traditions.",
          url: "/interior/all/raas",
          image: "BlockImage24.jpg",
        },
      ],
    },
    {
      id: 3,
      component: "ThreeImageBlock",
      subBlocks: [
        {
          id: 31,
          title: "Paro by Good Earth",
          subtitle: "retail | brand experiences",
          body: "Crafted as an urban sanctuary, the concept store for Paro invites visitors to a unique retail experience.",
          url: "/interior/all/raas",
          image: "BlockImage31.jpg",
        },
        {
          id: 32,
          title: "PRIX VERSAILLES WORLD ARCHITECTURE",
          subtitle: "awards",
          body: "Masti Dubai gets the Special Prize (Interiors) in the Restaurants category for Africa and West Asia",
          url: "/interior/all/raas",
          image: "BlockImage32.jpg",
        },
        {
          id: 33,
          title: "Villa in the Woods",
          subtitle: "HOMES",
          body: "An Eco-Conscious Sanctuary in the Himalayas",
          url: "/interior/all/raas",
          image: "BlockImage33.jpg",
        },
      ],
    },
    {
      id: 4,
      component: "ThreeImageBlock",
      subBlocks: [
        {
          id: 41,
          title: "Masti Cocktails & Cuisine",
          subtitle: "F&B",
          body: "A vibrant and eclectic F&B destination, Masti is infused with all the personality of India, without any of the clichés.",
          url: "/interior/all/raas",
          image: "BlockImage41.jpg",
        },
        {
          id: 42,
          title: "Coast Café",
          subtitle: "F&B",
          body: "In the repurposing of spaces for Ogaan, one of India’s pioneering multi-brand fashion stores, the building and interior of Coast Café uses restrained simplicity",
          url: "/interior/all/raas",
          image: "BlockImage42.jpg",
        },
        {
          id: 43,
          title: "Clubhouse at Antara Senior Living",
          subtitle: "leisure",
          body: "Part of the Max India enterprise, Antara in Dehradun is a first-of-its-kind senior living community that bases the premise of its design on a progressive approach to community building.",
          url: "/interior/all/raas",
          image: "BlockImage43.jpg",
        },
      ],
    },
  ],
};
