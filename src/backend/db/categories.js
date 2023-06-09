import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Aerophones",
    description: "Wind Instruments",
  },
  {
    _id: uuid(),
    categoryName: "Membranophones",
    description: "Membrane Instruments",
  },
  {
    _id: uuid(),
    categoryName: "Chordophones ",
    description: "String Instruments",
  },
  {
    _id: uuid(),
    categoryName: "Idiophones",
    description: "Percurssion Instruments",
  },
];
