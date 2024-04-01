interface item {
  id: number;
  title: string;
  image: string;
}

export interface SportsItem extends item {
  totalEvents: number;
  sport: string;
}

type Sports = {
  title: string;
  items: SportsItem[];
};

export const sports: Sports = {
  title: "Sports",
  items: [
    {
      id: 1,
      title: "Sacramento River Cats",
      totalEvents: 48,
      sport: "Baseball",
      image: "/images/river-cats.png",
    },
    {
      id: 2,
      title: "Las Vegas Aviators",
      totalEvents: 28,
      sport: "Baseball",
      image: "/images/aviators1.png",
    },
    {
      id: 3,
      title: "new jersey devils",
      totalEvents: 15,
      sport: "Ice Hockey",
      image: "/images/devils.png",
    },
    {
      id: 4,
      title: "Las Vegas Aviators",
      totalEvents: 28,
      sport: "Baseball",
      image: "/images/aviators1.png",
    },
    {
      id: 5,
      title: "Sacramento River Cats",
      totalEvents: 48,
      sport: "Baseball",
      image: "/images/river-cats.png",
    },
    {
      id: 6,
      title: "Las Vegas Aviators",
      totalEvents: 28,
      sport: "Baseball",
      image: "/images/aviators1.png",
    },
    {
      id: 7,
      title: "new jersey devils",
      totalEvents: 15,
      sport: "Ice Hockey",
      image: "/images/devils.png",
    },
    {
      id: 8,
      title: "Las Vegas Aviators",
      totalEvents: 28,
      sport: "Baseball",
      image: "/images/aviators1.png",
    },
    {
      id: 9,
      title: "new jersey devils",
      totalEvents: 15,
      sport: "Ice Hockey",
      image: "/images/devils.png",
    },
  ],
};

export interface CollectionItem extends item {
  btnText: string;
  venue: string;
  date: string;
  time: string;
}

type Collections = {
  title: string;
  subTitle: string;
  items: CollectionItem[];
};

export const collections: Collections = {
  title: "Collection Spotlight",
  subTitle:
    "Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!",
  items: [
    {
      id: 10,
      title: "Las Vegas Aviators",
      btnText: "Take Flight Collection",
      venue: "Las Vegas Ballpark, Las Vegas, Nevada",
      date: "15-10-2023",
      time: "4:30 PM",
      image: "/images/Ticket_Mockup 3.png",
    },
    {
      id: 11,
      title: "Sacramento River Cats",
      btnText: "Orange Collection",
      venue: "Sutter Health Park, Sacramento, California",
      date: "15-10-2023",
      time: "4:30 PM",
      image: "/images/Ticket_Mockup 4.png",
    },
    {
      id: 12,
      title: "Las Vegas Aviators",
      btnText: "Take Flight Collection",
      venue: "Las Vegas Ballpark, Las Vegas, Nevada",
      date: "15-10-2023",
      time: "4:30 PM",
      image: "/images/Ticket_Mockup 3.png",
    },
    {
      id: 13,
      title: "Sacramento River Cats",
      btnText: "Orange Collection",
      venue: "Sutter Health Park, Sacramento, California",
      date: "15-10-2023",
      time: "4:30 PM",
      image: "/images/Ticket_Mockup 4.png",
    },
    {
      id: 14,
      title: "Las Vegas Aviators",
      btnText: "Take Flight Collection",
      venue: "Las Vegas Ballpark, Las Vegas, Nevada",
      date: "15-10-2023",
      time: "4:30 PM",
      image: "/images/Ticket_Mockup 3.png",
    },
    {
      id: 15,
      title: "Sacramento River Cats",
      btnText: "Orange Collection",
      venue: "Sutter Health Park, Sacramento, California",
      date: "15-10-2023",
      time: "4:30 PM",
      image: "/images/Ticket_Mockup 4.png",
    },
  ],
};
