export type TServiceImage = {
  type: MehandiType;
  img_url: string;
  alt: string;
};

export type MehandiType =
  | "bridal"
  | "baby_shower"
  | "engegement"
  | "arabic"
  | "traditional"
  | "leg"
  | "party";

export interface IService {
  image: string;
  alt: string;
  title: string;
  price: string;
  description: string;
  type: MehandiType;
}

export function getSelectedService(type: MehandiType | null): IService {
  return services.find((service) => service.type === type) ?? services[0];
}

export const services: IService[] = [
  {
    image: "/assets/bridal.jpg",
    alt: "Bridal Mehandi",
    title: "Bridal Mehandi",
    price: "Starting at: ₹ 3100",
    description: "Elegant and intricate designs for your special occasions.",
    type: "bridal",
  },
  {
    image: "/assets/engegement.jpg",
    alt: "Engagement Mehandi",
    title: "Engagement Mehandi",
    price: "Starting at: ₹ 3100",
    description: "Elegant and intricate designs for your special occasions.",
    type: "engegement",
  },
  {
    image: "/assets/babyshower.jpg",
    alt: "Baby Shower Mehandi",
    title: "Baby Shower Mehandi",
    price: "Starting at: ₹ 3100",
    description: "Elegant and intricate designs for your special occasions.",
    type: "baby_shower",
  },
  {
    image: "/assets/leg.jpg",
    alt: "Legs Mehandi",
    title: "Leg Mehandi",
    price: "Starting at: ₹ 500",
    description: "Elegant and intricate designs for your special occasions.",
    type: "leg",
  },
  {
    image: "/assets/arabic.jpg",
    alt: "Arabic Mehandi",
    title: "Arabic Mehandi",
    price: "Starting at: ₹ 100/side",
    description: "Elegant and intricate designs for your special occasions.",
    type: "arabic",
  },
  {
    image: "/assets/traditional.jpg",
    alt: "Traditional Mehandi",
    title: "Traditional Mehandi",
    price: "Starting at: ₹ 250/side",
    description: "Elegant and intricate designs for your special occasions.",
    type: "traditional",
  },
  {
    image: "/assets/party.jpg",
    alt: "Party & Function Mehandi",
    title: "Party & Function Mehandi",
    price: "Starting at: ₹ 100",
    description: "Elegant and intricate designs for your special occasions.",
    type: "party",
  },
];

// Define proper TypeScript interfaces

