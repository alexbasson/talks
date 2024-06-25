'use client'

import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import {layoutPadding, Slide} from '@/app/lib/definitions';
import { slides } from '@/app/modular-monoliths/slides/slides';

export default function Layout({ children }: {children: React.ReactNode}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === " ") {
      router.push(nextHref(pathname));
    }

    if (e.key === "ArrowLeft") {
      router.back();
    }
  }

  return (
    <div className={`bg-neutral-800 h-screen text-base p-[${layoutPadding}px]`} tabIndex={0} onKeyDown={handleKeyDown}>
      <Link className={"h-screen"} href={nextHref(pathname)}>{children}</Link>
    </div>
  )
}
