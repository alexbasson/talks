import {usePathname, useRouter, useSearchParams} from "next/navigation";

export const routes: string[] = [
  "title?frame=0",
  "title?frame=1",
  "what-this-talk-is-not?frame=0",
  "what-this-talk-is?frame=0",
  "emerald-city?frame=0",
  "emerald-city?frame=1",
  "emerald-city?frame=2",
  "where-we-are-now?frame=0",
  "where-we-are-now?frame=1",
  "where-we-are-now?frame=2",
  "where-we-are-now?frame=3",
  "where-we-are-now?frame=4",
  "where-we-are-now?frame=5",
  "the-future-sounds-great?frame=0",
  "the-future-sounds-great?frame=1",
  "thesis-statement?frame=0",
  "the-classics?frame=0",
  "the-classics?frame=1",
  "hexagonal-architecture?frame=0",
  "hexagonal-architecture?frame=1",
  "hexagonal-architecture?frame=2",
  "hexagonal-architecture?frame=3",
  "hexagonal-architecture?frame=4",
  "hexagonal-architecture?frame=5",
  "hexagonal-architecture?frame=6",
  "three-kinds-of-modules?frame=0",
  "policy-modules?frame=0",
  "adapter-modules?frame=0",
  "deployable-modules?frame=0",
  "module-structure?frame=0",
  "example-online-chess?frame=0",
  "example-online-chess?frame=1",
  "example-online-chess?frame=2",
  "example-online-chess?frame=3",
  "spring-directory-structure?frame=0",
  "spring-directory-structure?frame=1",
  "spring-directory-structure?frame=2",
  "spring-directory-structure?frame=3",
  "spring-directory-structure?frame=4",
  "spring-directory-structure?frame=5",
  "spring-directory-structure?frame=6",
  "spring-directory-structure?frame=7",
  "spring-directory-structure?frame=8",
  "why-is-this-nice?frame=0",
  "why-is-this-nice?frame=1",
  "why-is-this-nice?frame=2",
  "why-is-this-nice?frame=3",
  "why-is-this-nice?frame=4",
  "why-is-this-nice?frame=5",
  "how-does-this-go-wrong?frame=0",
  "why-is-this-nice?frame=6",
  "bounded-contexts?frame=0",
  "bounded-contexts?frame=1",
  "bounded-contexts?frame=2",
  "how-to-identify-a-bounded-context?frame=0",
  "how-to-identify-a-bounded-context?frame=1",
  "how-to-identify-a-bounded-context?frame=2",
  "how-to-identify-a-bounded-context?frame=3",
  "how-to-identify-a-bounded-context?frame=4",
  "how-to-identify-a-bounded-context?frame=5",
  "one-giant-model?frame=0",
  "two-smaller-models?frame=0",
  "single-service-multiple-modules?frame=0",
  "what-about-times-when-bcs-interact?frame=0",
  "what-about-times-when-bcs-interact?frame=1",
  "what-about-times-when-bcs-interact?frame=2",
  "what-about-times-when-bcs-interact?frame=3",
  "what-about-times-when-bcs-interact?frame=4",
  "what-about-times-when-bcs-interact?frame=5",
  "what-about-times-when-bcs-interact?frame=6",
  "what-about-times-when-bcs-interact?frame=7",
  "what-about-times-when-bcs-interact?frame=8",
  "describe-the-interaction-twice?frame=0",
  "describe-the-interaction-twice?frame=1",
  "describe-the-interaction-twice?frame=2",
  "single-adapter-module?frame=0",
  "zoom-in-on-single-adapter?frame=0",
  "single-adapter-code-example?frame=0",
  "why-is-single-adapter-nice?frame=0",
  "but-microservices?frame=0",
  "when-to-transition?frame=0",
  "how-to-transition?frame=0",
  "how-to-transition?frame=1",
  "deployable-mitosis?frame=0",
  "deployable-mitosis-dependency-diagram?frame=0",
  "deployable-mitosis-git-show?frame=0",
  "how-to-transition?frame=2",
  "adapter-division?frame=0",
  "adapter-division?frame=1",
  "adapter-division?frame=2",
  "adapter-division?frame=3",
  "how-to-transition?frame=3",
  "adapter-extraction?frame=0",
  "adapter-extraction?frame=1",
  "adapter-extraction?frame=2",
  "adapter-extraction?frame=3",
  "adapter-extraction?frame=4",
  "separate-deployables?frame=0",
  "nothing-moves?frame=0",
  "what-does-this-mean?frame=0",
  "thesis-statement?frame=1",
  "what-does-this-mean?frame=1",
  "what-does-this-mean?frame=2",
  "what-does-this-mean?frame=3",
  "what-does-this-not-mean?frame=0",
  "what-does-this-not-mean?frame=1",
  "what-does-this-not-mean?frame=2",
  "what-does-this-not-mean?frame=3",
];

export const useNextHref = (): string => {
  const pathname = usePathname();
  const pathComponents = pathname.split("/");
  const lastComponent = pathComponents[pathComponents.length - 1];

  const params: String[] = [];
  const searchParams = useSearchParams();
  const frame = searchParams.get("frame");
  if (frame) { params.push(`frame=${frame}`) }

  const route = lastComponent + (params.length > 0 ? `?${params.join('&')}` : '');

  const currentRouteIndex = routes.indexOf(route) ?? 0;
  const nextRouteIndex = (currentRouteIndex < routes.length - 1) ? (currentRouteIndex + 1) : 0;
  return `/modular-monoliths/${routes[nextRouteIndex]}`
}
