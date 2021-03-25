type PageInfo = {
    title: string;
};
type Page=  "home" | "about"  | "contact";


//page와 pageinfo를 묶어 주는 역할을 한다.
const nav:Record<Page,PageInfo> = {
    home: {title: "home"},
    about: {title: "About"},
    contact : {title: "Contact"},
};