import {useSearchParams} from "next/navigation";

export default function useFrame<T>(frames: T[]): T {
  const searchParams = useSearchParams();
  const frameParam = parseInt(searchParams.get("frame") ?? "0") ?? 0;
  if (frameParam < 0) {
    return frames[0];
  } else if (frameParam >= frames.length) {
    return frames[frames.length - 1];
  }
  return frames[frameParam];
}
