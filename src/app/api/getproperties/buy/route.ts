import slugify from "@/lib/slugigy";
import { Main } from "@/types/main";
import strapi, { populate } from "@/utils/strapi";
import axios from "axios";
import { NextResponse } from "next/server";
import { parseString } from "xml2js";

export async function GET() {
  try {
    const response = await axios.get(
      "https://expert.propertyfinder.ae/feed/kns/privatesite/ef5baf9b94ef69775d282c15b19d22ab",
      {}
    );

    const xmlData = response.data;

    const parsedData: string = await new Promise((resolve, reject) => {
      parseString(xmlData, (err, results) => {
        if (err) {
          console.error("Error parsing XML:", err);
          reject(err);
        } else {
          const jsonData = JSON.stringify(results);
          resolve(jsonData);
        }
      });
    });
    const parsedXml = await JSON.parse(parsedData).list.property;
    const convertArray = async (inputArray: any) => {
      const newData: any = [];

      inputArray.forEach((item: any) => {
        const convertedItem: any = {
          id: item.reference_number ? item.reference_number[0] : null,
          attributes: {
            Street: item.title_en ? item.reference_number[0] : null,
            Rooms: item.bedroom ? parseInt(item.bedroom[0]) : null,
            Short_Address: item.title_en ? item.title_en[0] : null,
            Price: item.price ? parseInt(item.price[0]) : null,
            Description: item.description_en ? item.description_en[0] : null,
            PricePerSqFt: null,
            ReraNumber: null,
            ReferenceNumber: item.reference_number
              ? item.reference_number[0]
              : null,
            AgentBRN: item.agent
              ? item.agent[0].license_no
                ? parseInt(item.agent[0].license_no[0])
                : null
              : null,
            Bedrooms: item.bedroom ? parseInt(item.bedroom[0]) : null,
            Bathrooms: item.bathroom ? parseInt(item.bathroom[0]) : null,
            Area: item.size ? parseInt(item.size[0]) : null,
            Property_Type: item.property_type ? item.property_type[0] : null,
            Location: item.city ? item.city[0] : null,
            createdAt: null,
            updatedAt: null,
            publishedAt: null,
            Name: item.title_en ? item.title_en[0] : null,
            slug: item.property_name ? slugify(item.property_name[0]) : null,
            Exclusive: null,
            Parking: item.parking ? parseInt(item.parking[0]) : null,
            Community: item.community ? item.community[0] : null,
            Sub_Community: item.sub_community ? item.sub_community[0] : null,
            Furnished: item.furnished ? item.furnished[0] : null,
            Geopoints: item.geopoints ? item.geopoints[0] : null,
            Preview_Image: {
              data: {
                id: null,
                attributes: {
                  name: null,
                  alternativeText: null,
                  caption: null,
                  width: null,
                  height: null,
                  formats: {
                    small: {
                      ext: null,
                      url: null,
                      hash: null,
                      mime: null,
                      name: null,
                      path: null,
                      size: null,
                      width: null,
                      height: null,
                    },
                    thumbnail: {
                      ext: null,
                      url: null,
                      hash: null,
                      mime: null,
                      name: null,
                      path: null,
                      size: null,
                      width: null,
                      height: null,
                    },
                  },
                  hash: null,
                  ext: null,
                  mime: null,
                  size: null,
                  url: null,
                  previewUrl: null,
                  provider: null,
                  provider_metadata: null,
                  createdAt: null,
                  updatedAt: null,
                },
              },
            },
            Images: {
              data: item.photo
                ? item.photo[0].url.map((photo: any) => ({
                    url: photo._ ? photo._ : null,
                  }))
                : [],
            },
            agent: {
              data: item.agent
                ? {
                    id: null,
                    attributes: {
                      name: item.agent[0].name ? item.agent[0].name[0] : null,
                      email: item.agent[0].email
                        ? item.agent[0].email[0]
                        : null,
                      phone: item.agent[0].phone
                        ? item.agent[0].phone[0]
                        : null,
                      licenseNo: item.agent[0].license_no
                        ? item.agent[0].license_no[0]
                        : null,
                      photo: item.agent[0].photo
                        ? item.agent[0].photo[0]
                        : null,
                    },
                  }
                : null,
            },
          },
        };

        newData.push(convertedItem);
      });

      return newData;
    };

    const convertedArray = await convertArray(parsedXml);
    const filterArray = (inputArray: any, slug: string) => {
      return inputArray.filter((item: Main) => {
        const propertySlug = item.attributes.slug ? item.attributes.slug : null;
        return propertySlug === slug.toLowerCase();
      });
    };

    return NextResponse.json(filterArray(convertedArray, "bayshore"));
    // return NextResponse.json(parsedXml);
  } catch (error: any) {
    console.error("Error fetching XML data:", error);
    return NextResponse.error();
  }
}
