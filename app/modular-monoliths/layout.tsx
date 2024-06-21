'use client'

import Link from "next/link";
import { usePathname, useSearchParams } from 'next/navigation';
import { Slide } from '@/app/lib/definitions';
import { slides } from '@/app/modular-monoliths/slides/slides';

export default function Layout({ children }: {children: React.ReactNode}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const nextHref = (pathname: string): string => {
    const pathComponents = pathname.split("/");
    const lastComponent = pathComponents[pathComponents.length - 1];
    const slug = searchParams.get("slug");
    const route = lastComponent + (slug ? `?slug=${slug}` : "");
    const defaultSlide: Slide = {
      route: "",
      next: "title",
    };
    const currentSlide = slides.find((slide) => slide.route === route) ?? defaultSlide;
    return `/modular-monoliths/${currentSlide.next}`
  }

  return (
    <>
      {children}

      <Link href={nextHref(pathname)}>next</Link>
    </>
  )
}
