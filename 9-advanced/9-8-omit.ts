{
    type Video = {
        id: string;
        title : string;
        url: string;
        data: string;
    }

    //Omit은 뺄 데이터를 정한다. 
    type VideoMetadata = Omit<Video, "url" | "data" | "h">;
    

    function getVideo(id:string): Video{
        return{
            id,
            title: "video",
            url: "https://..",
            data: "byte-data..."
        }
    }

    function getVideoMetadat(id:string): VideoMetadata{
        return{
            id:id,
            title:"title"
        }
    }

    console.log(getVideoMetadat("1"));
    
}