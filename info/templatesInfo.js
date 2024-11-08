// info.js
//ex: ?location='FentonProject'

const tabsInfo = {
    FentonProject: {
      header: `Fenton Project`,
      overview: `
        <p>This is the overview for the Fenton project. This development will begin breaking ground in summer of 2022.</p>
        <a href="https://brookwood.co.il/project/brookwood-estates-fenton" target="_blank" rel="noopener noreferrer">View Fenton project page</a>
      `,
      photos: `
        <div id="carousel1" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://brookwood.co.il/wp-content/uploads/2022/09/Fenton_Units_color.jpg" class="d-block w-100" alt="fenton-demo">
            </div>
            <div class="carousel-item">
              <img src="https://brookwood.co.il/wp-content/uploads/2022/10/fenton-demo.jpg" class="d-block w-100" alt="fenton-demo">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carousel1" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carousel1" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      `,
      details: `
        <p>Details about the Fenton project. This area is known for its rolling hills, wooded trails, and proximity to downtown Fenton.</p>
      `
    },
    LakeFenton: {
      header: `אגם פנטון`,
      overview: `סקירה כללית: אגם שמשתרע על פני 845 דונם ומציע מגוון פעילויות פנאי כמו שיט, דיג, או סתם מנוחה במקום רגוע ונעים. במרחק קצר מהפרויקט, תוכלו להנות מטבע שופע, לצאת להליכה פסטורלית או לשבת לפיקניק על שפת האגם.`,
      photos: `
      <div id="carousel1" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://brookwood.co.il/wp-content/uploads/2022/09/Fenton_Units_color.jpg" class="d-block w-100" alt="fenton-demo">
          </div>
          <div class="carousel-item">
            <img src="https://brookwood.co.il/wp-content/uploads/2022/10/fenton-demo.jpg" class="d-block w-100" alt="fenton-demo">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel1" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel1" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    `,
    details: `פירוט: אגם פנטון הוא האגם הגדול ביותר במחוז ג'נסי, ואם אתם חובבי פעילויות מים, הוא יספק שפע הזדמנויות. תוכלו להנות כאן משייט רגוע, דייג, רכיבה על אופניים או סתם נשימות ומדיטציה בחייק הטבע. האווירה השלווה באגם תתרום רבות לרוגע, לבריאות המנטלית ולשקט הנפשי, וכל זה במרחק קצר מאיזור המגורים. `
    },
    FentonFarmsGolfClub: {
      header: `מועדון גולף פנטון פארמס`,
      overview: `
        <p>סקירה כללית: מגרש גולף ציבורי עם 18 גומות, אווירה נינוחה ושטחים פתוחים ומטופחים שיספקו חוויה מהנה לשחקני גולף בכל הרמות והמיומנויות..</p>
      `,
      photos: `
        <div id="carousel1" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://brookwood.co.il/wp-content/uploads/2022/09/Fenton_Units_color.jpg" class="d-block w-100" alt="fenton-demo">
            </div>
            <div class="carousel-item">
              <img src="https://brookwood.co.il/wp-content/uploads/2022/10/fenton-demo.jpg" class="d-block w-100" alt="fenton-demo">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carousel1" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carousel1" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      `,
      details: `
        <p>
          פירוט: מועדון הגולף פנטון פארמס, שנוסד ב-1939 משתרע על פני שטח של 6 ק״מ והוא מציע מסלולים נגישים למתחילים לצד מסלולים מאתגרים לשחקנים מנוסים יותר. במקום תמצאו גם מועדון המהווה מקום מפגש ואירוח עם פעילויות עבור בני הגיל השלישי. במהלך ימות השבוע, בין שני לחמישי, תוכלו להנות מהמתקנים בתעריפים מוזלים יותר. לפרטים נוספים, בקרו באתר
        </p>
        <a href="https://www.fentonfarms.com/rates/" target="_blank" rel="noopener noreferrer">מועדון הגולף</a>
      `
    },
    SpringMeadowsCountryClub: {
      header: `הקאנטרי קלאב בספרינג מדוז`,
      overview: `
        <p>סקירה כללית: קאנטרי קלאב עם מגרשי גולף, פעילויות ספורט ואירועים חברתיים. מקום מושלם לאנשים שרוצים להתערבב, להרחיב את המעגל החברתי ולהמצא בסביבה נעימה עם אוירה תומכת, חברית וקהילתית.</p>
                <a href="https://www.springmeadowscountryclub.com/" target="_blank" rel="noopener noreferrer">אתר המקום</a>
      `,
      photos: `
        <div id="carousel2" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://static.wixstatic.com/media/622034_ab0a78f8346a48e0a918fe0dea27f941~mv2.jpg/v1/fill/w_1743,h_1000,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/622034_ab0a78f8346a48e0a918fe0dea27f941~mv2.jpg" class="d-block w-100" alt="brookwood-demo">
            </div>
            <div class="carousel-item">
              <img src="https://static.wixstatic.com/media/ed1f57_d5c86839653e4f39ad549d12ba6a0094~mv2.jpg/v1/crop/x_212,y_0,w_1496,h_1080/fill/w_313,h_226,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DSC00492.jpg" class="d-block w-100" alt="brookwood-demo">
            </div>
            <div class="carousel-item">
              <img src="https://static.wixstatic.com/media/622034_64a5b431ed9749689843073175ec64da~mv2.jpg/v1/crop/x_244,y_0,w_3545,h_3024/fill/w_313,h_267,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2022%20Folds%20of%20Honor%20Photo%201.jpg" class="d-block w-100" alt="brookwood-demo">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carousel2" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carousel2" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      `,
      details: `
        <p>
        פירוט: הקאנטרי קלאב של ספרינג מדוז מציע מסלול גולף מטופח, מגרשי טניס, בריכות שחייה ואפילו חדרי אוכל אם אתם מתכננים שהות לאורך שעות היום. חברי המועדון מקבלים גישה לאירועים חברתיים שונים וזוכים לקחת חלק בקהילה חברית ומשמעותית. קיימות במועדון מגוון פעילויות לבני הגיל השלישי, כולן מיועדות לעודד את הבריאות הפיזית, המנטלית והמעורבות החברתית, כדי שתוכלו לתחזק אורח חיים פעיל, איכותי ומספק.
        </p>
      `
    },
    DaunerMartinNaturePreserve: {
      header: `שמורת הטבע דאונר-מרטין`,
      overview: `<p>סקירה כללית: שמורת טבע שמשתרעת על פני 155 דונם ויש בה מסלולי הליכה נוחים ונגישים. חויה מושלמת לאוהבי טבע שרוצים קצת להתאורר מהעיר, וכל זה, במרחק קצר ממתחם המגורים.</p>`,
      photos: `
      <div id="carousel2" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://example.com/brookwood1.jpg" class="d-block w-100" alt="brookwood-demo">
          </div>
          <div class="carousel-item">
            <img src="https://example.com/brookwood2.jpg" class="d-block w-100" alt="brookwood-demo">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel2" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel2" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      `,
      details: `<p>פירוט: שמורת הטבע דאונר-מרטין היא פנינת טבע ייחודית. תוכלו למצא בה שבילי הליכה שעוברים דרך יערות, איזורי ביצות ומרחבי דשא עצומים. אל המקום מגיעים מטיילים רבים שמבקשים לבלות יום רגוע בטבע, לתצפת על ציפורים, לצלם ולהתנתק מהעומס והלחץ היומיומי. במקום ישנם שבילים שמתוחזקים היטב והופכים את החוויה לנגישה, קלה ונוחה גם לבני הגיל השלישי. זו הזדמנות מצויינת לצאת להליכה בחיק הטבע, להפחית לחצים ולתרום לבריאות הלב והנפש.</p>`
    },
    SevenLakesStatePark: {
      header: `פארק שבעת האגמים`,
      overview: `<p>סקירה כללית: פארק ציבורי שמשתרע על פני 1,434 דונם של אגמים, שבילי הליכה ואיזורי פיקניק.</p>`,
      photos: `
      <div id="carousel2" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://example.com/brookwood1.jpg" class="d-block w-100" alt="brookwood-demo">
          </div>
          <div class="carousel-item">
            <img src="https://example.com/brookwood2.jpg" class="d-block w-100" alt="brookwood-demo">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel2" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel2" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      `,
      details: `פירוט: פארק שבעת האגמים הוא מקום נפלא להעביר בו את שבת בבוקר. יש בו, ממש כמו שמסגיר השם, שבעה אגמים, כשהגדול בהם משתרע על פני שטח של 170 דונם. תוכלו לדוג בו, לצאת לשייט ואפילו לשחות! בנוסף, ישנם שבילי הליכה נעימים, מטופחים ומזמינים שאין לנו ספק שתהנו לצעוד בהם. בין אם בא לכם פעילות מרגיעה ובין אם תרצו משהו יותר אקטיבי, בפארק שבעת האגמים כל האפשרויות עומדות לרשותכם.`
    },
    McLarenFentonMedicalCenter: {
      header: `מרכז רפואי מקלרן פנטון`,
      overview: `<p>סקירה כללית: מרכז רפואי איכותי ומקיף בו ניתן לבצע בדיקות ולקבל מגוון שירותי בריאות, במרחק קצר מהבית. </p>`,
      photos: `
      <div id="carousel2" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://example.com/brookwood1.jpg" class="d-block w-100" alt="brookwood-demo">
          </div>
          <div class="carousel-item">
            <img src="https://example.com/brookwood2.jpg" class="d-block w-100" alt="brookwood-demo">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel2" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel2" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      `,
      details: `פירוט: מרכז רפואי מקלרן פנטון מציע מגוון שירותים רפואיים, בינהם, רפואה דחופה, בדיקות מומחים, מכוני דימות ושירותי מעבדה. המצאותו של מרכז רפואי איכותי, מקצועי ומקיף בסמוך לסביבת המגורים, מבטיח גישה מהירה לשירותי בריאות, בדיקות שגרתיות וטיפול מהיר במידת הצורך.`
    },
    default: {
        header: `No Location Found`,
        overview: `
          <p>No Data Found.</p>
        `,
        photos: `
          <div id="carousel2" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://NoData.png" class="d-block w-100" alt="brookwood-demo">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carousel2" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carousel2" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        `,
        details: `
          <p>No Data Found.</p>
        `
      }
  };
  