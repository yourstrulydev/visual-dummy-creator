import { ChevronRight } from "lucide-react";

interface MenuItemProps {
  text: string;
  hasArrow?: boolean;
  isAddButton?: boolean;
  onClick?: () => void;
  isSelected?: boolean;
}

const MenuItem = ({ 
  text, 
  hasArrow = true, 
  isAddButton = false,
  onClick,
  isSelected = false
}: MenuItemProps) => {
  return (
    <div 
      onClick={onClick}
      className={`
        flex items-center justify-between p-2 mb-2 rounded
        ${isAddButton 
          ? 'border border-menuGreen text-menuGreen hover:bg-menuGreen hover:text-white dark:text-menuGreen dark:hover:text-white' 
          : `${isSelected 
              ? 'bg-menuHover text-white'
              : 'bg-menuGreen text-white hover:bg-menuHover'
            }`
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