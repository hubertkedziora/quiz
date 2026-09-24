const QUESTIONS = [
  {
    "id": 1,
    "category": "Cyberbezpieczeństwo",
    "question": "Który zestaw najlepiej ogranicza skutki przejęcia hasła do jednego konta?",
    "options": [
      "Unikalne hasła do usług i uwierzytelnianie wieloskładnikowe.",
      "Jedno bardzo długie hasło używane we wszystkich usługach.",
      "Zmiana nazwy użytkownika przy zachowaniu wspólnego hasła.",
      "Zapisywanie haseł w zwykłym dokumencie dostępnym dla zespołu."
    ],
    "correct": 0,
    "explanation": "Unikalność haseł ogranicza przenoszenie skutków wycieku między usługami, a MFA dodaje kolejną warstwę ochrony.",
    "source": "Cały wykład – Cyberbezpieczeństwo – podyplomowe 20262027.pdf · strona PDF 61, 103"
  },
  {
    "id": 2,
    "category": "Cyberbezpieczeństwo",
    "question": "Otrzymujesz pilne polecenie przelewu, rzekomo od przełożonego. Co najlepiej odpowiada zasadzie weryfikacji z wykładu?",
    "options": [
      "Potwierdzenie polecenia odrębnym, znanym kanałem kontaktu.",
      "Odpowiedź na tę samą wiadomość z pytaniem, czy jest autentyczna.",
      "Wykonanie przelewu, jeżeli wiadomość zawiera firmowe logo.",
      "Uznanie wiadomości za prawdziwą, jeżeli nie ma błędów językowych."
    ],
    "correct": 0,
    "explanation": "Weryfikacja innym kanałem zmniejsza ryzyko wykonania polecenia wysłanego przez osobę podszywającą się pod przełożonego.",
    "source": "Cały wykład – Cyberbezpieczeństwo – podyplomowe 20262027.pdf · strona PDF 103"
  },
  {
    "id": 3,
    "category": "Cyberbezpieczeństwo",
    "question": "Na czym polega atak DDoS opisany w materiałach?",
    "options": [
      "Na przeciążaniu usługi ruchem w celu ograniczenia jej dostępności.",
      "Na szyfrowaniu plików i żądaniu zapłaty za ich odzyskanie.",
      "Na podglądaniu poufnych danych na ekranie użytkownika.",
      "Na kradzieży mocy obliczeniowej do wydobywania kryptowalut."
    ],
    "correct": 0,
    "explanation": "DDoS uderza w dostępność usługi przez sztuczne zwiększanie ruchu.",
    "source": "Cały wykład – Cyberbezpieczeństwo – podyplomowe 20262027.pdf · strona PDF 71, 111"
  },
  {
    "id": 4,
    "category": "Cyberbezpieczeństwo",
    "question": "Który opis odpowiada quishingowi?",
    "options": [
      "Wykorzystanie złośliwego kodu QR w oszustwie phishingowym.",
      "Podszywanie się pod rozmówcę wyłącznie w połączeniu głosowym.",
      "Zainfekowanie urządzenia przez złośliwą reklamę internetową.",
      "Tworzenie sieci przejętych komputerów do masowych ataków."
    ],
    "correct": 0,
    "explanation": "Quishing jest odmianą phishingu wykorzystującą kody QR.",
    "source": "Cały wykład – Cyberbezpieczeństwo – podyplomowe 20262027.pdf · strona PDF 71"
  },
  {
    "id": 5,
    "category": "Cyberbezpieczeństwo",
    "question": "Co oznacza model Ransomware-as-a-Service?",
    "options": [
      "Udostępnianie ransomware innym przestępcom jako usługi.",
      "Legalną usługę automatycznego odzyskiwania zaszyfrowanych danych.",
      "Ubezpieczenie pokrywające wszystkie skutki cyberataku.",
      "Bezpłatny system ostrzegający o podejrzanych wiadomościach."
    ],
    "correct": 0,
    "explanation": "W modelu RaaS twórcy narzędzi udostępniają je innym sprawcom, np. za opłatą lub udziałem w okupie.",
    "source": "Cały wykład – Cyberbezpieczeństwo – podyplomowe 20262027.pdf · strona PDF 80"
  },
  {
    "id": 6,
    "category": "Cyberbezpieczeństwo",
    "question": "Która praktyka najlepiej przygotowuje organizację do odzyskania danych po ataku?",
    "options": [
      "Tworzenie kopii offline i regularne testowanie odtwarzania.",
      "Przechowywanie jedynej kopii na tym samym dysku co dane.",
      "Sprawdzanie jedynie, czy program zgłosił utworzenie kopii.",
      "Zastąpienie kopii zapasowych programem antywirusowym."
    ],
    "correct": 0,
    "explanation": "Samo istnienie kopii nie potwierdza możliwości odzyskania danych. Potrzebne są testy odtwarzania i ochrona kopii przed atakiem.",
    "source": "Cały wykład – Cyberbezpieczeństwo – podyplomowe 20262027.pdf · strona PDF 49, 105"
  },
  {
    "id": 7,
    "category": "Cyberbezpieczeństwo",
    "question": "Który przykład przedstawia pasywny ślad cyfrowy?",
    "options": [
      "Automatycznie zapisany adres IP i metadane aktywności.",
      "Świadomie opublikowany komentarz pod artykułem.",
      "Zdjęcie dodane przez użytkownika do publicznego profilu.",
      "Post z opisem wyjazdu opublikowany w mediach społecznościowych."
    ],
    "correct": 0,
    "explanation": "Pasywny ślad powstaje automatycznie podczas korzystania z usług; aktywny wynika ze świadomego publikowania.",
    "source": "Cały wykład – Cyberbezpieczeństwo – podyplomowe 20262027.pdf · strona PDF 59–60"
  },
  {
    "id": 8,
    "category": "Cyberbezpieczeństwo",
    "question": "Który element zabezpieczeń zmniejsza możliwość rozprzestrzeniania się ataku między częściami sieci?",
    "options": [
      "Segmentacja sieci.",
      "Zwiększenie pojemności dysków.",
      "Ujednolicenie haseł administratorów.",
      "Wyłączenie rejestrowania zdarzeń."
    ],
    "correct": 0,
    "explanation": "Podział sieci na segmenty ogranicza swobodę przemieszczania się atakującego między systemami.",
    "source": "Cały wykład – Cyberbezpieczeństwo – podyplomowe 20262027.pdf · strona PDF 49, 105"
  },
  {
    "id": 9,
    "category": "Cyberbezpieczeństwo",
    "question": "Który przykład najlepiej pokazuje fizyczny skutek cyberataku na technologię operacyjną (OT)?",
    "options": [
      "Manipulacja pracą pomp w instalacji wodociągowej.",
      "Zmiana zdjęcia profilowego w serwisie społecznościowym.",
      "Przesłanie niechcianej reklamy na prywatną skrzynkę.",
      "Utworzenie fałszywego konta na forum dyskusyjnym."
    ],
    "correct": 0,
    "explanation": "Systemy OT sterują urządzeniami fizycznymi, dlatego ich naruszenie może zakłócić rzeczywiste procesy i usługi.",
    "source": "Cały wykład – Cyberbezpieczeństwo – podyplomowe 20262027.pdf · strona PDF 84, 117"
  },
  {
    "id": 10,
    "category": "Cyberbezpieczeństwo",
    "question": "Jaki jest zasadniczy cel SOAR według wykładu?",
    "options": [
      "Łączenie narzędzi bezpieczeństwa oraz automatyzacja obsługi incydentów.",
      "Całkowite zastąpienie polityki bezpieczeństwa jednym hasłem.",
      "Przechowywanie jedynej kopii zapasowej w przeglądarce.",
      "Wyłącznie ręczne katalogowanie sprzętu komputerowego."
    ],
    "correct": 0,
    "explanation": "SOAR integruje narzędzia, automatyzuje powtarzalne czynności i wspiera reakcję na incydenty.",
    "source": "Cały wykład – Cyberbezpieczeństwo – podyplomowe 20262027.pdf · strona PDF 106"
  },
  {
    "id": 11,
    "category": "Cyberbezpieczeństwo",
    "question": "Czym wojna kognitywna różni się od wprowadzenia w błąd w pojedynczej sprawie?",
    "options": [
      "Dąży do zmiany sposobu postrzegania, oceniania i podejmowania decyzji.",
      "Dotyczy wyłącznie fizycznego niszczenia infrastruktury.",
      "Ogranicza się do uzyskania haseł do kont pocztowych.",
      "Wymaga używania wyłącznie prawdziwych, pełnych informacji."
    ],
    "correct": 0,
    "explanation": "Jej przedmiotem jest m.in. percepcja, zaufanie i sposób interpretowania rzeczywistości, a efekty mogą narastać w czasie.",
    "source": "Cały wykład – Cyberbezpieczeństwo – podyplomowe 20262027.pdf · strona PDF 146–147"
  },
  {
    "id": 12,
    "category": "Cyberbezpieczeństwo",
    "question": "Co najbardziej wzmacnia ocenę wiarygodności alarmującej wiadomości?",
    "options": [
      "Sprawdzenie źródła pierwotnego, daty, kontekstu i niezależnych potwierdzeń.",
      "Policzenie udostępnień i komentarzy pod wiadomością.",
      "Sprawdzenie, czy tekst potwierdza wcześniejsze przekonania.",
      "Uznanie nagrania za autentyczne na podstawie realistycznego głosu."
    ],
    "correct": 0,
    "explanation": "Popularność i realizm treści nie zastępują weryfikacji jej źródła oraz kontekstu.",
    "source": "Cały wykład – Cyberbezpieczeństwo – podyplomowe 20262027.pdf · strona PDF 155"
  },
  {
    "id": 13,
    "category": "Podejmowanie decyzji",
    "question": "Jaka kolejność odpowiada cyklowi decyzyjnemu zespołu zarządzania kryzysowego z prezentacji?",
    "options": [
      "Ustalenie położenia → planowanie → stawianie zadań → kontrola.",
      "Planowanie → kontrola → ustalenie położenia → stawianie zadań.",
      "Stawianie zadań → kontrola → planowanie → ustalenie położenia.",
      "Kontrola → stawianie zadań → ustalenie położenia → planowanie."
    ],
    "correct": 0,
    "explanation": "Rozpoznanie sytuacji stanowi podstawę planowania, po którym następują zadania i kontrola ich realizacji.",
    "source": "Podejmowanie decyzji dla studentów_cd.pdf · strona PDF 23"
  },
  {
    "id": 14,
    "category": "Podejmowanie decyzji",
    "question": "Czemu służy ustalenie położenia w procesie decyzyjnym?",
    "options": [
      "Budowaniu aktualnego obrazu sytuacji, sił, środków i warunków działania.",
      "Wyłącznie określeniu geograficznej lokalizacji siedziby zespołu.",
      "Wybraniu wykonawców bez oceny dostępnych zasobów.",
      "Zakończeniu zbierania danych do końca kryzysu."
    ],
    "correct": 0,
    "explanation": "Ustalenie położenia obejmuje ciągłe pozyskiwanie i przetwarzanie informacji istotnych dla decyzji.",
    "source": "Podejmowanie decyzji dla studentów_cd.pdf · strona PDF 14, 24"
  },
  {
    "id": 15,
    "category": "Podejmowanie decyzji",
    "question": "Jaka czynność powinna poprzedzać porównanie wariantów działania?",
    "options": [
      "Określenie kryteriów ich oceny.",
      "Ogłoszenie zwycięskiego wariantu wykonawcom.",
      "Rezygnacja z analizy uwarunkowań czasowych.",
      "Przyjęcie wariantu wskazanego jako pierwszy."
    ],
    "correct": 0,
    "explanation": "Warianty porównuje się według ustalonych kryteriów, np. ekonomicznych, technicznych, ekologicznych i czasu.",
    "source": "Podejmowanie decyzji dla studentów_cd.pdf · strona PDF 26, 30"
  },
  {
    "id": 16,
    "category": "Podejmowanie decyzji",
    "question": "Zespół otrzymuje więcej informacji, niż jest w stanie przetworzyć. Jakie działanie wskazuje prezentacja?",
    "options": [
      "Zarządzanie potrzebami informacyjnymi i filtrowanie danych według listy potrzeb.",
      "Przekazywanie każdej wiadomości wszystkim członkom zespołu.",
      "Zwiększenie liczby źródeł bez ustalenia priorytetów.",
      "Wstrzymanie całego zbierania informacji do końca działań."
    ],
    "correct": 0,
    "explanation": "Zawał informacyjny ogranicza się przez selekcję informacji potrzebnych do decyzji.",
    "source": "Podejmowanie decyzji dla studentów_cd.pdf · strona PDF 13"
  },
  {
    "id": 17,
    "category": "Podejmowanie decyzji",
    "question": "Który zestaw czynności jest elementem kontroli realizacji decyzji?",
    "options": [
      "Sprawdzenie zrozumienia zadań, gotowości i monitorowanie sytuacji.",
      "Wyłącznie przygotowanie końcowego komunikatu prasowego.",
      "Ponowne zapisanie celu bez kontaktu z wykonawcami.",
      "Zakończenie koordynacji po wydaniu pierwszych poleceń."
    ],
    "correct": 0,
    "explanation": "Kontrola obejmuje gotowość, zrozumienie zadań, synchronizację i bieżące monitorowanie.",
    "source": "Podejmowanie decyzji dla studentów_cd.pdf · strona PDF 33"
  },
  {
    "id": 18,
    "category": "Podejmowanie decyzji",
    "question": "W ćwiczeniu z obozem zasoby wystarczają dla 2000 osób, a przybyć ma 4000. Jaka luka wynika z tych danych?",
    "options": [
      "Brakuje zdolności zabezpieczenia 2000 osób.",
      "Brakuje zdolności zabezpieczenia 500 osób.",
      "Brakuje zdolności zabezpieczenia 1500 osób.",
      "Zasoby przekraczają potrzeby o 2000 osób."
    ],
    "correct": 0,
    "explanation": "Porównanie przewidywanej liczby osób z dostępną zdolnością daje lukę 4000 − 2000 = 2000 osób.",
    "source": "Podejmowanie decyzji dla studentów_cd.pdf · strona PDF 27–28"
  },
  {
    "id": 19,
    "category": "Podejmowanie decyzji",
    "question": "Co oznacza litera U w modelu VUCA opisanym w prezentacji?",
    "options": [
      "Niepewność (Uncertainty).",
      "Jednolitość (Uniformity).",
      "Użyteczność (Utility).",
      "Jedność (Unity)."
    ],
    "correct": 0,
    "explanation": "VUCA obejmuje zmienność, niepewność, złożoność i niejednoznaczność.",
    "source": "Podejmowanie decyzji dla studentów_cd.pdf · strona PDF 7"
  },
  {
    "id": 20,
    "category": "Podejmowanie decyzji",
    "question": "Jaką odpowiedź na niejednoznaczność wskazano w modelu VUCA?",
    "options": [
      "Elastyczność i adaptację.",
      "Trzymanie się pierwszej interpretacji.",
      "Rezygnację ze współpracy między zespołami.",
      "Zastąpienie planowania oczekiwaniem na pełną pewność."
    ],
    "correct": 0,
    "explanation": "Prezentacja łączy Ambiguity z Agility i Adaptability, czyli elastycznością i adaptacją.",
    "source": "Podejmowanie decyzji dla studentów_cd.pdf · strona PDF 7"
  },
  {
    "id": 21,
    "category": "Obrona i współdziałanie",
    "question": "Co oznacza skrót SRO w omówieniu Wojsk Obrony Terytorialnej?",
    "options": [
      "Stały rejon odpowiedzialności.",
      "System rekrutacji ochotników.",
      "Sztab reagowania operacyjnego.",
      "Strategiczna rezerwa obronna."
    ],
    "correct": 0,
    "explanation": "Koncepcja WOT w materiale opiera się na związku jednostek ze stałym rejonem odpowiedzialności.",
    "source": "Instytut Heweliusza – Moduł. Obrona i struktury siłowe_1.pdf (identyczny z plikiem Michał Kalisiak) · strona PDF 36"
  },
  {
    "id": 22,
    "category": "Obrona i współdziałanie",
    "question": "Który zestaw odpowiada istocie działania WOT wskazanej w materiale?",
    "options": [
      "Powszechność, permanentność i nieliniowość działania.",
      "Centralizacja, czasowość i izolacja od ludności.",
      "Wyłączność, doraźność i działania tylko za granicą.",
      "Specjalizacja morska, ekspedycyjność i rotacyjność."
    ],
    "correct": 0,
    "explanation": "Prezentacja wskazuje te trzy cechy wraz z działaniem w stałych rejonach odpowiedzialności.",
    "source": "Instytut Heweliusza – Moduł. Obrona i struktury siłowe_1.pdf (identyczny z plikiem Michał Kalisiak) · strona PDF 36, 40"
  },
  {
    "id": 23,
    "category": "Obrona i współdziałanie",
    "question": "Który przykład ilustruje współdziałanie WOT z władzami cywilnymi?",
    "options": [
      "Wsparcie ewakuacji ludności i usuwania skutków katastrofy.",
      "Przejęcie uchwalania budżetu gminy.",
      "Zastąpienie samorządu w wydawaniu wszystkich decyzji.",
      "Prowadzenie kampanii wyborczej lokalnych władz."
    ],
    "correct": 0,
    "explanation": "Wśród zadań wsparcia wymieniono ewakuację, działania ratownicze i usuwanie skutków katastrof.",
    "source": "Instytut Heweliusza – Moduł. Obrona i struktury siłowe_1.pdf (identyczny z plikiem Michał Kalisiak) · strona PDF 49"
  },
  {
    "id": 24,
    "category": "Obrona i współdziałanie",
    "question": "Jak w materiale opisano relację WOT do wojsk operacyjnych?",
    "options": [
      "Mogą wspierać i zabezpieczać działania wojsk operacyjnych.",
      "Zastępują wszystkie rodzaje wojsk operacyjnych.",
      "Realizują wyłącznie zadania pozamilitarne.",
      "Funkcjonują bez możliwości współdziałania z innymi wojskami."
    ],
    "correct": 0,
    "explanation": "WOT mogą działać samodzielnie lub wspierać i zabezpieczać inne rodzaje sił zbrojnych.",
    "source": "Instytut Heweliusza – Moduł. Obrona i struktury siłowe_1.pdf (identyczny z plikiem Michał Kalisiak) · strona PDF 36, 60"
  },
  {
    "id": 25,
    "category": "Obrona i współdziałanie",
    "question": "Jakie podejście do odporności państwa wskazuje prezentacja o obronności?",
    "options": [
      "Równoległy rozwój zdolności militarnych, ochrony ludności i odporności infrastruktury.",
      "Skupienie wszystkich zasobów wyłącznie na sprzęcie bojowym.",
      "Przeniesienie całej odpowiedzialności na gospodarstwa domowe.",
      "Rozwijanie ochrony ludności dopiero po zakończeniu kryzysu."
    ],
    "correct": 0,
    "explanation": "Bezpieczeństwo wymaga łączenia zdolności wojskowych i cywilnych z zarządzaniem kryzysowym.",
    "source": "Instytut Heweliusza – Moduł. Obrona i struktury siłowe_1.pdf (identyczny z plikiem Michał Kalisiak) · strona PDF 20"
  },
  {
    "id": 26,
    "category": "Obrona i współdziałanie",
    "question": "Która sekcja sztabu odpowiada logistyce w schematach prezentacji Artura Zielichowskiego?",
    "options": [
      "S-4.",
      "S-1.",
      "S-2.",
      "S-3."
    ],
    "correct": 0,
    "explanation": "W schematach S-1 oznacza sekcję personalną, S-2 rozpoznawczą, S-3 operacyjną, a S-4 logistykę.",
    "source": "Artur Zelichowski.pdf · strona PDF 25, 27"
  },
  {
    "id": 27,
    "category": "Obrona i współdziałanie",
    "question": "Co wskazano jako niezbędny punkt odniesienia dla przewodzenia ludziom?",
    "options": [
      "Cel, wokół którego można zbudować motywację.",
      "Sama liczba podwładnych.",
      "Wyłącznie wysokość nagród finansowych.",
      "Brak wyjaśnień dotyczących sensu działania."
    ],
    "correct": 0,
    "explanation": "Slajd o przywództwie podkreśla, że bez celu nie ma przewodzenia ani kierunku motywowania zespołu.",
    "source": "Artur Zelichowski.pdf · strona PDF 12"
  },
  {
    "id": 28,
    "category": "Zagrożenia hybrydowe",
    "question": "Co jest podstawową cechą działań hybrydowych w prezentacji?",
    "options": [
      "Łączenie instrumentów militarnych i niemilitarnych dla celów strategicznych.",
      "Wykorzystywanie wyłącznie regularnych sił zbrojnych.",
      "Całkowite wyłączenie presji ekonomicznej.",
      "Ograniczenie konfliktu do jednego kanału komunikacji."
    ],
    "correct": 0,
    "explanation": "Hybrydowość polega na łączeniu m.in. działań militarnych, cyberataków, dezinformacji i presji gospodarczej.",
    "source": "Wojna Hybrydowa.pptx · slajd 2"
  },
  {
    "id": 29,
    "category": "Zagrożenia hybrydowe",
    "question": "Jakie obszary obejmuje model DIME?",
    "options": [
      "Dyplomację, informację, militaria i ekonomię.",
      "Demografię, innowacje, migrację i edukację.",
      "Dowodzenie, infrastrukturę, medycynę i energetykę.",
      "Detekcję, interwencję, mobilizację i ewakuację."
    ],
    "correct": 0,
    "explanation": "DIME porządkuje cztery rodzaje instrumentów oddziaływania państwa.",
    "source": "Wojna Hybrydowa.pptx · slajd 3"
  },
  {
    "id": 30,
    "category": "Zagrożenia hybrydowe",
    "question": "Co w prezentacji oznacza „szara strefa” konfliktu?",
    "options": [
      "Rywalizację i destabilizację poniżej progu otwartego konfliktu zbrojnego.",
      "Obszar całkowicie wolny od działań wrogich.",
      "Wyłącznie terytorium kontrolowane przez siły pokojowe.",
      "Formalnie ogłoszony stan pokoju po kapitulacji."
    ],
    "correct": 0,
    "explanation": "Działania w szarej strefie zacierają granicę między pokojem a otwartą wojną.",
    "source": "Wojna Hybrydowa.pptx · slajd 4"
  },
  {
    "id": 31,
    "category": "Zagrożenia hybrydowe",
    "question": "Na czym polega problem atrybucji ataku?",
    "options": [
      "Na trudności wiarygodnego przypisania ataku konkretnemu sprawcy lub państwu.",
      "Na niemożności wyliczenia wyłącznie strat finansowych.",
      "Na konieczności określenia liczby odbiorców komunikatu.",
      "Na ustalaniu kolejności odtwarzania kopii zapasowych."
    ],
    "correct": 0,
    "explanation": "Ukrywanie sprawstwa i użycie pośredników utrudniają wskazanie podmiotu odpowiedzialnego.",
    "source": "Wojna Hybrydowa.pptx · slajd 15"
  },
  {
    "id": 32,
    "category": "Zagrożenia hybrydowe",
    "question": "Jaki cel może realizować dezinformacja podsycająca wewnętrzne konflikty?",
    "options": [
      "Polaryzację społeczną i osłabienie zaufania do instytucji.",
      "Zwiększenie zgodności informacji ze źródłami pierwotnymi.",
      "Ujednolicenie procedur ratowniczych służb.",
      "Poprawę przejrzystości debaty publicznej."
    ],
    "correct": 0,
    "explanation": "W materiale dezinformacja służy m.in. pogłębianiu podziałów i podważaniu zaufania.",
    "source": "Wojna Hybrydowa.pptx · slajd 8"
  },
  {
    "id": 33,
    "category": "Zagrożenia hybrydowe",
    "question": "Co oznacza podejście whole-of-society do odporności?",
    "options": [
      "Współpracę administracji, sektora prywatnego, mediów i obywateli.",
      "Powierzenie całej ochrony wyłącznie wojsku.",
      "Wyłączenie obywateli z przygotowania kryzysowego.",
      "Ograniczenie działań do jednego ministerstwa."
    ],
    "correct": 0,
    "explanation": "Odporność całego społeczeństwa opiera się na zaangażowaniu wielu grup i instytucji.",
    "source": "Wojna Hybrydowa.pptx · slajd 16"
  },
  {
    "id": 34,
    "category": "Zagrożenia hybrydowe",
    "question": "Które działanie ogranicza podatność na szantaż dostawcy surowców?",
    "options": [
      "Dywersyfikacja źródeł dostaw.",
      "Zwiększenie zależności od jednego źródła.",
      "Rezygnacja z monitorowania łańcucha dostaw.",
      "Oparcie wszystkich usług na jednej trasie przesyłu."
    ],
    "correct": 0,
    "explanation": "Różnicowanie źródeł zmniejsza możliwość wywierania presji przez pojedynczego dostawcę.",
    "source": "Wojna Hybrydowa.pptx · slajd 9, 17"
  },
  {
    "id": 35,
    "category": "Współczesne bezpieczeństwo",
    "question": "Które ujęcie bezpieczeństwa odpowiada prezentacji o współczesnych zagrożeniach?",
    "options": [
      "Zdolność państwa i społeczeństwa do przetrwania, rozwoju i reagowania na zagrożenia.",
      "Wyłącznie brak formalnego wypowiedzenia wojny.",
      "Wyłącznie liczebność zawodowych sił zbrojnych.",
      "Całkowity brak jakiegokolwiek ryzyka."
    ],
    "correct": 0,
    "explanation": "Bezpieczeństwo jest wielowymiarowe i obejmuje także sferę społeczną, gospodarczą, informacyjną i ekologiczną.",
    "source": "Współczesne-i-perspektywiczne-wyzwania-i-zagrożenia-bezpieczeństwa.pptx · slajd 2"
  },
  {
    "id": 36,
    "category": "Współczesne bezpieczeństwo",
    "question": "Jakie dwa wymiary są kluczowe przy ocenie ryzyka zagrożenia?",
    "options": [
      "Prawdopodobieństwo wystąpienia i potencjalne skutki.",
      "Liczba publikacji w mediach i długość nagłówków.",
      "Popularność tematu i liczba komentarzy.",
      "Data utworzenia instytucji i liczba jej pracowników."
    ],
    "correct": 0,
    "explanation": "Ocena ryzyka łączy identyfikację zagrożeń z analizą prawdopodobieństwa i konsekwencji.",
    "source": "Współczesne-i-perspektywiczne-wyzwania-i-zagrożenia-bezpieczeństwa.pptx · slajd 11"
  },
  {
    "id": 37,
    "category": "Współczesne bezpieczeństwo",
    "question": "Który zestaw obejmuje zagrożenia ekologiczne wskazane w prezentacji?",
    "options": [
      "Powodzie, susze i deficyt wody.",
      "Inflacja, zadłużenie i kryzys bankowy.",
      "Dezinformacja, propaganda i fałszywe profile.",
      "Polaryzacja, radykalizacja i spadek zaufania."
    ],
    "correct": 0,
    "explanation": "Prezentacja wymienia powodzie, susze, deficyt wody i degradację środowiska jako zagrożenia ekologiczne.",
    "source": "Współczesne-i-perspektywiczne-wyzwania-i-zagrożenia-bezpieczeństwa.pptx · slajd 8"
  },
  {
    "id": 38,
    "category": "Współczesne bezpieczeństwo",
    "question": "Po co priorytetyzować zagrożenia w analizie ryzyka?",
    "options": [
      "Aby kierować ograniczone zasoby do najważniejszych potrzeb.",
      "Aby nie trzeba było aktualizować oceny sytuacji.",
      "Aby wszystkie ryzyka otrzymały identyczne finansowanie.",
      "Aby zastąpić dane wyłącznie opinią jednej osoby."
    ],
    "correct": 0,
    "explanation": "Priorytetyzacja wspiera racjonalny podział zasobów, a oceny nadal wymagają aktualizacji.",
    "source": "Współczesne-i-perspektywiczne-wyzwania-i-zagrożenia-bezpieczeństwa.pptx · slajd 11"
  },
  {
    "id": 39,
    "category": "Współczesne bezpieczeństwo",
    "question": "Jaki jest główny pożytek ze stałego monitorowania zagrożeń?",
    "options": [
      "Wcześniejsze wykrywanie zmian i szybsze reagowanie.",
      "Usunięcie potrzeby współpracy między instytucjami.",
      "Zagwarantowanie, że kryzys nigdy nie wystąpi.",
      "Zastąpienie wszystkich planów jednym komunikatem."
    ],
    "correct": 0,
    "explanation": "Monitoring i wczesne ostrzeganie pomagają ograniczać skutki kryzysu przez szybszą reakcję.",
    "source": "Współczesne-i-perspektywiczne-wyzwania-i-zagrożenia-bezpieczeństwa.pptx · slajd 10"
  },
  {
    "id": 40,
    "category": "Przygotowanie na kryzys",
    "question": "Co warto ustalić z domownikami na wypadek rozdzielenia podczas kryzysu?",
    "options": [
      "Wspólne miejsce kontaktowe, do którego mogą dotrzeć.",
      "Założenie, że wszyscy zawsze będą mieli dostęp do internetu.",
      "Zasadę, że każdy sam wybierze inne miejsce spotkania.",
      "Kontakt wyłącznie przez jeden komunikator wymagający sieci."
    ],
    "correct": 0,
    "explanation": "Poradnik zaleca wcześniejsze uzgodnienie miejsca spotkania po przypadkowym rozdzieleniu.",
    "source": "Bądź_gotowy!_poradnik.pdf · strona PDF 6"
  },
  {
    "id": 41,
    "category": "Przygotowanie na kryzys",
    "question": "Dlaczego radio na baterie jest przydatne w zestawie awaryjnym?",
    "options": [
      "Pozwala odbierać komunikaty przy ograniczonym dostępie do prądu i sieci telefonicznej.",
      "Zastępuje wszystkie zapasy żywności.",
      "Gwarantuje działanie pobliskich bankomatów.",
      "Automatycznie przekazuje służbom położenie każdej osoby."
    ],
    "correct": 0,
    "explanation": "Poradnik zakłada możliwe zakłócenia łączności i wskazuje radio jako źródło komunikatów.",
    "source": "Bądź_gotowy!_poradnik.pdf · strona PDF 8, 29"
  },
  {
    "id": 42,
    "category": "Przygotowanie na kryzys",
    "question": "Który zapas żywności najlepiej odpowiada przygotowaniu na awarie prądu?",
    "options": [
      "Produkty trwałe, które można spożyć bez chłodzenia i gotowania.",
      "Wyłącznie produkty mrożone wymagające pieczenia.",
      "Wyłącznie świeże produkty o krótkiej trwałości.",
      "Posiłki możliwe do przygotowania tylko w kuchence elektrycznej."
    ],
    "correct": 0,
    "explanation": "Awaryjne zapasy powinny ograniczać zależność od lodówki i dostępu do energii.",
    "source": "Bądź_gotowy!_poradnik.pdf · strona PDF 16"
  },
  {
    "id": 43,
    "category": "Przygotowanie na kryzys",
    "question": "Dlaczego plan ewakuacji powinien uwzględniać mapę i alternatywne trasy?",
    "options": [
      "Ponieważ GPS może nie działać, a planowana trasa może być niedostępna.",
      "Ponieważ wyklucza to potrzebę słuchania komunikatów służb.",
      "Ponieważ alternatywna trasa zawsze jest najkrótsza.",
      "Ponieważ mapa zapewnia rezerwę paliwa."
    ],
    "correct": 0,
    "explanation": "Poradnik zaleca przygotowanie tras podstawowych i zapasowych oraz map na wypadek utraty nawigacji.",
    "source": "Bądź_gotowy!_poradnik.pdf · strona PDF 17"
  },
  {
    "id": 44,
    "category": "Przygotowanie na kryzys",
    "question": "Jaka organizacja plecaków ewakuacyjnych jest zalecana w poradniku?",
    "options": [
      "Osobny, przygotowany plecak dla każdego domownika.",
      "Jeden bardzo ciężki plecak przeznaczony dla całej rodziny.",
      "Pakowanie wszystkich rzeczy dopiero po rozpoczęciu ewakuacji.",
      "Przechowywanie niezbędnego wyposażenia wyłącznie w telefonie."
    ],
    "correct": 0,
    "explanation": "Wcześniej przygotowany osobny plecak ułatwia szybkie opuszczenie domu.",
    "source": "Bądź_gotowy!_poradnik.pdf · strona PDF 13"
  },
  {
    "id": 45,
    "category": "Terroryzm i reagowanie",
    "question": "Jaki cel działania aktywnego strzelca eksponuje prezentacja?",
    "options": [
      "Spowodowanie jak największej liczby ofiar.",
      "Uzyskanie korzyści wyłącznie z kradzieży mienia.",
      "Prowadzenie długotrwałych negocjacji o okup jako stały warunek.",
      "Zorganizowanie pokojowej demonstracji bez przemocy."
    ],
    "correct": 0,
    "explanation": "Materiał wyróżnia aktywnego strzelca przez trwające dążenie do zabijania; zaznacza też możliwość bardziej złożonego zdarzenia.",
    "source": "Mariusz B.pptx · slajd 5"
  },
  {
    "id": 46,
    "category": "Terroryzm i reagowanie",
    "question": "Który cel działań służb wskazano w materiale dotyczącym aktywnego strzelca?",
    "options": [
      "Przerwanie procesu zabijania i ochrona życia osób w rejonie zagrożenia.",
      "Przywrócenie ruchu drogowego przed ograniczeniem zagrożenia.",
      "Zebranie pełnej dokumentacji przed podjęciem jakichkolwiek działań.",
      "Utrzymywanie osób postronnych w rejonie działania sprawcy."
    ],
    "correct": 0,
    "explanation": "Prezentacja wymienia ochronę życia, neutralizację zagrożenia i umożliwienie opuszczenia niebezpiecznego rejonu.",
    "source": "Mariusz B.pptx · slajd 9, 11"
  },
  {
    "id": 47,
    "category": "Terroryzm i reagowanie",
    "question": "Jaki jest cel izolowania rejonu działania uzbrojonego napastnika?",
    "options": [
      "Ograniczenie dostępu osób postronnych do strefy zagrożenia.",
      "Zapewnienie publiczności miejsca do obserwacji interwencji.",
      "Uniemożliwienie przekazywania informacji między służbami.",
      "Zastąpienie wszystkich pozostałych działań ratowniczych."
    ],
    "correct": 0,
    "explanation": "Izolowanie miejsca zdarzenia służy ograniczeniu narażenia kolejnych osób i wspiera prowadzenie działań.",
    "source": "Mariusz B.pptx · slajd 9–11"
  },
  {
    "id": 48,
    "category": "Odporność lokalna",
    "question": "Od czego zaczyna się oddolne projektowanie systemu ochrony w czytelnych notatkach?",
    "options": [
      "Analizy zagrożeń, inwentaryzacji zasobów i oceny zdolności.",
      "Zakupu wyposażenia bez rozpoznania lokalnych potrzeb.",
      "Skopiowania planu innej gminy bez zmian.",
      "Przygotowania komunikatu o zakończeniu wdrożenia."
    ],
    "correct": 0,
    "explanation": "Podejście bottom-up wiąże projekt systemu z konkretnymi zagrożeniami i lokalnymi możliwościami.",
    "source": "Notatki_1.odt · sekcja: Obrona cywilna"
  },
  {
    "id": 49,
    "category": "Odporność lokalna",
    "question": "Jaki cel debriefingu wskazano w notatkach?",
    "options": [
      "Odkrycie słabych punktów systemu po ćwiczeniu lub działaniu.",
      "Potwierdzenie z góry, że wszystkie procedury były doskonałe.",
      "Pominięcie obserwacji uczestników dla skrócenia spotkania.",
      "Zakończenie aktualizowania planów na kolejny rok."
    ],
    "correct": 0,
    "explanation": "Omówienie ujawnia niedostatki, które można wykorzystać do dalszego doskonalenia systemu.",
    "source": "Notatki_1.odt · sekcja: Obrona cywilna"
  },
  {
    "id": 50,
    "category": "Odporność lokalna",
    "question": "Jak według notatek należy utrzymywać sprawność systemu ochrony ludności?",
    "options": [
      "Regularnie ćwiczyć, sprawdzać i udoskonalać system na różnych szczeblach.",
      "Uznać system za gotowy po jednorazowym opracowaniu dokumentacji.",
      "Wprowadzać zmiany dopiero po wystąpieniu poważnych strat.",
      "Oceniać gotowość wyłącznie na podstawie liczby zakupionych urządzeń."
    ],
    "correct": 0,
    "explanation": "Notatki podkreślają ciągłą ewolucję systemu, ćwiczenia i weryfikację jego działania.",
    "source": "Notatki_1.odt · sekcja: Obrona cywilna"
  }
];
