// Rennerslijst zonder rugnummer (id) vanaf tableconverter.com

const riders = [
  {
    name: " VINGEGAARD Jonas",
    team: "Team Visma | Lease a Bike",
  },
  {
    name: " BENOOT Tiesj",
    team: "Team Visma | Lease a Bike",
  },
  {
    name: " JORGENSON Matteo",
    team: "Team Visma | Lease a Bike",
  },
  {
    name: " KELDERMAN Wilco",
    team: "Team Visma | Lease a Bike",
  },
  {
    name: " LAPORTE Christophe",
    team: "Team Visma | Lease a Bike",
  },
  {
    name: " LEMMEN Bart",
    team: "Team Visma | Lease a Bike",
  },
  {
    name: " TRATNIK Jan",
    team: "Team Visma | Lease a Bike",
  },
  {
    name: " VAN AERT Wout",
    team: "Team Visma | Lease a Bike",
  },
  {
    name: " POGAČAR Tadej",
    team: "UAE Team Emirates",
  },
  {
    name: " ALMEIDA João",
    team: "UAE Team Emirates",
  },
  {
    name: " AYUSO Juan",
    team: "UAE Team Emirates",
  },
  {
    name: " POLITT Nils",
    team: "UAE Team Emirates",
  },
  {
    name: " SIVAKOV Pavel",
    team: "UAE Team Emirates",
  },
  {
    name: " SOLER Marc",
    team: "UAE Team Emirates",
  },
  {
    name: " WELLENS Tim",
    team: "UAE Team Emirates",
  },
  {
    name: " YATES Adam",
    team: "UAE Team Emirates",
  },
  {
    name: " YATES Simon",
    team: "Team Jayco AlUla",
  },
  {
    name: " DURBRIDGE Luke",
    team: "Team Jayco AlUla",
  },
  {
    name: " GROENEWEGEN Dylan",
    team: "Team Jayco AlUla",
  },
  {
    name: " HARPER Chris",
    team: "Team Jayco AlUla",
  },
  {
    name: " JUUL-JENSEN Christopher",
    team: "Team Jayco AlUla",
  },
  {
    name: " MATTHEWS Michael",
    team: "Team Jayco AlUla",
  },
  {
    name: " MEZGEC Luka",
    team: "Team Jayco AlUla",
  },
  {
    name: " REINDERS Elmar",
    team: "Team Jayco AlUla",
  },
  {
    name: " RODRÍGUEZ Carlos",
    team: "INEOS Grenadiers",
  },
  {
    name: " BERNAL Egan",
    team: "INEOS Grenadiers",
  },
  {
    name: " CASTROVIEJO Jonathan",
    team: "INEOS Grenadiers",
  },
  {
    name: " DE PLUS Laurens",
    team: "INEOS Grenadiers",
  },
  {
    name: " KWIATKOWSKI Michał",
    team: "INEOS Grenadiers",
  },
  {
    name: " PIDCOCK Thomas",
    team: "INEOS Grenadiers",
  },
  {
    name: " THOMAS Geraint",
    team: "INEOS Grenadiers",
  },
  {
    name: " TURNER Ben",
    team: "INEOS Grenadiers",
  },
  {
    name: " CICCONE Giulio",
    team: "Lidl - Trek",
  },
  {
    name: " BERNARD Julien",
    team: "Lidl - Trek",
  },
  {
    name: " DECLERCQ Tim",
    team: "Lidl - Trek",
  },
  {
    name: " GIBBONS Ryan",
    team: "Lidl - Trek",
  },
  {
    name: " PEDERSEN Mads",
    team: "Lidl - Trek",
  },
  {
    name: " SKUJIŅŠ Toms",
    team: "Lidl - Trek",
  },
  {
    name: " STUYVEN Jasper",
    team: "Lidl - Trek",
  },
  {
    name: " VERONA Carlos",
    team: "Lidl - Trek",
  },
  {
    name: " GALL Felix",
    team: "Decathlon AG2R La Mondiale Team",
  },
  {
    name: " ARMIRAIL Bruno",
    team: "Decathlon AG2R La Mondiale Team",
  },
  {
    name: " BENNETT Sam",
    team: "Decathlon AG2R La Mondiale Team",
  },
  {
    name: " GODON Dorian",
    team: "Decathlon AG2R La Mondiale Team",
  },
  {
    name: " LAPEIRA Paul",
    team: "Decathlon AG2R La Mondiale Team",
  },
  {
    name: " NAESEN Oliver",
    team: "Decathlon AG2R La Mondiale Team",
  },
  {
    name: " PETERS Nans",
    team: "Decathlon AG2R La Mondiale Team",
  },
  {
    name: " PRODHOMME Nicolas",
    team: "Decathlon AG2R La Mondiale Team",
  },
  {
    name: " BILBAO Pello",
    team: "Bahrain - Victorious",
  },
  {
    name: " ARNDT Nikias",
    team: "Bahrain - Victorious",
  },
  {
    name: " BAUHAUS Phil",
    team: "Bahrain - Victorious",
  },
  {
    name: " BUITRAGO Santiago",
    team: "Bahrain - Victorious",
  },
  {
    name: " HAIG Jack",
    team: "Bahrain - Victorious",
  },
  {
    name: " MOHORIČ Matej",
    team: "Bahrain - Victorious",
  },
  {
    name: " POELS Wout",
    team: "Bahrain - Victorious",
  },
  {
    name: " WRIGHT Fred",
    team: "Bahrain - Victorious",
  },
  {
    name: " EVENEPOEL Remco",
    team: "Soudal Quick-Step",
  },
  {
    name: " HIRT Jan",
    team: "Soudal Quick-Step",
  },
  {
    name: " LAMPAERT Yves",
    team: "Soudal Quick-Step",
  },
  {
    name: " LANDA Mikel",
    team: "Soudal Quick-Step",
  },
  {
    name: " MOSCON Gianni",
    team: "Soudal Quick-Step",
  },
  {
    name: " PEDERSEN Casper",
    team: "Soudal Quick-Step",
  },
  {
    name: " VAN WILDER Ilan",
    team: "Soudal Quick-Step",
  },
  {
    name: " VERVAEKE Louis",
    team: "Soudal Quick-Step",
  },
  {
    name: " ROGLIČ Primož",
    team: "Red Bull – BORA – hansgrohe",
  },
  {
    name: " DENZ Nico",
    team: "Red Bull – BORA – hansgrohe",
  },
  {
    name: " HALLER Marco",
    team: "Red Bull – BORA – hansgrohe",
  },
  {
    name: " HINDLEY Jai",
    team: "Red Bull – BORA – hansgrohe",
  },
  {
    name: " JUNGELS Bob",
    team: "Red Bull – BORA – hansgrohe",
  },
  {
    name: " SOBRERO Matteo",
    team: "Red Bull – BORA – hansgrohe",
  },
  {
    name: " VAN POPPEL Danny",
    team: "Red Bull – BORA – hansgrohe",
  },
  {
    name: " VLASOV Aleksandr",
    team: "Red Bull – BORA – hansgrohe",
  },
  {
    name: " GAUDU David",
    team: "Groupama - FDJ",
  },
  {
    name: " GENIETS Kevin",
    team: "Groupama - FDJ",
  },
  {
    name: " GRÉGOIRE Romain",
    team: "Groupama - FDJ",
  },
  {
    name: " KÜNG Stefan",
    team: "Groupama - FDJ",
  },
  {
    name: " MADOUAS Valentin",
    team: "Groupama - FDJ",
  },
  {
    name: " MARTINEZ Lenny",
    team: "Groupama - FDJ",
  },
  {
    name: " PACHER Quentin",
    team: "Groupama - FDJ",
  },
  {
    name: " RUSSO Clément",
    team: "Groupama - FDJ",
  },
  {
    name: " VAN DER POEL Mathieu",
    team: "Alpecin - Deceuninck",
  },
  {
    name: " DILLIER Silvan",
    team: "Alpecin - Deceuninck",
  },
  {
    name: " GHYS Robbe",
    team: "Alpecin - Deceuninck",
  },
  {
    name: " KRAGH ANDERSEN Søren",
    team: "Alpecin - Deceuninck",
  },
  {
    name: " LAURANCE Axel",
    team: "Alpecin - Deceuninck",
  },
  {
    name: " PHILIPSEN Jasper",
    team: "Alpecin - Deceuninck",
  },
  {
    name: " RICKAERT Jonas",
    team: "Alpecin - Deceuninck",
  },
  {
    name: " VERMEERSCH Gianni",
    team: "Alpecin - Deceuninck",
  },
  {
    name: " CARAPAZ Richard",
    team: "EF Education - EasyPost",
  },
  {
    name: " BETTIOL Alberto",
    team: "EF Education - EasyPost",
  },
  {
    name: " BISSEGGER Stefan",
    team: "EF Education - EasyPost",
  },
  {
    name: " COSTA Rui",
    team: "EF Education - EasyPost",
  },
  {
    name: " HEALY Ben",
    team: "EF Education - EasyPost",
  },
  {
    name: " POWLESS Neilson",
    team: "EF Education - EasyPost",
  },
  {
    name: " QUINN Sean",
    team: "EF Education - EasyPost",
  },
  {
    name: " VAN DEN BERG Marijn",
    team: "EF Education - EasyPost",
  },
  {
    name: " DE LIE Arnaud",
    team: "Lotto Dstny",
  },
  {
    name: " BEULLENS Cedric",
    team: "Lotto Dstny",
  },
  {
    name: " CAMPENAERTS Victor",
    team: "Lotto Dstny",
  },
  {
    name: " DRIZNERS Jarrad",
    team: "Lotto Dstny",
  },
  {
    name: " GRIGNARD Sébastien",
    team: "Lotto Dstny",
  },
  {
    name: " VAN GILS Maxim",
    team: "Lotto Dstny",
  },
  {
    name: " VANHOUCKE Harm",
    team: "Lotto Dstny",
  },
  {
    name: " VAN MOER Brent",
    team: "Lotto Dstny",
  },
  {
    name: " WILLIAMS Stephen",
    team: "Israel - Premier Tech",
  },
  {
    name: " ACKERMANN Pascal",
    team: "Israel - Premier Tech",
  },
  {
    name: " BOIVIN Guillaume",
    team: "Israel - Premier Tech",
  },
  {
    name: " FUGLSANG Jakob",
    team: "Israel - Premier Tech",
  },
  {
    name: " GEE Derek",
    team: "Israel - Premier Tech",
  },
  {
    name: " HOULE Hugo",
    team: "Israel - Premier Tech",
  },
  {
    name: " NEILANDS Krists",
    team: "Israel - Premier Tech",
  },
  {
    name: " STEWART Jake",
    team: "Israel - Premier Tech",
  },
  {
    name: " MARTIN Guillaume",
    team: "Cofidis",
  },
  {
    name: " ALLEGAERT Piet",
    team: "Cofidis",
  },
  {
    name: " COQUARD Bryan",
    team: "Cofidis",
  },
  {
    name: " GESCHKE Simon",
    team: "Cofidis",
  },
  {
    name: " HERRADA Jesús",
    team: "Cofidis",
  },
  {
    name: " IZAGIRRE Ion",
    team: "Cofidis",
  },
  {
    name: " RENARD Alexis",
    team: "Cofidis",
  },
  {
    name: " ZINGLE Axel",
    team: "Cofidis",
  },
  {
    name: " MAS Enric",
    team: "Movistar Team",
  },
  {
    name: " ARANBURU Alex",
    team: "Movistar Team",
  },
  {
    name: " FORMOLO Davide",
    team: "Movistar Team",
  },
  {
    name: " GAVIRIA Fernando",
    team: "Movistar Team",
  },
  {
    name: " LAZKANO Oier",
    team: "Movistar Team",
  },
  {
    name: " MÜHLBERGER Gregor",
    team: "Movistar Team",
  },
  {
    name: " OLIVEIRA Nelson",
    team: "Movistar Team",
  },
  {
    name: " ROMO Javier",
    team: "Movistar Team",
  },
  {
    name: " VAUQUELIN Kévin",
    team: "Arkéa - B&B Hotels",
  },
  {
    name: " CAPIOT Amaury",
    team: "Arkéa - B&B Hotels",
  },
  {
    name: " CHAMPOUSSIN Clément",
    team: "Arkéa - B&B Hotels",
  },
  {
    name: " DÉMARE Arnaud",
    team: "Arkéa - B&B Hotels",
  },
  {
    name: " GARCÍA PIERNA Raúl",
    team: "Arkéa - B&B Hotels",
  },
  {
    name: " MCLAY Daniel",
    team: "Arkéa - B&B Hotels",
  },
  {
    name: " MOZZATO Luca",
    team: "Arkéa - B&B Hotels",
  },
  {
    name: " RODRÍGUEZ Cristián",
    team: "Arkéa - B&B Hotels",
  },
  {
    name: " MEINTJES Louis",
    team: "Intermarché - Wanty",
  },
  {
    name: " GIRMAY Biniam",
    team: "Intermarché - Wanty",
  },
  {
    name: " GOOSSENS Kobe",
    team: "Intermarché - Wanty",
  },
  {
    name: " PAGE Hugo",
    team: "Intermarché - Wanty",
  },
  {
    name: " REX Laurenz",
    team: "Intermarché - Wanty",
  },
  {
    name: " TEUNISSEN Mike",
    team: "Intermarché - Wanty",
  },
  {
    name: " THIJSSEN Gerben",
    team: "Intermarché - Wanty",
  },
  {
    name: " ZIMMERMANN Georg",
    team: "Intermarché - Wanty",
  },
  {
    name: " BARDET Romain",
    team: "Team dsm-firmenich PostNL",
  },
  {
    name: " BARGUIL Warren",
    team: "Team dsm-firmenich PostNL",
  },
  {
    name: " DEGENKOLB John",
    team: "Team dsm-firmenich PostNL",
  },
  {
    name: " EEKHOFF Nils",
    team: "Team dsm-firmenich PostNL",
  },
  {
    name: " JAKOBSEN Fabio",
    team: "Team dsm-firmenich PostNL",
  },
  {
    name: " ONLEY Oscar",
    team: "Team dsm-firmenich PostNL",
  },
  {
    name: " VAN DEN BROEK Frank",
    team: "Team dsm-firmenich PostNL",
  },
  {
    name: " WELTEN Bram",
    team: "Team dsm-firmenich PostNL",
  },
  {
    name: " CAVENDISH Mark",
    team: "Astana Qazaqstan Team",
  },
  {
    name: " BALLERINI Davide",
    team: "Astana Qazaqstan Team",
  },
  {
    name: " BOL Cees",
    team: "Astana Qazaqstan Team",
  },
  {
    name: " FEDOROV Yevgeniy",
    team: "Astana Qazaqstan Team",
  },
  {
    name: " GAZZOLI Michele",
    team: "Astana Qazaqstan Team",
  },
  {
    name: " LUTSENKO Alexey",
    team: "Astana Qazaqstan Team",
  },
  {
    name: " MØRKØV Michael",
    team: "Astana Qazaqstan Team",
  },
  {
    name: " TEJADA Harold",
    team: "Astana Qazaqstan Team",
  },
  {
    name: " CORT Magnus",
    team: "Uno-X Mobility",
  },
  {
    name: " ABRAHAMSEN Jonas",
    team: "Uno-X Mobility",
  },
  {
    name: " EIKING Odd Christian",
    team: "Uno-X Mobility",
  },
  {
    name: " JOHANNESSEN Tobias Halland",
    team: "Uno-X Mobility",
  },
  {
    name: " KRISTOFF Alexander",
    team: "Uno-X Mobility",
  },
  {
    name: " KULSET Johannes",
    team: "Uno-X Mobility",
  },
  {
    name: " TILLER Rasmus",
    team: "Uno-X Mobility",
  },
  {
    name: " WÆRENSKJOLD Søren",
    team: "Uno-X Mobility",
  },
  {
    name: " CRAS Steff",
    team: "TotalEnergies",
  },
  {
    name: " BURGAUDEAU Mathieu",
    team: "TotalEnergies",
  },
  {
    name: " DUJARDIN Sandy",
    team: "TotalEnergies",
  },
  {
    name: " GACHIGNARD Thomas",
    team: "TotalEnergies",
  },
  {
    name: " GRELLIER Fabien",
    team: "TotalEnergies",
  },
  {
    name: " JEGAT Jordan",
    team: "TotalEnergies",
  },
  {
    name: " TURGIS Anthony",
    team: "TotalEnergies",
  },
  {
    name: " VERCHER Mattéo",
    team: "TotalEnergies",
  },
];
