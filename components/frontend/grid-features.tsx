import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  GraduationCap,
  Users,
  Calculator,
  Calendar,
  MessageSquare,
  BarChart,
  Settings,
} from 'lucide-react';
import SmallTitle from './small-title';

const modules = [
  {
    title: 'Academic Management',
    description:
      'Manage courses, classes, subjects, and student academic records with ease. Track grades, assignments, and attendance in real-time.',
    icon: GraduationCap,
  },
  {
    title: 'Student Information System',
    description:
      'Centralize student data, including personal details, academic history, attendance records, and disciplinary information.',
    icon: Users,
  },
  {
    title: 'Financial Management',
    description:
      'Handle fee collection, generate invoices, track payments, and manage school finances with detailed reporting.',
    icon: Calculator,
  },
  {
    title: 'Scheduling & Timetable',
    description:
      'Create and manage class schedules, teacher assignments, and academic calendar with conflict detection.',
    icon: Calendar,
  },
  {
    title: 'Communication Portal',
    description:
      'Enable seamless communication between teachers, students, and parents through announcements, messages, and notifications.',
    icon: MessageSquare,
  },
  {
    title: 'Reports & Analytics',
    description:
      'Generate comprehensive reports on academic performance, attendance, finances, and other key metrics.',
    icon: BarChart,
  },
  {
    title: 'Administration Tools',
    description:
      'Manage school resources, staff records, inventory, and administrative tasks from a central dashboard.',
    icon: Settings,
  },
];

export default function GridFeatures() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16 space-y-4">
        <SmallTitle title="Core Modules" />
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Everything You Need to Run Your School
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Our comprehensive school management system brings together all
          essential tools and features to streamline your educational
          institution's operations.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {modules.map((module, index) => (
          <Card key={index} className="border-2">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="p-2 w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                  <module.icon className="w-5 h-5 text-primary" />
                </div>
                <CardTitle>{module.title}</CardTitle>
              </div>
              <p className="text-muted-foreground">{module.description}</p>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
