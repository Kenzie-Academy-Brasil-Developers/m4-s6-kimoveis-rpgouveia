import { z } from "zod";
import { realEstateSchema } from "../schemas/realEstate.schema";

type tRealEstate = z.infer<typeof realEstateSchema>;

export { tRealEstate };

// Resultado da tipagem pelo Zod
// type tRealEstate = {
//   id: number;
//   value: number;
//   size: number;
//   sold: boolean;
//   address: {
//       id: number;
//       street: string;
//       zipCode: string;
//       city: string;
//       state: string;
//       number?: string | undefined;
//   };
//   category: {
//       name: string;
//   };
//   createdAt: string;
//   updatedAt: string;
//   categoryId: number;
// }