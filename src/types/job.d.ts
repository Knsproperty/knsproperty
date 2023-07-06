export interface Main {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  position: string;
  location: string;
  description: string;
  responsibilities: string;
  requirements: string;
  salary: number;
  active: boolean;
  unpublicationDate: Date;
  slug: string;
}
