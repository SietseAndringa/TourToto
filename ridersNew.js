const riders = [
  {
    id: 1,
    name: " VINGEGAARD Jonas",
    team: "Team Visma | Lease a Bike",
    inCourse: true,
  },
  {
    id: 2,
    name: " BENOOT Tiesj",
    team: "Team Visma | Lease a Bike",
    inCourse: true,
  },
  {
    id: 3,
    name: " JORGENSON Matteo",
    team: "Team Visma | Lease a Bike",
    inCourse: true,
  },
  {
    id: 4,
    name: " KELDERMAN Wilco",
    team: "Team Visma | Lease a Bike",
    inCourse: true,
  },
  {
    id: 5,
    name: " LAPORTE Christophe",
    team: "Team Visma | Lease a Bike",
    inCourse: true,
  },
  {
    id: 6,
    name: " LEMMEN Bart",
    team: "Team Visma | Lease a Bike",
    inCourse: true,
  },
  {
    id: 7,
    name: " TRATNIK Jan",
    team: "Team Visma | Lease a Bike",
    inCourse: true,
  },
  {
    id: 8,
    name: " VAN AERT Wout",
    team: "Team Visma | Lease a Bike",
    inCourse: true,
  },
  {
    id: 11,
    name: " POGAČAR Tadej",
    team: "UAE Team Emirates",
    inCourse: true,
  },
  {
    id: 12,
    name: " ALMEIDA João",
    team: "UAE Team Emirates",
    inCourse: true,
  },
  {
    id: 13,
    name: " AYUSO Juan",
    team: "UAE Team Emirates",
    inCourse: true,
  },
  {
    id: 14,
    name: " POLITT Nils",
    team: "UAE Team Emirates",
    inCourse: true,
  },
  {
    id: 15,
    name: " SIVAKOV Pavel",
    team: "UAE Team Emirates",
    inCourse: true,
  },
  {
    id: 16,
    name: " SOLER Marc",
    team: "UAE Team Emirates",
    inCourse: true,
  },
  {
    id: 17,
    name: " WELLENS Tim",
    team: "UAE Team Emirates",
    inCourse: true,
  },
  {
    id: 18,
    name: " YATES Adam",
    team: "UAE Team Emirates",
    inCourse: true,
  },
  {
    id: 21,
    name: " YATES Simon",
    team: "Team Jayco AlUla",
    inCourse: true,
  },
  {
    id: 22,
    name: " DURBRIDGE Luke",
    team: "Team Jayco AlUla",
    inCourse: true,
  },
  {
    id: 23,
    name: " GROENEWEGEN Dylan",
    team: "Team Jayco AlUla",
    inCourse: true,
  },
  {
    id: 24,
    name: " HARPER Chris",
    team: "Team Jayco AlUla",
    inCourse: true,
  },
  {
    id: 25,
    name: " JUUL-JENSEN Christopher",
    team: "Team Jayco AlUla",
    inCourse: true,
  },
  {
    id: 26,
    name: " MATTHEWS Michael",
    team: "Team Jayco AlUla",
    inCourse: true,
  },
  {
    id: 27,
    name: " MEZGEC Luka",
    team: "Team Jayco AlUla",
    inCourse: true,
  },
  {
    id: 28,
    name: " REINDERS Elmar",
    team: "Team Jayco AlUla",
    inCourse: true,
  },
  {
    id: 31,
    name: " RODRÍGUEZ Carlos",
    team: "INEOS Grenadiers",
    inCourse: true,
  },
  {
    id: 32,
    name: " BERNAL Egan",
    team: "INEOS Grenadiers",
    inCourse: true,
  },
  {
    id: 33,
    name: " CASTROVIEJO Jonathan",
    team: "INEOS Grenadiers",
    inCourse: true,
  },
  {
    id: 34,
    name: " DE PLUS Laurens",
    team: "INEOS Grenadiers",
    inCourse: true,
  },
  {
    id: 35,
    name: " KWIATKOWSKI Michał",
    team: "INEOS Grenadiers",
    inCourse: true,
  },
  {
    id: 36,
    name: " PIDCOCK Thomas",
    team: "INEOS Grenadiers",
    inCourse: true,
  },
  {
    id: 37,
    name: " THOMAS Geraint",
    team: "INEOS Grenadiers",
    inCourse: true,
  },
  {
    id: 38,
    name: " TURNER Ben",
    team: "INEOS Grenadiers",
    inCourse: true,
  },
  {
    id: 41,
    name: " CICCONE Giulio",
    team: "Lidl - Trek",
    inCourse: true,
  },
  {
    id: 42,
    name: " BERNARD Julien",
    team: "Lidl - Trek",
    inCourse: true,
  },
  {
    id: 43,
    name: " DECLERCQ Tim",
    team: "Lidl - Trek",
    inCourse: false,
  },
  {
    id: 44,
    name: " GIBBONS Ryan",
    team: "Lidl - Trek",
    inCourse: true,
  },
  {
    id: 45,
    name: " PEDERSEN Mads",
    team: "Lidl - Trek",
    inCourse: false,
  },
  {
    id: 46,
    name: " SKUJIŅŠ Toms",
    team: "Lidl - Trek",
    inCourse: true,
  },
  {
    id: 47,
    name: " STUYVEN Jasper",
    team: "Lidl - Trek",
    inCourse: true,
  },
  {
    id: 48,
    name: " VERONA Carlos",
    team: "Lidl - Trek",
    inCourse: true,
  },
  {
    id: 51,
    name: " GALL Felix",
    team: "Decathlon AG2R La Mondiale Team",
    inCourse: true,
  },
  {
    id: 52,
    name: " ARMIRAIL Bruno",
    team: "Decathlon AG2R La Mondiale Team",
    inCourse: true,
  },
  {
    id: 53,
    name: " BENNETT Sam",
    team: "Decathlon AG2R La Mondiale Team",
    inCourse: true,
  },
  {
    id: 54,
    name: " GODON Dorian",
    team: "Decathlon AG2R La Mondiale Team",
    inCourse: true,
  },
  {
    id: 55,
    name: " LAPEIRA Paul",
    team: "Decathlon AG2R La Mondiale Team",
    inCourse: true,
  },
  {
    id: 56,
    name: " NAESEN Oliver",
    team: "Decathlon AG2R La Mondiale Team",
    inCourse: true,
  },
  {
    id: 57,
    name: " PETERS Nans",
    team: "Decathlon AG2R La Mondiale Team",
    inCourse: true,
  },
  {
    id: 58,
    name: " PRODHOMME Nicolas",
    team: "Decathlon AG2R La Mondiale Team",
    inCourse: true,
  },
  {
    id: 61,
    name: " BILBAO Pello",
    team: "Bahrain - Victorious",
    inCourse: false,
  },
  {
    id: 62,
    name: " ARNDT Nikias",
    team: "Bahrain - Victorious",
    inCourse: true,
  },
  {
    id: 63,
    name: " BAUHAUS Phil",
    team: "Bahrain - Victorious",
    inCourse: true,
  },
  {
    id: 64,
    name: " BUITRAGO Santiago",
    team: "Bahrain - Victorious",
    inCourse: true,
  },
  {
    id: 65,
    name: " HAIG Jack",
    team: "Bahrain - Victorious",
    inCourse: true,
  },
  {
    id: 66,
    name: " MOHORIČ Matej",
    team: "Bahrain - Victorious",
    inCourse: true,
  },
  {
    id: 67,
    name: " POELS Wout",
    team: "Bahrain - Victorious",
    inCourse: true,
  },
  {
    id: 68,
    name: " WRIGHT Fred",
    team: "Bahrain - Victorious",
    inCourse: false,
  },
  {
    id: 71,
    name: " EVENEPOEL Remco",
    team: "Soudal Quick-Step",
    inCourse: true,
  },
  {
    id: 72,
    name: " HIRT Jan",
    team: "Soudal Quick-Step",
    inCourse: true,
  },
  {
    id: 73,
    name: " LAMPAERT Yves",
    team: "Soudal Quick-Step",
    inCourse: true,
  },
  {
    id: 74,
    name: " LANDA Mikel",
    team: "Soudal Quick-Step",
    inCourse: true,
  },
  {
    id: 75,
    name: " MOSCON Gianni",
    team: "Soudal Quick-Step",
    inCourse: true,
  },
  {
    id: 76,
    name: " PEDERSEN Casper",
    team: "Soudal Quick-Step",
    inCourse: false,
  },
  {
    id: 77,
    name: " VAN WILDER Ilan",
    team: "Soudal Quick-Step",
    inCourse: true,
  },
  {
    id: 78,
    name: " VERVAEKE Louis",
    team: "Soudal Quick-Step",
    inCourse: true,
  },
  {
    id: 81,
    name: " ROGLIČ Primož",
    team: "Red Bull – BORA – hansgrohe",
    inCourse: true,
  },
  {
    id: 82,
    name: " DENZ Nico",
    team: "Red Bull – BORA – hansgrohe",
    inCourse: true,
  },
  {
    id: 83,
    name: " HALLER Marco",
    team: "Red Bull – BORA – hansgrohe",
    inCourse: true,
  },
  {
    id: 84,
    name: " HINDLEY Jai",
    team: "Red Bull – BORA – hansgrohe",
    inCourse: true,
  },
  {
    id: 85,
    name: " JUNGELS Bob",
    team: "Red Bull – BORA – hansgrohe",
    inCourse: true,
  },
  {
    id: 86,
    name: " SOBRERO Matteo",
    team: "Red Bull – BORA – hansgrohe",
    inCourse: true,
  },
  {
    id: 87,
    name: " VAN POPPEL Danny",
    team: "Red Bull – BORA – hansgrohe",
    inCourse: true,
  },
  {
    id: 88,
    name: " VLASOV Aleksandr",
    team: "Red Bull – BORA – hansgrohe",
    inCourse: false,
  },
  {
    id: 91,
    name: " GAUDU David",
    team: "Groupama - FDJ",
    inCourse: true,
  },
  {
    id: 92,
    name: " GENIETS Kevin",
    team: "Groupama - FDJ",
    inCourse: true,
  },
  {
    id: 93,
    name: " GRÉGOIRE Romain",
    team: "Groupama - FDJ",
    inCourse: true,
  },
  {
    id: 94,
    name: " KÜNG Stefan",
    team: "Groupama - FDJ",
    inCourse: true,
  },
  {
    id: 95,
    name: " MADOUAS Valentin",
    team: "Groupama - FDJ",
    inCourse: true,
  },
  {
    id: 96,
    name: " MARTINEZ Lenny",
    team: "Groupama - FDJ",
    inCourse: true,
  },
  {
    id: 97,
    name: " PACHER Quentin",
    team: "Groupama - FDJ",
    inCourse: true,
  },
  {
    id: 98,
    name: " RUSSO Clément",
    team: "Groupama - FDJ",
    inCourse: true,
  },
  {
    id: 101,
    name: " VAN DER POEL Mathieu",
    team: "Alpecin - Deceuninck",
    inCourse: true,
  },
  {
    id: 102,
    name: " DILLIER Silvan",
    team: "Alpecin - Deceuninck",
    inCourse: true,
  },
  {
    id: 103,
    name: " GHYS Robbe",
    team: "Alpecin - Deceuninck",
    inCourse: true,
  },
  {
    id: 104,
    name: " KRAGH ANDERSEN Søren",
    team: "Alpecin - Deceuninck",
    inCourse: true,
  },
  {
    id: 105,
    name: " LAURANCE Axel",
    team: "Alpecin - Deceuninck",
    inCourse: true,
  },
  {
    id: 106,
    name: " PHILIPSEN Jasper",
    team: "Alpecin - Deceuninck",
    inCourse: true,
  },
  {
    id: 107,
    name: " RICKAERT Jonas",
    team: "Alpecin - Deceuninck",
    inCourse: true,
  },
  {
    id: 108,
    name: " VERMEERSCH Gianni",
    team: "Alpecin - Deceuninck",
    inCourse: true,
  },
  {
    id: 111,
    name: " CARAPAZ Richard",
    team: "EF Education - EasyPost",
    inCourse: true,
  },
  {
    id: 112,
    name: " BETTIOL Alberto",
    team: "EF Education - EasyPost",
    inCourse: true,
  },
  {
    id: 113,
    name: " BISSEGGER Stefan",
    team: "EF Education - EasyPost",
    inCourse: true,
  },
  {
    id: 114,
    name: " COSTA Rui",
    team: "EF Education - EasyPost",
    inCourse: true,
  },
  {
    id: 115,
    name: " HEALY Ben",
    team: "EF Education - EasyPost",
    inCourse: true,
  },
  {
    id: 116,
    name: " POWLESS Neilson",
    team: "EF Education - EasyPost",
    inCourse: true,
  },
  {
    id: 117,
    name: " QUINN Sean",
    team: "EF Education - EasyPost",
    inCourse: true,
  },
  {
    id: 118,
    name: " VAN DEN BERG Marijn",
    team: "EF Education - EasyPost",
    inCourse: true,
  },
  {
    id: 121,
    name: " DE LIE Arnaud",
    team: "Lotto Dstny",
    inCourse: true,
  },
  {
    id: 122,
    name: " BEULLENS Cedric",
    team: "Lotto Dstny",
    inCourse: true,
  },
  {
    id: 123,
    name: " CAMPENAERTS Victor",
    team: "Lotto Dstny",
    inCourse: true,
  },
  {
    id: 124,
    name: " DRIZNERS Jarrad",
    team: "Lotto Dstny",
    inCourse: true,
  },
  {
    id: 125,
    name: " GRIGNARD Sébastien",
    team: "Lotto Dstny",
    inCourse: true,
  },
  {
    id: 126,
    name: " VAN GILS Maxim",
    team: "Lotto Dstny",
    inCourse: true,
  },
  {
    id: 127,
    name: " VANHOUCKE Harm",
    team: "Lotto Dstny",
    inCourse: true,
  },
  {
    id: 128,
    name: " VAN MOER Brent",
    team: "Lotto Dstny",
    inCourse: true,
  },
  {
    id: 131,
    name: " WILLIAMS Stephen",
    team: "Israel - Premier Tech",
    inCourse: true,
  },
  {
    id: 132,
    name: " ACKERMANN Pascal",
    team: "Israel - Premier Tech",
    inCourse: true,
  },
  {
    id: 133,
    name: " BOIVIN Guillaume",
    team: "Israel - Premier Tech",
    inCourse: true,
  },
  {
    id: 134,
    name: " FUGLSANG Jakob",
    team: "Israel - Premier Tech",
    inCourse: true,
  },
  {
    id: 135,
    name: " GEE Derek",
    team: "Israel - Premier Tech",
    inCourse: true,
  },
  {
    id: 136,
    name: " HOULE Hugo",
    team: "Israel - Premier Tech",
    inCourse: true,
  },
  {
    id: 137,
    name: " NEILANDS Krists",
    team: "Israel - Premier Tech",
    inCourse: true,
  },
  {
    id: 138,
    name: " STEWART Jake",
    team: "Israel - Premier Tech",
    inCourse: true,
  },
  {
    id: 141,
    name: " MARTIN Guillaume",
    team: "Cofidis",
    inCourse: true,
  },
  {
    id: 142,
    name: " ALLEGAERT Piet",
    team: "Cofidis",
    inCourse: true,
  },
  {
    id: 143,
    name: " COQUARD Bryan",
    team: "Cofidis",
    inCourse: true,
  },
  {
    id: 144,
    name: " GESCHKE Simon",
    team: "Cofidis",
    inCourse: true,
  },
  {
    id: 145,
    name: " HERRADA Jesús",
    team: "Cofidis",
    inCourse: true,
  },
  {
    id: 146,
    name: " IZAGIRRE Ion",
    team: "Cofidis",
    inCourse: false,
  },
  {
    id: 147,
    name: " RENARD Alexis",
    team: "Cofidis",
    inCourse: false,
  },
  {
    id: 148,
    name: " ZINGLE Axel",
    team: "Cofidis",
    inCourse: true,
  },
  {
    id: 151,
    name: " MAS Enric",
    team: "Movistar Team",
    inCourse: true,
  },
  {
    id: 152,
    name: " ARANBURU Alex",
    team: "Movistar Team",
    inCourse: true,
  },
  {
    id: 153,
    name: " FORMOLO Davide",
    team: "Movistar Team",
    inCourse: true,
  },
  {
    id: 154,
    name: " GAVIRIA Fernando",
    team: "Movistar Team",
    inCourse: true,
  },
  {
    id: 155,
    name: " LAZKANO Oier",
    team: "Movistar Team",
    inCourse: true,
  },
  {
    id: 156,
    name: " MÜHLBERGER Gregor",
    team: "Movistar Team",
    inCourse: true,
  },
  {
    id: 157,
    name: " OLIVEIRA Nelson",
    team: "Movistar Team",
    inCourse: true,
  },
  {
    id: 158,
    name: " ROMO Javier",
    team: "Movistar Team",
    inCourse: true,
  },
  {
    id: 161,
    name: " VAUQUELIN Kévin",
    team: "Arkéa - B&B Hotels",
    inCourse: true,
  },
  {
    id: 162,
    name: " CAPIOT Amaury",
    team: "Arkéa - B&B Hotels",
    inCourse: true,
  },
  {
    id: 163,
    name: " CHAMPOUSSIN Clément",
    team: "Arkéa - B&B Hotels",
    inCourse: true,
  },
  {
    id: 164,
    name: " DÉMARE Arnaud",
    team: "Arkéa - B&B Hotels",
    inCourse: true,
  },
  {
    id: 165,
    name: " GARCÍA PIERNA Raúl",
    team: "Arkéa - B&B Hotels",
    inCourse: true,
  },
  {
    id: 166,
    name: " MCLAY Daniel",
    team: "Arkéa - B&B Hotels",
    inCourse: true,
  },
  {
    id: 167,
    name: " MOZZATO Luca",
    team: "Arkéa - B&B Hotels",
    inCourse: true,
  },
  {
    id: 168,
    name: " RODRÍGUEZ Cristián",
    team: "Arkéa - B&B Hotels",
    inCourse: true,
  },
  {
    id: 171,
    name: " MEINTJES Louis",
    team: "Intermarché - Wanty",
    inCourse: true,
  },
  {
    id: 172,
    name: " GIRMAY Biniam",
    team: "Intermarché - Wanty",
    inCourse: true,
  },
  {
    id: 173,
    name: " GOOSSENS Kobe",
    team: "Intermarché - Wanty",
    inCourse: true,
  },
  {
    id: 174,
    name: " PAGE Hugo",
    team: "Intermarché - Wanty",
    inCourse: true,
  },
  {
    id: 175,
    name: " REX Laurenz",
    team: "Intermarché - Wanty",
    inCourse: true,
  },
  {
    id: 176,
    name: " TEUNISSEN Mike",
    team: "Intermarché - Wanty",
    inCourse: true,
  },
  {
    id: 177,
    name: " THIJSSEN Gerben",
    team: "Intermarché - Wanty",
    inCourse: true,
  },
  {
    id: 178,
    name: " ZIMMERMANN Georg",
    team: "Intermarché - Wanty",
    inCourse: true,
  },
  {
    id: 181,
    name: " BARDET Romain",
    team: "Team dsm-firmenich PostNL",
    inCourse: true,
  },
  {
    id: 182,
    name: " BARGUIL Warren",
    team: "Team dsm-firmenich PostNL",
    inCourse: true,
  },
  {
    id: 183,
    name: " DEGENKOLB John",
    team: "Team dsm-firmenich PostNL",
    inCourse: true,
  },
  {
    id: 184,
    name: " EEKHOFF Nils",
    team: "Team dsm-firmenich PostNL",
    inCourse: true,
  },
  {
    id: 185,
    name: " JAKOBSEN Fabio",
    team: "Team dsm-firmenich PostNL",
    inCourse: false,
  },
  {
    id: 186,
    name: " ONLEY Oscar",
    team: "Team dsm-firmenich PostNL",
    inCourse: true,
  },
  {
    id: 187,
    name: " VAN DEN BROEK Frank",
    team: "Team dsm-firmenich PostNL",
    inCourse: true,
  },
  {
    id: 188,
    name: " WELTEN Bram",
    team: "Team dsm-firmenich PostNL",
    inCourse: true,
  },
  {
    id: 191,
    name: " CAVENDISH Mark",
    team: "Astana Qazaqstan Team",
    inCourse: true,
  },
  {
    id: 192,
    name: " BALLERINI Davide",
    team: "Astana Qazaqstan Team",
    inCourse: true,
  },
  {
    id: 193,
    name: " BOL Cees",
    team: "Astana Qazaqstan Team",
    inCourse: true,
  },
  {
    id: 194,
    name: " FEDOROV Yevgeniy",
    team: "Astana Qazaqstan Team",
    inCourse: true,
  },
  {
    id: 195,
    name: " GAZZOLI Michele",
    team: "Astana Qazaqstan Team",
    inCourse: false,
  },
  {
    id: 196,
    name: " LUTSENKO Alexey",
    team: "Astana Qazaqstan Team",
    inCourse: true,
  },
  {
    id: 197,
    name: " MØRKØV Michael",
    team: "Astana Qazaqstan Team",
    inCourse: false,
  },
  {
    id: 198,
    name: " TEJADA Harold",
    team: "Astana Qazaqstan Team",
    inCourse: true,
  },
  {
    id: 201,
    name: " CORT Magnus",
    team: "Uno-X Mobility",
    inCourse: true,
  },
  {
    id: 202,
    name: " ABRAHAMSEN Jonas",
    team: "Uno-X Mobility",
    inCourse: true,
  },
  {
    id: 203,
    name: " EIKING Odd Christian",
    team: "Uno-X Mobility",
    inCourse: true,
  },
  {
    id: 204,
    name: " JOHANNESSEN Tobias Halland",
    team: "Uno-X Mobility",
    inCourse: true,
  },
  {
    id: 205,
    name: " KRISTOFF Alexander",
    team: "Uno-X Mobility",
    inCourse: true,
  },
  {
    id: 206,
    name: " KULSET Johannes",
    team: "Uno-X Mobility",
    inCourse: true,
  },
  {
    id: 207,
    name: " TILLER Rasmus",
    team: "Uno-X Mobility",
    inCourse: true,
  },
  {
    id: 208,
    name: " WÆRENSKJOLD Søren",
    team: "Uno-X Mobility",
    inCourse: true,
  },
  {
    id: 211,
    name: " CRAS Steff",
    team: "TotalEnergies",
    inCourse: true,
  },
  {
    id: 212,
    name: " BURGAUDEAU Mathieu",
    team: "TotalEnergies",
    inCourse: true,
  },
  {
    id: 213,
    name: " DUJARDIN Sandy",
    team: "TotalEnergies",
    inCourse: true,
  },
  {
    id: 214,
    name: " GACHIGNARD Thomas",
    team: "TotalEnergies",
    inCourse: true,
  },
  {
    id: 215,
    name: " GRELLIER Fabien",
    team: "TotalEnergies",
    inCourse: true,
  },
  {
    id: 216,
    name: " JEGAT Jordan",
    team: "TotalEnergies",
    inCourse: true,
  },
  {
    id: 217,
    name: " TURGIS Anthony",
    team: "TotalEnergies",
    inCourse: true,
  },
  {
    id: 218,
    name: " VERCHER Mattéo",
    team: "TotalEnergies",
    inCourse: true,
  },
];
