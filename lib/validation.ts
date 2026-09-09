import { z } from 'zod';
export const registrationSchema = z.object({
  pokemonId: z.number().int().min(1).max(1025),
  campus: z.string().trim().min(1).max(40),
  className: z.string().trim().min(1).max(40),
  studentName: z.string().trim().min(1).max(40),
  publicName: z.string().trim().max(40).optional()
});
export const voteSchema = z.object({ pokemonId: z.number().int().min(1).max(1025) });
