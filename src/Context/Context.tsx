'use client';
import { client } from '@/sanity/lib/client';
import { blogSanityApi, commentSanityApi, headerSanityApi, homeSanityApi } from '@/utils/helper';
import { ContextTypes, SanAction, SanityTypes, FormInput, SanityComment, SanityBlog, HomeSanity, HeaderSanity } from '@/utils/type';
import React, { ChangeEvent, createContext, FormEvent, ReactNode, useContext, useEffect, useReducer, useState } from 'react'


const initialSanity:SanityTypes = {
    headerSan:{
         logo:'',
         navlist:[],
    },
    homeSan:{
        mainHeading:'',
        paragraph:"",
        buttonHero:'',
        heroImg:"",
        bulbimg:'',
        content:'',
        personImg:'',
        clickhere:'',
        howto:"",
        newBlogImg:'',
        ownblog:'',
        noteImg:'',
        sideImg:'',
        infoheading:'',
        infoImg:'',
        infoparagraph:'',
        infosubheading:'',
        imglist:[],
    },
    blogSan:[],
    commentSan:[],
    backUpList:[],
};
const sanityAction = {
    HEADER:'HEADER',
    HOME:'HOME',
    BLOG_LIST:'BLOG_LIST',
    COMMENTS:'COMMENTS',
    SREACH_LIST:'SREACH_LIST'
}
const BlogContext = createContext<ContextTypes|null>(null);
function Context({children}:{children:ReactNode}) {
    //FOR SELECT AN IMAGE ON HERO SECTION
    const [images,setImages] = useState<number|null>(null);
    //FOR SHOW NAVLIST OR NOT
    const [showList,setShowList] = useState<boolean>(false);
    //FOR HANDLE COMMENT INPUT
    const [commValue,setCommValue] = useState<string>('');
    //FOR HANDLE SERACH INPUT
    const [searchValue,setSearchValue] = useState<string>('');
    //FOR HANDLE SEARCH ALERT
    const [hanAlert,sethanAlert] = useState<boolean>(false);
    //FOR HANDLE COMMENT ALERT
    const [commAlert,setCommAlert] = useState<boolean>(false);

    //FOR HANDLE CONTACT FORM INPUT
    const [formInput,setFormInput] = useState<FormInput>({username:"",useremail:"",usernumber:"",usermessage:""});
    const onHandleInput = (e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        const {name,value} = e.target;
        setFormInput((prev:FormInput) => ({...prev,[name]:value}));
    };

    //DESTRUCTURE THE SANITY ACTION OBJECT
    const {HEADER,HOME,BLOG_LIST,COMMENTS,SREACH_LIST} = sanityAction;
    
    //FOR HANDLING NAVLIST 
    const onHandleNavList = () => {
        setShowList((prev) => !prev);
    };

    //FOR HANDLING SEARCH INPUT
    const onHandleSearch = (value:string) => {
        setSearchValue(value)
    };
    
    const onSerchForm = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(searchValue.trim() == ''){
            // alert("plx fill the field");
            sanDispatch({type:SREACH_LIST,payload:searchValue})
            sethanAlert(true);
        }else{
            sanDispatch({type:SREACH_LIST,payload:searchValue})
            sethanAlert(false);
        }
    };

    const onHandleAlert = () => {
        sethanAlert(false);
    };

    

    //FOR HANDLING COMMENT INPUT
    const onComChang = (value:string) => {
        setCommValue(value);
    }
    //FOR HANDLING SANITY FORM
    const onHandleComment = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if(commValue.trim() !== ''){
            // alert('Comment Added');
            setCommAlert(false);
            try{
                const newComment = {
                    _type:'blogcomment',
                    comment:commValue,
                    commentid: new Date().getTime().toString(),
                }
                setCommValue('');
                await client.create(newComment);
            }catch(eror){
                alert(`Comment hasn't go to sanity ${eror}`);
            }
        }else{
            // alert('Plz fill the field')
            setCommAlert(true)
        }
    };
    //HANDLE COMMENT ALERT 
    const handleCommentAlert = () => {
        setCommAlert(false);
    }

    
    const [sanityData,sanDispatch] = useReducer(sanReducer,initialSanity);
    function sanReducer(state:SanityTypes,action:SanAction):SanityTypes {
        switch (action.type) {
            case HEADER:
                return {...state,headerSan:(action.payload as HeaderSanity)};
            case HOME:
                return {...state,homeSan:(action.payload as HomeSanity)}; 
            case BLOG_LIST:
                return {...state,blogSan:(action.payload as SanityBlog[]),backUpList:(action.payload as SanityBlog[])}; 
            case COMMENTS:
                return {...state,commentSan:(action.payload as SanityComment[])};
            case SREACH_LIST:
                  // If the input value is empty or null, return the full list of products
        if (!(action.payload as string).trim()) {
            return { ...state, blogSan: state.backUpList}; // Use a backup of the full product list
          }
          const filtMenInput = state.backUpList.filter((e) => {
            return e.languagename
              .toLowerCase()
              .split(/\s+/)
              .join("")
              .includes((action.payload as string).toLowerCase().split(/\s+/).join(""));
          });
          return { ...state, blogSan: filtMenInput };               
        
            default:
                return state
        }
    };

    //PERFORM FUNCTION TO FETCH SANITY DATA
    async function fetchSanityContent(query: string) {
        const contentSanity = await client.fetch(query);
        console.log(contentSanity);
        return contentSanity;
      }

    //SANITY USEEFFECT
    useEffect(() => {
        const sanityShow =async  () => {
            sanDispatch({type:HEADER,payload:await fetchSanityContent(headerSanityApi)});
            sanDispatch({type:HOME,payload:await fetchSanityContent(homeSanityApi)});
            sanDispatch({type:BLOG_LIST,payload:await fetchSanityContent(blogSanityApi)});
            sanDispatch({type:COMMENTS,payload:await fetchSanityContent(commentSanityApi)});
        };
        sanityShow();
    },[HOME,HEADER,BLOG_LIST,COMMENTS]);

    // FUNCTION TO SELECT THE IMAGE
    const onSelectImg =(imgIndex:number) => {
        setImages(imgIndex);
    }
  return (
    <>
      <BlogContext.Provider value={{sanityData,images,onSelectImg,formInput,onHandleInput,onHandleNavList,showList,commValue,onComChang,onHandleComment,searchValue,onHandleSearch,onSerchForm,hanAlert,onHandleAlert,commAlert,handleCommentAlert}}>{children}</BlogContext.Provider>
    </>
  )
};
export default Context;

//custom Hook
export const useBlogHook = () => {
    const blogHook = useContext(BlogContext);
    if(!blogHook){
        throw new Error('Blog Context is not Found');
    };
    return blogHook;
}