import MenuItem from "./MenuItem";

interface MenuColumnProps {
  title: string;
  items: string[];
  onItemClick: (item: string) => void;
  selectedItem?: string;
}

const MenuColumn = ({ title, items, onItemClick, selectedItem }: MenuColumnProps) => {
  return (
    <div className="w-64 p-4 border-r border-gray-700">
      <h2 className="text-lg font-semibold mb-4 text-white">{title}</h2>
      <div className="space-y-2">
        {items.map((item) => (
          <MenuItem 
            key={item} 
            text={item} 
            onClick={() => onItemClick(item)}
            isSelected={selectedItem === item}
          />
        ))}
        <MenuItem text="+Space Item" isAddButton={true} hasArrow={false} />
      </div>
    </div>
  );
};

export default MenuColumn;