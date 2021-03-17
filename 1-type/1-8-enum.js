{
    /*
    *Enum
    */
    //JavaScript
    var MAX_NUM = 6;
    var MONDAY = 0;
    var TUESDAY = 1;
    var DAYS_ENUM = Object.freeze({ "MONDAY": 0, "TUESDAY": 1 });
    var dayOfToday = DAYS_ENUM.MONDAY;
    //enum에서는 앞에 글자만 대문자로 적고 나머지는 소문자로 적어야함.
    var Days = void 0;
    (function (Days) {
        Days[Days["Monday"] = 1] = "Monday";
        Days[Days["Tuesday"] = 2] = "Tuesday";
        Days[Days["Wednesday"] = 3] = "Wednesday";
        Days[Days["Thursday"] = 4] = "Thursday";
        Days[Days["Friday"] = 5] = "Friday";
        Days[Days["Satarday"] = 6] = "Satarday";
        Days[Days["Sunday"] = 7] = "Sunday";
    })(Days || (Days = {}));
    console.log(Days.Monday);
    console.log(Days.Friday);
    //타스에서는 이넘을 쓰지말라고?
    var day = Days.Satarday;
    day = Days.Tuesday;
    day = 10; //숫자가 그냥 할당되구나!
}
