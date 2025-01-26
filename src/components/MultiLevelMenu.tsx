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
    const levels = Object.keys(data).sort();
    
    levels.forEach((level, index) => {
      if (index === 0 || selections[levels[index - 1]]) {
        columns.push([level, data[level as keyof typeof data]]);
      }
    });
    
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