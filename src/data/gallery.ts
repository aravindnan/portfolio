/**
 * Photos for the Gallery page.
 *
 * To add a photo:
 * 1. Put the file in site/public/gallery/ (JPG or WebP, about 2000px on the long side).
 * 2. Add an entry below with its real width and height (used to keep the layout steady while it loads).
 *
 * The Gallery link appears in the menu as soon as this list has at least one photo.
 */
export type Photo = {
  src: string;      // path under public/, e.g. 'gallery/fort-kochi-nets.jpg'
  alt: string;      // what is in the picture, for screen readers
  caption?: string; // shown under the photo and in the viewer
  place?: string;   // e.g. 'Fort Kochi'
  year?: string;    // e.g. '2025'
  w: number;
  h: number;
};

export const photos: Photo[] = [];
