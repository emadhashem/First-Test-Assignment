import CheckboxItem from "@/components/app-ui/checkbox-item";
import { Separator } from "@/components/ui/separator";
import Button from "@/components/app-ui/button";
import Card from "@/components/app-ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCallback, useState } from "react";
import mockData from "@/lib/mock-data";
import { Page } from "./lib/types";

function App() {
  const [pages, setPages] = useState<Page[]>(mockData.PAGES);
  const [, setCheckAll] = useState(false);

  const onChange = useCallback((v: boolean, id: number) => {
    setPages((prev) =>
      prev.map((page) => (page.id === id ? { ...page, checked: v } : page))
    );
  }, []);

  const handleCheckAll = useCallback((v: boolean) => {
    setCheckAll(v);
    setPages((prev) => prev.map((page) => ({ ...page, checked: v })));
  }, []);

  const reset = useCallback(() => {
    setPages(mockData.PAGES);
    setCheckAll(false);
  }, []);

  const allPagesChecked = pages.every((page) => page.checked);

  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <Card className="w-[370px] mt-[85px] ml-[104px]">
        <CheckboxItem
          checked={allPagesChecked}
          label="All Pages"
          onChange={handleCheckAll}
        />
        <div className="px-[16px] py-2.5">
          <Separator className="w-full" />
        </div>
        <ScrollArea className="max-h-100">
          {pages.map((page) => (
            <CheckboxItem
              key={page.id}
              label={page.name}
              checked={page.checked}
              onChange={(v) => onChange(v, page.id)}
            />
          ))}
        </ScrollArea>
        <div className="px-[15px] py-2.5">
          <Separator className="w-full" />
        </div>
        <div className="px-[15px] py-2.5">
          <Button
            className="h-10 bg-[#FFCE22] hover:bg-[#FFD84D]"
            onClick={reset}
          >
            Done
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default App;
