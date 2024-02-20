export function asUnknown(): unknown {
  return;
}
export function asString(): string {
  return String();
}

export function asNumber(): number {
  return Number();
}

export function asBoolean(): boolean {
  return Boolean();
}

export function asObject(): object {
  return Object();
}

export function nullable<T>(val: T): T | null {
  return val ?? null;
}

export function list<T>(val: T): T[] {
  return Array<T>(val);
}

export function union<T extends Array<any>>(...args: T): T[number] {
  return args[0];
}
