{
    /*
    *Enum
    */
   //JavaScript
   const MAX_NUM = 6;
   const MONDAY = 0;
   const TUESDAY = 1;
   const DAYS_ENUM = Object.freeze({"MONDAY" : 0, "TUESDAY" : 1})
   const dayOfToday = DAYS_ENUM.MONDAY;

   //enum에서는 앞에 글자만 대문자로 적고 나머지는 소문자로 적어야함.
   type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";
   enum Days {
       Monday = 1, //먼데이가 1부터 올라감. 문자열도 할당가능함.
       Tuesday,
       Wednesday,
       Thursday,
       Friday,
       Satarday,
       Sunday,
   }
   console.log(Days.Monday);
   console.log(Days.Friday);
   //타스에서는 이넘을 쓰지말라고?
   let day: Days = Days.Satarday;
   day = Days.Tuesday;
   day = 10; //숫자가 그냥 할당되구나!

   //유니온타입을 이용해서 타입을 보장할 수 있다. 역시!!!
   let dayOfweek:DaysOfWeek = "Monday";

    //    dayOfweek = "1";
   //ps. enum을 사용할 수 밖에없던 환경은 native프로그래밍 언어에서는 enum을 쓰지만 웹클라를 사용하는 경우 enum대신 type을 사용하는게 안전하다.
}
