export interface Main {
  id: number;
  attributes: MainAttributes;
}

export interface MainAttributes {
  Street: string;
  Rooms: number;
  Short_Address: string;
  Price: number;
  Description: string;
  PricePerSqFt: number;
  ReraNumber: number;
  ReferenceNumber: string;
  AgentBRN: number;
  Bedrooms: number;
  Bathrooms: number;
  Area: number;
  Property_Type: string;
  Location: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  Name: string;
  slug: string;
  Preview_Image: PreviewImage;
  Images: Images;
  agent: Agent;
}

export interface Images {
  data: DAT[];
}

export interface DAT {
  id: number;
  attributes: DatumAttributes;
}

export interface DatumAttributes {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: PurpleFormats;
  hash: string;
  ext: EXT;
  mime: MIME;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
}

export enum EXT {
  Jfif = ".jfif",
  Webp = ".webp",
}

export interface PurpleFormats {
  small: Small;
  thumbnail: Small;
}

export interface Small {
  ext: EXT;
  url: string;
  hash: string;
  mime: MIME;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
}

export enum MIME {
  ImageJPEG = "image/jpeg",
  ImageWebp = "image/webp",
}

export interface PreviewImage {
  data: DAT;
}

export interface Agent {
  data: AgentData;
}

export interface AgentData {
  id: number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  FirstName: string;
  LastName: string;
  Email: string;
  Number: string;
  Rera: string;
  BRN: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  Profile: Profile;
}

export interface Profile {
  data: ProfileData;
}

export interface ProfileData {
  id: number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: FluffyFormats;
  hash: string;
  ext: EXT;
  mime: MIME;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
}

export interface FluffyFormats {
  large: Small;
  small: Small;
  medium: Small;
  thumbnail: Small;
}
