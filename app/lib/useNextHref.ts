import {usePathname, useSearchParams} from "next/navigation";

export const useNextHref = (talkName: string, routes: string[]): string => {
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
  return `/${talkName}/${routes[nextRouteIndex]}`
}
