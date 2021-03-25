{
    type Video = {
        id: string;
        title : string;
        url: string;
        data: string;
    }

    //pick은 기존의 타입에서 원하는 속성과 키만 쏙 뽑아서 사용할 수 있다.
    //옵셔널은 안된다. 
    
    // type VideoMetadata = Pick<Video, "id" | "title">;
    //옵셔널도 넣었다.
    type VideoMetadata = Pick<Partial<Video>, "id" | "title">;
    

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