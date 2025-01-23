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
  return (
    <div className="min-h-screen bg-menuBg">
      <div className="container mx-auto py-8">
        <div className="flex overflow-x-auto">
          {Object.entries(dummyData).map(([title, items]) => (
            <MenuColumn key={title} title={title} items={items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;