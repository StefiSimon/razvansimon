import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: 'v726rnf1',
  dataset: 'production',
  useCdn: false,
  apiVersion: '1',
});

const getSanityAssetUrl = (imageRef: string) => {
  let [imgType, imgRef, imgSize, imgExt] = imageRef?.split('-');
  return `https://cdn.sanity.io/images/v726rnf1/production/${imgRef}-${imgSize}.${imgExt}`;
};
export { sanityClient, getSanityAssetUrl };
