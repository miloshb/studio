// src/data/stays/guides/sustenance.ts
import type { SustenanceInfo } from "../guideType";

Is sustenance (food/drinks/restaurants/wineries/cafes/etc) just a subset of experiences? I mean beaches is an experience as well, but that is such a large and specific category and core to the island that it deserves a top-level structure. The question then becomes probably more about data modeling than about where it fits? Meaning, of all the various experiences, what are the datamodels needed to represent them effectively? I've already pulled the data fields "name, location, access, and notes" into a new GuideInfo and extended the BeachInfo from that. Perhaps there are some common fields to all experiences, and then some specific ones as well?

## Food & Drink
Wine Tasting

Olive Oil Tasting

Local Konobas

Farm Experiences

Market Visits
