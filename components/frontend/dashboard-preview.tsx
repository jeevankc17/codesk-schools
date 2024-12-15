import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export function DashboardPreview() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-6xl">
        <Card className="w-full">
          <CardContent className="mt-4">
            <Image
              src="/images/dashboard.png"
              alt="Dashboard Preview"
              width={1475}
              height={696}
              className="w-full rounded-lg"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
