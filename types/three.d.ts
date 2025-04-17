declare module 'three' {
  export * from 'three';
  
  export class Scene {
    constructor();
    add(object: any): void;
  }
  
  export class PerspectiveCamera {
    constructor(fov: number, aspect: number, near: number, far: number);
    position: { z: number };
    aspect: number;
    updateProjectionMatrix(): void;
  }
  
  export class WebGLRenderer {
    constructor(parameters: any);
    setSize(width: number, height: number): void;
    setPixelRatio(ratio: number): void;
    render(scene: Scene, camera: PerspectiveCamera): void;
    dispose(): void;
  }
  
  export class BufferGeometry {
    constructor();
    setAttribute(name: string, attribute: BufferAttribute): void;
    attributes: {
      position: {
        array: Float32Array;
        needsUpdate: boolean;
      };
    };
    dispose(): void;
  }
  
  export class BufferAttribute {
    constructor(array: Float32Array, itemSize: number);
  }
  
  export class PointsMaterial {
    constructor(parameters: any);
    dispose(): void;
  }
  
  export class Points {
    constructor(geometry: BufferGeometry, material: PointsMaterial);
    rotation: { y: number };
  }
  
  export class Clock {
    constructor();
    getElapsedTime(): number;
  }
} 