const words = [
    {
      id: 1,
      english: 'Ice-cream',
      russian: 'Мороженое',
      hebrew: 'גלידה',
      pronuncEng: 'glidA',
      pronuncRus: 'глидА',
      category: 'grocery'
    },
  
    {
      id: 2,
      english: 'Watermelon',
      russian: 'Арбуз',
      hebrew: 'אבטיח',
      pronuncEng: 'avatiakh',
      pronuncRus: 'аватИах',
      category: 'grocery'
    },
  
    {
      id: 3,
      english: 'Melon',
      russian: 'Дыня',
      hebrew: 'מילון',
      pronuncEng: 'milOn',
      pronuncRus: 'милОн',
      category: 'grocery'
    },
  
    {
      id: 4,
      english: 'Cucumber',
      russian: 'Огурец',
      hebrew: 'מלפפון',
      pronuncEng: 'melafefOn',
      pronuncRus: 'мелафефОн',
      category: 'grocery'
    },
  
    {
      id: 5,
      english: 'Tomato',
      russian: 'Помидор',
      hebrew: 'עגבנייה',
      pronuncEng: 'agvaniyA',
      pronuncRus: 'агваниЯ',
      category: 'grocery'
    },
  
    {
      id: 6,
      english: 'Lemon',
      russian: 'Лимон',
      hebrew: 'לימון',
      pronuncEng: 'limOn',
      pronuncRus: 'лимон',
      category: 'grocery'
    },
  
    {
      id: 7,
      english: 'Pomegranate',
      russian: 'Гранат',
      hebrew: 'רימון',
      pronuncEng: 'rimOn',
      pronuncRus: 'римОн',
      category: 'grocery'
    },
  
    {
      id: 8,
      english: 'Onion',
      russian: 'Лук',
      hebrew: 'בצל',
      pronuncEng: 'batzAl',
      pronuncRus: 'бацАль',
      category: 'grocery'
    },
  
    {
      id: 9,
      english: 'Peach',
      russian: 'Персик',
      hebrew: 'אפרסק',
      pronuncEng: 'afarsEk',
      pronuncRus: 'афарсЕк',
      category: 'grocery'
    },
  
    {
      id: 10,
      english: 'Nectarine',
      russian: 'Нектарин',
      hebrew: 'נקטרינה',
      pronuncEng: 'nektarIna',
      pronuncRus: 'нектарИна',
      category: 'grocery'
    },
  
    {
      id: 11,
      english: 'Mango',
      russian: 'Манго',
      hebrew: 'מנגו',
      pronuncEng: 'mango',
      pronuncRus: 'манго',
      category: 'grocery'
    },
  
    {
      id: 12,
      english: 'Pineapple',
      russian: 'Ананас',
      hebrew: 'אננס',
      pronuncEng: 'ananAs',
      pronuncRus: 'ананас',
      category: 'grocery'
    },
  
    {
      id: 13,
      english: 'Banana',
      russian: 'Банан',
      hebrew: 'בננה',
      pronuncEng: 'banana',
      pronuncRus: 'банана',
      category: 'grocery'
    },
  
    {
      id: 14,
      english: 'Avocado',
      russian: 'Авокадо',
      hebrew: 'אבוקדו',
      pronuncEng: 'avokado',
      pronuncRus: 'авокадо',
      category: 'grocery'
    },
  
    {
      id: 15,
      english: 'Carrot',
      russian: 'Морковь',
      hebrew: 'גזר',
      pronuncEng: 'gEzer',
      pronuncRus: 'гЕзэр',
      category: 'grocery'
    },
  
    {
      id: 16,
      english: 'Pepper',
      russian: 'Перец',
      hebrew: 'פלפל',
      pronuncEng: 'pilpel',
      pronuncRus: 'пИльпель',
      category: 'grocery'
    },
  
    {
      id: 17,
      english: 'Eggplant / Aubergine',
      russian: 'Баклажан',
      hebrew: 'חציל',
      pronuncEng: 'khatzil',
      pronuncRus: 'хацИль',
      category: 'grocery'
    },
  
    {
      id: 18,
      english: 'Mushroom',
      russian: 'Гриб',
      hebrew: 'פטרייה',
      pronuncEng: 'pitriyA',
      pronuncRus: 'питриЯ',
      category: 'grocery'
    },
  
    {
      id: 19,
      english: 'Strawberry',
      russian: 'Клубника',
      hebrew: 'תות',
      pronuncEng: 'tut',
      pronuncRus: 'тут',
      category: 'grocery'
    },
  
    {
      id: 20,
      english: 'Cherry',
      russian: 'Вишня',
      hebrew: 'דובדבן',
      pronuncEng: 'duvdevAn',
      pronuncRus: 'дувдэвАн',
      category: 'grocery'
    },
  
    {
      id: 21,
      english: 'Raspberry',
      russian: 'Малина',
      hebrew: 'פטל אדום',
      pronuncEng: 'pEtel adOm',
      pronuncRus: 'пЕтэль адОм',
      category: 'grocery'
    },
  
    {
      id: 22,
      english: 'Blackberry',
      russian: 'Ежевика',
      hebrew: 'פטל שחור',
      pronuncEng: 'pEtel shakhOr',
      pronuncRus: 'пЕтэль шахОр',
      category: 'grocery'
    },
  
    {
      id: 23,
      english: 'Chicken (meat)',
      russian: 'Курица (курятина)',
      hebrew: 'עוף',
      pronuncEng: 'of',
      pronuncRus: 'оф',
      category: 'grocery'
    },
  
    {
      id: 24,
      english: 'Meat',
      russian: 'Мясо',
      hebrew: 'בשר',
      pronuncEng: 'basAr',
      pronuncRus: 'басАр',
      category: 'grocery'
    },
  
    {
      id: 25,
      english: 'Beef',
      russian: 'Говядина',
      hebrew: 'בקר',
      pronuncEng: 'bakAr',
      pronuncRus: 'бакАр',
      category: 'grocery'
    },
  
    {
      id: 26,
      english: 'Turkey (meat)',
      russian: 'Индейка (мясо)',
      hebrew: 'חודו',
      pronuncEng: 'khOdu',
      pronuncRus: 'хОду',
      category: 'grocery'
    },
  
    {
      id: 27,
      english: 'Beverage',
      russian: 'Напиток',
      hebrew: 'משקא',
      pronuncEng: 'mashkE',
      pronuncRus: 'машкЕ',
      category: 'grocery'
    },
  
    {
      id: 28,
      english: 'Beer',
      russian: 'Пиво',
      hebrew: 'בירה',
      pronuncEng: 'bira',
      pronuncRus: 'бИра',
      category: 'grocery'
    },
  
    {
      id: 29,
      english: 'Wine',
      russian: 'Вино',
      hebrew: 'יין',
      pronuncEng: 'yAin',
      pronuncRus: 'Яин',
      category: 'grocery'
    },
    
    {
      id: 30,
      english: 'Juice',
      russian: 'Сок',
      hebrew: 'מיץ',
      pronuncEng: 'mitz',
      pronuncRus: 'миц',
      category: 'grocery'
    },
    
    {
      id: 31,
      english: 'Water',
      russian: 'Вода',
      hebrew: 'מים',
      pronuncEng: 'mAim',
      pronuncRus: 'мАим',
      category: 'grocery'
    },
  
    {
      id: 32,
      english: 'Tea',
      russian: 'Чай',
      hebrew: 'תה',
      pronuncEng: 'te',
      pronuncRus: 'тэ',
      category: 'grocery'
    },
    
    {
      id: 33,
      english: 'Coffee',
      russian: 'Кофе',
      hebrew: 'קפה',
      pronuncEng: 'KafE',
      pronuncRus: 'кафЭ',
      category: 'grocery'
    },
    
    {
      id: 34,
      english: 'Bread',
      russian: 'Хлеб',
      hebrew: 'לחם',
      pronuncEng: 'lekhem',
      pronuncRus: 'лехем',
      category: 'grocery'
    },
    
    {
      id: 35,
      english: 'Sugar',
      russian: 'Сахар',
      hebrew: 'סוכר',
      pronuncEng: 'sukAr',
      pronuncRus: 'сукАр',
      category: 'grocery'
    },
    
    {
      id: 36,
      english: 'Salt',
      russian: 'Соль',
      hebrew: 'מלח',
      pronuncEng: 'mElakh',
      pronuncRus: 'мЕлах',
      category: 'grocery'
    },
    
    {
      id: 37,
      english: 'Cheese',
      russian: 'Сыр',
      hebrew: 'גבינה',
      pronuncEng: 'gvinA',
      pronuncRus: 'гвинА',
      category: 'grocery'
    },
  
    {
      id: 38,
      english: 'Egg',
      russian: 'яйцо',
      hebrew: 'ביצה',
      pronuncEng: 'beitzA',
      pronuncRus: 'бейцА',
      category: 'grocery'
    },
  
    {
      id: 39,
      english: 'Hummus',
      russian: 'Хумус',
      hebrew: 'חומוס',
      pronuncEng: 'humus',
      pronuncRus: 'хумус',
      category: 'grocery'
    },
  
    {
      id: 40,
      english: 'Spoon',
      russian: 'Ложка',
      hebrew: 'כף',
      pronuncEng: 'kaf',
      pronuncRus: 'каф',
      category: 'kitchen'
    },
  
    {
      id: 41,
      english: 'Teaspoon',
      russian: 'Чайная ложка',
      hebrew: 'כפית',
      pronuncEng: 'kapit',
      pronuncRus: 'капИт',
      category: 'kitchen'
    },
  
    {
      id: 42,
      english: 'Fork',
      russian: 'Вилка',
      hebrew: 'מזלג',
      pronuncEng: 'mazlEg',
      pronuncRus: 'мазлЕг',
      category: 'kitchen'
    },
  
    {
      id: 43,
      english: 'Knife',
      russian: 'Нож',
      hebrew: 'סכין',
      pronuncEng: 'sakin',
      pronuncRus: 'сакИн',
      category: 'kitchen'
    },
  
    {
      id: 44,
      english: 'Bowl',
      russian: 'Глубокая тарелка',
      hebrew: 'קערה',
      pronuncEng: 'kearA',
      pronuncRus: 'кеарА',
      category: 'kitchen'
    },
  
    {
      id: 45,
      english: 'Plate',
      russian: 'Плоская тарелка',
      hebrew: 'צלחת',
      pronuncEng: 'tzalAkhat',
      pronuncRus: 'цалАхат',
      category: 'kitchen'
    },
  
    {
      id: 46,
      english: 'Bottle',
      russian: 'Бутылка',
      hebrew: 'בקבוק',
      pronuncEng: 'bakbUk',
      pronuncRus: 'бакбУк',
      category: 'kitchen'
    },
  
    {
      id: 47,
      english: 'Cooking pot',
      russian: 'Кастрюля',
      hebrew: 'סיר',
      pronuncEng: 'sir',
      pronuncRus: 'сир',
      category: 'kitchen'
    },
    
      {
        id: 48,
        english: 'Ill, sick',
        russian: 'Больной',
        hebrew: 'חולה',
        pronuncEng: 'kholE',
        pronuncRus: 'холЕ',
        category: 'general'
      },
  
      {
        id: 49,
        english: 'I/You/He stand(s)',
        russian: 'Я/ты/он стою/стоишь/стоит',
        hebrew: 'עומד',
        pronuncEng: 'omEd',
        pronuncRus: 'омЭд',
        category: 'general'
      },
  
      {
        id: 50,
        english: 'I/You/She stands',
        russian: 'Я/ты/она стою/стоишь/стоит',
        hebrew: 'עומדת',
        pronuncEng: 'omEdet',
        pronuncRus: 'омЭдэт',
        category: 'general'
      },
  
      {
        id: 51,
        english: 'Lesson',
        russian: 'Урок',
        hebrew: 'שיעור',
        pronuncEng: 'shiUr',
        pronuncRus: 'шиУр',
        category: 'general'
      },
  
      {
        id: 52,
        english: 'Hot, warm',
        russian: 'Горячий, тёплый',
        hebrew: 'חם',
        pronuncEng: 'kham',
        pronuncRus: 'хам',
        category: 'general'
      },
  
      {
        id: 53,
        english: 'Also, as well',
        russian: 'Тоже, также',
        hebrew: 'גם',
        pronuncEng: 'gam',
        pronuncRus: 'гам',
        category: 'general'
      },
  
      {
        id: 54,
        english: 'Soldier (male)',
        russian: 'Солдат',
        hebrew: 'חייל',
        pronuncEng: 'khayAl',
        pronuncRus: 'хаЯль',
        category: 'profession'
      },
  
      {
        id: 55,
        english: 'Window',
        russian: 'Окно',
        hebrew: 'חלון',
        pronuncEng: 'khalOn',
        pronuncRus: 'халОн',
        category: 'house'
      },
  
      {
        id: 56,
        english: 'Table, desk',
        russian: 'Стол',
        hebrew: 'שולחן',
        pronuncEng: 'shulkhAn',
        pronuncRus: 'шульхАн',
        category: 'house'
      },
  
      {
        id: 57,
        english: 'Garden',
        russian: 'Сад',
        hebrew: 'גן',
        pronuncEng: 'gan',
        pronuncRus: 'ган',
        category: 'city'
      },
  
      {
        id: 58,
        english: 'Winter',
        russian: 'Зима',
        hebrew: 'חורף',
        pronuncEng: 'khOref',
        pronuncRus: 'хОрэф',
        category: 'time'
      },
  
      {
        id: 59,
        english: 'Spring',
        russian: 'Весна',
        hebrew: 'אביב',
        pronuncEng: 'aviv',
        pronuncRus: 'авИв',
        category: 'time'
      },
  
      {
        id: 60,
        english: 'Summer',
        russian: 'Лето',
        hebrew: 'קיץ',
        pronuncEng: 'kAitz',
        pronuncRus: 'кАиц',
        category: 'time'
      },
  
      {
        id: 61,
        english: 'Autumn',
        russian: 'Осень',
        hebrew: 'סתיו',
        pronuncEng: 'stav',
        pronuncRus: 'став',
        category: 'time'
      },
  
      {
        id: 62,
        english: 'I/You/He work(s)',
        russian: 'я/ты/он работаю/ешь/ет',
        hebrew: 'עובד',
        pronuncEng: 'ovEd',
        pronuncRus: 'овЭд',
        category: 'verb'
      },
  
      {
        id: 63,
        english: 'I/You/She work(s)',
        russian: 'я/ты/она работаю/ешь/ет',
        hebrew: 'עובדת',
        pronuncEng: 'ovEdet',
        pronuncRus: 'овЭдэт',
        category: 'verb'
      },
  
      {
        id: 64,
        english: 'We/You/They (m+f) work',
        russian: 'мы/вы/они работаем/ете/ют (м или м+ж)',
        hebrew: 'עובדים',
        pronuncEng: 'ovdim',
        pronuncRus: 'овдИм',
        category: 'verb'
      },
  
      {
        id: 65,
        english: 'We/You/They (f) work',
        russian: 'мы/вы/они работаем/ете/ют (ж)',
        hebrew: 'עובדות',
        pronuncEng: 'ovdOt',
        pronuncRus: 'овдОт',
        category: 'verb'
      },
  
      {
        id: 66,
        english: 'I worked',
        russian: 'Я работал',
        hebrew: 'עבדתי',
        pronuncEng: 'avAdeti',
        pronuncRus: 'авАдэти',
        category: 'verb'
      },
  
      {
        id: 67,
        english: 'You (sing. masc.) worked',
        russian: 'Ты работал',
        hebrew: 'עבדת',
        pronuncEng: 'avAdeta',
        pronuncRus: 'авАдэта',
        category: 'verb'
      },
  
      {
        id: 68,
        english: 'You (sing. fem.) worked',
        russian: 'Ты работала',
        hebrew: 'עבדת',
        pronuncEng: 'avAdet',
        pronuncRus: 'авАдэт',
        category: 'verb'
      },
  
      {
        id: 69,
        english: 'He worked',
        russian: 'Он работал',
        hebrew: 'עבד',
        pronuncEng: 'avAd',
        pronuncRus: 'авАд',
        category: 'verb'
      },
  
      {
        id: 70,
        english: 'She worked',
        russian: 'Она работала',
        hebrew: 'עבדה',
        pronuncEng: 'avdA',
        pronuncRus: 'авдА',
        category: 'verb'
      },
  
      {
        id: 71,
        english: 'We worked',
        russian: 'Мы работали',
        hebrew: 'עבדנו',
        pronuncEng: 'avAdnu',
        pronuncRus: 'авАдну',
        category: 'verb'
      },
  
      {
        id: 72,
        english: 'You (pl. masc.) worked',
        russian: 'Вы (м или м+ж) работали',
        hebrew: 'עבדתם',
        pronuncEng: 'avAdetem',
        pronuncRus: 'авАдэтэм',
        category: 'verb'
      },
  
      {
        id: 73,
        english: 'You (pl. fem.) worked',
        russian: 'Вы (ж.) работали',
        hebrew: 'עבדתן',
        pronuncEng: 'avAdeten',
        pronuncRus: 'авАдэтэн',
        category: 'verb'
      },
  
      {
        id: 74,
        english: 'They worked',
        russian: 'Они работали',
        hebrew: 'עבדו',
        pronuncEng: 'avdU',
        pronuncRus: 'авдУ',
        category: 'verb'
      },
      
      {
        id: 75,
        english: 'Heart',
        russian: 'Сердце',
        hebrew: 'לב',
        pronuncEng: 'lev',
        pronuncRus: 'лев',
        category: 'body'
      },
  
      {
        id: 76,
        english: 'Sure',
        russian: 'Точно, уверен',
        hebrew: 'בטח',
        pronuncEng: 'bEtakh',
        pronuncRus: 'бЕтах',
        category: 'adverb'
      },
  
      {
        id: 77,
        english: 'Small',
        russian: 'Маленький',
        hebrew: 'קטן',
        pronuncEng: 'katAn',
        pronuncRus: 'катАн',
        category: 'adjective'
      },
  
      {
        id: 78,
        english: 'Big',
        russian: 'Большой',
        hebrew: 'גדול',
        pronuncEng: 'gadOl',
        pronuncRus: 'гадОль',
        category: 'adjective'
      },
  
      {
        id: 79,
        english: 'Bag',
        russian: 'Сумка',
        hebrew: 'תיק',
        pronuncEng: 'tik',
        pronuncRus: 'тик',
        category: 'general'
      },
  
      {
        id: 80,
        english: 'Doctor',
        russian: 'Врач',
        hebrew: 'רופא',
        pronuncEng: 'rofE',
        pronuncRus: 'рофЭ',
        category: 'profession'
      },
  
      {
        id: 81,
        english: 'Chair',
        russian: 'Стул',
        hebrew: 'כיסא',
        pronuncEng: 'kisE',
        pronuncRus: 'кисЭ',
        category: 'general'
      },
  
      {
        id: 82,
        english: 'Book',
        russian: 'Книга',
        hebrew: 'ספר',
        pronuncEng: 'sEfer',
        pronuncRus: 'сЭфер',
        category: 'general'
      },
  
      {
        id: 83,
        english: 'Plane',
        russian: 'Самолёт',
        hebrew: 'מטוס',
        pronuncEng: 'matOs',
        pronuncRus: 'матОс',
        category: 'general'
      },
  
      {
        id: 84,
        english: 'Engineer',
        russian: 'Инженер',
        hebrew: 'מהנדס',
        pronuncEng: 'mehandEs',
        pronuncRus: 'меhандЭс',
        category: 'profession'
      },
  
      {
        id: 85,
        english: 'Page',
        russian: 'Страница',
        hebrew: 'עמוד',
        pronuncEng: 'amUd',
        pronuncRus: 'амУд',
        category: 'general'
      },
  
      {
        id: 86,
        english: 'Family',
        russian: 'Семья',
        hebrew: 'משפחה',
        pronuncEng: 'mishpakhA',
        pronuncRus: 'мишпахА',
        category: 'general'
      },
  
      {
        id: 87,
        english: 'Story',
        russian: 'Рассказ, история',
        hebrew: 'סיפור',
        pronuncEng: 'sipUr',
        pronuncRus: 'сипУр',
        category: 'general'
      },
  
      {
        id: 88,
        english: 'Now',
        russian: 'Сейчас',
        hebrew: 'עכשיו',
        pronuncEng: 'akhshAv',
        pronuncRus: 'ахшАв',
        category: 'adverb'
      },
  
      {
        id: 89,
        english: 'Letter (message)',
        russian: 'Письмо',
        hebrew: 'מכתב',
        pronuncEng: 'MikhtAv',
        pronuncRus: 'михтАв',
        category: 'general'
      },
  
      {
        id: 90,
        english: 'President',
        russian: 'Президент',
        hebrew: 'נשיא',
        pronuncEng: 'nasi',
        pronuncRus: 'насИ',
        category: 'profession'
      },
  
      {
        id: 91,
        english: 'Address',
        russian: 'Адрес',
        hebrew: 'כתובת',
        pronuncEng: 'ktOvet',
        pronuncRus: 'ктОвет',
        category: 'general'
      },
  
      {
        id: 92,
        english: 'Place, settlement',
        russian: 'Населённый пункт',
        hebrew: 'ישוב',
        pronuncEng: 'yishUv',
        pronuncRus: 'йишУв',
        category: 'general'
      },
  
      {
        id: 93,
        english: 'Zip code',
        russian: 'Почтовый индекс',
        hebrew: 'מיקוד',
        pronuncEng: 'mikUd',
        pronuncRus: 'микУд',
        category: 'general'
      },
  
      {
        id: 94,
        english: 'Red',
        russian: 'Красный',
        hebrew: 'אדום',
        pronuncEng: 'adOm',
        pronuncRus: 'адОм',
        category: 'color'
      },
  
      {
        id: 95,
        english: 'Orange',
        russian: 'Оранжевый',
        hebrew: 'כתום',
        pronuncEng: 'katOm',
        pronuncRus: 'катОм',
        category: 'color'
      },
  
      {
        id: 96,
        english: 'Yellow',
        russian: 'Жёлтый',
        hebrew: 'צהוב',
        pronuncEng: 'tzehOv',
        pronuncRus: 'цэhОв',
        category: 'color'
      },
  
      {
        id: 97,
        english: 'Green',
        russian: 'Зелёный',
        hebrew: 'ירוק',
        pronuncEng: 'yarOk',
        pronuncRus: 'ярОк',
        category: 'color'
      },
  
      {
        id: 98,
        english: 'Blue',
        russian: 'Синий',
        hebrew: 'כחול',
        pronuncEng: 'kakhOl',
        pronuncRus: 'кахОль',
        category: 'color'
      },
  
      {
        id: 99,
        english: 'Purple',
        russian: 'Малиновый',
        hebrew: 'סגול',
        pronuncEng: 'sagOl',
        pronuncRus: 'сагОль',
        category: 'color'
      },
  
      {
        id: 100,
        english: 'Pink',
        russian: 'Розовый',
        hebrew: 'ורוד',
        pronuncEng: 'varOd',
        pronuncRus: 'варОд',
        category: 'color'
      },
  
      {
        id: 101,
        english: 'Brown',
        russian: 'Коричневый',
        hebrew: 'חום',
        pronuncEng: 'khum',
        pronuncRus: 'хум',
        category: 'color'
      },
  
      {
        id: 102,
        english: 'Gray',
        russian: 'Серый',
        hebrew: 'אפור',
        pronuncEng: 'afOr',
        pronuncRus: 'афОр',
        category: 'color'
      },
  
      {
        id: 103,
        english: 'Black',
        russian: 'Чёрный',
        hebrew: 'שחור',
        pronuncEng: 'shakhOr',
        pronuncRus: 'шахОр',
        category: 'color'
      },
  
      {
        id: 104,
        english: 'White',
        russian: 'Белый',
        hebrew: 'לבן',
        pronuncEng: 'lavAn',
        pronuncRus: 'лавАн',
        category: 'color'
      },
  
      {
        id: 105,
        english: 'Daughters',
        russian: 'Дочери',
        hebrew: 'בנות',
        pronuncEng: 'banOt',
        pronuncRus: 'банОт',
        category: 'family'
      },
  
      {
        id: 106,
        english: 'Rule (noun)',
        russian: 'Правило',
        hebrew: 'כלל',
        pronuncEng: 'klal',
        pronuncRus: 'кляль',
        category: 'general'
      },
  
      {
        id: 107,
        english: 'Usually',
        russian: 'Обычно',
        hebrew: 'בדרך כלל',
        pronuncEng: 'bedErekh klal',
        pronuncRus: 'бедЭрех кляль',
        category: 'adverb'
      },
  
      {
        id: 108,
        english: 'I',
        russian: 'Я',
        hebrew: 'אני',
        pronuncEng: 'ani',
        pronuncRus: 'анИ',
        category: 'pronoun'
      },
  
      {
        id: 109,
        english: 'You (male sing.)',
        russian: 'Ты (муж.)',
        hebrew: 'אתה',
        pronuncEng: 'atA',
        pronuncRus: 'атА',
        category: 'pronoun'
      },
  
      {
        id: 110,
        english: 'You (fem. sing.)',
        russian: 'Ты (жен.)',
        hebrew: 'את',
        pronuncEng: 'at',
        pronuncRus: 'ат',
        category: 'pronoun'
      },
  
      {
        id: 111,
        english: 'He',
        russian: 'Он',
        hebrew: 'הוא',
        pronuncEng: 'hu',
        pronuncRus: 'у',
        category: 'pronoun'
      },
  
      {
        id: 112,
        english: 'She',
        russian: 'Она',
        hebrew: 'היא',
        pronuncEng: 'hi',
        pronuncRus: 'и',
        category: 'pronoun'
      },
  
      {
        id: 113,
        english: 'We',
        russian: 'Мы',
        hebrew: 'אנחנו',
        pronuncEng: 'anAkhnu',
        pronuncRus: 'анАхну',
        category: 'pronoun'
      },
  
      {
        id: 114,
        english: 'You (male or combined plural)',
        russian: 'Вы (муж. множ.)',
        hebrew: 'אתם',
        pronuncEng: 'atEm',
        pronuncRus: 'атЭм',
        category: 'pronoun'
      },
  
      {
        id: 115,
        english: 'You (female plural)',
        russian: 'Вы (жен. множ.)',
        hebrew: 'אתן',
        pronuncEng: 'atEn',
        pronuncRus: 'атЭн',
        category: 'pronoun'
      },
  
      {
        id: 116,
        english: 'They (male or combined)',
        russian: 'Они (муж. множ.)',
        hebrew: 'הם',
        pronuncEng: 'hem',
        pronuncRus: 'hэм',
        category: 'pronoun'
      },
  
      {
        id: 117,
        english: 'They (female)',
        russian: 'Они (жен. множ.)',
        hebrew: 'הן',
        pronuncEng: 'hen',
        pronuncRus: 'hэн',
        category: 'pronoun'
      },
  
      {
        id: 118,
        english: 'Board, table (chart)',
        russian: 'доска, таблица',
        hebrew: 'לוח',
        pronuncEng: 'lUakh',
        pronuncRus: 'лУах',
        category: 'general'
      },
  
      {
        id: 119,
        english: 'Example',
        russian: 'пример',
        hebrew: 'דוגמה',
        pronuncEng: 'dugmA',
        pronuncRus: 'дугмА',
        category: 'general'
      },
  
      {
        id: 120,
        english: 'Dictation',
        russian: 'диктант',
        hebrew: 'כתיבה',
        pronuncEng: 'ktivA',
        pronuncRus: 'ктивА',
        category: 'general'
      },
  
      {
        id: 121,
        english: 'Flower',
        russian: 'цветок',
        hebrew: 'פרח',
        pronuncEng: 'pEreh',
        pronuncRus: 'пЕрех',
        category: 'general'
      },
  
      {
        id: 122,
        english: 'Soup',
        russian: 'суп',
        hebrew: 'מרק',
        pronuncEng: 'marAk',
        pronuncRus: 'марАк',
        category: 'grocery'
      },
  
      {
        id: 123,
        english: 'Male',
        russian: 'мужской род',
        hebrew: 'זכר',
        pronuncEng: 'zakhAr',
        pronuncRus: 'захАр',
        category: 'general'
      },
  
      {
        id: 124,
        english: 'Female',
        russian: 'женский род',
        hebrew: 'נקבה',
        pronuncEng: 'nekevA',
        pronuncRus: 'нэкевА',
        category: 'general'
      },
  
      {
        id: 125,
        english: 'Plural male or combined',
        russian: 'множественное число мужского рода (или общее)',
        hebrew: 'רבים',
        pronuncEng: 'ravim',
        pronuncRus: 'равИм',
        category: 'general'
      },
  
      {
        id: 126,
        english: 'Plural female',
        russian: 'множественное число женского рода',
        hebrew: 'רבות',
        pronuncEng: 'ravOt',
        pronuncRus: 'равОт',
        category: 'general'
      },
  
      {
        id: 127,
        english: 'Neighbours',
        russian: 'соседи',
        hebrew: 'שכנים',
        pronuncEng: 'shkhenim',
        pronuncRus: 'шхенИм',
        category: 'general'
      },
  
      {
        id: 128,
        english: 'Relatives',
        russian: 'родственники',
        hebrew: 'קרובים',
        pronuncEng: 'kruvim',
        pronuncRus: 'крувИм',
        category: 'general'
      },
  
      {
        id: 129,
        english: '(I) can',
        russian: '(я) могу',
        hebrew: 'יכול',
        pronuncEng: 'yekhOl',
        pronuncRus: 'йехОль',
        category: 'general'
      },
  
      {
        id: 130,
        english: 'Note, small letter',
        russian: 'записка',
        hebrew: 'פתק',
        pronuncEng: 'pEtek',
        pronuncRus: 'пЕтэк',
        category: 'general'
      },
  
      {
        id: 131,
        english: 'Manager',
        russian: 'менеджер, начальник',
        hebrew: 'מנהל',
        pronuncEng: 'menahEl',
        pronuncRus: 'менаЭль',
        category: 'profession'
      },
  
      {
        id: 132,
        english: 'Problem',
        russian: 'проблема',
        hebrew: 'בעיה',
        pronuncEng: "be'aya",
        pronuncRus: "бэ'айя",
        category: 'general'
      },
  
      {
        id: 133,
        english: 'Clerk (m)',
        russian: 'клерк',
        hebrew: 'פקיד',
        pronuncEng: 'pakid',
        pronuncRus: 'пакИд',
        category: 'profession'
      },
  
      {
        id: 134,
        english: 'Intermission',
        russian: 'перерыв',
        hebrew: 'הפסקה',
        pronuncEng: 'afsakA',
        pronuncRus: 'афсакА',
        category: 'general'
      },
  
      {
        id: 135,
        english: 'Later',
        russian: 'позже',
        hebrew: 'אחר כך',
        pronuncEng: 'Akhar kakh',
        pronuncRus: 'Ахар ках',
        category: 'adverb'
      },
  
      {
        id: 136,
        english: 'Right (side)',
        russian: 'правый',
        hebrew: 'ימינה',
        pronuncEng: 'yamina',
        pronuncRus: 'ямИна',
        category: 'general'
      },
  
      {
        id: 137,
        english: 'Left',
        russian: 'левый',
        hebrew: 'שמולה',
        pronuncEng: 'smOla',
        pronuncRus: 'смОла',
        category: 'general'
      },
  
      {
        id: 138,
        english: 'Talk, conversation',
        russian: 'разговор',
        hebrew: 'שיחה',
        pronuncEng: 'sikhA',
        pronuncRus: 'сихА',
        category: 'general'
      },
  
      {
        id: 139,
        english: 'Party',
        russian: 'вечеринка',
        hebrew: 'מסיבה',
        pronuncEng: 'mesibA',
        pronuncRus: 'месибА',
        category: 'general'
      },
  
      {
        id: 140,
        english: 'Army',
        russian: 'армия',
        hebrew: 'צבא',
        pronuncEng: 'tzava',
        pronuncRus: 'цава',
        category: 'general'
      },
  
      {
        id: 141,
        english: 'Secretary (m)',
        russian: 'секретарь',
        hebrew: 'מזכיר',
        pronuncEng: 'mazkir',
        pronuncRus: 'мазкИр',
        category: 'profession'
      },
  
      {
        id: 142,
        english: 'Singer',
        russian: 'певец',
        hebrew: 'זמר',
        pronuncEng: 'zamAr',
        pronuncRus: 'замАр',
        category: 'profession'
      },
  
      {
        id: 143,
        english: 'More',
        russian: 'ещё',
        hebrew: 'עוד',
        pronuncEng: 'od',
        pronuncRus: 'од',
        category: 'adverb'
      },
  
      {
        id: 144,
        english: 'Quickly, fast',
        russian: 'быстро',
        hebrew: 'מהר',
        pronuncEng: 'mahEr',
        pronuncRus: 'маhэр',
        category: 'adverb'
      },
  
      {
        id: 145,
        english: 'More than',
        russian: 'более, больше',
        hebrew: 'יותר',
        pronuncEng: 'yotEr',
        pronuncRus: 'йотЭр',
        category: 'adverb'
      },
  
      {
        id: 146,
        english: 'Slowly',
        russian: 'медленно',
        hebrew: 'לאט',
        pronuncEng: 'leAt',
        pronuncRus: 'леАт',
        category: 'adverb'
      },
  
      {
        id: 147,
        english: 'Ball or pill',
        russian: 'мяч, шар (и таблетка тоже)',
        hebrew: 'כדור',
        pronuncEng: 'kadUr',
        pronuncRus: 'кадУр',
        category: 'general'
      },
  
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
        id: 149,
        english: 'To recommend (infinitive)',
        russian: 'рекомендовать (инфинитив)',
        hebrew: 'להמליץ',
        pronuncEng: 'lehamlitz',
        pronuncRus: 'леhамлИц',
        category: 'hifil'
      },
  
      {
        id: 150,
        english: 'Recommend (present time, m)',
        russian: 'рекомендую (м)',
        hebrew: 'ממליץ',
        pronuncEng: 'mamlitz',
        pronuncRus: 'мамлИц',
        category: 'hifil'
      },
  
      {
        id: 151,
        english: 'I recommended',
        russian: 'Я рекомендовал(а)',
        hebrew: 'המלצתי',
        pronuncEng: 'himlAtzti',
        pronuncRus: 'hимлАцти',
        category: 'hifil'
      },
  
      {
        id: 152,
        english: 'He recommended',
        russian: 'Он рекомендовал',
        hebrew: 'המליץ',
        pronuncEng: 'himlitz',
        pronuncRus: 'hимлИц',
        category: 'hifil'
      },
  
      {
        id: 153,
        english: 'We recommended',
        russian: 'Мы рекомендовали',
        hebrew: 'המלצנו',
        pronuncEng: 'himlAtznu',
        pronuncRus: 'hимлАцну',
        category: 'hifil'
      },
  
      {
        id: 154,
        english: 'You (pl.m) recommended',
        russian: 'Вы (мн.м) рекомендовали',
        hebrew: 'המלצתם',
        pronuncEng: 'himlatztem',
        pronuncRus: 'hимлАцтэм',
        category: 'hifil'
      },
  
      {
        id: 155,
        english: 'They recommended',
        russian: 'Они рекомендовали',
        hebrew: 'המליצו',
        pronuncEng: 'himlitzu',
        pronuncRus: 'hимлицУ',
        category: 'hifil'
      },
  
      {
        id: 156,
        english: 'I will recommend',
        russian: 'Я буду рекомендовать',
        hebrew: 'אמליץ',
        pronuncEng: 'amlitz',
        pronuncRus: 'амлИц',
        category: 'hifil'
      },
  
      {
        id: 157,
        english: 'You (sing.m) will recommend',
        russian: 'Ты (м) будешь рекомендовать',
        hebrew: 'תמליץ',
        pronuncEng: 'tamlitz',
        pronuncRus: 'тамлИц',
        category: 'hifil'
      },
  
      {
        id: 158,
        english: 'You (sing.f) will recommend',
        russian: 'Ты (ж) будешь рекомендовать',
        hebrew: 'תמליצי',
        pronuncEng: 'tamlitzi',
        pronuncRus: 'тамлицИ',
        category: 'hifil'
      },
  
      {
        id: 159,
        english: 'He will recommend',
        russian: 'Он будет рекомендовать',
        hebrew: 'ימליץ',
        pronuncEng: 'yamlitz',
        pronuncRus: 'ямлИц',
        category: 'hifil'
      },
  
      {
        id: 160,
        english: 'She will recommend',
        russian: 'Она будет рекомендовать',
        hebrew: 'תמליץ',
        pronuncEng: 'tamlitz',
        pronuncRus: 'тамлИц',
        category: 'hifil'
      },
  
      {
        id: 161,
        english: 'We will recommend',
        russian: 'Мы будем рекомендовать',
        hebrew: 'נמליץ',
        pronuncEng: 'namlitz',
        pronuncRus: 'намлИц',
        category: 'hifil'
      },
  
      {
        id: 162,
        english: 'You (pl.m) will recommend',
        russian: 'Вы (мн.м) будете рекомендовать',
        hebrew: 'תמליצו',
        pronuncEng: 'tamlitzu',
        pronuncRus: 'тамлицУ',
        category: 'hifil'
      },
  
      {
        id: 163,
        english: 'You (pl.f) will recommend',
        russian: 'Вы (мн.ж) будете рекомендовать',
        hebrew: 'ימליצו',
        pronuncEng: 'yamlitzu',
        pronuncRus: 'ямлицУ',
        category: 'hifil'
      },
  
      {
        id: 164,
        english: 'Something',
        russian: 'Что-то, что-либо',
        hebrew: 'משהו',
        pronuncEng: 'mAshehu',
        pronuncRus: 'мАшеhу',
        category: 'general'
      },
  
      {
        id: 165,
        english: 'Clock, watch',
        russian: 'Часы',
        hebrew: 'שעון',
        pronuncEng: 'shaOn',
        pronuncRus: 'шаОн',
        category: 'general'
      },
  
      {
        id: 166,
        english: 'To begin (infinitive)',
        russian: 'Начинать (инфинитив)',
        hebrew: 'להתחיל',
        pronuncEng: 'lehatkhil',
        pronuncRus: 'леатхИль',
        category: 'hifil'
      },
  
      {
        id: 167,
        english: '(I/you/he) begin(s)',
        russian: 'Начинаю (наст.вр.)',
        hebrew: 'מתחיל',
        pronuncEng: 'matkhil',
        pronuncRus: 'матхИль',
        category: 'hifil'
      },
  
      {
        id: 168,
        english: 'Gift',
        russian: 'Подарок',
        hebrew: 'מתנה',
        pronuncEng: 'matanA',
        pronuncRus: 'матанА',
        category: 'general'
      },
  
      {
        id: 169,
        english: 'Imperative',
        russian: 'Повелительное наклонение',
        hebrew: 'ציווי',
        pronuncEng: 'tzivUi',
        pronuncRus: 'цивУй',
        category: 'general'
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
        id: 171,
        english: 'Cute',
        russian: 'Милый',
        hebrew: 'חמוד',
        pronuncEng: 'khamUd',
        pronuncRus: 'хамУд',
        category: 'adjective'
      },
  
      {
        id: 172,
        english: 'Language',
        russian: 'Язык (лингв.)',
        hebrew: 'שפה',
        pronuncEng: 'safa',
        pronuncRus: 'сафА',
        category: 'general'
      },
  
      {
        id: 173,
        english: 'Sentence',
        russian: 'Предложение, суд',
        hebrew: 'משפט',
        pronuncEng: 'mishpAt',
        pronuncRus: 'мишпАт',
        category: 'general'
      },
  
      {
        id: 174,
        english: 'Half',
        russian: 'Половина',
        hebrew: 'חצי',
        pronuncEng: 'khetzi',
        pronuncRus: 'хЭци',
        category: 'general'
      },
  
      {
        id: 175,
        english: 'Quarter',
        russian: 'Четверть',
        hebrew: 'רבע',
        pronuncEng: 'reva',
        pronuncRus: 'рева',
        category: 'general'
      },
  
      {
        id: 176,
        english: 'Around, about, circa',
        russian: 'Около, приблизительно',
        hebrew: 'בערך',
        pronuncEng: 'beErekh',
        pronuncRus: 'беЭрех',
        category: 'adverb'
      },
  
      {
        id: 177,
        english: 'Late',
        russian: 'Поздно',
        hebrew: 'מאוחר',
        pronuncEng: 'meukhAr',
        pronuncRus: 'меухАр',
        category: 'adverb'
      },
  
      {
        id: 178,
        english: 'Early',
        russian: 'Рано',
        hebrew: 'מוקדם',
        pronuncEng: 'mukdAm',
        pronuncRus: 'мукдАм',
        category: 'adverb'
      },
  
      {
        id: 179,
        english: 'Really',
        russian: 'Реально, действительно',
        hebrew: 'באמת',
        pronuncEng: 'beEmet',
        pronuncRus: 'беЭмет',
        category: 'adverb'
      },
  
      {
        id: 180,
        english: 'Different, other',
        russian: 'Другой',
        hebrew: 'אחר',
        pronuncEng: 'akhEr',
        pronuncRus: 'ахЭр',
        category: 'general'
      },
  
      {
        id: 181,
        english: 'Date of birth',
        russian: 'Дата рождения',
        hebrew: 'תאריך לידה',
        pronuncEng: 'taarikh leida',
        pronuncRus: 'таарИх лейдА',
        category: 'general'
      },
  
      {
        id: 182,
        english: 'Gender',
        russian: 'Пол (гендер)',
        hebrew: 'מין',
        pronuncEng: 'min',
        pronuncRus: 'мин',
        category: 'general'
      },
  
      {
        id: 183,
        english: 'Like, as',
        russian: 'Как, такой как',
        hebrew: 'כמו',
        pronuncEng: 'kmo',
        pronuncRus: 'кмо',
        category: 'adverb'
      },
  
      {
        id: 184,
        english: 'War',
        russian: 'Война',
        hebrew: 'מלחמה',
        pronuncEng: 'milkhamA',
        pronuncRus: 'мильхамА',
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
        id: 186,
        english: 'Key',
        russian: 'Ключ',
        hebrew: 'מפתח',
        pronuncEng: 'maftEakh',
        pronuncRus: 'мафтЭах',
        category: 'general'
      },
  
      {
        id: 187,
        english: 'Dream',
        russian: 'Мечта',
        hebrew: 'חלום',
        pronuncEng: 'khalOm',
        pronuncRus: 'халОм',
        category: 'general'
      },
  
      {
        id: 188,
        english: 'To dream (infinitive)',
        russian: 'Мечтать (инфинитив)',
        hebrew: 'לחלום',
        pronuncEng: 'lakhalOm',
        pronuncRus: 'лахалОм',
        category: 'paal'
      },
  
      {
        id: 189,
        english: 'To dream (present, single, m)',
        russian: 'Мечтать (наст.вр, ед.число)',
        hebrew: 'חולם',
        pronuncEng: 'kholEm',
        pronuncRus: 'холЕм',
        category: 'paal'
      },
  
      {
        id: 190,
        english: 'He dreamed',
        russian: 'Он мечтал',
        hebrew: 'חלם',
        pronuncEng: 'khalAm',
        pronuncRus: 'халАм',
        category: 'paal'
      },
  
      {
        id: 191,
        english: 'I will dream',
        russian: 'Я буду мечтать',
        hebrew: 'אחלום',
        pronuncEng: 'ekhelOm',
        pronuncRus: 'эхелОм',
        category: 'paal'
      },
  
      {
        id: 192,
        english: 'You (m) will dream',
        russian: 'Ты (м.) будешь мечтать',
        hebrew: 'תחלום',
        pronuncEng: 'takhalOm',
        pronuncRus: 'тахалОм',
        category: 'paal'
      },
  
      {
        id: 193,
        english: 'You (f) will dream',
        russian: 'Ты (ж.) будешь мечтать',
        hebrew: 'תחלמי',
        pronuncEng: 'takhalmi',
        pronuncRus: 'тахальмИ',
        category: 'paal'
      },
  
      {
        id: 194,
        english: 'He will dream',
        russian: 'Он будет мечтать',
        hebrew: 'יחלום',
        pronuncEng: 'yakhalOm',
        pronuncRus: 'яхалОм',
        category: 'paal'
      },
  
      {
        id: 195,
        english: 'She will dream',
        russian: 'Она будет мечтать',
        hebrew: 'תחלום',
        pronuncEng: 'takhalOm',
        pronuncRus: 'тахалОм',
        category: 'paal'
      },
  
      {
        id: 196,
        english: 'We will dream',
        russian: 'Мы будем мечтать',
        hebrew: 'נחלום',
        pronuncEng: 'nakhalOm',
        pronuncRus: 'нахалОм',
        category: 'paal'
      },
  
      {
        id: 197,
        english: 'You (pl.) will dream',
        russian: 'Вы будете мечтать',
        hebrew: 'תחלמו',
        pronuncEng: 'takhalmU',
        pronuncRus: 'тахальмУ',
        category: 'paal'
      },
  
      {
        id: 198,
        english: 'They will dream',
        russian: 'Они будут мечтать',
        hebrew: 'יחלמו',
        pronuncEng: 'yakhalmU',
        pronuncRus: 'яхальмУ',
        category: 'paal'
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
        id: 201,
        english: 'Symbol, sign (not "semel")',
        russian: 'Символ, знак (но не эмблема)',
        hebrew: 'סימן',
        pronuncEng: 'simAn',
        pronuncRus: 'симАн',
        category: 'general'
      },
  
      {
        id: 202,
        english: 'Nose',
        russian: 'Нос',
        hebrew: 'אף',
        pronuncEng: 'af',
        pronuncRus: 'аф',
        category: 'body'
      },
  
      {
        id: 203,
        english: 'Ear',
        russian: 'Ухо',
        hebrew: 'אוזן',
        pronuncEng: 'Ozen',
        pronuncRus: 'Озэн',
        category: 'body'
      },
  
      {
        id: 204,
        english: 'Neck',
        russian: 'Шея',
        hebrew: 'צוואר',
        pronuncEng: 'tzavAr',
        pronuncRus: 'цавАр',
        category: 'body'
      },
  
      {
        id: 205,
        english: 'Tooth',
        russian: 'Зуб',
        hebrew: 'שן',
        pronuncEng: 'shen',
        pronuncRus: 'шен',
        category: 'body'
      },
  
      {
        id: 206,
        english: 'Throat',
        russian: 'Горло',
        hebrew: 'גרון',
        pronuncEng: 'garOn',
        pronuncRus: 'гарОн',
        category: 'body'
      },
  
      {
        id: 207,
        english: 'Stomach',
        russian: 'Живот',
        hebrew: 'בטן',
        pronuncEng: 'bEten',
        pronuncRus: 'бЕтэн',
        category: 'body'
      },
  
      {
        id: 208,
        english: 'Back',
        russian: 'Спина',
        hebrew: 'גב',
        pronuncEng: 'gav',
        pronuncRus: 'гав',
        category: 'body'
      },
  
      {
        id: 209,
        english: 'Finger',
        russian: 'Палец',
        hebrew: 'אצבע',
        pronuncEng: 'Etzba',
        pronuncRus: 'Эцба',
        category: 'body'
      },
  
      {
        id: 210,
        english: 'Pain',
        russian: 'Боль',
        hebrew: 'כאב',
        pronuncEng: 'keEv',
        pronuncRus: 'кэЕв',
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
        id: 212,
        english: 'Marrow, zucchini, courgette',
        russian: 'Кабачок',
        hebrew: 'קישוא',
        pronuncEng: 'kishU',
        pronuncRus: 'кишУ',
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
        id: 214,
        english: 'Pumpkin',
        russian: 'Тыква',
        hebrew: 'דלעת',
        pronuncEng: 'dlAat',
        pronuncRus: 'длАат',
        category: 'grocery'
      },
  
      {
        id: 215,
        english: 'Cauliflower',
        russian: 'Цветная капуста',
        hebrew: 'כרובית',
        pronuncEng: 'kruvit',
        pronuncRus: 'крувИт',
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
        id: 217,
        english: 'Pear',
        russian: 'Груша',
        hebrew: 'אגס',
        pronuncEng: 'agAs',
        pronuncRus: 'агАс',
        category: 'grocery'
      },
  
      {
        id: 218,
        english: 'Grapes',
        russian: 'Виноград',
        hebrew: 'ענבים',
        pronuncEng: 'anavim',
        pronuncRus: 'анавИм',
        category: 'grocery'
      },
  
      {
        id: 219,
        english: 'Beet',
        russian: 'Свёкла',
        hebrew: 'סלק',
        pronuncEng: 'sElek',
        pronuncRus: 'сЭлек',
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
        id: 221,
        english: 'Healthy',
        russian: 'Здоровый',
        hebrew: 'בריא',
        pronuncEng: 'bari',
        pronuncRus: 'барИ',
        category: 'adjective'
      },
  
      {
        id: 222,
        english: 'Doctor',
        russian: 'Врач',
        hebrew: 'רופא',
        pronuncEng: "rofE",
        pronuncRus: "рофЭ",
        category: 'profession'
      },
  
      {
        id: 223,
        english: 'Family doctor (fem.)',
        russian: 'Семейный доктор (ж.)',
        hebrew: 'רופאת משפחה',
        pronuncEng: 'rofAt mishpakhA',
        pronuncRus: 'рофАт мишпахА',
        category: 'profession'
      },
  
      {
        id: 224,
        english: 'Dentist (m.)',
        russian: 'Стоматолог (м.)',
        hebrew: 'רופא שיניים',
        pronuncEng: 'rofe sheinAim',
        pronuncRus: 'рофЭ шиинАим',
        category: 'profession'
      },
  
      {
        id: 225,
        english: 'Otolaryngologist',
        russian: 'Отоларинголог',
        hebrew: 'רופא אא"ג',
        pronuncEng: "rofe a'ag",
        pronuncRus: 'рофЭ а-аг',
        category: 'profession'
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
        id: 227,
        english: 'Dermatologist',
        russian: 'Дерматолог',
        hebrew: 'רופא עור',
        pronuncEng: 'rofe or',
        pronuncRus: 'рофэ ор',
        category: 'profession'
      },
  
      {
        id: 228,
        english: 'Smartphone',
        russian: 'Смартфон',
        hebrew: 'טלפון חכם',
        pronuncEng: 'telefon khakhAm',
        pronuncRus: 'тэлэфон хахАм',
        category: 'general'
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
        id: 230,
        english: 'Never',
        russian: 'Никогда',
        hebrew: 'אף פעם לא',
        pronuncEng: 'af paAm',
        pronuncRus: 'аф паАм',
        category: 'adverb'
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
        id: 232,
        english: 'Secret',
        russian: 'Секрет',
        hebrew: 'סוד',
        pronuncEng: 'sod',
        pronuncRus: 'сод',
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
        id: 234,
        english: 'Soft, fluffy',
        russian: 'Мягкий, пушистый',
        hebrew: 'רך',
        pronuncEng: 'rakh',
        pronuncRus: 'рах',
        category: 'adjective'
      },
  
      {
        id: 235,
        english: 'Less',
        russian: 'Меньше',
        hebrew: 'פחות',
        pronuncEng: 'pakhOt',
        pronuncRus: 'пахОт',
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
        id: 237,
        english: 'Season',
        russian: 'Сезон, время года',
        hebrew: 'עונה',
        pronuncEng: 'onA',
        pronuncRus: 'онА',
        category: 'time'
      },
  
      {
        id: 238,
        english: 'Vacation, freedom',
        russian: 'Отпуск, каникулы',
        hebrew: 'חופשה',
        pronuncEng: 'khufshA',
        pronuncRus: 'хуфшА',
        category: 'general'
      },
  
      {
        id: 239,
        english: 'Seasons of the year',
        russian: 'Времена года (словосочетание)',
        hebrew: 'עונות השנה',
        pronuncEng: 'onOt ha-shanA',
        pronuncRus: 'онОт а-шанА',
        category: 'time'
      },
  
      {
        id: 240,
        english: 'Exactly',
        russian: 'Точно, ровно, в точности',
        hebrew: 'בדיוק',
        pronuncEng: 'bediyUk',
        pronuncRus: 'бедиЮк',
        category: 'adverb'
      },
  
      {
        id: 241,
        english: 'On time',
        russian: 'Вовремя',
        hebrew: 'בזמן',
        pronuncEng: 'be-zmAn',
        pronuncRus: 'бе-зман',
        category: 'adverb'
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
        id: 243,
        english: 'Test, exam',
        russian: 'Тест, контрольная работа',
        hebrew: 'מבחן',
        pronuncEng: 'mivkhAn',
        pronuncRus: 'мивхАн',
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
        id: 245,
        english: 'Gardener',
        russian: 'Садовник',
        hebrew: 'גנן',
        pronuncEng: 'ganAn',
        pronuncRus: 'ганАн',
        category: 'profession'
      },
  
      {
        id: 246,
        english: 'Plan, program',
        russian: 'План, программа',
        hebrew: 'תוכנית',
        pronuncEng: 'tokhnit',
        pronuncRus: 'тохнИт',
        category: 'general'
      },
  
      {
        id: 247,
        english: 'Scrambled egg',
        russian: 'Омлет, взболтанное яйцо',
        hebrew: 'ביצה מקושקשת',
        pronuncEng: 'beitzA mekushkEshet',
        pronuncRus: 'бейцА мекушкЕшет',
        category: 'grocery'
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
        id: 249,
        english: 'To visit (inf.)',
        russian: 'посещать (инфинитив)',
        hebrew: 'לבקר',
        pronuncEng: 'levakEr',
        pronuncRus: 'левакЭр',
        category: 'piel'
      },
  
      {
        id: 250,
        english: 'I/you visit (sing. masc.)',
        russian: 'Посещать (1 лицо, ед.ч, м.р.)',
        hebrew: 'מבקר',
        pronuncEng: 'mevakEr',
        pronuncRus: 'мевакЭр',
        category: 'piel'
      },
  
      {
        id: 251,
        english: 'He visited',
        russian: 'Он посещал/посетил',
        hebrew: 'בקר',
        pronuncEng: 'bikEr',
        pronuncRus: 'бикЭр',
        category: 'piel'
      },
  
      {
        id: 252,
        english: 'I visited',
        russian: 'Я посещал/посетил',
        hebrew: 'בקרתי',
        pronuncEng: 'bikArti',
        pronuncRus: 'бикАрти',
        category: 'piel'
      },
  
      {
        id: 253,
        english: 'I will visit',
        russian: 'Я буду посещать',
        hebrew: 'אבקר',
        pronuncEng: 'avakEr',
        pronuncRus: 'авакЭр',
        category: 'piel'
      },
  
      {
        id: 254,
        english: 'To fly (inf.)',
        russian: 'Летать (инфинитив)',
        hebrew: 'לטוס',
        pronuncEng: 'latUs',
        pronuncRus: 'латУс',
        category: 'paal'
      },
  
      {
        id: 255,
        english: 'I/you fly (masc)',
        russian: 'Летать (ед.ч., м.р.)',
        hebrew: 'טס',
        pronuncEng: 'tas',
        pronuncRus: 'тас',
        category: 'paal'
      },
  
      {
        id: 256,
        english: 'I flied',
        russian: '(Я) летал',
        hebrew: 'טסתי',
        pronuncEng: 'tAsti',
        pronuncRus: 'тАсти',
        category: 'paal'
      },
  
      {
        id: 257,
        english: 'I will fly',
        russian: 'Буду летать',
        hebrew: 'אטוס',
        pronuncEng: 'atUs',
        pronuncRus: 'атУс',
        category: 'paal'
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
        id: 259,
        english: 'One day (single word)',
        russian: 'Один день (одним словом)',
        hebrew: 'יממה',
        pronuncEng: 'yemamA',
        pronuncRus: 'йемамА',
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
        id: 261,
        english: 'Protein',
        russian: 'Белок',
        hebrew: 'חלבון',
        pronuncEng: 'khalvOn',
        pronuncRus: 'хальвОн',
        category: 'grocery'
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
  
      {
        id: 265,
        english: 'Buckwheat',
        russian: 'Гречка',
        hebrew: 'כוסמת',
        pronuncEng: 'kusEmet',
        pronuncRus: 'кусЭмет',
        category: 'grocery'
      },
  
      {
        id: 266,
        english: 'Best regards, ...',
        russian: 'C уважением, ...',
        hebrew: 'בברכה',
        pronuncEng: 'bibrakhA',
        pronuncRus: 'бибрахА',
        category: 'general'
      },
  
      {
        id: 267,
        english: 'To worry (inf.)',
        russian: 'Волноваться, переживать (инфинитив)',
        hebrew: 'לדאוג',
        pronuncEng: "lid'Og",
        pronuncRus: "лид'Ог",
        category: 'paal'
      },
  
      {
        id: 268,
        english: 'I/You worry (masc)',
        russian: 'Волноваться, переживать (ед.ч., м.р)',
        hebrew: 'דואג',
        pronuncEng: 'doEg',
        pronuncRus: 'доЭг',
        category: 'paal'
      },
  
      {
        id: 269,
        english: 'He worried',
        russian: 'Он волновался, он переживал',
        hebrew: 'דאג',
        pronuncEng: "da'Ag",
        pronuncRus: 'даАг',
        category: 'paal'
      },
  
      {
        id: 270,
        english: 'I will worry',
        russian: 'Я буду волноваться/переживать',
        hebrew: 'אדאג',
        pronuncEng: "ed'Ag",
        pronuncRus: "эд'Аг",
        category: 'paal'
      },
  
      {
        id: 271,
        english: 'To increase / to expand (infinitive)',
        russian: 'Увеличить (инфинитив)',
        hebrew: 'להגדיל',
        pronuncEng: 'lehagdil',
        pronuncRus: 'леhагдИль',
        category: 'hifil'
      },
  
      {
        id: 272,
        english: 'I/You increase/expand (masc.)',
        russian: 'Увеличить (наст.вр., ед.ч., м.р.)',
        hebrew: 'מגדיל',
        pronuncEng: 'magdil',
        pronuncRus: 'магдИль',
        category: 'hifil'
      },
  
      {
        id: 273,
        english: 'I increased/expanded',
        russian: '(Я) увеличил',
        hebrew: 'הגדלתי',
        pronuncEng: 'higdAlti',
        pronuncRus: 'хигдАльти',
        category: 'hifil'
      },
  
      {
        id: 274,
        english: 'He increased/expanded',
        russian: '(Он) увеличил',
        hebrew: 'הגדיל',
        pronuncEng: 'higdil',
        pronuncRus: 'хигдИль',
        category: 'hifil'
      },
  
      {
        id: 275,
        english: 'I will increase/expand',
        russian: 'Я буду увеличивать',
        hebrew: 'אגדיל',
        pronuncEng: 'agdil',
        pronuncRus: 'агдИль',
        category: 'hifil'
      },
  
      {
        id: 276,
        english: '...am being increased',
        russian: 'Я увеличиваюсь',
        hebrew: 'מוגדל',
        pronuncEng: 'mugdAl',
        pronuncRus: 'мугдАль',
        category: 'hufal'
      },
  
      {
        id: 277,
        english: 'He was increased/expanded',
        russian: 'Он был увеличен',
        hebrew: 'הוגדל',
        pronuncEng: 'hugdal',
        pronuncRus: 'хугдАль',
        category: 'hufal'
      },
  
      {
        id: 278,
        english: 'He will be increased/expanded',
        russian: 'Он будет увеличен',
        hebrew: 'יוגדל',
        pronuncEng: 'yugdAl',
        pronuncRus: 'йугдАль',
        category: 'hufal'
      },
  
      {
        id: 279,
        english: 'To be sorry, to regret (inf.)',
        russian: 'Извиняться (инфинитив)',
        hebrew: 'להצטער',
        pronuncEng: 'lehitztaEr',
        pronuncRus: 'лехицтаЭр',
        category: 'hitpael'
      },
  
      {
        id: 280,
        english: 'To be sorry (sing. masc. present)',
        russian: 'Извиняться (ед.ч., м.р., наст.вр)',
        hebrew: 'מצטער',
        pronuncEng: 'mitztaEr',
        pronuncRus: 'мицтаЭр',
        category: 'hitpael'
      },
  
      {
        id: 281,
        english: 'To be sorry (plur. masc. present)',
        russian: 'Извиняться (мн.ч., м.р., наст.вр)',
        hebrew: 'מצטערים',
        pronuncEng: 'mitztaarim',
        pronuncRus: 'мицтаарИм',
        category: 'hitpael'
      },
  
      {
        id: 282,
        english: 'I was sorry',
        russian: '(Я) извинялся',
        hebrew: 'הצטערתי',
        pronuncEng: 'hitztaArti',
        pronuncRus: 'хицтаАрти',
        category: 'hitpael'
      },
  
      {
        id: 283,
        english: 'He was sorry',
        russian: '(Он) извинялся',
        hebrew: 'הצטער',
        pronuncEng: 'hitztaEr',
        pronuncRus: 'хицтаЭр',
        category: 'hitpael'
      },
  
      {
        id: 284,
        english: 'I will be sorry',
        russian: '(Я) буду извиняться',
        hebrew: 'אצטער',
        pronuncEng: 'etztaEr',
        pronuncRus: 'эцтаЭр',
        category: 'hitpael'
      },
  
      {
        id: 285,
        english: 'Pencil case',
        russian: 'Пенал',
        hebrew: 'קלמר',
        pronuncEng: 'kalmAr',
        pronuncRus: 'кальмАр',
        category: 'general'
      },
  
      {
        id: 286,
        english: 'Chimney',
        russian: 'Труба, дымоход',
        hebrew: 'ארובה',
        pronuncEng: 'aruvA',
        pronuncRus: 'арувА',
        category: 'general'
      },
  
      {
        id: 287,
        english: 'A chance meeting',
        russian: 'Случайная встреча',
        hebrew: 'פגישה מקרית',
        pronuncEng: 'pgishA mikrit',
        pronuncRus: 'пгишА микрИт',
        category: 'general'
      },
  
      {
        id: 288,
        english: 'Quiet, stillness, tranquility',
        russian: 'Тишина, спокойствие',
        hebrew: 'שקט',
        pronuncEng: 'shEket',
        pronuncRus: 'шЕкет',
        category: 'general'
      },
  
      {
        id: 289,
        english: 'Appetite',
        russian: 'Аппетит',
        hebrew: 'תאבון',
        pronuncEng: 'teavOn',
        pronuncRus: 'тэавОн',
        category: 'general'
      },
  
      {
        id: 290,
        english: 'Rest, relaxing (noun)',
        russian: 'Отдых',
        hebrew: 'מנוחה',
        pronuncEng: 'menukhA',
        pronuncRus: 'менухА',
        category: 'general'
      },
  
      {
        id: 291,
        english: 'Runny nose',
        russian: 'Насморк',
        hebrew: 'נזלת',
        pronuncEng: 'nazElet',
        pronuncRus: 'назЭлет',
        category: 'general'
      },
  
      {
        id: 292,
        english: 'Asthma',
        russian: 'Астма',
        hebrew: 'קצרת',
        pronuncEng: 'katzEret',
        pronuncRus: 'кацЕрет',
        category: 'general'
      },
  
      {
        id: 293,
        english: 'Wide, broad',
        russian: 'Широкий',
        hebrew: 'רחב',
        pronuncEng: 'rakhAv',
        pronuncRus: 'рахАв',
        category: 'adjective'
      },
  
      {
        id: 294,
        english: 'Charming',
        russian: 'Очаровательный',
        hebrew: 'מקסים',
        pronuncEng: 'maksim',
        pronuncRus: 'максИм',
        category: 'adjective'
      },
  
      {
        id: 295,
        english: 'View, scenery',
        russian: 'Вид, пейзаж',
        hebrew: 'נוף',
        pronuncEng: 'nof',
        pronuncRus: 'ноф',
        category: 'general'
      },
  
      {
        id: 296,
        english: 'Trouble, woe',
        russian: 'Несчастье, беда',
        hebrew: 'צרה',
        pronuncEng: 'tzara',
        pronuncRus: 'царА',
        category: 'general'
      },
  
      {
        id: 297,
        english: 'Narrow (but not razE)',
        russian: 'Узкий (не разЭ)',
        hebrew: 'צר',
        pronuncEng: 'tzar',
        pronuncRus: 'цар',
        category: 'adjective'
      },
  
      {
        id: 298,
        english: 'Preferable',
        russian: 'Предпочтительный',
        hebrew: 'עדיף',
        pronuncEng: 'adif',
        pronuncRus: 'адИф',
        category: 'adjective'
      },
  
      {
        id: 299,
        english: 'Umbrella',
        russian: 'Зонтик',
        hebrew: 'מטרייה',
        pronuncEng: 'mitriyA',
        pronuncRus: 'митриЯ',
        category: 'general'
      },
      
      {
        id: 300,
        english: 'Era, period',
        russian: 'Эра, период',
        hebrew: 'תקופה',
        pronuncEng: 'tkufA',
        pronuncRus: 'ткуфА',
        category: 'general'
      },
  
      {
        id: 301,
        english: 'Believe (sing masc present)',
        russian: 'Верить (ед.ч., м.р., наст.вр.)',
        hebrew: 'מאמין',
        pronuncEng: 'meamin',
        pronuncRus: 'мэамИн',
        category: 'hifil'
      },
  
      {
        id: 302,
        english: 'High quality, qualitative',
        russian: 'Высококлассный, качественный',
        hebrew: 'איכותי',
        pronuncEng: 'eikhuti',
        pronuncRus: 'эйхутИ',
        category: 'adjective'
      },
  
      {
        id: 303,
        english: 'Science',
        russian: 'Наука',
        hebrew: 'מדע',
        pronuncEng: 'madA',
        pronuncRus: 'мадА',
        category: 'adjective'
      },
  
      {
        id: 304,
        english: 'Presentation, performance',
        russian: 'Представление, презентация',
        hebrew: 'הצגה',
        pronuncEng: 'hatzagA',
        pronuncRus: 'хацагА',
        category: 'general'
      },
  
      {
        id: 305,
        english: 'Volunteer',
        russian: 'Волонтёр, доброволец',
        hebrew: 'מתנדב',
        pronuncEng: 'mitnadEv',
        pronuncRus: 'митнадЭв',
        category: 'general'
      },
  
      {
        id: 306,
        english: 'To hang out (singular present)',
        russian: 'Проводить время',
        hebrew: 'מבלה',
        pronuncEng: 'mevalE',
        pronuncRus: 'мевалЕ',
        category: 'piel'
      },
  
      {
        id: 307,
        english: 'To arrive (sing masc present)',
        russian: 'Прибывать (наст.вр., м.р., ед.ч.)',
        hebrew: 'מגיע',
        pronuncEng: 'magia',
        pronuncRus: 'магИа',
        category: 'hifil'
      },
  
      {
        id: 308,
        english: 'Suitcase',
        russian: 'Чемодан',
        hebrew: 'מזוודה',
        pronuncEng: 'mizvadA',
        pronuncRus: 'мизвадА',
        category: 'general'
      },
  
      {
        id: 309,
        english: 'Pastry',
        russian: 'Выпечка',
        hebrew: 'מאפה',
        pronuncEng: "ma'afE",
        pronuncRus: 'маафЭ',
        category: 'grocery'
      },
  
      {
        id: 310,
        english: 'To believe, to trust (inf.)',
        russian: 'Доверять (инфинитив)',
        hebrew: 'להאמין',
        pronuncEng: 'lehaamin',
        pronuncRus: 'лехаамИн',
        category: 'hifil'
      },
  
      {
        id: 311,
        english: '(I) believed, (I) trusted',
        russian: '(Я) доверял',
        hebrew: 'האמנתי',
        pronuncEng: 'heemAnti',
        pronuncRus: 'хэемАнти',
        category: 'hifil'
      },
  
      {
        id: 312,
        english: '(He) believed, (he) trusted',
        russian: '(Он) доверял',
        hebrew: 'האמין',
        pronuncEng: 'heemin',
        pronuncRus: 'хээмИн',
        category: 'hifil'
      },
  
      {
        id: 313,
        english: 'I will believe, I will trust',
        russian: '(Я) буду доверять',
        hebrew: 'אאמין',
        pronuncEng: 'aamin',
        pronuncRus: 'аамИн',
        category: 'hifil'
      },
  
      {
        id: 314,
        english: 'To hang out (infinitive)',
        russian: 'Проводить время (инфинитив)',
        hebrew: 'לבלות',
        pronuncEng: 'levalOt',
        pronuncRus: 'левалОт',
        category: 'piel'
      },
  
      {
        id: 315,
        english: '(I) was hanging out',
        russian: '(Я) проводил время',
        hebrew: 'בליתי',
        pronuncEng: 'biliti',
        pronuncRus: 'билИти',
        category: 'piel'
      },
  
      {
        id: 316,
        english: '(He) was hanging out',
        russian: '(Он) проводил время',
        hebrew: 'בלה',
        pronuncEng: 'bilA',
        pronuncRus: 'билА',
        category: 'piel'
      },
  
      {
        id: 317,
        english: 'I will hang out',
        russian: '(Я) буду проводить время',
        hebrew: 'אבלה',
        pronuncEng: 'avalE',
        pronuncRus: 'авалЕ',
        category: 'piel'
      },
  
      {
        id: 318,
        english: 'Relationship',
        russian: 'Отношения',
        hebrew: 'מערכת יחסים',
        pronuncEng: "ma'arEkhet yakhasim",
        pronuncRus: 'маарЭхэт яхасИм',
        category: 'general'
      },
  
      {
        id: 319,
        english: 'Population',
        russian: 'Население',
        hebrew: 'אוכלוסייה',
        pronuncEng: 'ukhlusiA',
        pronuncRus: 'ухлусиЯ',
        category: 'general'
      },
  
      {
        id: 320,
        english: 'Individual (adj)',
        russian: 'Индивидуальный',
        hebrew: 'פרט',
        pronuncEng: 'prat',
        pronuncRus: 'прат',
        category: 'general'
      },
  
      {
        id: 321,
        english: 'Youth, young man',
        russian: 'Юноша',
        hebrew: 'נער',
        pronuncEng: 'naAr',
        pronuncRus: 'наАр',
        category: 'general'
      },
  
      {
        id: 322,
        english: 'To contact/phone/call (infinitive)',
        russian: 'Связываться, созваниваться (инфинитив)',
        hebrew: 'להתקשר',
        pronuncEng: 'lehitkashEr',
        pronuncRus: 'лехиткашЕр',
        category: 'hitpael'
      },
  
      {
        id: 323,
        english: 'To contact/phone/call (present sing. masc.)',
        russian: 'Связываться, созваниваться (наст.вр.)',
        hebrew: 'מתקשר',
        pronuncEng: 'mitkashEr',
        pronuncRus: 'миткашЕр',
        category: 'hitpael'
      },
  
      {
        id: 324,
        english: '(I) contacted/phoned/called',
        russian: '(Я) созвонился/связался',
        hebrew: 'התקשרתי',
        pronuncEng: 'hitkashArti',
        pronuncRus: 'хиткашАрти',
        category: 'hitpael'
      },
  
      {
        id: 325,
        english: '(He) contacted/phoned/called',
        russian: '(Он) связался/созвонился',
        hebrew: 'התקשר',
        pronuncEng: 'hitkashEr',
        pronuncRus: 'хиткашЭр',
        category: 'hitpael'
      },
  
      {
        id: 326,
        english: 'I will contact/phone/call',
        russian: 'Я созвонюсь/свяжусь',
        hebrew: 'אתקשר',
        pronuncEng: 'etkashEr',
        pronuncRus: 'эткашЕр',
        category: 'hitpael'
      },
  
      {
        id: 327,
        english: 'To ring, to chime, to call by telephone (infinitive)',
        russian: 'Звонить, звенеть (инфинитив)',
        hebrew: 'לצלצל',
        pronuncEng: 'letzaltzEl',
        pronuncRus: 'лецальцЕль',
        category: 'piel'
      },
  
      {
        id: 328,
        english: 'To ring/chime/call (present, masc, singular)',
        russian: 'Звонить (наст.вр., ед.ч., м.р.)',
        hebrew: 'מצלצל',
        pronuncEng: 'metzaltzEl',
        pronuncRus: 'мецальцЕль',
        category: 'piel'
      },
  
      {
        id: 329,
        english: '(I) called/rang/chimed',
        russian: '(Я) /по/звонил',
        hebrew: 'צלצלתי',
        pronuncEng: 'tziltzAlti',
        pronuncRus: 'цильцАльти',
        category: 'piel'
      },
  
      {
        id: 330,
        english: '(He) called/rang/chimed',
        russian: '(Он) звонил/позвонил',
        hebrew: 'צלצל',
        pronuncEng: 'tziltzEl',
        pronuncRus: 'цильцЕль',
        category: 'piel'
      },
  
      {
        id: 331,
        english: 'I will ring/call',
        russian: '(Я) позвоню',
        hebrew: 'אצלצל',
        pronuncEng: 'atzaltzEl',
        pronuncRus: 'ацальцЕль',
        category: 'piel'
      },
  
      {
        id: 332,
        english: 'Comfortable, convenient',
        russian: 'Удобный/удобно',
        hebrew: 'נוח',
        pronuncEng: 'nUakh',
        pronuncRus: 'нУах',
        category: 'adverb'
      },
  
      {
        id: 333,
        english: 'Warranty card',
        russian: 'Гарантийный талон',
        hebrew: 'תעודת אחריות',
        pronuncEng: 'teudAt akharayUt',
        pronuncRus: 'тэудАт ахараЮт',
        category: 'general'
      },
  
      {
        id: 334,
        english: 'At all',
        russian: 'Совсем, вообще',
        hebrew: 'בכלל',
        pronuncEng: 'bikhlAl',
        pronuncRus: 'бихлЯль',
        category: 'adverb'
      },
  
      {
        id: 335,
        english: 'Sound, voice',
        russian: 'Звук, голос',
        hebrew: 'קול',
        pronuncEng: 'kol',
        pronuncRus: 'коль',
        category: 'general'
      },
  
      {
        id: 336,
        english: 'Broken (about technical things)',
        russian: 'Сломанный (про технику)',
        hebrew: 'מקולקל',
        pronuncEng: 'mekulkAl',
        pronuncRus: 'мекулькАль',
        category: 'adverb'
      },
  
      {
        id: 337,
        english: 'Postcard',
        russian: 'Открытка',
        hebrew: 'גלויה',
        pronuncEng: 'gluyA',
        pronuncRus: 'глуЯ',
        category: 'general'
      },
  
      {
        id: 338,
        english: 'Parcel, package',
        russian: 'Посылка',
        hebrew: 'חבילה',
        pronuncEng: 'havilA',
        pronuncRus: 'хавилА',
        category: 'general'
      },
  
      {
        id: 339,
        english: 'Blessing',
        russian: 'Благословение',
        hebrew: 'ברכה',
        pronuncEng: 'brakhA',
        pronuncRus: 'брахА',
        category: 'general'
      },
  
      {
        id: 340,
        english: 'To order, to invite (infinitive)',
        russian: 'Заказать (инфинитив)',
        hebrew: 'להזמין',
        pronuncEng: 'lehazmin',
        pronuncRus: 'лехазмИн',
        category: 'hifil'
      },
  
      {
        id: 341,
        english: 'To order, to invite (present, sing. masc.)',
        russian: 'Заказать (наст.вр., ед.ч., м.р.)',
        hebrew: 'מזמין',
        pronuncEng: 'mazmin',
        pronuncRus: 'мазмИн',
        category: 'hifil'
      },
  
      {
        id: 342,
        english: '(I) ordered / invited',
        russian: '(Я) заказал(а)',
        hebrew: 'הזמנתי',
        pronuncEng: 'hizmAnti',
        pronuncRus: 'хизмАнти',
        category: 'hifil'
      },
  
      {
        id: 343,
        english: '(He) ordered / invited',
        russian: '(Он) заказал',
        hebrew: 'הזמין',
        pronuncEng: 'hizmin',
        pronuncRus: 'хизмИн',
        category: 'hifil'
      },
  
      {
        id: 344,
        english: '(I) will order / invite',
        russian: '(Я) закажу',
        hebrew: 'אזמין',
        pronuncEng: 'azmin',
        pronuncRus: 'азмИн',
        category: 'hifil'
      },
  
      {
        id: 345,
        english: 'To ignite (infinitive)',
        russian: 'Зажигать (инфинитив)',
        hebrew: 'להדליק',
        pronuncEng: 'lehadlik',
        pronuncRus: 'лехадлИк',
        category: 'hifil'
      },
  
      {
        id: 346,
        english: 'To ignite (sing. masc. present)',
        russian: 'Зажигать (наст.вр., ед.ч., м.р.)',
        hebrew: 'מדליק',
        pronuncEng: 'madlik',
        pronuncRus: 'мадлИк',
        category: 'hifil'
      },
  
      {
        id: 347,
        english: '(I) ignited / lit smth.',
        russian: '(Я) зажёг',
        hebrew: 'הדלקתי',
        pronuncEng: 'hidlakti',
        pronuncRus: 'хидлАкти',
        category: 'hifil'
      },
  
      {
        id: 348,
        english: '(He) ignited / lit smth.',
        russian: '(Он) зажёг',
        hebrew: 'הדליק',
        pronuncEng: 'hidlik',
        pronuncRus: 'хидлИк',
        category: 'hifil'
      },
  
      {
        id: 349,
        english: '(I will) ignite smth.',
        russian: '(Я буду) зажигать',
        hebrew: 'אדליק',
        pronuncEng: 'adlik',
        pronuncRus: 'адлИк',
        category: 'hifil'
      },
  
      {
        id: 350,
        english: 'Candle',
        russian: 'Свеча',
        hebrew: 'נר',
        pronuncEng: 'ner',
        pronuncRus: 'нэр',
        category: 'general'
      },
  
      {
        id: 351,
        english: 'Squirrel',
        russian: 'Белка',
        hebrew: 'סנאי',
        pronuncEng: 'snAi',
        pronuncRus: 'снАи',
        category: 'animals'
      },
  
      {
        id: 352,
        english: 'Kettle',
        russian: 'Чайник',
        hebrew: 'קומקום',
        pronuncEng: 'kumkUm',
        pronuncRus: 'кумкУм',
        category: 'general'
      },
  
      {
        id: 353,
        english: 'Stove, oven, heater',
        russian: 'Печь, духовка',
        hebrew: 'תנור',
        pronuncEng: 'tanUr',
        pronuncRus: 'танУр',
        category: 'general'
      },
  
      {
        id: 354,
        english: 'Bonfire, campfire',
        russian: 'Костёр',
        hebrew: 'מדורה',
        pronuncEng: 'medurA',
        pronuncRus: 'медурА',
        category: 'general'
      },
  
      {
        id: 355,
        english: 'Match (for flame lighting)',
        russian: 'Спичка',
        hebrew: 'גפרור',
        pronuncEng: 'gafrUr',
        pronuncRus: 'гафрУр',
        category: 'general'
      },
  
      {
        id: 356,
        english: 'Playing card',
        russian: 'Игральная карта',
        hebrew: 'קלף',
        pronuncEng: 'klaf',
        pronuncRus: 'клаф',
        category: 'general'
      },
  
      {
        id: 357,
        english: 'To decide (infinitive)',
        russian: 'Принять решение (инфинитив)',
        hebrew: 'להחליט',
        pronuncEng: 'lehakhlit',
        pronuncRus: 'леахлИт',
        category: 'hifil'
      },
  
      {
        id: 358,
        english: 'To decide (sing. masc. present)',
        russian: 'Принять решение (наст.вр., м.р., ед.ч.)',
        hebrew: 'מחליט',
        pronuncEng: 'makhlit',
        pronuncRus: 'махлИт',
        category: 'hifil'
      },
  
      {
        id: 359,
        english: '(I) decided',
        russian: '(Я) принял решение',
        hebrew: 'החלטתי',
        pronuncEng: 'hekhlAteti',
        pronuncRus: 'эхлАтэти',
        category: 'hifil'
      },
  
      {
        id: 360,
        english: '(He) decided',
        russian: '(Он) принял решение',
        hebrew: 'החליט',
        pronuncEng: 'hekhlit',
        pronuncRus: 'эхлИт',
        category: 'hifil'
      },
  
      {
        id: 361,
        english: '(I will) decide',
        russian: '(Я буду) принимать решение',
        hebrew: 'אחליט',
        pronuncEng: 'akhlit',
        pronuncRus: 'ахлИт',
        category: 'hifil'
      },
  
      {
        id: 362,
        english: 'Finish, complete (infinitive)',
        russian: 'Заканчивать, завершать',
        hebrew: 'לגמור',
        pronuncEng: 'ligmOr',
        pronuncRus: 'лигмОр',
        category: 'paal'
      },
  
      {
        id: 363,
        english: 'Completely, totally, entirely, utterly',
        russian: 'Полностью, абсолютно',
        hebrew: 'לגמרי',
        pronuncEng: 'legamrEi',
        pronuncRus: 'легамрЭ',
        category: 'adverb'
      },
  
      {
        id: 364,
        english: 'SMS message (but not סמס)',
        russian: 'СМС-сообщение (но не סמס)',
        hebrew: 'מסרון',
        pronuncEng: 'misrOn',
        pronuncRus: 'мисрОн',
        category: 'general'
      },
  
      {
        id: 365,
        english: 'Make an appointment with the doctor',
        russian: 'Записаться на приём к врачу',
        hebrew: 'לקבוע תור לרופא',
        pronuncEng: 'likbOa tor le-rofE',
        pronuncRus: 'ликбОа тор ле-рофЭ',
        category: 'phrase'
      },
  
      {
        id: 366,
        english: 'Often',
        russian: 'Часто',
        hebrew: 'לעתים קרובות',
        pronuncEng: 'leitim krovOt',
        pronuncRus: 'леитИм кровОт',
        category: 'adverb'
      },
  
      {
        id: 367,
        english: 'Rarely',
        russian: 'Редко',
        hebrew: 'לעתים רחוקות',
        pronuncEng: 'leitim rekhokOt',
        pronuncRus: 'леитИм рехокОт',
        category: 'adverb'
      },
  
      {
        id: 368,
        english: 'To watch (infinitive)',
        russian: 'Смотреть (что-либо), наблюдать (инфин.)',
        hebrew: 'לצפות',
        pronuncEng: 'litzpOt',
        pronuncRus: 'лицпОт',
        category: 'paal'
      },
  
      {
        id: 369,
        english: 'To watch (sing. masc. present)',
        russian: 'Смотреть что-либо, наблюдать (наст.вр.)',
        hebrew: 'צופה',
        pronuncEng: 'tzofE',
        pronuncRus: 'цофЭ',
        category: 'paal'
      },
  
      {
        id: 370,
        english: 'Teenage girl, young woman',
        russian: 'Юная девушка (не בחורה)',
        hebrew: 'נערה',
        pronuncEng: 'naarA',
        pronuncRus: 'наарА',
        category: 'general'
      },
  
      {
        id: 371,
        english: 'Topic, subject',
        russian: 'Тема',
        hebrew: 'נושא',
        pronuncEng: 'nosE',
        pronuncRus: 'носЭ',
        category: 'general'
      },
  
      {
        id: 372,
        english: 'Examination, checkup (not מבחן)',
        russian: 'Контрольная, тест (не מבחן)',
        hebrew: 'מבדק',
        pronuncEng: 'mivdAk',
        pronuncRus: 'мивдАк',
        category: 'general'
      },
  
      {
        id: 373,
        english: 'Busy',
        russian: 'Занят',
        hebrew: 'עסוק',
        pronuncEng: 'asUk',
        pronuncRus: 'асУк',
        category: 'adverb'
      },
  
      {
        id: 374,
        english: 'Previous, prior, in the past',
        russian: 'Предыдущий; раньше',
        hebrew: 'קודם',
        pronuncEng: 'kOdem',
        pronuncRus: 'кОдэм',
        category: 'adverb'
      },
  
      {
        id: 375,
        english: 'To wait (infinitive)',
        russian: 'Ждать (инфинитив)',
        hebrew: 'לחכות',
        pronuncEng: 'lekhakOt',
        pronuncRus: 'лехакОт',
        category: 'piel'
      },
  
      {
        id: 376,
        english: 'To wait (sing. present masc.)',
        russian: 'Ждать (ед.ч., м.р., наст. вр)',
        hebrew: 'מחכה',
        pronuncEng: 'mekhakE',
        pronuncRus: 'мехакЕ',
        category: 'piel'
      },
  
      {
        id: 377,
        english: '(I) waited',
        russian: '(Я) ждал',
        hebrew: 'חכיתי',
        pronuncEng: 'khikiti',
        pronuncRus: 'хикИти',
        category: 'piel'
      },
  
      {
        id: 378,
        english: '(He) waited',
        russian: '(Он) ждал',
        hebrew: 'חכה',
        pronuncEng: 'khikA',
        pronuncRus: 'хикА',
        category: 'piel'
      },
  
      {
        id: 379,
        english: '(I) will wait',
        russian: '(Я) буду ждать',
        hebrew: 'אחכה',
        pronuncEng: 'ekhakE',
        pronuncRus: 'эхакЕ',
        category: 'piel'
      },
  
      {
        id: 380,
        english: 'Toothpaste',
        russian: 'Зубная паста',
        hebrew: 'משחת שיניים',
        pronuncEng: 'mishkhAt shinAim',
        pronuncRus: 'мишхАт шинАим',
        category: 'piel'
      },
  
      {
        id: 381,
        english: 'To clean (teeth) (present, single)',
        russian: 'Чистить (зубы) (наст.вр.)',
        hebrew: 'מצחצח',
        pronuncEng: 'metzakhtzEakh',
        pronuncRus: 'мецахцЕах',
        category: 'piel'
      },
  
      {
        id: 382,
        english: 'To clean teeth (infinitive)',
        russian: 'Чистить (зубы) (инф.)',
        hebrew: 'לצחצח',
        pronuncEng: 'letzakhtzEakh',
        pronuncRus: 'лецахцЕах',
        category: 'piel'
      },
  
      {
        id: 383,
        english: '(I) cleaned teeth',
        russian: '(Я) чистил(а) (зубы)',
        hebrew: 'צחצחתי',
        pronuncEng: 'tzikhtzAkhti',
        pronuncRus: 'цихцАхти',
        category: 'piel'
      },
  
      {
        id: 384,
        english: '(I) will clean teeth',
        russian: '(Я) буду чистить (зубы)',
        hebrew: 'אצחצח',
        pronuncEng: 'etzakhtzEakh',
        pronuncRus: 'эцахцЕах',
        category: 'piel'
      },
      
      {
        id: 385,
        english: 'Omelet',
        russian: 'Омлет',
        hebrew: 'חביתה',
        pronuncEng: 'khavitA',
        pronuncRus: 'хавитА',
        category: 'grocery'
      },
  
      {
        id: 386,
        english: 'To wish, to congratulate (present, masc, sing)',
        russian: 'Желать, поздравлять (наст.вр.)',
        hebrew: 'מאחל',
        pronuncEng: 'meakhEl',
        pronuncRus: 'мэахЭль',
        category: 'piel'
      },
  
      {
        id: 387,
        english: 'Ask, request, seek (present, masc, sing)',
        russian: 'Спрашивать, запрашивать (наст.вр)',
        hebrew: 'מבקש',
        pronuncEng: 'mevakEsh',
        pronuncRus: 'мевакЕш',
        category: 'piel'
      },
      
      {
        id: 388,
        english: 'To explain, to clarify (present, sing, masc)',
        russian: 'Объяснять, разъяснять (наст.вр.)',
        hebrew: 'מסביר',
        pronuncEng: 'masbir',
        pronuncRus: 'масбИр',
        category: 'hifil'
      },
      
      {
        id: 389,
        english: 'To stop, to interrupt (present, sing, masc)',
        russian: 'Останавливать, прерывать',
        hebrew: 'מפסיק',
        pronuncEng: 'mafsik',
        pronuncRus: 'мафсИк',
        category: 'hifil'
      },
      
      {
        id: 390,
        english: 'To listen, to pay attention (sing. masc. present)',
        russian: 'Прислушиваться, внимать',
        hebrew: 'מקשיב',
        pronuncEng: 'makshiv',
        pronuncRus: 'макшИв',
        category: 'hifil'
      },
      
      {
        id: 391,
        english: 'To participate (sing. masc. present)',
        russian: 'Принимать участие',
        hebrew: 'משתתף',
        pronuncEng: 'mishtatEf',
        pronuncRus: 'миштатЭф',
        category: 'hitpael'
      },
  
      {
        id: 392,
        english: 'To get married (sing. masc. present)',
        russian: 'Жениться (наст.вр., м.р.)',
        hebrew: 'מתחתן',
        pronuncEng: 'mitkhatEn',
        pronuncRus: 'митхатЭн',
        category: 'hitpael'
      },
  
      {
        id: 393,
        english: 'To apologize (sing. masc. present)',
        russian: 'Извиняться (наст.вр., м.р.)',
        hebrew: 'מיתנצל',
        pronuncEng: 'mitnatzEl',
        pronuncRus: 'митнацЕль',
        category: 'hitpael'
      },
  
      {
        id: 394,
        english: 'To remain (sing. masc. present)',
        russian: 'Оставаться (наст.вр., м.р.)',
        hebrew: 'נשאר',
        pronuncEng: "nish'Ar",
        pronuncRus: "ниш'Ар",
        category: 'nifal'
      },
  
      {
        id: 395,
        english: 'To play (infinitive)',
        russian: 'играть (инфинитив)',
        hebrew: 'לשחק',
        pronuncEng: 'lesakhEk',
        pronuncRus: 'лесахЭк',
        category: 'piel'
      },
  
      {
        id: 396,
        english: 'To gossip (present, single, masc)',
        russian: 'Сплетничать (наст.вр., ед.ч., м.р.)',
        hebrew: 'מרכל',
        pronuncEng: 'merakhEl',
        pronuncRus: 'мерахЭль',
        category: 'piel'
      },
  
      {
        id: 397,
        english: 'Stone',
        russian: 'Камень',
        hebrew: 'אבן',
        pronuncEng: 'Even',
        pronuncRus: 'Эвен',
        category: 'general'
      },
  
      {
        id: 398,
        english: 'Cave',
        russian: 'Пещера',
        hebrew: 'מערה',
        pronuncEng: 'mearA',
        pronuncRus: 'мэарА',
        category: 'general'
      },
  
      {
        id: 399,
        english: 'To remind of...',
        russian: 'Напоминать о...',
        hebrew: 'להזכיר',
        pronuncEng: 'lehazkir',
        pronuncRus: 'лехазкИр',
        category: 'nifal'
      },
  
      {
        id: 400,
        english: 'Silent, tacit',
        russian: 'Тихий, молчаливый, негласный',
        hebrew: 'שותק',
        pronuncEng: 'shotek',
        pronuncRus: 'шотек',
        category: 'adjective'
      },
  
      {
        id: 401,
        english: 'In a year',
        russian: 'Через год',
        hebrew: 'בעוד שנה',
        pronuncEng: 'be-od shanA',
        pronuncRus: 'бэ-од шанА',
        category: 'adverb'
      },
  
      {
        id: 402,
        english: 'In the next year',
        russian: 'В следующем году',
        hebrew: 'בשנה הבאה',
        pronuncEng: 'be-shanA abaA',
        pronuncRus: 'бэ-шанА абаА',
        category: 'adverb'
      },
  
      {
        id: 403,
        english: 'Website, web address',
        russian: 'Сайт, адрес сайта',
        hebrew: 'אתר',
        pronuncEng: 'atar',
        pronuncRus: 'атар',
        category: 'general'
      },
  
      {
        id: 404,
        english: 'Minister',
        russian: 'Министр',
        hebrew: 'שר',
        pronuncEng: 'sar',
        pronuncRus: 'сар',
        category: 'profession'
      },
  
      {
        id: 405,
        english: 'Help, support (noun)',
        russian: 'Помощь, поддержка',
        hebrew: 'סיוע',
        pronuncEng: 'siyua',
        pronuncRus: 'сиюа',
        category: 'general'
      },
  
      {
        id: 406,
        english: 'To influence (infinitive)',
        russian: 'Влиять (инфинитив)',
        hebrew: 'להשפיע',
        pronuncEng: 'lehashpia',
        pronuncRus: 'лехаспИа',
        category: 'hifil'
      },
      
      {
        id: 407,
        english: 'To hide (infinitive)',
        russian: 'Прятаться (инфинитив)',
        hebrew: 'להתחבא',
        pronuncEng: 'lehitkhabE',
        pronuncRus: 'лехитхабЭ',
        category: 'hitpael'
      },
      
      {
        id: 408,
        english: 'To come to an end',
        russian: 'Заканчиваться, завершаться',
        hebrew: 'להיגמר',
        pronuncEng: 'lehigamEr',
        pronuncRus: 'лехигамЭр',
        category: 'nifal'
      },
      
      {
        id: 409,
        english: 'Some of them',
        russian: 'Некоторые',
        hebrew: 'אחדים',
        pronuncEng: 'akhadim (or akhadot if f.)',
        pronuncRus: 'ахадИм/ахадОт',
        category: 'general'
      },
      
      {
        id: 410,
        english: 'Art',
        russian: 'Искусство',
        hebrew: 'אומנות',
        pronuncEng: 'omanUt',
        pronuncRus: 'оманУт',
        category: 'general'
      },
      
      {
        id: 411,
        english: 'Happiness, joy',
        russian: 'Радость, счастье',
        hebrew: 'אושר',
        pronuncEng: 'osher',
        pronuncRus: 'ошер',
        category: 'general'
      },
      
      {
        id: 412,
        english: 'Middle',
        russian: 'Середина',
        hebrew: 'אמצע',
        pronuncEng: 'emtza',
        pronuncRus: 'эмца',
        category: 'general'
      },
      
      {
        id: 413,
        english: 'Graveyard',
        russian: 'Кладбище',
        hebrew: 'בית קברות',
        pronuncEng: 'beit kvarot',
        pronuncRus: 'бейт кварОт',
        category: 'general'
      },
      
      {
        id: 414,
        english: 'Palm tree',
        russian: 'Пальма',
        hebrew: 'דקל',
        pronuncEng: 'dEkel',
        pronuncRus: 'дЭкель',
        category: 'general'
      },
      
      {
        id: 415,
        english: 'Dedication (on a book)',
        russian: 'Посвящение (в книге)',
        hebrew: 'הקדשה',
        pronuncEng: 'hakdashA',
        pronuncRus: '(х)акдаШа',
        category: 'general'
      },
      
      {
        id: 416,
        english: 'Thought',
        russian: 'Мысль',
        hebrew: 'מחשבה',
        pronuncEng: 'makhshavA',
        pronuncRus: 'махшавА',
        category: 'general'
      },
      
      {
        id: 417,
        english: 'Hoe',
        russian: 'Мотыга',
        hebrew: 'מעדר',
        pronuncEng: 'maadEr',
        pronuncRus: 'маадЭр',
        category: 'general'
      },
      
      {
        id: 418,
        english: 'Reason',
        russian: 'Причина',
        hebrew: 'סיבה',
        pronuncEng: 'siba',
        pronuncRus: 'сибА',
        category: 'general'
      },
      
      {
        id: 419,
        english: 'Piano',
        russian: 'Пианино',
        hebrew: 'פסנתר',
        pronuncEng: 'psanter',
        pronuncRus: 'псантер',
        category: 'general'
      },
      
      {
        id: 420,
        english: 'Section, excerpt',
        russian: 'Часть, фрагмент общего',
        hebrew: 'קטע',
        pronuncEng: 'keta',
        pronuncRus: 'кета',
        category: 'general'
      },
      
      {
        id: 421,
        english: 'Tuberculosis',
        russian: 'Туберкулёз',
        hebrew: 'שחפת',
        pronuncEng: 'shakhefet',
        pronuncRus: 'шахЕфет',
        category: 'general'
      },
      
      {
        id: 422,
        english: 'Method',
        russian: 'Метод',
        hebrew: 'שיטה',
        pronuncEng: 'shita',
        pronuncRus: 'шита',
        category: 'general'
      },
          
      {
        id: 423,
        english: 'Poetry',
        russian: 'Поэзия',
        hebrew: 'שירה',
        pronuncEng: 'shira',
        pronuncRus: 'шира',
        category: 'general'
      },
          
      {
        id: 424,
        english: 'To reap, to pick up, to collect, to gather (infinitive)',
        russian: 'Собирать, пожинать (инфинитив)',
        hebrew: 'לאסוף',
        pronuncEng: 'leesOf',
        pronuncRus: 'леэсОф',
        category: 'paal'
      },
          
      {
        id: 425,
        english: 'Accident, road accident',
        russian: 'Авария',
        hebrew: 'תאונה',
        pronuncEng: 'teunA',
        pronuncRus: 'тэунА',
        category: 'general'
      },
          
      {
        id: 426,
        english: 'Moon',
        russian: 'Луна',
        hebrew: 'ירח',
        pronuncEng: 'yarEakh',
        pronuncRus: 'ярЭах',
        category: 'general'
      },
              
      {
        id: 427,
        english: 'To discuss (inf.)',
        russian: 'Обсуждать (инф.)',
        hebrew: 'לדון',
        pronuncEng: 'ladUn',
        pronuncRus: 'ладУн',
        category: 'paal'
      },
              
      {
        id: 428,
        english: 'Solution',
        russian: 'Решение',
        hebrew: 'פתרון',
        pronuncEng: 'pitrOn',
        pronuncRus: 'питрОн',
        category: 'general'
      },
              
      {
        id: 429,
        english: 'Agreement',
        russian: 'Соглашение',
        hebrew: 'הסכם',
        pronuncEng: 'heskEm',
        pronuncRus: 'хескЕм',
        category: 'general'
      },
              
      {
        id: 430,
        english: 'To sign up (inf.)',
        russian: 'Подписывать (инф.)',
        hebrew: 'לחתום',
        pronuncEng: 'lakhtOm',
        pronuncRus: 'лахтОм',
        category: 'paal'
      },
              
      {
        id: 431,
        english: 'Medicine (pl.)',
        russian: 'Лекарства (мн.)',
        hebrew: 'תרופות',
        pronuncEng: 'trufOt',
        pronuncRus: 'труфОт',
        category: 'general'
      },
              
      {
        id: 432,
        english: 'Vaccine',
        russian: 'Вакцина',
        hebrew: 'חיסון',
        pronuncEng: 'khisun',
        pronuncRus: 'хисун',
        category: 'general'
      },
              
      {
        id: 433,
        english: 'To listen to (inf.)',
        russian: 'Слушать (что-либо)',
        hebrew: 'להקשיב',
        pronuncEng: 'lehakshiv',
        pronuncRus: 'лехакшИв',
        category: 'hifil'
      },
              
      {
        id: 434,
        english: 'To use (inf.)',
        russian: 'Использовать (инф.)',
        hebrew: 'להשתמש',
        pronuncEng: 'lehishtamEsh',
        pronuncRus: 'лехиштамЕш',
        category: 'hitpael'
      },
              
      {
        id: 435,
        english: 'To agree',
        russian: 'Соглашаться (инф.)',
        hebrew: 'להסכים',
        pronuncEng: 'lehaskim',
        pronuncRus: 'лехаскИм',
        category: 'hifil'
      },
              
      {
        id: 436,
        english: 'Routine',
        russian: 'Рутина',
        hebrew: 'שגרה',
        pronuncEng: 'shigrA',
        pronuncRus: 'щигрА',
        category: 'general'
      },
              
      {
        id: 437,
        english: 'Long shirt',
        russian: 'Рубашка/кофта с длинными рукавами',
        hebrew: 'חולצה ארוכה',
        pronuncEng: 'hultzA arukA',
        pronuncRus: 'хульцА арукА',
        category: 'clothes'
      },
              
      {
        id: 438,
        english: 'Warm hat / woolen hat',
        russian: 'Тёплая шапка',
        hebrew: 'כובע צמר',
        pronuncEng: 'kova tzEmer',
        pronuncRus: 'кова цЕмер',
        category: 'clothes'
      },
              
      {
        id: 439,
        english: 'Boots',
        russian: 'Сапоги',
        hebrew: 'מגפיים',
        pronuncEng: 'magafAim',
        pronuncRus: 'магафАим',
        category: 'clothes'
      },
              
      {
        id: 440,
        english: 'Sneakers',
        russian: 'Кроссовки',
        hebrew: 'נעלי ספורט',
        pronuncEng: 'Naalei sport',
        pronuncRus: 'Кроссовки',
        category: 'clothes'
      },
              
      {
        id: 441,
        english: 'Sandals, flip-flop',
        russian: 'Сандалии, тапочки',
        hebrew: 'כפכפים',
        pronuncEng: 'kafkafim',
        pronuncRus: 'кафкафИм',
        category: 'clothes'
      },
              
      {
        id: 442,
        english: 'Hail, hailstone',
        russian: 'Град',
        hebrew: 'ברד',
        pronuncEng: 'barAd',
        pronuncRus: 'барАд',
        category: 'weather'
      },
              
      {
        id: 443,
        english: 'Haze',
        russian: 'Дымка, сухой туман, смог',
        hebrew: 'אובך',
        pronuncEng: 'Ovekh',
        pronuncRus: 'Овех',
        category: 'weather'
      },
              
      {
        id: 444,
        english: 'Fog',
        russian: 'Туман',
        hebrew: 'ערפל',
        pronuncEng: 'arafEl',
        pronuncRus: 'арафЭль',
        category: 'weather'
      },
              
      {
        id: 445,
        english: 'Umbrella',
        russian: 'Зонт',
        hebrew: 'מטרייה',
        pronuncEng: 'mitriyA',
        pronuncRus: 'митриЯ',
        category: 'general'
      },
              
      {
        id: 446,
        english: 'Sun umbrella, parasol',
        russian: 'Зонт от солнца',
        hebrew: 'שמשייה',
        pronuncEng: 'shimshiyA',
        pronuncRus: 'шимшиЯ',
        category: 'general'
      },
              
      {
        id: 447,
        english: 'Stove, oven, heater',
        russian: 'Печь, нагреватель',
        hebrew: 'תנור',
        pronuncEng: 'tanUr',
        pronuncRus: 'танУр',
        category: 'general'
      },
              
      {
        id: 448,
        english: 'Light rain, drizzle',
        russian: 'Лёгкий дождь, изморось',
        hebrew: 'טיפטוף',
        pronuncEng: 'tiftUf',
        pronuncRus: 'тифтУф',
        category: 'weather'
      },
              
      {
        id: 449,
        english: 'Literature',
        russian: 'Литература',
        hebrew: 'ספרות',
        pronuncEng: 'sifrUt',
        pronuncRus: 'сифрУт',
        category: 'general'
      },
              
      {
        id: 450,
        english: 'To translate (inf.)',
        russian: 'Переводить (инф.)',
        hebrew: 'לתרגם',
        pronuncEng: 'letargEm',
        pronuncRus: 'летаргЕм',
        category: 'piel'
      },
              
      {
        id: 451,
        english: 'Traffic light',
        russian: 'Светофор',
        hebrew: 'רמזור',
        pronuncEng: 'ramzOr',
        pronuncRus: 'рамзОр',
        category: 'general'
      },
              
      {
        id: 452,
        english: 'Pedestrian sidewalk',
        russian: 'Тротуар',
        hebrew: 'מדרכה',
        pronuncEng: 'midrakhA',
        pronuncRus: 'мидрахА',
        category: 'general'
      },
              
      {
        id: 453,
        english: 'Busy',
        russian: 'Занят',
        hebrew: 'תפוס',
        pronuncEng: 'tafUs',
        pronuncRus: 'тафУс',
        category: 'adverb'
      },
              
      {
        id: 454,
        english: 'Nonstop, direct, without stops',
        russian: 'Прямой (рейс), без остановок',
        hebrew: 'ישיר',
        pronuncEng: 'yashir',
        pronuncRus: 'яшИр',
        category: 'adverb'
      },
                  
      {
        id: 455,
        english: 'Wide',
        russian: 'Широкий',
        hebrew: 'רחב',
        pronuncEng: 'rakhAv',
        pronuncRus: 'рахАв',
        category: 'general'
      },
                  
      {
        id: 456,
        english: 'Noisy',
        russian: 'Шумный',
        hebrew: 'רועש',
        pronuncEng: 'roEsh',
        pronuncRus: 'роЭш',
        category: 'adverb'
      },
                  
      {
        id: 457,
        english: 'Furniture',
        russian: 'Мебель',
        hebrew: 'רהיטים',
        pronuncEng: 'rahitim',
        pronuncRus: 'раитИм',
        category: 'general'
      },
                  
      {
        id: 458,
        english: 'Cleaning',
        russian: 'Уборка, чистота',
        hebrew: 'ניקיון',
        pronuncEng: 'nikayOn',
        pronuncRus: 'никайОн',
        category: 'general'
      },
                  
      {
        id: 459,
        english: 'Tenant',
        russian: 'Жилец (квартиросъёмщик)',
        hebrew: 'דייר',
        pronuncEng: 'dayAr',
        pronuncRus: 'дайАр',
        category: 'general'
      },
                  
      {
        id: 460,
        english: 'Quiet (adj., f.)',
        russian: 'Тихая',
        hebrew: 'שקטה',
        pronuncEng: 'shketA',
        pronuncRus: 'шкетА',
        category: 'adjective'
      },
                  
      {
        id: 461,
        english: 'Drone, quadrocopter',
        russian: 'Дрон, квадрокоптер',
        hebrew: 'רחפן',
        pronuncEng: 'rakhfAn',
        pronuncRus: 'рахфАн',
        category: 'general'
      },  
  
      {
        id: 462,
        english: 'A year in advance (f.e. for a payment)',
        russian: 'За год вперёд (например, оплата)',
        hebrew: 'שנה מראש',
        pronuncEng: 'shanA me-rOsh',
        pronuncRus: 'шанА ме-рОш',
        category: 'adverb'
      },
                      
      {
        id: 463,
        english: 'To throw (garbage) away, present, masc.',
        russian: 'Выбрасывать (мусор)',
        hebrew: 'שופך',
        pronuncEng: 'shofEkh',
        pronuncRus: 'шофЕх',
        category: 'paal'
      },
                      
      {
        id: 464,
        english: 'Real estate agency',
        russian: 'Агентство недвижимости',
        hebrew: 'משרד תווך',
        pronuncEng: 'misrad tivUkh',
        pronuncRus: 'мисрАд тивУх',
        category: 'general'
      },
                      
      {
        id: 465,
        english: 'Realtor',
        russian: 'Риэлтор',
        hebrew: 'מתווך',
        pronuncEng: 'metavEkh',
        pronuncRus: 'меватЭх',
        category: 'profession'
      },
                      
      {
        id: 466,
        english: 'Contract, agreement',
        russian: 'Контракт, соглашение',
        hebrew: 'חוזה',
        pronuncEng: 'khozE',
        pronuncRus: 'хозЭ',
        category: 'general'
      },     
  
      {
        id: 467,
        english: 'To let the rent (present, masc)',
        russian: 'Сдавать (недвижимость), наст.вр.',
        hebrew: 'משכיר',
        pronuncEng: 'maskir',
        pronuncRus: 'маскИр',
        category: 'hifil'
      },
  
      {
        id: 468,
        english: 'To rent, to hire',
        russian: 'Снимать (недвижимость), наст.вр.',
        hebrew: 'שוכר',
        pronuncEng: 'sokhEr',
        pronuncRus: 'сохЭр',
        category: 'paal'
      },
  
      {
        id: 469,
        english: 'Game, play',
        russian: 'Игра',
        hebrew: 'משחק',
        pronuncEng: 'miskhAk',
        pronuncRus: 'мисхАк',
        category: 'general'
      },
  
      {
        id: 470,
        english: 'Probably, apparently',
        russian: 'Вероятно, по видимому',
        hebrew: 'כנראה',
        pronuncEng: "kanir'E",
        pronuncRus: "канир'Э",
        category: 'adverb'
      },
  
      {
        id: 471,
        english: 'Construction, process of building',
        russian: 'Стройка',
        hebrew: 'בנייה',
        pronuncEng: 'bniyA',
        pronuncRus: 'бниЯ',
        category: 'general'
      },
  
      {
        id: 472,
        english: 'Renovation',
        russian: 'Ремонт',
        hebrew: 'שיפוץ',
        pronuncEng: 'shipUtz',
        pronuncRus: 'шипУц',
        category: 'general'
      },
  
      {
        id: 473,
        english: 'Rich, wealthy, abundant',
        russian: 'Богатый',
        hebrew: 'עשיר',
        pronuncEng: 'ashir',
        pronuncRus: 'ашИр',
        category: 'adjective'
      },
  
      {
        id: 474,
        english: 'Illuminated, lighted',
        russian: 'Освещённый, светлый',
        hebrew: 'מואר',
        pronuncEng: 'muAr',
        pronuncRus: 'муАр',
        category: 'adjective'
      },
  
      {
        id: 475,
        english: 'Dark',
        russian: 'Тёмный',
        hebrew: 'חשוך',
        pronuncEng: 'khashUkh',
        pronuncRus: 'хашУх',
        category: 'adjective'
      },
  
      {
        id: 476,
        english: 'Emotion',
        russian: 'Эмоция',
        hebrew: 'רגש',
        pronuncEng: 'rEgesh',
        pronuncRus: 'рЭгеш',
        category: 'general'
      },
  
      {
        id: 477,
        english: 'Jealousy, envy',
        russian: 'Зависть, ревность',
        hebrew: 'קנאה',
        pronuncEng: "kin'A",
        pronuncRus: "кин'А",
        category: 'general'
      },
  
      {
        id: 478,
        english: 'Idea',
        russian: 'Идея',
        hebrew: 'רעיון',
        pronuncEng: 'raayOn',
        pronuncRus: 'раайОн',
        category: 'general'
      },
  
      {
        id: 479,
        english: 'According to',
        russian: 'Согласно... , в соответствии с...',
        hebrew: 'לפי',
        pronuncEng: 'lefi',
        pronuncRus: 'лефИ',
        category: 'adverb'
      },
  
      {
        id: 480,
        english: 'Kill, slay, murder (inf.)',
        russian: 'Убивать (инфинитив)',
        hebrew: 'להרוג',
        pronuncEng: 'laharOg',
        pronuncRus: 'лахарОг',
        category: 'paal'
      },
  
      {
        id: 481,
        english: 'To save, to economise (infinitive)',
        russian: 'Сберегать, копить',
        hebrew: 'לחסוך',
        pronuncEng: 'lakhsOkh',
        pronuncRus: 'лахсОх',
        category: 'paal'
      },
  
      {
        id: 482,
        english: 'Advantage, positive side',
        russian: 'Плюс, положительный момент',
        hebrew: 'יתרון',
        pronuncEng: 'yitrOn',
        pronuncRus: 'йитрОн',
        category: 'general'
      },
  
      {
        id: 483,
        english: 'Drawback, disadvantage',
        russian: 'Недостаток, минус',
        hebrew: 'חיסרון',
        pronuncEng: 'khisarOn',
        pronuncRus: 'хисарОн',
        category: 'general'
      },
  
      {
        id: 484,
        english: 'To be injured',
        russian: 'Быть раненым',
        hebrew: 'להיפצע',
        pronuncEng: 'lehipatzE',
        pronuncRus: 'лехипацЭ',
        category: 'nifal'
      },
  
      {
        id: 485,
        english: 'To respond',
        russian: 'Реагировать, откликаться',
        hebrew: 'להגיב',
        pronuncEng: 'lehagiv',
        pronuncRus: 'лехагИв',
        category: 'hifil'
      },
  
      {
        id: 486,
        english: 'Website',
        russian: 'Вебсайт',
        hebrew: 'אתר',
        pronuncEng: 'atAr',
        pronuncRus: 'атАр',
        category: 'general'
      },
      
      {
        id: 487,
        english: 'Leader',
        russian: 'Лидер',
        hebrew: 'מנהיג',
        pronuncEng: 'manhig',
        pronuncRus: 'манхИг',
        category: 'general'
      },
      
      {
        id: 488,
        english: 'To cause, to result in...',
        russian: 'Приводить к...',
        hebrew: 'לגרום',
        pronuncEng: 'lagrOm',
        pronuncRus: 'лагрОм',
        category: 'paal'
      },
      
      {
        id: 489,
        english: 'To report',
        russian: 'Сообщать',
        hebrew: 'לדווח',
        pronuncEng: 'ledavEakh',
        pronuncRus: 'ледавЕах',
        category: 'piel'
      },
      
      {
        id: 490,
        english: 'To join',
        russian: 'Присоединяться',
        hebrew: 'להצטרף',
        pronuncEng: 'lehitztarEf',
        pronuncRus: 'лехицтарЭф',
        category: 'hitpael'
      },    
  
      {
        id: 491,
        english: 'To inform',
        russian: 'Информировать',
        hebrew: 'להודיע',
        pronuncEng: 'lehodia',
        pronuncRus: 'леходИа',
        category: 'hifil'
      },
          
      {
        id: 492,
        english: 'To bring down, to lower',
        russian: 'Снизить, сбавить, спустить',
        hebrew: 'להוריד',
        pronuncEng: 'lehorid',
        pronuncRus: 'лехорИд',
        category: 'hifil'
      },
          
      {
        id: 493,
        english: 'To pull, to remove, to withdraw',
        russian: 'Удалять, извлекать, выводить, вынимать',
        hebrew: 'להוציא',
        pronuncEng: 'lehotzi',
        pronuncRus: 'лехоцИ',
        category: 'hifil'
      },
          
      {
        id: 494,
        english: 'To add',
        russian: 'Добавлять',
        hebrew: 'להוסיף',
        pronuncEng: 'lehosif',
        pronuncRus: 'лехосИф',
        category: 'hifil'
      },
          
      {
        id: 495,
        english: 'To appear',
        russian: 'Являться, появляться',
        hebrew: 'להופיע',
        pronuncEng: 'lehofia',
        pronuncRus: 'лехофИа',
        category: 'hifil'
      },
          
      {
        id: 496,
        english: 'To discover, to show (feelings)',
        russian: 'Открывать / проявлять (эмпатию например)',
        hebrew: 'לגלות',
        pronuncEng: 'legalOt',
        pronuncRus: 'легалОт',
        category: 'piel'
      },
              
      {
        id: 497,
        english: 'To anticipate, to yearn/long for smth.',
        russian: 'Ожидать, чаять',
        hebrew: 'לצפות',
        pronuncEng: 'letzapOt',
        pronuncRus: 'лецапОт',
        category: 'piel'
      },
              
      {
        id: 498,
        english: 'To accompany',
        russian: 'Сопровождать (физически или музыкально)',
        hebrew: 'ללוות',
        pronuncEng: 'lelavOt',
        pronuncRus: 'лелавОт',
        category: 'piel'
      },
              
      {
        id: 499,
        english: 'To try, to attempt',
        russian: 'Пробовать, пытаться',
        hebrew: 'לנסות',
        pronuncEng: 'lenasOt',
        pronuncRus: 'ленасОт',
        category: 'piel'
      },
              
      {
        id: 500,
        english: 'To deceive, to cheat',
        russian: 'Обманывать, предавать',
        hebrew: 'לרמות',
        pronuncEng: 'leramOt',
        pronuncRus: 'лерамОт',
        category: 'piel'
      },
                  
      {
        id: 501,
        english: 'To lie (to someone)',
        russian: 'Врать, лгать',
        hebrew: 'לשקר',
        pronuncEng: 'leshakEr',
        pronuncRus: 'лешакЕр',
        category: 'piel'
      },
                  
      {
        id: 502,
        english: 'Wonderful, marvellous',
        russian: 'Прекрасно / прекрасный',
        hebrew: 'נפלא',
        pronuncEng: 'niflA',
        pronuncRus: 'нифлА',
        category: 'adjective'
      },
                  
      {
        id: 503,
        english: 'Meaning, significance',
        russian: 'Значение, смысл',
        hebrew: 'משמעות',
        pronuncEng: 'mashmaUt',
        pronuncRus: 'машмаУт',
        category: 'general'
      },
                  
      {
        id: 504,
        english: 'Kitten',
        russian: 'Котёнок',
        hebrew: 'חתלתול',
        pronuncEng: 'khataltUl',
        pronuncRus: 'хатальтУль',
        category: 'general'
      },
                  
      {
        id: 505,
        english: 'Puppy',
        russian: 'Щенок',
        hebrew: 'כלבלב',
        pronuncEng: 'klavlAv',
        pronuncRus: 'клавлАв',
        category: 'general'
      },
                      
      {
        id: 506,
        english: 'To smile',
        russian: 'Улыбаться',
        hebrew: 'לחייך',
        pronuncEng: 'lekhayEkh',
        pronuncRus: 'лехайЕх',
        category: 'piel'
      },
                      
      {
        id: 507,
        english: 'Smile',
        russian: 'Улыбка',
        hebrew: 'חיוך',
        pronuncEng: 'khiyUkh',
        pronuncRus: 'хиЮх',
        category: 'general'
      },
                      
      {
        id: 508,
        english: 'To identify, to recognize',
        russian: 'Определять, опознавать, различать',
        hebrew: 'לזהות',
        pronuncEng: 'lezahOt',
        pronuncRus: 'лезахОт',
        category: 'piel'
      },
                      
      {
        id: 509,
        english: 'Talented',
        russian: 'Талантливый',
        hebrew: 'מוכשר',
        pronuncEng: 'mukhshAr',
        pronuncRus: 'мухшАр',
        category: 'adjective'
      },
                          
      {
        id: 510,
        english: 'Выставка',
        russian: 'Exhibition',
        hebrew: 'תערוכה',
        pronuncEng: 'taarukhA',
        pronuncRus: 'таарухА',
        category: 'general'
      },
                          
      {
        id: 511,
        english: 'The Temple of Jerusalem (aka "The Holy House")',
        russian: 'Иерусалимский храм (он же "Святой Дом")',
        hebrew: 'בית המקדש',
        pronuncEng: 'beit a-mikdAsh',
        pronuncRus: 'бейт а-микдАш',
        category: 'sights'
      },
                          
      {
        id: 512,
        english: 'Farmer, agronomist, or: agricultural (adj.)',
        russian: 'Фермер, агроном, или: аграрный (прил.)',
        hebrew: 'חקלאי',
        pronuncEng: 'khaklAi',
        pronuncRus: 'хаклАи',
        category: 'profession'
      },
                          
      {
        id: 513,
        english: 'Part',
        russian: 'Часть',
        hebrew: 'חלק',
        pronuncEng: 'khElek',
        pronuncRus: 'хЭлек',
        category: 'general'
      },
                          
      {
        id: 514,
        english: 'Sculpture',
        russian: 'Скульптура',
        hebrew: 'פסל',
        pronuncEng: 'pEsel',
        pronuncRus: 'пЕсэль',
        category: 'general'
      },     
  
      {
        id: 515,
        english: 'Tradition',
        russian: 'Традиция',
        hebrew: 'מסורת',
        pronuncEng: 'masOret',
        pronuncRus: 'масОрет',
        category: 'general'
      },
  
      {
        id: 516,
        english: 'To offer, to propose',
        russian: 'Предложить',
        hebrew: 'להציע',
        pronuncEng: 'lehatzia',
        pronuncRus: 'лехацИя',
        category: 'hifil'
      },
      
      {
        id: 517,
        english: 'Movement, organization',
        russian: 'Движение, организация',
        hebrew: 'תנועה',
        pronuncEng: 'tnuA',
        pronuncRus: 'тнуА',
        category: 'general'
      },
      
      {
        id: 518,
        english: 'Soul',
        russian: 'Душа',
        hebrew: 'נפש',
        pronuncEng: 'nEfesh',
        pronuncRus: 'нЭфеш',
        category: 'general'
      },
      
      {
        id: 519,
        english: 'Role, function, job',
        russian: 'Роль, функция, должность',
        hebrew: 'תפקיד',
        pronuncEng: 'tafkid',
        pronuncRus: 'тафкИд',
        category: 'general'
      },
          
      {
        id: 520,
        english: 'To win',
        russian: 'Выиграть',
        hebrew: 'לנצח',
        pronuncEng: 'lenatzEakh',
        pronuncRus: 'ленацЕах',
        category: 'piel'
      },
          
      {
        id: 521,
        english: 'To lose, to destroy',
        russian: 'Проиграть, разрушить',
        hebrew: 'לאבד',
        pronuncEng: 'leabEd',
        pronuncRus: 'леабЭд',
        category: 'piel'
      },
          
      {
        id: 522,
        english: 'Message',
        russian: 'Объявление, сообщение',
        hebrew: 'הודעה',
        pronuncEng: 'hodaA',
        pronuncRus: 'ходаА',
        category: 'general'
      },
              
      {
        id: 523,
        english: 'Appearance, show',
        russian: 'Представление, шоу, вид',
        hebrew: 'הופעה',
        pronuncEng: 'hofaA',
        pronuncRus: 'хофаА',
        category: 'general'
      },
              
      {
        id: 524,
        english: 'Expense, expenditure',
        russian: 'Расход, вывод, извлечение',
        hebrew: 'הוצאה',
        pronuncEng: 'hotzaA',
        pronuncRus: 'хоцаА',
        category: 'general'
      },
              
      {
        id: 525,
        english: 'Addition',
        russian: 'Добавление',
        hebrew: 'הוספה',
        pronuncEng: 'hosafA',
        pronuncRus: 'хосафА',
        category: 'general'
      },
              
      {
        id: 526,
        english: 'Explanation',
        russian: 'Объяснение',
        hebrew: 'הסבר',
        pronuncEng: 'hesbEr',
        pronuncRus: 'эсбЕр',
        category: 'general'
      },
       
      {
        id: 527,
        english: 'Researcher',
        russian: 'Исследователь',
        hebrew: 'חוקר',
        pronuncEng: 'khokEr',
        pronuncRus: 'хокЕр',
        category: 'general'
      },
                  
      {
        id: 528,
        english: 'Reaction',
        russian: 'Реакция',
        hebrew: 'תגובה',
        pronuncEng: 'tguvA',
        pronuncRus: 'тгувА',
        category: 'shem peula'
      },
                  
      {
        id: 529,
        english: 'Adjustment, suitability',
        russian: 'Соответствие',
        hebrew: 'התאמה',
        pronuncEng: 'hataamA',
        pronuncRus: 'хатаамА',
        category: 'shem peula'
      },
                  
      {
        id: 530,
        english: 'Description',
        russian: 'Описание',
        hebrew: 'תיאור',
        pronuncEng: 'tiUr',
        pronuncRus: 'тиУр',
        category: 'shem peula'
      },
                  
      {
        id: 531,
        english: 'Social, collective',
        russian: 'Общественный',
        hebrew: 'חברתי',
        pronuncEng: 'khevrati',
        pronuncRus: 'хевратИ',
        category: 'adjective'
      },
                      
      {
        id: 532,
        english: 'Victory',
        russian: 'Победа',
        hebrew: 'ניצחון',
        pronuncEng: 'nitzakhOn',
        pronuncRus: 'ницахОн',
        category: 'general'
      },
                      
      {
        id: 533,
        english: 'Fear',
        russian: 'Страх',
        hebrew: 'פחד',
        pronuncEng: 'pAkhad',
        pronuncRus: 'пАхад',
        category: 'general'
      },
                      
      {
        id: 534,
        english: 'Control, Authority',
        russian: 'Власть, контроль',
        hebrew: 'שליטה',
        pronuncEng: 'shlitA',
        pronuncRus: 'шлитА',
        category: 'general'
      },
                      
      {
        id: 535,
        english: 'To fail',
        russian: 'Провалиться, потерпеть неудачу',
        hebrew: 'להיכשל',
        pronuncEng: 'lehikashEl',
        pronuncRus: 'лехикашЕль',
        category: 'nifal'
      },
                          
      {
        id: 536,
        english: 'Sense of humor',
        russian: 'Чувство юмора',
        hebrew: 'חוש הומור',
        pronuncEng: 'khush humOr',
        pronuncRus: 'хуш хумОр',
        category: 'general'
      },
                          
      {
        id: 537,
        english: 'Research',
        russian: 'Исследование',
        hebrew: 'מחקר',
        pronuncEng: 'mikhkAr',
        pronuncRus: 'михкАр',
        category: 'general'
      },
                          
      {
        id: 538,
        english: 'Despite that...',
        russian: 'Несмотря на...',
        hebrew: '...אף על פי ש',
        pronuncEng: 'af al pi she...',
        pronuncRus: 'аф аль пи ше...',
        category: 'adverb'
      },
                          
      {
        id: 539,
        english: 'Injury, harm, damage',
        russian: 'Травма, рана',
        hebrew: 'פגיעה',
        pronuncEng: 'pgiyA',
        pronuncRus: 'пгиЯ',
        category: 'general'
      },
                          
      {
        id: 540,
        english: 'Brain',
        russian: 'Мозг',
        hebrew: 'מוח',
        pronuncEng: 'mOakh',
        pronuncRus: 'мОах',
        category: 'general'
      },
                              
      {
        id: 541,
        english: 'Disease, illness',
        russian: 'Болезнь',
        hebrew: 'מחלה',
        pronuncEng: 'makhalA',
        pronuncRus: 'махалА',
        category: 'general'
      },
                              
      {
        id: 542,
        english: 'Serious, earnest',
        russian: 'Серьёзно, серьёзный',
        hebrew: 'רציני',
        pronuncEng: 'ratzini',
        pronuncRus: 'рацинИ',
        category: 'adjective'
      },
                              
      {
        id: 543,
        english: 'Joke',
        russian: 'Шутка',
        hebrew: 'בדיחה',
        pronuncEng: 'bdikhA',
        pronuncRus: 'бдихА',
        category: 'general'
      },
                              
      {
        id: 544,
        english: 'Tested',
        russian: 'Проверяемый',
        hebrew: 'נבדק',
        pronuncEng: 'nivdAk',
        pronuncRus: 'нивдАк',
        category: 'general passive'
      },
                                  
      {
        id: 545,
        english: 'Creation',
        russian: 'Создание, творение, произведение',
        hebrew: 'יצירה',
        pronuncEng: 'yetzirA',
        pronuncRus: 'йецирА',
        category: 'general'
      },
                                  
      {
        id: 546,
        english: 'Invention',
        russian: 'Изобретение, открытие',
        hebrew: 'המצאה',
        pronuncEng: 'hamtzaA',
        pronuncRus: 'hамцаА',
        category: 'general'
      },
                                  
      {
        id: 547,
        english: 'To invent',
        russian: 'Изобретать',
        hebrew: 'להמציא',
        pronuncEng: 'lehamtzI',
        pronuncRus: 'лехамцИ',
        category: 'hifil'
      },
                                  
      {
        id: 548,
        english: 'Difference',
        russian: 'Разница',
        hebrew: 'הבדל',
        pronuncEng: 'hevdEl',
        pronuncRus: 'хэвдЭль',
        category: 'general'
      },
                                  
      {
        id: 549,
        english: 'Related, connected',
        russian: 'Связанный',
        hebrew: 'קשור',
        pronuncEng: 'kashUr',
        pronuncRus: 'кашУр',
        category: 'adverb'
      },
                                      
      {
        id: 550,
        english: 'Feelings',
        russian: 'Чувства',
        hebrew: 'רגשות',
        pronuncEng: 'regashOt',
        pronuncRus: 'регашОт',
        category: 'general'
      },
                                      
      {
        id: 551,
        english: 'Immediate',
        russian: 'Срочно',
        hebrew: 'מייד',
        pronuncEng: 'meyAd',
        pronuncRus: 'мейЯд',
        category: 'adjective'
      },
                                      
      {
        id: 552,
        english: 'Communication, relationships',
        russian: 'Коммуникация, отношения',
        hebrew: 'תקשורת',
        pronuncEng: 'tikshOret',
        pronuncRus: 'тикшОрет',
        category: 'general'
      },
                                      
      {
        id: 553,
        english: 'To sunbathe',
        russian: 'Загорать',
        hebrew: 'להשתזף',
        pronuncEng: 'lehishtazEf',
        pronuncRus: 'лехиштазЭф',
        category: 'hitpael'
      },
                     
      {
        id: 554,
        english: 'Sunscreen',
        russian: 'Крем от загара',
        hebrew: 'קרם שיזוף',
        pronuncEng: 'krem shizUf',
        pronuncRus: 'крем шизУф',
        category: 'general'
      },     
  
      {
        id: 555,
        english: 'Shadow',
        russian: 'Тень',
        hebrew: 'צל',
        pronuncEng: 'tzel',
        pronuncRus: 'цель',
        category: 'general'
      },
                                          
      {
        id: 556,
        english: 'To be careful',
        russian: 'Остерегаться',
        hebrew: 'להיזהר',
        pronuncEng: 'lehizahEr',
        pronuncRus: 'лехизаЭр',
        category: 'nifal'
      },
                                          
      {
        id: 557,
        english: 'Lifeguard',
        russian: 'Спасатель',
        hebrew: 'מציל',
        pronuncEng: 'matzil',
        pronuncRus: 'мацИль',
        category: 'general'
      },
                                              
      {
        id: 558,
        english: 'To postpone',
        russian: 'Откладывать',
        hebrew: 'לדחות',
        pronuncEng: 'lidkhOt',
        pronuncRus: 'лидхОт',
        category: 'paal'
      },
                                              
      {
        id: 559,
        english: 'To hug, to embrace',
        russian: 'Обнимать',
        hebrew: 'לחבק',
        pronuncEng: 'lekhabEk',
        pronuncRus: 'лехабЭк',
        category: 'piel'
      },
                                              
      {
        id: 560,
        english: 'Hugs',
        russian: 'Объятия',
        hebrew: 'חיבוקים',
        pronuncEng: 'khibukim',
        pronuncRus: 'хибукИм',
        category: 'general'
      },
                                              
      {
        id: 561,
        english: 'Perfume',
        russian: 'Духи, парфюм',
        hebrew: 'בושם',
        pronuncEng: 'bOsem',
        pronuncRus: 'бОсэм',
        category: 'general'
      },
                                              
      {
        id: 562,
        english: 'To sacrifice',
        russian: 'Жертвовать, приносить жертву',
        hebrew: 'להקריב',
        pronuncEng: 'lehakriv',
        pronuncRus: 'лехакрИв',
        category: 'hifil'
      },
                                              
      {
        id: 563,
        english: 'To separate from, to part from',
        russian: 'Отделяться от',
        hebrew: 'להיפרד',
        pronuncEng: 'lehiparEd',
        pronuncRus: 'лехипарЭд',
        category: 'nifal'
      },
                                                  
      {
        id: 564,
        english: 'To part from, to separate from (present, masc)',
        russian: 'Отделяться от (наст. вр.)',
        hebrew: 'נפרד',
        pronuncEng: 'nifrad',
        pronuncRus: 'нифрАд',
        category: 'nifal'
      },
                                                  
      {
        id: 565,
        english: 'Committee',
        russian: 'Комитет',
        hebrew: 'ועדה',
        pronuncEng: 'vaadA',
        pronuncRus: 'ваадА',
        category: 'general'
      },
                                                  
      {
        id: 566,
        english: 'Shoulder',
        russian: 'Плечо',
        hebrew: 'כתף',
        pronuncEng: 'katEf',
        pronuncRus: 'катЭф',
        category: 'body'
      },
                                                  
      {
        id: 567,
        english: 'Funeral',
        russian: 'Похороны',
        hebrew: 'הלוויה',
        pronuncEng: 'halvayA',
        pronuncRus: 'алвайЯ',
        category: 'general'
      },
                                                      
      {
        id: 568,
        english: 'Scissors',
        russian: 'Ножницы',
        hebrew: 'מספריים',
        pronuncEng: 'misparAyim',
        pronuncRus: 'миспарАим',
        category: 'general'
      },
                                                      
      {
        id: 569,
        english: 'Leaf',
        russian: 'Лист',
        hebrew: 'עלה',
        pronuncEng: 'alE',
        pronuncRus: 'алЕ',
        category: 'general'
      },
                                                      
      {
        id: 570,
        english: 'Value',
        russian: 'Ценность, стоимость, порядок',
        hebrew: 'ערך',
        pronuncEng: 'Erekh',
        pronuncRus: 'Эрех',
        category: 'general'
      },
                                                      
      {
        id: 571,
        english: 'Parting, separation, farewell',
        russian: 'Прощание, расставание',
        hebrew: 'פרידה',
        pronuncEng: 'predA',
        pronuncRus: 'предА',
        category: 'general'
      },
                                                      
      {
        id: 572,
        english: 'At all, completely, in general',
        russian: 'Совсем, вообще',
        hebrew: 'בכלל',
        pronuncEng: 'bikhlAl',
        pronuncRus: 'бихлЯль',
        category: 'adverb'
      },
                                                      
      {
        id: 573,
        english: 'Plain, plateau',
        russian: 'Равнина, плоскость',
        hebrew: 'מישור',
        pronuncEng: 'mishOr',
        pronuncRus: 'мишОр',
        category: 'general'
      },
                                                          
      {
        id: 574,
        english: 'That, which',
        russian: 'Который',
        hebrew: 'אשר',
        pronuncEng: 'ashEr',
        pronuncRus: 'ашЕр',
        category: 'general'
      },
                                                          
      {
        id: 575,
        english: 'The Lowland (region in Israel)',
        russian: 'Низменность - регион в центре Израиля',
        hebrew: 'השפלה',
        pronuncEng: 'a-shfelA',
        pronuncRus: 'а-шфелА',
        category: 'general'
      },
                                                          
      {
        id: 576,
        english: 'To plant',
        russian: 'Выращивать (растения)',
        hebrew: 'לשתול',
        pronuncEng: 'lishtOl',
        pronuncRus: 'лиштОль',
        category: 'paal'
      },
                                                          
      {
        id: 577,
        english: 'To wander, to roam, to migrate (incl. the birds)',
        russian: 'Скитаться, перелетать (в т.ч. про птиц)',
        hebrew: 'לנדוד',
        pronuncEng: 'lindOd',
        pronuncRus: 'линдОд',
        category: 'paal'
      },
                                                          
      {
        id: 578,
        english: 'Youth, adolescence',
        russian: 'Юность',
        hebrew: 'נעורים',
        pronuncEng: 'neurim',
        pronuncRus: 'нэурИм',
        category: 'general'
      },
                                                          
      {
        id: 579,
        english: 'Loaf (of bread)',
        russian: 'Кусок, ломоть хлеба',
        hebrew: 'פת',
        pronuncEng: 'pat',
        pronuncRus: 'пат',
        category: 'general'
      },
                                              
      {
        id: 580,
        english: 'Fresh, refreshed',
        russian: 'Свежий, бодрый, полный сил',
        hebrew: 'רענן',
        pronuncEng: 'raanAn',
        pronuncRus: 'раанАн',
        category: 'Adjective'
      },
                                                          
      {
        id: 581,
        english: 'To develop oneself, to evolve',
        russian: 'Развиваться, прогрессировать как личность',
        hebrew: 'להתפתח',
        pronuncEng: 'lehitpatEakh',
        pronuncRus: 'лехитпатЭах',
        category: 'hitpael'
      },
                                                              
      {
        id: 582,
        english: 'Development, evolution',
        russian: 'Развитие, эволюция',
        hebrew: 'התפתחות',
        pronuncEng: 'hitpatkhUt',
        pronuncRus: 'хитпатхУт',
        category: 'general'
      },
                                                       
      {
        id: 583,
        english: 'To solve, to figure out',
        russian: 'Решить, отгадать',
        hebrew: 'לפתור',
        pronuncEng: 'liftOr',
        pronuncRus: 'лифтОр',
        category: 'paal'
      },    
  
      {
        id: 584,
        english: 'Area, zone, region',
        russian: 'Район, область, округ',
        hebrew: 'אזור',
        pronuncEng: 'ezOr',
        pronuncRus: 'эзОр',
        category: 'general'
      },
                                                                  
      {
        id: 585,
        english: 'Loneliness, solitude',
        russian: 'Одиночество, уединение',
        hebrew: 'בדידות',
        pronuncEng: 'bdidUt',
        pronuncRus: 'бдидУт',
        category: 'general'
      },
                                                                  
      {
        id: 586,
        english: 'Involved, mixed',
        russian: 'Вовлечённый, замешанный',
        hebrew: 'מעורב',
        pronuncEng: 'meorAv',
        pronuncRus: 'меорАв',
        category: 'pual'
      },
                                                           
      {
        id: 587,
        english: 'Concern',
        russian: 'Беспокойство',
        hebrew: 'אכפת',
        pronuncEng: 'ikhpAt',
        pronuncRus: 'ихпАт',
        category: 'general'
      },
                                                                      
      {
        id: 588,
        english: "I don't care",
        russian: 'Меня не волнует',
        hebrew: 'לא אכפת לי',
        pronuncEng: 'lo ikhpAt li',
        pronuncRus: 'ло ихпАт ли',
        category: 'phrase'
      },
                                                                      
      {
        id: 589,
        english: 'Belonging (to someone)',
        russian: 'Принадлежащий (кому-либо)',
        hebrew: 'שייך',
        pronuncEng: 'shayAkh',
        pronuncRus: 'шаЯх',
        category: 'general'
      },
                                                                          
      {
        id: 590,
        english: 'Shared, common',
        russian: 'Общий, общественный',
        hebrew: 'משותף',
        pronuncEng: 'meshutAf',
        pronuncRus: 'мешутАф',
        category: 'adverb'
      },
                                                                          
      {
        id: 591,
        english: 'To get used to',
        russian: 'Привыкать',
        hebrew: 'להתרגל',
        pronuncEng: 'lehitragEl',
        pronuncRus: 'лехитрагЕль',
        category: 'hitpael'
      },
                                                                          
      {
        id: 592,
        english: 'To be excited',
        russian: 'Быть приятно взволнованным',
        hebrew: 'להתרגש',
        pronuncEng: 'lehitragEsh',
        pronuncRus: 'лехитрагЕш',
        category: 'hitpael'
      },
                                                                              
      {
        id: 593,
        english: 'To exagerrate',
        russian: 'Преувеличивать',
        hebrew: 'להגזים',
        pronuncEng: 'lehagzim',
        pronuncRus: 'лехагзИм',
        category: 'hifil'
      },
                                                                                  
      {
        id: 594,
        english: 'Excuse, pretext',
        russian: 'Отговорка',
        hebrew: 'תירוץ',
        pronuncEng: 'tirUtz',
        pronuncRus: 'тирУц',
        category: 'general'
      },
                                                                                  
      {
        id: 595,
        english: 'Hanging, dependent, unresolved',
        russian: 'Зависящий; нерешённый',
        hebrew: 'תלוי',
        pronuncEng: 'talUi',
        pronuncRus: 'талУй',
        category: 'adverb'
      },
                                                                                  
      {
        id: 596,
        english: 'Liver, heavy',
        russian: 'Печень, тяжёлый',
        hebrew: 'כבד',
        pronuncEng: 'kavEd',
        pronuncRus: 'кавЭд',
        category: 'general'
      },
                                                                                      
      {
        id: 597,
        english: 'Strange',
        russian: 'Странный / странно',
        hebrew: 'מוזר',
        pronuncEng: 'muzAr',
        pronuncRus: 'музАр',
        category: 'adjective'
      },
                                                                                      
      {
        id: 598,
        english: 'That means',
        russian: 'Это значит',
        hebrew: 'זאת אומרת',
        pronuncEng: 'zot omEret',
        pronuncRus: 'зот омЕрет',
        category: 'phrase'
      },
                                                                                      
      {
        id: 599,
        english: 'Stupid',
        russian: 'Глупый, глупец',
        hebrew: 'טיפש',
        pronuncEng: 'tipEsh',
        pronuncRus: 'типЭш',
        category: 'general'
      },
                                                                                      
      {
        id: 600,
        english: 'Task, mission',
        russian: 'Задание',
        hebrew: 'משימה',
        pronuncEng: 'mesimA',
        pronuncRus: 'месимА',
        category: 'general'
      },
                                                                                          
      {
        id: 601,
        english: 'Show, performance',
        russian: 'Выступление, шоу',
        hebrew: 'הצגה',
        pronuncEng: 'hatzagA',
        pronuncRus: 'атцагА',
        category: 'general'
      },
                                                                                          
      {
        id: 602,
        english: 'To show, to demonstrate',
        russian: 'Показывать',
        hebrew: 'להראות',
        pronuncEng: "lehar'Ot",
        pronuncRus: 'лехарОт',
        category: 'hifil'
      },
                                                                                          
      {
        id: 603,
        english: 'Gossipmonger, blabber',
        russian: 'Сплетник',
        hebrew: 'רכלן',
        pronuncEng: 'rakhlAn',
        pronuncRus: 'рахлАн',
        category: 'general'
      },
                                                                                          
      {
        id: 604,
        english: 'To utilise, to exploit, to abuse',
        russian: 'Использовать, употреблять',
        hebrew: 'לנצל',
        pronuncEng: 'lenatzEl',
        pronuncRus: 'ленацЕль',
        category: 'piel'
      },
                                                                                         
      {
        id: 605,
        english: 'To announce, to declare',
        russian: 'Объявлять, провозглашать',
        hebrew: 'להכריז',
        pronuncEng: 'lehakhriz',
        pronuncRus: 'леахрИз',
        category: 'hifil'
      },
                                                                                              
      {
        id: 606,
        english: 'Exile, diaspora, abroad',
        russian: 'Диаспора, заграница',
        hebrew: 'גלות',
        pronuncEng: 'galUt',
        pronuncRus: 'галУт',
        category: 'general'
      },
                                                                                              
      {
        id: 607,
        english: 'Intellectual (person, noun)',
        russian: 'Интеллигент, интеллектуал',
        hebrew: 'איש רוח',
        pronuncEng: 'ish rUakh',
        pronuncRus: 'Иш рУах',
        category: 'general'
      },
                                                                                              
      {
        id: 608,
        english: 'Diligent, industrious',
        russian: 'Усердный, прилежный',
        hebrew: 'חרוץ',
        pronuncEng: 'kharUtz',
        pronuncRus: 'харУц',
        category: 'adjective'
      },
                                                                                                  
      {
        id: 609,
        english: 'To err, to mistake',
        russian: 'Ошибаться',
        hebrew: 'לטעות',
        pronuncEng: "lit'ot",
        pronuncRus: "лит'от",
        category: 'paal'
      },
                                                                                                  
      {
        id: 610,
        english: 'To murder',
        russian: 'Убивать',
        hebrew: 'לרצוח',
        pronuncEng: 'lirtzOakh',
        pronuncRus: 'лирцОах',
        category: 'paal'
      },
                                                                                                      
      {
        id: 611,
        english: 'Homeland, motherland',
        russian: 'Родина',
        hebrew: 'מולדת',
        pronuncEng: 'molEdet',
        pronuncRus: 'молЭдэт',
        category: 'general'
      },
                                                                                                      
      {
        id: 612,
        english: 'Ability, capability',
        russian: 'Способность',
        hebrew: "יכולת",
        // ^^^FOR SOME STRANGE REASON WHEN I TRY TO TYPE THE CORRECT WORD IN HEBREW,
        // WHICH IS ACTUALLY yud-kaf-vav-lamed-tav (even here I can't do this as well!!!),
        // IT SCRAMBLES THE LETTERS INSIDE. IDK WHY THE FLUFF IS THIS HAPPENING
        pronuncEng: 'yechOlet',
        pronuncRus: 'йехОлет',
        category: 'general'
      },
                                                                                                      
      {
        id: 613,
        english: 'To prevent',
        russian: 'Предотвращать',
        hebrew: 'למנוע',
        pronuncEng: 'limnOa',
        pronuncRus: 'лимнОа',
        category: 'paal'
      },
                                                                                                      
      {
        id: 614,
        english: 'Reality, existence',
        russian: 'Реальность, действительность',
        hebrew: 'מציאות',
        pronuncEng: 'metziUt',
        pronuncRus: 'мециУт',
        category: 'general'
      },
                                                                                                          
      {
        id: 615,
        english: 'Towards',
        russian: 'Навстречу, по направлению к',
        hebrew: 'לקראת',
        pronuncEng: 'likrAt',
        pronuncRus: 'ликрАт',
        category: 'general'
      },
                                                                                                          
      {
        id: 616,
        english: 'All around',
        russian: 'Всюду, со всех сторон, вокруг',
        hebrew: 'מסביב',
        pronuncEng: 'misaviv',
        pronuncRus: 'мисавИв',
        category: 'general'
      },
                                                                                                          
      {
        id: 617,
        english: 'Matter, issue, concern, interest',
        russian: 'Интерес, тема',
        hebrew: 'עניין',
        pronuncEng: 'inyAn',
        pronuncRus: 'иньЯн',
        category: 'general'
      },
                                                                                                              
      {
        id: 618,
        english: 'Global crisis',
        russian: 'Мировой кризис',
        hebrew: 'משבר עולמי',
        pronuncEng: 'mashbEr olami',
        pronuncRus: 'машбЕр оламИ',
        category: 'phrase'
      },
                                                                                                              
      {
        id: 619,
        english: 'Option, choice, alternative',
        russian: 'Выбор',
        hebrew: 'ברירה',
        pronuncEng: 'brirA',
        pronuncRus: 'брирА',
        category: 'general'
      },
                                                                                                              
      {
        id: 620,
        english: 'Talent, aptitude',
        russian: 'Талант, способность',
        hebrew: 'כישרון',
        pronuncEng: 'kisharOn',
        pronuncRus: 'кишарОн',
        category: 'general'
      },
                                                                                                                  
      {
        id: 621,
        english: 'Path, track, course, trajectory',
        russian: 'Путь, траектория',
        hebrew: 'מסלול',
        pronuncEng: 'maslUl',
        pronuncRus: 'маслЮль',
        category: 'general'
      },
                                                                                                                  
      {
        id: 622,
        english: 'To fall asleep, to doze off',
        russian: 'Засыпать',
        hebrew: 'להירדם',
        pronuncEng: 'lehiradEm',
        pronuncRus: 'лехирадЭм',
        category: 'nifal'
      },
                                                                                                                  
      {
        id: 623,
        english: 'Lunar cycle',
        russian: 'Цикл Луны',
        hebrew: 'מחזור הירח',
        pronuncEng: 'makhzOr ha-yarEakh',
        pronuncRus: 'махзОр а-йарЭах',
        category: 'phrase'
      },
                                                                                                                  
      {
        id: 624,
        english: 'Solar cycle',
        russian: 'Солнечный цикл',
        hebrew: 'מחזור השמש',
        pronuncEng: 'makhzOr ha-shEmesh',
        pronuncRus: 'махзОр а-шЕмеш',
        category: 'phrase'
      },
                                                                                                                      
      {
        id: 625,
        english: 'To disappear',
        russian: 'Исчезать',
        hebrew: 'להיעלם',
        pronuncEng: 'lehialEm',
        pronuncRus: 'лехиалЕм',
        category: 'nifal'
      },
                                                                                                                      
      {
        id: 626,
        english: 'Disappear (present tense)',
        russian: 'Исчезать (наст.вр.)',
        hebrew: 'נעלם',
        pronuncEng: "ne'elAm",
        pronuncRus: 'нэелАм',
        category: 'nifal'
      },
                                                                                                                      
      {
        id: 627,
        english: 'Fall asleep, doze off (present tense)',
        russian: 'Засыпать (наст.вр.)',
        hebrew: 'נרדם',
        pronuncEng: 'nirdAm',
        pronuncRus: 'нирдАм',
        category: 'nifal'
      },
                                                                                                                        
      {
        id: 628,
        english: 'Two times, x2',
        russian: 'Дважды',
        hebrew: 'פי שתיים',
        pronuncEng: 'pi shtAim',
        pronuncRus: 'пи штАим',
        category: 'number'
      },
                                                                                                                        
      {
        id: 629,
        english: 'Three times, x3',
        russian: 'Трижды, в три раза',
        hebrew: 'פי שלוש',
        pronuncEng: 'pi shalOsh',
        pronuncRus: 'пи шалОш',
        category: 'number'
      },
                                                                                                                            
      {
        id: 630,
        english: 'Multiply',
        russian: 'Умножение',
        hebrew: 'כפול',
        pronuncEng: 'k(a)ful',
        pronuncRus: 'к(а)фуль',
        category: 'general'
      },
                                                                                                                            
      {
        id: 631,
        english: 'To become (someone or something), to turn into',
        russian: 'Стать, становиться (кем-либо)',
        hebrew: 'להפוך',
        pronuncEng: 'laafOkh',
        pronuncRus: 'лаафОх',
        category: 'paal'
      },
                                                                                                                            
      {
        id: 632,
        english: 'To leave, to keep',
        russian: 'Оставлять',
        hebrew: 'להשאיר',
        pronuncEng: "lehash'ir",
        pronuncRus: 'леаш-Ир',
        category: 'hifil'
      },
                                                                                                                                
      {
        id: 633,
        english: 'To rule, to govern',
        russian: 'Управлять, править',
        hebrew: 'לשלוט',
        pronuncEng: 'lishlOt',
        pronuncRus: 'лишлОт',
        category: 'paal'
      },
                                                                                                                                
      {
        id: 634,
        english: 'Reign, rule, political power',
        russian: 'Власть',
        hebrew: 'שלטון',
        pronuncEng: 'shiltOn',
        pronuncRus: 'шильтОн',
        category: 'general'
      },
                                                                                                                                
      {
        id: 635,
        english: 'Surprise',
        russian: 'Сюрприз',
        hebrew: 'הפתעה',
        pronuncEng: 'haftaA',
        pronuncRus: 'афтаА',
        category: 'general'
      },
                                                                                                                                    
      {
        id: 636,
        english: 'Fact',
        russian: 'Факт',
        hebrew: 'עובדה',
        pronuncEng: 'uvdA',
        pronuncRus: 'увдА',
        category: 'general'
      },
                                                                                                                                    
      {
        id: 637,
        english: 'Scream',
        russian: 'Крик',
        hebrew: 'צעקה',
        pronuncEng: 'tzaakA',
        pronuncRus: 'цаакА',
        category: 'general'
      },
                                                                                                                                    
      {
        id: 638,
        english: 'Soon',
        russian: 'На носу, уже скоро',
        hebrew: 'בשער',
        pronuncEng: 'be-shaAr',
        pronuncRus: 'бэ-шаАр',
        category: 'phrase'
      },
                                                                                                                                        
      {
        id: 639,
        english: 'To discover, to show (feelings), present tense',
        russian: 'Открывать / проявлять (эмпатию например), настоящее время',
        hebrew: 'מגלה',
        pronuncEng: 'megalE',
        pronuncRus: 'мегалЕ',
        category: 'piel'
      },
                                                                                                                                        
      {
        id: 640,
        english: 'Long ago',
        russian: 'Давно',
        hebrew: 'מזמן',
        pronuncEng: 'mizmAn',
        pronuncRus: 'мизмАн',
        category: 'adverb'
      },
                                                                                                                                        
      {
        id: 641,
        english: 'Coral',
        russian: 'Коралл',
        hebrew: 'אלמוג',
        pronuncEng: 'almOg',
        pronuncRus: 'алмОг',
        category: 'general'
      },
                                                                                                                                            
      {
        id: 642,
        english: 'Pearl',
        russian: 'Жемчужина',
        hebrew: 'פנינה',
        pronuncEng: 'pnina',
        pronuncRus: 'пнИна',
        category: 'general'
      },
                                                                                                                                            
      {
        id: 643,
        english: 'To scare, to intimidate',
        russian: 'Пугать',
        hebrew: 'להפחיד',
        pronuncEng: 'lehafkhid',
        pronuncRus: 'леафхИд',
        category: 'hifil'
      },
                                                                                                                                            
      {
        id: 644,
        english: 'Scare, intimidate (present tense)',
        russian: 'Пугать (наст.вр.)',
        hebrew: 'מפחיד',
        pronuncEng: 'mafkhid',
        pronuncRus: 'мафхИд',
        category: 'hifil'
      },
                                                                                                                                                
      {
        id: 645,
        english: 'Result, consequence, outcome, effect',
        russian: 'Результат',
        hebrew: 'תוצאה',
        pronuncEng: 'totzaA',
        pronuncRus: 'тоцаА',
        category: 'general'
      },
                                                                                                                                                
      {
        id: 646,
        english: 'Superstitions',
        russian: 'Суеверия',
        hebrew: 'אמונות טפלות',
        pronuncEng: 'amunOt tfilOt',
        pronuncRus: 'амунОт тфилОт',
        category: 'phrase'
      },
                                                                                                                                                
      {
        id: 647,
        english: 'Bravery, courage, valour',
        russian: 'Смелость, храбрость',
        hebrew: 'אומץ',
        pronuncEng: 'Ometz',
        pronuncRus: 'Омэц',
        category: 'general'
      },
                                                                                                                                                    
      {
        id: 648,
        english: 'To explain, to clarify',
        russian: 'Объяснить',
        hebrew: 'להסביר',
        pronuncEng: 'lehasbir',
        pronuncRus: 'леhасбИр',
        category: 'hifil'
      },
                                                                                                                                                    
      {
        id: 649,
        english: 'If, if only, whether',
        russian: 'Если, если бы',
        hebrew: 'אילו',
        pronuncEng: 'ilu',
        pronuncRus: 'Илу',
        category: 'adverb'
      },
                                                                                                                                                    
      {
        id: 650,
        english: 'Understanding, comprehension',
        russian: 'Понимание',
        hebrew: 'הבנה',
        pronuncEng: 'havanA',
        pronuncRus: 'аванА',
        category: 'general'
      },
                                                                                                                                                    
      {
        id: 651,
        english: 'To warm up, to become hot, to be excited',
        russian: 'Разогреваться',
        hebrew: 'להתחמם',
        pronuncEng: 'lehitkhamEm',
        pronuncRus: 'леитхамЭм',
        category: 'hitpael'
      },
                                                                                                                                                        
      {
        id: 652,
        english: 'Customer, client',
        russian: 'Клиент',
        hebrew: 'לקוח',
        pronuncEng: 'lakOakh',
        pronuncRus: 'лакОах',
        category: 'general'
      },
                                                                                                                                                        
      {
        id: 653,
        english: 'Miracle',
        russian: 'Чудо',
        hebrew: 'נס',
        pronuncEng: 'nes',
        pronuncRus: 'нэс',
        category: 'general'
      },
                                                                                                                                                        
      {
        id: 654,
        english: 'Hall, vestibule',
        russian: 'Зал',
        hebrew: 'אולם',
        pronuncEng: 'ulAm',
        pronuncRus: 'улАм',
        category: 'general'
      },
                                                                                                                                                            
      {
        id: 655,
        english: 'To surf (waves or internet)',
        russian: 'Сёрфить (на волнах или в интернете)',
        hebrew: 'לגלוש',
        pronuncEng: 'liglOsh',
        pronuncRus: 'лиглОш',
        category: 'paal'
      },
                                                                                                                                                            
      {
        id: 656,
        english: 'Orchestra',
        russian: 'Оркестр',
        hebrew: 'תזמורת',
        pronuncEng: 'tizmOret',
        pronuncRus: 'тизмОрэт',
        category: 'general'
      },
                                                                                                                                                                
      {
        id: 657,
        english: 'List, roster, bill',
        russian: 'Список',
        hebrew: 'רשימה',
        pronuncEng: 'reshimA',
        pronuncRus: 'решимА',
        category: 'general'
      },
                                                                                                                                                                
      {
        id: 658,
        english: 'Law, decree, rule',
        russian: 'Закон',
        hebrew: 'חוק',
        pronuncEng: 'khok',
        pronuncRus: 'хок',
        category: 'general'
      },
                                                                                                                                                                    
      {
        id: 659,
        english: 'Enjoy',
        russian: 'Наслаждаться',
        hebrew: 'ליהנות',
        pronuncEng: 'leianOt',
        pronuncRus: 'леианОт',
        category: 'nifal'
      },
                                                                                                                                                                    
      {
        id: 660,
        english: 'Pleasure, delight, enjoyment',
        russian: 'Удовольствие, восторг',
        hebrew: 'הנאה',
        pronuncEng: 'hanaA',
        pronuncRus: '(h)анаА',
        category: 'general'
      },
                                                                                                                                                                        
      {
        id: 661,
        english: 'Composer',
        russian: 'Композитор',
        hebrew: 'מלחין',
        pronuncEng: 'malkhin',
        pronuncRus: 'мальхИн',
        category: 'profession'
      },
                                                                                                                                                                        
      {
        id: 662,
        english: 'To imitate, to simulate',
        russian: 'Подражать, имитировать',
        hebrew: 'לחקות',
        pronuncEng: 'lekhakot',
        pronuncRus: 'лехакот',
        category: 'piel'
      },
                                                                                                                                                                            
      {
        id: 663,
        english: 'Advertisement, commercial',
        russian: 'Реклама',
        hebrew: 'פירסומת',
        pronuncEng: 'pirsOmet',
        pronuncRus: 'пирсОмет',
        category: 'general'
      },
                                                                                                                                                                            
      {
        id: 664,
        english: 'To include',
        russian: 'Включать в себя, содержать',
        hebrew: 'לכלול',
        pronuncEng: 'likhlOl',
        pronuncRus: 'лихлОль',
        category: 'paal'
      },
                                                                                                                                                                                
      {
        id: 665,
        english: 'To create',
        russian: 'Создавать',
        hebrew: 'ליצור',
        pronuncEng: 'litzOr',
        pronuncRus: 'лицОр',
        category: 'paal'
      },
                                                                                                                                                                                
      {
        id: 666,
        english: 'Create (present tense)',
        russian: 'Создавать (наст.вр.)',
        hebrew: 'יוצר',
        pronuncEng: 'yotzEr',
        pronuncRus: 'йоцЕр',
        category: 'paal'
      },
                                                                                                                                                                                    
      {
        id: 667,
        english: 'Combination, joining, also: phrase, idiom',
        russian: 'Сочетание, комбинация, также: выражение, идиома',
        hebrew: 'צירוף',
        pronuncEng: 'tzirUf',
        pronuncRus: 'цирУф',
        category: 'general'
      },
                                                                                                                                                                                    
      {
        id: 668,
        english: 'To guard, to keep, to maintain',
        russian: 'Сохранить, сберечь',
        hebrew: 'לשמור',
        pronuncEng: 'lishmOr',
        pronuncRus: 'лишмОр',
        category: 'paal'
      },
                                                                                                                                                                                        
      {
        id: 669,
        english: 'Dill',
        russian: 'Укроп',
        hebrew: 'שמיר',
        pronuncEng: 'shamir',
        pronuncRus: 'шамИр',
        category: 'grocery'
      },
                                                                                                                                                                                        
      {
        id: 670,
        english: 'Team, crew, staff',
        russian: 'Команда, коллектив, группа',
        hebrew: 'צוות',
        pronuncEng: 'tzEvet',
        pronuncRus: 'цЕвет',
        category: 'general'
      },
                                                                                                                                                                                            
      {
        id: 671,
        english: 'Junction, crossroads, intersection',
        russian: 'Перекрёсток',
        hebrew: 'צומת',
        pronuncEng: 'tzOmet',
        pronuncRus: 'цОмет',
        category: 'general'
      },
                                                                                                                                                                                            
      {
        id: 672,
        english: '',
        russian: '',
        hebrew: '',
        pronuncEng: '',
        pronuncRus: '',
        category: ''
      },
  
  
      // IDEA: after finishing the session, render all the words that
      // were run through and display them in lists (correct, incorrect answers etc.)
  
      // IDEA 2: User should have an option to add words to this file, although it means he has to 
      // fill up all the properties
  
      // IDEA 3: give user a hint if he asks: show one letter, show two letters, three letters
    ]
  
  export default words