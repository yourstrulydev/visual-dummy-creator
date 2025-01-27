import { useState } from "react";
import MenuColumn from "./MenuColumn";
import { MenuData } from "@/types/menu";

interface MultiLevelMenuProps {
  data: MenuData;
}

const MultiLevelMenu = ({ data }: MultiLevelMenuProps) => {
  const [selections, setSelections] = useState<Record<string, string>>({});

  const handleItemClick = (level: string, item: string) => {
    setSelections(prev => {
      const levelNum = parseInt(level.slice(1));
      const newSelections = { ...prev };
      
      // Set the selection for current level
      newSelections[level] = item;
      
      // Clear all subsequent levels
      Object.keys(newSelections).forEach(key => {
        if (parseInt(key.slice(1)) > levelNum) {
          delete newSelections[key];
        }
      });
      
      return newSelections;
    });
    
    console.log(`Selected ${item} at level ${level}`);
  };

  const getM2Items = () => {
    if (!selections.M1) return [];
    const m2Item = data.M2.find(item => selections.M1 in item);
    return m2Item ? m2Item[selections.M1] : [];
  };

  const getM5Items = () => {
    if (!selections.M4) return [];
    const m5Item = data.M5.find(item => item.M4 === selections.M4);
    return m5Item ? m5Item.M5_Details : [];
  };

  // Function to determine which columns to show
  const getVisibleColumns = () => {
    const columns: [string, string[]][] = [
      ["M0", data.M0],
      ["M1", data.M1]
    ];

    if (selections.M1) {
      columns.push(["M2", getM2Items()]);
    }

    if (selections.M2) {
      columns.push(["M3", data.M3]);
    }

    if (selections.M3) {
      columns.push(["M4", data.M4]);
    }

    if (selections.M4) {
      columns.push(["M5", getM5Items()]);
    }

    return columns;
  };

  return (
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
  );
};

export default MultiLevelMenu;