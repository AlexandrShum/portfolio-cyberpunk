export const getImageUrl = (imgUrl: string): string => {
  const prefix = "/portfolio-cyberpunk";
  const isProd = process.env.NODE_ENV === "production";

  return isProd ? `${prefix}` + imgUrl : imgUrl;
}
