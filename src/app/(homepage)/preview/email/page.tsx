"use client";

import { useState } from "react";
import {
  Check,
  Copy,
  Laptop,
  Smartphone,
  Mail,
  Calendar,
  Clock,
  Sparkles,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  DemoBookingEmail,
  DemoBookingEmailProps,
} from "~/templates/emails/demo-booking-email";

const sampleScenarios: { label: string; data: DemoBookingEmailProps }[] = [
  {
    label: "Tech Bootcamp (DevAcademy)",
    data: {
      recipientName: "Marcus Vance",
      recipientEmail: "marcus@devacademy.io",
      organisationName: "DevAcademy Coding Bootcamp",
      interests:
        "Replacing Discord and WhatsApp with a dedicated student & mentor workspace with live audio rooms",
      scheduledDate: "Thursday, 12 November 2026",
      scheduledTime: "2:00 PM – 2:30 PM",
      timeZone: "Africa/Lagos (GMT+1)",
      meetingUrl: "https://zedu.work/meet/demo-30m",
      rescheduleUrl: "https://zedu.work/contact-sales",
      calendarGoogleUrl: "https://calendar.google.com",
      calendarOutlookUrl: "https://outlook.live.com/calendar",
      hostName: "Zedu Solutions Team",
      hostRole: "Education & Cohort Partnerships",
    },
  },
  {
    label: "University Department (Greenwood University)",
    data: {
      recipientName: "Dr. Sarah Jenkins",
      recipientEmail: "s.jenkins@greenwood.edu",
      organisationName: "Faculty of Computer Science, Greenwood University",
      interests:
        "Cohort management, structured channel permissions, and teaching assistant office hours",
      scheduledDate: "Monday, 16 November 2026",
      scheduledTime: "11:00 AM – 11:30 AM",
      timeZone: "Africa/Lagos (GMT+1)",
      meetingUrl: "https://zedu.work/meet/demo-30m",
      rescheduleUrl: "https://zedu.work/contact-sales",
      calendarGoogleUrl: "https://calendar.google.com",
      calendarOutlookUrl: "https://outlook.live.com/calendar",
      hostName: "Zedu Solutions Team",
      hostRole: "Higher Education Partnerships",
    },
  },
  {
    label: "Professional School Network (Apex Learning)",
    data: {
      recipientName: "Amina Bello",
      recipientEmail: "amina@apexschools.org",
      organisationName: "Apex School Network",
      interests:
        "Safe, moderated cohort communication with built-in AI tutor assistance",
      scheduledDate: "Wednesday, 18 November 2026",
      scheduledTime: "3:30 PM – 4:00 PM",
      timeZone: "Africa/Lagos (GMT+1)",
      meetingUrl: "https://zedu.work/meet/demo-30m",
      rescheduleUrl: "https://zedu.work/contact-sales",
      calendarGoogleUrl: "https://calendar.google.com",
      calendarOutlookUrl: "https://outlook.live.com/calendar",
      hostName: "Zedu Solutions Team",
      hostRole: "School Partnerships Lead",
    },
  },
];

export default function EmailPreviewPage() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  const [copied, setCopied] = useState(false);

  const current = sampleScenarios[scenarioIndex].data;

  const handleCopy = () => {
    // Generate clean HTML string for clipboard
    const emailElement = document.getElementById("email-canvas");
    if (emailElement) {
      navigator.clipboard.writeText(emailElement.innerHTML);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      {/* Top Banner & Controls */}
      <div className="mx-auto max-w-5xl mb-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-purple-50 px-2.5 py-0.5 text-xs font-semibold text-[#6f4ef6]">
                  <Sparkles className="w-3 h-3" />
                  Marketing Template Preview
                </span>
                <span className="text-xs text-slate-500">
                  Live Vercel Review
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                Zedu Demo Booking Confirmation Email
              </h1>
              <p className="text-sm text-slate-600 mt-1">
                Formal, high-converting marketing email sent to organizations
                immediately upon booking a 30-minute demonstration.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopy}
                className="gap-2 border-slate-300 hover:bg-slate-50"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700">Copied HTML</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-600" />
                    <span>Copy HTML</span>
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Scenario & View Selectors */}
          <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Sample Lead:
              </span>
              {sampleScenarios.map((scenario, index) => (
                <button
                  key={scenario.label}
                  type="button"
                  onClick={() => setScenarioIndex(index)}
                  className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors ${
                    scenarioIndex === index
                      ? "bg-[#6f4ef6] text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {scenario.label}
                </button>
              ))}
            </div>

            {/* Desktop / Mobile Switcher */}
            <div className="flex items-center self-end sm:self-auto bg-slate-100 rounded-lg p-1 border border-slate-200">
              <button
                type="button"
                onClick={() => setDevice("desktop")}
                className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md font-medium transition-all ${
                  device === "desktop"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Laptop className="w-3.5 h-3.5" />
                Desktop
              </button>
              <button
                type="button"
                onClick={() => setDevice("mobile")}
                className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md font-medium transition-all ${
                  device === "mobile"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                Mobile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Email Inbox Preview Frame */}
      <div className="mx-auto max-w-5xl">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
          {/* Simulated Email Client Header */}
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
            <div className="flex flex-col gap-1.5 text-sm">
              <div className="flex items-baseline gap-2">
                <span className="font-semibold text-slate-500 w-16 text-xs uppercase">
                  From:
                </span>
                <span className="font-medium text-slate-900">
                  Zedu Solutions Team &lt;solutions@zedu.work&gt;
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-semibold text-slate-500 w-16 text-xs uppercase">
                  To:
                </span>
                <span className="text-slate-700">
                  {current.recipientName} &lt;{current.recipientEmail}&gt;
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-semibold text-slate-500 w-16 text-xs uppercase">
                  Subject:
                </span>
                <span className="font-semibold text-slate-900">
                  Confirmed: Your 30-Minute Zedu Walkthrough with Our Team
                </span>
              </div>
            </div>
          </div>

          {/* Email Canvas Render */}
          <div className="bg-slate-100/70 p-4 sm:p-8 flex justify-center overflow-x-auto">
            <div
              id="email-canvas"
              className="transition-all duration-300"
              style={{
                width: device === "mobile" ? "375px" : "100%",
                maxWidth: device === "mobile" ? "375px" : "640px",
              }}
            >
              <DemoBookingEmail {...current} />
            </div>
          </div>
        </div>

        {/* Feature Explanations for PR Review */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-purple-50 text-[#6f4ef6] flex items-center justify-center font-bold text-sm mb-3">
              <Calendar className="w-4 h-4" />
            </div>
            <h3 className="font-semibold text-slate-900 text-sm">
              Direct & Formal Confirmation
            </h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              States the 30-minute duration, meeting link, and attendee details
              immediately. No ambiguity or vague filler.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm mb-3">
              <Clock className="w-4 h-4" />
            </div>
            <h3 className="font-semibold text-slate-900 text-sm">
              Clear 3-Part Agenda
            </h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Sets expectations clearly: 10 mins tour, 10 mins cohort
              customization, 10 mins pricing & onboarding rollout.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm mb-3">
              <Mail className="w-4 h-4" />
            </div>
            <h3 className="font-semibold text-slate-900 text-sm">
              Cross-Client Compatibility
            </h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Built with HTML table standards and inline CSS so it renders
              consistently in Gmail, Apple Mail, and Outlook.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
