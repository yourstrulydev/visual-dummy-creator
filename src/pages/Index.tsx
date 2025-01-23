import { useState } from "react";
import MenuColumn from "@/components/MenuColumn";

const dummyData = {
  "M-0": ["DEWA HQ"],
  "M-1": ["Core 1", "Core 2", "Core 3", "Core 4", "Core 5", "Core 6"],
  "M-2": [
    "Floor 1", "Floor 2", "Floor 3", "Floor 4", "Floor 5",
    "Floor 6", "Floor 7", "Floor 8", "Floor 9", "Floor 10",
    "Floor 11", "Floor 12", "Floor 13", "Floor 14", "Floor 15"
  ],
  "M-3": [
    "Car park (CPR)",
    "General Circulation (GCR)",
    "Open Plan Office (OPO)",
    "Mep Room (MEP)",
    "Toilet (T01)",
    "Individual Office - Elaborate (INO)",
    "Lift Shaft (LIS)",
    "Landscape Internal (LSI)",
    "Landscape External (LSE)",
    "External (EXT)",
    "Gym (GYM)",
    "Auditorium (AUD)",
    "Nursery (NUR)",
    "Prayer Room (PRY)",
    "Staircase (STC)",
    "Library (LIB)",
    "Meeting Room with Number (MER)"
  ],
  "M-4": [
    "Electrical (ELE)",
    "Equipment (EQP)",
    "ELV (ELV)",
    "Vertical Transportation System (VTS)",
    "Building Maintenance Unit (Façade Cleaning) (BMU)",
    "Irrigation (IRG)",
    "HVAC-Waterside (ACW)",
    "HVAC-Air Side (ACA)",
    "Plumbing (PDP)",
    "Drainage (PSP)",
    "Fire fighting (FFP)"
  ],
  "M-5": [
    "Sump Pump (SUP)",
    "Rain Water Valves(Field) (RWV)",
    "Grey Water system (GWS)"
  ]
};

const Index = () => {
  const [selections, setSelections] = useState<Record<string, string>>({});

  const handleItemClick = (level: string, item: string) => {
    setSelections(prev => {
      const levelNum = parseInt(level.split('-')[1]);
      const newSelections = { ...prev };
      
      // Set the selection for current level
      newSelections[level] = item;
      
      // Clear all subsequent levels
      Object.keys(newSelections).forEach(key => {
        if (parseInt(key.split('-')[1]) > levelNum) {
          delete newSelections[key];
        }
      });
      
      return newSelections;
    });
    
    console.log(`Selected ${item} at level ${level}`);
  };

  // Function to determine which columns to show
  const getVisibleColumns = () => {
    const columns: [string, string[]][] = [];
    const levels = Object.keys(dummyData).sort();
    
    levels.forEach((level, index) => {
      if (index === 0 || selections[levels[index - 1]]) {
        columns.push([level, dummyData[level as keyof typeof dummyData]]);
      }
    });
    
    return columns;
  };

  return (
    <div className="min-h-screen bg-menuBg">
      <div className="container mx-auto py-8">
        <div className="flex overflow-x-auto">
          {getVisibleColumns().map(([level, items]) => (
            <MenuColumn
              key={level}
              title={level}
              items={items}
              selectedItem={selections[level]}
              onItemClick={(item) => handleItemClick(level, item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;