export interface M2Item {
  [key: string]: string[];
}

export interface M5Item {
  M4: string;
  M5_Details: string[];
}

export interface MenuData {
  M0: string[];
  M1: string[];
  M2: M2Item[];
  M3: string[];
  M4: string[];
  M5: M5Item[];
}