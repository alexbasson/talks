import {useSearchParams} from "next/navigation";

export default function useFrame(): number {
  const searchParams = useSearchParams();
  return parseInt(searchParams.get("frame") ?? "0") ?? 0;
}
