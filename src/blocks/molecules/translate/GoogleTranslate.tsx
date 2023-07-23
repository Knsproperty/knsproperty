"use client";
import { useEffect } from "react";

// const languages = [
//   { label: "English", value: "/auto/en" },
//   { label: `Русский`, value: "/auto/ru" },
//   { label: "Polski", value: "/auto/pl" },
// ];

// export default function GoogleTranslate(): JSX.Element {
//   useEffect(() => {
//     var addScript = document.createElement("script");
//     addScript.setAttribute(
//       "src",
//       "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
//     );
//     document.body.appendChild(addScript);
//     // @ts-ignore
//     window.googleTranslateElementInit = googleTranslateElementInit;
//   }, []);

//   const googleTranslateElementInit = () => {
//     // @ts-ignore
//     new window.google.translate.TranslateElement(
//       {
//         pageLanguage: "auto",
//         autoDisplay: false,
//         includedLanguages: "ru,en,pl,ar",
//         // @ts-ignore
//         layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
//       },
//       "google_translate_element"
//     );
//   };

//   return (
//     <>
//       <div className="h-4">
//         <div
//           id="google_translate_element"
//           style={{
//             width: "100px",
//             height: "10px",
//           }}
//         ></div>
//       </div>
//     </>
//   );
// }




export default function Translator() {
  useEffect(() => {
    var addScript = document.createElement('script');
    addScript.setAttribute(
      'src',
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    );
    document.body.appendChild(addScript);
    (window as any).googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  const googleTranslateElementInit = () => {
    new (window as any).google.translate.TranslateElement(
      {
        pageLanguage: 'en',
        includedLanguages: 'en,ms,ta,zh-CN', // include this for selected languages
        // @ts-ignore
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      'google_translate_element'
    );
  };

  return (
    <>
      <div id="google_translate_element" style={{ display: 'flex' }}> </div >
    </>
  );
}