export const serviceImage: TServiceImage[] = [
  // Bridal Images
  {
    type: "bridal",
    img_url: "/assets/images/bridal/1.jpg",
    alt: "Bridal wedding dress 1",
  },
  {
    type: "bridal",
    img_url: "/assets/images/bridal/2.jpg",
    alt: "Bridal wedding dress 2",
  },
  {
    type: "bridal",
    img_url: "/assets/images/bridal/3.jpg",
    alt: "Bridal bouquet 1",
  },
  {
    type: "bridal",
    img_url: "/assets/images/bridal/4.jpg",
    alt: "Bridal makeup 1",
  },
  {
    type: "bridal",
    img_url: "/assets/images/bridal/5.jpg",
    alt: "Bridal shoes 1",
  },
  {
    type: "bridal",
    img_url: "/assets/images/bridal/6.jpg",
    alt: "Bridal veil 1",
  },
  {
    type: "bridal",
    img_url: "/assets/images/bridal/7.jpg",
    alt: "Bridal hairstyle 1",
  },
  {
    type: "bridal",
    img_url: "/assets/images/bridal/8.jpg",
    alt: "Bridal wedding ceremony 1",
  },

  // Baby Shower Images
  {
    type: "baby_shower",
    img_url: "/assets/images/baby_shower/1.jpg",
    alt: "Baby shower decorations 1",
  },
  {
    type: "baby_shower",
    img_url: "/assets/images/baby_shower/2.jpg",
    alt: "Baby shower cake 1",
  },
  {
    type: "baby_shower",
    img_url: "/assets/images/baby_shower/3.jpg",
    alt: "Baby shower invitation 1",
  },
  {
    type: "baby_shower",
    img_url: "/assets/images/baby_shower/4.jpg",
    alt: "Baby shower balloons 1",
  },
  {
    type: "baby_shower",
    img_url: "/assets/images/baby_shower/5.jpg",
    alt: "Baby shower gifts 1",
  },
  {
    type: "baby_shower",
    img_url: "/assets/images/baby_shower/6.jpg",
    alt: "Baby shower photo booth 1",
  },
  {
    type: "baby_shower",
    img_url: "/assets/images/baby_shower/7.jpg",
    alt: "Baby shower themed table setup 1",
  },
  {
    type: "baby_shower",
    img_url: "/assets/images/baby_shower/8.jpg",
    alt: "Baby shower centerpiece 1",
  },

  // Engagement Images
  {
    type: "engegement",
    img_url: "/assets/images/engegement/1.jpg",
    alt: "Engagement ring 1",
  },
  {
    type: "engegement",
    img_url: "/assets/images/engegement/2.jpg",
    alt: "Engagement photoshoot 1",
  },
  {
    type: "engegement",
    img_url: "/assets/images/engegement/3.jpg",
    alt: "Engagement ceremony 1",
  },
  {
    type: "engegement",
    img_url: "/assets/images/engegement/4.jpg",
    alt: "Engagement cake 1",
  },
  {
    type: "engegement",
    img_url: "/assets/images/engegement/5.jpg",
    alt: "Engagement party decorations 1",
  },
  {
    type: "engegement",
    img_url: "/assets/images/engegement/6.jpg",
    alt: "Engagement couple posing 1",
  },
  {
    type: "engegement",
    img_url: "/assets/images/engegement/7.jpg",
    alt: "Engagement dress 1",
  },
  {
    type: "engegement",
    img_url: "/assets/images/engegement/8.jpg",
    alt: "Engagement celebration 1",
  },

  // Arabic Images
  {
    type: "arabic",
    img_url: "/assets/images/arabic/1.jpg",
    alt: "Arabic Mehandi design 1",
  },
  {
    type: "arabic",
    img_url: "/assets/images/arabic/2.jpg",
    alt: "Arabic Mehandi design 2",
  },
  {
    type: "arabic",
    img_url: "/assets/images/arabic/3.jpg",
    alt: "Arabic Mehandi design 3",
  },
  {
    type: "arabic",
    img_url: "/assets/images/arabic/4.jpg",
    alt: "Arabic Mehandi design 4",
  },
  {
    type: "arabic",
    img_url: "/assets/images/arabic/5.jpg",
    alt: "Arabic Mehandi design 5",
  },
  {
    type: "arabic",
    img_url: "/assets/images/arabic/6.jpg",
    alt: "Arabic Mehandi design 6",
  },
  {
    type: "arabic",
    img_url: "/assets/images/arabic/7.jpg",
    alt: "Arabic Mehandi design 7",
  },
  {
    type: "arabic",
    img_url: "/assets/images/arabic/8.jpg",
    alt: "Arabic Mehandi design 8",
  },

  // Traditional Images
  {
    type: "traditional",
    img_url: "/assets/images/traditional/1.jpg",
    alt: "Traditional dance 1",
  },
  {
    type: "traditional",
    img_url: "/assets/images/traditional/2.jpg",
    alt: "Traditional food 1",
  },
  {
    type: "traditional",
    img_url: "/assets/images/traditional/3.jpg",
    alt: "Traditional attire 1",
  },
  {
    type: "traditional",
    img_url: "/assets/images/traditional/4.jpg",
    alt: "Traditional celebration 1",
  },
  {
    type: "traditional",
    img_url: "/assets/images/traditional/5.jpg",
    alt: "Traditional festival 1",
  },
  {
    type: "traditional",
    img_url: "/assets/images/traditional/6.jpg",
    alt: "Traditional wedding dress 1",
  },
  {
    type: "traditional",
    img_url: "/assets/images/traditional/7.jpg",
    alt: "Traditional music 1",
  },
  {
    type: "traditional",
    img_url: "/assets/images/traditional/8.jpg",
    alt: "Traditional rituals 1",
  },

  // Leg Images
  {
    type: "leg",
    img_url: "/assets/images/leg/1.jpg",
    alt: "Leg henna design 1",
  },
  {
    type: "leg",
    img_url: "/assets/images/leg/2.jpg",
    alt: "Leg henna design 2",
  },
  {
    type: "leg",
    img_url: "/assets/images/leg/3.jpg",
    alt: "Leg henna design 3",
  },
  {
    type: "leg",
    img_url: "/assets/images/leg/4.jpg",
    alt: "Leg henna design 4",
  },
  {
    type: "leg",
    img_url: "/assets/images/leg/5.jpg",
    alt: "Leg henna design 5",
  },
  {
    type: "leg",
    img_url: "/assets/images/leg/6.jpg",
    alt: "Leg henna design 6",
  },
  {
    type: "leg",
    img_url: "/assets/images/leg/7.jpg",
    alt: "Leg henna design 7",
  },
  {
    type: "leg",
    img_url: "/assets/images/leg/8.jpg",
    alt: "Leg henna design 8",
  },

  // Party Images
  {
    type: "party",
    img_url: "/assets/images/arabic/1.jpg",
    alt: "Party decorations 1",
  },
  {
    type: "party",
    img_url: "/assets/images/traditional/2.jpg",
    alt: "Party cake 1",
  },
  {
    type: "party",
    img_url: "/assets/images/arabic/3.jpg",
    alt: "Party photo booth 1",
  },
  {
    type: "party",
    img_url: "/assets/images/traditional/4.jpg",
    alt: "Party balloons 1",
  },
  {
    type: "party",
    img_url: "/assets/images/traditional/5.jpg",
    alt: "Party table setup 1",
  },
  {
    type: "party",
    img_url: "/assets/images/traditional/6.jpg",
    alt: "Party guests 1",
  },
  {
    type: "party",
    img_url: "/assets/images/arabic/7.jpg",
    alt: "Party dance floor 1",
  },
  {
    type: "party",
    img_url: "/assets/images/traditional/8.jpg",
    alt: "Party drinks 1",
  },
];
