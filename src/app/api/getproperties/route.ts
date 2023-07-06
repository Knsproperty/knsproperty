import axios from "axios";
import { NextResponse } from "next/server";
import { parseString } from "xml2js";

export async function GET() {
  try {
    const response = await axios.get(
      "https://expert.propertyfinder.ae/feed/kns/privatesite/ef5baf9b94ef69775d282c15b19d22ab"
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

    return NextResponse.json(JSON.parse(parsedData));
  } catch (error: any) {
    console.error("Error fetching XML data:", error);
    return NextResponse.error();
  }
}
