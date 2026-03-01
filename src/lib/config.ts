export const SITE = {
  name: "Avalon Hotels",
  locationShort: "Chippewa Falls, Wisconsin",
  phone: "(715) 723-2281",
  email: "info@avalonhotelschippewafalls.com",
  addressLine: "1009 W Park Ave, Chippewa Falls, WI 54729",
};

export const PROPERTY = {
  totalRooms: 67,
  roomInventory: {
    doubleQueen: 53,
    singleQueen: 6,
    king: 6,
    whirlpoolSuite: 2,
    kitchenetteApartment: 2,
  },
  inRoom: ["Mini fridge", "Microwave", "Smart TV", "Work desk"],
  amenities: [
    "Indoor pool",
    "Whirlpool / hot tub",
    "Fitness center",
    "Complimentary breakfast",
    "On-site Bar & Grill",
    "Restaurant",
    "Laundry",
    "Free parking",
    "Pet friendly",
    "24-hour front desk",
  ],
  accessibility: {
    elevator: false,
    accessibleRooms: true,
  },
};

export const BALLROOM = {
  name: "Ballroom",
  capacity: {
    banquet: 500,
    theater: 400,
  },
  dividable: true,
  outsideCateringAllowed: true,
};

// ✅ Put your Cloudbeds booking engine link here
export const CLOUDBEDS_BOOKING_URL =
  "https://hotels.cloudbeds.com/reservation/REPLACE_ME";
