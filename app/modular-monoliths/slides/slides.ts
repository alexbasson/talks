import {Slide} from "@/app/lib/definitions";

export const slides: Slide[] = [
  {
    route: "title",
    next: "title?slug=highlighted",
  },
  {
    route: "title?slug=highlighted",
    next: "what-this-talk-is-not",
  },
  {
    route: "what-this-talk-is-not",
    next: "what-this-talk-is",
  },
  {
    route: "what-this-talk-is",
    next: "emerald-city",
  },
  {
    route: "emerald-city",
    next: "emerald-city?slug=microservices",
  },
  {
    route: "emerald-city?slug=microservices",
    next: "emerald-city?slug=all-the-things",
  },
  {
    route: "emerald-city?slug=all-the-things",
    next: "where-we-are-now",
  },
  {
    route: "where-we-are-now",
    next: "where-we-are-now?slug=five-microservices",
  },
  {
    route: "where-we-are-now?slug=five-microservices",
    next: "where-we-are-now?slug=run-locally",
  },
  {
    route: "where-we-are-now?slug=run-locally",
    next: "where-we-are-now?slug=features",
  },
  {
    route: "where-we-are-now?slug=features",
    next: "where-we-are-now?slug=repo",
  },
  {
    route: "where-we-are-now?slug=repo",
    next: "where-we-are-now?slug=doing-it-wrong",
  },
  {
    route: "where-we-are-now?slug=doing-it-wrong",
    next: "the-future-sounds-great",
  },
  {
    route: "the-future-sounds-great",
    next: "the-future-sounds-great?slug=hurt-this-bad",
  },
  {
    route: "the-future-sounds-great?slug=hurt-this-bad",
    next: "thesis-statement",
  },
  {
    route: "thesis-statement",
    next: "the-classics",
  },
  {
    route: "the-classics",
    next: "the-classics?slug=list",
  },
  {
    route: "the-classics?slug=list",
    next: "hexagonal-architecture",
  },
  {
    route: "hexagonal-architecture",
    next: "hexagonal-architecture?slug=domain",
  },
  {
    route: "hexagonal-architecture?slug=domain",
    next: "hexagonal-architecture?slug=ports",
  },
  {
    route: "hexagonal-architecture?slug=ports",
    next: "hexagonal-architecture?slug=primary-ports",
  },
  {
    route: "hexagonal-architecture?slug=primary-ports",
    next: "hexagonal-architecture?slug=secondary-ports",
  },
  {
    route: "hexagonal-architecture?slug=secondary-ports",
    next: "hexagonal-architecture?slug=adapters",
  },
  {
    route: "hexagonal-architecture?slug=adapters",
    next: "hexagonal-architecture?slug=whole-picture",
  },
  {
    route: "hexagonal-architecture?slug=whole-picture",
    next: "three-kinds-of-modules",
  },
  {
    route: "three-kinds-of-modules",
    next: "policy-modules",
  },
  {
    route: "policy-modules",
    next: "adapter-modules",
  },
  {
    route: "adapter-modules",
    next: "deployable-modules",
  },
  {
    route: "deployable-modules",
    next: "module-structure",
  },
  {
    route: "module-structure",
    next: "example-online-chess",
  },
  {
    route: "example-online-chess",
    next: "example-online-chess?slug=policy",
  },
  {
    route: "example-online-chess?slug=policy",
    next: "example-online-chess?slug=adapters",
  },
  {
    route: "example-online-chess?slug=adapters",
    next: "example-online-chess?slug=deployable",
  },
  {
    route: "example-online-chess?slug=deployable",
    next: "spring-directory-structure",
  },
  {
    route: "spring-directory-structure",
    next: "spring-directory-structure?slug=settings",
  },
  {
    route: "spring-directory-structure?slug=settings",
    next: "spring-directory-structure?slug=deployable",
  },
  {
    route: "spring-directory-structure?slug=deployable",
    next: "spring-directory-structure?slug=api-adapter",
  },
  {
    route: "spring-directory-structure?slug=api-adapter",
    next: "spring-directory-structure?slug=sql-adapter",
  },
  {
    route: "spring-directory-structure?slug=sql-adapter",
    next: "spring-directory-structure?slug=policy",
  },
  {
    route: "spring-directory-structure?slug=policy",
    next: "why-is-this-nice",
  },
  {
    route: "why-is-this-nice",
    next: "why-is-this-nice?slug=pieces-stay-small",
  },
  {
    route: "why-is-this-nice?slug=pieces-stay-small",
    next: "why-is-this-nice?slug=separation-of-concerns",
  },
  {
    route: "why-is-this-nice?slug=separation-of-concerns",
    next: "why-is-this-nice?slug=cheap-adapters",
  },
  {
    route: "why-is-this-nice?slug=cheap-adapters",
    next: "why-is-this-nice?slug=testing-in-isolation",
  },
  {
    route: "why-is-this-nice?slug=testing-in-isolation",
    next: "how-does-this-go-wrong",
  },
  {
    route: "how-does-this-go-wrong",
    next: "why-is-this-nice?slug=how-does-this-go-wrong"
  },
  {
    route: "why-is-this-nice?slug=how-does-this-go-wrong",
    next: "bounded-contexts",
  },
  {
    route: "bounded-contexts",
    next: "bounded-contexts?slug=definition",
  },
  {
    route: "bounded-contexts?slug=definition",
    next: "bounded-contexts?slug=model",
  },
  {
    route: "bounded-contexts?slug=model",
    next: "how-to-identify-a-bounded-context",
  },
  {
    route: "how-to-identify-a-bounded-context",
    next: "how-to-identify-a-bounded-context?slug=gameplay-stories",
  },
  {
    route: "how-to-identify-a-bounded-context?slug=gameplay-stories",
    next: "how-to-identify-a-bounded-context?slug=gameplay-language",
  },
  {
    route: "how-to-identify-a-bounded-context?slug=gameplay-language",
    next: "how-to-identify-a-bounded-context?slug=friends-stories",
  },
  {
    route: "how-to-identify-a-bounded-context?slug=friends-stories",
    next: "how-to-identify-a-bounded-context?slug=friends-language",
  },
  {
    route: "how-to-identify-a-bounded-context?slug=friends-language",
    next: "how-to-identify-a-bounded-context?slug=contrast-stories",
  },
  {
    route: "how-to-identify-a-bounded-context?slug=contrast-stories",
    next: "one-giant-model",
  },
  {
    route: "one-giant-model",
    next: "two-smaller-models",
  },
  {
    route: "two-smaller-models",
    next: "single-service-multiple-modules",
  },
  {
    route: "single-service-multiple-modules",
    next: "what-about-times-when-bcs-interact",
  },
  {
    route: "what-about-times-when-bcs-interact",
    next: "what-about-times-when-bcs-interact?slug=friends-language",
  },
  {
    route: "what-about-times-when-bcs-interact?slug=friends-language",
    next: "what-about-times-when-bcs-interact?slug=gameplay-language",
  },
  {
    route: "what-about-times-when-bcs-interact?slug=gameplay-language",
    next: "what-about-times-when-bcs-interact?slug=little-overlap",
  },
  {
    route: "what-about-times-when-bcs-interact?slug=little-overlap",
    next: "what-about-times-when-bcs-interact?slug=high-overlap",
  },
  {
    route: "what-about-times-when-bcs-interact?slug=high-overlap",
    next: "what-about-times-when-bcs-interact?slug=one-module",
  },
  {
    route: "what-about-times-when-bcs-interact?slug=one-module",
    next: "what-about-times-when-bcs-interact?slug=medium-overlap",
  },
  {
    route: "what-about-times-when-bcs-interact?slug=medium-overlap",
    next: "what-about-times-when-bcs-interact?slug=three-modules",
  },
  {
    route: "what-about-times-when-bcs-interact?slug=three-modules",
    next: "what-about-times-when-bcs-interact?slug=this-story",
  },
  {
    route: "what-about-times-when-bcs-interact?slug=this-story",
    next: "describe-the-interaction-twice",
  },
  {
    route: "describe-the-interaction-twice",
    next: "single-adapter-module",
  },
  {
    route: "single-adapter-module",
    next: "zoom-in-on-single-adapter",
  },
  {
    route: "zoom-in-on-single-adapter",
    next: "single-adapter-code-example",
  },
  {
    route: "single-adapter-code-example",
    next: "why-is-single-adapter-nice",
  },
  {
    route: "why-is-single-adapter-nice",
    next: "but-microservice",
  },
  {
    route: "but-microservice",
    next: "when-to-transition",
  },
  {
    route: "when-to-transition",
    next: "how-to-transition",
  },
  {
    route: "how-to-transition",
    next: "how-to-transition?slug=deployable-mitosis",
  },
  {
    route: "how-to-transition?slug=deployable-mitosis",
    next: "deployable-mitosis",
  },
  {
    route: "deployable-mitosis",
    next: "deployable-mitosis-dependency-diagram",
  },
  {
    route: "deployable-mitosis-dependency-diagram",
    next: "deployable-mitosis-git-show",
  },
  {
    route: "deployable-mitosis-git-show",
    next: "how-to-transition?slug=adapter-division",
  },
  {
    route: "how-to-transition?slug=adapter-division",
    next: "adapter-division",
  },
  {
    route: "adapter-division",
    next: "adapter-division?slug=highlighted-adapter",
  },
  {
    route: "adapter-division?slug=highlighted-adapter",
    next: "adapter-division?slug=hidden-adapter",
  },
  {
    route: "adapter-division?slug=hidden-adapter",
    next: "adapter-division?slug=divided-adapter",
  },
  {
    route: "adapter-division?slug=divided-adapter",
    next: "how-to-transition?slug=adapter-extraction",
  },
  {
    route: "how-to-transition?slug=adapter-extraction",
    next: "adapter-extraction",
  },
  {
    route: "adapter-extraction",
    next: "adapter-extraction?slug=highlighted-adapter",
  },
  {
    route: "adapter-extraction?slug=highlighted-adapter",
    next: "adapter-extraction?slug=extracted-adapter",
  },
  {
    route: "adapter-extraction?slug=extracted-adapter",
    next: "adapter-extraction?slug=added-adapters",
  },
  {
    route: "adapter-extraction?slug=added-adapters",
    next: "adapter-extraction?slug=added-deployable",
  },
  {
    route: "adapter-extraction?slug=added-deployable",
    next: "separate-deployables",
  },
  {
    route: "separate-deployables",
    next: "nothing-moves",
  },
  {
    route: "nothing-moves",
    next: "what-does-this-mean",
  },
  {
    route: "what-does-this-mean",
    next: "thesis-statement?slug=recap",
  },
  {
    route: "thesis-statement?slug=recap",
    next: "what-does-this-mean?slug=inexpensive",
  },
  {
    route: "what-does-this-mean?slug=inexpensive",
    next: "what-does-this-mean?slug=low-overhead",
  },
  {
    route: "what-does-this-mean?slug=low-overhead",
    next: "what-does-this-mean?slug=domain-boundaries",
  },
  {
    route: "what-does-this-mean?slug=domain-boundaries",
    next: "what-does-this-not-mean",
  },
  {
    route: "what-does-this-not-mean",
    next: "what-does-this-not-mean?slug=never-a-good-idea",
  },
  {
    route: "what-does-this-not-mean?slug=never-a-good-idea",
    next: "what-does-this-not-mean?slug=never-plan-ahead",
  },
  {
    route: "what-does-this-not-mean?slug=never-plan-ahead",
    next: "what-does-this-not-mean?slug=not-a-best-practice",
  },
  {
    route: "what-does-this-not-mean?slug=not-a-best-practice",
    next: "may-the-hexagons-be-with-you",
  },
];

