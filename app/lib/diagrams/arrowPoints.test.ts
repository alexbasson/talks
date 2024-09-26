import {describe, it, expect} from 'vitest'
import {arrowPoints} from "./arrowPoints";
import {Point} from "@/app/lib/definitions";

expect.extend({
  toBeCloseEnoughTo(received: Point, expected: Point) {
    const { isNot } = this
    const tolerance = 0.0001
    return {
      pass: Math.abs(received.x - expected.x) < tolerance && Math.abs(received.y - expected.y) < tolerance,
      message: () => `${received} is${isNot ? ' not ' : ''} close enough to ${expected}`
    }
  },
  toBePrettyCloseTo(received: Point[], expected: Point[]) {
    const { isNot } = this
    const tolerance = 0.0001

    const match = (rec: Point, exp: Point): boolean => {
      return Math.abs(rec.x - exp.x) < tolerance && Math.abs(rec.y - exp.y) < tolerance
    }

    return {
      pass: expected.every((exp, index) => match(exp, received[index])),
      message: () => `${received} is${isNot ? ' not ' : ''} close enough to ${expected}`
    }
  }
})

interface CustomMatchers<R = unknown> {
  toBeCloseEnoughTo: (expected: Point) => R
  toBePrettyCloseTo: (expected: Point[]) => R
}

declare module 'vitest' {
  interface Assertion<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}

describe('getting arrowhead points', () => {
  describe('a horizontal arrow pointing to the right', () => {
    it('returns the correct points', () => {
      const points = arrowPoints({from: {x: 0, y: 0}, to: {x: 100, y: 0}, width: 10})

      expect(points.line.from).toBeCloseEnoughTo({x: 0, y: 0})
      expect(points.line.to).toBeCloseEnoughTo({x: 60, y: 0})
      expect(points.arrowhead).toBePrettyCloseTo([{x: 100, y: 0}, {x: 60, y: -10},{x: 60, y: 10}])
    })

    it('returns the correct points', () => {
      const points = arrowPoints({from: {x: -100, y: 0}, to: {x: 0, y: 0}, width: 10})

      expect(points.line.from).toBeCloseEnoughTo({x: -100, y: 0})
      expect(points.line.to).toBeCloseEnoughTo({x: -40, y: 0})
      expect(points.arrowhead).toBePrettyCloseTo([{x: 0, y: 0}, {x: -40, y: -10},{x: -40, y: 10}])
    })
  })

  describe('a horizontal arrow pointing to the left', () => {
    it('returns the correct points', () => {
      const points = arrowPoints({from: {x: 100, y: 0}, to: {x: 0, y: 0}, width: 10})

      expect(points.line.from).toBeCloseEnoughTo({x: 100, y: 0})
      expect(points.line.to).toBeCloseEnoughTo({x: 40, y: 0})
      expect(points.arrowhead).toBePrettyCloseTo([{x: 0, y: 0}, {x: 40, y: 10},{x: 40, y: -10}])
    })

    it('returns the correct points', () => {
      const points = arrowPoints({from: {x: 0, y: 0}, to: {x: -100, y: 0}, width: 10})

      expect(points.line.from).toBeCloseEnoughTo({x: 0, y: 0})
      expect(points.line.to).toBeCloseEnoughTo({x: -60, y: 0})
      expect(points.arrowhead).toBePrettyCloseTo([{x: -100, y: 0}, {x: -60, y: 10},{x: -60, y: -10}])
    })
  })

  describe('a vertical arrow pointing up', () => {
    it('returns the correct points', () => {
      const points = arrowPoints({from: {x: 0, y: 0}, to: {x: 0, y: 100}, width: 10})

      expect(points.line.from).toBeCloseEnoughTo({x: 0, y: 0})
      expect(points.line.to).toBeCloseEnoughTo({x: 0, y: 60})
      expect(points.arrowhead).toBePrettyCloseTo([{x: 0, y: 100}, {x: 10, y: 60},{x: -10, y: 60}])
    })
  })
})
