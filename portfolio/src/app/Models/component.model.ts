export interface ComponentModel {
    id: string;
    name: string;
    photo_uri: string;
    description: string;
    info: string;
    created_at: string;
    version?: string;
    price?: number;
    stock?: number;
    [key: string]: any;
}

// export class ComponentModel {
//   [key: string]: any
//   constructor(
//     public id: string,
//     public name: string,
//     public photo_uri: string,
//     public description: string,
//     public info: string,
//     public created_at: string,
//     public version?: string,
//     public price?: number,
//     public stock?: number,
//     additionalProps?: {[key: string]: string}
//   ) {
//     if (additionalProps) {
//       Object.assign(this, additionalProps); // Dynamically assign additional properties
//   }
//   }
// }
