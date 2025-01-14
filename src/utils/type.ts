import { ChangeEvent, FormEvent } from "react";

//Input Types
export interface InputTypes{
  name:string;
  value:string;
  place:string;
  // onHandleInput:(e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => void;
}

//Handle Input of Contact Form
export interface FormInput{
  username:string;
  useremail:string;
  usernumber:string;
  // gender:string;
  usermessage:string;
};

//Sanity Content Types
export interface NavList{
    itemid:number;
    listitem: string;
    itemlink: string;
    _key:string;
}
export interface HeaderSanity{
    logo: string; // URL of the logo
    navlist: NavList[]; // Array of navigation items
   
};
export interface ImageItem {
    id: string;
    imgurl: string;
  }
  
export interface HomeSanity {
    mainHeading: string;
    paragraph: string;
    buttonHero:string;
    heroImg:string;
    bulbimg:string;
    content:string;
    personImg:string;
    ownblog:string;
    howto:string;
    newBlogImg:string;
    noteImg:string;
    sideImg:string;
    clickhere:string;
    infoImg:string;
    infoheading:string;
    infosubheading:string;
    infoparagraph:string;
    imglist: ImageItem[];
  }
  
export interface SanityBlog{
  languagedetail:string,
    languagename:string,
    buttonname:string,
    languageintro:string,
    languagedetailtwo:string,
    subHeading:string,
    // languagedetail:string,
    logoImg:string,
    cardImg:string,
      id:string
}  
export interface SanityComment{
  commentid:string;
  comment:string;
}
//Sanity Type
export interface SanityTypes{
    headerSan:HeaderSanity,
    homeSan:HomeSanity,
    blogSan:SanityBlog[],
    commentSan:SanityComment[],
    backUpList:SanityBlog[],
}
//Sanity Action
export interface SanAction{
    type:string;
    payload:string|HeaderSanity|HomeSanity|SanityBlog[]|SanityComment[];
}

//Context Types
export interface ContextTypes{
    sanityData:SanityTypes;
    images:number|null;
    onSelectImg:(imgIndex:number) =>  void;
    onHandleInput:(e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => void;
    formInput:FormInput;
    onHandleNavList: () => void;
    showList:boolean;
    onComChang: (value:string) => void;
    commValue:string;
    onHandleComment: (e:FormEvent<HTMLFormElement>) => void;
    onHandleSearch: (value:string) => void;
    searchValue:string;
    onSerchForm:(e:FormEvent<HTMLFormElement>) => void;
    onHandleAlert: () => void;
    hanAlert:boolean;
    handleCommentAlert: () => void;
    commAlert:boolean;
}
