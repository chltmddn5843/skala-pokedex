import './globals.css';
import Link from 'next/link';
export const metadata={title:'SKALA 4기 포켓몬 도감',description:'SKALA 교육생 공동 포켓몬 전국도감'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ko"><body><header><Link href="/" className="brand"><span>SKALA</span> NATIONAL DEX</Link><nav><Link href="/">도감</Link><Link href="/register">포켓몬 등록</Link><Link href="/stats">분포·랭킹</Link></nav></header><main>{children}</main></body></html>}
