export const carouselQuery =
  '*[_type == "Sliders"] | order(_updatedAt desc) {image,externalUrl}';
export const sampleQuery =
  '*[_type == "SuccessfulSample"] | order(_updatedAt desc) {postName,postText,type,visaImage}';
export const eduVideoQuery =
  '*[_type == "videos" && type == "education"] | order(_updatedAt desc) [0] {id,description,type}';
export const immVideoQuery =
  '*[_type == "videos" && type == "immigration"] | order(_updatedAt desc) [0] {id,description,type}';
export const getPostsQuery = (currentPage, postsPerPage, tagId = null) => {
  const tagQuery = tagId ? ` && "${tagId}" in myTags[]._ref` : "";
  return `*[_type == "posts"${tagQuery}] | order(_updatedAt desc) [${
    currentPage * postsPerPage
  }...${
    currentPage * postsPerPage + postsPerPage
  }] {_updatedAt,title,_id,myTags,postContent,thumbnail}`;
};
export const postsQuery = `*[_type == "posts"] | order(_updatedAt desc) {_updatedAt,title,_id,myTags,postContent,thumbnail}`;
export const postsQuery1 = `*[_type == "posts" && _id == $id] | order(_updatedAt desc) {_updatedAt,title,_id,myTags,postContent,thumbnail}`;
export const postsListsQuery = (tagId) =>
  `*[_type == "posts" && "${tagId}" in myTags[]._ref] | order(_updatedAt desc) {_updatedAt,title,_id,myTags,postContent,thumbnail}[0...4]`;
export const postsListsQuery2 = (tagId) =>
  `*[_type == "posts" && "${tagId}" in myTags[]._ref] | order(_updatedAt desc) {_updatedAt,title,_id,myTags,postContent,thumbnail}[0...4]`;
export const footerQuery =
  '*[_type == "footer"] | order(_updatedAt desc){text,"Url":externalUrl.externalUrl,"InternalUrl":externalUrl.internalLink._ref}';
export const tagsListQuery =
  '*[_type == "tags"] | order(_updatedAt desc) {tag,_id}';
export const siteSettingsQuery =
  '*[_type == "siteSettings"][0]{title,description,logo}';
export const AboutUsQuery = '*[_type == "siteSettings"][0]{postContent}';
