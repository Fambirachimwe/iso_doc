import axios from 'axios';

const BASER_URL = "http://localhost:1337/api";


export const getAllMediaFiles = () => {
    const uploads = axios.get(`${BASER_URL}/upload/files`);

    // http://localhost:1337/api/upload/files
    return uploads;

}


// Fetching documents 

export const getAllDocuments = () => {  // this is taking from the document Schema
    const docs = axios.get(`${BASER_URL}/documents`);
    return docs;
}

// fetch docs based on level and deparment

export const fetchByDepartmentAndLevel = (department, level) => {
    // /api/restaurants?filters[id][$in][0]=3&filters[id][$in][1]=6&filters[id][$in][2]=8

    // /api/:pluralApiId?filters[field][operator]=value
    const docs = axios.get(`${BASER_URL}/documents?filters[department][$eq]=${department}&filters[level][$eq]=${level}&populate=*`);

    return docs
}




