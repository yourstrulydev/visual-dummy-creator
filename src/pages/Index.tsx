import MultiLevelMenu from "@/components/MultiLevelMenu";
import { menuData } from "@/data/menuData";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

const Index = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-menuBg-light dark:bg-menuBg-dark transition-colors duration-200">
      <div className="container mx-auto py-8">
        <div className="flex justify-end mb-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
        </div>
        <MultiLevelMenu data={menuData} />
      </div>
    </div>
  );
};

export default Index;