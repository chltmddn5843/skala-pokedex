import crypto from 'node:crypto';
export function hash(value: string) { return crypto.createHash('sha256').update(value).digest('hex'); }
export async function requestMeta() {
  const cf = await import('@opennextjs/cloudflare').then(m => m.getCloudflareContext()).catch(() => null);
  const req = cf?.request;
  const ip = req?.headers.get('CF-Connecting-IP') ?? req?.headers.get('x-forwarded-for') ?? 'unknown';
  return { ipHash: hash(ip), userAgent: (req?.headers.get('user-agent') ?? '').slice(0, 500) };
}
const buckets = new Map<string, { count:number; reset:number }>();
export function rateLimit(key:string, limit:number, windowMs=60_000) {
  const now=Date.now(); const cur=buckets.get(key);
  if(!cur || cur.reset<=now){ const next={count:1,reset:now+windowMs}; buckets.set(key,next); return {ok:true,retryAfter:0}; }
  cur.count++; if(cur.count>limit) return {ok:false,retryAfter:Math.ceil((cur.reset-now)/1000)};
  return {ok:true,retryAfter:0};
}
