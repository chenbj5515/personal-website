export function values<T>(obj: { [key: string]: T }): T[] {
    return Object.keys(obj).map(key => obj[key]);
}

export function keys<T>(obj: T): (keyof T)[] {
    return Object.keys(obj) as (keyof T)[];
}