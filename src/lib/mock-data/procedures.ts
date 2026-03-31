import { Procedure } from '@/types';

const procedures: Procedure[] = [
  {
    id: '1',
    slug: 'rhinoplastyka-estetyczna',
    title: 'Rhinoplastyka estetyczna',
    excerpt: 'Korekta kształtu nosa dla harmonijnego wyglądu twarzy.',
    content: '',
    categorySlug: 'chirurgia-twarzy',
    subcategorySlug: 'rhinoplastyka',
    bodyArea: 'face',
    featuredImage: {
      url: '/images/procedures/rhinoplastyka.jpg',
      alt: 'Rhinoplastyka - korekta nosa',
      width: 800,
      height: 1000,
    },
    painLevel: 4,
    priceRange: { min: 8000, max: 25000 },
    recoveryTime: '2-3 tygodnie',
    anesthesiaType: 'general',
    resultDuration: 'trwałe',
    operationDuration: '1.5-3 godziny',
    hospitalization: '1 noc',
    satisfactionRate: 94,
    popularityScore: 98,
    contraindications: [
      'Aktywne infekcje górnych dróg oddechowych',
      'Nieuregulowana cukrzyca',
      'Zaburzenia krzepnięcia krwi',
    ],
    risks: [
      'Asymetria nosa',
      'Trudności w oddychaniu',
      'Przebarwienia skóry',
    ],
    benefits: [
      'Poprawa proporcji nosa do twarzy',
      'Zwiększenie pewności siebie',
      'Korekta problemów z oddychaniem',
      'Trwałe efekty',
    ],
    aftercareSteps: [
      { day: '1-3', instruction: 'Odpoczynek, unikanie wysiłku' },
      { day: '4-7', instruction: 'Zdjęcie opatrunku gipsowego' },
      { day: '2-3 tygodnie', instruction: 'Unikanie sportu i ciężkiej pracy' },
      { day: '6 miesięcy', instruction: 'Ostateczny kształt nosa' },
    ],
    faq: [
      {
        question: 'Czy rhinoplastyka jest bolesna?',
        answer: 'Sam zabieg jest wykonywany pod narkozą, więc nie odczuwasz bólu. Po operacji możesz odczuwać dyskomfort i obrzęk, który ustępuje w ciągu 1-2 tygodni.',
      },
      {
        question: 'Jak długo trzeba nosić opatunek?',
        answer: 'Opatrunek gipsowy nosi się około 7-10 dni. Przez kilka pierwszych dni mogą być również wkładane tampony do nosa.',
      },
      {
        question: 'Kiedy widoczny jest efekt końcowy?',
        answer: 'Ostateczny kształt nosa kształtuje się przez około 6 miesięcy do roku po zabiegu, choć podstawowy efekt widoczny jest po zdjęciu gipsu.',
      },
      {
        question: 'Czy można oddychać normalnie po zabiegu?',
        answer: 'Przez pierwsze dni może być utrudnione oddychanie przez nos z powodu obrzęku. Zazwyczaj po 2-3 tygodniach oddychanie wraca do normy.',
      },
    ],
    relatedProcedures: ['blefaroplastyka-gorna', 'lifting-twarzy-deep-plane', 'lipofilling-twarzy'],
    seo: {
      title: 'Rhinoplastyka estetyczna — cena, przebieg, efekty',
      description: 'Rhinoplastyka estetyczna - korekta nosa. Sprawdź cenę, przebieg zabiegu, czas rekonwalescencji i efekty.',
    },
    updatedAt: '2026-01-15',
  },
  {
    id: '2',
    slug: 'blefaroplastyka-gorna',
    title: 'Blefaroplastyka górna',
    excerpt: 'Usunięcie nadmiaru skóry i tłuszczu z powiek górnych.',
    content: '',
    categorySlug: 'chirurgia-twarzy',
    subcategorySlug: 'blefaroplastyka',
    bodyArea: 'face',
    featuredImage: {
      url: '/images/procedures/blefaroplastyka.jpg',
      alt: 'Blefaroplastyka - korekta powiek',
      width: 800,
      height: 1000,
    },
    painLevel: 2,
    priceRange: { min: 4000, max: 8000 },
    recoveryTime: '10-14 dni',
    anesthesiaType: 'local',
    resultDuration: '5-10 lat',
    operationDuration: '45-90 minut',
    hospitalization: 'wychód tego samego dnia',
    satisfactionRate: 96,
    popularityScore: 88,
    contraindications: [
      'Zespół suchego oka',
      'Aktywne choroby oczu',
      'Nieuregulowane ciśnienie krwi',
    ],
    risks: [
      'Przejściowe problemy z zamykaniem oka',
      'Asymetria powiek',
      'Infekcja rany',
    ],
    benefits: [
      'Młodszy, wypoczęty wygląd',
      'Poprawa поля widzenia',
      'Krótki czas rekonwalescencji',
      'Subtelne, naturalne efekty',
    ],
    aftercareSteps: [
      { day: '1-3', instruction: 'Zimne kompresy, unikanie wysiłku' },
      { day: '5-7', instruction: 'Zdjęcie szwów' },
      { day: '2 tygodnie', instruction: 'Powrót do normalnej aktywności' },
      { day: '4-6 tygodni', instruction: 'Unikanie basenu i sauny' },
    ],
    faq: [
      {
        question: 'Czy blefaroplastyka zostawia widoczne blizny?',
        answer: 'Blizny są ukryte w naturalnym załamaniu powieki i po pełnym wygojeniu są prawie niewidoczne.',
      },
      {
        question: 'Jak długo utrzymuje się efekt?',
        answer: 'Efekt blefaroplastyki górnej utrzymuje się zazwyczaj 5-10 lat, w zależności od indywidualnych czynników.',
      },
      {
        question: 'Czy można wrócić do pracy po zabiegu?',
        answer: 'Większość pacjentów wraca do pracy biurowej po 7-10 dniach. Zaleca się unikanie wysiłku fizycznego przez 2-3 tygodnie.',
      },
    ],
    relatedProcedures: ['rhinoplastyka-estetyczna', 'lifting-twarzy-deep-plane'],
    seo: {
      title: 'Blefaroplastyka górna — cena, przebieg, efekty',
      description: 'Blefaroplastyka powiek górnych - usunięcie opadającej skóry powiek. Sprawdź cenę i efekty zabiegu.',
    },
    updatedAt: '2026-01-10',
  },
  {
    id: '3',
    slug: 'lifting-twarzy-deep-plane',
    title: 'Lifting twarzy deep plane',
    excerpt: 'Najbardziej zaawansowana technika liftingu twarzy dla naturalnych rezultatów.',
    content: '',
    categorySlug: 'chirurgia-twarzy',
    subcategorySlug: 'lifting-twarzy',
    bodyArea: 'face',
    featuredImage: {
      url: '/images/procedures/lifting-deep-plane.jpg',
      alt: 'Lifting twarzy metodą deep plane',
      width: 800,
      height: 1000,
    },
    painLevel: 5,
    priceRange: { min: 25000, max: 55000 },
    recoveryTime: '3-4 tygodnie',
    anesthesiaType: 'general',
    resultDuration: '10-15 lat',
    operationDuration: '4-6 godzin',
    hospitalization: '1-2 noce',
    satisfactionRate: 97,
    popularityScore: 85,
    contraindications: [
      'Aktywne infekcje',
      'Ciężkie choroby serca',
      'Zaburzenia krzepnięcia',
    ],
    risks: [
      'Uszkodzenie nerwu twarzowego',
      'Asymetria',
      'Przebarwienia skóry',
    ],
    benefits: [
      'Najbardziej naturalny efekt liftingu',
      'Długotrwałe rezultaty',
      'Poprawa konturu twarzy i szyi',
      'Minimalne napięcie skóry',
    ],
    aftercareSteps: [
      { day: '1-2', instruction: 'Odpoczynek w pozycji półsiedzącej' },
      { day: '3-5', instruction: 'Zdjęcie drenażów' },
      { day: '2-3 tygodnie', instruction: 'Zdjęcie szwów' },
      { day: '6-8 tygodni', instruction: 'Powrót do pełnej aktywności' },
    ],
    faq: [
      {
        question: 'Czym lifting deep plane różni się od tradycyjnego liftingu?',
        answer: 'Technika deep plane operuje na głębszych warstwach tkanek, co pozwala na przemieszczenie tkanek bez napięcia skóry, dając bardziej naturalne i długotrwałe efekty.',
      },
      {
        question: 'Jak długo trwa rekonwalescencja?',
        answer: 'Podstawowy powrót do formy to 3-4 tygodnie. Obrzęk i zasinienia ustępują stopniowo, a ostateczny efekt widoczny jest po 3-6 miesiącach.',
      },
      {
        question: 'Czy efekt liftingu jest trwały?',
        answer: 'Tak, efekty liftingu deep plane utrzymują się 10-15 lat. Proces starzenia nadal postępuje, ale będziesz wyglądać zawsze młodziej niż bez zabiegu.',
      },
    ],
    relatedProcedures: ['blefaroplastyka-gorna', 'rhinoplastyka-estetyczna'],
    seo: {
      title: 'Lifting twarzy deep plane — cena, przebieg, efekty',
      description: 'Lifting twarzy metodą deep plane - najnowocześniejsza technika odmładzania twarzy. Sprawdź cenę i efekty.',
    },
    updatedAt: '2026-01-12',
  },
  {
    id: '4',
    slug: 'otoplastyka',
    title: 'Otoplastyka',
    excerpt: 'Korekta odstających uszu dla harmonijnego wyglądu.',
    content: '',
    categorySlug: 'chirurgia-twarzy',
    subcategorySlug: 'otoplastyka',
    bodyArea: 'face',
    featuredImage: {
      url: '/images/procedures/otoplastyka.jpg',
      alt: 'Otoplastyka - korekta uszu',
      width: 800,
      height: 1000,
    },
    painLevel: 3,
    priceRange: { min: 5000, max: 12000 },
    recoveryTime: '2-3 tygodnie',
    anesthesiaType: 'local',
    resultDuration: 'trwałe',
    operationDuration: '1-2 godziny',
    hospitalization: 'wychód tego samego dnia',
    satisfactionRate: 95,
    popularityScore: 72,
    contraindications: [
      'Aktywne infekcje ucha',
      'Zaburzenia gojenia',
      'Nieuregulowana cukrzyca',
    ],
    risks: [
      'Asymetria uszu',
      'Przebarwienia skóry',
      'Infekcja rany',
    ],
    benefits: [
      'Trwała korekta odstających uszu',
      'Poprawa pewności siebie',
      'Minimalne blizny',
      'Szybka rekonwalescencja',
    ],
    aftercareSteps: [
      { day: '1-3', instruction: 'Noszenie opaski uciskowej' },
      { day: '7-10', instruction: 'Zdjęcie szwów' },
      { day: '2-3 tygodnie', instruction: 'Unikanie sportu' },
      { day: '6 tygodni', instruction: 'Spanie na plecach' },
    ],
    faq: [
      {
        question: 'Czy otoplastyka jest bolesna?',
        answer: 'Zabieg wykonywany jest w znieczuleniu miejscowym, więc nie odczuwasz bólu. Po zabiegu może wystąpić przejściowy dyskomfort.',
      },
      {
        question: 'Kiedy można wrócić do pracy?',
        answer: 'Do pracy biurowej można wrócić po 3-5 dniach. Praca fizyczna wymaga 2-3 tygodni przerwy.',
      },
      {
        question: 'Czy efekt jest trwały?',
        answer: 'Tak, efekt otoplastyki jest trwały. Raz skorygowane uszy zachowują swój kształt na stałe.',
      },
    ],
    relatedProcedures: [],
    seo: {
      title: 'Otoplastyka — cena, przebieg, efekty',
      description: 'Otoplastyka - korekta odstających uszu. Sprawdź cenę, przebieg zabiegu i efekty.',
    },
    updatedAt: '2026-01-08',
  },
];

export function getMockProcedures() {
  return procedures;
}

export function getMockProcedureBySlug(slug: string) {
  return procedures.find((p) => p.slug === slug) || null;
}