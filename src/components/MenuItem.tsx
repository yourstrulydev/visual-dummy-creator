import { ChevronRight } from "lucide-react";

interface MenuItemProps {
  text: string;
  hasArrow?: boolean;
  isAddButton?: boolean;
}

const MenuItem = ({ text, hasArrow = true, isAddButton = false }: MenuItemProps) => {
  return (
    <div 
      className={`
        flex items-center justify-between p-2 mb-2 rounded
        ${isAddButton 
          ? 'border border-menuGreen text-menuGreen hover:bg-menuGreen hover:text-white' 
          : 'bg-menuGreen text-white hover:bg-menuHover'
        }
        cursor-pointer transition-colors duration-200
      `}
    >
      <span className="text-sm">{text}</span>
      {hasArrow && !isAddButton && <ChevronRight className="w-4 h-4" />}
    </div>
  );
};

export default MenuItem;