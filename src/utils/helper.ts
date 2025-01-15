import {Poppins,Rubik_Vinyl,Jersey_10, Pacifico,Teko} from 'next/font/google';

export const poppins = Poppins({
  weight: '400', 
  subsets: ['latin-ext'], 
  display: 'swap', 
});
export const rubik = Rubik_Vinyl({
  weight: '400', 
  subsets: ['latin'], 
  display: 'swap', 
});
export const jersey = Jersey_10({
  weight: '400', 
  subsets: ['latin-ext'], 
  display: 'swap', 
});
export const cherry = Pacifico({
  weight: '400', 
  subsets: ['latin-ext'], 
  display: 'swap', 
});
export const teko = Teko({
  weight: '400', 
  subsets: ['latin-ext'], 
  display: 'swap', 
});

//GROQ Query
export const headerSanityApi = `*[_type=="headercontent"][0]{
  navlist,
    "logo":logo.asset->url
}
    `;
export const homeSanityApi = `
*[_type=="homecontent"][0]{
  mainHeading,
    paragraph,
    buttonHero,
    content,
    ownblog,
    howto,
    infoheading,
    infosubheading,
    infoparagraph,
    "infoImg":infoimg.asset->url,
    clickhere,
    "noteImg":noteimg.asset->url,
    "sideImg":sideimage.asset->url,
  "newBlogImg":newblogimage.asset->url,
    "bulbimg":bulbimg.asset->url,
    "heroImg":heroimg.asset->url,
    "personImg":personimage.asset->url,
    imglist[]{
      id,
      "imgurl":imgurl.asset->url
    }
}
`;
export const blogSanityApi = `
*[_type=="bloglist"]{
  languagedetail,
    languagename,
    buttonname,
    languageintro,
    languagedetailtwo,
    subHeading,
    "logoImg":logoimg.asset->url,
    "cardImg":cardimg.asset->url,
      "id":_id
}
`;

export const commentSanityApi = `*[_type=="blogcomment"]{
  comment,
    commentid
}
    `;