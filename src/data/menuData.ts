import { MenuData } from "@/types/menu";

export const menuData: MenuData = {
  M0: ["DEWA"],
  M1: ["c1", "c2", "c3", "c4", "c5", "c6"],
  M2: [
    {
      c1: [
        "B01", "GF", "L01", "L02", "L03", "L04", "L05", "L06", "L07", "L08", "L09", "L10", 
        "L11", "L12", "L13", "L14", "L15", "L16", "L17", "L18", "L19", "L20", "L21"
      ]
    },
    {
      c2: [
        "B01", "GF", "L01", "L02", "L03", "L04", "L05", "L06", "L07", "L08", "L09", "L10",
        "L11", "L12", "L13", "L14", "L15"
      ]
    },
    {
      c3: [
        "B01", "GF", "L01", "L02", "L03", "L04", "L05", "L06", "L07", "L08", "L09", "L10", "L11"
      ]
    },
    {
      c4: [
        "B01", "GF", "L01", "L02", "L03", "L04", "L05", "L06", "L07", "L08", "L09", "L10",
        "L11", "L12", "L13", "L14", "L15"
      ]
    },
    {
      c5: [
        "B01", "GF", "L01", "L02", "L03", "L04", "L05", "L06", "L07", "L08", "L09", "L10",
        "L11", "L12"
      ]
    },
    {
      c6: ["B01", "L07"]
    }
  ],
  M3: [
    "Car park", "General Circulation", "Open Plan Office", "MEP ROOM", "TOILET",
    "Individual Office - Elaborate", "LIFT SHAFT", "LANDSCAPE Internal",
    "LANDSCAPE External", "External", "GYM", "AUDITORIUM", "NURSERY",
    "PRAYER ROOM", "STAIRCASE", "LIBRARY", "MEETING ROOM with Number"
  ],
  M4: [
    "Electrical", "Equipment", "ELV", "Vertical Transportation System",
    "Building Maintenance Unit (Façade Cleaning)", "Irrigation", "HVAC- Waterside",
    "HVAC -Air Side", "Plumbing", "Drainage", "Fire fighting"
  ],
  M5: [
    {
      M4: "Electrical",
      M5_Details: [
        "Internal Lighting - DALI/Switched (Include.Flush Sensors)",
        "Internal Lighting - POE",
        "External Lighting",
        "Aircraft Warning Light",
        "Office Work Station - Small Power",
        "Blind Curtain System",
        "Cleaners Socket",
        "General Purpose Socket",
        "EV CHARGERS",
        "Lighting Control Panels"
      ]
    },
    {
      M4: "Equipment",
      M5_Details: [
        "Odour Control units",
        "Insect Control Units",
        "Kettles",
        "Sterilizer",
        "Compactor",
        "Refrigerators",
        "Coffee Machines",
        "Micro Wave Ovens",
        "Dishwasher",
        "Buffet Units (Cold holding, hot holding)",
        "Water Cooler",
        "Water Dispensers",
        "Upright Chiller",
        "Automatic Beverage Machine",
        "GYM Equipment",
        "Copy Machine",
        "Scaning Machine",
        "Printer",
        "Shredder Machine"
      ]
    },
    {
      M4: "ELV",
      M5_Details: [
        "Fire Alarm System",
        "Central Battery System",
        "Public Announcement and Voice Evacuation",
        "Disable Toilet System",
        "Bollard System",
        "Gate Barrier",
        "TETRA System",
        "LED PANELS",
        "MEETING ROOM FLOOR BOX",
        "CCTV Rack",
        "CCTV Field Power ",
        "AV Rack",
        "AV Field Power (Screens/Camera, Active co. speaker/subwoofer, Projector)",
        "AV-Floor Box",
        "Server Equipment Power",
        "MDF1",
        "MDF2",
        "Access Control Rack/AV Intercom",
        "Access Control Field Power",
        "WAP",
        "Telecom/Provider/mobile",
        "IBMS PANELS ELABORATE",
        "BMS Control Room",
        "Security System",
        "Car park Management system power circuits",
        "Signage and Drive way finding power circuits",
        "Micro Switches (GP)",
        "ZCDU"
      ]
    },
    {
      M4: "Vertical Transportation System",
      M5_Details: [
        "Passenger Lifts",
        "Fireman Lifts",
        "Goods Lift",
        "Loading Bay Lift (Scissor Lift)",
        "Wheel Chair Lift"
      ]
    },
    {
      M4: "Building Maintenance Unit (Façade Cleaning)",
      M5_Details: [
        "Monorail",
        "Davit",
        "Solar Robotic Cleaning"
      ]
    },
    {
      M4: "Irrigation",
      M5_Details: [
        "Irrigation pumps",
        "Irrigation controller(field)"
      ]
    },
    {
      M4: "HVAC- Waterside",
      M5_Details: [
        "CHILLER",
        "Chilled Water Pump",
        "Condenser Water Pump",
        "Cooling Towers",
        "Tower Basin Filtration System ",
        "Side Stream Filtration System",
        "Chilled water Pressurization unit",
        "Chemical Dosing System-CHW",
        "Chemical Dosing System-CDW",
        "Cooling tower make-up water pump ",
        "BTU meter and Flow meter at Chiller plant room and Cooling Tower",
        "Motorized Valves at  Chiller plant room and Cooling Tower"
      ]
    },
    {
      M4: "HVAC -Air Side",
      M5_Details: [
        "FCU ",
        "FAHU ",
        "AHU ",
        "VAV/CAV ",
        "DX ",
        "VRF ",
        "CCU ",
        "Car Park Jet Fans ",
        "Make-up Air Fan - FR ",
        "Smoke Extract Air Fan - FR ",
        "COLD SMOKE MAKEUP FAN ",
        "COLD SMOKE EXTRACT FAN ",
        "General Extract Air Fans ",
        "Staircase Pressurization Fans ",
        "Motorized Smoke & Fire Dampers ",
        "Motorized Smoke Dampers ",
        "IEQ System "
      ]
    },
    {
      M4: "Plumbing",
      M5_Details: [
        "Booster Pumps",
        "Filtration Pumps",
        "Hot water re-circulation pumps (Cp-01)@L12",
        "Solar hot water circulation pumps-Master(Cp-02,03)",
        "Raw Water Circulation Pumps",
        "Fire Water Circulation Pumps",
        "Filtered Water Circulation Pumps",
        "Transfer Pumps",
        "Chemical Dozing Unit-Water Supply",
        "Copper/Silver Ionization Unit@B1",
        "Water Supply Valves(Field)"
      ]
    },
    {
      M4: "Drainage",
      M5_Details: [
        "Sump Pump",
        "Rain Water Valves(Field)",
        "Grey Water system"
      ]
    }
  ]
};
