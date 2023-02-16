import axios from 'axios';

const BASER_URL = "http://192.168.100.38:1337/api";



export const fetchAllLevels = () => {
    const levels = axios.get(`${BASER_URL}/levels?populate=*`);
    return levels;
}



export const fetchLevelById = (levelNumber) => {
    // get the level

    // http://localhost:1337/api/levels?filters[level_number][$eq]=1&populate=*
    const level1 = axios.get(`${BASER_URL}/levels?filters[level_number][$eq]=${levelNumber}&populate=*`);

    return level1
}

// /api/users?filters[username][$eq]=John

export const fetchFinalForms = () => {

    const finalForms = axios.get(`${BASER_URL}/final-forms?populate=*`);
    return finalForms;
}

export const fetchFrames = () => {

    const frames = axios.get(`${BASER_URL}/frames?populate=*`);
    return frames;
}

export const fetchIsoDocs = () => {

    const iso = axios.get(`${BASER_URL}/iso-docs?populate=*`);
    return iso;
}

export const fetchIsoRequirements = () => {

    const iso = axios.get(`${BASER_URL}/iso-reqs?populate=*`);
    return iso;
}

export const fetchFinalFormById = (id) => {

    const finalForms = axios.get(`${BASER_URL}/final-forms?populate=*`);
    return finalForms;
}

export const getL1 = () => {

    const level1 = axios.get(`${BASER_URL}/l1s/1?populate=*`);

    return level1
}

export const getL2 = () => {

    const level2 = axios.get(`${BASER_URL}/l2s/1?populate=*`);

    return level2
}

export const getL3 = () => {

    const level3 = axios.get(`${BASER_URL}/l3s/1?populate=*`);

    return level3
}

export const getL4 = () => {

    const level4 = axios.get(`${BASER_URL}/l4s/1?populate=*`);

    return level4
}


export const getAllLevelFiles = async () => {
    // get all files from all levels

    let _files = [];

    // let files = [];
    const L1 = await getL1()
    const L2 = await getL2()
    const L3 = await getL3()
    const L4 = await getL4()

    // const L2 = await getL2();
    // const L3 = await getL3();
    // const L4 = await getL4()

    // _files.push(L1, L2, L3, L4)




    Promise.all([L1, L2, L3, L4]).then((values) => {

        // console.log()
        _files.push(values)
        // return values
    });

    // console.log(_files)
    var globalFile = [];
    var __glob = [];

    // return _files;
    (await _files)?.forEach(file => {

        console.log(file)
        globalFile.push(file.data)
    })

    for (var i = 0; i < globalFile.length; i++) {
        var levelFile = globalFile[i].data.attributes.files.data;
        for (var j = 0; j < levelFile.length; j++) {
            __glob.push(levelFile[j])
        }
    }


    return __glob;


}

export const getAllMediaFiles = () => {
    const uploads = axios.get(`${BASER_URL}/upload/files`);

    http://localhost:1337/api/upload/files
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




