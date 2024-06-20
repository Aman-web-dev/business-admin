'use client'
import Image from "next/image";
import { useParams } from "next/navigation";

import { Tabs,TabsContent,TabsTrigger,TabsList } from "@/components/ui/tabs";
import { PanelDropDown } from "@/components/assets/PanelDropDown";
import { Button } from "@/components/ui/button";   
import Link from "next/link";
import { Settings } from "lucide-react";



import { UserEngagement } from "@/components/sections/userEngagement";
import ChatBotPerformance from "@/components/sections/chatBotPerfomrance";
import { QueryAnalysis } from "@/components/sections/queryAnalysis";
import { ConversionMetrics } from "@/components/sections/conversionMetrics";

export default function Home() {
  const params = useParams();
  const businessId = params.id;

  return (
    <Tabs defaultValue="UserEngagement" className="w-full">
      <div className="flex">
        <div className="lg:hidden">
          <PanelDropDown />
        </div>
        <TabsList className="hidden lg:flex">
          <TabsTrigger value="UserEngagement">User Engagement</TabsTrigger>
          <TabsTrigger value="ChatBotPerformance">
            Chat Bot Performance
          </TabsTrigger>
          <TabsTrigger value="conversionMetrics" className="hidden sm:flex">
            Conversion Metrics
          </TabsTrigger>
          <TabsTrigger value="queryAnalysis">User Query Analysis</TabsTrigger>
        </TabsList>

        <div className="ml-auto flex items-center gap-2">
          <Button size="lg" className="h-10 gap-1">
            <Link
              href={`/settings/business`}
              className="flex flx-col gap-2 items-center"
            >
              <Settings className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Settings
              </span>
            </Link>
          </Button>
        </div>
      </div>
      <div className="mt-8">
        <TabsContent value="UserEngagement">
          <UserEngagement />
        </TabsContent>

        <TabsContent value="ChatBotPerformance">
          <ChatBotPerformance />
        </TabsContent>

        <TabsContent value="queryAnalysis">
          <QueryAnalysis />
        </TabsContent>

        <TabsContent value="conversionMetrics">
          <ConversionMetrics />
        </TabsContent>
      </div>
    </Tabs>
  );
}
