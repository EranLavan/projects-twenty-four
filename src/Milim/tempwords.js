const words = [
   
      {
        id: 148,
        english: 'Limited',
        russian: 'ограничено',
        hebrew: 'מצומצם',
        pronuncEng: 'metzumtzAm',
        pronuncRus: 'мецумцАм',
        category: 'adverb'
      },

      {
        id: 170,
        english: 'Change money',
        russian: 'Сдача, размен',
        hebrew: 'עודף',
        pronuncEng: 'odef',
        pronuncRus: 'одэф',
        category: 'general'
      },

      {
        id: 185,
        english: 'Towels',
        russian: 'Полотенца',
        hebrew: 'מגבות',
        pronuncEng: 'magvOt',
        pronuncRus: 'магвОт',
        category: 'general'
      },
  
      {
        id: 199,
        english: 'Firstborn',
        russian: 'Первенец, перворожденный',
        hebrew: 'בכור',
        pronuncEng: 'bkhor',
        pronuncRus: 'бхор',
        category: 'general'
      },
  
      {
        id: 200,
        english: 'Section, segment, part, expression, passage',
        russian: 'Часть, выражение, словосочетание',
        hebrew: 'קטע',
        pronuncEng: 'kEta',
        pronuncRus: 'кЕта',
        category: 'general'
      },
  
      {
        id: 211,
        english: 'Pea',
        russian: 'Горох',
        hebrew: 'אפונה',
        pronuncEng: 'afunA',
        pronuncRus: 'афунА',
        category: 'grocery'
      },
  
      {
        id: 213,
        english: 'Radish',
        russian: 'Редька или редис',
        hebrew: 'צנון',
        pronuncEng: 'tznon',
        pronuncRus: 'цнон',
        category: 'grocery'
      },
  
      {
        id: 216,
        english: 'Lettuce, salad green',
        russian: 'Листовой салат',
        hebrew: 'חסה',
        pronuncEng: 'khAsa',
        pronuncRus: 'хАса',
        category: 'grocery'
      },
  
      {
        id: 220,
        english: 'Fig',
        russian: 'Инжир, смоква, фига',
        hebrew: 'תאנה',
        pronuncEng: "te'enA",
        pronuncRus: 'тэенА',
        category: 'grocery'
      },
  
      {
        id: 226,
        english: 'Surgeon',
        russian: 'Хирург',
        hebrew: 'מנתח',
        pronuncEng: 'menatEakh',
        pronuncRus: 'менатЭах',
        category: 'profession'
      },
  
      {
        id: 229,
        english: 'Channel',
        russian: 'Канал',
        hebrew: 'ערוץ',
        pronuncEng: 'arUtz',
        pronuncRus: 'арУц',
        category: 'general'
      },
  
      {
        id: 231,
        english: 'Driver license',
        russian: 'Водительские права',
        hebrew: 'רישיון נהיגה',
        pronuncEng: 'rishyUn nehigA',
        pronuncRus: 'ришьЮн нэхигА',
        category: 'general'
      },
      
      {
        id: 233,
        english: 'In general',
        russian: 'В основном',
        hebrew: 'בעיקר',
        //also could be בכללי (bekhlali`)
        pronuncEng: "be'ikAr",
        pronuncRus: 'бэикАр',
        category: 'adverb'
      },
  
      {
        id: 236,
        english: 'Lecture, talk, discourse',
        russian: 'Лекция, обсуждение',
        hebrew: 'הרצאה',
        pronuncEng: 'hartzaA',
        pronuncRus: 'харцаА',
        category: 'general'
      },
  
      {
        id: 242,
        english: 'Pool',
        russian: 'Бассейн',
        hebrew: 'בריכה',
        pronuncEng: 'brikhA',
        pronuncRus: 'брихА',
        category: 'general'
      },
  
      {
        id: 244,
        english: 'Review, examination, control',
        russian: 'Проверка',
        hebrew: 'ביקורת',
        pronuncEng: 'bikOret',
        pronuncRus: 'бикОрэт',
        category: 'general'
      },
  
      {
        id: 248,
        english: 'Warrior',
        russian: 'Воин',
        hebrew: 'לוחם',
        pronuncEng: 'lOkhem',
        pronuncRus: 'лОхэм',
        category: 'general'
      },
  
      {
        id: 258,
        english: 'Moon',
        russian: 'Луна',
        hebrew: 'ירח',
        pronuncEng: 'yarEakh',
        pronuncRus: 'ярЭах',
        category: 'general'
      },
  
      {
        id: 260,
        english: 'Almost',
        russian: 'Почти',
        hebrew: 'כמעט',
        pronuncEng: "kim'At",
        pronuncRus: "ким'Ат",
        category: 'adverb'
      },
  
      {
        id: 262,
        english: 'Carbohydrate',
        russian: 'Углевод',
        hebrew: 'פחמימה',
        pronuncEng: 'pakhmimA',
        pronuncRus: 'пахмимА',
        category: 'grocery'
      },
  
      {
        id: 263,
        english: 'Reception time',
        russian: 'Время приёма',
        hebrew: 'קבלת קהל',
        pronuncEng: 'kabalAt kahAl',
        pronuncRus: 'кабалАт кахаль',
        category: 'general'
      },
  
      {
        id: 264,
        english: 'Working hours',
        russian: 'Рабочие часы',
        hebrew: 'שעות פעילות',
        pronuncEng: 'shaOt peilUt',
        pronuncRus: 'шаОт пэилУт',
        category: 'general'
      },
  
    //   {
    //     id: 271,
    //     english: 'To increase / to expand (infinitive)',
    //     russian: 'Увеличить (инфинитив)',
    //     hebrew: 'להגדיל',
    //     pronuncEng: 'lehagdil',
    //     pronuncRus: 'леhагдИль',
    //     category: 'hifil'
    //   },
  
    //   {
    //     id: 272,
    //     english: 'I/You increase/expand (masc.)',
    //     russian: 'Увеличить (наст.вр., ед.ч., м.р.)',
    //     hebrew: 'מגדיל',
    //     pronuncEng: 'magdil',
    //     pronuncRus: 'магдИль',
    //     category: 'hifil'
    //   },
  
    //   {
    //     id: 273,
    //     english: 'I increased/expanded',
    //     russian: '(Я) увеличил',
    //     hebrew: 'הגדלתי',
    //     pronuncEng: 'higdAlti',
    //     pronuncRus: 'хигдАльти',
    //     category: 'hifil'
    //   },
  
    //   {
    //     id: 274,
    //     english: 'He increased/expanded',
    //     russian: '(Он) увеличил',
    //     hebrew: 'הגדיל',
    //     pronuncEng: 'higdil',
    //     pronuncRus: 'хигдИль',
    //     category: 'hifil'
    //   },
  
    //   {
    //     id: 275,
    //     english: 'I will increase/expand',
    //     russian: 'Я буду увеличивать',
    //     hebrew: 'אגדיל',
    //     pronuncEng: 'agdil',
    //     pronuncRus: 'агдИль',
    //     category: 'hifil'
    //   },
  
    //   {
    //     id: 276,
    //     english: '...am being increased',
    //     russian: 'Я увеличиваюсь',
    //     hebrew: 'מוגדל',
    //     pronuncEng: 'mugdAl',
    //     pronuncRus: 'мугдАль',
    //     category: 'hufal'
    //   },
  
    //   {
    //     id: 277,
    //     english: 'He was increased/expanded',
    //     russian: 'Он был увеличен',
    //     hebrew: 'הוגדל',
    //     pronuncEng: 'hugdal',
    //     pronuncRus: 'хугдАль',
    //     category: 'hufal'
    //   },
  
    //   {
    //     id: 278,
    //     english: 'He will be increased/expanded',
    //     russian: 'Он будет увеличен',
    //     hebrew: 'יוגדל',
    //     pronuncEng: 'yugdAl',
    //     pronuncRus: 'йугдАль',
    //     category: 'hufal'
    //   },
  
    //   {
    //     id: 279,
    //     english: 'To be sorry, to regret (inf.)',
    //     russian: 'Извиняться (инфинитив)',
    //     hebrew: 'להצטער',
    //     pronuncEng: 'lehitztaEr',
    //     pronuncRus: 'лехицтаЭр',
    //     category: 'hitpael'
    //   },
  
    //   {
    //     id: 280,
    //     english: 'To be sorry (sing. masc. present)',
    //     russian: 'Извиняться (ед.ч., м.р., наст.вр)',
    //     hebrew: 'מצטער',
    //     pronuncEng: 'mitztaEr',
    //     pronuncRus: 'мицтаЭр',
    //     category: 'hitpael'
    //   },
  
    //   {
    //     id: 281,
    //     english: 'To be sorry (plur. masc. present)',
    //     russian: 'Извиняться (мн.ч., м.р., наст.вр)',
    //     hebrew: 'מצטערים',
    //     pronuncEng: 'mitztaarim',
    //     pronuncRus: 'мицтаарИм',
    //     category: 'hitpael'
    //   },
  
    //   {
    //     id: 282,
    //     english: 'I was sorry',
    //     russian: '(Я) извинялся',
    //     hebrew: 'הצטערתי',
    //     pronuncEng: 'hitztaArti',
    //     pronuncRus: 'хицтаАрти',
    //     category: 'hitpael'
    //   },
  
    //   {
    //     id: 283,
    //     english: 'He was sorry',
    //     russian: '(Он) извинялся',
    //     hebrew: 'הצטער',
    //     pronuncEng: 'hitztaEr',
    //     pronuncRus: 'хицтаЭр',
    //     category: 'hitpael'
    //   },
  
    //   {
    //     id: 284,
    //     english: 'I will be sorry',
    //     russian: '(Я) буду извиняться',
    //     hebrew: 'אצטער',
    //     pronuncEng: 'etztaEr',
    //     pronuncRus: 'эцтаЭр',
    //     category: 'hitpael'
    //   },
  
    //   {
    //     id: 285,
    //     english: 'Pencil case',
    //     russian: 'Пенал',
    //     hebrew: 'קלמר',
    //     pronuncEng: 'kalmAr',
    //     pronuncRus: 'кальмАр',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 286,
    //     english: 'Chimney',
    //     russian: 'Труба, дымоход',
    //     hebrew: 'ארובה',
    //     pronuncEng: 'aruvA',
    //     pronuncRus: 'арувА',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 287,
    //     english: 'A chance meeting',
    //     russian: 'Случайная встреча',
    //     hebrew: 'פגישה מקרית',
    //     pronuncEng: 'pgishA mikrit',
    //     pronuncRus: 'пгишА микрИт',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 288,
    //     english: 'Quiet, stillness, tranquility',
    //     russian: 'Тишина, спокойствие',
    //     hebrew: 'שקט',
    //     pronuncEng: 'shEket',
    //     pronuncRus: 'шЕкет',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 289,
    //     english: 'Appetite',
    //     russian: 'Аппетит',
    //     hebrew: 'תאבון',
    //     pronuncEng: 'teavOn',
    //     pronuncRus: 'тэавОн',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 290,
    //     english: 'Rest, relaxing (noun)',
    //     russian: 'Отдых',
    //     hebrew: 'מנוחה',
    //     pronuncEng: 'menukhA',
    //     pronuncRus: 'менухА',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 291,
    //     english: 'Runny nose',
    //     russian: 'Насморк',
    //     hebrew: 'נזלת',
    //     pronuncEng: 'nazElet',
    //     pronuncRus: 'назЭлет',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 292,
    //     english: 'Asthma',
    //     russian: 'Астма',
    //     hebrew: 'קצרת',
    //     pronuncEng: 'katzEret',
    //     pronuncRus: 'кацЕрет',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 293,
    //     english: 'Wide, broad',
    //     russian: 'Широкий',
    //     hebrew: 'רחב',
    //     pronuncEng: 'rakhAv',
    //     pronuncRus: 'рахАв',
    //     category: 'adjective'
    //   },
  
    //   {
    //     id: 294,
    //     english: 'Charming',
    //     russian: 'Очаровательный',
    //     hebrew: 'מקסים',
    //     pronuncEng: 'maksim',
    //     pronuncRus: 'максИм',
    //     category: 'adjective'
    //   },
  
    //   {
    //     id: 295,
    //     english: 'View, scenery',
    //     russian: 'Вид, пейзаж',
    //     hebrew: 'נוף',
    //     pronuncEng: 'nof',
    //     pronuncRus: 'ноф',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 296,
    //     english: 'Trouble, woe',
    //     russian: 'Несчастье, беда',
    //     hebrew: 'צרה',
    //     pronuncEng: 'tzara',
    //     pronuncRus: 'царА',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 297,
    //     english: 'Narrow (but not razE)',
    //     russian: 'Узкий (не разЭ)',
    //     hebrew: 'צר',
    //     pronuncEng: 'tzar',
    //     pronuncRus: 'цар',
    //     category: 'adjective'
    //   },
  
    //   {
    //     id: 298,
    //     english: 'Preferable',
    //     russian: 'Предпочтительный',
    //     hebrew: 'עדיף',
    //     pronuncEng: 'adif',
    //     pronuncRus: 'адИф',
    //     category: 'adjective'
    //   },
  
    //   {
    //     id: 299,
    //     english: 'Umbrella',
    //     russian: 'Зонтик',
    //     hebrew: 'מטרייה',
    //     pronuncEng: 'mitriyA',
    //     pronuncRus: 'митриЯ',
    //     category: 'general'
    //   },
      
    //   {
    //     id: 300,
    //     english: 'Era, period',
    //     russian: 'Эра, период',
    //     hebrew: 'תקופה',
    //     pronuncEng: 'tkufA',
    //     pronuncRus: 'ткуфА',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 301,
    //     english: 'Believe (sing masc present)',
    //     russian: 'Верить (ед.ч., м.р., наст.вр.)',
    //     hebrew: 'מאמין',
    //     pronuncEng: 'meamin',
    //     pronuncRus: 'мэамИн',
    //     category: 'hifil'
    //   },
  
    //   {
    //     id: 302,
    //     english: 'High quality, qualitative',
    //     russian: 'Высококлассный, качественный',
    //     hebrew: 'איכותי',
    //     pronuncEng: 'eikhuti',
    //     pronuncRus: 'эйхутИ',
    //     category: 'adjective'
    //   },
  
    //   {
    //     id: 303,
    //     english: 'Science',
    //     russian: 'Наука',
    //     hebrew: 'מדע',
    //     pronuncEng: 'madA',
    //     pronuncRus: 'мадА',
    //     category: 'adjective'
    //   },
  
    //   {
    //     id: 304,
    //     english: 'Presentation, performance',
    //     russian: 'Представление, презентация',
    //     hebrew: 'הצגה',
    //     pronuncEng: 'hatzagA',
    //     pronuncRus: 'хацагА',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 305,
    //     english: 'Volunteer',
    //     russian: 'Волонтёр, доброволец',
    //     hebrew: 'מתנדב',
    //     pronuncEng: 'mitnadEv',
    //     pronuncRus: 'митнадЭв',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 306,
    //     english: 'To hang out (singular present)',
    //     russian: 'Проводить время',
    //     hebrew: 'מבלה',
    //     pronuncEng: 'mevalE',
    //     pronuncRus: 'мевалЕ',
    //     category: 'piel'
    //   },
  
    //   {
    //     id: 307,
    //     english: 'To arrive (sing masc present)',
    //     russian: 'Прибывать (наст.вр., м.р., ед.ч.)',
    //     hebrew: 'מגיע',
    //     pronuncEng: 'magia',
    //     pronuncRus: 'магИа',
    //     category: 'hifil'
    //   },
  
    //   {
    //     id: 308,
    //     english: 'Suitcase',
    //     russian: 'Чемодан',
    //     hebrew: 'מזוודה',
    //     pronuncEng: 'mizvadA',
    //     pronuncRus: 'мизвадА',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 309,
    //     english: 'Pastry',
    //     russian: 'Выпечка',
    //     hebrew: 'מאפה',
    //     pronuncEng: "ma'afE",
    //     pronuncRus: 'маафЭ',
    //     category: 'grocery'
    //   },
  
    //   {
    //     id: 310,
    //     english: 'To believe, to trust (inf.)',
    //     russian: 'Доверять (инфинитив)',
    //     hebrew: 'להאמין',
    //     pronuncEng: 'lehaamin',
    //     pronuncRus: 'лехаамИн',
    //     category: 'hifil'
    //   },
  
    //   {
    //     id: 311,
    //     english: '(I) believed, (I) trusted',
    //     russian: '(Я) доверял',
    //     hebrew: 'האמנתי',
    //     pronuncEng: 'heemAnti',
    //     pronuncRus: 'хэемАнти',
    //     category: 'hifil'
    //   },
  
    //   {
    //     id: 312,
    //     english: '(He) believed, (he) trusted',
    //     russian: '(Он) доверял',
    //     hebrew: 'האמין',
    //     pronuncEng: 'heemin',
    //     pronuncRus: 'хээмИн',
    //     category: 'hifil'
    //   },
  
    //   {
    //     id: 313,
    //     english: 'I will believe, I will trust',
    //     russian: '(Я) буду доверять',
    //     hebrew: 'אאמין',
    //     pronuncEng: 'aamin',
    //     pronuncRus: 'аамИн',
    //     category: 'hifil'
    //   },
  
    //   {
    //     id: 314,
    //     english: 'To hang out (infinitive)',
    //     russian: 'Проводить время (инфинитив)',
    //     hebrew: 'לבלות',
    //     pronuncEng: 'levalOt',
    //     pronuncRus: 'левалОт',
    //     category: 'piel'
    //   },
  
    //   {
    //     id: 315,
    //     english: '(I) was hanging out',
    //     russian: '(Я) проводил время',
    //     hebrew: 'בליתי',
    //     pronuncEng: 'biliti',
    //     pronuncRus: 'билИти',
    //     category: 'piel'
    //   },
  
    //   {
    //     id: 316,
    //     english: '(He) was hanging out',
    //     russian: '(Он) проводил время',
    //     hebrew: 'בלה',
    //     pronuncEng: 'bilA',
    //     pronuncRus: 'билА',
    //     category: 'piel'
    //   },
  
    //   {
    //     id: 317,
    //     english: 'I will hang out',
    //     russian: '(Я) буду проводить время',
    //     hebrew: 'אבלה',
    //     pronuncEng: 'avalE',
    //     pronuncRus: 'авалЕ',
    //     category: 'piel'
    //   },
  
    //   {
    //     id: 318,
    //     english: 'Relationship',
    //     russian: 'Отношения',
    //     hebrew: 'מערכת יחסים',
    //     pronuncEng: "ma'arEkhet yakhasim",
    //     pronuncRus: 'маарЭхэт яхасИм',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 319,
    //     english: 'Population',
    //     russian: 'Население',
    //     hebrew: 'אוכלוסייה',
    //     pronuncEng: 'ukhlusiA',
    //     pronuncRus: 'ухлусиЯ',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 320,
    //     english: 'Individual (adj)',
    //     russian: 'Индивидуальный',
    //     hebrew: 'פרט',
    //     pronuncEng: 'prat',
    //     pronuncRus: 'прат',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 321,
    //     english: 'Youth, young man',
    //     russian: 'Юноша',
    //     hebrew: 'נער',
    //     pronuncEng: 'naAr',
    //     pronuncRus: 'наАр',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 322,
    //     english: 'To contact/phone/call (infinitive)',
    //     russian: 'Связываться, созваниваться (инфинитив)',
    //     hebrew: 'להתקשר',
    //     pronuncEng: 'lehitkashEr',
    //     pronuncRus: 'лехиткашЕр',
    //     category: 'hitpael'
    //   },
  
    //   {
    //     id: 323,
    //     english: 'To contact/phone/call (present sing. masc.)',
    //     russian: 'Связываться, созваниваться (наст.вр.)',
    //     hebrew: 'מתקשר',
    //     pronuncEng: 'mitkashEr',
    //     pronuncRus: 'миткашЕр',
    //     category: 'hitpael'
    //   },
  
    //   {
    //     id: 324,
    //     english: '(I) contacted/phoned/called',
    //     russian: '(Я) созвонился/связался',
    //     hebrew: 'התקשרתי',
    //     pronuncEng: 'hitkashArti',
    //     pronuncRus: 'хиткашАрти',
    //     category: 'hitpael'
    //   },
  
    //   {
    //     id: 325,
    //     english: '(He) contacted/phoned/called',
    //     russian: '(Он) связался/созвонился',
    //     hebrew: 'התקשר',
    //     pronuncEng: 'hitkashEr',
    //     pronuncRus: 'хиткашЭр',
    //     category: 'hitpael'
    //   },
  
    //   {
    //     id: 326,
    //     english: 'I will contact/phone/call',
    //     russian: 'Я созвонюсь/свяжусь',
    //     hebrew: 'אתקשר',
    //     pronuncEng: 'etkashEr',
    //     pronuncRus: 'эткашЕр',
    //     category: 'hitpael'
    //   },
  
    //   {
    //     id: 327,
    //     english: 'To ring, to chime, to call by telephone (infinitive)',
    //     russian: 'Звонить, звенеть (инфинитив)',
    //     hebrew: 'לצלצל',
    //     pronuncEng: 'letzaltzEl',
    //     pronuncRus: 'лецальцЕль',
    //     category: 'piel'
    //   },
  
    //   {
    //     id: 328,
    //     english: 'To ring/chime/call (present, masc, singular)',
    //     russian: 'Звонить (наст.вр., ед.ч., м.р.)',
    //     hebrew: 'מצלצל',
    //     pronuncEng: 'metzaltzEl',
    //     pronuncRus: 'мецальцЕль',
    //     category: 'piel'
    //   },
  
    //   {
    //     id: 329,
    //     english: '(I) called/rang/chimed',
    //     russian: '(Я) /по/звонил',
    //     hebrew: 'צלצלתי',
    //     pronuncEng: 'tziltzAlti',
    //     pronuncRus: 'цильцАльти',
    //     category: 'piel'
    //   },
  
    //   {
    //     id: 330,
    //     english: '(He) called/rang/chimed',
    //     russian: '(Он) звонил/позвонил',
    //     hebrew: 'צלצל',
    //     pronuncEng: 'tziltzEl',
    //     pronuncRus: 'цильцЕль',
    //     category: 'piel'
    //   },
  
    //   {
    //     id: 331,
    //     english: 'I will ring/call',
    //     russian: '(Я) позвоню',
    //     hebrew: 'אצלצל',
    //     pronuncEng: 'atzaltzEl',
    //     pronuncRus: 'ацальцЕль',
    //     category: 'piel'
    //   },
  
    //   {
    //     id: 332,
    //     english: 'Comfortable, convenient',
    //     russian: 'Удобный/удобно',
    //     hebrew: 'נוח',
    //     pronuncEng: 'nUakh',
    //     pronuncRus: 'нУах',
    //     category: 'adverb'
    //   },
  
    //   {
    //     id: 333,
    //     english: 'Warranty card',
    //     russian: 'Гарантийный талон',
    //     hebrew: 'תעודת אחריות',
    //     pronuncEng: 'teudAt akharayUt',
    //     pronuncRus: 'тэудАт ахараЮт',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 334,
    //     english: 'At all',
    //     russian: 'Совсем, вообще',
    //     hebrew: 'בכלל',
    //     pronuncEng: 'bikhlAl',
    //     pronuncRus: 'бихлЯль',
    //     category: 'adverb'
    //   },
  
    //   {
    //     id: 335,
    //     english: 'Sound, voice',
    //     russian: 'Звук, голос',
    //     hebrew: 'קול',
    //     pronuncEng: 'kol',
    //     pronuncRus: 'коль',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 336,
    //     english: 'Broken (about technical things)',
    //     russian: 'Сломанный (про технику)',
    //     hebrew: 'מקולקל',
    //     pronuncEng: 'mekulkAl',
    //     pronuncRus: 'мекулькАль',
    //     category: 'adverb'
    //   },
  
    //   {
    //     id: 337,
    //     english: 'Postcard',
    //     russian: 'Открытка',
    //     hebrew: 'גלויה',
    //     pronuncEng: 'gluyA',
    //     pronuncRus: 'глуЯ',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 338,
    //     english: 'Parcel, package',
    //     russian: 'Посылка',
    //     hebrew: 'חבילה',
    //     pronuncEng: 'havilA',
    //     pronuncRus: 'хавилА',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 339,
    //     english: 'Blessing',
    //     russian: 'Благословение',
    //     hebrew: 'ברכה',
    //     pronuncEng: 'brakhA',
    //     pronuncRus: 'брахА',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 340,
    //     english: 'To order, to invite (infinitive)',
    //     russian: 'Заказать (инфинитив)',
    //     hebrew: 'להזמין',
    //     pronuncEng: 'lehazmin',
    //     pronuncRus: 'лехазмИн',
    //     category: 'hifil'
    //   },
  
    //   {
    //     id: 341,
    //     english: 'To order, to invite (present, sing. masc.)',
    //     russian: 'Заказать (наст.вр., ед.ч., м.р.)',
    //     hebrew: 'מזמין',
    //     pronuncEng: 'mazmin',
    //     pronuncRus: 'мазмИн',
    //     category: 'hifil'
    //   },
  
    //   {
    //     id: 342,
    //     english: '(I) ordered / invited',
    //     russian: '(Я) заказал(а)',
    //     hebrew: 'הזמנתי',
    //     pronuncEng: 'hizmAnti',
    //     pronuncRus: 'хизмАнти',
    //     category: 'hifil'
    //   },
  
    //   {
    //     id: 343,
    //     english: '(He) ordered / invited',
    //     russian: '(Он) заказал',
    //     hebrew: 'הזמין',
    //     pronuncEng: 'hizmin',
    //     pronuncRus: 'хизмИн',
    //     category: 'hifil'
    //   },
  
    //   {
    //     id: 344,
    //     english: '(I) will order / invite',
    //     russian: '(Я) закажу',
    //     hebrew: 'אזמין',
    //     pronuncEng: 'azmin',
    //     pronuncRus: 'азмИн',
    //     category: 'hifil'
    //   },
  
    //   {
    //     id: 345,
    //     english: 'To ignite (infinitive)',
    //     russian: 'Зажигать (инфинитив)',
    //     hebrew: 'להדליק',
    //     pronuncEng: 'lehadlik',
    //     pronuncRus: 'лехадлИк',
    //     category: 'hifil'
    //   },
  
    //   {
    //     id: 346,
    //     english: 'To ignite (sing. masc. present)',
    //     russian: 'Зажигать (наст.вр., ед.ч., м.р.)',
    //     hebrew: 'מדליק',
    //     pronuncEng: 'madlik',
    //     pronuncRus: 'мадлИк',
    //     category: 'hifil'
    //   },
  
    //   {
    //     id: 347,
    //     english: '(I) ignited / lit smth.',
    //     russian: '(Я) зажёг',
    //     hebrew: 'הדלקתי',
    //     pronuncEng: 'hidlakti',
    //     pronuncRus: 'хидлАкти',
    //     category: 'hifil'
    //   },
  
    //   {
    //     id: 348,
    //     english: '(He) ignited / lit smth.',
    //     russian: '(Он) зажёг',
    //     hebrew: 'הדליק',
    //     pronuncEng: 'hidlik',
    //     pronuncRus: 'хидлИк',
    //     category: 'hifil'
    //   },
  
    //   {
    //     id: 349,
    //     english: '(I will) ignite smth.',
    //     russian: '(Я буду) зажигать',
    //     hebrew: 'אדליק',
    //     pronuncEng: 'adlik',
    //     pronuncRus: 'адлИк',
    //     category: 'hifil'
    //   },
  
    //   {
    //     id: 350,
    //     english: 'Candle',
    //     russian: 'Свеча',
    //     hebrew: 'נר',
    //     pronuncEng: 'ner',
    //     pronuncRus: 'нэр',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 351,
    //     english: 'Squirrel',
    //     russian: 'Белка',
    //     hebrew: 'סנאי',
    //     pronuncEng: 'snAi',
    //     pronuncRus: 'снАи',
    //     category: 'animals'
    //   },
  
    //   {
    //     id: 352,
    //     english: 'Kettle',
    //     russian: 'Чайник',
    //     hebrew: 'קומקום',
    //     pronuncEng: 'kumkUm',
    //     pronuncRus: 'кумкУм',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 353,
    //     english: 'Stove, oven, heater',
    //     russian: 'Печь, духовка',
    //     hebrew: 'תנור',
    //     pronuncEng: 'tanUr',
    //     pronuncRus: 'танУр',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 354,
    //     english: 'Bonfire, campfire',
    //     russian: 'Костёр',
    //     hebrew: 'מדורה',
    //     pronuncEng: 'medurA',
    //     pronuncRus: 'медурА',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 355,
    //     english: 'Match (for flame lighting)',
    //     russian: 'Спичка',
    //     hebrew: 'גפרור',
    //     pronuncEng: 'gafrUr',
    //     pronuncRus: 'гафрУр',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 356,
    //     english: 'Playing card',
    //     russian: 'Игральная карта',
    //     hebrew: 'קלף',
    //     pronuncEng: 'klaf',
    //     pronuncRus: 'клаф',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 357,
    //     english: 'To decide (infinitive)',
    //     russian: 'Принять решение (инфинитив)',
    //     hebrew: 'להחליט',
    //     pronuncEng: 'lehakhlit',
    //     pronuncRus: 'леахлИт',
    //     category: 'hifil'
    //   },
  
    //   {
    //     id: 358,
    //     english: 'To decide (sing. masc. present)',
    //     russian: 'Принять решение (наст.вр., м.р., ед.ч.)',
    //     hebrew: 'מחליט',
    //     pronuncEng: 'makhlit',
    //     pronuncRus: 'махлИт',
    //     category: 'hifil'
    //   },
  
    //   {
    //     id: 359,
    //     english: '(I) decided',
    //     russian: '(Я) принял решение',
    //     hebrew: 'החלטתי',
    //     pronuncEng: 'hekhlAteti',
    //     pronuncRus: 'эхлАтэти',
    //     category: 'hifil'
    //   },
  
    //   {
    //     id: 360,
    //     english: '(He) decided',
    //     russian: '(Он) принял решение',
    //     hebrew: 'החליט',
    //     pronuncEng: 'hekhlit',
    //     pronuncRus: 'эхлИт',
    //     category: 'hifil'
    //   },
  
    //   {
    //     id: 361,
    //     english: '(I will) decide',
    //     russian: '(Я буду) принимать решение',
    //     hebrew: 'אחליט',
    //     pronuncEng: 'akhlit',
    //     pronuncRus: 'ахлИт',
    //     category: 'hifil'
    //   },
  
    //   {
    //     id: 362,
    //     english: 'Finish, complete (infinitive)',
    //     russian: 'Заканчивать, завершать',
    //     hebrew: 'לגמור',
    //     pronuncEng: 'ligmOr',
    //     pronuncRus: 'лигмОр',
    //     category: 'paal'
    //   },
  
    //   {
    //     id: 363,
    //     english: 'Completely, totally, entirely, utterly',
    //     russian: 'Полностью, абсолютно',
    //     hebrew: 'לגמרי',
    //     pronuncEng: 'legamrEi',
    //     pronuncRus: 'легамрЭ',
    //     category: 'adverb'
    //   },
  
    //   {
    //     id: 364,
    //     english: 'SMS message (but not סמס)',
    //     russian: 'СМС-сообщение (но не סמס)',
    //     hebrew: 'מסרון',
    //     pronuncEng: 'misrOn',
    //     pronuncRus: 'мисрОн',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 365,
    //     english: 'Make an appointment with the doctor',
    //     russian: 'Записаться на приём к врачу',
    //     hebrew: 'לקבוע תור לרופא',
    //     pronuncEng: 'likbOa tor le-rofE',
    //     pronuncRus: 'ликбОа тор ле-рофЭ',
    //     category: 'phrase'
    //   },
  
    //   {
    //     id: 366,
    //     english: 'Often',
    //     russian: 'Часто',
    //     hebrew: 'לעתים קרובות',
    //     pronuncEng: 'leitim krovOt',
    //     pronuncRus: 'леитИм кровОт',
    //     category: 'adverb'
    //   },
  
    //   {
    //     id: 367,
    //     english: 'Rarely',
    //     russian: 'Редко',
    //     hebrew: 'לעתים רחוקות',
    //     pronuncEng: 'leitim rekhokOt',
    //     pronuncRus: 'леитИм рехокОт',
    //     category: 'adverb'
    //   },
  
    //   {
    //     id: 368,
    //     english: 'To watch (infinitive)',
    //     russian: 'Смотреть (что-либо), наблюдать (инфин.)',
    //     hebrew: 'לצפות',
    //     pronuncEng: 'litzpOt',
    //     pronuncRus: 'лицпОт',
    //     category: 'paal'
    //   },
  
    //   {
    //     id: 369,
    //     english: 'To watch (sing. masc. present)',
    //     russian: 'Смотреть что-либо, наблюдать (наст.вр.)',
    //     hebrew: 'צופה',
    //     pronuncEng: 'tzofE',
    //     pronuncRus: 'цофЭ',
    //     category: 'paal'
    //   },
  
    //   {
    //     id: 370,
    //     english: 'Teenage girl, young woman',
    //     russian: 'Юная девушка (не בחורה)',
    //     hebrew: 'נערה',
    //     pronuncEng: 'naarA',
    //     pronuncRus: 'наарА',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 371,
    //     english: 'Topic, subject',
    //     russian: 'Тема',
    //     hebrew: 'נושא',
    //     pronuncEng: 'nosE',
    //     pronuncRus: 'носЭ',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 372,
    //     english: 'Examination, checkup (not מבחן)',
    //     russian: 'Контрольная, тест (не מבחן)',
    //     hebrew: 'מבדק',
    //     pronuncEng: 'mivdAk',
    //     pronuncRus: 'мивдАк',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 373,
    //     english: 'Busy',
    //     russian: 'Занят',
    //     hebrew: 'עסוק',
    //     pronuncEng: 'asUk',
    //     pronuncRus: 'асУк',
    //     category: 'adverb'
    //   },
  
    //   {
    //     id: 374,
    //     english: 'Previous, prior, in the past',
    //     russian: 'Предыдущий; раньше',
    //     hebrew: 'קודם',
    //     pronuncEng: 'kOdem',
    //     pronuncRus: 'кОдэм',
    //     category: 'adverb'
    //   },
  
    //   {
    //     id: 375,
    //     english: 'To wait (infinitive)',
    //     russian: 'Ждать (инфинитив)',
    //     hebrew: 'לחכות',
    //     pronuncEng: 'lekhakOt',
    //     pronuncRus: 'лехакОт',
    //     category: 'piel'
    //   },
  
    //   {
    //     id: 376,
    //     english: 'To wait (sing. present masc.)',
    //     russian: 'Ждать (ед.ч., м.р., наст. вр)',
    //     hebrew: 'מחכה',
    //     pronuncEng: 'mekhakE',
    //     pronuncRus: 'мехакЕ',
    //     category: 'piel'
    //   },
  
    //   {
    //     id: 377,
    //     english: '(I) waited',
    //     russian: '(Я) ждал',
    //     hebrew: 'חכיתי',
    //     pronuncEng: 'khikiti',
    //     pronuncRus: 'хикИти',
    //     category: 'piel'
    //   },
  
    //   {
    //     id: 378,
    //     english: '(He) waited',
    //     russian: '(Он) ждал',
    //     hebrew: 'חכה',
    //     pronuncEng: 'khikA',
    //     pronuncRus: 'хикА',
    //     category: 'piel'
    //   },
  
    //   {
    //     id: 379,
    //     english: '(I) will wait',
    //     russian: '(Я) буду ждать',
    //     hebrew: 'אחכה',
    //     pronuncEng: 'ekhakE',
    //     pronuncRus: 'эхакЕ',
    //     category: 'piel'
    //   },
  
    //   {
    //     id: 380,
    //     english: 'Toothpaste',
    //     russian: 'Зубная паста',
    //     hebrew: 'משחת שיניים',
    //     pronuncEng: 'mishkhAt shinAim',
    //     pronuncRus: 'мишхАт шинАим',
    //     category: 'piel'
    //   },
  
    //   {
    //     id: 381,
    //     english: 'To clean (teeth) (present, single)',
    //     russian: 'Чистить (зубы) (наст.вр.)',
    //     hebrew: 'מצחצח',
    //     pronuncEng: 'metzakhtzEakh',
    //     pronuncRus: 'мецахцЕах',
    //     category: 'piel'
    //   },
  
    //   {
    //     id: 382,
    //     english: 'To clean teeth (infinitive)',
    //     russian: 'Чистить (зубы) (инф.)',
    //     hebrew: 'לצחצח',
    //     pronuncEng: 'letzakhtzEakh',
    //     pronuncRus: 'лецахцЕах',
    //     category: 'piel'
    //   },
  
    //   {
    //     id: 383,
    //     english: '(I) cleaned teeth',
    //     russian: '(Я) чистил(а) (зубы)',
    //     hebrew: 'צחצחתי',
    //     pronuncEng: 'tzikhtzAkhti',
    //     pronuncRus: 'цихцАхти',
    //     category: 'piel'
    //   },
  
    //   {
    //     id: 384,
    //     english: '(I) will clean teeth',
    //     russian: '(Я) буду чистить (зубы)',
    //     hebrew: 'אצחצח',
    //     pronuncEng: 'etzakhtzEakh',
    //     pronuncRus: 'эцахцЕах',
    //     category: 'piel'
    //   },
      
    //   {
    //     id: 385,
    //     english: 'Omelet',
    //     russian: 'Омлет',
    //     hebrew: 'חביתה',
    //     pronuncEng: 'khavitA',
    //     pronuncRus: 'хавитА',
    //     category: 'grocery'
    //   },
  
    //   {
    //     id: 386,
    //     english: 'To wish, to congratulate (present, masc, sing)',
    //     russian: 'Желать, поздравлять (наст.вр.)',
    //     hebrew: 'מאחל',
    //     pronuncEng: 'meakhEl',
    //     pronuncRus: 'мэахЭль',
    //     category: 'piel'
    //   },
  
    //   {
    //     id: 387,
    //     english: 'Ask, request, seek (present, masc, sing)',
    //     russian: 'Спрашивать, запрашивать (наст.вр)',
    //     hebrew: 'מבקש',
    //     pronuncEng: 'mevakEsh',
    //     pronuncRus: 'мевакЕш',
    //     category: 'piel'
    //   },
      
    //   {
    //     id: 388,
    //     english: 'To explain, to clarify (present, sing, masc)',
    //     russian: 'Объяснять, разъяснять (наст.вр.)',
    //     hebrew: 'מסביר',
    //     pronuncEng: 'masbir',
    //     pronuncRus: 'масбИр',
    //     category: 'hifil'
    //   },
      
    //   {
    //     id: 389,
    //     english: 'To stop, to interrupt (present, sing, masc)',
    //     russian: 'Останавливать, прерывать',
    //     hebrew: 'מפסיק',
    //     pronuncEng: 'mafsik',
    //     pronuncRus: 'мафсИк',
    //     category: 'hifil'
    //   },
      
    //   {
    //     id: 390,
    //     english: 'To listen, to pay attention (sing. masc. present)',
    //     russian: 'Прислушиваться, внимать',
    //     hebrew: 'מקשיב',
    //     pronuncEng: 'makshiv',
    //     pronuncRus: 'макшИв',
    //     category: 'hifil'
    //   },
      
    //   {
    //     id: 391,
    //     english: 'To participate (sing. masc. present)',
    //     russian: 'Принимать участие',
    //     hebrew: 'משתתף',
    //     pronuncEng: 'mishtatEf',
    //     pronuncRus: 'миштатЭф',
    //     category: 'hitpael'
    //   },
  
    //   {
    //     id: 392,
    //     english: 'To get married (sing. masc. present)',
    //     russian: 'Жениться (наст.вр., м.р.)',
    //     hebrew: 'מתחתן',
    //     pronuncEng: 'mitkhatEn',
    //     pronuncRus: 'митхатЭн',
    //     category: 'hitpael'
    //   },
  
    //   {
    //     id: 393,
    //     english: 'To apologize (sing. masc. present)',
    //     russian: 'Извиняться (наст.вр., м.р.)',
    //     hebrew: 'מיתנצל',
    //     pronuncEng: 'mitnatzEl',
    //     pronuncRus: 'митнацЕль',
    //     category: 'hitpael'
    //   },
  
    //   {
    //     id: 394,
    //     english: 'To remain (sing. masc. present)',
    //     russian: 'Оставаться (наст.вр., м.р.)',
    //     hebrew: 'נשאר',
    //     pronuncEng: "nish'Ar",
    //     pronuncRus: "ниш'Ар",
    //     category: 'nifal'
    //   },
  
    //   {
    //     id: 395,
    //     english: 'To play (infinitive)',
    //     russian: 'играть (инфинитив)',
    //     hebrew: 'לשחק',
    //     pronuncEng: 'lesakhEk',
    //     pronuncRus: 'лесахЭк',
    //     category: 'piel'
    //   },
  
    //   {
    //     id: 396,
    //     english: 'To gossip (present, single, masc)',
    //     russian: 'Сплетничать (наст.вр., ед.ч., м.р.)',
    //     hebrew: 'מרכל',
    //     pronuncEng: 'merakhEl',
    //     pronuncRus: 'мерахЭль',
    //     category: 'piel'
    //   },
  
    //   {
    //     id: 397,
    //     english: 'Stone',
    //     russian: 'Камень',
    //     hebrew: 'אבן',
    //     pronuncEng: 'Even',
    //     pronuncRus: 'Эвен',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 398,
    //     english: 'Cave',
    //     russian: 'Пещера',
    //     hebrew: 'מערה',
    //     pronuncEng: 'mearA',
    //     pronuncRus: 'мэарА',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 399,
    //     english: 'To remind of...',
    //     russian: 'Напоминать о...',
    //     hebrew: 'להזכיר',
    //     pronuncEng: 'lehazkir',
    //     pronuncRus: 'лехазкИр',
    //     category: 'nifal'
    //   },
  
    //   {
    //     id: 400,
    //     english: 'Silent, tacit',
    //     russian: 'Тихий, молчаливый, негласный',
    //     hebrew: 'שותק',
    //     pronuncEng: 'shotek',
    //     pronuncRus: 'шотек',
    //     category: 'adjective'
    //   },
  
    //   {
    //     id: 401,
    //     english: 'In a year',
    //     russian: 'Через год',
    //     hebrew: 'בעוד שנה',
    //     pronuncEng: 'be-od shanA',
    //     pronuncRus: 'бэ-од шанА',
    //     category: 'adverb'
    //   },
  
    //   {
    //     id: 402,
    //     english: 'In the next year',
    //     russian: 'В следующем году',
    //     hebrew: 'בשנה הבאה',
    //     pronuncEng: 'be-shanA abaA',
    //     pronuncRus: 'бэ-шанА абаА',
    //     category: 'adverb'
    //   },
  
    //   {
    //     id: 403,
    //     english: 'Website, web address',
    //     russian: 'Сайт, адрес сайта',
    //     hebrew: 'אתר',
    //     pronuncEng: 'atar',
    //     pronuncRus: 'атар',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 404,
    //     english: 'Minister',
    //     russian: 'Министр',
    //     hebrew: 'שר',
    //     pronuncEng: 'sar',
    //     pronuncRus: 'сар',
    //     category: 'profession'
    //   },
  
    //   {
    //     id: 405,
    //     english: 'Help, support (noun)',
    //     russian: 'Помощь, поддержка',
    //     hebrew: 'סיוע',
    //     pronuncEng: 'siyua',
    //     pronuncRus: 'сиюа',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 406,
    //     english: 'To influence (infinitive)',
    //     russian: 'Влиять (инфинитив)',
    //     hebrew: 'להשפיע',
    //     pronuncEng: 'lehashpia',
    //     pronuncRus: 'лехаспИа',
    //     category: 'hifil'
    //   },
      
    //   {
    //     id: 407,
    //     english: 'To hide (infinitive)',
    //     russian: 'Прятаться (инфинитив)',
    //     hebrew: 'להתחבא',
    //     pronuncEng: 'lehitkhabE',
    //     pronuncRus: 'лехитхабЭ',
    //     category: 'hitpael'
    //   },
      
    //   {
    //     id: 408,
    //     english: 'To come to an end',
    //     russian: 'Заканчиваться, завершаться',
    //     hebrew: 'להיגמר',
    //     pronuncEng: 'lehigamEr',
    //     pronuncRus: 'лехигамЭр',
    //     category: 'nifal'
    //   },
      
    //   {
    //     id: 409,
    //     english: 'Some of them',
    //     russian: 'Некоторые',
    //     hebrew: 'אחדים',
    //     pronuncEng: 'akhadim (or akhadot if f.)',
    //     pronuncRus: 'ахадИм/ахадОт',
    //     category: 'general'
    //   },
      
    //   {
    //     id: 410,
    //     english: 'Art',
    //     russian: 'Искусство',
    //     hebrew: 'אומנות',
    //     pronuncEng: 'omanUt',
    //     pronuncRus: 'оманУт',
    //     category: 'general'
    //   },
      
    //   {
    //     id: 411,
    //     english: 'Happiness, joy',
    //     russian: 'Радость, счастье',
    //     hebrew: 'אושר',
    //     pronuncEng: 'osher',
    //     pronuncRus: 'ошер',
    //     category: 'general'
    //   },
      
    //   {
    //     id: 412,
    //     english: 'Middle',
    //     russian: 'Середина',
    //     hebrew: 'אמצע',
    //     pronuncEng: 'emtza',
    //     pronuncRus: 'эмца',
    //     category: 'general'
    //   },
      
    //   {
    //     id: 413,
    //     english: 'Graveyard',
    //     russian: 'Кладбище',
    //     hebrew: 'בית קברות',
    //     pronuncEng: 'beit kvarot',
    //     pronuncRus: 'бейт кварОт',
    //     category: 'general'
    //   },
      
    //   {
    //     id: 414,
    //     english: 'Palm tree',
    //     russian: 'Пальма',
    //     hebrew: 'דקל',
    //     pronuncEng: 'dEkel',
    //     pronuncRus: 'дЭкель',
    //     category: 'general'
    //   },
      
    //   {
    //     id: 415,
    //     english: 'Dedication (on a book)',
    //     russian: 'Посвящение (в книге)',
    //     hebrew: 'הקדשה',
    //     pronuncEng: 'hakdashA',
    //     pronuncRus: '(х)акдаШа',
    //     category: 'general'
    //   },
      
    //   {
    //     id: 416,
    //     english: 'Thought',
    //     russian: 'Мысль',
    //     hebrew: 'מחשבה',
    //     pronuncEng: 'makhshavA',
    //     pronuncRus: 'махшавА',
    //     category: 'general'
    //   },
      
    //   {
    //     id: 417,
    //     english: 'Hoe',
    //     russian: 'Мотыга',
    //     hebrew: 'מעדר',
    //     pronuncEng: 'maadEr',
    //     pronuncRus: 'маадЭр',
    //     category: 'general'
    //   },
      
    //   {
    //     id: 418,
    //     english: 'Reason',
    //     russian: 'Причина',
    //     hebrew: 'סיבה',
    //     pronuncEng: 'siba',
    //     pronuncRus: 'сибА',
    //     category: 'general'
    //   },
      
    //   {
    //     id: 419,
    //     english: 'Piano',
    //     russian: 'Пианино',
    //     hebrew: 'פסנתר',
    //     pronuncEng: 'psanter',
    //     pronuncRus: 'псантер',
    //     category: 'general'
    //   },
      
    //   {
    //     id: 420,
    //     english: 'Section, excerpt',
    //     russian: 'Часть, фрагмент общего',
    //     hebrew: 'קטע',
    //     pronuncEng: 'keta',
    //     pronuncRus: 'кета',
    //     category: 'general'
    //   },
      
    //   {
    //     id: 421,
    //     english: 'Tuberculosis',
    //     russian: 'Туберкулёз',
    //     hebrew: 'שחפת',
    //     pronuncEng: 'shakhefet',
    //     pronuncRus: 'шахЕфет',
    //     category: 'general'
    //   },
      
    //   {
    //     id: 422,
    //     english: 'Method',
    //     russian: 'Метод',
    //     hebrew: 'שיטה',
    //     pronuncEng: 'shita',
    //     pronuncRus: 'шита',
    //     category: 'general'
    //   },
          
    //   {
    //     id: 423,
    //     english: 'Poetry',
    //     russian: 'Поэзия',
    //     hebrew: 'שירה',
    //     pronuncEng: 'shira',
    //     pronuncRus: 'шира',
    //     category: 'general'
    //   },
          
    //   {
    //     id: 424,
    //     english: 'To reap, to pick up, to collect, to gather (infinitive)',
    //     russian: 'Собирать, пожинать (инфинитив)',
    //     hebrew: 'לאסוף',
    //     pronuncEng: 'leesOf',
    //     pronuncRus: 'леэсОф',
    //     category: 'paal'
    //   },
          
    //   {
    //     id: 425,
    //     english: 'Accident, road accident',
    //     russian: 'Авария',
    //     hebrew: 'תאונה',
    //     pronuncEng: 'teunA',
    //     pronuncRus: 'тэунА',
    //     category: 'general'
    //   },
          
    //   {
    //     id: 426,
    //     english: 'Moon',
    //     russian: 'Луна',
    //     hebrew: 'ירח',
    //     pronuncEng: 'yarEakh',
    //     pronuncRus: 'ярЭах',
    //     category: 'general'
    //   },
              
    //   {
    //     id: 427,
    //     english: 'To discuss (inf.)',
    //     russian: 'Обсуждать (инф.)',
    //     hebrew: 'לדון',
    //     pronuncEng: 'ladUn',
    //     pronuncRus: 'ладУн',
    //     category: 'paal'
    //   },
              
    //   {
    //     id: 428,
    //     english: 'Solution',
    //     russian: 'Решение',
    //     hebrew: 'פתרון',
    //     pronuncEng: 'pitrOn',
    //     pronuncRus: 'питрОн',
    //     category: 'general'
    //   },
              
    //   {
    //     id: 429,
    //     english: 'Agreement',
    //     russian: 'Соглашение',
    //     hebrew: 'הסכם',
    //     pronuncEng: 'heskEm',
    //     pronuncRus: 'хескЕм',
    //     category: 'general'
    //   },
              
    //   {
    //     id: 430,
    //     english: 'To sign up (inf.)',
    //     russian: 'Подписывать (инф.)',
    //     hebrew: 'לחתום',
    //     pronuncEng: 'lakhtOm',
    //     pronuncRus: 'лахтОм',
    //     category: 'paal'
    //   },
              
    //   {
    //     id: 431,
    //     english: 'Medicine (pl.)',
    //     russian: 'Лекарства (мн.)',
    //     hebrew: 'תרופות',
    //     pronuncEng: 'trufOt',
    //     pronuncRus: 'труфОт',
    //     category: 'general'
    //   },
              
    //   {
    //     id: 432,
    //     english: 'Vaccine',
    //     russian: 'Вакцина',
    //     hebrew: 'חיסון',
    //     pronuncEng: 'khisun',
    //     pronuncRus: 'хисун',
    //     category: 'general'
    //   },
              
    //   {
    //     id: 433,
    //     english: 'To listen to (inf.)',
    //     russian: 'Слушать (что-либо)',
    //     hebrew: 'להקשיב',
    //     pronuncEng: 'lehakshiv',
    //     pronuncRus: 'лехакшИв',
    //     category: 'hifil'
    //   },
              
    //   {
    //     id: 434,
    //     english: 'To use (inf.)',
    //     russian: 'Использовать (инф.)',
    //     hebrew: 'להשתמש',
    //     pronuncEng: 'lehishtamEsh',
    //     pronuncRus: 'лехиштамЕш',
    //     category: 'hitpael'
    //   },
              
    //   {
    //     id: 435,
    //     english: 'To agree',
    //     russian: 'Соглашаться (инф.)',
    //     hebrew: 'להסכים',
    //     pronuncEng: 'lehaskim',
    //     pronuncRus: 'лехаскИм',
    //     category: 'hifil'
    //   },
              
    //   {
    //     id: 436,
    //     english: 'Routine',
    //     russian: 'Рутина',
    //     hebrew: 'שגרה',
    //     pronuncEng: 'shigrA',
    //     pronuncRus: 'щигрА',
    //     category: 'general'
    //   },
              
    //   {
    //     id: 437,
    //     english: 'Long shirt',
    //     russian: 'Рубашка/кофта с длинными рукавами',
    //     hebrew: 'חולצה ארוכה',
    //     pronuncEng: 'hultzA arukA',
    //     pronuncRus: 'хульцА арукА',
    //     category: 'clothes'
    //   },
              
    //   {
    //     id: 438,
    //     english: 'Warm hat / woolen hat',
    //     russian: 'Тёплая шапка',
    //     hebrew: 'כובע צמר',
    //     pronuncEng: 'kova tzEmer',
    //     pronuncRus: 'кова цЕмер',
    //     category: 'clothes'
    //   },
              
    //   {
    //     id: 439,
    //     english: 'Boots',
    //     russian: 'Сапоги',
    //     hebrew: 'מגפיים',
    //     pronuncEng: 'magafAim',
    //     pronuncRus: 'магафАим',
    //     category: 'clothes'
    //   },
              
    //   {
    //     id: 440,
    //     english: 'Sneakers',
    //     russian: 'Кроссовки',
    //     hebrew: 'נעלי ספורט',
    //     pronuncEng: 'Naalei sport',
    //     pronuncRus: 'Кроссовки',
    //     category: 'clothes'
    //   },
              
    //   {
    //     id: 441,
    //     english: 'Sandals, flip-flop',
    //     russian: 'Сандалии, тапочки',
    //     hebrew: 'כפכפים',
    //     pronuncEng: 'kafkafim',
    //     pronuncRus: 'кафкафИм',
    //     category: 'clothes'
    //   },
              
    //   {
    //     id: 442,
    //     english: 'Hail, hailstone',
    //     russian: 'Град',
    //     hebrew: 'ברד',
    //     pronuncEng: 'barAd',
    //     pronuncRus: 'барАд',
    //     category: 'weather'
    //   },
              
    //   {
    //     id: 443,
    //     english: 'Haze',
    //     russian: 'Дымка, сухой туман, смог',
    //     hebrew: 'אובך',
    //     pronuncEng: 'Ovekh',
    //     pronuncRus: 'Овех',
    //     category: 'weather'
    //   },
              
    //   {
    //     id: 444,
    //     english: 'Fog',
    //     russian: 'Туман',
    //     hebrew: 'ערפל',
    //     pronuncEng: 'arafEl',
    //     pronuncRus: 'арафЭль',
    //     category: 'weather'
    //   },
              
    //   {
    //     id: 445,
    //     english: 'Umbrella',
    //     russian: 'Зонт',
    //     hebrew: 'מטרייה',
    //     pronuncEng: 'mitriyA',
    //     pronuncRus: 'митриЯ',
    //     category: 'general'
    //   },
              
    //   {
    //     id: 446,
    //     english: 'Sun umbrella, parasol',
    //     russian: 'Зонт от солнца',
    //     hebrew: 'שמשייה',
    //     pronuncEng: 'shimshiyA',
    //     pronuncRus: 'шимшиЯ',
    //     category: 'general'
    //   },
              
    //   {
    //     id: 447,
    //     english: 'Stove, oven, heater',
    //     russian: 'Печь, нагреватель',
    //     hebrew: 'תנור',
    //     pronuncEng: 'tanUr',
    //     pronuncRus: 'танУр',
    //     category: 'general'
    //   },
              
    //   {
    //     id: 448,
    //     english: 'Light rain, drizzle',
    //     russian: 'Лёгкий дождь, изморось',
    //     hebrew: 'טיפטוף',
    //     pronuncEng: 'tiftUf',
    //     pronuncRus: 'тифтУф',
    //     category: 'weather'
    //   },
              
    //   {
    //     id: 449,
    //     english: 'Literature',
    //     russian: 'Литература',
    //     hebrew: 'ספרות',
    //     pronuncEng: 'sifrUt',
    //     pronuncRus: 'сифрУт',
    //     category: 'general'
    //   },
              
    //   {
    //     id: 450,
    //     english: 'To translate (inf.)',
    //     russian: 'Переводить (инф.)',
    //     hebrew: 'לתרגם',
    //     pronuncEng: 'letargEm',
    //     pronuncRus: 'летаргЕм',
    //     category: 'piel'
    //   },
              
    //   {
    //     id: 451,
    //     english: 'Traffic light',
    //     russian: 'Светофор',
    //     hebrew: 'רמזור',
    //     pronuncEng: 'ramzOr',
    //     pronuncRus: 'рамзОр',
    //     category: 'general'
    //   },
              
    //   {
    //     id: 452,
    //     english: 'Pedestrian sidewalk',
    //     russian: 'Тротуар',
    //     hebrew: 'מדרכה',
    //     pronuncEng: 'midrakhA',
    //     pronuncRus: 'мидрахА',
    //     category: 'general'
    //   },
              
    //   {
    //     id: 453,
    //     english: 'Busy',
    //     russian: 'Занят',
    //     hebrew: 'תפוס',
    //     pronuncEng: 'tafUs',
    //     pronuncRus: 'тафУс',
    //     category: 'adverb'
    //   },
              
    //   {
    //     id: 454,
    //     english: 'Nonstop, direct, without stops',
    //     russian: 'Прямой (рейс), без остановок',
    //     hebrew: 'ישיר',
    //     pronuncEng: 'yashir',
    //     pronuncRus: 'яшИр',
    //     category: 'adverb'
    //   },
                  
    //   {
    //     id: 455,
    //     english: 'Wide',
    //     russian: 'Широкий',
    //     hebrew: 'רחב',
    //     pronuncEng: 'rakhAv',
    //     pronuncRus: 'рахАв',
    //     category: 'general'
    //   },
                  
    //   {
    //     id: 456,
    //     english: 'Noisy',
    //     russian: 'Шумный',
    //     hebrew: 'רועש',
    //     pronuncEng: 'roEsh',
    //     pronuncRus: 'роЭш',
    //     category: 'adverb'
    //   },
                  
    //   {
    //     id: 457,
    //     english: 'Furniture',
    //     russian: 'Мебель',
    //     hebrew: 'רהיטים',
    //     pronuncEng: 'rahitim',
    //     pronuncRus: 'раитИм',
    //     category: 'general'
    //   },
                  
    //   {
    //     id: 458,
    //     english: 'Cleaning',
    //     russian: 'Уборка, чистота',
    //     hebrew: 'ניקיון',
    //     pronuncEng: 'nikayOn',
    //     pronuncRus: 'никайОн',
    //     category: 'general'
    //   },
                  
    //   {
    //     id: 459,
    //     english: 'Tenant',
    //     russian: 'Жилец (квартиросъёмщик)',
    //     hebrew: 'דייר',
    //     pronuncEng: 'dayAr',
    //     pronuncRus: 'дайАр',
    //     category: 'general'
    //   },
                  
    //   {
    //     id: 460,
    //     english: 'Quiet (adj., f.)',
    //     russian: 'Тихая',
    //     hebrew: 'שקטה',
    //     pronuncEng: 'shketA',
    //     pronuncRus: 'шкетА',
    //     category: 'adjective'
    //   },
                  
    //   {
    //     id: 461,
    //     english: 'Drone, quadrocopter',
    //     russian: 'Дрон, квадрокоптер',
    //     hebrew: 'רחפן',
    //     pronuncEng: 'rakhfAn',
    //     pronuncRus: 'рахфАн',
    //     category: 'general'
    //   },  
  
    //   {
    //     id: 462,
    //     english: 'A year in advance (f.e. for a payment)',
    //     russian: 'За год вперёд (например, оплата)',
    //     hebrew: 'שנה מראש',
    //     pronuncEng: 'shanA me-rOsh',
    //     pronuncRus: 'шанА ме-рОш',
    //     category: 'adverb'
    //   },
                      
    //   {
    //     id: 463,
    //     english: 'To throw (garbage) away, present, masc.',
    //     russian: 'Выбрасывать (мусор)',
    //     hebrew: 'שופך',
    //     pronuncEng: 'shofEkh',
    //     pronuncRus: 'шофЕх',
    //     category: 'paal'
    //   },
                      
    //   {
    //     id: 464,
    //     english: 'Real estate agency',
    //     russian: 'Агентство недвижимости',
    //     hebrew: 'משרד תווך',
    //     pronuncEng: 'misrad tivUkh',
    //     pronuncRus: 'мисрАд тивУх',
    //     category: 'general'
    //   },
                      
    //   {
    //     id: 465,
    //     english: 'Realtor',
    //     russian: 'Риэлтор',
    //     hebrew: 'מתווך',
    //     pronuncEng: 'metavEkh',
    //     pronuncRus: 'меватЭх',
    //     category: 'profession'
    //   },
                      
    //   {
    //     id: 466,
    //     english: 'Contract, agreement',
    //     russian: 'Контракт, соглашение',
    //     hebrew: 'חוזה',
    //     pronuncEng: 'khozE',
    //     pronuncRus: 'хозЭ',
    //     category: 'general'
    //   },     
  
    //   {
    //     id: 467,
    //     english: 'To let the rent (present, masc)',
    //     russian: 'Сдавать (недвижимость), наст.вр.',
    //     hebrew: 'משכיר',
    //     pronuncEng: 'maskir',
    //     pronuncRus: 'маскИр',
    //     category: 'hifil'
    //   },
  
    //   {
    //     id: 468,
    //     english: 'To rent, to hire',
    //     russian: 'Снимать (недвижимость), наст.вр.',
    //     hebrew: 'שוכר',
    //     pronuncEng: 'sokhEr',
    //     pronuncRus: 'сохЭр',
    //     category: 'paal'
    //   },
  
    //   {
    //     id: 469,
    //     english: 'Game, play',
    //     russian: 'Игра',
    //     hebrew: 'משחק',
    //     pronuncEng: 'miskhAk',
    //     pronuncRus: 'мисхАк',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 470,
    //     english: 'Probably, apparently',
    //     russian: 'Вероятно, по видимому',
    //     hebrew: 'כנראה',
    //     pronuncEng: "kanir'E",
    //     pronuncRus: "канир'Э",
    //     category: 'adverb'
    //   },
  
    //   {
    //     id: 471,
    //     english: 'Construction, process of building',
    //     russian: 'Стройка',
    //     hebrew: 'בנייה',
    //     pronuncEng: 'bniyA',
    //     pronuncRus: 'бниЯ',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 472,
    //     english: 'Renovation',
    //     russian: 'Ремонт',
    //     hebrew: 'שיפוץ',
    //     pronuncEng: 'shipUtz',
    //     pronuncRus: 'шипУц',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 473,
    //     english: 'Rich, wealthy, abundant',
    //     russian: 'Богатый',
    //     hebrew: 'עשיר',
    //     pronuncEng: 'ashir',
    //     pronuncRus: 'ашИр',
    //     category: 'adjective'
    //   },
  
    //   {
    //     id: 474,
    //     english: 'Illuminated, lighted',
    //     russian: 'Освещённый, светлый',
    //     hebrew: 'מואר',
    //     pronuncEng: 'muAr',
    //     pronuncRus: 'муАр',
    //     category: 'adjective'
    //   },
  
    //   {
    //     id: 475,
    //     english: 'Dark',
    //     russian: 'Тёмный',
    //     hebrew: 'חשוך',
    //     pronuncEng: 'khashUkh',
    //     pronuncRus: 'хашУх',
    //     category: 'adjective'
    //   },
  
    //   {
    //     id: 476,
    //     english: 'Emotion',
    //     russian: 'Эмоция',
    //     hebrew: 'רגש',
    //     pronuncEng: 'rEgesh',
    //     pronuncRus: 'рЭгеш',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 477,
    //     english: 'Jealousy, envy',
    //     russian: 'Зависть, ревность',
    //     hebrew: 'קנאה',
    //     pronuncEng: "kin'A",
    //     pronuncRus: "кин'А",
    //     category: 'general'
    //   },
  
    //   {
    //     id: 478,
    //     english: 'Idea',
    //     russian: 'Идея',
    //     hebrew: 'רעיון',
    //     pronuncEng: 'raayOn',
    //     pronuncRus: 'раайОн',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 479,
    //     english: 'According to',
    //     russian: 'Согласно... , в соответствии с...',
    //     hebrew: 'לפי',
    //     pronuncEng: 'lefi',
    //     pronuncRus: 'лефИ',
    //     category: 'adverb'
    //   },
  
    //   {
    //     id: 480,
    //     english: 'Kill, slay, murder (inf.)',
    //     russian: 'Убивать (инфинитив)',
    //     hebrew: 'להרוג',
    //     pronuncEng: 'laharOg',
    //     pronuncRus: 'лахарОг',
    //     category: 'paal'
    //   },
  
    //   {
    //     id: 481,
    //     english: 'To save, to economise (infinitive)',
    //     russian: 'Сберегать, копить',
    //     hebrew: 'לחסוך',
    //     pronuncEng: 'lakhsOkh',
    //     pronuncRus: 'лахсОх',
    //     category: 'paal'
    //   },
  
    //   {
    //     id: 482,
    //     english: 'Advantage, positive side',
    //     russian: 'Плюс, положительный момент',
    //     hebrew: 'יתרון',
    //     pronuncEng: 'yitrOn',
    //     pronuncRus: 'йитрОн',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 483,
    //     english: 'Drawback, disadvantage',
    //     russian: 'Недостаток, минус',
    //     hebrew: 'חיסרון',
    //     pronuncEng: 'khisarOn',
    //     pronuncRus: 'хисарОн',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 484,
    //     english: 'To be injured',
    //     russian: 'Быть раненым',
    //     hebrew: 'להיפצע',
    //     pronuncEng: 'lehipatzE',
    //     pronuncRus: 'лехипацЭ',
    //     category: 'nifal'
    //   },
  
    //   {
    //     id: 485,
    //     english: 'To respond',
    //     russian: 'Реагировать, откликаться',
    //     hebrew: 'להגיב',
    //     pronuncEng: 'lehagiv',
    //     pronuncRus: 'лехагИв',
    //     category: 'hifil'
    //   },
  
    //   {
    //     id: 486,
    //     english: 'Website',
    //     russian: 'Вебсайт',
    //     hebrew: 'אתר',
    //     pronuncEng: 'atAr',
    //     pronuncRus: 'атАр',
    //     category: 'general'
    //   },
      
    //   {
    //     id: 487,
    //     english: 'Leader',
    //     russian: 'Лидер',
    //     hebrew: 'מנהיג',
    //     pronuncEng: 'manhig',
    //     pronuncRus: 'манхИг',
    //     category: 'general'
    //   },
      
    //   {
    //     id: 488,
    //     english: 'To cause, to result in...',
    //     russian: 'Приводить к...',
    //     hebrew: 'לגרום',
    //     pronuncEng: 'lagrOm',
    //     pronuncRus: 'лагрОм',
    //     category: 'paal'
    //   },
      
    //   {
    //     id: 489,
    //     english: 'To report',
    //     russian: 'Сообщать',
    //     hebrew: 'לדווח',
    //     pronuncEng: 'ledavEakh',
    //     pronuncRus: 'ледавЕах',
    //     category: 'piel'
    //   },
      
    //   {
    //     id: 490,
    //     english: 'To join',
    //     russian: 'Присоединяться',
    //     hebrew: 'להצטרף',
    //     pronuncEng: 'lehitztarEf',
    //     pronuncRus: 'лехицтарЭф',
    //     category: 'hitpael'
    //   },    
  
    //   {
    //     id: 491,
    //     english: 'To inform',
    //     russian: 'Информировать',
    //     hebrew: 'להודיע',
    //     pronuncEng: 'lehodia',
    //     pronuncRus: 'леходИа',
    //     category: 'hifil'
    //   },
          
    //   {
    //     id: 492,
    //     english: 'To bring down, to lower',
    //     russian: 'Снизить, сбавить, спустить',
    //     hebrew: 'להוריד',
    //     pronuncEng: 'lehorid',
    //     pronuncRus: 'лехорИд',
    //     category: 'hifil'
    //   },
          
    //   {
    //     id: 493,
    //     english: 'To pull, to remove, to withdraw',
    //     russian: 'Удалять, извлекать, выводить, вынимать',
    //     hebrew: 'להוציא',
    //     pronuncEng: 'lehotzi',
    //     pronuncRus: 'лехоцИ',
    //     category: 'hifil'
    //   },
          
    //   {
    //     id: 494,
    //     english: 'To add',
    //     russian: 'Добавлять',
    //     hebrew: 'להוסיף',
    //     pronuncEng: 'lehosif',
    //     pronuncRus: 'лехосИф',
    //     category: 'hifil'
    //   },
          
    //   {
    //     id: 495,
    //     english: 'To appear',
    //     russian: 'Являться, появляться',
    //     hebrew: 'להופיע',
    //     pronuncEng: 'lehofia',
    //     pronuncRus: 'лехофИа',
    //     category: 'hifil'
    //   },
          
    //   {
    //     id: 496,
    //     english: 'To discover, to show (feelings)',
    //     russian: 'Открывать / проявлять (эмпатию например)',
    //     hebrew: 'לגלות',
    //     pronuncEng: 'legalOt',
    //     pronuncRus: 'легалОт',
    //     category: 'piel'
    //   },
              
    //   {
    //     id: 497,
    //     english: 'To anticipate, to yearn/long for smth.',
    //     russian: 'Ожидать, чаять',
    //     hebrew: 'לצפות',
    //     pronuncEng: 'letzapOt',
    //     pronuncRus: 'лецапОт',
    //     category: 'piel'
    //   },
              
    //   {
    //     id: 498,
    //     english: 'To accompany',
    //     russian: 'Сопровождать (физически или музыкально)',
    //     hebrew: 'ללוות',
    //     pronuncEng: 'lelavOt',
    //     pronuncRus: 'лелавОт',
    //     category: 'piel'
    //   },
              
    //   {
    //     id: 499,
    //     english: 'To try, to attempt',
    //     russian: 'Пробовать, пытаться',
    //     hebrew: 'לנסות',
    //     pronuncEng: 'lenasOt',
    //     pronuncRus: 'ленасОт',
    //     category: 'piel'
    //   },
              
    //   {
    //     id: 500,
    //     english: 'To deceive, to cheat',
    //     russian: 'Обманывать, предавать',
    //     hebrew: 'לרמות',
    //     pronuncEng: 'leramOt',
    //     pronuncRus: 'лерамОт',
    //     category: 'piel'
    //   },
                  
    //   {
    //     id: 501,
    //     english: 'To lie (to someone)',
    //     russian: 'Врать, лгать',
    //     hebrew: 'לשקר',
    //     pronuncEng: 'leshakEr',
    //     pronuncRus: 'лешакЕр',
    //     category: 'piel'
    //   },
                  
    //   {
    //     id: 502,
    //     english: 'Wonderful, marvellous',
    //     russian: 'Прекрасно / прекрасный',
    //     hebrew: 'נפלא',
    //     pronuncEng: 'niflA',
    //     pronuncRus: 'нифлА',
    //     category: 'adjective'
    //   },
                  
    //   {
    //     id: 503,
    //     english: 'Meaning, significance',
    //     russian: 'Значение, смысл',
    //     hebrew: 'משמעות',
    //     pronuncEng: 'mashmaUt',
    //     pronuncRus: 'машмаУт',
    //     category: 'general'
    //   },
                  
    //   {
    //     id: 504,
    //     english: 'Kitten',
    //     russian: 'Котёнок',
    //     hebrew: 'חתלתול',
    //     pronuncEng: 'khataltUl',
    //     pronuncRus: 'хатальтУль',
    //     category: 'general'
    //   },
                  
    //   {
    //     id: 505,
    //     english: 'Puppy',
    //     russian: 'Щенок',
    //     hebrew: 'כלבלב',
    //     pronuncEng: 'klavlAv',
    //     pronuncRus: 'клавлАв',
    //     category: 'general'
    //   },
                      
    //   {
    //     id: 506,
    //     english: 'To smile',
    //     russian: 'Улыбаться',
    //     hebrew: 'לחייך',
    //     pronuncEng: 'lekhayEkh',
    //     pronuncRus: 'лехайЕх',
    //     category: 'piel'
    //   },
                      
    //   {
    //     id: 507,
    //     english: 'Smile',
    //     russian: 'Улыбка',
    //     hebrew: 'חיוך',
    //     pronuncEng: 'khiyUkh',
    //     pronuncRus: 'хиЮх',
    //     category: 'general'
    //   },
                      
    //   {
    //     id: 508,
    //     english: 'To identify, to recognize',
    //     russian: 'Определять, опознавать, различать',
    //     hebrew: 'לזהות',
    //     pronuncEng: 'lezahOt',
    //     pronuncRus: 'лезахОт',
    //     category: 'piel'
    //   },
                      
    //   {
    //     id: 509,
    //     english: 'Talented',
    //     russian: 'Талантливый',
    //     hebrew: 'מוכשר',
    //     pronuncEng: 'mukhshAr',
    //     pronuncRus: 'мухшАр',
    //     category: 'adjective'
    //   },
                          
    //   {
    //     id: 510,
    //     english: 'Выставка',
    //     russian: 'Exhibition',
    //     hebrew: 'תערוכה',
    //     pronuncEng: 'taarukhA',
    //     pronuncRus: 'таарухА',
    //     category: 'general'
    //   },
                          
    //   {
    //     id: 511,
    //     english: 'The Temple of Jerusalem (aka "The Holy House")',
    //     russian: 'Иерусалимский храм (он же "Святой Дом")',
    //     hebrew: 'בית המקדש',
    //     pronuncEng: 'beit a-mikdAsh',
    //     pronuncRus: 'бейт а-микдАш',
    //     category: 'sights'
    //   },
                          
    //   {
    //     id: 512,
    //     english: 'Farmer, agronomist, or: agricultural (adj.)',
    //     russian: 'Фермер, агроном, или: аграрный (прил.)',
    //     hebrew: 'חקלאי',
    //     pronuncEng: 'khaklAi',
    //     pronuncRus: 'хаклАи',
    //     category: 'profession'
    //   },
                          
    //   {
    //     id: 513,
    //     english: 'Part',
    //     russian: 'Часть',
    //     hebrew: 'חלק',
    //     pronuncEng: 'khElek',
    //     pronuncRus: 'хЭлек',
    //     category: 'general'
    //   },
                          
    //   {
    //     id: 514,
    //     english: 'Sculpture',
    //     russian: 'Скульптура',
    //     hebrew: 'פסל',
    //     pronuncEng: 'pEsel',
    //     pronuncRus: 'пЕсэль',
    //     category: 'general'
    //   },     
  
    //   {
    //     id: 515,
    //     english: 'Tradition',
    //     russian: 'Традиция',
    //     hebrew: 'מסורת',
    //     pronuncEng: 'masOret',
    //     pronuncRus: 'масОрет',
    //     category: 'general'
    //   },
  
    //   {
    //     id: 516,
    //     english: 'To offer, to propose',
    //     russian: 'Предложить',
    //     hebrew: 'להציע',
    //     pronuncEng: 'lehatzia',
    //     pronuncRus: 'лехацИя',
    //     category: 'hifil'
    //   },
      
    //   {
    //     id: 517,
    //     english: 'Movement, organization',
    //     russian: 'Движение, организация',
    //     hebrew: 'תנועה',
    //     pronuncEng: 'tnuA',
    //     pronuncRus: 'тнуА',
    //     category: 'general'
    //   },
      
    //   {
    //     id: 518,
    //     english: 'Soul',
    //     russian: 'Душа',
    //     hebrew: 'נפש',
    //     pronuncEng: 'nEfesh',
    //     pronuncRus: 'нЭфеш',
    //     category: 'general'
    //   },
      
    //   {
    //     id: 519,
    //     english: 'Role, function, job',
    //     russian: 'Роль, функция, должность',
    //     hebrew: 'תפקיד',
    //     pronuncEng: 'tafkid',
    //     pronuncRus: 'тафкИд',
    //     category: 'general'
    //   },
          
    //   {
    //     id: 520,
    //     english: 'To win',
    //     russian: 'Выиграть',
    //     hebrew: 'לנצח',
    //     pronuncEng: 'lenatzEakh',
    //     pronuncRus: 'ленацЕах',
    //     category: 'piel'
    //   },
          
    //   {
    //     id: 521,
    //     english: 'To lose, to destroy',
    //     russian: 'Проиграть, разрушить',
    //     hebrew: 'לאבד',
    //     pronuncEng: 'leabEd',
    //     pronuncRus: 'леабЭд',
    //     category: 'piel'
    //   },
          
    //   {
    //     id: 522,
    //     english: 'Message',
    //     russian: 'Объявление, сообщение',
    //     hebrew: 'הודעה',
    //     pronuncEng: 'hodaA',
    //     pronuncRus: 'ходаА',
    //     category: 'general'
    //   },
              
    //   {
    //     id: 523,
    //     english: 'Appearance, show',
    //     russian: 'Представление, шоу, вид',
    //     hebrew: 'הופעה',
    //     pronuncEng: 'hofaA',
    //     pronuncRus: 'хофаА',
    //     category: 'general'
    //   },
              
    //   {
    //     id: 524,
    //     english: 'Expense, expenditure',
    //     russian: 'Расход, вывод, извлечение',
    //     hebrew: 'הוצאה',
    //     pronuncEng: 'hotzaA',
    //     pronuncRus: 'хоцаА',
    //     category: 'general'
    //   },
              
    //   {
    //     id: 525,
    //     english: 'Addition',
    //     russian: 'Добавление',
    //     hebrew: 'הוספה',
    //     pronuncEng: 'hosafA',
    //     pronuncRus: 'хосафА',
    //     category: 'general'
    //   },
              
    //   {
    //     id: 526,
    //     english: 'Explanation',
    //     russian: 'Объяснение',
    //     hebrew: 'הסבר',
    //     pronuncEng: 'hesbEr',
    //     pronuncRus: 'эсбЕр',
    //     category: 'general'
    //   },
       
    //   {
    //     id: 527,
    //     english: 'Researcher',
    //     russian: 'Исследователь',
    //     hebrew: 'חוקר',
    //     pronuncEng: 'khokEr',
    //     pronuncRus: 'хокЕр',
    //     category: 'general'
    //   },
                  
    //   {
    //     id: 528,
    //     english: 'Reaction',
    //     russian: 'Реакция',
    //     hebrew: 'תגובה',
    //     pronuncEng: 'tguvA',
    //     pronuncRus: 'тгувА',
    //     category: 'shem peula'
    //   },
                  
    //   {
    //     id: 529,
    //     english: 'Adjustment, suitability',
    //     russian: 'Соответствие',
    //     hebrew: 'התאמה',
    //     pronuncEng: 'hataamA',
    //     pronuncRus: 'хатаамА',
    //     category: 'shem peula'
    //   },
                  
    //   {
    //     id: 530,
    //     english: 'Description',
    //     russian: 'Описание',
    //     hebrew: 'תיאור',
    //     pronuncEng: 'tiUr',
    //     pronuncRus: 'тиУр',
    //     category: 'shem peula'
    //   },
                  
    //   {
    //     id: 531,
    //     english: 'Social, collective',
    //     russian: 'Общественный',
    //     hebrew: 'חברתי',
    //     pronuncEng: 'khevrati',
    //     pronuncRus: 'хевратИ',
    //     category: 'adjective'
    //   },
                      
    //   {
    //     id: 532,
    //     english: 'Victory',
    //     russian: 'Победа',
    //     hebrew: 'ניצחון',
    //     pronuncEng: 'nitzakhOn',
    //     pronuncRus: 'ницахОн',
    //     category: 'general'
    //   },
                      
    //   {
    //     id: 533,
    //     english: 'Fear',
    //     russian: 'Страх',
    //     hebrew: 'פחד',
    //     pronuncEng: 'pAkhad',
    //     pronuncRus: 'пАхад',
    //     category: 'general'
    //   },
                      
    //   {
    //     id: 534,
    //     english: 'Control, Authority',
    //     russian: 'Власть, контроль',
    //     hebrew: 'שליטה',
    //     pronuncEng: 'shlitA',
    //     pronuncRus: 'шлитА',
    //     category: 'general'
    //   },
                      
    //   {
    //     id: 535,
    //     english: 'To fail',
    //     russian: 'Провалиться, потерпеть неудачу',
    //     hebrew: 'להיכשל',
    //     pronuncEng: 'lehikashEl',
    //     pronuncRus: 'лехикашЕль',
    //     category: 'nifal'
    //   },
                          
    //   {
    //     id: 536,
    //     english: 'Sense of humor',
    //     russian: 'Чувство юмора',
    //     hebrew: 'חוש הומור',
    //     pronuncEng: 'khush humOr',
    //     pronuncRus: 'хуш хумОр',
    //     category: 'general'
    //   },
                          
    //   {
    //     id: 537,
    //     english: 'Research',
    //     russian: 'Исследование',
    //     hebrew: 'מחקר',
    //     pronuncEng: 'mikhkAr',
    //     pronuncRus: 'михкАр',
    //     category: 'general'
    //   },
                          
    //   {
    //     id: 538,
    //     english: 'Despite that...',
    //     russian: 'Несмотря на...',
    //     hebrew: '...אף על פי ש',
    //     pronuncEng: 'af al pi she...',
    //     pronuncRus: 'аф аль пи ше...',
    //     category: 'adverb'
    //   },
                          
    //   {
    //     id: 539,
    //     english: 'Injury, harm, damage',
    //     russian: 'Травма, рана',
    //     hebrew: 'פגיעה',
    //     pronuncEng: 'pgiyA',
    //     pronuncRus: 'пгиЯ',
    //     category: 'general'
    //   },
                          
    //   {
    //     id: 540,
    //     english: 'Brain',
    //     russian: 'Мозг',
    //     hebrew: 'מוח',
    //     pronuncEng: 'mOakh',
    //     pronuncRus: 'мОах',
    //     category: 'general'
    //   },
                              
    //   {
    //     id: 541,
    //     english: 'Disease, illness',
    //     russian: 'Болезнь',
    //     hebrew: 'מחלה',
    //     pronuncEng: 'makhalA',
    //     pronuncRus: 'махалА',
    //     category: 'general'
    //   },
                              
    //   {
    //     id: 542,
    //     english: 'Serious, earnest',
    //     russian: 'Серьёзно, серьёзный',
    //     hebrew: 'רציני',
    //     pronuncEng: 'ratzini',
    //     pronuncRus: 'рацинИ',
    //     category: 'adjective'
    //   },
                              
    //   {
    //     id: 543,
    //     english: 'Joke',
    //     russian: 'Шутка',
    //     hebrew: 'בדיחה',
    //     pronuncEng: 'bdikhA',
    //     pronuncRus: 'бдихА',
    //     category: 'general'
    //   },
                              
    //   {
    //     id: 544,
    //     english: 'Tested',
    //     russian: 'Проверяемый',
    //     hebrew: 'נבדק',
    //     pronuncEng: 'nivdAk',
    //     pronuncRus: 'нивдАк',
    //     category: 'general passive'
    //   },
                                  
    //   {
    //     id: 545,
    //     english: 'Creation',
    //     russian: 'Создание, творение, произведение',
    //     hebrew: 'יצירה',
    //     pronuncEng: 'yetzirA',
    //     pronuncRus: 'йецирА',
    //     category: 'general'
    //   },
                                  
    //   {
    //     id: 546,
    //     english: 'Invention',
    //     russian: 'Изобретение, открытие',
    //     hebrew: 'המצאה',
    //     pronuncEng: 'hamtzaA',
    //     pronuncRus: 'hамцаА',
    //     category: 'general'
    //   },
                                  
    //   {
    //     id: 547,
    //     english: 'To invent',
    //     russian: 'Изобретать',
    //     hebrew: 'להמציא',
    //     pronuncEng: 'lehamtzI',
    //     pronuncRus: 'лехамцИ',
    //     category: 'hifil'
    //   },
                                  
    //   {
    //     id: 548,
    //     english: 'Difference',
    //     russian: 'Разница',
    //     hebrew: 'הבדל',
    //     pronuncEng: 'hevdEl',
    //     pronuncRus: 'хэвдЭль',
    //     category: 'general'
    //   },
                                  
    //   {
    //     id: 549,
    //     english: 'Related, connected',
    //     russian: 'Связанный',
    //     hebrew: 'קשור',
    //     pronuncEng: 'kashUr',
    //     pronuncRus: 'кашУр',
    //     category: 'adverb'
    //   },
                                      
    //   {
    //     id: 550,
    //     english: 'Feelings',
    //     russian: 'Чувства',
    //     hebrew: 'רגשות',
    //     pronuncEng: 'regashOt',
    //     pronuncRus: 'регашОт',
    //     category: 'general'
    //   },
                                      
    //   {
    //     id: 551,
    //     english: 'Immediate',
    //     russian: 'Срочно',
    //     hebrew: 'מייד',
    //     pronuncEng: 'meyAd',
    //     pronuncRus: 'мейЯд',
    //     category: 'adjective'
    //   },
                                      
    //   {
    //     id: 552,
    //     english: 'Communication, relationships',
    //     russian: 'Коммуникация, отношения',
    //     hebrew: 'תקשורת',
    //     pronuncEng: 'tikshOret',
    //     pronuncRus: 'тикшОрет',
    //     category: 'general'
    //   },
                                      
    //   {
    //     id: 553,
    //     english: 'To sunbathe',
    //     russian: 'Загорать',
    //     hebrew: 'להשתזף',
    //     pronuncEng: 'lehishtazEf',
    //     pronuncRus: 'лехиштазЭф',
    //     category: 'hitpael'
    //   },
                     
    //   {
    //     id: 554,
    //     english: 'Sunscreen',
    //     russian: 'Крем от загара',
    //     hebrew: 'קרם שיזוף',
    //     pronuncEng: 'krem shizUf',
    //     pronuncRus: 'крем шизУф',
    //     category: 'general'
    //   },     
  
    //   {
    //     id: 555,
    //     english: 'Shadow',
    //     russian: 'Тень',
    //     hebrew: 'צל',
    //     pronuncEng: 'tzel',
    //     pronuncRus: 'цель',
    //     category: 'general'
    //   },
                                          
    //   {
    //     id: 556,
    //     english: 'To be careful',
    //     russian: 'Остерегаться',
    //     hebrew: 'להיזהר',
    //     pronuncEng: 'lehizahEr',
    //     pronuncRus: 'лехизаЭр',
    //     category: 'nifal'
    //   },
                                          
    //   {
    //     id: 557,
    //     english: 'Lifeguard',
    //     russian: 'Спасатель',
    //     hebrew: 'מציל',
    //     pronuncEng: 'matzil',
    //     pronuncRus: 'мацИль',
    //     category: 'general'
    //   },
                                              
    //   {
    //     id: 558,
    //     english: 'To postpone',
    //     russian: 'Откладывать',
    //     hebrew: 'לדחות',
    //     pronuncEng: 'lidkhOt',
    //     pronuncRus: 'лидхОт',
    //     category: 'paal'
    //   },
                                              
    //   {
    //     id: 559,
    //     english: 'To hug, to embrace',
    //     russian: 'Обнимать',
    //     hebrew: 'לחבק',
    //     pronuncEng: 'lekhabEk',
    //     pronuncRus: 'лехабЭк',
    //     category: 'piel'
    //   },
                                              
    //   {
    //     id: 560,
    //     english: 'Hugs',
    //     russian: 'Объятия',
    //     hebrew: 'חיבוקים',
    //     pronuncEng: 'khibukim',
    //     pronuncRus: 'хибукИм',
    //     category: 'general'
    //   },
                                              
    //   {
    //     id: 561,
    //     english: 'Perfume',
    //     russian: 'Духи, парфюм',
    //     hebrew: 'בושם',
    //     pronuncEng: 'bOsem',
    //     pronuncRus: 'бОсэм',
    //     category: 'general'
    //   },
                                              
    //   {
    //     id: 562,
    //     english: 'To sacrifice',
    //     russian: 'Жертвовать, приносить жертву',
    //     hebrew: 'להקריב',
    //     pronuncEng: 'lehakriv',
    //     pronuncRus: 'лехакрИв',
    //     category: 'hifil'
    //   },
                                              
    //   {
    //     id: 563,
    //     english: 'To separate from, to part from',
    //     russian: 'Отделяться от',
    //     hebrew: 'להיפרד',
    //     pronuncEng: 'lehiparEd',
    //     pronuncRus: 'лехипарЭд',
    //     category: 'nifal'
    //   },
                                                  
    //   {
    //     id: 564,
    //     english: 'To part from, to separate from (present, masc)',
    //     russian: 'Отделяться от (наст. вр.)',
    //     hebrew: 'נפרד',
    //     pronuncEng: 'nifrad',
    //     pronuncRus: 'нифрАд',
    //     category: 'nifal'
    //   },
                                                  
    //   {
    //     id: 565,
    //     english: 'Committee',
    //     russian: 'Комитет',
    //     hebrew: 'ועדה',
    //     pronuncEng: 'vaadA',
    //     pronuncRus: 'ваадА',
    //     category: 'general'
    //   },
                                                  
    //   {
    //     id: 566,
    //     english: 'Shoulder',
    //     russian: 'Плечо',
    //     hebrew: 'כתף',
    //     pronuncEng: 'katEf',
    //     pronuncRus: 'катЭф',
    //     category: 'body'
    //   },
                                                  
    //   {
    //     id: 567,
    //     english: 'Funeral',
    //     russian: 'Похороны',
    //     hebrew: 'הלוויה',
    //     pronuncEng: 'halvayA',
    //     pronuncRus: 'алвайЯ',
    //     category: 'general'
    //   },
                                                      
    //   {
    //     id: 568,
    //     english: 'Scissors',
    //     russian: 'Ножницы',
    //     hebrew: 'מספריים',
    //     pronuncEng: 'misparAyim',
    //     pronuncRus: 'миспарАим',
    //     category: 'general'
    //   },
                                                      
    //   {
    //     id: 569,
    //     english: 'Leaf',
    //     russian: 'Лист',
    //     hebrew: 'עלה',
    //     pronuncEng: 'alE',
    //     pronuncRus: 'алЕ',
    //     category: 'general'
    //   },
                                                      
    //   {
    //     id: 570,
    //     english: 'Value',
    //     russian: 'Ценность, стоимость, порядок',
    //     hebrew: 'ערך',
    //     pronuncEng: 'Erekh',
    //     pronuncRus: 'Эрех',
    //     category: 'general'
    //   },
                                                      
    //   {
    //     id: 571,
    //     english: 'Parting, separation, farewell',
    //     russian: 'Прощание, расставание',
    //     hebrew: 'פרידה',
    //     pronuncEng: 'predA',
    //     pronuncRus: 'предА',
    //     category: 'general'
    //   },
                                                      
    //   {
    //     id: 572,
    //     english: 'At all, completely, in general',
    //     russian: 'Совсем, вообще',
    //     hebrew: 'בכלל',
    //     pronuncEng: 'bikhlAl',
    //     pronuncRus: 'бихлЯль',
    //     category: 'adverb'
    //   },
                                                      
    //   {
    //     id: 573,
    //     english: 'Plain, plateau',
    //     russian: 'Равнина, плоскость',
    //     hebrew: 'מישור',
    //     pronuncEng: 'mishOr',
    //     pronuncRus: 'мишОр',
    //     category: 'general'
    //   },
                                                          
    //   {
    //     id: 574,
    //     english: 'That, which',
    //     russian: 'Который',
    //     hebrew: 'אשר',
    //     pronuncEng: 'ashEr',
    //     pronuncRus: 'ашЕр',
    //     category: 'general'
    //   },
                                                          
    //   {
    //     id: 575,
    //     english: 'The Lowland (region in Israel)',
    //     russian: 'Низменность - регион в центре Израиля',
    //     hebrew: 'השפלה',
    //     pronuncEng: 'a-shfelA',
    //     pronuncRus: 'а-шфелА',
    //     category: 'general'
    //   },
                                                          
    //   {
    //     id: 576,
    //     english: 'To plant',
    //     russian: 'Выращивать (растения)',
    //     hebrew: 'לשתול',
    //     pronuncEng: 'lishtOl',
    //     pronuncRus: 'лиштОль',
    //     category: 'paal'
    //   },
                                                          
    //   {
    //     id: 577,
    //     english: 'To wander, to roam, to migrate (incl. the birds)',
    //     russian: 'Скитаться, перелетать (в т.ч. про птиц)',
    //     hebrew: 'לנדוד',
    //     pronuncEng: 'lindOd',
    //     pronuncRus: 'линдОд',
    //     category: 'paal'
    //   },
                                                          
    //   {
    //     id: 578,
    //     english: 'Youth, adolescence',
    //     russian: 'Юность',
    //     hebrew: 'נעורים',
    //     pronuncEng: 'neurim',
    //     pronuncRus: 'нэурИм',
    //     category: 'general'
    //   },
                                                          
    //   {
    //     id: 579,
    //     english: 'Loaf (of bread)',
    //     russian: 'Кусок, ломоть хлеба',
    //     hebrew: 'פת',
    //     pronuncEng: 'pat',
    //     pronuncRus: 'пат',
    //     category: 'general'
    //   },
                                              
    //   {
    //     id: 580,
    //     english: 'Fresh, refreshed',
    //     russian: 'Свежий, бодрый, полный сил',
    //     hebrew: 'רענן',
    //     pronuncEng: 'raanAn',
    //     pronuncRus: 'раанАн',
    //     category: 'Adjective'
    //   },
                                                          
    //   {
    //     id: 581,
    //     english: 'To develop oneself, to evolve',
    //     russian: 'Развиваться, прогрессировать как личность',
    //     hebrew: 'להתפתח',
    //     pronuncEng: 'lehitpatEakh',
    //     pronuncRus: 'лехитпатЭах',
    //     category: 'hitpael'
    //   },
                                                              
    //   {
    //     id: 582,
    //     english: 'Development, evolution',
    //     russian: 'Развитие, эволюция',
    //     hebrew: 'התפתחות',
    //     pronuncEng: 'hitpatkhUt',
    //     pronuncRus: 'хитпатхУт',
    //     category: 'general'
    //   },
                                                       
    //   {
    //     id: 583,
    //     english: 'To solve, to figure out',
    //     russian: 'Решить, отгадать',
    //     hebrew: 'לפתור',
    //     pronuncEng: 'liftOr',
    //     pronuncRus: 'лифтОр',
    //     category: 'paal'
    //   },    
  
    //   {
    //     id: 584,
    //     english: 'Area, zone, region',
    //     russian: 'Район, область, округ',
    //     hebrew: 'אזור',
    //     pronuncEng: 'ezOr',
    //     pronuncRus: 'эзОр',
    //     category: 'general'
    //   },
                                                                  
    //   {
    //     id: 585,
    //     english: 'Loneliness, solitude',
    //     russian: 'Одиночество, уединение',
    //     hebrew: 'בדידות',
    //     pronuncEng: 'bdidUt',
    //     pronuncRus: 'бдидУт',
    //     category: 'general'
    //   },
                                                                  
    //   {
    //     id: 586,
    //     english: 'Involved, mixed',
    //     russian: 'Вовлечённый, замешанный',
    //     hebrew: 'מעורב',
    //     pronuncEng: 'meorAv',
    //     pronuncRus: 'меорАв',
    //     category: 'pual'
    //   },
                                                           
    //   {
    //     id: 587,
    //     english: 'Concern',
    //     russian: 'Беспокойство',
    //     hebrew: 'אכפת',
    //     pronuncEng: 'ikhpAt',
    //     pronuncRus: 'ихпАт',
    //     category: 'general'
    //   },
                                                                      
    //   {
    //     id: 588,
    //     english: "I don't care",
    //     russian: 'Меня не волнует',
    //     hebrew: 'לא אכפת לי',
    //     pronuncEng: 'lo ikhpAt li',
    //     pronuncRus: 'ло ихпАт ли',
    //     category: 'phrase'
    //   },
                                                                      
    //   {
    //     id: 589,
    //     english: 'Belonging (to someone)',
    //     russian: 'Принадлежащий (кому-либо)',
    //     hebrew: 'שייך',
    //     pronuncEng: 'shayAkh',
    //     pronuncRus: 'шаЯх',
    //     category: 'general'
    //   },
                                                                          
    //   {
    //     id: 590,
    //     english: 'Shared, common',
    //     russian: 'Общий, общественный',
    //     hebrew: 'משותף',
    //     pronuncEng: 'meshutAf',
    //     pronuncRus: 'мешутАф',
    //     category: 'adverb'
    //   },
                                                                          
    //   {
    //     id: 591,
    //     english: 'To get used to',
    //     russian: 'Привыкать',
    //     hebrew: 'להתרגל',
    //     pronuncEng: 'lehitragEl',
    //     pronuncRus: 'лехитрагЕль',
    //     category: 'hitpael'
    //   },
                                                                          
    //   {
    //     id: 592,
    //     english: 'To be excited',
    //     russian: 'Быть приятно взволнованным',
    //     hebrew: 'להתרגש',
    //     pronuncEng: 'lehitragEsh',
    //     pronuncRus: 'лехитрагЕш',
    //     category: 'hitpael'
    //   },
                                                                              
    //   {
    //     id: 593,
    //     english: 'To exagerrate',
    //     russian: 'Преувеличивать',
    //     hebrew: 'להגזים',
    //     pronuncEng: 'lehagzim',
    //     pronuncRus: 'лехагзИм',
    //     category: 'hifil'
    //   },
                                                                                  
    //   {
    //     id: 594,
    //     english: 'Excuse, pretext',
    //     russian: 'Отговорка',
    //     hebrew: 'תירוץ',
    //     pronuncEng: 'tirUtz',
    //     pronuncRus: 'тирУц',
    //     category: 'general'
    //   },
                                                                                  
    //   {
    //     id: 595,
    //     english: 'Hanging, dependent, unresolved',
    //     russian: 'Зависящий; нерешённый',
    //     hebrew: 'תלוי',
    //     pronuncEng: 'talUi',
    //     pronuncRus: 'талУй',
    //     category: 'adverb'
    //   },
                                                                                  
    //   {
    //     id: 596,
    //     english: 'Liver, heavy',
    //     russian: 'Печень, тяжёлый',
    //     hebrew: 'כבד',
    //     pronuncEng: 'kavEd',
    //     pronuncRus: 'кавЭд',
    //     category: 'general'
    //   },
                                                                                      
    //   {
    //     id: 597,
    //     english: 'Strange',
    //     russian: 'Странный / странно',
    //     hebrew: 'מוזר',
    //     pronuncEng: 'muzAr',
    //     pronuncRus: 'музАр',
    //     category: 'adjective'
    //   },
                                                                                      
    //   {
    //     id: 598,
    //     english: 'That means',
    //     russian: 'Это значит',
    //     hebrew: 'זאת אומרת',
    //     pronuncEng: 'zot omEret',
    //     pronuncRus: 'зот омЕрет',
    //     category: 'phrase'
    //   },
                                                                                      
    //   {
    //     id: 599,
    //     english: 'Stupid',
    //     russian: 'Глупый, глупец',
    //     hebrew: 'טיפש',
    //     pronuncEng: 'tipEsh',
    //     pronuncRus: 'типЭш',
    //     category: 'general'
    //   },
                                                                                      
    //   {
    //     id: 600,
    //     english: 'Task, mission',
    //     russian: 'Задание',
    //     hebrew: 'משימה',
    //     pronuncEng: 'mesimA',
    //     pronuncRus: 'месимА',
    //     category: 'general'
    //   },
                                                                                          
    //   {
    //     id: 601,
    //     english: 'Show, performance',
    //     russian: 'Выступление, шоу',
    //     hebrew: 'הצגה',
    //     pronuncEng: 'hatzagA',
    //     pronuncRus: 'атцагА',
    //     category: 'general'
    //   },
                                                                                          
    //   {
    //     id: 602,
    //     english: 'To show, to demonstrate',
    //     russian: 'Показывать',
    //     hebrew: 'להראות',
    //     pronuncEng: "lehar'Ot",
    //     pronuncRus: 'лехарОт',
    //     category: 'hifil'
    //   },
                                                                                          
    //   {
    //     id: 603,
    //     english: 'Gossipmonger, blabber',
    //     russian: 'Сплетник',
    //     hebrew: 'רכלן',
    //     pronuncEng: 'rakhlAn',
    //     pronuncRus: 'рахлАн',
    //     category: 'general'
    //   },
                                                                                          
    //   {
    //     id: 604,
    //     english: 'To utilise, to exploit, to abuse',
    //     russian: 'Использовать, употреблять',
    //     hebrew: 'לנצל',
    //     pronuncEng: 'lenatzEl',
    //     pronuncRus: 'ленацЕль',
    //     category: 'piel'
    //   },
                                                                                         
    //   {
    //     id: 605,
    //     english: 'To announce, to declare',
    //     russian: 'Объявлять, провозглашать',
    //     hebrew: 'להכריז',
    //     pronuncEng: 'lehakhriz',
    //     pronuncRus: 'леахрИз',
    //     category: 'hifil'
    //   },
                                                                                              
    //   {
    //     id: 606,
    //     english: 'Exile, diaspora, abroad',
    //     russian: 'Диаспора, заграница',
    //     hebrew: 'גלות',
    //     pronuncEng: 'galUt',
    //     pronuncRus: 'галУт',
    //     category: 'general'
    //   },
                                                                                              
    //   {
    //     id: 607,
    //     english: 'Intellectual (person, noun)',
    //     russian: 'Интеллигент, интеллектуал',
    //     hebrew: 'איש רוח',
    //     pronuncEng: 'ish rUakh',
    //     pronuncRus: 'Иш рУах',
    //     category: 'general'
    //   },
                                                                                              
    //   {
    //     id: 608,
    //     english: 'Diligent, industrious',
    //     russian: 'Усердный, прилежный',
    //     hebrew: 'חרוץ',
    //     pronuncEng: 'kharUtz',
    //     pronuncRus: 'харУц',
    //     category: 'adjective'
    //   },
                                                                                                  
    //   {
    //     id: 609,
    //     english: 'To err, to mistake',
    //     russian: 'Ошибаться',
    //     hebrew: 'לטעות',
    //     pronuncEng: "lit'ot",
    //     pronuncRus: "лит'от",
    //     category: 'paal'
    //   },
                                                                                                  
    //   {
    //     id: 610,
    //     english: 'To murder',
    //     russian: 'Убивать',
    //     hebrew: 'לרצוח',
    //     pronuncEng: 'lirtzOakh',
    //     pronuncRus: 'лирцОах',
    //     category: 'paal'
    //   },
                                                                                                      
    //   {
    //     id: 611,
    //     english: 'Homeland, motherland',
    //     russian: 'Родина',
    //     hebrew: 'מולדת',
    //     pronuncEng: 'molEdet',
    //     pronuncRus: 'молЭдэт',
    //     category: 'general'
    //   },
                                                                                                      
    //   {
    //     id: 612,
    //     english: 'Ability, capability',
    //     russian: 'Способность',
    //     hebrew: "יכולת",
    //     // ^^^FOR SOME STRANGE REASON WHEN I TRY TO TYPE THE CORRECT WORD IN HEBREW,
    //     // WHICH IS ACTUALLY yud-kaf-vav-lamed-tav (even here I can't do this as well!!!),
    //     // IT SCRAMBLES THE LETTERS INSIDE. IDK WHY THE FLUFF IS THIS HAPPENING
    //     pronuncEng: 'yechOlet',
    //     pronuncRus: 'йехОлет',
    //     category: 'general'
    //   },
                                                                                                      
    //   {
    //     id: 613,
    //     english: 'To prevent',
    //     russian: 'Предотвращать',
    //     hebrew: 'למנוע',
    //     pronuncEng: 'limnOa',
    //     pronuncRus: 'лимнОа',
    //     category: 'paal'
    //   },
                                                                                                      
    //   {
    //     id: 614,
    //     english: 'Reality, existence',
    //     russian: 'Реальность, действительность',
    //     hebrew: 'מציאות',
    //     pronuncEng: 'metziUt',
    //     pronuncRus: 'мециУт',
    //     category: 'general'
    //   },
                                                                                                          
    //   {
    //     id: 615,
    //     english: 'Towards',
    //     russian: 'Навстречу, по направлению к',
    //     hebrew: 'לקראת',
    //     pronuncEng: 'likrAt',
    //     pronuncRus: 'ликрАт',
    //     category: 'general'
    //   },
                                                                                                          
    //   {
    //     id: 616,
    //     english: 'All around',
    //     russian: 'Всюду, со всех сторон, вокруг',
    //     hebrew: 'מסביב',
    //     pronuncEng: 'misaviv',
    //     pronuncRus: 'мисавИв',
    //     category: 'general'
    //   },
                                                                                                          
    //   {
    //     id: 617,
    //     english: 'Matter, issue, concern, interest',
    //     russian: 'Интерес, тема',
    //     hebrew: 'עניין',
    //     pronuncEng: 'inyAn',
    //     pronuncRus: 'иньЯн',
    //     category: 'general'
    //   },
                                                                                                              
    //   {
    //     id: 618,
    //     english: 'Global crisis',
    //     russian: 'Мировой кризис',
    //     hebrew: 'משבר עולמי',
    //     pronuncEng: 'mashbEr olami',
    //     pronuncRus: 'машбЕр оламИ',
    //     category: 'phrase'
    //   },
                                                                                                              
    //   {
    //     id: 619,
    //     english: 'Option, choice, alternative',
    //     russian: 'Выбор',
    //     hebrew: 'ברירה',
    //     pronuncEng: 'brirA',
    //     pronuncRus: 'брирА',
    //     category: 'general'
    //   },
                                                                                                              
    //   {
    //     id: 620,
    //     english: 'Talent, aptitude',
    //     russian: 'Талант, способность',
    //     hebrew: 'כישרון',
    //     pronuncEng: 'kisharOn',
    //     pronuncRus: 'кишарОн',
    //     category: 'general'
    //   },
                                                                                                                  
    //   {
    //     id: 621,
    //     english: 'Path, track, course, trajectory',
    //     russian: 'Путь, траектория',
    //     hebrew: 'מסלול',
    //     pronuncEng: 'maslUl',
    //     pronuncRus: 'маслЮль',
    //     category: 'general'
    //   },
                                                                                                                  
    //   {
    //     id: 622,
    //     english: 'To fall asleep, to doze off',
    //     russian: 'Засыпать',
    //     hebrew: 'להירדם',
    //     pronuncEng: 'lehiradEm',
    //     pronuncRus: 'лехирадЭм',
    //     category: 'nifal'
    //   },
                                                                                                                  
    //   {
    //     id: 623,
    //     english: 'Lunar cycle',
    //     russian: 'Цикл Луны',
    //     hebrew: 'מחזור הירח',
    //     pronuncEng: 'makhzOr ha-yarEakh',
    //     pronuncRus: 'махзОр а-йарЭах',
    //     category: 'phrase'
    //   },
                                                                                                                  
    //   {
    //     id: 624,
    //     english: 'Solar cycle',
    //     russian: 'Солнечный цикл',
    //     hebrew: 'מחזור השמש',
    //     pronuncEng: 'makhzOr ha-shEmesh',
    //     pronuncRus: 'махзОр а-шЕмеш',
    //     category: 'phrase'
    //   },
                                                                                                                      
    //   {
    //     id: 625,
    //     english: 'To disappear',
    //     russian: 'Исчезать',
    //     hebrew: 'להיעלם',
    //     pronuncEng: 'lehialEm',
    //     pronuncRus: 'лехиалЕм',
    //     category: 'nifal'
    //   },
                                                                                                                      
    //   {
    //     id: 626,
    //     english: 'Disappear (present tense)',
    //     russian: 'Исчезать (наст.вр.)',
    //     hebrew: 'נעלם',
    //     pronuncEng: "ne'elAm",
    //     pronuncRus: 'нэелАм',
    //     category: 'nifal'
    //   },
                                                                                                                      
    //   {
    //     id: 627,
    //     english: 'Fall asleep, doze off (present tense)',
    //     russian: 'Засыпать (наст.вр.)',
    //     hebrew: 'נרדם',
    //     pronuncEng: 'nirdAm',
    //     pronuncRus: 'нирдАм',
    //     category: 'nifal'
    //   },
                                                                                                                        
    //   {
    //     id: 628,
    //     english: 'Two times, x2',
    //     russian: 'Дважды',
    //     hebrew: 'פי שתיים',
    //     pronuncEng: 'pi shtAim',
    //     pronuncRus: 'пи штАим',
    //     category: 'number'
    //   },
                                                                                                                        
    //   {
    //     id: 629,
    //     english: 'Three times, x3',
    //     russian: 'Трижды, в три раза',
    //     hebrew: 'פי שלוש',
    //     pronuncEng: 'pi shalOsh',
    //     pronuncRus: 'пи шалОш',
    //     category: 'number'
    //   },
                                                                                                                            
    //   {
    //     id: 630,
    //     english: 'Multiply',
    //     russian: 'Умножение',
    //     hebrew: 'כפול',
    //     pronuncEng: 'k(a)ful',
    //     pronuncRus: 'к(а)фуль',
    //     category: 'general'
    //   },
                                                                                                                            
    //   {
    //     id: 631,
    //     english: 'To become (someone or something), to turn into',
    //     russian: 'Стать, становиться (кем-либо)',
    //     hebrew: 'להפוך',
    //     pronuncEng: 'laafOkh',
    //     pronuncRus: 'лаафОх',
    //     category: 'paal'
    //   },
                                                                                                                            
    //   {
    //     id: 632,
    //     english: 'To leave, to keep',
    //     russian: 'Оставлять',
    //     hebrew: 'להשאיר',
    //     pronuncEng: "lehash'ir",
    //     pronuncRus: 'леаш-Ир',
    //     category: 'hifil'
    //   },
                                                                                                                                
    //   {
    //     id: 633,
    //     english: 'To rule, to govern',
    //     russian: 'Управлять, править',
    //     hebrew: 'לשלוט',
    //     pronuncEng: 'lishlOt',
    //     pronuncRus: 'лишлОт',
    //     category: 'paal'
    //   },
                                                                                                                                
    //   {
    //     id: 634,
    //     english: 'Reign, rule, political power',
    //     russian: 'Власть',
    //     hebrew: 'שלטון',
    //     pronuncEng: 'shiltOn',
    //     pronuncRus: 'шильтОн',
    //     category: 'general'
    //   },
                                                                                                                                
    //   {
    //     id: 635,
    //     english: 'Surprise',
    //     russian: 'Сюрприз',
    //     hebrew: 'הפתעה',
    //     pronuncEng: 'haftaA',
    //     pronuncRus: 'афтаА',
    //     category: 'general'
    //   },
                                                                                                                                    
    //   {
    //     id: 636,
    //     english: 'Fact',
    //     russian: 'Факт',
    //     hebrew: 'עובדה',
    //     pronuncEng: 'uvdA',
    //     pronuncRus: 'увдА',
    //     category: 'general'
    //   },
                                                                                                                                    
    //   {
    //     id: 637,
    //     english: 'Scream',
    //     russian: 'Крик',
    //     hebrew: 'צעקה',
    //     pronuncEng: 'tzaakA',
    //     pronuncRus: 'цаакА',
    //     category: 'general'
    //   },
                                                                                                                                    
    //   {
    //     id: 638,
    //     english: 'Soon',
    //     russian: 'На носу, уже скоро',
    //     hebrew: 'בשער',
    //     pronuncEng: 'be-shaAr',
    //     pronuncRus: 'бэ-шаАр',
    //     category: 'phrase'
    //   },
                                                                                                                                        
    //   {
    //     id: 639,
    //     english: 'To discover, to show (feelings), present tense',
    //     russian: 'Открывать / проявлять (эмпатию например), настоящее время',
    //     hebrew: 'מגלה',
    //     pronuncEng: 'megalE',
    //     pronuncRus: 'мегалЕ',
    //     category: 'piel'
    //   },
                                                                                                                                        
    //   {
    //     id: 640,
    //     english: 'Long ago',
    //     russian: 'Давно',
    //     hebrew: 'מזמן',
    //     pronuncEng: 'mizmAn',
    //     pronuncRus: 'мизмАн',
    //     category: 'adverb'
    //   },
                                                                                                                                        
    //   {
    //     id: 641,
    //     english: 'Coral',
    //     russian: 'Коралл',
    //     hebrew: 'אלמוג',
    //     pronuncEng: 'almOg',
    //     pronuncRus: 'алмОг',
    //     category: 'general'
    //   },
                                                                                                                                            
    //   {
    //     id: 642,
    //     english: 'Pearl',
    //     russian: 'Жемчужина',
    //     hebrew: 'פנינה',
    //     pronuncEng: 'pnina',
    //     pronuncRus: 'пнИна',
    //     category: 'general'
    //   },
                                                                                                                                            
    //   {
    //     id: 643,
    //     english: 'To scare, to intimidate',
    //     russian: 'Пугать',
    //     hebrew: 'להפחיד',
    //     pronuncEng: 'lehafkhid',
    //     pronuncRus: 'леафхИд',
    //     category: 'hifil'
    //   },
                                                                                                                                            
    //   {
    //     id: 644,
    //     english: 'Scare, intimidate (present tense)',
    //     russian: 'Пугать (наст.вр.)',
    //     hebrew: 'מפחיד',
    //     pronuncEng: 'mafkhid',
    //     pronuncRus: 'мафхИд',
    //     category: 'hifil'
    //   },
                                                                                                                                                
    //   {
    //     id: 645,
    //     english: 'Result, consequence, outcome, effect',
    //     russian: 'Результат',
    //     hebrew: 'תוצאה',
    //     pronuncEng: 'totzaA',
    //     pronuncRus: 'тоцаА',
    //     category: 'general'
    //   },
                                                                                                                                                
    //   {
    //     id: 646,
    //     english: 'Superstitions',
    //     russian: 'Суеверия',
    //     hebrew: 'אמונות טפלות',
    //     pronuncEng: 'amunOt tfilOt',
    //     pronuncRus: 'амунОт тфилОт',
    //     category: 'phrase'
    //   },
                                                                                                                                                
    //   {
    //     id: 647,
    //     english: 'Bravery, courage, valour',
    //     russian: 'Смелость, храбрость',
    //     hebrew: 'אומץ',
    //     pronuncEng: 'Ometz',
    //     pronuncRus: 'Омэц',
    //     category: 'general'
    //   },
                                                                                                                                                    
    //   {
    //     id: 648,
    //     english: 'To explain, to clarify',
    //     russian: 'Объяснить',
    //     hebrew: 'להסביר',
    //     pronuncEng: 'lehasbir',
    //     pronuncRus: 'леhасбИр',
    //     category: 'hifil'
    //   },
                                                                                                                                                    
    //   {
    //     id: 649,
    //     english: 'If, if only, whether',
    //     russian: 'Если, если бы',
    //     hebrew: 'אילו',
    //     pronuncEng: 'ilu',
    //     pronuncRus: 'Илу',
    //     category: 'adverb'
    //   },
                                                                                                                                                    
    //   {
    //     id: 650,
    //     english: 'Understanding, comprehension',
    //     russian: 'Понимание',
    //     hebrew: 'הבנה',
    //     pronuncEng: 'havanA',
    //     pronuncRus: 'аванА',
    //     category: 'general'
    //   },
                                                                                                                                                    
    //   {
    //     id: 651,
    //     english: 'To warm up, to become hot, to be excited',
    //     russian: 'Разогреваться',
    //     hebrew: 'להתחמם',
    //     pronuncEng: 'lehitkhamEm',
    //     pronuncRus: 'леитхамЭм',
    //     category: 'hitpael'
    //   },
                                                                                                                                                        
    //   {
    //     id: 652,
    //     english: 'Customer, client',
    //     russian: 'Клиент',
    //     hebrew: 'לקוח',
    //     pronuncEng: 'lakOakh',
    //     pronuncRus: 'лакОах',
    //     category: 'general'
    //   },
                                                                                                                                                        
    //   {
    //     id: 653,
    //     english: 'Miracle',
    //     russian: 'Чудо',
    //     hebrew: 'נס',
    //     pronuncEng: 'nes',
    //     pronuncRus: 'нэс',
    //     category: 'general'
    //   },
                                                                                                                                                        
    //   {
    //     id: 654,
    //     english: 'Hall, vestibule',
    //     russian: 'Зал',
    //     hebrew: 'אולם',
    //     pronuncEng: 'ulAm',
    //     pronuncRus: 'улАм',
    //     category: 'general'
    //   },
                                                                                                                                                            
    //   {
    //     id: 655,
    //     english: 'To surf (waves or internet)',
    //     russian: 'Сёрфить (на волнах или в интернете)',
    //     hebrew: 'לגלוש',
    //     pronuncEng: 'liglOsh',
    //     pronuncRus: 'лиглОш',
    //     category: 'paal'
    //   },
                                                                                                                                                            
    //   {
    //     id: 656,
    //     english: 'Orchestra',
    //     russian: 'Оркестр',
    //     hebrew: 'תזמורת',
    //     pronuncEng: 'tizmOret',
    //     pronuncRus: 'тизмОрэт',
    //     category: 'general'
    //   },
                                                                                                                                                                
    //   {
    //     id: 657,
    //     english: 'List, roster, bill',
    //     russian: 'Список',
    //     hebrew: 'רשימה',
    //     pronuncEng: 'reshimA',
    //     pronuncRus: 'решимА',
    //     category: 'general'
    //   },
                                                                                                                                                                
    //   {
    //     id: 658,
    //     english: 'Law, decree, rule',
    //     russian: 'Закон',
    //     hebrew: 'חוק',
    //     pronuncEng: 'khok',
    //     pronuncRus: 'хок',
    //     category: 'general'
    //   },
                                                                                                                                                                    
    //   {
    //     id: 659,
    //     english: 'Enjoy',
    //     russian: 'Наслаждаться',
    //     hebrew: 'ליהנות',
    //     pronuncEng: 'leianOt',
    //     pronuncRus: 'леианОт',
    //     category: 'nifal'
    //   },
                                                                                                                                                                    
    //   {
    //     id: 660,
    //     english: 'Pleasure, delight, enjoyment',
    //     russian: 'Удовольствие, восторг',
    //     hebrew: 'הנאה',
    //     pronuncEng: 'hanaA',
    //     pronuncRus: '(h)анаА',
    //     category: 'general'
    //   },
                                                                                                                                                                        
    //   {
    //     id: 661,
    //     english: 'Composer',
    //     russian: 'Композитор',
    //     hebrew: 'מלחין',
    //     pronuncEng: 'malkhin',
    //     pronuncRus: 'мальхИн',
    //     category: 'profession'
    //   },
                                                                                                                                                                        
    //   {
    //     id: 662,
    //     english: 'To imitate, to simulate',
    //     russian: 'Подражать, имитировать',
    //     hebrew: 'לחקות',
    //     pronuncEng: 'lekhakot',
    //     pronuncRus: 'лехакот',
    //     category: 'piel'
    //   },
                                                                                                                                                                            
    //   {
    //     id: 663,
    //     english: 'Advertisement, commercial',
    //     russian: 'Реклама',
    //     hebrew: 'פירסומת',
    //     pronuncEng: 'pirsOmet',
    //     pronuncRus: 'пирсОмет',
    //     category: 'general'
    //   },
                                                                                                                                                                            
    //   {
    //     id: 664,
    //     english: 'To include',
    //     russian: 'Включать в себя, содержать',
    //     hebrew: 'לכלול',
    //     pronuncEng: 'likhlOl',
    //     pronuncRus: 'лихлОль',
    //     category: 'paal'
    //   },
                                                                                                                                                                                
    //   {
    //     id: 665,
    //     english: 'To create',
    //     russian: 'Создавать',
    //     hebrew: 'ליצור',
    //     pronuncEng: 'litzOr',
    //     pronuncRus: 'лицОр',
    //     category: 'paal'
    //   },
                                                                                                                                                                                
    //   {
    //     id: 666,
    //     english: 'Create (present tense)',
    //     russian: 'Создавать (наст.вр.)',
    //     hebrew: 'יוצר',
    //     pronuncEng: 'yotzEr',
    //     pronuncRus: 'йоцЕр',
    //     category: 'paal'
    //   },
                                                                                                                                                                                    
    //   {
    //     id: 667,
    //     english: 'Combination, joining, also: phrase, idiom',
    //     russian: 'Сочетание, комбинация, также: выражение, идиома',
    //     hebrew: 'צירוף',
    //     pronuncEng: 'tzirUf',
    //     pronuncRus: 'цирУф',
    //     category: 'general'
    //   },
                                                                                                                                                                                    
    //   {
    //     id: 668,
    //     english: 'To guard, to keep, to maintain',
    //     russian: 'Сохранить, сберечь',
    //     hebrew: 'לשמור',
    //     pronuncEng: 'lishmOr',
    //     pronuncRus: 'лишмОр',
    //     category: 'paal'
    //   },
                                                                                                                                                                                        
    //   {
    //     id: 669,
    //     english: 'Dill',
    //     russian: 'Укроп',
    //     hebrew: 'שמיר',
    //     pronuncEng: 'shamir',
    //     pronuncRus: 'шамИр',
    //     category: 'grocery'
    //   },
                                                                                                                                                                                        
    //   {
    //     id: 670,
    //     english: 'Team, crew, staff',
    //     russian: 'Команда, коллектив, группа',
    //     hebrew: 'צוות',
    //     pronuncEng: 'tzEvet',
    //     pronuncRus: 'цЕвет',
    //     category: 'general'
    //   },
                                                                                                                                                                                            
    //   {
    //     id: 671,
    //     english: 'Junction, crossroads, intersection',
    //     russian: 'Перекрёсток',
    //     hebrew: 'צומת',
    //     pronuncEng: 'tzOmet',
    //     pronuncRus: 'цОмет',
    //     category: 'general'
    //   },
                                                                                                                                                                                            
    //   {
    //     id: 672,
    //     english: '',
    //     russian: '',
    //     hebrew: '',
    //     pronuncEng: '',
    //     pronuncRus: '',
    //     category: ''
    //   },

    ]
  
  export default words