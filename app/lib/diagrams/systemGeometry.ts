import {Geometry} from "@/app/lib/definitions";

const systemGeometry = (scale: number, x: number, y: number): Geometry => {
  const scaleRoot3 = scale * Math.sqrt(3);

  return {
    scale,
    center: {x, y},
    nwPort: {
      center: {
        x: -0.75 * scale,
        y: -0.25 * scaleRoot3
      },
      adapterOffset: {
        x: -1,
        y: -Math.sqrt(3)
      },
      rotate: -60
    },
    swPort: {
      center: {
        x: -0.75 * scale,
        y: 0.25 * scaleRoot3
      },
      adapterOffset: {
        x: -1,
        y: Math.sqrt(3)
      },
      rotate: -120
    },
    nePort: {
      center: {
        x: 0.75 * scale,
        y: -0.25 * scaleRoot3
      },
      adapterOffset: {
        x: 1,
        y: -Math.sqrt(3)
      },
      rotate: 60
    },
    sePort: {
      center: {
        x: 0.75 * scale,
        y: 0.25 * scaleRoot3
      },
      adapterOffset: {
        x: 1,
        y: Math.sqrt(3)
      },
      rotate: 120
    }
  }
}

export default systemGeometry;
