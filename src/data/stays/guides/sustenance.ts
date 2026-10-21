// src/data/stays/guides/sustenance.ts
import type { SustenanceInfo } from "../guideType";

Is sustenance (food/drinks/restaurants/wineries/cafes/etc) just a subset of experiences? I mean beaches is an experience as well, but that is such a large and specific category and core to the island that it deserves a top-level structure. The question then becomes probably more about data modeling than about where it fits? Meaning, of all the various experiences, what are the datamodels needed to represent them effectively? I've already pulled the data fields "name, location, access, and notes" into a new GuideInfo and extended the BeachInfo from that. Perhaps there are some common fields to all experiences, and then some specific ones as well?

# Experiences

## Sea
Swimming
Paddleboarding
Kayaking
Cruise Sailing
Race Sailing
Island Hopping
Hidden Coves
Sunset Cruises

## Nature
Hiking
Cycling
Olive Groves
Vidova Gora
Coastal Walks
Sunrise Walks
``

## Wellness
Yoga
Meditation
Steam Spa
Bodywork
Beach Recovery
Cold Water Swimming

## Food & Drink
Wine Tasting

Olive Oil Tasting

Local Konobas

Farm Experiences

Market Visits

## Culture
Supetar

Bol

Škrip

Blaca Hermitage

Nearby Islands

Split Day Trips

## Adventure
- Surfboarding
- Kiteboarding
- Horseback Riding
- Horseback Riding in the Sea
- Sailing Regattas
- Cliff Jumping
- Cycling Challenges
