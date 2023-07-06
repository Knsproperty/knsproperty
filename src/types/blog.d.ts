export interface Main {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  title: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  author: string;
  slug: string;
  description: string;
  cotent: string;
}
