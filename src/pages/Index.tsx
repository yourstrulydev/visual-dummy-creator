import MultiLevelMenu from "@/components/MultiLevelMenu";
import { menuData } from "@/data/menuData";

const Index = () => {
  return (
    <div className="min-h-screen bg-menuBg">
      <div className="container mx-auto py-8">
        <MultiLevelMenu data={menuData} />
      </div>
    </div>
  );
};

export default Index;