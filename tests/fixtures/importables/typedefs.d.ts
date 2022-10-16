declare module './importable.cjs' {
  export function exportedCJSFunction(): void;
}

declare module './importable.mjs' {
  export function exportedMJSFunction(): void;
}

declare module './importable.js' {
  export function exportedJSFunction(): void;
}

export default undefined;
