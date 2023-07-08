export interface Main {
  id: number | string;
  attributes: MainAttributes;
}

export interface MainAttributes {
  Street: null | string;
  Rooms: number | null;
  Short_Address: string;
  Price: number;
  Description: string;
  PricePerSqFt: number | null;
  ReraNumber: number | null;
  ReferenceNumber: string;
  AgentBRN: number;
  Bedrooms: number | null;
  Bathrooms: number | null;
  Area: number;
  Property_Type: string;
  Location: Location;
  createdAt: Date | null;
  updatedAt: Date | null;
  publishedAt: Date | null;
  Name: string;
  slug: null | string;
  Exclusive: boolean | null;
  Parking: number | null;
  Community: null | string;
  Sub_Community: null | string;
  Furnished: null | string;
  Geopoints: null | string;
  Preview_Image: PreviewImage;
  Images: Images;
  agent: Agent;
}

export interface Images {
  data: Datum[];
}

export interface Datum {
  url?: string;
  id?: number;
  attributes?: DatumAttributes;
}

export interface DatumAttributes {
  name: null | string;
  alternativeText: null;
  caption: null;
  width: number | null;
  height: number | null;
  formats: Formats;
  hash: null | string;
  ext: EXT | null;
  mime: MIME | null;
  size: number | null;
  url: null | string;
  previewUrl: null;
  provider: null | string;
  provider_metadata: null;
  createdAt: Date | null;
  updatedAt: Date | null;
}

export enum EXT {
  Jpg = ".jpg",
}

export interface Formats {
  small: Small;
  thumbnail: Small;
}

export interface Small {
  ext: EXT | null;
  url: null | string;
  hash: null | string;
  mime: MIME | null;
  name: null | string;
  path: null;
  size: number | null;
  width: number | null;
  height: number | null;
}

export enum MIME {
  ImageJPEG = "image/jpeg",
}

export enum Location {
  Dubai = "Dubai",
  Sharjah = "Sharjah",
}

export interface PreviewImage {
  data: PreviewImageData;
}

export interface PreviewImageData {
  id: number | null;
  attributes: DatumAttributes;
}

export interface Agent {
  data: AgentData | null;
}

export interface AgentData {
  id: null;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  name: Name;
  email: Email;
  phone: string;
  licenseNo: string;
  photo: string;
}

export enum Email {
  AlkaabiKKnspropertyCOM = "alkaabi.k@knsproperty.com",
  SjammalKnspropertyCOM = "sjammal@knsproperty.com",
}

export enum Name {
  KhalidAlKaabi = "Khalid Al Kaabi",
  SamerJammal = "Samer Jammal",
}
