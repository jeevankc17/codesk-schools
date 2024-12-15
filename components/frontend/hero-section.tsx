import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SmallTitle from './small-title';

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] w-full bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-7xl flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
        {/* Welcome Badge */}
        <SmallTitle title="Welcome to codesk-schools" />

        {/* Main Heading */}
        <h1 className="mb-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Run Your School Smarter With{' '}
          <span className="text-gray-900">codesk-schools</span>
        </h1>

        {/* Subtitle */}
        <p className="mb-12 max-w-2xl text-lg text-gray-600 sm:text-xl">
          Experience seamless school management with our integrated platform
          that brings together academics, administration, and communication in
          one place.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Button size="lg" className="min-w-[200px] text-base rounded-full">
            Start free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="min-w-[200px] border-gray-200 text-base"
          >
            Learn more
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
