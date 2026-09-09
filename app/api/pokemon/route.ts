import {getPrisma} from '@/lib/prisma';export async function GET(){const db=getPrisma();return Response.json(await db.pokemon.findMany({orderBy:{id:'asc'}}))}
