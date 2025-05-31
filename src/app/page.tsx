import { SidebarProvider } from "@/components/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";

export default function Home() {
  return (
    <SidebarProvider>
      <div className="container mx-auto py-10">
        <Card>
          <CardHeader>
            <CardTitle>Welcome to Links</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Track your golf rounds, rank courses, and build your taste profile.
            </p>
          </CardContent>
        </Card>
      </div>
    </SidebarProvider>
  );
} 