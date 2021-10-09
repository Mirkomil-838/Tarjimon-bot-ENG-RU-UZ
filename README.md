# tarjimon
Bu yerda HEROKU serveriga birinchi proyektimni doimiy ishlab turadigan qilib deploy qildim.
Endi Proyektim ya`ni telegram botim hech qanday o`chib qolishlarsiz ishlayabdi deb o`ylayman.
Proyektni bunday deploy qilish uchun.
1. Proyekt ichiga Procfile nomli kengaytmaga ega bo`lmagan fayl joylaymiz.
2. Uning ichiga o`zimiz istagan nom bilan funksiya nomi yozamiz va bu funksiya terminalga qanday buyruq kiritishini yozamiz.
Misol uchun:
     1. starter: node index.js
     2. worker: npm start
     3. ishga_tushuruvchi: node bot.js va hokazo;
3. Bu fayni saqlaymiz va uni HEROKU ga deploy qilamiz.
4. Heroku ga yuklangan proyektimiz oynasidan Resources bo`limini ochamiz.
5. Bu bo`limda biz yuqorida yozgan funksiya nomi chiqib keladi. Bu funksiyani yoqib qo`yamiz!
![Procfile](https://user-images.githubusercontent.com/71525239/136661734-b301b19a-63ce-4f0e-94a5-d9d1041e6e84.png)

![Heroku](https://user-images.githubusercontent.com/71525239/136661736-aae54dcd-033c-45ec-ae78-98b425c951b9.png)
