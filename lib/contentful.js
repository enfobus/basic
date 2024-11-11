// lib/contentful.js
// import { createClient } from 'contentful';

// const client = createClient({
//   space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
//   accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
// });

// export async function fetchServices() {
//   const entries = await client.getEntries({
//     content_type: 'service', // Tên content type của bạn
//   });

//   return entries.items.map((item) => {
//     const { title, description, urgency, image } = item.fields;
//     return {
//       id: item.sys.id,
//       title,
//       description,
//       urgency,
//       imageUrl: image?.fields.file.url ? `https:${image.fields.file.url}` : null,
//     };
//   });
// }

// lib/contentful.js
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getEntriesByContentType(contentType) {
  const entries = await client.getEntries({
    content_type: contentType,
  });
  return entries.items;
}
